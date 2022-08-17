<template>
    <section class="classes-about">
        <div class="classes-about__decoration">
            <div class="classes-about__decoration-image-wrap">
                <img src="@/static/img/horse.png" alt="horse" class="classes-about__decoration-horse">
            </div>
            <img src="@/static/img/about-page/pawn-about.png" alt="pawn" class="classes-about__decoration-pawn">
        </div>
        <div class="container">
            <div class="classes-about__content">
                <h2 class="classes-about__title">{{ title }}</h2>
                <p class="classes-about__text">{{ $t('price_list_details') }}</p>
                <div class="classes-about__wrapper" @mouseover="mouseOverP($event)" @mouseout="mouseOutP($event)">

                    <div
                        class="classes-about__wrapper-list"
                        v-for="(list, lessonGroup) in priseList"
                        :key="lessonGroup"
                    >
                        <div class="hover-shield"></div>
                        <div class="classes-about__wrapper-list__top">
                            <h4 class="classes-about__wrapper-list__top-title">{{ lessonGroup.split(' ')[0] }} {{ $t('price_les_min') }}</h4>
                        </div>
                        <div class="classes-about__wrapper-list__bottom">
                            <!--              {{ price.title }}-->
                            <button class="classes-about__wrapper-list__bottom-link"
                                v-for="price in list"
                                @click.prevent="$emit('buyProduct', {
                                    id: 1,
                                    title:`${price.title} - ${price.items_number} ${formatLessonWord(price.items_number)}`,
                                    unitPrice: `${price.item_price * price.items_number}`,
                                    count: 1,
                                })"
                            >
              <span class="lpart">
                <span class="lc">{{ price.items_number }}</span>
                <span class="lw">{{ formatLessonWord(price.items_number) }}</span>
              </span>
                                <span class="rpart">{{ price.item_price }} {{ '₽' }}</span>
<!--                                <span class="rpart">{{ price.item_price }} {{ $i18n.locale === 'ru' ? '₽' : '€' }}</span>-->
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ClassesAbout",
    props: ['title', 'priseList'],
    methods: {
        formatLessonWord(count) {
            const value = Math.abs(count) % 100;
            const num = value % 10;
            if (value > 10 && value < 20) return this.$i18n.t('price_les_f2');
            if (num > 1 && num < 5) return this.$i18n.t('price_les_f1');
            if (num === 1) return 'занятие';
            return this.$i18n.t('price_les_f2');
        },
        mouseOverP: function (event) {
            document.querySelectorAll('.classes-about__wrapper-list').forEach((el) => {
                el.querySelector('.hover-shield').classList.add("hover-shield-active");
            })
            if (event.target.closest('.classes-about__wrapper-list')) {
                event.target.closest('.classes-about__wrapper-list').querySelector('.hover-shield').classList.remove("hover-shield-active");

                document.querySelectorAll('.classes-about__wrapper-list').forEach((el) => {
                    el.querySelector('.hover-shield').style.display = 'block';
                })
                event.target.closest('.classes-about__wrapper-list').querySelector('.hover-shield').style.display = 'none';

            }
        },
        mouseOutP: function () {
            document.querySelectorAll('.classes-about__wrapper-list').forEach((el) => {
                el.querySelector('.hover-shield').classList.remove("hover-shield-active");
            });

            document.querySelectorAll('.classes-about__wrapper-list').forEach((el) => {
                el.querySelector('.hover-shield').style.display = 'block';
            })
        },
    },
}
</script>

<style scoped lang="scss">
.hover-shield {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    opacity: 0;
    z-index: 90;
    display: block;
}

.classes-about__wrapper .hover-shield .hover-shield-active {
    opacity: 0.7;
}

.hover-shield-active {
    opacity: 0.7;
}

.classes-about {
    margin-top: 50px;
    margin-bottom: 100px;
    position: relative;

    &__decoration {
        &-horse {
            position: absolute;
            width: 150px;
            right: 0;
            top: -60px;
            transform: rotate(20deg);
            animation: king-move 4s infinite ease;
            @media (max-width: 900px) {
                display: none;
            }
        }

        &-pawn {
            position: absolute;
            bottom: -70px;
            left: 300px;
            width: 100px;
            animation: king-move 4s infinite ease;
            pointer-events: none;
        }

        &-image-wrap {
            position: relative;
            max-width: 970px;
            margin: 0 auto;
        }
    }

    &__wrapper {
        display: flex;
        justify-content: center;
        gap: 25px;
        padding: 0 20px;
        @media (max-width: 1200px) {
            flex-wrap: wrap;
        }
        &-list {
            display: flex;
            text-align: center;
            flex-direction: column;
            width: 260px;
            border-radius: 20px;
            box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
            position: relative;

            &:nth-child(odd) {
                .classes-about__wrapper-list__top {
                    background: linear-gradient(180deg, #FEDF1D 0%, #E0BC00 100%);
                }
            }


            &__top {
                background: linear-gradient(180deg, #00B7FF 0%, #5374E9 100%), #0DAEFE;
                padding: 37px;
                border-radius: 20px 20px 0 0;

                &-title {
                    margin: 0;
                    line-height: 0.7;
                    color: #ffffff;
                    font-size: 26px;
                    font-weight: 700;
                }

                &-text {
                    margin: 3px 0 0 0;
                    font-size: 18px;
                    line-height: 1.4;
                    font-weight: 700;
                    color: #ffffff;
                }
            }

            &__bottom {
                padding: 25px 20px;
                background: #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px 0;
                border-radius: 20px;

                &-link {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    cursor: pointer;
                    color: #1b3c66;
                    font-size: 18px;
                    line-height: 1.4;
                    font-weight: 500;
                    margin: 0;
                    width: 100%;
                    height: 52px;
                    background: none;
                    border: 1px solid rgba(27, 60, 102, 0.3);
                    border-radius: 10px;
                    padding: 0;
                    transition: .3s;

                    &:hover {
                        transition: .3s;
                        opacity: 1;
                        background-color: #d1eeef;
                    }
                }
            }
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__title {
        font-size: 48px;
        line-height: 1;
        font-weight: 700;
        margin: 0;
        @media (max-width: 767px) {
            font-size: 38px;
            text-align: center;
        }
    }

    &__text {
        font-size: 18px;
        line-height: 1.55;
        font-weight: 700;
        margin-top: 30px;
    }
}

.lpart {
    display: flex;
    align-items: center;
}

.rpart {
    font-size: 18px;
    font-weight: bold;
    color: black;
}

.lc {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 5px;
    font-size: 26px;
    font-weight: bold;
}

.lw {
    font-size: 14px;
}

@media all and (max-width: 1024px) {
    .classes-about__decoration {
        display: none;
    }
}
</style>
