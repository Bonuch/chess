<template>
  <section class="promo">
    <img src="@/static/img/Promo/Promo_circle.png" alt="promo circle" class="promo__decoration-circle">
      <div class="promo__decoration-image-wrap">
          <img src="@/static/img/english-page/tower.png" alt="promo tower" class="promo__decoration-girl">
      </div>
    <kinesis-container
      class="promo__decoration-block">
      <kinesis-element
        class="promo__decoration-pawn"
        tag="img"
        :src="pawn"
        axis="x y"
        :strength="50"
      />
      <kinesis-element
        class="promo__decoration-head"
        tag="img"
        :src="head"
        axis="x y"
        :strength="30"
      />
      <kinesis-element
        class="promo__decoration-area"
        tag="img"
        :src="area"
        axis="x y"
        :strength="50"
      />
    </kinesis-container>
    <div class="promo__container">
      <div class="promo__wrapper">
        <div class="promo__wrapper-left">
          <h2 class="promo__title">{{ $t('eng_title') }}</h2>
          <h2 class="promo__title-big">CHESSFIRST.ONLINE</h2>
          <p class="promo__text promo__text-english" v-html="$t('eng_desc')"></p>
          <a href="#trial" class="promo__button custom-btn custom-btn-rounded custom-btn-blue custom-btn-shadowed">
            <span class="promo__button-text">{{ $t('eng_start') }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pawn from 'static/img/Promo/anim-pawn.png';
import head from 'static/img/english-page/flag.png';
import area from 'static/img/Promo/anim-area.png';

export default {
  name: "PromoEnglish",
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
      pawn,
      head,
      area,
    }
  },
}
</script>

<style lang="scss" scoped>
    @media all and (max-width: 480px) {
        .promo {
            height: 520px;
        }
    }
</style>
