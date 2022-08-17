<template>
  <section class="benefit-why">
    <div class="container">
      <div class="benefit-why__content">
        <div class="benefit-why__content-top">
          <img src="@/static/img/coach-page/arrow.png" alt="" class="benefit-why__content-img">
          <h2 class="benefit-why__content-title" v-html="$t('coach_profit')"></h2>
        </div>
        <div class="benefit-why__content-bottom">
          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-1.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('search') }}</h4>
              <p class="benefit-why__content-bottom__text" v-html="$t('coach_adv_search')"></p>
            </div>
          </div>
          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-4.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('income') }}</h4>
              <p class="benefit-why__content-bottom__text" v-html="$t('coach_adv_inc')"></p>
            </div>
          </div>

          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-2.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('materials') }}</h4>
              <p class="benefit-why__content-bottom__text" v-html="$t('coach_adv_mat')"></p>
            </div>
          </div>
          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-5.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('job_place') }}</h4>
              <p class="benefit-why__content-bottom__text" v-html="$t('coach_adv_place')"></p>
            </div>
          </div>
          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-3.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('rating') }}</h4>
              <p class="benefit-why__content-bottom__text" v-html="$t('coach_adv_rat')"></p>
            </div>
          </div>
          <div class="benefit-why__content-bottom__block">
            <img src="@/static/img/coach-page/img-6.png" alt="" class="benefit-why__content-bottom__img">
            <div class="benefit-why__content-bottom__wrapper">
              <h4 class="benefit-why__content-bottom__title">{{ $t('trainings') }}</h4>
              <p class="benefit-why__content-bottom__text">{{ $t('coach_adv_train') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenefitWhy"
}
</script>

<style scoped lang="scss">
.benefit-why {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #ffffff;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    padding: 0 20px;

    &-top {
      display: flex;
      justify-content: space-between;
      @media(max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
      }
    }

    &-title {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
      margin: 0;
      width: 50%;
      text-align: right;
      @media(max-width: 1000px) {
        text-align: center;
        font-size: 38px;
        width: 100%;
      }
    }

    &-img {
      width: 310px;
      margin-left: 100px;
      @media(max-width: 1000px) {
        margin-left: 0;
      }
    }

    &-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
      @media(max-width: 1000px) {
        justify-content: center;
        flex-wrap: unset;
        flex-direction: column;
        align-items: center;
      }
      &__block {
        display: flex;
        gap: 30px;
        align-items: flex-start;
        @media(max-width: 767px) {
          gap: 10px;
        }
      }

      &__wrapper {
        width: 350px;
        @media(max-width: 767px) {
         width: 300px;
        }
        @media(max-width: 447px) {
          width: 250px;
        }
      }

      &__title {
        font-size: 24px;
        line-height: 1.4;
        font-weight: 700;
        margin: 0;
      }

      &__text {
        font-size: 18px;
        line-height: 1.55;
        font-weight: 500;
        margin: 0;
      }

      &__img {
        width: 72px;
      }
    }
  }

    @media all and (max-width: 480px) {
        .benefit-why__content-bottom__img {
            width: 48px;
            height: 48px;
        }
    }
}
</style>
