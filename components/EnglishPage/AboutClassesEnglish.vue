<template>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title">{{ $t('main_how_lessons') }}</h2>
      <p class="about__text">{{ $t('main_lesson_descr_1') }}</p>
      <p class="about__text">{{ $t('main_lesson_descr_2') }}</p>
      <div class="about__wrapper">
        <AboutClassesEnglishInfo/>
        <AboutClassesVideo/>
      </div>
    </div>
    <div class="about__decoration">
      <img :src="imgCloud[$i18n.locale]" alt="" class="about__decoration-smile">
      <img src="@/static/img/king.png" alt="" class="about__decoration-king">
    </div>
  </section>
</template>

<script>
import AboutClassesEnglishInfo from "@/components/EnglishPage/AboutClassesEnglishInfo";
import AboutClassesVideo from "@/components/AboutClasses/AboutClassesVideo";
import imgCloudru from 'static/img/english-page/english.png';
import imgClouden from 'static/img/private_lessons_only.png';

export default {
  name: "AboutClassesEnglish",
  components: {AboutClassesVideo, AboutClassesEnglishInfo},
  data() {
    return {
      imgCloud: {
        ru: imgCloudru,
        en: imgClouden
      }
    }
  },
}
</script>

<style scoped lang="scss">
.about {
    position: relative;
    height: 800px;
    overflow: hidden;
    @media all and (max-width: 1150px) {
        height: unset;
        margin-top: 100px;
        margin-bottom: 150px;
    }
    @media all and (max-width: 600px) {
        margin-bottom: 0;
    }
    &__container {
        max-width: 1270px;
        margin: 0 auto;
    }
    &__title {
        text-align: center;
        font-size: 48px;
        line-height: 1;
        font-weight: 700;
        @media (max-width: 767px) {
            font-size: 28px;
            padding: 0 15px;
        }
    }
    &__text {
        text-align: center;
        font-size: 18px;
        line-height: 1.55;
        font-weight: 700;
        margin: 0;
        @media (max-width: 767px) {
            padding: 0 15px;
            font-size: 16px;
        }
    }
    &__wrapper {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        @media (max-width: 1150px) {
            flex-direction: column-reverse;
        }
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
    &__decoration {
        &-smile {
            position: absolute;
            z-index: 11;
            top: 625px;
            left: calc(50% - 600px + 80px);
            max-width: 728px;
            @media (max-width: 1199px) {
                width: 70%;
                left: 45%;
                transform: translateX(-50%) rotate(4deg);
                z-index: -1;
            }
            @media all and (max-width: 1150px) {
                display: none;
            }
        }
        &-king {
            position: absolute;
            z-index: 10;
            top: 535px;
            left: calc(50% - 600px + 880px);
            max-width: 270px;
            animation: king-move 4s infinite ease;
            @media (max-width: 1199px) {
                width: 23vw;
            }
            @media (max-width: 767px) {
                display: none;
            }
        }
    }
}
@keyframes king-move {
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(-7%);
    }
    100% {
        transform: translateY(0%);
    }

}
</style>
