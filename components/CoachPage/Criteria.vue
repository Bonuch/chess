<template>
<section class="criteria">
  <div class="container">
    <div class="criteria__content">
      <h2 class="criteria__content-title">{{$t('coach_needed')}}</h2>
      <div class="criteria__content-wrapper">
        <div class="criteria__content-wrapper__left">
          <img src="@/static/img/coach-page/criteria-4.png" alt="" class="criteria__content-wrapper-img">
          <h4 class="criteria__content-wrapper-title">{{$t('coach_base')}}</h4>
          <p class="criteria__content-wrapper-text" v-html="$t('coach_base_req')"></p>
        </div>
        <div class="criteria__content-wrapper__right">
          <img src="@/static/img/coach-page/criteria-5.png" alt="" class="criteria__content-wrapper-img">
          <h4 class="criteria__content-wrapper-title">{{$t('coach_expert')}}</h4>
          <p class="criteria__content-wrapper-text" v-html="$t('coach_expert_req')"></p>
        </div>
      </div>
      <div class="profit__content-button">
        <a href="#coach" class="profit__content-btn">{{$t('coach_join_form')}}</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Criteria"
}
</script>

<style lang="scss">
.criteria {
  margin-top: 50px;
  margin-bottom: 150px;
    @media (max-width: 767px) {
        margin-top: 30px;
    }

  &__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
      text-align: center;
      margin: 0;
        @media (max-width: 767px) {
            font-size: 28px;
        }
    }
    &-wrapper {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 30px;
      &__left{
        position: relative;
      }
      &__right{
        position: relative;
      }
      &-img {
        max-width: 328px;
        z-index: 2;
      }
      &-title {
        top: 8%;
        left: 50%;
        transform: translate(-50%, -10%);
        position: absolute;
        z-index: 3;
        margin: 0;
        color: #ffffff;
        font-size: 28px;
        line-height: 1.4;
        font-weight: 700;
        width: 100%;
        text-align: center;
      }
      &-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
        margin: 0;
        color: #1b3c66;
        font-size: 18px;
        line-height: 1.55;
        font-weight: 500;
        width: 100%;
        padding: 10px 55px;
      }
    }
  }
}
</style>
