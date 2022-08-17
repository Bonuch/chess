<template>
    <footer class="gfooter">
        <div class="footer-container">
            <div class="lpart">

                <div>
                    <a href="/">
                        <img style="max-width: 100%;" src="/img/footer-logo.svg" alt="#">
                    </a>
                </div>

                <div style="font-size: 16px; font-weight: 700; opacity: 0.4; margin: 30px 0;">
                    {{ $t('footer_menu') }}
                </div>

                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('index')">{{ $t('nav_main_page') }}</nuxt-link>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('about')">{{ $t('nav_about_page') }}</nuxt-link>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('coach')">{{ $t('nav_hr_page') }}</nuxt-link>
                        </div>
                    </div>

                    <div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('pay')">{{ $t('nav_payments_page') }}</nuxt-link>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('team')">{{ $t('nav_team_page') }}</nuxt-link>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="formatUrls('in-english')">{{ $t('nav_english_page') }}</nuxt-link>
                        </div>
                    </div>

                    <div>
                        <div class="fm-item">
                            <a href="https://play.chessfirst.online/">{{ $t('nav_sign_page') }}</a>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="customUrl('/policy')">{{ $t('nav_privacy_page') }}</nuxt-link>
                        </div>
                        <div class="fm-item">
                            <nuxt-link :to="customUrl('/contractoffer')">{{ $t('nav_offer_page') }}</nuxt-link>
                        </div>
                    </div>

                </div>

            </div>

            <div class="rpart">

                <div class="flrb">
                    <a href="/">
                        <img style="max-width: 100%;" src="/img/footer-logo.svg" alt="#">
                    </a>
                </div>

                <div class="fpel">
                    <div>
                        <a href="tel:+79167447719" style="color: white; text-decoration: none;" rel="nofollow">+7(916)744-77-19</a>
                    </div>

                    <div class="email-link">
                        <a href="mailto:online@chessfirst.ru"
                           style="color: white; text-decoration: none;">online@chessfirst.ru</a>
                    </div>
                </div>

                <div class="fmli">
                    <a href="https://vk.com/chessfirst_online" target="_blank" class="fmli-item">
                        <img style="max-width: 100%;" src="/img/vk-icon.svg" alt="#">
                    </a>

                    <a href="http://t.me/Chess_First_Online" target="_blank" class="fmli-item">
                        <img style="max-width: 100%;" src="/img/tg-icon.svg" alt="#">
                    </a>

                    <a href="https://wa.me/+79299500192" target="_blank" class="fmli-item">
                        <img style="max-width: 100%;" src="/img/ws-icon.svg" alt="#">
                    </a>
                </div>


                <div class="fpna">
                    <div>
                        {{ $t('footer_call_us') }}
                    </div>
                </div>

                <div class="fpcp">
                    <div>
                        © 2017-2022 chessfirst.online. <span
                        style="white-space: nowrap;">All rights reserved.</span>
                    </div>
                </div>


            </div>
        </div>

        <FooterNavbar />
    </footer>
</template>

<script>
import FooterNavbar from "./FooterNavbar";
export default {
    name: "FooterComponent",
    components: {FooterNavbar},
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        formatUrls(url, params = {}) {
            return this.$helpers.formatUrls(url, params);
        },
        customUrl(url) {
            return this.$helpers.customUrl(url);
        },
    }
}
</script>

<style lang="scss" scoped>
.gfooter {
    display: flex;
    justify-content: center;
    background: #498BDf;
    color: white;
    padding: 50px 20px;
    flex: 0 0 auto;
}

.footer-container {
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
}

.fm-item {
    margin-bottom: 10px;
}

.fm-item a {
    text-decoration: none;
    color: white;
}

.fm-item a:visited {
    color: white;
}

.flrb {
    display: none;
}

.fpel {
    display: flex;
    justify-content: flex-end;
    order: 1;
}

.fpel .email-link {
    margin-left: 40px;
}

.fmli {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
    order: 2;
}

.fpna {
    font-size: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 30px 0;
    order: 3;
}

.fpna > div {
    width: 60%;
    text-align: right;
}

.fpcp {
    display: flex;
    justify-content: flex-end;
    order: 4;
}

.fmli-item {
    width: 40px;
    height: 40px;
    display: flex;
    margin-left: 20px;
}

.lpart {
    width: 660px;
}

.rpart {
    display: flex;
    flex-direction: column;
}

@media all and (max-width: 1089px) {

    .lpart {
        display: none;
    }

    .rpart {
        width: 100%;
    }

    .flrb {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    .fpel {
        justify-content: center;
        flex-direction: column-reverse;
        align-items: center;
    }

    .fpel .email-link {
        margin: 0;
    }

    .fpel > div {
        margin-top: 20px;
        font-size: 20px;
    }

    .fmli {
        order: 3;
        justify-content: center;
        margin: 0 0 40px 0;
    }

    .fpna {
        order: 2;
        justify-content: center;
        margin-top: 30px;
    }

    .fpna > div {
        width: 80%;
        text-align: center;
    }

    .fpcp {
        padding: 0 10px;
        text-align: center;
        justify-content: center;
    }
}
</style>
