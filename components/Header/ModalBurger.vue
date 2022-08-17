<template>
    <Transition name="modalMenu">
        <div v-if="showMenu" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-container__top">
                        <div class="modal-header__burger">
                            <slot name="header">
                                <button
                                    class="modal-default-button"
                                    @click="$emit('closeMenu')"
                                >
                                    <img src="@/static/img/icon/arrow-right.png" alt="arrow-right"
                                         class="navigation-item-arrow navigation-item-arrow__reverse">
                                    {{ $t('nav_main_page') }}
                                </button>
                            </slot>
                        </div>
                        <div class="modal-body__burger">
                            <slot name="bodyMenu">
                                <ul class="modal-body__item">
                                    <li v-for="(item, index) in subMenuItemsAbout" class="modal-body__items" @click="toggleMenu">
                                        <img :src="item.img" alt="" class="modal-body__img">
                                        <nuxt-link class="modal-body__link" :to="{ name: `${item.to}___${$i18n.locale}` }">
                                            {{ $t(item.title) }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </slot>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import Table from "static/img/chess-place.png";
import { mapGetters } from 'vuex';

export default {
    props: {
        showMenu: Boolean
    },
    data() {
        return {
            pickedLanguage: this.$i18n.locale,
            Table
        }
    },
    methods: {
        changeLocale() {
            this.$router.push(this.switchLocalePath(this.pickedLanguage));
        },
        toggleMenu() {
            this.$store.dispatch('menu/togglingMenuActive');
        },
    },
    computed: {
        ...mapGetters({
            menuItems: 'menu/menuItems',
            menuAbout: 'menu/menuAbout',
            subMenuItemsAbout: 'menu/subMenuItemsAbout',
        }),
        getMenuAbout() {
            return this.menuAbout.map(item => {
                const copy = {...item};
                copy.title = this.$t(copy.title);
                return copy;
            });
        },
        availableLocales() {
            return this.$i18n.locales;
        },
    }
}
</script>

<style scoped lang="scss">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 72px 0px 20px;
    background: #FFFFFF;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    overflow: auto;
}

.modal-header__burger {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.55;
    color: #1b3c66;
    border-top: 1px solid #E1E5F1;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px 0;

    &__item {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.48);
        list-style-type: none;
        padding-left: 0;
        min-width: 850px;
        width: 100%;
    }

    &__items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0 22px;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #1B3C66;
        border-top: 1px solid #E1E5F1;
        padding: 13px 15px;

        @media (max-width: 380px) {
            gap: 0 10px;
        }
    }

    &__link {
        color: #1B3C66;
    }
}

.modal-default-button {
    font-family: 'Jost', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0 10px;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 138%;
    color: #1B3C66;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 22px 0 22px 22px;
}

.modal-footer {
    bottom: 42px;
}

.navigation-item-arrow {
    display: none;
    @media (max-width: 850px) {
        display: block;
    }
}

.navigation-item-arrow__reverse {
    transform: rotate(180deg);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modalMenu-enter-from {
    opacity: 0;
}

.modalMenu-leave-to {
    opacity: 0;
}

.modalMenu-enter .modal-container,
.modalMenu-leave-active .modal-container {
    transform: translateX(-100%);
    transition: 2s;
}
</style>
