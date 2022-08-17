<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__wrapper">
        <h2 class="benefits__title">{{ $t('main_advantages') }}</h2>
        <p class="benefits__descr" v-html="$t('main_advantages_slog')"></p>
      </div>
      <BenefitsInfoCoach/>
    </div>
  </section>
</template>

<script>
import BenefitsInfoCoach from "@/components/CoachPage/BenefitsInfoCoach";
export default {
  name: "BenefitsCoach",
  components: {BenefitsInfoCoach}
}
</script>

<style scoped lang="scss">
.benefits {
    position: relative;
    height: 462px;
    margin-top: 150px;

    @media (max-width: 767px) {
        height: 670px;
    }
    &__title {
        text-align: center;
        font-size: 48px;
        line-height: 0.6;
        font-weight: 700;
        & img {
            width: 64px;
        }
        @media (max-width: 767px) {
            font-size: 28px;
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
}
</style>
