<template>
    <div class="promotional">
        <div class="container">
            <div class="promotional-content">
                <img class="promotional-img-smile" src="@/static/img/promotional/smile.png" alt="smile">
                <img class="promotional-img-smile-mobile" src="@/static/img/promotional/smile-mobile.png" alt="smile">
                <p class="" v-html="$t('main_promotional_text')"></p>
                <img class="promotional-img-planet" src="@/static/img/promotional/planet.png" alt="planet">
                <img class="promotional-img-planet-mobile" src="@/static/img/promotional/planet-mobile.png" alt="planet">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PromotionalBlock"
}
</script>

<style scoped lang="scss">
.promotional {
    margin-top: 48px;
    &-content {
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        width: 100%;
        background: linear-gradient(0deg, #FFC422, #FFC422), #FFFFFF;
        border-radius: 24px;
        & p {
            margin: 0;
            margin-left: -10px;
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
            color: #FFFFFF;
            text-shadow: 0 8px 39px #DB5000;
            width: 56%;
        }
    }
    &-img {
        &-smile {
            &-mobile {
                display: none;
            }
        }
        &-planet {
            position: absolute;
            right: 0;
            &-mobile {
                display: none;
            }
        }
    }
}
@media (max-width: 1050px) {
    .promotional {
        & p {
            width: 50%;
        }
    }
}
@media (max-width: 920px) {
    .promotional {
        & p {
            width: 45%;
        }
    }
}
@media (max-width: 840px) {
    .promotional {
        &-content {
            flex-direction: column;
            align-items: flex-start;
            & p {
                margin-left: 15px;
                padding-right: 77px;
                padding-bottom: 24px;
                width: 100%;
                margin-top: -25px;
            }
        }
        &-img {
            &-smile {
                display: none;
                &-mobile {
                    display: block;
                }
            }
            &-planet {
                display: none;
                &-mobile {
                    position: absolute;
                    display: block;
                    right: 0;
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .promotional {
        padding-right: 16px;
    }
}
@media (max-width: 560px) {
    .promotional {
        &-content {
            & p {
                font-size: 18px;
                line-height: 25px;

            }
        }
    }
}
@media (max-width: 350px) {
    .promotional {
        &-content {
            & p {
                padding-right: 20px;

            }
        }
    }
}
</style>
