<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__wrapper">
        <h2
            data-aos="up-fade"
            data-aos-duration="1000"
            data-aos-once="true"
            class="benefits__title"
            v-html="$t('main_advantages_new')"></h2>
          <h2
            data-aos="up-fade"
            data-aos-duration="1000"
            data-aos-once="true"
            class="benefits__title benefits__title-mobile"
            v-html="$t('main_advantages_new_2')"></h2>
      </div>
        <BenefitsInfo class="benefits-info-pc" v-if="benefitItems" :benefitItems="benefitItems"/>
        <client-only>
            <BenefitsSlider class="benefits-info-mobile" v-if="benefitItems" :benefitItems="benefitItems"/>
        </client-only>
    </div>
  </section>
</template>

<script>
import BenefitsInfo from "@/components/Benefits/BenefitsInfo";
import BenefitsSlider from "@/components/Benefits/BenefitsSlider";
export default {
  name: "Benefits",
  components: {BenefitsSlider, BenefitsInfo},
  data() {
    return {
      pickedLanguage: this.$i18n.locale,
        benefitItems: [
            {
                title: this.$t("main_advantage_free_new"),
                description: this.$t("main_advantage_free_descr_new"),
                img: '/img/benefit/gift.svg',
                img_bg: '/img/benefit/elephant.svg',
            },
               {
                title: this.$t("main_advantage_calend"),
                description: this.$t("main_advantage_calend_descr_new"),
                img: '/img/benefit/calendar.svg',
                img_bg: '/img/benefit/rook.svg',
            },
               {
                title: this.$t("main_advantage_qual_new"),
                description: this.$t("main_advantage_qual_descr_new"),
                img: '/img/benefit/medal.svg',
                img_bg: '/img/benefit/hourse.svg',
            },

        ]
    }
  },
  methods: {
    changeLocale(e) {
      this.$router.push(this.switchLocalePath(this.pickedLanguage))
    }
  },
  computed: {
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales;
    },
  }
}
</script>

<style scoped lang="scss">

.benefits {
    position: relative;
    margin-top: 150px;
    margin-bottom: 150px;
    padding: 0 15px;
    @media (max-width: 767px) {
        margin-bottom: 0;
    }
    &__title {
        text-align: left;
        font-size: 48px;
        line-height: 1.33;
        font-weight: 700;
        letter-spacing: -0.02em;
        max-width: 830px;
        &-mobile {
            display: none;
            @media (max-width: 767px) {
                display: block !important;
            }
        }
        @media (max-width: 767px) {
            font-size: 28px;
            display: none;
        }
        @media (max-width: 480px) {
            font-size: 24px;
            letter-spacing: -0.01em;
        }
    }
    &__descr {
        text-align: center;
        font-size: 18px;
        line-height: 1.55;
        font-weight: 700;
        margin: 0;
        @media (max-width: 767px) {
            font-size: 16px;
            padding: 0 15px;
        }
    }
    &-info {
        &-pc {
            @media (max-width: 860px) {
                display: none;
            }
        }
        &-mobile {
            display: none;
            @media (max-width: 860px) {
                display: block;
            }
        }
    }
}
</style>
