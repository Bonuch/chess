<template>

    <div class='gp-wrap'>
        <div class='gp-header'>

            <div class='cf-heading'>
        <span>
            <img style='position: relative; top: 5px;' src='/img/grand-prix/cf-logo.png' alt='ChessFirst'>
        </span>
                <span style='color: white; text-transform: uppercase; font-size: 44px;'>Chessfirst</span>
                <span style='color: white; font-size: 15px;'>{{ $t('chess_school') }}</span>
            </div>

            <h1 class='gp-h1'>
                <span class='shdr'>{{ $t('gp_tournirs_series') }}</span>
                <span class='mhdr summer'>
                    SUMMER
                    <!--            {{ $t('gp_tournaments') }}-->
        </span>

            </h1>

        </div>


        <div class='gp-welcome'>
            <div class='gp-container gp-container-welcome'>
                <div style='position: relative;'>
                    <h3 class='welcome-text'>
                        {{ $t('3 месяца солнца, шахмат и')}}<br><span
                        style='color: #FFCE38; font-weight: bold;'>{{ $t('major_tournaments') }}</span>
                    </h3>

                    <div class='cagrp1'>
                        <img style='max-width: 100%;' src='/img/grand-prix/grandPrixEmoji.png' alt='#'>
                    </div>
                </div>

                <p class='welcome-descr'>
                    {{ $t('gp_hello_friend') }}<br><br>
                    {{ $t('Лето 2022 года будет жарким,')}}<br>
                    <span class='tournament-slogan__bold'>
            {{ $t('ведь скоро придет') }} <span style='font-weight: bold;'>{{ $t('гран при турнир.') }}</span>
          </span>
                </p>

                <div class='cgrp1'>
                    <img src='/img/grand-prix/grandPrixEmojiMob.png' alt='#'>
                </div>

            </div>

        </div>


        <div class='gp-description'>
            <div class='gp-container gp-container-description'>
                <div class='cards-wrap'>

                    <div class='c-card card1'>
            <span class='card-title'>
                {{ $t('gp_wdm') }}
            </span>
                        <span class='card-description'>
              {{ $t('gp_wdm_desc2') }}
            </span>

                        <div class='csquares-wrap'>
                            <div class='csquares-first'>
                                <span class='csquare-item' style='background: rgba(255, 206, 56, 0.5); border: none;'>19.06</span>
                            </div>
                            <div >
                                <span class='csquare-item'>
                                    24.07
                                </span>
                            </div>
                            <div>
                                <span class='csquare-item'>21.08</span>
                            </div>
                        </div>

                        <div class='card-description'>
              <span>
                {{ $t('gp_wdm_rate') }}<span style='font-weight: bold;'> {{ $t('until') }} 1500</span> {{
                      $t('and')
                  }} <span
                  style='font-weight: bold;'>{{ $t('above') }} 1500</span>
              </span>
                        </div>

                        <div class='tournament-prices'
                             style='font-size: 16px; font-weight: bold; text-align: center; margin: 50px 0 20px 0;'>
                            <!--              {{ $t('gp_price_title') }}-->
                            <div class='arrow-container'>
                                <img class='left' src='/img/grand-prix/payArrowLeft.svg' alt='#'>
                                Оплатить участие
                                <img class='right' src='/img/grand-prix/payArrowRight.svg' alt='#'>
                            </div>
                        </div>

                        <span class='b-buttons'>
              <a href='#' class='btb' @click.prevent="buyProduct({
                id: prices[1].id,
                title: 'Оплата турнира 2500₽',
                unitPrice: prices[1].item_price,
                type: 'tournament',
                count: 1,
              })">{{ prices[1].item_price }}{{ currency }} {{ $tc('cnt_tournament', 2) }}</a>

              <a href='#' class='btb' @click.prevent="buyProduct({
                id: prices[0].id,
                title: 'Оплата турнира 990₽',
                unitPrice: prices[0].item_price,
                type: 'tournament',
                count: 1,
              })">{{ prices[0].item_price }}{{ currency }} {{ $tc('cnt_tournament', 1) }}</a>

            </span>

                    </div>

                    <div class='c-card'>
                        <div class='card-description'>
                            {{ $t('gp_win_descr') }}
                        </div>

                        <div class='csl1-wrap'>
                            <div class='csl1'>
                                <img style='max-width: 100%;'
                                     :src="'/img/grand-prix/' + getLocaleImageUrl('slice1.png')" alt='#'>
                            </div>
                            <div class='csl1-mobile'>
                                <img style='max-width: 100%;'
                                     :src="'/img/grand-prix/' + getLocaleImageUrl('slice1-mobile.png')"
                                     alt='#'>
                            </div>
                        </div>


                        <div class='card-description cstyle-1'>
                            {{ $t('gp_win_bonus') }}
                        </div>

                    </div>

                    <div class='c-card summer'>
                        <h4 class='title'>{{ $t('gp') }}</h4>
                        <p class='description'>{{ $t("По итогам 3-х турниров, мы проведем общий подсчет баллов и участники получат")}}:</p>
                        <div class='image-container'>
                            <picture>
                                <source srcset="/img/grand-prix/yaBox_mob.png" media="(max-width: 768px)">
                                <img src='/img/grand-prix/yaBox.png' alt='big speaker jbl'>
                            </picture>
                            <div class='description'>
                                <h4 class='place'>1 {{ $tc('place', 1) }}</h4>
                                <p>{{ $t("Яндекс Станция 2") }} <br>{{ $t("умная колонка с Алисой") }}</p>
                            </div>
                        </div>
                    </div>

                    <div class='c-card summer__separated'>
                        <div class='priz-item'>
                            <div class='image'>
                                <picture>
                                    <source srcset="/img/grand-prix/speaker_big_mob.png" media="(max-width: 768px)">
                                    <img src='/img/grand-prix/speaker_big.png' alt='big speaker jbl'>
                                </picture>
                            </div>
                            <div class='description'>
                                <h4 class='place'>2 {{ $tc('place', 1) }}</h4>
                                <p class='item'>{{ $t("Большая портативная колонка") }}</p>
                            </div>
                        </div>

                        <div class='priz-item'>
                            <div class='image'>
                                <picture>
                                    <source srcset="/img/grand-prix/speaker_small_mob.png" media="(max-width: 768px)">
                                    <img src='/img/grand-prix/speaker_small.png' alt='big speaker jbl'>
                                </picture>

<!--                                <img v-else src='/img/grand-prix/speaker_small_mob.png' alt='big speaker jbl'>-->
                            </div>
                            <div class='description'>
                                <h4 class='place'>3 {{ $tc('place', 1) }}</h4>
                                <p class='item'>{{ $t("Малая портативная колонка") }}</p>
                            </div>
                        </div>

                        <div class='priz-item'>
                            <div class='image'>
                                <picture>
                                    <source srcset="/img/grand-prix/bonuses_loot_mob.png" media="(max-width: 768px)">
                                    <img src='/img/grand-prix/bonuses_loot.png' alt='bonuses 2000 thousand rubles'>
                                </picture>

                            </div>
                            <div class='description'>
                                <h4 class='place'>4-10 {{ $tc('place', 2) }}</h4>
                                <p class='item'>{{ $t("2 000 ₽ баллами") }}<br>
                                    {{ $t("на любой абонемент") }}</p>
                            </div>
                        </div>
<!--                        <h4 class='title'>{{ $t('gp') }}</h4>-->
<!--                        <p class='description'>По итогам 3-х турниров, мы проведем общий подсчет баллов и участники-->
<!--                            получат:</p>-->
<!--                        <div class='image-container'>-->
<!--                            <img src='/img/grand-prix/yaBox.png' alt='яндекс станция'>-->
<!--                            <p class='description'>-->
<!--                                <span class='place'>1 место</span>-->
<!--                                Яндекс Станция 2 <br>умная колонка с Алисой-->
<!--                            </p>-->
<!--                        </div>-->
                    </div>
                </div>
                <p class='prize-description'>{{ $t("Каждому участнику гранд-при скидка по количеству") }}<br>
                    {{ $t("очков за все 3 турнира (до 27%)") }}</p>
            </div>
        </div>

        <div class='container'>
            <h3 class='section__title mb-0 text_center table__title'>{{ $t('gp_mem_table') }}</h3>

            <PrixTable />

        </div>

        <div class='gp-bottom' v-if='translates'>
            <div class='gp-container' style='margin-top: 50px;'>

                <h3 class='h3dft'>
                    {{ $t('regulation') }}
                </h3>

                <AccordionList :items='tournamentOrderItems'></AccordionList>

                <h3 class='h3dft' style='margin-top: 100px;'>
                    {{ $t('gp_instructions') }}
                </h3>

                <AccordionList :items='tournamentInstructionItems'></AccordionList>

            </div>
        </div>
        <client-only>
            <transition name='fade'>
                <Overlay v-if='overlay && productList.length > 0' @closeOverlay='toggleOverlay'>
                    <template v-slot:container>
                        <PaymentForm
                            :products='productList'
                            :currency='currency'
                            productType='tournament'
                            @emptyList='toggleOverlay' />
                    </template>
                </Overlay>
            </transition>
        </client-only>
    </div>


</template>

<script>
import PrixTable from '../../components/PrixTable';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import Overlay from '../../components/Overlay';
import AccordionList from '@/components/AccordionList';
import translateMixin from '@/mixins/translateMixin.js';
import { mapGetters } from 'vuex';

export default {
    name: 'GrandPrixPage',
    mixins: [translateMixin],
    components: { PaymentForm, PrixTable, Overlay, AccordionList },
    head() {
        return {
            title: 'ChessFirst - Серия гран-при турниров',
        };
    },

    async asyncData({ app, $axios }) {
        const locale = app.i18n.locale;
        console.log(`
      BASEURL: ${$axios.defaults.baseURL}
    `);
        const requestList = [
            $axios.$get('/translate/grand-prix', {
                params: {
                    locale,
                },
            }),
            $axios.$get('/content/tournament-prices', {
                params: {
                    lang_key: locale,
                },
            }),
        ];

        const [translates, prices] = await Promise.all(requestList);

        return {
            translates: translates ? translates : {},
            prices: prices ? prices.data : [],
        };
    },

    data() {
        return {
            tournamentOrderSelected: false,
            translates: null,
            tournamentInstructionSelected: false,
            overlay: false,
            productList: [],
            prices: null,
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            },
        };
    },
    computed: {
        ...mapGetters({isMobile: 'isMobile'}),
        tournamentOrderItems() {
            const reqs = [
                'competition_organizers',
                'goals_and_objectives',
                'сompetition_dates',
                'competitors',
                'competition_terms',
                'rewarding',
                'contacts',
            ];
            if (!this.translates) {
                return null;
            }
            return this.formatTranslates(this.translates, reqs);
        },
        currency() {
            return this.$i18n.locale === 'ru' ? '₽' : '€';
        },
        tournamentInstructionItems() {
            const reqs = [
                'tech_reqs',
                'regulations',
                'your_actions',
                'toss',
            ];
            if (!this.translates) {
                return null;
            }
            return this.formatTranslates(this.translates, reqs);
        },
    },
    methods: {
        toggleOverlay() {
            this.overlay = !this.overlay;
            if (this.productList.length)
                this.productList = [];
        },
        getLocaleImageUrl(image) {
            return `${this.$i18n.locale}__${image}`;
        },
        buyProduct(product) {
            this.productList.push(product);
            this.overlay = true;
        },
    },
};
</script>

<style scoped lang='scss'>
::v-deep {
    p {
        margin: 0;
    }
}

.prize-description {
    margin-top: 24px;
    margin-bottom: 64px;
    font-weight: 700;
    font-size: 28px;
    text-align: center;
}

.tournament-prices {
    position: relative;
    display: flex;
    justify-content: center;

    .arrow-container {
        position: relative;
        img {
            position: absolute;
            top: -30px;
            &.left {
                left: -57px;
            }
            &.right {
                right: -57px;
            }
        }
    }
}

.gp-wrap {
    //margin: 0 0 100px 0;
    margin: 0;
    color: #1b3c66;
    font-family: 'Manrope', Arial, sans-serif;
}

.gp-header {
    background: url(/img/grand-prix/summer_grandprix.svg) no-repeat center center / cover;
    min-height: 803px;
}

.gp-bottom {
    display: flex;
    justify-content: center;
}

.h3dft {
    display: flex;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
}

.gp-container-description {
    margin: 64px 10px 0 10px;
}

.gp-description {
    display: flex;
    justify-content: center;
    background: #E7EDF9;
}

.gp-container-welcome {
    margin: 0 10px 70px 10px;
}

.gp-welcome {
    display: flex;
    justify-content: center;
}

.cf-heading {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 50px;
}

.gp-h1 {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #245089;
    margin-top: 100px;
}

.gp-container {
    width: 1110px;
}


.c-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 536px;
    min-height: 510px;
    background: white;
    margin-bottom: 40px;
    border-radius: 30px;

    padding: 20px 0;

    &.summer {
        justify-content: unset;
        padding: 44px;

        .title {
            margin: 0;
            font-size: 51px;
            font-weight: 800;
            text-transform: uppercase;
        }

        .description {
            font-weight: 500;
            font-size: 16px;
        }

        .image-container {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;

            img {
                position: absolute;
                right: -10px;
                bottom: -20px;
                z-index: 30;
            }

            .description {
                position: absolute;
                padding: 32px 74px 32px 32px;
                border-radius: 40px 0 0 40px;
                //margin-right: 140px;
                background: rgba(255, 206, 56, 0.5);
                bottom: 50px;
                width: 90%;

                .place {
                    margin: 0;
                    font-weight: 800;
                    font-size: 36px;
                    color: #2D3064;
                    display: block;
                    line-height: 32px;
                    margin-bottom: 10px;
                }
            }
        }
    }
    &.summer__separated {
        background: none;
        padding: 0;
        justify-content: unset;
        gap: 16px;
        .priz-item {
            //.image {
            //  display: flex;
            //}
            height: 160px;
            padding: 33px 48px;
            background: #fff;
            border-radius: 40px;
            display: flex;
            .place {
                margin: 0;
                font-weight: 800;
                font-size: 36px;
            }
            .description {
                margin-left: 32px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
}

.c-card .card-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 30px 0;
}

.c-card .card-description {
    font-size: 16px;
    display: flex;
    justify-content: center;

    text-align: center;
    line-height: 22px;
    margin: 0 70px;
}

.c-card .card-description.cstyle-1 {
    font-weight: 700;
    margin-top: 30px;
    color: #2D3064;
}

.csquares-wrap {
    margin: 32px 50px;
    display: flex;
    justify-content: center;
    gap: 24px;
}

.csquare-item {
    width: 64px;
    height: 64px;
    border: 2px dashed rgba(27, 60, 102, 0.4);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
}

.csl1-wrap {
    height: 60%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.btb {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    height: 56px;
    border: 1px solid #498BDF;
    border-radius: 12px;
    cursor: pointer;
    padding: 0 20px;
    text-decoration: none;
    color: #1b3c66;
    text-align: center;
    width: 200px;
    @media screen and (max-width: 500px) {
        width: 160px;
    }
}

.btb:hover {
    background: #FFCE38;
    border: 1px solid #FFCE38;
}

.btb:visited {
    color: #1b3c66;
}


.mhdr {
    text-transform: uppercase;
    font-size: 124px;
    font-weight: bold;

    &.summer {
        color: #FFB800;
    }
}

.shdr {
    font-size: 44px;
    font-weight: 500;
}

.csl1 {
    display: flex;
    justify-content: center;
}

.csl1-mobile {
    display: none;
}

.cagrp1 {
    position: absolute;
    right: 10px;
    top: -100px;
}

.cgrp1 {
    display: none;
    padding-top: 30px;
}

.welcome-text {
    font-size: 48px;
    line-height: 65px;
    font-weight: bold;
    margin-top: 110px;
}

.b-buttons {
    display: flex;
    justify-content: center;
    margin: 0 60px;
    gap: 8px;
}


.prize-row {
    display: flex;
    justify-content: center;
    margin: 0 30px 20px 15px;
}

.prize-row:nth-child(even) {
    margin: 0 15px 20px 30px;
}

.prize-area {
    position: relative;
    border-radius: 10px;
    background: rgba(255, 206, 56, 0.5);
    display: flex;
    justify-content: center;
    padding: 23px 0;
    flex-grow: 1;
}

.prize-value {
    color: #2D3064;
    font-size: 16px;
    font-weight: 800;
    display: flex;
    align-items: center;
}

.prize-pdtext {
    color: #2D3064;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.clab-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90px;
}

.clab {
    color: #2D3064;
    font-weight: 800;
    text-align: center;
}

.clab-1 {
    font-size: 36px;
}

.clab-2 {
    font-size: 16px;
}

.bag-wrap {
    position: absolute;
    top: -15px;
}

.prize-row:nth-child(odd) .bag-wrap {
    left: 0;
}

.prize-row:nth-child(even) .bag-wrap {
    right: 0;
}

.table__title {
    font-size: 48px;
    margin-top: 80px;
}

.cards-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.welcome-descr {
    font-size: 28px;
    font-weight: 400;
}

@keyframes custom-slide-in-top {
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.list-transition-enter-active {
    animation: custom-slide-in-top 0.35s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.list-transition-leave-active {
    animation: custom-slide-in-top 0.35s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}


@media all and (max-width: 768px) {
    .gp-header {
        background: url(/img/grand-prix/summer_grandprix_mob.svg) no-repeat center center / cover;
        background-position-y: -72px;
    }

    .mhdr {
        font-size: 48px;
    }

    .gp-container {
        width: 100%;
        margin: 10px;
    }

    .gp-container-welcome {
        margin: 0 10px 32px 10px;
    }

    .c-card {
        width: 100%;
    }

    .csl1 {
        display: none;
    }
    .csl1-mobile {
        display: flex;
        justify-content: center;
    }

    .shdr {
        font-size: 20px;
    }

    .cf-heading {
        visibility: hidden;
    }

    .cagrp1 {
        display: none;
    }
    .cgrp1 {
        display: flex;
        justify-content: center;
    }
    .cgrp1 > img {
        max-width: 228px;
    }

    .welcome-text {
        margin-top: 0px;
    }

    .c-card .card-description {
        margin: 0 30px;
    }

    .csquares-wrap {
        flex-wrap: wrap;
        justify-content: center;
        margin: 22px 10px;
        gap: 0;
    }

    .csquares-first {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .csquare-item {
        margin: 0 20px 20px 20px;
    }

    .c-card {
        min-height: 403px;
        &.summer {
            padding: 32px 14px;
            .title {
                font-size: 32px;
            }
            .image-container {
                img {
                    bottom: 0;
                }
                .description {
                    width: 80%;
                    line-height: 16px;
                    padding: 24px 24px 32px 24px;
                    font-size: 12px;
                    font-weight: 600;
                }
            }
        }
        &.summer__separated {
            .image {
                display: block;
            }
            .priz-item {
                padding: 32px 21px;
                .image {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .description {
                    flex: 1;
                    .place {
                        font-size: 24px;
                    }
                    .item {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .welcome-descr {
        font-size: 14px;
        font-weight: 600;
    }

    .welcome-text {
        font-size: 28px;
        line-height: 38px;
        width: 80%;
    }

    .gp-container-description {
        margin-top: 64px;
    }
    .prize-description {
        font-size: 16px;
        margin-top: 0;
    }
    .b-buttons {
        margin: 0 14px;


        //flex-wrap: wrap;

        .btb {
            &:first-child {
                margin: 0;
                margin-bottom: 10px;
            }

            //width: 100%;
        }

    }

    .b-buttons .btb:first-child {
        //margin-right: 10px;
    }

    .prize-area {
        flex-direction: column;
        align-items: flex-end;

        padding: 11px 10px;
    }

    .prize-row:nth-child(even) .prize-area {
        flex-direction: column;
        align-items: flex-start;
    }

    .prize-area .prize-value {
        margin-bottom: 5px;
    }

    .prize-row:nth-child(even) .prize-pdtext {
        margin-left: 0;
    }


    .h3dft {
        font-size: 28px;
    }

    .gp-bottom {
        margin: 0 20px;
    }

    .prize-row {
        margin: 0 15px 20px 0;
    }

    .prize-row:nth-child(even) {
        margin: 0 0 20px 15px;
    }

    .prize-row:nth-child(odd) .bag-wrap {
        left: -10px;
    }
    .prize-row:nth-child(even) .bag-wrap {
        right: -10px;
    }

    .clab-1 {
        font-size: 28px;
    }

    .table__title {
        font-size: 28px;
    }

}


@media all and (max-width: 576px) {
    .gp-h1 {
        margin-top: 0;
        padding-top: 60px;
    }
    .gp-header {
        min-height: 272px;
        //background-attachment: fixed;
        background-size: cover;
    }
    .cf-heading {
        visibility: hidden;
        display: none;
    }
}

@media all and (max-width: 1089px) {
    .cards-wrap {
        justify-content: center;
    }
}

.tournament-slogan__bold {
    white-space: nowrap;
    @media screen and (max-width: 950px) {
        white-space: normal;
    }
}

</style>
