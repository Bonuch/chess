<template>
    <section class="expectations">
        <div class="expectations__decoration">
            <img src="@/static/img/coach-page/expectation-left.png" alt="" class="expectations__decoration-left">
            <img src="@/static/img/coach-page/expectation-right.png" alt="" class="expectations__decoration-right">
        </div>
        <div class="expectations__content">
            <div class="expectations__content-wrapper">
                <h2 class="expectations__content-title" v-html="$t('coach_what_wait')"></h2>
                <div class="expectations__content-wrapper__block"
                     v-for="(list, index) in expectation" :key="index">
                    <img src="@/static/img/coach-page/star.png" alt="*"
                         class="expectations__content-wrapper__block-img">
                    <div class="expectations__content-wrapper__block-content">
                        <h4 class="expectations__content-wrapper__block-title">{{ list.title }}</h4>
                        <p class="expectations__content-wrapper__block-text">{{ list.subtitle }}</p>
                        <ul class="expectations__content-wrapper__block-list">
                            <li v-for="(item, index) in list.list" :key="index"
                                class="expectations__content-wrapper__block-items">{{ item.item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="expectations__content-wrapper">
                <div class="expectations__content-wrapper__block"
                     v-for="(list, index) in expectationSec" :key="index">
                    <img src="@/static/img/coach-page/star.png" alt="*"
                         class="expectations__content-wrapper__block-img">
                    <div class="expectations__content-wrapper__block-content">
                        <h4 class="expectations__content-wrapper__block-title">{{ list.title }}</h4>
                        <p class="expectations__content-wrapper__block-text">{{ list.subtitle }}</p>
                        <ul class="expectations__content-wrapper__block-list">
                            <li class="expectations__content-wrapper__block-items"
                                v-for="(item, index) in list.list" :key="index">{{ item.item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Expectations',
    data() {
        return {
            expectation: [
                {title: this.$i18n.t('coach_req_1'), subtitle: this.$i18n.t('coach_req_imp'),},
                {title: this.$i18n.t('coach_req_2'), subtitle: this.$i18n.t('coach_req_imp'),},
                {
                    title: this.$i18n.t('coach_req_3'),
                    subtitle: this.$i18n.t('coach_req_imp'),
                    list: [
                        {item: this.$i18n.t('coach_req_1_lst1')},
                        {item: this.$i18n.t('coach_req_1_lst2')},
                        {item: this.$i18n.t('coach_req_1_lst3')},
                        {item: this.$i18n.t('coach_req_1_lst4')}
                    ]
                },
            ],
            expectationSec: [
                {title: this.$i18n.t('coach_req_4'), subtitle: this.$i18n.t('coach_req_sk'),},
                {title: this.$i18n.t('coach_req_5'), subtitle: this.$i18n.t('coach_req_sk'),},
                {
                    title: this.$i18n.t('coach_req_6'),
                    subtitle: this.$i18n.t('coach_req_sk'),
                    list: [
                        {item: this.$i18n.t('coach_req_2_lst1')},
                        {item: this.$i18n.t('coach_req_2_lst2')},
                        {item: this.$i18n.t('coach_req_2_lst3')},
                        {item: this.$i18n.t('coach_req_2_lst4')},
                        {item: this.$i18n.t('coach_req_2_lst5')},
                        {item: this.$i18n.t('coach_req_2_lst6')},
                        {item: this.$i18n.t('coach_req_2_lst7')}
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.expectations {
    height: 858px;
    margin-top: 50px;
    padding-bottom: 100px;
    position: relative;
    overflow: hidden;
    @media (max-width: 940px) {
        height: 1625px;
    }
    @media (max-width: 480px) {
        height: 1500px;
    }

    &__decoration {
        &-left {
            position: absolute;
            z-index: 8;
            top: 55px;
            left: calc(50% - 600px + -480px);
            width: 658px;
        }

        &-right {
            position: absolute;
            z-index: 9;
            top: 75px;
            left: calc(50% - 600px + 970px);
            width: 568px;
        }
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        justify-content: center;
        z-index: 10;
        align-items: flex-end;
        gap: 40px;
        width: 100%;
        @media (max-width: 1199px) {
            gap: 0;
        }
        @media (max-width: 940px) {
            gap: 15px;
        }

        &-title {
            color: #ffffff;
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            @media (max-width: 767px) {
                font-size: 28px;
                text-align: center;
            }
        }

        &-wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px 40px;
            padding: 0 20px;
            width: 460px;
            @media (max-width: 767px) {
                gap: 15px;
            }

            &__block {
                display: flex;
                align-items: flex-start;
                gap: 0 10px;
                background: #fff;
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0px 2px 10px #999;

                &-img {
                    width: 20px;
                }

                &-content {

                }

                &-title {
                    font-weight: bold;
                    font-size: 18px;
                    color: #1B3C66;
                    margin: 0;
                    margin-bottom: 5px;
                }

                &-text {
                    color: #969BAB;
                    font-size: 14px;
                    margin: 0;
                }

                &-list {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    margin-top: 20px;
                }

                &-items {
                    font-size: 18px;
                    line-height: 1.8;
                    margin: 0;
                }
            }
        }
    }
}

.expectations:after {
    position: absolute;
    content: '';
    background-image: url("../../static/img/coach-page/expectations-bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 858px;
    width: 100%;
    z-index: 5;

    @media (max-width: 940px) {
        height: 1500px;
    }
    @media (max-width: 480px) {
        height: 1450px;
    }
}
</style>
