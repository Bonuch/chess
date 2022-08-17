<template>
<div class="about-info">
  <ol class="about-info__list">
    <li class="about-info__item"> {{$t('main_lesson_step_1')}}</li>
    <li class="about-info__item"> {{$t('main_lesson_step_2')}}</li>
    <li class="about-info__item"> {{$t('main_lesson_step_3')}}</li>
    <li class="about-info__item"> {{$t('main_lesson_step_4')}}</li>
    <li class="about-info__item"> {{$t('main_lesson_step_5')}}</li>
  </ol>
</div>
</template>

<script>
export default {
  name: "AboutClassesLeft",

}
</script>

<style scoped lang="scss">
.about-info {
  &__title {
    font-size: 28px;
    line-height: 1.55;
    font-weight: 700;
  }
  &__list {
    max-width: 400px;
    list-style-position: inside;
    padding-left: 0;
  }
  &__item {
    font-size: 18px;
    line-height: 1.55;
    font-weight: 500;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-bottom: 15px;
      font-size: 16px;
      padding-right: 15px;
    }
  }
}

@media all and (max-width: 1150px) {
    .about-info {
        margin-top: 100px;
    }
}

@media all and (max-width: 767px) {
    .about-info {
        margin-top: 40px;
    }
}

@media all and (max-width: 600px) {
    .about-info {
        padding: 0 16px;
        margin-top: 0;

        &__item {
            padding-right: 0;
        }
    }
}
</style>
