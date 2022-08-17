<template>
    <div class="trainers-info">
        <VueSlickCarousel
            v-bind="settings">
        <div class="trainers-info-wrapper trainers-info-wrapper-first">
            <div class="">
                <h2 class="trainers-info-title" v-html="$t('main_about_trainers_title')"></h2>
                <h3 class="trainers-info-info" v-html="$t('main_about_trainers_info_1')"></h3>
                <p class="trainers-info-desc">{{ $t('main_about_trainers_desc_1') }}</p>
            </div>
            <nuxt-link class="trainers-info-link" to="/team"><span>{{ $t('main_about_trainers_look') }}</span>
                <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.375631 6.87437L25.1244 6.87437M25.1244 6.87437L19.944 1.89269M25.1244 6.87437L19.944 11.4595"
                        stroke="#1B3C66" stroke-width="2.5"/>
                </svg>
            </nuxt-link>
        </div>
        <div class="trainers-info-wrapper ">
            <div class="">
                <img class="trainers-info-img" src="@/static/img/trainers/trainers_icon_first.svg" draggable="false" alt="">
                <h3 class="trainers-info-info">{{ $t('main_about_trainers_info_2') }}</h3>
                <p class="trainers-info-desc">{{ $t('main_about_trainers_desc_2') }}</p>
            </div>
            <div class="trainers-info-line trainers-info-line-first"></div>
        </div>
        <div class="trainers-info-wrapper ">
            <div class="">
                <img class="trainers-info-img trainers-info-img-pc" src="@/static/img/trainers/trainers_icon_sec.png" draggable="false" alt="">
                <img class="trainers-info-img trainers-info-img-mobile" src="@/static/img/trainers/trainers_icon_sec-mob.png" draggable="false" alt="">
                <h3 class="trainers-info-info" v-html="$t('main_about_trainers_info_3')"></h3>
                <p class="trainers-info-desc" v-html="$t('main_about_trainers_desc_3_2')">{{ $t('main_about_trainers_desc_3') }}</p>
            </div>
            <div class="trainers-info-line trainers-info-line-sec"></div>
        </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: "TrainersSlider",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            "settings": {
                'draggable': true,
                "slidesToShow": 2,
                'infinite': false,
                "responsive": [
                    {
                        "breakpoint": 1350,
                        "settings": {
                            'arrows': false,
                        }
                    },
                    {
                        "breakpoint": 560,
                        "settings": {
                            "slidesToShow": 1.2,
                            'arrows': false,
                        }
                    },
                ]
            }
        }
    },

}
</script>

<style scoped lang="scss">
.trainers-info {
    display: none;
    justify-content: space-between;
    gap: 18px;

    &-wrapper {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 24px;
        background-color: #fff;
        max-width: 357px;
        width: 100%;
        &-first {
            background-color: transparent;
            border: 1px solid rgba(27, 60, 102, 0.2);
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    &-title {
        margin: 0;
        margin-bottom: 46px;
        font-size: 28px;
        line-height: 1.4;
        padding: 35px 20px 0 20px;
    }

    &-info {
        margin: 0;
        margin-bottom: 8px;
        line-height: 1.5;
        padding: 0 20px;

    }

    &-desc {
        margin: 0;
        margin-bottom: 50px;
        opacity: 0.6;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.4;
        padding: 0 20px;

    }

    &-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 24px;
        border: 1px solid #1B3C66;
        filter: drop-shadow(0px 2px 72px #ECF0F9);
        border-radius: 16px;
        color: #1B3C66;
        font-size: 20px;
        font-weight: 700;
        margin: 0 20px 20px 20px;
    }

    &-img {
        margin-bottom: 30px;
        max-width: 100%;
        padding-top: 33px;
        &-mobile {
           display: none !important;
        }
    }

    &-line {
        position: relative;
        background: #CAECFF;
        max-width: 317px;
        height: 9px;
        border-radius: 8px;
        margin: 0 20px 33px 20px;

        &:before {
            content: "";
            position: absolute;
            max-width: 50%;
            width: 100%;
            height: 9px;
            background: #498BDF;
            border-radius: 8px;
        }

        &-first {
            &:before {
                left: 50%;
                transform: translate(-50%);
            }
        }

        &-sec {
            &:before {
                right: 0;
            }
        }
    }
}
@media (max-width: 925px) {
    .trainers-info {
        &-title {
            padding: 18px 20px 0 20px;
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 12px;
        }

        &-info {
            font-size: 16px;
            margin-bottom: 6px;
        }

        &-desc {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 0;
        }

        &-link {
            margin: 0 20px 20px 20px;
            line-height: 1.3;
        }

        &-img {
            padding-top: 22px;
            margin-bottom: 12px;
        }

        &-line {
            margin: 0 20px 33px 20px;
        }
    }
}
@media (max-width: 860px) {
    .trainers-info {
        display: block;

        &-wrapper {
            max-width: 100%;
            height: 390px;
        }
    }
}
@media (max-width: 730px) {

    .trainers-info {
        display: block;
        &-line {
            max-width: 100%;
        }
    }
}
@media (max-width: 560px) {

    .trainers-info {
        &-wrapper {
            height: 353px;
        }
        &-title {
            padding:  18px 15px 0 15px;
        }
        &-info {
            padding: 0 15px;
        }
         &-desc {
            padding: 0 15px;
        }
        &-link {
            font-size: 16px;
            padding: 10px 12px 12px 16px;
            margin: 0 15px 15px 15px;

            & svg {
                width: 20px;
            }
        }
        &-line {
            margin: 0 15px 15px 15px;

            &-first {
            }
            &-sec {

            }
        }
        &:first-child {
            &-img {
                height: 126px;
            }
        }
        &-img {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
            max-height: 160px;
            &-pc {
                display: none !important;
            }
            &-mobile {
                display: block !important;
            }
        }
    }
}
@media (max-width: 400px) {
    .trainers-info-img {
        &-pc {
            display: block !important;
        }
        &-mobile {
            display: none !important;
        }
    }
}
@media (max-width: 367px) {
    .trainers-info-link {
        padding: 10px 8px 12px 8px;
        & svg {
            width: 17px;
        }
    }
}
</style>
