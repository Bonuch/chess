<template>
  <section class="about-slider">
    <div class="container">
      <div class="about-slider__content">
        <h2 class="about-slider__title">{{$t('about_parents')}}</h2>
        <p class="about-slider__description">{{$t('about_real_read')}}</p>
        <VueSlickCarousel
          v-bind="settings">
          <template #prevArrow="arrowOption">
            <div class="custom-arrow">
              <div class="about-arrow about-arrow__prev">
                <svg style="display: block; width: 9px;" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>Left</desc>
                  <polyline fill="none" stroke="#222222" stroke-linejoin="bevel" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
                </svg>
              </div>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow">
              <div class="about-arrow about-arrow__next">
                <svg style="display: block; width: 9px;" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Right</desc>
                  <polyline fill="none" stroke="#222222" stroke-linejoin="bevel" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
                </svg>
              </div>
            </div>
          </template>
          <template #customPaging="page">
            <div class="about-dots">

            </div>
          </template>
          <div class="slider-content">
            <div class="slider-content__wrapper">
              <p class="slider-content__text">{{$t('about_rev_alice')}}</p>
              <p class="slider-content__author" v-html="$t('about_rev_alice_who')"></p>
              <p class="slider-content__grade">{{$t('about_rev_alice_star')}}</p>
            </div>
          </div>
          <div class="slider-content">
            <div class="slider-content__wrapper">
              <p class="slider-content__text">{{$t('about_rev_alex')}}</p>
              <p class="slider-content__author" v-html="$t('about_rev_alex_who')"></p>
              <p class="slider-content__grade">{{$t('about_rev_alex_star')}}</p>
            </div>
          </div>
          <div class="slider-content">
            <div class="slider-content__wrapper">
              <p class="slider-content__text">{{$t('about_rev_andr')}}</p>
              <p class="slider-content__author" v-html="$t('about_rev_andr_who')"></p>
              <p class="slider-content__grade">{{$t('about_rev_andr_star')}}</p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "AboutSlider",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      "settings": {
        'arrows': true,
        'draggable': false,
        'dots': true,
        'dotsClass': 'about-dots',
        'fade': true,
        'adaptiveHeight': true,
        "responsive": [
          {
            "breakpoint": 1350,
            "settings": {
              'arrows': true,
              'draggable': true,
            }
          },
          {
            "breakpoint": 767,
            "settings": {
              'arrows': true,
              'draggable': true,
            }
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.about-slider {
  margin-top: 50px;
  margin-bottom: 100px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #d5fafc;
  position: relative;
  &__content {
    text-align: center;
    @media (max-width: 1199px) {
      padding: 0 100px;
    }
    @media (max-width: 767px) {
      padding: 0;
    }
  }
  &__title {
    font-size: 42px;
    line-height: 1.23;
    font-weight: 600;
  }
  &__description {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: 90px;
    @media(max-width: 767px) {
      margin-bottom: 40px;
    }
  }
}

.slider-content {
  padding: 0 30px;
  &__wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: start;

  }
  &__text {
    font-weight: 300;
    color: #1b3c66;
    font-size: 20px;
    line-height: 1.55;
  }
  &__author {
    font-size: 16px;
    line-height: 1.35;
    margin: 0;
  }
  &__grade {
    font-size: 14px;
    line-height: 1.55;
    margin-top: 0;
    margin-bottom: 10px;
  }
}
.about-dots {
  display: flex !important;
  justify-content: center;
  gap: 0 10px;
  cursor: pointer;
}
.about-arrow {
  width: 40px;
  height: 40px;
  border: 1px solid #222222;
  background-color: rgba(232,232,232,1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
  &__prev {
    transform: rotate(180deg);
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 100;
  }
  &__next {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 100;
  }
}
.slick-slider[data-v-3d1a4f76] {
  position: unset;
}
.slick-slider[data-v-4f6da449] {
  position: relative;
}
</style>
