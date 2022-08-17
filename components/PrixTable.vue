<i18n lang="yaml">
  en:
    no_tournaments: "there are no active tournaments at the moment"
  ru:
    no_tournaments: "в данный момент нет активных турниров"
</i18n>
<template>
  <div class="flex flex_justify_center flex_column flex_align_center">
    <div class="input__groups mt-1">
      <div class="input__group border_gray_blue p-0">

        <DropDown v-if="tournamentList" :default-first="true" :list="tournamentList"
                  @dropdownPick="handleDropdownPick"/>
        <!--        <input class="input__text outline_none" type="text">-->
      </div>

      <div class="input__group border_gray">
        <img src="~/assets/images/Search.svg" alt="#">
        <input class="input__text ml-1 outline_none" type="search" v-model="options.filteredName">
      </div>
    </div>
    <div class="table__wrapper">
      <client-only>
        <div class="no__tournaments" v-if="!tournamentList">
          <h3 >{{ $t('no_tournaments') }}</h3>
        </div>
        <div v-else>
          <DesktopTable v-if="!isMobile && displayedList" :displayed-list="displayedList"/>
          <MobileTable class="mt-2" v-else-if="isMobile && displayedList"
                       :displayed-list="displayedList"/>


          <div class="table__pagination">
            <div class="paginator">
              <button class="paginator__btn paginator__btn_prev" @click.prevent="paginate('prev')"><img
                src="~/assets/images/vector_stroke.svg" alt="#">
              </button>
              <span class="paginator__pages">{{ options.current_page }} / {{ maxPages }} </span>
              <button class="paginator__btn paginator__btn_next" @click.prevent="paginate('next')"><img
                src="~/assets/images/vector_stroke.svg" alt="#">
              </button>
            </div>
          </div>

        </div>
      </client-only>


    </div>
  </div>
</template>

<script>
import DropDown from "./DropDown";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import debounce from 'debounce';

export default {
  name: "PrixTable",
  components: {DesktopTable, MobileTable, DropDown},

  data() {
    return {
      filteredList: [],
      windowWidth: null,
      tournamentList: null,
      scoreList: [],
      tournamentId: null,
      appLoaded: false,
      options: {
        row_limit: 10,
        offset: 0,
        current_page: 1,
        filteredName: null,
      }
    }
  },
  watch: {
    'options.filteredName': function (newVal, oldVal) {
      this.filterName()
    }
  },
  computed: {
    isMobile() {
      if (process.client) {
        const mobileWidth = 928;
        return this.windowWidth <= mobileWidth
        // let width = window.innerWidth
      }
      return false;
    },
    displayedList() {
      // console.log(this.listOffset, this.options.row_limit, this.scoreList.slice(this.listOffset, this.options.row_limit))
      if (!this.scoreList) {
        return [];
      }
      if (this.filteredList.length >= 0 && this.options.filteredName) {
        return this.filteredList.slice(this.listOffset, this.listOffset + this.options.row_limit);
      }

      return this.scoreList.slice(this.listOffset, this.listOffset + this.options.row_limit)
    },

    listOffset() {
      if (this.options.current_page === 1) {
        return 0;
      }
      return this.options.row_limit * (this.options.current_page - 1);
    },

    maxPages() {
      if (this.filteredList.length > 0) {
        return Math.ceil(this.filteredList.length / this.options.row_limit);
      }
      return Math.ceil(this.scoreList.length / this.options.row_limit);
    }
  },
  methods: {
    resetOffset() {
      this.options.current_page = 1;
    },

    async handleDropdownPick(data) {
      // console.log('DD pick', data)
      if (this.tournamentId !== data.id) {
        this.tournamentId = data.id
        await this.fetchTournamentTable(this.tournamentId)
      }
    },

    async fetchTournamentTable(id) {
      try {
        const {data} = await this.$axios.get('/tournaments/scores', {params: {id}});
        if (data) {
          if (data.error) {
            console.error(data.message)
          }
          this.scoreList = data;
          this.fillColors();
        }
      } catch (e) {
        console.error(e)
      }
    },

    filterName: debounce(function (e) {
      this.options.current_page = 1;
      // if (!this.options.filteredName || this.options.filteredName === "") {
      //   this.resetOffset()
      // }
      if (!this.options.filteredName) {
      }

      this.filteredList = this.scoreList.filter(item => {
        return item.name
          .trim()
          .split(" ")
          .join()
          .toLowerCase()
          .includes(this.options.filteredName.trim().toLowerCase())
      })
    }, 500),

    paginate(direction) {
      if (direction === 'next') {
        if (this.options.current_page === this.maxPages) {
          return;
        }
        this.options.current_page += 1;
        return;
      } else if (direction === 'prev') {
        if (this.options.current_page <= 1) {
          return;
        } else {
          this.options.current_page -= 1;
        }
      }
    },

    randomBackgroundColor() {
      const rand = () => Math.floor(Math.random() * 255).toString();
      return `rgba(${rand()}, ${rand()}, ${rand()}, .8)`;
    },

    fillColors() {
      this.scoreList = this.scoreList.map(item => {
        if (item.avatar) {
          return item
        }
        return {...item, color: this.randomBackgroundColor()}
      })
    },
    onResize() {
      window.addEventListener('resize', ev => {
        this.windowWidth = window.innerWidth
      })
    },
    async getTournamentList() {
      try {
        const {data} = await this.$axios.get('/tournaments/list')
        if (data) {
          if (data.error) {
            console.error(data.message)
            return
          }
          if (data && data.length > 0) {
            this.tournamentList = data.map(item => {
              return {
                value: this.$i18n.locale === 'ru' ? item.title : item.title_en ?? item.title,
                id: item.id
              }
            });
          }
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
  async created() {
    if (process.client) {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', this.onResize)
    }

    await this.getTournamentList();
    // console.log(this.fillColors())
    // this.virtualList = this.scoreList.slice(this.options.offset, this.options.row_limit)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },


}
</script>

<style lang="scss" scoped>


.border {
  border: 1px solid #000;

  &_gray {
    border: 1px solid #B0BAC9;
  }

  &_gray_blue {
    border: 0.5px solid rgba(27, 60, 102, 0.2);
  }
}

.outline_none {
  outline: none;
}

.input__groups {
  display: flex;
  flex-wrap: wrap;

  * {
    box-sizing: border-box;
  }

  .input__group {
    margin-right: 20px;
    width: 355px;
    padding: 10px 20px;
    //box-shadow: 0px 2px 2px rgba(39, 39, 39, 0.65);
    border-radius: 8px;
    display: flex;

    .input__text {
      font-family: Manrope;
      font-style: normal;
      font-weight: 600;
      border: none;
      width: 100%;
      //width: 355px;
      //padding: 13px 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}


.table__pagination {
  margin-top: 24px;
  width: 100%;
}

.paginator {
  display: flex;

  &__btn {
    background: #F4F5F7;
    width: 32px;
    height: 32px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;

    &_next {
      img {
        transform: rotate(180deg);
      }
    }

    img {
      line-height: 32px;
    }
  }

  &__pages {
    display: flex;
    align-items: center;
    margin: 0 8px;
  }


}

.table__wrapper {
  height: 685px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 928px) {
  .table__wrapper {
    height: auto;
    min-height: 568px;
    width: 100%;
  }

  .paginator {
    justify-content: center;
  }
  .input__group {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .input__groups {
    padding: 0 20px;
    justify-content: center;
  }


  .input__group {
    margin-right: 0 !important;
    width: 100% !important;


    &:nth-child(n) {
      margin-top: 15px;
    }
  }

}
.no__tournaments {
  margin: auto;
  h3 {
    font-weight: 500;
  }
}
</style>
