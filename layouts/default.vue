<template>
    <div class="gwrap">

        <div class="content">
            <client-only>
                <TheHeader/>
            </client-only>

            <Nuxt/>

        </div>

        <FooterComponent />
    </div>

</template>
<script>
import NavBar from "../components/NavBar";
import TheHeader from "@/components/Header/TheHeader";
import { resizeHelper } from "../mixins/resizeHelper";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

export default {
    components: {FooterComponent, TheHeader, NavBar },
    mixins: [resizeHelper],
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    },
    methods: {
        formatUrls(url, params = {}) {
            return this.$helpers.formatUrls(url, params);
        },
        customUrl(url) {
            return this.$helpers.customUrl(url);
        }
    }
}

</script>
<style lang="scss" scoped>

.gwrap {
    color: #1b3c66;
    font-family: 'Manrope', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1 0 auto;
}


#menu__toggle {
    opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
}

#menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
}

#menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
}

#menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
}

.menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 9999;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 3px;

    background-color: white;

    transition-duration: .25s;
}

#menu__toggle:checked ~ .menu__btn > span::after, #menu__toggle:checked ~ .menu__btn > span::before {
    background: #616161;
}

.menu__btn > span::before {
    content: '';
    top: -8px;
}

.menu__btn > span::after {
    content: '';
    top: 8px;
}

.menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;

    width: 300px;
    height: 100%;

    margin: 0;
    padding: 80px 0;

    list-style: none;

    background-color: #ECEFF1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

    transition-duration: .25s;
    z-index: 999;
}

.menu__item {
    display: block;
    padding: 12px 24px;

    color: #333;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;

    text-decoration: none;

    transition-duration: .25s;
}

.menu__item:hover {
    background-color: #CFD8DC;
}


.blue-box {
    background: rgb(77, 127, 189);
    height: 70px;
    width: 70px;
    position: absolute;
    left: 0;
}


.hamburger-menu {
    display: none;
    background: white;
    height: 70px;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: relative;
}

.desktop-menu {
    //position: fixed;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    z-index: 999;
}

.main-logo {
    display: flex;
    height: 100%;
    align-items: center;
}

.menu-container {
    width: 1360px;
    display: flex;
    justify-content: space-between;
}

.tcword {
    display: flex;
    justify-content: center;
}

.tcword > span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    color: #000;
}


.menu-item {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-left: 20px;
}

.menu-item-link {
    color: #000;
    font-size: 13px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1.92px;
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out
}

.menu-item-link:hover {
    color: #c2c2c2;
}

@media all and (max-width: 1300px) {
    .gp-wrap {
        padding-top: 0 !important;
    }

    .hamburger-menu {
        display: flex;
        position: sticky;
        top: 0;
    }

    .desktop-menu {
        display: none;
    }

}

.langPick {
    border: none;
    font-family: 'Manrope', Arial, sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #000;
    /*height: 92px;*/
    text-transform: uppercase;
    background: transparent;

    &.mobile {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
        color: #333;
        margin-top: 12px;
    }
}

</style>

