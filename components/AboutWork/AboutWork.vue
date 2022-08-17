<template>
  <section class="about-work">
    <div class="container">
      <div class="about-work__wrapper">
        <div class="about-work__block">
            <div class="about-work__block-top">
                <div data-aos="scale-fade"
                     data-aos-duration="1300"
                     data-aos-once="true"
                    class="about-work__list about-work__list-first">
                <div class="about-work__list-left">
                    <img src="@/static/img/about-work/1.png" alt="1"
                         class="about-work__list-left__img">
                </div>
                <div class="about-work__list-right">
                    <h3 class="about-work__list-right__title" v-html="$t('main_hww_1')"></h3>
                    <p class="about-work__list-right__descr" v-html="$t('main_hww_1_desc')"></p>
                </div>
            </div>
                <div
                    data-aos="scale-fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-once="true"
                    class="about-work__list">
                    <div class="about-work__list-left"><img src="@/static/img/about-work/2.png" alt="2"
                                                            class="about-work__list-left__img"></div>
                    <div class="about-work__list-right">
                        <h3 class="about-work__list-right__title" v-html="$t('main_hww_2')"></h3>
                        <p class="about-work__list-right__descr" v-html="$t('main_hww_2_desc')"></p>
                    </div>
                </div>
                <div
                    data-aos="scale-fade"
                    data-aos-delay="400"
                    data-aos-duration="1300"
                    data-aos-once="true"
                    class="about-work__list">
                    <div class="about-work__list-left"><img src="@/static/img/about-work/3.png" alt="3"
                                                            class="about-work__list-left__img"></div>
                    <div class="about-work__list-right">
                        <h3 class="about-work__list-right__title" v-html="$t('main_hww_3')">{{ $t('main_hww_3') }}</h3>
                        <p class="about-work__list-right__descr" v-html="$t('main_hww_3_desc')"></p>
                    </div>
                </div>
            </div>

            <div class="about-work__block-bottom">
                <div data-aos="scale-fade"
                     data-aos-delay="500"
                     data-aos-duration="1300"
                     data-aos-once="true"
                     class="about-work__list about-work__list-four" >
                    <div class="about-work__list-left"><img src="@/static/img/about-work/4.png" alt="4"
                                                            class="about-work__list-left__img"></div>
                    <div class="about-work__list-right">
                        <h3 class="about-work__list-right__title">{{ $t('main_hww_4') }}</h3>
                        <p class="about-work__list-right__descr" v-html="$t('main_hww_4_desc')"></p>
                    </div>
                </div>
                <div data-aos="scale-fade"
                     data-aos-delay="700"
                     data-aos-duration="1300"
                     data-aos-once="true"
                     class="about-work__list about-work__list-golden">
                    <div class="about-work__list-left"><img src="@/static/img/about-work/5_gold.png" alt="5"
                                                            class="about-work__list-left__img"></div>
                    <div class="about-work__list-right">
                        <h3 class="about-work__list-right__title">{{ $t('main_hww_5') }}</h3>
                        <ul>
                            <li>{{ $t('main_hww_5_list_1') }}</li>
                            <li>{{ $t('main_hww_5_list_2') }}</li>
                            <li>{{ $t('main_hww_5_list_3') }}</li>
                            <li>{{ $t('main_hww_5_list_4') }}</li>
                        </ul>
                        <p class="about-work__list-right__descr" v-html="$t('main_hww_5_desc')"></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutWork",
}
</script>

<style lang="scss">
.about-work {
  position: relative;
  overflow: hidden;
  margin-top: 128px;
  margin-bottom: 125px;

  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 45px 0;
    position: relative;
    z-index: 40;
  }

  &__title {
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 32px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
      @media(max-width: 1199px) {
          padding: 0 15px;
      }
    @media (max-width: 767px) {
      padding: 0 10px;
    }
      &-top {
          display: flex;
          gap: 20px;
          .about-work__list {
              width: 33.33%;
          }
      }
      &-bottom {
          display: flex;
          gap: 20px;
      }
  }

  &__list {
    display: flex;
    align-items: flex-start;
    gap: 0 30px;
      background: #E4F6FF;
      border-radius: 24px;
    padding: 32px 16px 64px 28px;
    @media (max-width: 767px) {
      align-items: flex-start;
    }
      &-first {
          border-radius: 24px 24px 24px 100px;
          border: 1px solid rgba(73, 139, 223, 0.3);
          background-color: transparent;
      }
      &-four {
          border-radius: 24px 24px 24px 100px;
          width: 50%;
      }
      &-golden {
          background: rgba(255, 206, 56, 0.1);
          border-radius: 24px;
          position: relative;
          width: 50%;
          &:after {
              content: "";
              background: url("/img/about-work/Star.svg") no-repeat;
              position: absolute;
              max-width: 209px;
              max-height: 209px;
              width: 100%;
              height: 100%;
              top: 5px;
              right: 0;
          }
      }
    &-left {
      &__img {
          padding-top: 5px;
        @media (max-width: 767px) {
          width: 28px;
          margin-top: 5px;
        }
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      gap: 8px 0;
      max-width: 630px;
      width: 100%;
        & ul {
            padding-left: 0;
            margin: 0;
            & li {
                color: #6B86A3;
                list-style: none;
                line-height: 1.7;
            }
        }

      @media (max-width: 767px) {
        gap:10px 0;
      }
      &__title {
        font-size: 18px;
        line-height: 1.4;
        font-weight: 700;
        margin: 0;
        @media (max-width: 767px) {

        }
      }

      &__descr {
        font-size: 14px;
        line-height: 1.7;
        font-weight: 500;
        margin: 0;
          color: #6B86A3;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }

  &__btn {
    border-width: 1px;
    border-radius: 10px;
    background-color: #d6d015;
    width: 360px;
    transition: .3s;

    &:hover {
      transition: .3s;
      background-color: #498BDf;

      .about-work__btn-text {
        color: #FFFFFF;
      }
    }

    @media (max-width: 767px) {
      padding: 0 15px;
      max-width: 280px;
      width: 100%;
    }

    &-text {
      color: #000000;
      font-size: 20px;
      line-height: 1.55;
      font-weight: 700;
      text-align: center;
      transition: .3s;
    }
  }
}

@media (max-width: 1024px) {
    .about-work {
        &__block {

            &-top {
                flex-wrap: wrap;
                justify-content: space-between;
                .about-work__list {
                    &:nth-child(1) {
                        width: 49%;
                    }
                    &:nth-child(2) {
                        width: 48%;
                    }
                    &:nth-child(3) {
                        width: 100%;
                    }
                }
            }

            &-bottom {
                justify-content: space-between;
            }
        }
        &__list {
            &-four {
                width: 49%;
            }
            &-golden {
                width: 48%;

            }
        }
    }
}

@media (max-width: 767px) {
    .about-work {
        margin-top: 80px;
        margin-bottom: 80px;
        &__block {

            &-top {
                flex-direction: column;
                .about-work__list {
                    width: 100%;
                    &:nth-child(1) {
                        width: 100%;
                    }
                    &:nth-child(2) {
                        width: 100%;
                    }
                }
            }
            &-bottom {
                flex-direction: column;
            }
        }
        &__list {
            padding-bottom: 48px;
            &-four {
                width: 100%;
            }
            &-golden {
                width: 100%;
                &:after {
                    top: unset;
                    bottom: 0;
                    right: -19px;
                }
            }
            &-right {
                & ul {
                    & li {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
