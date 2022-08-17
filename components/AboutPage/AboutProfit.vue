<template>
  <section class="profit">
    <kinesis-container
      class="profit__decoration"
      event="scroll"
      easing="linear">
      <kinesis-element
        class="profit__decoration-pawn"
        tag="img"
        :src="pawn"
        :strength="700"
      />
    </kinesis-container>
    <div class="container"
         @wheel="handleScroll">
      <div class="profit__content">
        <h2 class="profit__content-title"> {{$t('about_profit')}}</h2>
        <div class="profit__content-decoration">
          <img src="@/static/img/arrow-spiral.png" alt="arrow-spiral" class="profit__content-decoration__arrow">
          <img src="@/static/img/about-page/pawn-about.png" alt="pawn-about" class="profit__content-decoration__pawn">
          <img src="@/static/img/about-page/horse-about.png" alt="horse-about" class="profit__content-decoration__horse">
          <img :src="imgCloud[$i18n.locale]" alt="decoration-quote" class="profit__content-decoration__quote">
        </div>
        <div class="profit__content-list">
          <transition name="fade1">
          <div class="profit__content-list__tag" v-if="show">
            <span class="profit__content-list__number">1</span>
            <h2 class="profit__content-list__title">{{$t('about_tag_1')}}</h2>
          </div>
          </transition>
          <transition name="fade2">
           <div class="profit__content-list__tag" v-if="show">
            <span class="profit__content-list__number">2</span>
            <h2 class="profit__content-list__title">{{$t('about_tag_2')}}</h2>
          </div>
          </transition>
          <transition name="fade3">
           <div class="profit__content-list__tag" v-if="show">
            <span class="profit__content-list__number">3</span>
            <h2 class="profit__content-list__title">{{$t('about_tag_3')}}</h2>
          </div>
          </transition>
          <transition name="fade4">
           <div class="profit__content-list__tag" v-if="show">
            <span class="profit__content-list__number">4</span>
            <h2 class="profit__content-list__title">{{$t('about_tag_4')}}</h2>
          </div>
          </transition>
          <transition name="fade5">
           <div class="profit__content-list__tag" v-if="show">
            <span class="profit__content-list__number">5</span>
            <h2 class="profit__content-list__title">{{$t('about_tag_5')}}</h2>
          </div>
          </transition>
        </div>
        <div class="profit__content-button">
          <nuxt-link to="/" class="profit__content-btn">{{$t('about_join_free')}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pawn from "static/img/pawn-decoration.png";
import imgCloudru from 'static/img/about-page/quote_ru.png';
import imgClouden from 'static/img/about-page/quote_en.png';

export default {
  name: "Profit",
  data() {
    return {
      show: false,
      pawn,
      imgCloud: {
        ru: imgCloudru,
        en: imgClouden
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    if(document.documentElement.clientWidth < 849) {
      this.show = true
    }
  },
  methods: {
    handleScroll: function (e) {
        if (!e.target || !e.target.scrollingElement)  return;
      let top = e.target.scrollingElement.scrollTop;
      if(e) {
        if (top >= 1100 ) {
          this.show = true
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.fade1-enter-active, .fade1-leave-active {
  transition: opacity .7s; transform: scale(1);}
.fade1-enter, .fade1-leave-to {
  opacity: 0; transform: scale(0.8);}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 1.5s; transform: scale(1);}
.fade2-enter, .fade2-leave-to {
  opacity: 0; transform: scale(0.8);}

.fade3-enter-active, .fade3-leave-active {
  transition: opacity 2.3s; transform: scale(1);}
.fade3-enter, .fade3-leave-to {
  opacity: 0; transform: scale(0.8);}

.fade4-enter-active, .fade4-leave-active {
  transition: opacity 3.1s; transform: scale(1);}
.fade4-enter, .fade4-leave-to {
  opacity: 0; transform: scale(0.8);}

.fade5-enter-active, .fade5-leave-active {
  transition: opacity 3.9s; transform: scale(1);}
.fade5-enter, .fade5-leave-to {
  opacity: 0; transform: scale(0.8);}
.profit {
  position: relative;
  margin-top: 50px;
  margin-bottom: 100px;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
      position: relative;
      z-index: 11;
    }
    &-decoration {
      margin-left: 17%;
      &__arrow {
        transform: scale(1,-1) rotate(30deg);
        animation: 5s aboutArrow infinite ease-in-out;
        margin-right: -75px;
      }
      &__horse {
        animation: 5s aboutHorse infinite ease-in-out;
      }
      &__quote {}
    }
    &-list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px 30px;
      margin-top: 40px;

      &__tag {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 15px;
        background: #F1F7FC;
        border-radius: 10px;
        padding: 0 30px;
      }
      &__number {
        font-weight: 900;
        font-size: 36px;
        color: #8AA3C2;
      }
      &__title {
        font-size: 18px;
        color: #1B3C66;
      }
    }
    &-button {
      margin-top: 40px;
      padding: 15px 40px;
      @media(max-width: 767px) {
        padding: 10px 10px;
        margin-top: 20px;
      }
    }
    &-btn {
        display: inline-block;
        text-align: center;
      color: #000000;
      font-size: 20px;
      line-height: 1.55;
      font-weight: 700;
      border-width: 1px;
      border-radius: 10px;
      background-color: #d6d015;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
      padding: 15px 40px;
      box-shadow: 0 15px 44px 0 rgb(166 166 166 / 50%);
      transition: .3s;
      &:hover {
        transition: .3s;
        background-color: #498BDf;
        color: #ffffff;
      }
      @media(max-width: 767px) {
        font-weight: 400;
        padding: 10px 15px;
      }
    }
  }
}
@keyframes aboutHorse {
0%{transform: rotate(0deg)}
20%{transform: rotate(10deg)}
40%{transform: rotate(0deg)}
}
@keyframes aboutArrow {
0%{transform: scale(1, -1) rotate(30deg)}
20%{transform: scale(1, -1) rotate(40deg)}
40%{transform: scale(1, -1) rotate(30deg)}
}

.profit__decoration {
  position:absolute;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  &-pawn {
    left: 0;
    width: 320px;
    top: 70%;
  }
}

@media all and (max-width: 1300px) {
    .profit__decoration-pawn {
        display: none;
    }
}

@media all and (max-width: 1100px) {
    .profit {
        .container {
            padding: 0 16px;
        }

        &__content {
            &-decoration {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: center;
                gap: 12px;
                margin: 0 16px;
            }
        }
    }
}

    @media all and (max-width: 767px) {
        .profit__content-decoration {
            img {
                max-width: 100%;
                height: auto;
            }
        }

        .profit__content-list {
            flex-direction: column;
            align-items: stretch;

            &__tag {
                justify-content: flex-start;
            }
        }
    }

@media all and (max-width: 390px) {
    .profit__content-decoration {
        display: none;
    }
}
</style>
