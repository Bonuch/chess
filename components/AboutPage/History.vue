<template>
  <section class="history">
    <kinesis-container
      style="position:absolute; width: 100%; overflow: hidden;"
      event="scroll"
      easing="linear">
      <kinesis-element
        class="history__decoration-chess"
        tag="img"
        :src="chess"
        :strength="200"
      />
    </kinesis-container>
    <div class="container">
      <div class="history__content">
        <div class="history__content-left">
          <img src="@/static/img/about-page/creater.png" alt="creater" class="history__content-left__img">
          <p class="history__content-left__description" v-html="$t('about_ceo')"></p>
        </div>
        <div class="history__content-right">
          <h2 class="history__content-right__title">{{ $t('about_year') }}</h2>
          <h3 class="history__content-right__subtitle">{{ $t('about_year_what') }}</h3>
          <p class="history__content-right__description" v-html="$t('about_now')"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chess from 'static/img/chess-decoration.png';


export default {
  name: "History",
  data() {
    return {
      chess,
    }
  }
}
</script>


<style lang="scss">
.history {
  &__content {
    display: flex;
    justify-content: center;
    gap: 0 100px;
    align-items: center;
    max-width: 1240px;
    padding: 0 20px;
    position: relative;
    z-index: 30;
    @media (max-width: 1199px) {
      gap: 0 30px;

    }
    @media (max-width: 860px) {
      flex-direction: column;
    }
    &-left {
      width: 43%;
      display: flex;
      flex-direction: row-reverse;
        @media (max-width: 860px) {
            width: 100%;
            justify-content: center;
        }

        @media (max-width: 480px) {
            img {
                max-width: 70%;
                height: auto;
            }
        }
      &__description {
        font-size: 12px;
        margin-top: 100px;
        margin-right: -40px;
      }
    }

    &-right {
      width: 57%;
      max-width: 440px;
      @media (max-width: 767px) {
        width: 100%;
      }
      &__title {
        font-size: 48px;
        line-height: 1;
        font-weight: 700;
      }

      &__subtitle {
        font-size: 28px;
        line-height: 1.4;
        font-weight: 700;
      }

      &__description {
        font-size: 16px;
        line-height: 1.55;
        font-weight: 500;
      }
    }
  }
}
.history__decoration-chess {
  position: relative;
  left: calc(50% - 600px + 1010px);
  width: 340px;
  top: 70%;
}
</style>
