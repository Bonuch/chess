<template>
  <section class="trial">
    <div class="trial__decoration">
      <img src="@/static/img/trial-bg.png" alt="" class="trial__decoration-bg">
      <img src="@/static/img/horse.png" alt="" class="trial__decoration-horse">
      <img src="@/static/img/pawn.png" alt="" class="trial__decoration-pawn">
      <img src="@/static/img/arrow-spiral.png" alt="" class="trial__decoration-arrow">
    </div>
    <div class="container">
      <div class="trial__wrapper">
        <h2 class="trial__title" v-html="$t('main_signup_free')"></h2>
        <a href="#trial" class="trial__btn">
          <p class="trial__btn-text">{{ $t('main_want_lesson') }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Trial",
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
    }
  },
  methods: {
    changeLocale(e) {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  }
}
</script>

<style lang="scss">
.trial {
  height: 307px;
  position: relative;
overflow: hidden;
  &__decoration {
      display: flex;
      justify-content: center;
    &-bg {
      position: absolute;
      width: 2380px;
      //left: -350px;
    }

    &-horse {
      position: absolute;
      z-index: 4;
      top: 10px;
      left: calc(50% - 600px + 842px);
      width: 281px;
      animation: 2.7s horseFell infinite ease;
    }

    &-pawn {
      position: absolute;
      z-index: 6;
      top: 100px;
      left: calc(50% - 600px + 659px);
      width: 229px;
      animation: 2.7s pawnFell infinite ease-in-out;
    }

    &-arrow {
      position: absolute;
      z-index: 5;
      top: 135px;
      left: calc(50% - 600px + 488px);
      width: 288px;
    }
  }

  &__title {
    position: absolute;
    color: #ffffff;
    z-index: 3;
    top: 65px;
    left: calc(50% - 600px + 120px);
    width: 630px;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    margin: 0;
    @media (max-width: 1000px) {
      font-size: 36px;
      width: 500px;
      left: 20px;
    }
    @media (max-width: 767px) {
      font-size: 28px;
      width: 370px;
    }
    @media (max-width: 400px) {
      font-size: 22px;
      width: 300px;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    z-index: 7;
    top: 205px;
    left: calc(50% - 600px + 120px);
    width: 240px;
    height: 62px;
    border-width: 1px;
    border-radius: 10px;
    background-color: #d6d015;
    transition: .3s;
    animation: btnScale 3s infinite ease-in-out;
    &:hover {
      transition: .3s;
      background-color: #ffffff;
    }
    @media (max-width: 1000px) {
      left: 20px;
    }
    @media (max-width: 767px) {
      left: 13%;
      top: 170px;
    }
    &-text {
      color: #000000;
      font-size: 20px;
      line-height: 1.55;
      font-weight: 700;
      margin: 0;
    }
  }
}

@keyframes horseFell {
  50% {
    transform: rotate(10deg);
  }
}

@keyframes pawnFell {
  50% {
    transform: rotate(-10deg);
  }
}

@keyframes btnScale {
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.15);
  }
  40% {
    transform: scale(1);
  }
}
</style>
