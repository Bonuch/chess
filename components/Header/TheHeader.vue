<template>
    <header class="header">
        <div
            class='header-main'
            :class="{'header-main__active': isActive}"
        >
            <div class="header__container">
                <HeaderLogo/>
                <HeaderNav/>
                <div class="login-pc">
                    <HeaderLogin/>
                </div>
                <HeaderBurger/>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderLogo from "~/components/Header/HeaderLogo";
import HeaderNav from "~/components/Header/HeaderNav";
import HeaderLogin from "~/components/Header/HeaderLogin";
import HeaderBurger from "@/components/Header/HeaderBurger";

let lastCoord = 0;

export default {
    name: "TheHeader",
    components: {HeaderBurger, HeaderLogin, HeaderNav, HeaderLogo,},
    data() {
        return {
            isActive: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.isActive = window.pageYOffset > 0;
    },
    methods: {
        handleScroll: function(e) {
            if (!e.target || !e.target.scrollingElement) return;

            if (window.innerWidth > 768) {
                this.isActive = window.pageYOffset > 0;
            } else {
                this.isActive = lastCoord === 0 || lastCoord > window.pageYOffset;
                lastCoord = window.pageYOffset;
            }
        },
    },
}
</script>

<style lang="scss">
.header {
    padding-bottom: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 3.6vw;

    @media (max-width: 1199px) {
        gap: 0 1.6vw;
    }
}

.header-main {
    display: flex;
    justify-content: center;
    position: fixed;
    margin: 0 auto;
    width: 100%;
    padding: 14px 20px 14px 20px;
    height: 72px;
    z-index: 1002;
    transition: .4s;
    @media (max-width: 950px) {
        gap: 0 3vw;
        justify-content: flex-start;
    }

    &__active {
        transition: .4s;
        box-shadow: 0 4px 34px rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
    }
}

.login-pc {
    display: block;
    @media (max-width: 950px) {
        display: none;
    }
}

@media all and (max-width: 768px) {
    .header-main {
        transform: translateY(-76px);

        &__active {
            transform: translateY(0);
        }
    }
}
</style>
