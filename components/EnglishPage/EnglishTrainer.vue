<template>
  <section class="english-trainer">
    <div class="container">
      <div class="english-trainer__content">
        <div class="english-trainer__content-video">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/539284268?h=0e2466349e" width="240" height="420" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="english-trainer__content-descr">
          <div class="english-trainer__content-descr__title">{{$t('eng_kate')}}</div>
          <div class="english-trainer__content-descr__text" v-html="$t('eng_kate_rate')"></div>
          <div class="english-trainer__content-descr__about">{{$t('eng_kate_txt')}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EnglishTrainer"
}
</script>

<style scoped lang="scss">
.english-trainer {
  margin-top: 100px;
  margin-bottom: 150px;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 80px;
    @media (max-width: 1199px) {
      gap: 0 40px;
    }
    @media (max-width: 767px) {
      gap: 20px;
      flex-direction:column;
    }
    &-video {

    }
    &-descr {
      @media (max-width: 767px) {
        text-align: center;
        padding: 0 15px;
      }
      &__title {
        font-size: 23px;
        line-height: 1.4;
        font-weight: 700;
        margin: 0;
        margin-bottom: 25px;
      }
      &__text {
        font-size: 18px;
        line-height: 1.4;
        font-weight: 700;
        margin: 0;
        margin-bottom: 25px;
      }
      &__about {
        font-size: 18px;
        line-height: 1.4;
        font-weight: 500;
        margin: 0;
        max-width: 480px;
        @media (max-width: 767px) {
          text-align: left;
        }
      }
    }
  }
}
</style>
