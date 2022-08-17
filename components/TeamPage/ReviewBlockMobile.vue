<template>
    <div class='review-block'>
<!--        {{ reviews }}-->
        <div class='swiper-container' ref='swiper'>
            <div class='swiper-wrapper'>
                <ReviewItem class='swiper-slide' v-for='review in reviews' :key='review.id' :review='review' mobile/>
            </div>
        </div>
        <div class='controls'>
            <div class='control-buttons'>
                <button class='control-button btn arrow prev'><img src='~/assets/images/secondary_button.svg' alt=''></button>
                <button class='control-button btn arrow next'><img class='reverse' src='~/assets/images/secondary_button.svg' alt=''></button>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from '../StarRating/StarRating';
import ReviewRating from '../StarRating/ReviewRating';
import ReviewItem from './ReviewItem';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import Swiper from 'swiper/bundle';

export default {
    name: 'ReviewBlockMobile',
    components: { ReviewItem, ReviewRating, StarRating },
    props: {
        reviews: {
            type: Array,
            required: true,
        },
        reviewsPagination: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            clientName: null,
            childAge: null,
            review: null,
            swiper: null,
            current_slide: 1,
        };
    },
    methods: {
        closeReviews() {
          this.$emit('closeReviews')
        },
        initSwiper() {
            const swiperDom = this.$refs.swiper;
            const buttons = this.$el.querySelectorAll('.control-button')
            console.log('------------', buttons);
            if (swiperDom) {
                this.swiper = new Swiper(swiperDom, {
                    slidesPerView: 1,
                    navigation: {
                        prevEl: buttons[0],
                        nextEl: buttons[1],
                    },
                });
            }
        },
        handleSlideControl(action) {
            if (action === 'prev') {
                if (this.current_slide <= this.reviewsPagination.total ) {
                    this.current_slide -= 1;
                }
            }
            if (action === 'next') {
                this.current_slide += 1;
            }
        },
    },
    mounted() {
        this.initSwiper();
    },
};
</script>

<style lang='scss' scoped>
.review-block {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
}

//.slider-wrapper {
//    overflow: hidden;
//    height: 100%;
//    width: 100%;
//}

.swiper-container {
    //display: flex;
    width: 100%;
    height: 100%;
}

.controls {
    //width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.control-buttons {
    display: flex;
    width: 100%;
}

.swiper-button-disabled {
    opacity: .2 !important;
}

.btn {
    flex: 1;
    padding: 12px 10px;
    background: #F3F6FC;
    color: #0D2B47;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &.arrow {
        padding: 10px 10px;
    }

    &:last-child {
        margin-left: 8px;
    }

    img {
        &.reverse {
            transform: rotate(180deg);
        }
    }
}
</style>
