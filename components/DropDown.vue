<template>
  <div class="dropdown" v-click-outside="closeList">
    <div class="dropdown__wrapper relative">
      <div class="dropdown__active"><a class="active__element cursor_pointer"
                                       @click.prevent="expandList">{{ activeElement }}</a></div>
      <div class="dropdown__control">
        <button class="control" :class="{opened}" @click="expandList">
          <img src="~/assets/images/vector_stroke.svg" alt="#">
        </button>
      </div>
    </div>
    <div class="dropdown__items" v-show="opened">
      <div class="item" v-for="item in list" :key="item.id ? item.id: item.value + Date.now()">
        <a class="item__link" @click.prevent="pickItem(item)">{{ item.value }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ["list", "defaultFirst"],
  data() {
    return {
      opened: false,
      pickedElement: null,
      pickedElementId: null,
      // list: [
      //   {value: "Весенний грандпри", id: 1},
      //   {value: "Весенний грандпри 2", id: 2},
      //   {value: "Весенний грандпри грандпри грандпри 5151", id: 3},
      //   {value: "Весенний грандпри 4", id: 4},
      // ]
    }
  },
  computed: {
    activeElement() {
      if (this.list) {
        if (this.defaultFirst && !this.pickedElement) {
          this.emitPick(this.list[0].id, this.list[0].value)
          return this.list[0].value;
        }
        return this.pickedElement
      }
      return 'нет турниров'
    }
  },
  methods: {
    expandList() {
      this.opened = !this.opened
    },
    emitPick(id, val) {
      this.$emit('dropdownPick', {value: val, id: id})
    },
    pickItem(elem) {
      this.pickedElement = elem.value
      this.pickedElementId = elem.id
      this.emitPick(elem.id, elem.value)
      this.expandList()
    },
    closeList(evt) {
      evt.stopPropagation();
      this.opened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  //padding: 13px 20px;
  //background: #DEECF7;
  //display: flex;
  width: 100%;
  //z-index: 200;
  //justify-content: space-between;

  &__wrapper {
    position: relative;
    padding: 10px 20px;
    border-radius: 8px;
    background: #DEECF7;
    z-index: 1000;
    display: flex;
    width: 100%;
    z-index: 200;
    justify-content: space-between;
  }

  &__items {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 50px;
    padding-bottom: 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(39, 39, 39, 0.1);
    border-radius: 8px;
    margin-top: -6px;
    margin-bottom: -6px;
    overflow: hidden;
    width: 100%;


    .item {
      &:last-child {
        .item__link {
          border-bottom: 0.5px solid transparent;
        }
      }
      &__link {
        color: #1B3C66;
        text-decoration: none;
        display: block;
        margin: 0 18px 0 18px;
        transition: .1s;
        cursor: pointer;
        padding: 10px 0;
        border-bottom: 0.5px solid #eee;



        &:hover {
          background: darken(#fafafa, 5);
        }
      }
    }
  }

  &__active {
    width: 100%;
    font-weight: bold;
  }

  &__control {
    .control {
      z-index: 300;
      border: none;
      background: none;

      img {
        transition: .1s;
        transform: rotate(-90deg);
      }

      &.opened {
        img {
          transition: .1s;
          transform: rotate(90deg);
        }
      }
    }
  }
}

.active__element {
  vertical-align: middle;
}
</style>
