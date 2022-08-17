<template>
    <nav class="navigation" :class="{'header__nav-active':returnNav}"  v-click-outside="closeSubMenu">
        <ul class="navigation-items">
            <li class="navigation-item" @click="toggleMenu">
                <nuxt-link class="navigation-item__link" to="/">
                    {{ $t('nav_main_page') }}
                </nuxt-link>
                <div class="login-burger">
                    <HeaderLogin/>
                </div>
            </li>
            <li class="navigation-item">
                <div
                    class="navigation-item__link navigation-item__link-pc"
                    @click="showSubMenu"
                >
                    {{ $t('nav_about_page') }}
                </div>
            </li>
            <li class="navigation-item navigation-item__mobile">
                <span
                    id="show-modalMenu"
                    @click.prevent="showModalMenu = true"
                    class="navigation-item__link"
                    role="button"
                >
                    {{ $t('nav_about_page') }}
                </span>
                <ClientOnly>
                    <modalMenu :showMenu="showModalMenu" @closeMenu="showModalMenu = false">
                        <template #header></template>
                    </modalMenu>
                </ClientOnly>
                <img src="@/static/img/icon/arrow-right.png" alt="arrow-right" class="navigation-item-arrow">
            </li>
            <li class="navigation-item navigation-item__pc"
                :class="{'navigation-item__pc-active':showSubMenu}"
                v-if="subMenu">
<!--                <vsm-menu-->
<!--                    ref="header-vsm-menu"-->
<!--                    :menu="getMenuAbout"-->
<!--                    element="header"-->
<!--                    handler="click"-->
<!--                >-->
<!--                    <div class="submenu-items">-->
<!--                        <nuxt-link v-for="(item, idx) in subMenuItemsAbout"-->
<!--                               :to="{ name: `${item.to}___${$i18n.locale}` }"-->
<!--                               :key="idx"-->
<!--                               class="submenu-item"-->
<!--                               @click.native="linkClick(`${item.to}___${$i18n.locale}`)">-->
<!--                            <div class="submenu-item__wrapper">-->
<!--                                <img :src="item.img" alt="school" class="submenu-item__pic">-->
<!--                            </div>-->
<!--                            <h3 class="submenu-item__title">{{ $t(item.title) }}</h3>-->
<!--                            <p class="submenu-item__descr">{{ $t(item.descr) }}</p>-->
<!--                        </nuxt-link>-->
<!--                    </div>-->
<!--                </vsm-menu>-->
                <div>
                    <div class="submenu-items" @click="closeSubMenu">
                        <nuxt-link
                            v-for="(item, idx) in subMenuItemsAbout"
                            :to="{ name: `${item.to}___${$i18n.locale}` }"
                            :key="idx"
                            class="submenu-item"
                            @click.native="linkClick(`${item.to}___${$i18n.locale}`)"
                        >
                            <div class="submenu-item__wrapper">
                                <img :src="item.img" alt="school" class="submenu-item__pic">
                            </div>
                            <h3 class="submenu-item__title">{{ $t(item.title) }}</h3>
                            <p class="submenu-item__descr">{{ $t(item.descr) }}</p>
                        </nuxt-link>
                    </div>
                </div>
            </li>

            <li v-for="(item, index) in menuItems" class="navigation-item" @click="toggleMenu">
                <nuxt-link :key="index" class="navigation-item__link" :to="{ name: `${item.to}___${$i18n.locale}` }">
                    {{ $t(item.title) }}
                </nuxt-link>
            </li>
        </ul>
        <div class="burger-contacts-anim">
            <BurgerContacts/>
        </div>
    </nav>
</template>

<script>
import HeaderLogin from "@/components/Header/HeaderLogin";
import modalMenu from '~/components/Header/ModalBurger.vue';
import BurgerContacts from "@/components/Header/BurgerContacts";
import { mapGetters } from 'vuex';

export default {
    name: "HeaderNav",
    components: {
        BurgerContacts,
        HeaderLogin,
        modalMenu,
    },
    data() {
        return {
            showModalMenu: false,
            subMenu: false,
        }
    },
    methods: {
        changeLocale(e) {
            this.$router.push(this.switchLocalePath(this.$i18n.locale));
        },
        toggleMenu() {
            if (document.documentElement.clientWidth < 950) {
                this.$store.dispatch('menu/togglingMenuActive');
            }
        },
        linkClick(link) {
            const headerVsmMenu = this.$refs['header-vsm-menu'];
            if (headerVsmMenu) headerVsmMenu.closeDropdown();

            this.$router.push({ name: link });
        },
        showSubMenu() {
            this.subMenu = !this.subMenu
        },
        closeSubMenu() {
            this.subMenu = false
        }
    },
    computed: {
        ...mapGetters({
            menuItems: 'menu/menuItems',
            menuAbout: 'menu/menuAbout',
            subMenuItemsAbout: 'menu/subMenuItemsAbout',
        }),
        getMenuAbout() {
            return this.menuAbout.map(item => {
                const copy = { ...item };
                copy.title = this.$t(copy.title);
                return copy;
            });
        },
        returnNav() {
            return this.$store.getters['menu/returnActiveMenu'];
        },
        availableLocales() {
            return this.$i18n.locales;
        },
    }
}
</script>

<style lang="scss">
.vsm-background {
    border-radius: 10px;
    box-shadow: none;
}

.vsm-section {
    list-style: none;
    display: block;
}

.vsm-link {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1B3C66;
    white-space: nowrap;
    transition: 0.4s;
    height: 0;
    padding: 0;

    &:hover {
        opacity: .4;
        transition: .4s;
    }
}

.vsm-dropdown-content {
    width: 912px;
    @media (max-width: 950px) {
        width: 616px;
    }
}

.submenu-items {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 20px 20px 50px 20px;
}

.submenu-item {
    padding: 20px 20px 40px 20px;
    background: #FFFFFF;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 280px;
    width: 100%;
    transition: .4s;
    color: #1B3C66;
    position: relative;
    z-index: 10;

    &.nuxt-link-exact-active {
        background: #E5EDF9;
        transition: .4s;
        .submenu-item__circle {
            background: #FFFFFF;
            transition: .4s;
        }
        .submenu-item__circle-white {
            background: #E5EDF9;
            transition: .4s;
        }
        .submenu-item__wrapper {
            background: #fff;
        }
    }

    &:hover {
        background: #E5EDF9;
        transition: .4s;
        .submenu-item__circle {
            background: #FFFFFF;
            transition: .4s;
        }
        .submenu-item__circle-white {
            background: #E5EDF9;
            transition: .4s;
        }
    }
}

.submenu-item__blue {
    background: #E5EDF9;
    transition: .4s;

    &:hover {
        background: linear-gradient(0deg, rgba(229, 237, 249, 0.3), rgba(229, 237, 249, 0.3)), #FFFFFF;
        transition: .4s;
    }
}

.submenu-item__wrapper {
    position: relative;
    height: 70px;
    width: 70px;
    text-align: center;
    border-radius: 50%;
    background: #E5EDF9;
    transition: .4s;
}

.submenu-item__pic {
    transition: .4s;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    max-height: 60px;
    max-width: 60px;
}

.submenu-item__circle {
    position: absolute;
    top: 50%;
    left: 10%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: #E5EDF9;
    width: 70px;
    height: 70px;
    z-index: 9;
    transition: .4s;
}

.login-burger {
    display: none;
    @media screen and (max-width: 950px) {
        display: block;
    }
}

.navigation {
    @media screen and (max-width: 950px) {
        position: fixed;
        left: 0;
        top: 72px;
        right: 0;
        //bottom: 0;
        background: #ffffff;
        display: none;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        z-index: 99;
        animation-name: closeBurger;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }

    &-items {
        display: flex;
        justify-content: center;
        //gap: 2.22vw;
        gap: 25px;
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        @media (max-width: 950px) {
            align-items: normal;
            flex-direction: column;
            gap: 0;
            max-width: 950px;
            width: 100%;
        }
    }

    &-item {
        cursor: pointer;
        text-decoration: none;
        @media (max-width: 950px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            border-top: 1px solid #E1E5F1;
        }

        &__mobile {
            display: none;
            margin: 0;

            @media (max-width: 950px) {
                display: flex;
            }
        }

        &__pc {
            display: flex;
            position: absolute;
            top: 90px;
            width: 915px;
            flex-wrap: wrap;
            background-color: #ffffff;
            border-radius: 20px;
            opacity: 0;
            transition: 0.3s;
            @media (max-width: 950px) {
                display: none;
            }
            &:before {
                content: "";
                position: absolute;
                background: #ffffff;
                border-radius: 4px;
                width: 50px;
                height: 50px;
                top: -10px;
                left: 34.5%;
                transform: rotate(45deg);
                z-index: 5;
            }
            &-active {
                animation: visibleSubMenu .25s forwards;
            }
        }

        &__link {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            background-color: transparent;
            color: #1B3C66;
            white-space: nowrap;
            transition: .4s;
            border: 0;
            outline: none;

            &:hover {
                opacity: .4;
                transition: .4s;
                @media (max-width: 950px) {
                    opacity: 1;
                    padding: 22px 0;
                }
            }

            @media (max-width: 950px) {
                padding: 22px 0;
                width: 100%;
            }

            @media (max-width: 950px) {
                font-weight: 400;
                font-size: 24px;
                line-height: 32px;
            }
            &-pc {
                display: block;
                @media (max-width: 950px) {
                    display: none;
                }
            }
        }
    }
}

.header__nav-active {
    display: flex;
    @media (max-width: 950px) {
        overflow: auto;
        animation-name: openBurger;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }

    .burger-contacts-anim {
        opacity: 0;
        @media (max-width: 950px) {
            animation-name: openBurgerOpacity;
            //animation-delay: .4s;
            animation-duration: 1.2s;
            animation-fill-mode: forwards;
        }
    }

    .navigation-items {
        opacity: 0;
        @media (max-width: 950px) {
            animation-name: openBurgerOpacity;
            //animation-delay: .4s;
            animation-duration: 1.2s;
            animation-fill-mode: forwards;
        }
    }
}

@keyframes openBurger {
    from {
        height: 0;
    }
    to {
        height: 93vh;
    }
}

@keyframes closeBurger {
    from {
        height: 716px;
    }
    to {
        height: 0;
    }
}

@keyframes openBurgerOpacity {
    30% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes visibleSubMenu {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes closeSubMenu {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
