<template>
<section class="about-benefits">
  <div class="container">
    <h2 class="about-benefits__title">{{$t('main_advantages')}}</h2>
    <p class="about-benefits__text">{{$t('about_advantage_desc')}}</p>
    <div class="about-benefits__content">
      <div class="about-benefits__content-left">
        <div class="about-benefits__content-left__wrapper">
          <img src="@/static/img/about-page/img-1.png" alt="#" class="about-benefits__content-left__img">
          <p class="about-benefits__content-left__text" v-html="$t('about_advantage_1')"></p>
        </div>
          <div class="about-benefits__content-left__wrapper">
          <img src="@/static/img/about-page/img-2.png" alt="#" class="about-benefits__content-left__img">
          <p class="about-benefits__content-left__text" v-html="$t('about_advantage_2')"></p>
        </div>
          <div class="about-benefits__content-left__wrapper">
          <img src="@/static/img/about-page/img-3.png" alt="#" class="about-benefits__content-left__img">
          <p class="about-benefits__content-left__text" v-html="$t('about_advantage_3')"></p>
        </div>
          <div class="about-benefits__content-left__wrapper">
          <img src="@/static/img/about-page/img-4.png" alt="#" class="about-benefits__content-left__img">
          <p class="about-benefits__content-left__text" v-html="$t('about_advantage_4')"></p>
        </div>
          <div class="about-benefits__content-left__wrapper">
          <img src="@/static/img/about-page/img-5.png" alt="#" class="about-benefits__content-left__img">
          <p class="about-benefits__content-left__text" v-html="$t('about_advantage_5')"></p>
        </div>

      </div>
      <div class="about-benefits__content-right">
        <img src="@/static/img/about-page/notebook.png" alt="#" class="about-benefits__content-right__img1">
        <img src="@/static/img/about-page/img-7.png" alt="#" class="about-benefits__content-right__img2">
        <img src="@/static/img/about-page/img-6.png" alt="#" class="about-benefits__content-right__img3">
        <img src="@/static/img/about-page/img-8.png" alt="#" class="about-benefits__content-right__img4">
      </div>
    </div>
  </div>
</section>
</template>

<script>


export default {
  name: "AboutBenefits",
}
</script>

<style scoped lang="scss">
.about-benefits {
  margin-top: 50px;
  margin-bottom: 150px;
  &__content {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    @media(max-width: 767px) {
      flex-direction: column;
      gap: 30px 0;
    }
    &-left {
      width: 46%;
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      @media(max-width: 767px) {
        width: 100%;
      }
      &__wrapper {
        display: flex;
        gap: 0 10px;
        align-items: center;
      }
      &__img {
        width: 41px;
      }
      &__text {
        font-size: 18px;
        line-height: 1.55;
        font-weight: 500;
        margin: 0;
      }
    }
    &-right {
      position: relative;
      width: 54%;
      @media(max-width: 767px) {
        width: 100%;
      }
      &__img1 {
        margin-bottom: 90px;
        position: relative;
        z-index: 2;
        animation: 4s aboutBenefits infinite ease;
      }
      &__img2 {
        position: absolute;
        left: 25%;
        top: 32%;
        z-index: 1;
        animation: 4s aboutBenefits infinite ease;
      }
      &__img4 {
        position: absolute;
        bottom: 10px;
        left: 50px;
        width: 238px;
        height: 8px;
        animation: 4s aboutShadow infinite ease;
      }
    }
  }
  &__title {
    color: #1b3c66;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
  &__text {
    color: #1b3c66;
    font-size: 18px;
    line-height: 1.55;
    font-weight: 700;
    text-align: center;
  }
}
@keyframes aboutBenefits {
  0%{ transform: translateY(0)}
  50%{transform: translateY(-8%)}
  100%{transform: translateY(0)}
}
@keyframes aboutShadow {
  0%{
    width: 238px;
    height: 8px;
  }
  50%{
    width: 198px;
    height: 7px;
  }
  100%{
    width: 238px;
    height: 8px;
  }
}

    @media all and (max-width: 767px) {
        .about-benefits {
            .container {
                padding: 0 16px;
            }

            &__title {
                font-size: 36px;
            }
        }
        .about-benefits__content {
            padding: 0;
        }

        .about-benefits__content-left {
            max-width: 406px;
            margin: 0 auto;
        }

        .about-benefits__content-right {
            display: none;
        }
    }

    @media all and (max-width: 390px) {
        .about-benefits__content-left__img {
            display: none;
        }
    }
</style>
