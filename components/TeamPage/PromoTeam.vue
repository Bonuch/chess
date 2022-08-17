<template>
    <section class="promo">
        <img src="@/static/img/Promo/Promo_circle.png" alt="circle" class="promo__decoration-circle">
        <div class='promo__decoration-image-wrap'>
            <img src="@/static/img/team-page/horse_promo.png" alt="chess horse" class="promo__decoration-girl">
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
                style="max-width: 216px;"
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
        <div class="promo__container">
            <div class="promo__wrapper">
                <div class="promo__wrapper-left">
                    <h2 class="promo__title">{{ $t('team_our') }}</h2>
                    <h2 class="promo__title-big">CHESSFIRST.ONLINE</h2>
                    <p class="promo__text" v-html="$t('team_slogan')"></p>
                    <a href="" class="promo__button custom-btn custom-btn-rounded custom-btn-blue custom-btn-shadowed">
                        {{ $t('letsgo') }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import pawn from "static/img/Promo/anim-pawn.png";
import head from 'static/img/team-page/anim-family.png';
import area from "static/img/coach-page/anim-area.png";

export default {
    name: "PromoAbout",
    data() {
        return {
            pawn,
            head,
            area,
        }
    },
}
</script>

<style lang="scss">

</style>
