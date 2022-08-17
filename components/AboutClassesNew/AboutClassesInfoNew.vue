<template>
    <div class="about-new-info">
        <h2
            data-aos="up-fade"
            data-aos-duration="1000" data-aos-once="true"
        >{{ $t('main_how_lessons_new') }}</h2>
        <p data-aos="fade" data-aos-duration="500" data-aos-once="true" v-html="$t('main_lesson_descr_new')"></p>
        <div class="about-new-info-items">
            <ul>
                <li data-aos="fade" data-aos-duration="1000" data-aos-once="true">{{ $t('main_lesson_step_1') }}</li>
                <li data-aos="fade" data-aos-duration="1000" data-aos-once="true" v-html="$t('main_lesson_step_6')"></li>
                <li data-aos="fade" data-aos-duration="1000" data-aos-once="true">{{ $t('main_lesson_step_3') }}</li>
                <li data-aos="fade" data-aos-duration="1000" data-aos-once="true">{{ $t('main_lesson_step_4') }}</li>
                <li data-aos="fade" data-aos-duration="1000" data-aos-once="true">{{ $t('main_lesson_step_5') }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutClassesInfoNew",
}
</script>

<style scoped lang="scss">
.about-new-info {
    width: 49%;

    & h2 {
        font-weight: 700;
        font-size: 48px;
        line-height: 1.3;
        letter-spacing: -0.01em;
        margin: 0;
        margin-bottom: 12px;
    }

    & p {
        font-weight: 500;
        font-size: 18px;
        opacity: 0.6;
        line-height: 1.5;
        margin: 0;
        margin-bottom: 48px;
    }

    &-items {
        & ul {
            padding: 0;
            margin: 0;

            & li {
                position: relative;
                list-style: none;
                padding: 12px 16px;
                border-radius: 12px;
                background: #E4F6FF;
                margin-bottom: 31px;
                font-weight: 500;
                &:last-child {

                }
                &:before {
                    content: "";
                    position: absolute;
                    width: 25px;
                    height: 15px;
                    background: url("/img/icon/triangle.svg") no-repeat;
                    bottom: -15px;
                    left: 30px;
                }

                &:nth-child(1) {
                    max-width: 344px;
                }

                &:nth-child(2) {
                    max-width: 320px;
                    margin-left: 65px;

                    &:before {
                        left: unset;
                        right: 30px;
                        transform: scale(-1, 1);
                    }
                }

                &:nth-child(3) {
                    max-width: 294px;
                }

                &:nth-child(4) {
                    margin-bottom: 44px;
                    max-width: 333px;
                    margin-left: 54px;
                    background: #FFF0C3;

                    &:before {
                        left: unset;
                        right: 30px;
                        transform: scale(-1, 1);
                    }
                }

                &:nth-child(5) {
                    max-width: 356px;
                    margin-bottom: 0;
                    padding: 19px 33px 21px;
                    font-size: 22px;
                    margin-left: 115px;
                    font-weight: 700;
                    background: #CAECFF;
                    &:before {
                        background: url("/img/icon/triangle-blue-big.svg") no-repeat;
                        width: 43px;
                        height: 23px;
                        left: 95px;
                    }
                }
            }

        }

    }
}

@media (max-width: 1150px) {
    .about-new-info {
        width: unset;
        margin: 40px auto 0;
        &-items {
            & ul {
                & li {
                    &:nth-child(2) {
                        margin-left: auto;
                    }
                    &:nth-child(4) {
                        margin-left: auto;
                    }
                }
            }
        }

    }
}

@media (max-width: 767px) {
    .about-new-info {
        & h2 {
            font-size: 24px;
        }

        & p {
            font-size: 14px;
            margin-bottom: 24px;
        }
        &-items {
            & ul {
                & li {
                    margin-bottom: 23px !important;
                    font-size: 12px;
                    padding: 16px 12px;
                    font-weight: 600;
                    line-height: 1.4;
                    &:nth-child(1) {
                        max-width: 262px;
                    }
                    &:nth-child(2) {
                        max-width: 244px;
                        margin-left: auto;
                    }
                    &:nth-child(3) {
                        max-width: 225px;
                    }
                    &:nth-child(4) {
                        max-width: 255px;
                        margin-left: auto;
                    }

                    &:nth-child(5) {
                        max-width: 267px;
                        font-size: 18px;
                        margin-left: 0;
                        padding: 18px 15px;
                        &:before {
                            left: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>
