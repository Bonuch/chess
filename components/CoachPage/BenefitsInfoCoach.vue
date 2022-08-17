<template>
  <div class="benefit-info">
    <div class="benefit-info__wrapper">
      <div @mouseenter="startAnimBag"
           :class="{'animation-bag':isAnimBag}">
        <img src="@/static/img/coach-page/anim-bag.png" alt="" class="benefit-info__img anim-bag"></div>
      <h3 class="benefit-info__title" v-html="$t('coach_cond1')"></h3>

    </div>
    <div class="benefit-info__wrapper"
         @mouseenter="startAnimCalendar"
         :class="{'animation-calendar':isAnimCalendar}">
      <img src="@/static/img/calendar.png" alt="" class="benefit-info__img anim-calendar">
      <h3 class="benefit-info__title" v-html="$t('coach_cond2')"></h3>

    </div>
    <div class="benefit-info__wrapper">
      <div @mouseenter="startAnimNotebook"
           :class="{'animation-notebook':isAnimNotebook}">
        <img src="@/static/img/coach-page/anim-notebook.png" alt="" class="benefit-info__img anim-notebook"></div>
      <h3 class="benefit-info__title" v-html="$t('coach_cond3')"></h3>

    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitsInfoCoach",
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
      animBag: false,
      animCalendar: false,
      animNotebook: false,
    }
  },
  methods: {
    changeLocale(e) {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    },
    startAnimBag(e) {
      if (e) {
        this.animBag = true
        setTimeout(() => {
          this.animBag = false
        }, 2000)
      }
    },
    startAnimCalendar(e) {
      if (e) {
        this.animCalendar = true
        setTimeout(() => {
          this.animCalendar = false
        }, 2000)
      }
    },
    startAnimNotebook(e) {
      if (e) {
        this.animNotebook = true
        setTimeout(() => {
          this.animNotebook = false
        }, 2000)
      }
    },
  },
  computed: {
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales;
    },
    isAnimBag() {
      return this.animBag
    },
    isAnimCalendar() {
      return this.animCalendar
    },
    isAnimNotebook() {
      return this.animNotebook
    },
  }
}
</script>

<style scoped lang="scss">

</style>
