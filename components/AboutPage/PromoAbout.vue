<template>
  <section class="promo">
    <img src="@/static/img/Promo/Promo_circle.png" alt="circle" class="promo__decoration-circle">
      <div class="promo__decoration-image-wrap">
          <img src="@/static/img/about-page/boy_promo.png" alt="promo" class="promo__decoration-girl">
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
          <h2 class="promo__title">{{ $t('main_school') }}</h2>
          <h2 class="promo__title-big">CHESSFIRST.ONLINE</h2>
          <p class="promo__text">{{ $t('main_slide_slogan') }}</p>
          <a href="#trial" class="promo__button custom-btn custom-btn-rounded custom-btn-blue custom-btn-shadowed">
            <span class="promo__button-text">{{ $t('main_free_promo_lesson') }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pawn from "static/img/Promo/anim-pawn.png";
import head from 'static/img/certs-page/boy_promo.png';
import area from "static/img/Promo/anim-area.png";

export default {
  name: "PromoAbout",
  data() {
    return {
      pawn,
      head,
      area,
    }
  },
}
</script>

<style scoped lang="scss">
    @media all and (max-width: 780px) {
        .promo {
            height: 720px;
        }
    }

    @media all and (max-width: 480px) {
        .promo {
            height: 520px;
        }
    }
</style>
