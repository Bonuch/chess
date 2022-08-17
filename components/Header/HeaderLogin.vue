<template>
    <div class="login">
        <a href="https://play.chessfirst.online/login?referrer=/" class="login-item login-sign-in" target="_blank" rel="nofollow">
            <span>{{ $t('nav_sign_page') }}</span>
        </a>
        <button
            type="button"
            @click="changeLocale"
            class="login-item login-lang"
        >
            {{ $t('nav_change_lang') }}
        </button>
    </div>
</template>

<script>

export default {
  name: "HeaderLogin",
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
    }
  },
  methods: {
    changeLocale() {
      if(this.pickedLanguage === 'ru') {
        this.pickedLanguage = 'en'
      } else {
        this.pickedLanguage = 'ru'
      }

      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        justify-content: center;
        gap: 0 3px;

        &-item {
            display: block;
            width: 100px;
            padding: 13px 0;
            background-color: #E5EDF9;
            color: #245089;
            text-align: center;
            border: none;
            cursor: pointer;
            transition: .4s;
            outline: none;

            &:hover,
            &:focus,
            &:active {
                opacity: .7;
            }

            &:first-child {
                border-radius: 8px 0 0 8px;

                span {
                    text-decoration: underline;
                }
            }

            &:last-child {
                border-radius: 0 8px 8px 0;
            }
        }
    }

    @media all and (max-width: 480px) {
        .login-item {
            width: auto;
            padding: 13px 20px;
        }
    }
</style>
