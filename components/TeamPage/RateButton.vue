<template>
    <div class="rate">
        <button
            type="button"
            class="rate-btn"
            @click="rateOpen"
        >
            {{ $t('teamPage.team_rate') }}
            <span class="final-grade" v-if="estimateRating || showRateBar">{{ estimateRating }}
        <img src="/img/team-page/Star_active.svg" alt="#" class="final-grade__img">
      </span>
        </button>
        <div v-if="showRateBar" class="rate-bar">
            <StarRating
                v-click-outside="closeRateBtn"
                @update-rating="handleUpdateRating"
            />
        </div>
    </div>
</template>

<script>
import StarRating from "../StarRating/StarRating";
import RatingBtnMixin from "../../mixins/RatingBtnMixin";

export default {
    name: "RateButton",
    mixins: [RatingBtnMixin],
    components: {StarRating},
}
</script>

<style lang="scss" scoped>


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

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    //@media(max-width: 863px) {
    //  height: 79.5px;
    //}

    &__img {
        width: 30px;
    }
}

@media screen and (max-width: 1000px) {
    .rate {
        width: 100%;
        order: 2;

        &-bar {
            padding: 5px;
            top: 0px;
            height: 110%;
            border-radius: 0;
            bottom: -60px;
            z-index: 10;
            //background: #fff;
            //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            //border-radius: 10px;
        }
    }

    ::v-deep {
        @media screen and (max-width: 1000px) {
            .product-rate {
                justify-content: center;
                height: auto;
                padding: 10px;
                z-index: 10;
                box-sizing: border-box;
                background: #fff;

                &-item {
                    width: 40px;
                }
            }

        }
    }
}
</style>
