<i18n lang="yaml">
en:
  pt: "pt."
  tournament: "tournament"
  total: "Total"
  name: "Name"
  no_res: "No results"
ru:
  pt: "очк"
  tournament: "турнир"
  total: "Общая сумма"
  name: "Имя"
  no_res: "Нет результатов"
</i18n>

<template>
  <div class="desktop__table">
    <table class="prix-table mt-4">
      <thead>
      <tr>
        <th>#</th>
        <th class="text_left">{{ $t('name') }}</th>
        <th>1 {{ $t('tournament') }}</th>
        <th>2 {{ $t('tournament') }}</th>
        <th>3 {{ $t('tournament') }}</th>
        <th>4 {{ $t('tournament') }}</th>
        <th>5 {{ $t('tournament') }}</th>
        <th>{{ $t('total') }}</th>
      </tr>
      </thead>
      <tbody class="table__body">
      <tr v-for="item in displayedList" :key="item.name + item.place + Date.now()">
        <td>{{ item.place }}</td>
        <td class="text_left">
          <div class="profile__name">
            <img v-if="item.avatar" class="profile__avatar" :src="item.avatar" alt="">
            <span v-else-if="item.color" class="profile__avatar"
                  :style="{background: `${item.color}`}">{{ item.name|firstLetter }}</span>
            <span v-else class="profile__avatar"
                  :style="{background: `${randomBackgroundColor()}`}">{{ item.name|firstLetter }}</span>
            <a class="profile__link" :href="item.profile_link" target="_blank">{{ item.name }}</a>
          </div>
        </td>
        <td v-for="idx in 5" :key="idx">

          {{
            item.tournaments_score.length > idx - 1
              ? item.tournaments_score[idx - 1] > 0
                ? item.tournaments_score[idx - 1] + " " + $t('pt')
                : "---"
              : "---"
          }}

        </td>
        <td><span
          :class="{
          gold: item.place === 1,
          silver: item.place === 2,
          bronze: item.place === 3,
          }">{{ item.total + " " + $t('pt') }}</span></td>
      </tr>
      </tbody>
    </table>
    <div v-if="displayedList && displayedList.length === 0" class="overlay">
      <span>{{ $t('no_res') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopTable",
  props: ['displayedList'],
  filters: {
    firstLetter(value) {
      if (value) {
        let val = value.trim()
        return val[0].toUpperCase();
      }
    }
  },
  methods: {
    randomBackgroundColor() {
      const rand = () => Math.floor(Math.random() * 255).toString();
      return `rgba(${rand()}, ${rand()}, ${rand()}, .8)`;
    },
  }
}
</script>

<style lang="scss" scoped>
@mixin badge($color: #eee) {
  padding: 5px 12px;
  background: $color;
  border-radius: 8px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  min-width: 80px;
}

.prix-table {
  width: 856px;
  border-collapse: collapse;

  th {
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    color: #1B3C66;
    padding-bottom: 34px;
  }

  thead {
    box-shadow: inset 0px -1px 0px #C9CFDA;
  }

  tbody {
    tr {
      height: 48px;
      transition: .1s;

      &:hover {
        background: darken(#F4F5F7, 10);
      }

      &:nth-child(even) {
        background: #F4F5F7;

        &:hover {
          background: darken(#F4F5F7, 10);
        }
      }
    }
  }

  tbody:before {
    content: "@";
    display: block;
    line-height: 32px;
    text-indent: -99999px;
  }

  td {
    font-family: Manrope;
    font-style: normal;
    font-size: 14px;
    text-align: center;

    .gold {
      @include badge(#ffef62);
    }

    .silver {
      @include badge(#C3E1EB);
    }

    .bronze {
      @include badge(#DFB590);
    }
  }
}

.profile__avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: bold;
  font-size: 11px;
  color: #fff;
}

.profile__name {
  display: flex;
  align-items: center;
}

.desktop__table {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  //position: absolute;
}

.profile__link {
  color: #0066C5;
  text-decoration: none;
}
</style>
