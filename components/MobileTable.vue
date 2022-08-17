<i18n lang="yaml">
en:
  pt: "pt."
  tournament: "tournament"
  total: "Total"
  profile: "to profile"
  no_res: "No results"
ru:
  pt: "очк"
  tournament: "турнир"
  total: "Общая сумма"
  profile: "перейти в профиль"
  no_res: "Нет результатов"
</i18n>
<template>
  <div class="mobile__table">
    <MobileExpander v-for="item in displayedList" :key="item.name">

      <template v-slot:title>
        <div class="flex flex_align_center title">

          <span class="place">{{ item.place }}</span>

          <div class="flex align-items-center flex_justify_between flex_1">
            <div class="name profile__name">
              <img v-if="item.avatar" class="profile__avatar" :src="item.avatar" alt="">
              <span v-else-if="item.color" class="profile__avatar"
                    :style="{background: `${item.color}`}">{{ item.name|firstLetter }}</span>
              <span v-else class="profile__avatar"
                    :style="{background: `${randomBackgroundColor()}`}">{{ item.name|firstLetter }}</span>
              {{ item.name }}
<!--              <a class="profile__link" :href="item.profile_link" target="_blank"></a>-->
            </div>
            <div class="score"><span class="badge" :class="{
                                     badge_gold: item.place === 1,
                                     badge_silver: item.place === 2,
                                     badge_bronze: item.place === 3,
                                     }">{{ item.total + ' ' + $t('pt') }}</span></div>
          </div>
        </div>
      </template>

      <template v-slot:content>
        <div class="expand">
          <div class="row" v-for="idx in 5">
            <div class="expand__title">{{ idx + " " + $t('tournament')}}</div>
            <div class="expand__score">
              {{
                item.tournaments_score.length > idx - 1
                  ? item.tournaments_score[idx - 1] > 0
                    ? item.tournaments_score[idx - 1] + " " + $t('pt')
                    : "---"
                  : "---"
              }}
            </div>
          </div>
                    <div class="row">
                      <a class="profile__link" :href="item.profile_link" target="_blank">{{ $t('profile') }}</a>
                    </div>
        </div>
      </template>

    </MobileExpander>
    <div v-if="displayedList && displayedList.length === 0" class="overlay">
      <span>{{ $t('no_res') }}</span>
    </div>
  </div>
</template>

<script>
import MobileExpander from "./MobileExpander";

export default {
  name: "MobileTable",
  components: {MobileExpander},
  props: ['displayedList'],
  data() {
    return {}
  },
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
.mobile__table {
  width: 100%;
}

.place {
  min-width: 35px;
  margin-right: 12px;
}

.score {

}

.expand {

}

@mixin badge($color: #eee) {
  background: $color;
  border-radius: 8px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  min-width: 80px;
}

.badge {
  padding: 5px 12px;
}

.badge_gold {
  @include badge(#ffef62);
}

.badge_silver {
  @include badge(#C3E1EB);
}

.badge_bronze {
  @include badge(#DFB590);
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


.mobile__table {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  //position: absolute;
}

.profile__link {
  margin: auto;
  text-decoration: none;
  color: #0066C5;
}

</style>
