<template>
  <section class="start-trial">
    <div id="trial" style="position:relative; top:-80px;"></div>
    <div class="container">
        <div class="start-trial__decoration-hourse"></div>
      <div class="start-trial__decoration">
        <img src="@/static/img/start-trial/start-trial-bg-new.png" alt="" class="start-trial__decoration-bg">
        <img src="@/static/img/start-trial/start-trial-bg-mobile-new.png" alt="" class="start-trial__decoration-bg start-trial__decoration-bg-mobile">
      </div>
    </div>
    <div class="start-trial__wrapper" >
        <client-only>
      <kinesis-container
        class="start-trial__block" >
        <div style="position: relative;"
             data-aos="bouncing-zoom-card-1"
             data-aos-once="true">
          <img
            class="start-trial__child"
            :src="child"
          />
          <div
            class="lesson__layer"
          >
            <h4>{{ $t('main_child') }}</h4>
            <p>{{ $t('main_child_dsc') }}</p>
          </div>
        </div>

        <div style="position: relative;"
             data-aos="bouncing-zoom-card-2"
        data-aos-once="true">
          <img
            class="start-trial__adult"
            :src="adult"
          />
          <div
            class="lesson__layer"
            data-aos="bouncing-zoom"
          >
            <h4>{{ $t('main_adult') }}</h4>
            <p>{{ $t('main_adult_dsc') }}</p>
          </div>
        </div>
      </kinesis-container>
        </client-only>
      <div
        class="start-trial__button"
        v-on:keyup.esc="closeModal"
      >
        <a
          href="#"
          class="start-trial__button-child custom-btn custom-btn-rounded custom-btn-orange"
          data-aos="bouncing-zoom-card-1"
          data-aos-once="true"
          @click.prevent="showModal"
        >
          {{ $t('main_free_start_ed') }}
        </a>
        <a
          href="#"
          class="start-trial__button-adult custom-btn custom-btn-rounded"
          data-aos="bouncing-zoom-card-2"
          data-aos-once="true"
          @click.prevent="showModalAdult">
          {{ $t('main_free_start_more') }}
        </a>
      </div>
    </div>
    <ModalLearn @close="closeModal"/>
    <ModalLearnAdult @close="closeModal"/>
  </section>
</template>

<script>
import child from "static/img/start-trial/1.png";
import adult from "static/img/start-trial/2.png";

export default {
  name: "StartTrial",
    components: {
        ModalLearn: () => import('~/components/ModalLearn/ModalLearn.vue'),
        ModalLearnAdult: () => import('~/components/ModalLearnAdult/ModalLearnAdult.vue'),
    },
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
      child,
      adult,
      isModalVisible: false,
      isScroll: false,
    }
  },
  methods: {
    changeLocale(e) {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    },
    showModal() {
      this.$store.dispatch('changeModal/openModal', 'ModalMain');
      this.isModalVisible = true;
    },
    showModalAdult() {
      this.$store.dispatch('changeModalAdult/openModal', 'ModalMainAdult');
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  }
}
</script>

<style lang="scss" scoped>
.start-trial {
  position: relative;
  overflow: hidden;
    margin-bottom: 256px;
  &__decoration {
      &-hourse {
          display: none;
      }
    &-bg {
      position: relative;
      width: 100%;
        &-mobile {
            display: none;
        }
    }
  }

  &__child {
    left: calc(50% - 600px + 206px);
    z-index: 50;
    max-width: 326px;
  }

  &__adult {
    left: calc(50% - 600px + 598px);
    z-index: 52;
    max-width: 326px;
  }

  &__content {
    position: absolute;
    top: 0;
    left: calc(50% - 600px + 250px);
    width: 700px;
    //transform: translate(-10% , -50%);
  }

  &__title {
    color: #ffffff;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
  }

  &__wrapper {
    position: absolute;
    width: 100%;
    top: 0;
  }

  &__block {
    position: relative;
    width: 100%;
    padding-top: 64px;
    display: flex;
    gap:20px;
    justify-content: center;
  }

  &__button {
      .custom-btn {
          padding-top: 16px;
          padding-bottom: 18px;
      }
    &-child {
      position: absolute;
      color: #fff;
      text-align: center;
      z-index: 51;
      top: 315px;
      left: calc(50% - 315px);
      width: 100%;
      max-width: 286px;
      font-size: 20px;
      font-family: 'Manrope', Arial, sans-serif;
      line-height: 1.5;
      font-weight: 700;
      border-width: 1px;
      border-radius: 16px;
      background-color: #d6d015;
      margin: 0;
        transition: all .3s !important;
      cursor: pointer;
        text-shadow: 0 4px 39px #DB5000;

      &:hover {
          transition: all .3s !important;
          opacity: 0.5 !important;
      }
    }

    &-adult {
      position: absolute;
      color: #1B3C66;
      text-align: center;
      z-index: 54;
      top: 315px;
      left: calc(50% + 30px);
      max-width: 286px;
      width: 100%;
      font-size: 20px;
      font-family: 'Manrope', Arial, sans-serif;
      line-height: 1.5;
      font-weight: 700;
      border-radius: 16px;
      background-color: transparent;
      border: 1px solid #1B3C66;
      margin: 0;
      transition: all .3s !important;
      cursor: pointer;

      &:hover {
        transition: all .3s !important;
        opacity: 0.5 !important;
      }
    }
  }
}

.lesson__layer {
  position: absolute;
  top: 160px;
  left: 45px;
  text-align: center;
  background: #fff;
  width: 245px;

  & h4 {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: #1b3c66;
    margin: 0;
  }

  & p {
      color: #1B3C66;
      opacity: 0.7;
      font-size: 14px;
      margin-top: 12px;
      font-weight: 600;
  }
}
@media (max-width: 1199px) {
    .start-trial {
        &__decoration {
            &-bg {
                height: 450px;
                padding-right: 2%;
                padding-left: 2%;
            }
        }
        &__title {
            font-size: 2.5rem;
        }
        &__block {
            padding-top: 55px;
            height: 100%;
        }
    }
    .lesson__layer {
        & h4 {
            font-size: 18px;
        }
    }
}
@media (max-width: 950px) {
    .start-trial {
        &__child {
            left: calc(50% - 540px + 206px);
        }
        &__adult {
            left: calc(50% - 620px + 598px);
        }

    }

}
@media (max-width: 767px) {
    .start-trial {
        &__decoration {
            &-bg {
                padding-right: 0;
                padding-left: 0;
                height: 390px;
            }
        }
        &__button {
            & .custom-btn {
                padding-top: 10px;
                padding-bottom: 12px;
            }
            &-child {
                top: 270px;
                left: calc(50% - 260px);
                max-width: 240px;
            }
            &-adult {
                top: 270px;
                left: calc(50% + 20px);
                max-width: 240px;
            }
        }
        &__child {
            max-width: 260px;
        }
        &__adult {
            max-width: 260px;
        }
    }
    .lesson__layer {
        left: 15px;
        top: 140px;
    }
}
@media (max-width: 580px) {
    .start-trial {
        margin-bottom: 0;
        height: 1100px;
        &__decoration {
            &-hourse {
                display: block;
                position: absolute;
                left: 12vw;
                bottom: 20px;
                background: url("/img/start-trial/hourse-decoration.svg");
                width: 100px;
                height: 124px;
                z-index: 10;
            }
            &-bg {
                width: 100%;
                max-width: 767px;
                height: 913px;
                display: none;
                &-mobile {
                    display: flex;
                }
            }
        }
        &__block {
            padding-top: 20px;
        }
        &__child {
            position: relative;
            left: 0;
            max-width: 345px;
            max-height: 338px;
            transform: translate3d(0px, 0px, 0px) !important;
        }
        &__adult {
            position: relative;
            left: 0;
            max-width: 345px;
            max-height: 338px;
            transform: translate3d(0px, 0px, 0px) !important;
        }
        &__title {
            font-size: 1.5rem;
            color: #1b3c66;
        }
        &__block {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
        }
        &__button {
            .custom-btn {
                padding-top: 16px;
                padding-bottom: 18px;
            }
            &-child {
                font-size: 20px;
                line-height: 1.3;
                left: calc(50% - 142px);
                max-width: 286px;
                top: 39%;
                border-radius: 56px;
            }
            &-adult {
                font-size: 20px;
                line-height: 1.3;
                left: calc(50% - 142px);
                max-width: 286px;
                top: 89%;
                border-radius: 56px;
            }
        }
    }
    .lesson__layer {
        top: 44.5%;
        width: 306px;
        z-index: 100;
        left: 0;
        transform: translate3d(0px, 0px, 0px) !important;
    }
}
@media (max-width: 600px) {
    .start-trial {
        margin-bottom: 0;
        height: 900px;
    }
}
</style>
