<template>
    <section class="question">
        <div class="container">
            <div class="question-wrapper">
                <img src="@/static/img/question/question-bg.png" alt="bg" class="question__img-bg">
                <div class="question-content">
                    <h3 class="question__img-title">{{ $t('main_did_u_know_title') }}</h3>
                    <p class="question__img-descr">{{ $t('main_did_u_know') }}</p>
                    <div class="question-content-buttons">
                        <button class="custom-btn btn-anim-scale custom-btn-orange"
                                @click.prevent="showModalFalse"
                                type="button" v-html="$t('main_did_u_know_gambit')">
                        </button>
                        <button class="custom-btn btn-anim-scale custom-btn-orange"
                                @click.prevent="showModalTrue"
                                type="button" v-html="$t('main_did_u_know_legal')">
                        </button>
                    </div>
                </div>
                <div class="question-content-images">
                    <img class="question-content-images-symbol symbol-animation" src="@/static/img/question/question-symbol.png"
                         alt="symbol">
                    <img class="question-content-images-circle circle-animation" src="@/static/img/question/question-circle.svg"
                         alt="circle">
                    <img class="question-content-images-chess chess-animation" src="@/static/img/question/question-chess.png"
                         alt="chess">
                    <img class="question-content-images-chess-mobile" src="@/static/img/question/question-chess-mobile.png"
                         alt="chess">
                </div>
            </div>
        </div>
        <ModalQuestion @close="closeModal"/>
    </section>
</template>

<script>
export default {
    name: "Question",
    components: {
        ModalQuestion: () => import('~/components/ModalQuestion/ModalQuestion.vue'),
    },
    data() {
        return {
            isModalVisible: false,
            isScroll: false,
        }
    },
    methods: {
        showModalTrue() {
            this.$store.dispatch('changeModalQuestion/openModal', 'ModalQuestionTrue');
            this.isModalVisible = true;
        },
        showModalFalse() {
            this.$store.dispatch('changeModalQuestion/openModal', 'ModalQuestionFalse');
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;
        },
    },

}
</script>

<style scoped lang="scss">
.question {
    position: relative;
    padding: 0 16px;
    margin-top: 256px;
    margin-bottom: -200px;
    z-index: 1000;
    transform: unset !important;
    &-wrapper {
        position: relative;
        margin-bottom: -4px;
        overflow: hidden;
    }

    &-content {
        position: absolute;
        top: 84px;
        left: 64px;

        &-images {
            position: absolute;
            top: 0;
            right: 56px;
            width: 36%;
            &-chess-mobile {
                display: none;
            }
            &-chess {
                max-width: 387px;
                width: 100%;
            }
            &-symbol {
                position: absolute;
                left: -101px;
                top: 85px;
                width: 73px;
            }
            &-circle {
                position: absolute;
                width: 135%;
                height: 162%;
                left: -105px;
                top: -105px;
            }
        }

        &-buttons {
            display: flex;
            gap: 12px;
            margin-top: 45px;

            & button {
                border-radius: 16px;
                max-width: 220px;
                width: 220px;
                padding-top: 15px;
                padding-bottom: 15px;
            }
        }
    }

    &__img {
        &-title {
            font-size: 48px;
            font-weight: 800;
            letter-spacing: -0.01em;
            color: #fff;
            margin: 0;
            margin-bottom: 12px;
        }

        &-descr {
            font-size: 18px;
            font-weight: 500;
            color: #fff;
            margin: 0;
        }

        &-bg {
            width: 100%;

            &-mobile {
                display: none;
            }
        }
    }
}

@media (max-width: 1199px) {
    .question {
        &-content {
            top: 6vw;
        }
    }
}

@media all and (max-width: 992px) {
    .question {
        margin-top: 126px;

        &-content {
            left: 6vw;

            &-images {
                right: 10px;

                &-symbol {
                    left: -23%;
                    top: 82px;
                    width: 5vw;
                }
            }

            &-buttons {

                & button {
                    max-width: 200px;
                }
            }
        }
    }
}

@media all and (max-width: 860px) {
    .question {
        &__img {
            &-title {
                font-size: 34px;
            }

            &-descr {
                font-size: 16px;
            }
        }

        &-content {
            top: 3vw;
            left: 3vw;
            width: 50%;

            &-buttons {

                & button {
                    font-size: 18px;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .question {
        margin-top: 80px;

        &-content {
            &-images {
                right: 5px;

                &-symbol {
                }
            }
        }
    }
}

@media all and (max-width: 680px) {
    .question {
        &__img {
            &-bg {
                height: 207px;
            }
        }

        &-content {
            &-images {
                width: 232px;
                height: 207px;

                &-symbol {
                }
            }

            &-buttons {
                margin-top: 20px;

                & button {
                    padding-left: 10px;
                    padding-right: 10px;
                }
            }
        }
    }
}

@media (max-width: 580px) {
    .question {
        &-wrapper {
            background: url("/img/question/question-bg-mobile.png") no-repeat;
            background-size: 100%;
            width: 100%;
            height: 135vw;
        }
        &-content {
            top: unset;
            left: 15px;
            bottom: 30px;
            width: 92%;
            &-images {
                top: 15px;
                left: 15px;
                right: unset;
                width: unset;
                &-chess-mobile {
                    display: block;
                    width: 97%;
                }
                &-chess {
                    display: none;
                }
                &-circle {
                    display: none;
                }
                &-symbol {
                    display: none;
                }
            }
            &-buttons {
                margin-top: 39px;

                & button {
                    padding-top: 13px;
                    padding-bottom: 13px;
                    font-size: 16px;
                    border-radius: 12px;
                }
            }
        }

        &__img {
            &-bg {
                display: none;
                height: unset;

                &-mobile {
                    display: block;
                }
            }
        }
    }
}

@media all and (max-width: 480px) {
    .question {
        &-content {
            &-images {
                &-chess-mobile {
                    width: 96%;
                }
            }
        }
        &__img {
            &-title {
                font-size: 24px;
            }

            &-descr {
                font-size: 14px;
            }
        }
    }
}

@media all and (max-width: 400px) {
    .question {
        &__img {
            &-bg {
                &-mobile {
                    height: 500px;
                }
            }
        }

        &-content {
            width: 92%;
            bottom: 30px;

            &-buttons {
                margin-top: 30px;

                & button {

                }
            }
        }
    }
}
</style>
