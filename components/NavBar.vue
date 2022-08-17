<template>
<div>
  <div class="hamburger-menu">
    <div class="blue-box"></div>

    <input id="menu__toggle" type="checkbox">
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>


    <!--        todo replace to <nuxt-link>...  -->


    <ul class="menu__box">
      <li>
        <a class="menu__item" href="/about">{{ $t('nav_about_page') }}</a>
      </li>
      <li>
        <a class="menu__item" href="/certs">{{ $t('nav_certs_page') }}</a>
      </li>
      <li>
        <a class="menu__item" href="/coach">{{ $t('nav_hr_page') }}</a>
      </li>
      <li>
        <a class="menu__item" href="/pay">{{ $t('nav_payments_page') }}</a>
      </li>
      <li>
        <a class="menu__item" href="/team">{{ $t('nav_team_page') }}</a>
      </li>
      <li>
        <a class="menu__item" href="/in-english">{{ $t('nav_english_page') }}</a>
      </li>
      <li>
        <a href="/grand-prix" class="menu__item">
          {{ $t('nav_tournaments') }}
        </a>
      </li>
      <li>
        <a class="menu__item" href="https://play.chessfirst.online/">Войти</a>
      </li>


    </ul>

    <div class="tcword">
        <span>
          chessfirst.online
        </span>
    </div>
  </div>

  <div class="desktop-menu">

    <div class="menu-container">

      <a href="/" class="main-logo">
        <img src="/img/logo.svg" alt="logo">
      </a>


      <div class="menu-items" style="display: flex;">
        <div class="menu-item">
          <a href="/about" class="menu-item-link">
            {{ $t('nav_about_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/certs" class="menu-item-link">
            {{ $t('nav_certs_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/coach" class="menu-item-link">
            {{ $t('nav_hr_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/pay" class="menu-item-link">
            {{ $t('nav_payments_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/team" class="menu-item-link">
            {{ $t('nav_team_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/in-english" class="menu-item-link">
            {{ $t('nav_english_page') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="/grand-prix" class="menu-item-link">
            {{ $t('nav_tournaments') }}
          </a>
        </div>
        <div class="menu-item">
          <a href="https://play.chessfirst.online/" class="menu-item-link">
            {{ $t('nav_sign_page') }}
          </a>
        </div>

      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
    }
  },
  computed: {
    availableLocales () {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales;
    }
  },
  methods: {
    // changeLocale(e) {
    //   console.log('change locales', e)
    //   this.$router.push(this.switchLocalePath(this.pickedLanguage));
    // }
  }
}
</script>

<style lang="scss" scoped>
.gwrap {
  color: #1b3c66;
  font-family: 'Manrope', Arial, sans-serif;
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


.gfooter {
  display: flex;
  justify-content: center;
  background: #498BDf;
  color: white;
  padding: 50px 20px;
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
