<template>
    <div class='trainers-team__content-wrapper'>
        <Preloader class='preloader' v-if='preloader' title='подождите идет загрузка' />
        <div class='trainers-team__content-wrapper__left'>
            <img :src='cardData.avatar' alt='#' class='trainers-team__content-left__img'>
            <div class='trainers-team__content-left__block'>
                <h4 class='trainers-team__content-left__name'>{{ cardData.full_name }}</h4>
                <p class='trainers-team__content-left__rank'>{{ cardData.degree }}</p>
                <div class='trainers-team__content-left__stars'>
                    <Rating :rating='cardData.rating.average' :votes='cardData.rating.votes' :class='{"fetched": fetched}'
                            @showReviews='showReviews' />
                </div>
                <div class='trainers-team__content-left__wrapper'>
                    <div class='trainers-team__content-left__about'>
                        <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.experience') }}</p>
                        <p class='trainers-team__content-left__about-bottom'>{{ cardData.experience }}
                            {{ $tc('teamPage.exp_year', $helpers.wordDeclension(cardData.experience)) }}</p>
                    </div>
                    <div class='trainers-team__content-left__about'>
                        <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.teach_age') }}</p>
                        <p class='trainers-team__content-left__about-bottom'>{{
                                $t('teamPage.child_range', {
                                    from: cardData.age_from,
                                    end: cardData.age_to,
                                })
                            }}</p>
                    </div>
                    <div class='trainers-team__content-left__about'>
                        <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.country') }}</p>
                        <p class='trainers-team__content-left__about-bottom'>{{ cardData.country }}</p>
                    </div>
                    <div class='trainers-team__content-left__about'>
                        <p class='trainers-team__content-left__about-top'>{{ $t('teamPage.language') }}</p>
                        <p class='trainers-team__content-left__about-bottom'>{{
                                $t('teamPage.' + cardData.language)
                            }}</p>
                    </div>

                </div>
            </div>
        </div>
        <div v-if='reviews && reviews.length' class='trainer-review trainers-team__content-wrapper__right'>
            <client-only>
                <ReviewBlock :key='cardData.id' :reviews='reviews' :pagination='reviewsPagination'
                             @closeReviews='closeReviews'></ReviewBlock>
            </client-only>
        </div>
        <div v-else class='trainers-team__content-wrapper__right'>
            <p class='trainers-team__content-right__description'>{{ cardData.description }}</p>
            <div class='trainers-team__content-right__bottom'>
                <button
                    type='button'
                    class='rate-btn'
                    @click="$emit('showReview', cardData)"
                >{{ $t('teamPage.team_rate') }}
                </button>
                <!--                <RateButton :key='cardData.id' :trainer='cardData' @voted='handleVoted' />-->
                <a
                    type='button'
                    @click.prevent="$emit('showVideoModal', cardData.video_url)"
                    class='trainers-team__content-right__btn-video'>
                    <svg width='15' height='18' viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M15 9L0 18L7.57103e-07 0L15 9Z' fill='#1B3C66' />
                    </svg>
                    {{ $t('teamPage.helloVid') }}
                </a>
            </div>
        </div>

    </div>
</template>

<script>
import Rating from './Rating';
import RateButton from './RateButton';
import ReviewBlock from './ReviewBlock';
import Preloader from '../Preloader/Preloader';

export default {
    name: 'TrainerCard',
    components: { Preloader, ReviewBlock, RateButton, Rating },
    props: {
        trainer: {
            Type: Object,
        },
    },
    data() {
        return {
            reviews: null,
            nextReviewPage: null,
            perPageData: null,
            totalRows: null,
            preloader: false,
            fetched: false,
            emptyReviews: false,
        };
    },

    methods: {
        async handleVoted(data) {
            await this.$emit('update:trainer', data);
        },
        async showReviews() {
            if (this.fetched || this.emptyReviews) {
                return
            }
            this.preloader = true;
            try {
                const data = await this.$axios.$get(`/rating/${this.trainer.id}/reviews`);
                console.log(data)
                if (data.result) {
                    if (data.result.length) {
                        this.fetched = true;
                        this.reviews = data.result;
                    } else {
                        this.emptyReviews = true
                    }
                }
            } catch (e) {
                alert(e);
            }
            this.preloader = false;
        },
        closeReviews() {
            this.reviews = null;
            this.fetched = false;
        },
    },
    computed: {
        cardData() {
            return this.trainer;
        },
        reviewsPagination() {
            return {
                next: this.nextReviewPage,
                total: this.totalRows,
                per_page: this.perPageData,
            };
        },
    },
};
</script>

<style lang='scss' scoped>
h4, p {
    margin: 0;
}

.preloader {
    position: absolute;
    background: #00000022;
    border-radius: 32px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    z-index: 20
}

.trainers-team {
    margin-top: 50px;
    margin-bottom: 100px;
    @media (max-width: 767px) {
        display: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        padding: 0 10px;

        & span {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 0 10px;
        }

        &-container {
            position: relative;
        }

        &-decoration {
            max-width: 1126px;
        }

        &-btn {
            position: absolute;
            left: 50%;
            top: 45%;
            transform: translate(-50%, -55%);
            background-color: #498BDF;
            box-shadow: 0 4.28603px 14.2868px rgba(39, 39, 39, 0.25);
            border-radius: 12px;
            padding: 18px 60px;
            border: none;
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 140%;
            cursor: pointer;
        }

        &-wrapper {
            position: relative;
            display: flex;
            max-width: 1110px;
            background: #FFFFFF;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0px -10px 34px rgba(0, 0, 0, 0.07);
            border-radius: 32px;
            margin-bottom: 32px;

            &__left {
                display: flex;
                gap: 0 32px;
                padding: 48px;
                align-items: flex-start;
                position: relative;
                min-width: 597px;
                @media(max-width: 1150px) {
                    padding: 24px;
                    gap: 0 24px;
                    min-width: 60%;
                }

                &:after {
                    content: "";
                    position: absolute;
                    top: 24px;
                    right: 0;
                    height: calc(100% - 48px);
                    width: 1px;
                    background-color: #000000;
                    opacity: 0.3;
                }
            }

            &__right {
                display: flex;
                flex-direction: column;
                padding: 48px 48px 48px 24px;
                align-items: flex-start;
                gap: 12px;
                justify-content: space-between;
                min-width: 513px;
                @media(max-width: 1150px) {
                    padding: 24px;
                    min-width: 40%;
                }
            }
        }

        &-left {


            &__img {
                border-radius: 70.9784px;
                object-fit: cover;
                max-width: 136px;
            }

            &__block {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-width: 357px;
            }

            &__name {
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 140%;
            }

            &__rank {
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 140%;
                margin-top: 5px;
                margin-bottom: 12px;
            }

            &__stars {
                display: flex;
                gap: 5px;
                margin-bottom: 20px;

                &-img {

                }
            }

            &__wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                gap: 16px 45px;
                max-width: 400px;
            }

            &__about {
                display: flex;
                flex-direction: column;
                min-width: 100px;

                &-top {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 140%;
                    opacity: 0.5;
                }

                &-bottom {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 140%;
                }
            }
        }

        &-right {
            display: flex;

            &__description {
                //max-width: 513px;
                margin-bottom: 40px;
            }

            &__bottom {
                display: flex;
                justify-content: center;
                gap: 12px;
                @media screen and (max-width: 1000px) {
                    flex-wrap: wrap;
                }
            }

            &__btn {
                display: flex;
                justify-content: center;
                align-items: center;

                &-rating {
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


                    &:active {
                        transform: scale(0.98);
                        transition: .3s;
                    }
                }

                &-video {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0 8px;
                    border: 1px solid #1B3C66;
                    box-sizing: border-box;
                    border-radius: 12px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 140%;
                    text-align: center;
                    background-color: transparent;
                    color: #1B3C66;
                    padding: 16px;
                    cursor: pointer;
                    transition: .3s;

                    @media screen and (max-width: 1000px) {
                        width: 100%;
                    }

                    &:active {
                        transform: scale(0.97);
                        transition: .1s;
                    }
                }
            }
        }
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
    @media(max-width: 863px) {
        height: 79.5px;
    }

    &__img {
        width: 30px;
    }
}

.container_invisible {
    animation: containerInvis .3s forwards;
}

.group-visible-enter-active {
    animation: bounce-in .3s;
}

.group-visible-leave-active {
    animation: bounce-in .3s reverse;
}

@keyframes bounce-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }

}

@keyframes containerInvis {
    0% {
        opacity: 1;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

.country__wrap {
    display: flex;
    flex: 1;

    .trainers-team__content-left__about {
        flex: 1;
    }
}

.rate {
    position: relative;


    &-bar {
        position: absolute;
        bottom: -30px;
        width: 100%;
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
            width: 100%;
            order: 2;
        }

        &:active {
            transform: scale(0.98);
            transition: .3s;
        }
    }
}
</style>
