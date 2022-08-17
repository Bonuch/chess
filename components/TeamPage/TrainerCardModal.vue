<template>
    <section class='modal-body' id='modalDescription'>
        <div id='mainData' v-if='activeWindow === "main"'>
            <div class='wrapper'>
                <div class='trainers-team__content-wrapper__left'>
                    <div class='trainers-team__content-wrapper__left-top'>
                        <img :src='trainer.avatar' alt='' class='trainers-team__content-left__img'>
                        <div class='trainers-team__content-left__block'>
                            <h4 class='trainers-team__content-left__name'>{{ trainer.full_name }}</h4>
                            <p class='trainers-team__content-left__rank'>{{ trainer.degree }}</p>
                            <Rating :rating='trainer.rating.average' :votes='trainer.rating.votes' @showReviews='showReviews'/>
                        </div>
                    </div>
                    <div class='trainers-team__content-left__wrapper'>
                        <div class='card__block'>
                            <div class='trainers-team__content-left__about'>
                                <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.experience') }}</p>
                                <p class='trainers-team__content-left__about-bottom'>{{ trainer.experience }}
                                    {{ $tc('teamPage.exp_year', $helpers.wordDeclension(trainer.experience)) }}</p>
                            </div>
                            <div class='trainers-team__content-left__about'>
                                <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.teach_age') }}</p>
                                <p class='trainers-team__content-left__about-bottom'>{{
                                        $t('teamPage.child_range', {
                                            from: trainer.age_from,
                                            end: trainer.age_to,
                                        })
                                    }}
                                </p>
                            </div>
                        </div>
                        <div class='card__block'>
                            <div class='trainers-team__content-left__about'>
                                <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.country') }}</p>
                                <p class='trainers-team__content-left__about-bottom'>{{ trainer.country }}</p>
                            </div>
                            <div class='trainers-team__content-left__about'>
                                <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.language') }}</p>
                                <p class='trainers-team__content-left__about-bottom'>{{
                                        $t('teamPage.' + trainer.language)
                                    }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='trainers-team__content-wrapper__right'>
                    <div class='description-wrapper'>
                        <p class='trainers-team__content-right__description'>{{ trainer.description }}{{ trainer.description }}</p>
                    </div>
                    <div class='trainers-team__content-right__bottom'>
                        <button
                            type='button'
                            class='rate-btn'
                            @click="changeActiveWindow('review')"
                        >{{ $t('teamPage.team_rate') }}
                        </button>
<!--                        <RateButtonMobile :trainer='trainer' :key='trainer.id' @voted='handleVoted' />-->
                        <a
                            type='button'
                            @click.prevent="videoModalFunc({type: 'video', data: {
              videoUrl: trainer.video_url
            }})"
                            class='trainers-team__content-right__btn-video'>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1417 6.28502C13.4364 7.06182 13.4364 8.93818 12.1417 9.71499L3.02899 15.1826C1.69594 15.9824 8.31885e-08 15.0222 1.48576e-07 13.4676L6.08527e-07 2.53238C6.73915e-07 0.977792 1.69594 0.0175658 3.02899 0.817395L12.1417 6.28502Z" fill="#1B3C66"/>
                            </svg>

                            {{ $t('teamPage.helloVid') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id='writeReview' v-else-if='activeWindow === "review"'>
            <a class='back-btn' @click.prevent='changeActiveWindow("main")'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2448 15.8995L7.10051 15.8995L11.2448 11.9142L11.2448 15.8995Z" fill="#1B3C66"/>
                    <path d="M11.2448 19.5676L7.10051 15.8995L11.2448 15.8995L11.2448 19.5676Z" fill="#1B3C66"/>
                    <path d="M26.8995 15.8995L11.2448 15.8995M7.10051 15.8995L11.2448 11.9142L11.2448 15.8995M7.10051 15.8995L11.2448 19.5676L11.2448 15.8995M7.10051 15.8995L11.2448 15.8995" stroke="#1B3C66" stroke-width="2"/>
                </svg>
                {{ $t('teamPage.goback') }}
            </a>
            <div class='wrapper'>
                <div class='review-wrapper'>
                    <ReviewModalMobile :trainer='trainer' @reviewAccepted='reviewAccept'/>
                </div>

            </div>
        </div>

        <div id='reviews' v-else-if='activeWindow === "reviews"'>
            <a class='back-btn' @click.prevent='changeActiveWindow("main")'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2448 15.8995L7.10051 15.8995L11.2448 11.9142L11.2448 15.8995Z" fill="#1B3C66"/>
                    <path d="M11.2448 19.5676L7.10051 15.8995L11.2448 15.8995L11.2448 19.5676Z" fill="#1B3C66"/>
                    <path d="M26.8995 15.8995L11.2448 15.8995M7.10051 15.8995L11.2448 11.9142L11.2448 15.8995M7.10051 15.8995L11.2448 19.5676L11.2448 15.8995M7.10051 15.8995L11.2448 15.8995" stroke="#1B3C66" stroke-width="2"/>
                </svg>
                вернутся
            </a>
            <div class='wrapper'>
                <div class='reviews-wrapper'>
                    <ReviewBlockMobile :key='trainer.id' :reviews='reviews' :reviewsPagination='reviewsPagination'/>
                </div>

            </div>
        </div>

        <a class='close-btn' @click.prevent='$emit("closeOverlay")'>
            <svg class='t706__cartwin-close-icon' width='17px' height='17px' viewBox='0 0 23 23' version='1.1'
                 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
                <g stroke='none' stroke-width='1' fill='#1B3C66' fill-rule='evenodd'>
                    <rect
                        transform='translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) '
                        x='10.3137085' y='-3.6862915' width='2' height='30'></rect>
                    <rect
                        transform='translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) '
                        x='10.3137085' y='-3.6862915' width='2' height='30'></rect>
                </g>
            </svg>
        </a>

    </section>
</template>

<script>
import Rating from './Rating';
import RateButtonMobile from './RateButtonMobile';
import ReviewModalMobile from './ReviewModalMobile';
import ReviewBlockMobile from './ReviewBlockMobile';

export default {
    name: 'TrainerCardModal',
    components: { ReviewBlockMobile, Rating, RateButtonMobile, ReviewModalMobile },
    props: {
        videoModalFunc: {
            type: Function,
            required: true,
        },
        trainer: {
            type: Object,
        }
    },
    data() {
        return {
            activeWindow: 'main',
            reviews: null,
            nextReviewPage: null,
            perPageData: null,
            totalRows: null,
            preloader: false,
            fetched: false,
            emptyReviews: false,
        }
    },
    computed: {
        reviewsPagination() {
            return {
                next: this.nextReviewPage,
                total: this.totalRows,
                per_page: this.perPageData,
            };
        },
    },
    methods: {
        async handleVoted(data) {
            await this.$emit('update:trainer', data);
        },
        changeActiveWindow(name) {
            this.activeWindow = name
        },
        reviewAccept() {
            this.$emit('closeOverlay')
        },
        async showReviews() {
            if (this.fetched || this.emptyReviews) {
                if (!this.emptyReviews) {
                    this.activeWindow = 'reviews'
                }
                return
            }
            // this.preloader = true;
            try {
                const data = await this.$axios.$get(`/rating/${this.trainer.id}/reviews`);
                if (data.result) {
                    if (data.result.length) {
                        this.fetched = true;
                        this.reviews = data.result;
                        this.activeWindow = 'reviews'
                    } else {
                        this.emptyReviews = true
                    }
                }
            } catch (e) {
                alert(e);
            }
            // this.preloader = false;
        }
    },

};
</script>

<style lang='scss' scoped>
.close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
}

h4, p {
    margin: 0;
}

.modal {
    width: 395px;
    position: relative;
    padding: 0 10px;
    z-index: 10;
}

.trainers-team__content-right__rating {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.trainers-team__content-right__rating .trainers-team__content-left__stars
.trainers-team__content-left__stars-img {
    width: 35px;
}

.modal-body {
    padding: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px -10px 34px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
    position: relative;
    padding: 48px 20px 48px;
}

.modal-body__text {
    font-weight: 300;
    text-align: center;
    background-color: #FFFFFF;
    color: #1b3c66;
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    line-height: 1.55;
    @media(max-width: 1200px) {
        font-size: 18px;
    }
}

.modal-body__wrapper {

}

.trainers-team__content-wrapper__left {
    display: flex;
    flex-direction: column;

}

.trainers-team__content-wrapper__left-top {
    display: flex;
    gap: 17px;
    align-items: flex-start;
}

.trainers-team__content-left__img {
    max-width: 64px;
    max-height: 64px;
    object-fit: cover;
    border-radius: 50%;
}

.trainers-team__content-left__name {
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 140%;
}

.trainers-team__content-left__rank {
    line-height: 140%;
    font-weight: 500;
    margin-bottom: 10px;
}

.trainers-team__content-left__wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 315px;
    gap: 15px 50px;
    justify-content: flex-start;
    //margin-top: 20px;
}

.trainers-team__content-left__about {

    &-top {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #969BAB;
        min-width: 90px;
    }

    &-bottom {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #1B3C66;
        min-width: 90px;
    }
}

.trainers-team__content-right__description {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #1B3C66;
    height: 100%;

    /* Landscape phones and portrait tablets */
    @media (max-width: 767px) {
        max-width: 400px;
    }

    /* Landscape phones and smaller */
    @media (max-width: 480px) {
        max-width: 315px;
    }
}

.trainers-team__content-right__bottom {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    position: relative;
}

.trainers-team__content-right__btn-rating {
    position: relative;
    background: rgba(255, 206, 56, 0.5);
    border-radius: 12px;
    padding: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #1B3C66;
    border: none;
    cursor: pointer;
    @media(max-width: 400px) {
        padding: 6px;
    }
}

.trainers-team__content-right__btn-video {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 8px;
    border: 1px solid #1B3C66;
    box-sizing: border-box;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    background-color: transparent;
    color: #1B3C66;
    padding: 16px;
    cursor: pointer;
    white-space: nowrap;
    width: 202px;
    @media(max-width: 400px) {
        padding: 6px;
    }
}

.final-grade {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-color: rgba(255, 206, 56, 0.5);
    border-style: dashed;
    width: 99px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px !important;
    flex-direction: row !important;
    font-size: 24px;

    &__img {
        width: 30px;
    }
}
.card__block {
    display: flex;
    flex: 1;
    .trainers-team__content-left__about {
        width: 50%;
    }
}
.rate {
    position: relative;

    &-bar {
        position: absolute;
        bottom: -30px;
        //width: 100%;
    }

    &-btn {
        background: rgba(255, 206, 56, 0.5);
        border-radius: 12px;
        padding: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #1B3C66;
        border: none;
        cursor: pointer;
        transition: .3s;
        position: relative;

        @media screen and (max-width: 1000px) {
            //width: 100%;

        }

        &:active {
            transform: scale(0.98);
            transition: .3s;
        }
    }
}
.wrapper {
    width: 315px;
}

.back-btn {
    left: 20px;
    top: 12px;
    position: absolute;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-weight: 600;
}

.description-wrapper {
    margin-top: 20px;
    height: 160px;
    overflow-y: auto;
}

.reviews-wrapper {
    height: 465px;
}
</style>
