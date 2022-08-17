<template>
    <div class="parents-review-slider">
        <VueSlickCarousel v-bind="settings">
            <template #prevArrow="arrowOption">
                <div class="custom-arrow">
                    <div class="parents-review parents-review__prev">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="32" transform="matrix(-1 0 0 1 32 32)" fill="#E7EDF9"/>
                            <rect width="2.57607" height="17.1738"
                                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 33.8555 44.8784)"
                                  fill="#1B3C66"/>
                            <rect width="2.57607" height="17.1738"
                                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 35.6777 22.4126)"
                                  fill="#1B3C66"/>
                        </svg>
                    </div>
                </div>
            </template>
            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                    <div class="parents-review parents-review__next">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="32" fill="#E7EDF9"/>
                            <rect x="30.1445" y="44.8784" width="2.57607" height="17.1738"
                                  transform="rotate(-135 30.1445 44.8784)" fill="#1B3C66"/>
                            <rect x="28.3223" y="22.4126" width="2.57607" height="17.1738"
                                  transform="rotate(-45 28.3223 22.4126)" fill="#1B3C66"/>
                        </svg>
                    </div>
                </div>
            </template>
            <div class="parents-review-slider-wrapper"
            v-for="(item, indexInx) in reviewsWithResponse"
            :key="indexInx">
                <div class="parents-review-slider-decoration">
                    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38 4.99783C32.3085 7.77442 29.4627 11.0369 29.4627 14.7853C31.8886 15.0629 33.8946 16.0463 35.4808 17.7354C37.067 19.4244 37.86 21.3796 37.86 23.6009C37.86 25.961 37.0903 27.9508 35.5508 29.5705C34.0113 31.1902 32.0752 32 29.7426 32C27.1301 32 24.8675 30.9472 22.9548 28.8417C21.0421 26.7361 20.0857 24.1793 20.0857 21.1714C20.0857 12.1475 25.1707 5.09041 35.3409 0L38 4.99783ZM17.9143 4.99783C12.1761 7.77442 9.30703 11.0369 9.30703 14.7853C11.7796 15.0629 13.8089 16.0463 15.3951 17.7354C16.9813 19.4244 17.7743 21.3796 17.7743 23.6009C17.7743 25.961 16.9929 27.9508 15.4301 29.5705C13.8672 31.1902 11.9195 32 9.58694 32C6.97443 32 4.7235 30.9472 2.8341 28.8417C0.944689 26.7361 0 24.1793 0 21.1714C0 12.1475 5.06167 5.09041 15.1852 0L17.9143 4.99783Z" fill="#E6EDF9"/>
                    </svg>
                </div>
                <div class="slide-content-top">
                    <div class="slide-content-top-block">
                        <img :src="item.teacher_img" :alt="item.teacher">
                        <div class="slide-content-top-student">
                            <p class="slide-content-top-student-name">{{ item.customer }}</p>
                            <p class="slide-content-top-student-info" v-if="item.child_age">Ребенку {{item.child_age}} {{ getAge(item.child_age) }}</p>
                            <p class="slide-content-top-student-info" v-else>{{ item.review_text }}</p>
                        </div>
                    </div>
                    <p class="slide-content-top-review" v-html="item.review">{{ item.review }}</p>
                </div>
                <div class="slide-content-bottom" v-if="item.button">
                    <div class="slide-content-bottom-trainer">
                        <a
                            href="#"
                            class="start-trial__button-child custom-btn custom-btn-rounded-md custom-btn-orange w-full"
                            @click.prevent="showModal"
                        >
                            {{ item.button }}
                        </a>
                    </div>
                </div>
                <div class="slide-content-bottom" v-else>
                    <div class="slide-content-bottom-trainer">
                        <div class="slide-content-bottom-trainer-rating">
                            <div class="slide-content-bottom-trainer-rating-flex">
                                <p class="parents-review-grade">{{ item.mark }}<span>/5</span></p>
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1373 1.47145C14.5237 0.812465 15.4763 0.812466 15.8627 1.47145L19.9702 8.47755C20.1112 8.71803 20.3461 8.88875 20.6184 8.94852L28.5509 10.69C29.297 10.8538 29.5914 11.7598 29.0841 12.3309L23.6901 18.4023C23.505 18.6107 23.4152 18.887 23.4425 19.1644L24.2376 27.2468C24.3124 28.007 23.5417 28.567 22.8418 28.2609L15.4006 25.0072C15.1452 24.8955 14.8548 24.8955 14.5994 25.0072L7.15825 28.2609C6.45835 28.567 5.68763 28.007 5.76242 27.2468L6.55746 19.1644C6.58475 18.887 6.495 18.6107 6.30986 18.4023L0.915945 12.3309C0.408602 11.7598 0.70299 10.8538 1.44911 10.69L9.38159 8.94852C9.65387 8.88875 9.88884 8.71803 10.0298 8.47755L14.1373 1.47145Z" fill="#FFCE38"/>
                                </svg>
                            </div>
                        </div>
                        <div class="slide-content-bottom-trainer-info">
                            <p class="slide-content-bottom-trainer-info-coach">Тренер:</p>
                            <button type="button" @click="handleShowReview(item.teacher_id)" class="slide-content-bottom-trainer-info-name">{{ item.teacher }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>

    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import ParentsReviewsModal from "@/components/ParentsReviews/ParentsReviewsModal";
import TrainerCardModal from "@/components/TeamPage/TrainerCardModal";

export default {
    name: "ParentsReviewsSlider",
    components: {VueSlickCarousel},
    props: {
        reviews: {
            type: Array,
            required: true
        },
        response: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            "settings": {
                'draggable': true,
                'arrows': true,
                "slidesToShow": 2,
                'infinite': false,
                "responsive": [
                    {
                    "breakpoint": 767,
                    "settings": {
                        "slidesToShow": 1,
                    }
                },
                ]
            },
            isScroll: false,
        }
    },
    methods:{

        getAge($age){
            let age_str = '';

            switch(this.$helpers.wordDeclension($age)) {
                case 0:
                    age_str = 'год';
                    break;
                case 1:
                    age_str = 'года';
                    break;
                case 2:
                    age_str = 'лет';
                    break;
            }

            return age_str;
        },
        async handleShowReview(trainerId) {
            try {
                const {data} = await this.$axios.get(`/rating/teacher/${trainerId}`, {
                    params: {
                        lang: this.$i18n.locale
                    }
                });

                this.$store.commit('setModalTrainer', data.data);
                const modalName = window.innerWidth >= 996 ? "ParentsReviewsModal" : "ParentsReviewsModalMobile";
                this.$emit('on-open-trainer-modal', modalName);
            } catch (ex) {
                //TODO: если данные не пришли вывести модалку "Что-то пошло не так, попробуйте позже"
                console.log('cant fetch coach: ' + ex);
            }
        },
        showModal() {
            this.$store.dispatch('changeModal/openModal', 'ModalMain');
        },
    },
    computed: {
        reviewsWithResponse() {
            const firstPart = this.reviews.slice(0, 4)
            const secondPart = this.reviews.slice(4, 10)
            return [...firstPart, ...this.response, ...secondPart]
        }
    }
}
</script>

<style lang="scss">
.parents-review-slider {

    position: relative;

    & .slick-track {
        display: flex !important;
        height: 100%;
    }
    & .slick-slide {
        height: auto !important;
        & div[data-v-e4caeaf8] {
            height: 100%;
        }
    }
    &-wrapper {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        padding: 32px;
        height: 100%;
        .slide-content-top {
            display: flex;
            flex-direction: column;
            height: unset !important;
             &-review {
                 line-height: 1.5;
                 margin-top: 0;
                 height: 100%;
                 &__span {
                     padding-bottom: 26px;
                 }
             }
            &-block {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 32px;

                img {
                    max-width: 64px;
                    max-height: 64px;
                    border-radius: 100%;
                }
            }
            &-student {
                margin-left: 24px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &-name {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 1.5;
                    margin: 0;
                }
                &-info {
                    margin: 0;
                }
            }
        }
        .slide-content-bottom {
            border-top: 1px solid rgba(27, 60, 102, 0.1);
            padding-top: 24px;
            height: unset !important;

            &-trainer {
                display: flex;
                justify-content: space-between;
                & .custom-btn {
                    padding-top: 12px;
                    padding-bottom: 14px;
                    line-height: 1.5;
                    text-shadow: 0px 8px 39px #DB5000;
                }
                &-rating {
                    &-flex {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0 8px;
                        background: rgba(230, 237, 249, 0.5);
                        border-radius: 16px;
                        padding: 9px 12px;
                    }
                }
                &-info {
                    text-align: right;
                    &-coach {
                        margin: 0;
                        color: #969BAB;
                        line-height: 1.6;
                    }
                    &-name {
                        margin: 0;
                        padding: 0;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                        color: #1B3C66;
                        line-height: 1.6;
                        transition: .3s;
                        &:hover {
                            transition: .3s;
                            opacity: 0.6;
                        }
                    }
                }
            }
        }
    }
    &-decoration {
        position: absolute;
        top: 32px;
        right: 32px;
        height: unset !important;

    }
}
.slick-prev {
    &.slick-disabled {
        .parents-review__prev {
            opacity: .3;
        }
    }
}

.parents-review__prev {
    position: absolute;
    cursor: pointer;
    bottom: -67px;
    left: 44%;
    transform: translateX(-44%);
    transition: .3s;

    &:hover {
        transition: .3s;
        opacity: 0.6;
    }
}

.parents-review__next {
    position: absolute;
    cursor: pointer;
    left: 56%;
    transform: translateX(-56%);
    transition: .3s;

    &:hover {
        transition: .3s;
        opacity: 0.6;
    }
}
.parents-review-grade {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
    & span {
        opacity: 0.5;
        font-weight: 300;
    }
}
@media (max-width: 967px) {
    .parents-review__prev {
        left: calc(46% - 10px);
    }
    .parents-review__next {
        left: calc(54% + 10px);

    }
}
@media (max-width: 767px) {
    .parents-review-slider {
        &-wrapper {
            padding: 25px 15px 25px 30px;
            .slide-content-top {
                &-review {
                    font-size: 13px;
                }
                &-student {
                    &-name {
                        font-size: 14px;
                    }
                    &-info {
                        font-size: 13px;
                    }
                }
            }
            .slide-content-bottom {
                &-trainer {
                    &-info {
                        &-coach {
                            font-size: 13px;
                        }
                        &-name {
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
    .parents-review {
        & svg {
            width: 44px;
        }
    }
    .parents-review-grade {
        font-size: 18px;
        line-height: 1.5;
    }
    .parents-review__prev {
        left: calc(46% - 15px);
    }
    .parents-review__next {
        left: calc(54% + 15px);

    }
}

</style>
