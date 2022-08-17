<template>
    <div class="start-trial-modal" id="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <section class="modal-body" id="modalDescription">
            <div class="Buyers-input__inner-block modal-input">
                <div class="question-modal-wrapper">
                    <img src="@/static/img/question/modal-head.png" alt="">
                    <div class="question-modal">
                        <h3 class="question-modal-title">{{$t('main_question_modal_true_1')}}</h3>
                        <p class="question-modal-text"> {{$t('main_question_modal_true_2')}}</p>
                        <button
                            type="button"
                            @click="setPromoCode"
                            class="promo__button custom-btn custom-btn-rounded-xl custom-btn-font-size-32 py-5 custom-btn-orange">
                            <span class="promo__button-text">{{ $t('main_question_modal_button') }}</span>
                        </button>
                        <p class="question-modal-desc">{{ $t('main_question_modal_button_desc') }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "ModalQuestionTrue",
    data() {
        return {
            titleModal: 'ModalQuestionTrue',
            isModalVisible: false,
            showModal: false,
        }
    },
    methods: {
        ...mapActions({
            openModal: 'changeModalQuestion/openModal',
            closeModal: 'changeModalQuestion/closeModal',
        }),
        setPromoCode() {
            document.cookie = "promo=wingame;max-age=3600;path=/";
            this.closeModal()
        }
    },
}
</script>

<style scoped lang="scss">
.start-trial-modal {
    width: unset;
    border-radius: 32px;
}
.modal-body {
    padding: 0;
}
.question-modal-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 534px;
    & img {
        width: 100%;
    }
    & .promo__button {
        max-width: 100%;
    }
}
.question-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 48px 70px;
    &-title {
        font-weight: 700;
        font-size: 48px;
        line-height: 1.3;
        margin: 0;
        margin-top: 21px;
        margin-bottom: 12px;
    }
    &-text {
        opacity: 0.6;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.55;
        margin: 0;
        margin-bottom: 32px;
        text-align: center;
    }
    &-desc {
        opacity: 0.5;
        font-weight: 500;
        font-size: 12px;
        margin: 0;
        margin-top: 10px;
    }
}
.promo__button-text {
    letter-spacing: 0.08em;
}
@media (max-width: 560px) {
    .question-modal-wrapper {
        & .py-6 {
            padding-top: 12px;
            padding-bottom: 12px;
        }
        & .custom-btn {
            font-size: 24px !important;
        }
    }
    .question-modal {
        padding: 0 15px 30px;

        &-title {
            font-size: 24px;
            letter-spacing: -0.01em;
            margin-top: 16px;
        }
        &-text {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 20px;
        }
        &-desc {
            font-size: 8px;
            margin-top: 10px;
        }
    }
}
</style>
