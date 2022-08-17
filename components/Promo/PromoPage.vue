<template>
    <section class="promo">
        <img src="@/static/img/Promo/Promo_circle.png" alt="circle" class="promo__decoration-circle">
        <div class="promo__decoration-image-wrap">
            <img src="@/static/img/Promo/promo_girl.png" alt="girl" class="promo__decoration-girl">
        </div>
        <kinesis-container
            class="promo__decoration-block">
            <kinesis-element
                class="promo__decoration-pawn"
                tag="img"
                :src="pawn"
                axis="x y"
                :strength="50"
            />
            <kinesis-element
                class="promo__decoration-head"
                tag="img"
                :src="head"
                axis="x y"
                :strength="30"
            />
            <kinesis-element
                class="promo__decoration-area"
                tag="img"
                :src="area"
                axis="x y"
                :strength="50"
            />
        </kinesis-container>
        <div class="promo__container promo__container--left">
            <div class="promo__wrapper" v-if="!warnPage">
                <div class="promo__wrapper-left">
                    <p class="promo__title">{{ $t('main_school') }}</p>
                    <h2 class="promo__title-big">CHESSFIRST.ONLINE</h2>
                    <p class="promo__text">{{ $t('main_slide_slogan') }}</p>
                    <a href="#trial" class="promo__button custom-btn custom-btn-rounded custom-btn-blue custom-btn-shadowed">
                        <span class="promo__button-text">{{ $t('main_free_promo_lesson') }}</span>
                    </a>
                </div>
            </div>
            <div class="promo__wrapper" v-else>
                <div class="promo__wrapper-left">
                    <p class="promo__title">{{ description }}</p>
                    <h2 class="promo__title-big" v-if="title">{{ title }}</h2>
                    <a @click="btnHandler" class="promo__button custom-btn custom-btn-rounded custom-btn-blue custom-btn-shadowed">
                        <span class="promo__button-text">{{ $t('main_free_promo_lesson') }}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import pawn from 'static/img/Promo/anim-pawn.png';
import head from 'static/img/Promo/anim-head.png';
import area from 'static/img/Promo/anim-area.png';

export default {
    name: "PromoPage",
    props: ['warnPage', 'description', 'title', 'btnHandler'],
    data() {
        return {
            pickedLanguage: this.$i18n.locale,
            pawn,
            head,
            area,
        }
    },
    methods: {
        changeLocale(e) {
            this.$router.push(this.switchLocalePath(this.pickedLanguage));
        }
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales;
        },
    }
}
</script>

<style scoped lang="scss">
.mt-20 {
    margin-top: 70px;
}
</style>
