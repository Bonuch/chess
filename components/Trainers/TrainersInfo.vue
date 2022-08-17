<template>
    <div class="trainers-info" >
            <div class="trainers-info-wrapper trainers-info-wrapper-first">
                <h2 class="trainers-info-title" v-html="$t('main_about_trainers_title')"></h2>
                <h3 class="trainers-info-info" v-html="$t('main_about_trainers_info_1')"></h3>
                <p class="trainers-info-desc">{{ $t('main_about_trainers_desc_1') }}</p>
                <a class="trainers-info-link" href=""><span>{{ $t('main_about_trainers_look') }}</span>
                    <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.375631 6.87437L25.1244 6.87437M25.1244 6.87437L19.944 1.89269M25.1244 6.87437L19.944 11.4595"
                            stroke="#1B3C66" stroke-width="2.5"/>
                    </svg>

                </a>
            </div>
            <div class="trainers-info-wrapper ">
                <div class="">
                    <img class="trainers-info-img" src="@/static/img/trainers/trainers_icon_first.svg" alt="">
                    <h3 class="trainers-info-info">{{ $t('main_about_trainers_info_2') }}</h3>
                    <p class="trainers-info-desc">{{ $t('main_about_trainers_desc_2') }}</p>
                </div>
                <div class="trainers-info-line trainers-info-line-first"></div>
            </div>
            <div class="trainers-info-wrapper ">
                <div class="">
                    <img class="trainers-info-img" src="@/static/img/trainers/trainers_icon_sec.png" alt="">
                    <h3 class="trainers-info-info" v-html="$t('main_about_trainers_info_3')"></h3>
                    <p class="trainers-info-desc" v-html="$t('main_about_trainers_desc_3')"></p>
                </div>
                <div class="trainers-info-line trainers-info-line-sec"></div>
            </div>
    </div>
</template>

<script>
export default {
    name: "TrainersInfo",
}
</script>

<style scoped lang="scss">
.trainers-info {
    display: flex;
    justify-content: space-between;
    gap: 18px;

    &-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 24px;
        background-color: #fff;
        max-width: 357px;
        width: 100%;
        &-first {
            background-color: transparent;
            border: 1px solid rgba(27, 60, 102, 0.2);

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
        line-height: 1.5;
        font-size: 20px;
        font-weight: 700;
        margin: 0 20px 20px 20px;
        transition: .3s;
        &:hover {
            opacity: 0.6;
        }
    }

    &-img {
        margin-bottom: 30px;
        max-width: 100%;
        padding-top: 33px;

    }

    &-line {
        position: relative;
        background: #CAECFF;
        max-width: 317px;
        height: 9px;
        border-radius: 8px;
        margin: 0 20px 33px 20px;
        overflow: hidden;

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
                left: 25%;
                max-width: 50%;
            }
        }

        &-sec {
            &:before {
                left: 51%;
            }
        }
    }
}

@media (max-width: 925px) {
    .trainers-info {
        &-title {
            padding: 35px 20px 0 20px;
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
            margin-bottom: 40px;
        }

        &-link {
            margin: 0 20px 20px 20px;
            line-height: 1.3;
        }

        &-img {
            padding-top: 33px;
            margin-bottom: 12px;
        }

        &-line {
            margin: 0 20px 33px 20px;
            &-first {
                &:before {
                }
            }
        }
    }
}

@media (max-width: 860px) {
    .trainers-info {
        display: none;
    }
}
</style>
