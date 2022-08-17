<template>
    <div class='review-item'>
        <div class='item-header' :class='{mobile}'>
            <div class='left'>
                <p class='item-text m-0'>{{ review.customer_name !== 'unknown' ? review.customer_name : $t('teamPage.'+review.customer_name) }}</p>
                <p class='item-rating m-0 mt-8'>Оценка: <Rating :rating='review.mark'/></p>
            </div>
            <div class='right'>
                <p class='item-age m-0'>Возраст ребенка</p>
                <p class='item-text m-0 mt-8 age'>{{ review.customer_name !== 'unknown' ? review.child_age : $t('teamPage.'+review.child_age) }}</p>
            </div>
        </div>
        <div class='item-review'>
            {{ review.comment !== 'unknown' ? review.comment : $t('teamPage.'+review.comment) }}
        </div>
    </div>
</template>

<script>
import StarRating from '../StarRating/StarRating';
import ReviewRating from '../StarRating/ReviewRating';
import Rating from './Rating';

export default {
    name: 'ReviewItem',
    components: { Rating, ReviewRating, StarRating },
    props: {
        review: {
            type: Object,
            required: true,
        },
        mobile: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            clientName: null,
            childAge: null,
            review: null
        }
    }
};
</script>

<style lang='scss' scoped>
.m-0 {
    margin: 0;
}
.mt-8 {
    margin-top: 8px;
}
.item {
    &-header {
        &.mobile {
            flex-wrap: wrap;
            .left {
                width: 100%;
            }
            .right {
                width: 100%;
                .item-text {
                    margin: 0;
                }
                .item-age {
                    margin-top: 16px;
                }
            }
        }
        display: flex;
        .left {
            width: 70%;
        }
        .right {
            width: 30%;
        }
    }
    &-text {
        color: #1B3C66;
        font-weight: 800;
        &.age {
            font-weight: normal;
            line-height: 26px;
        }
    }
    &-age {
        color: #969BAB;
    }
    &-rating {
        display: flex;
        align-items: center;
        color: #969BAB;
    }
    &-review {
        margin-top: 24px;
    }
}
::v-deep {
    .trainer-rating {
        margin-bottom: 0;
        margin-left: 8px;
    }
}
</style>
