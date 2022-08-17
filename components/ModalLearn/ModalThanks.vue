<template>
  <div class="start-trial-modal" id="modalThanks" role="dialog" aria-labelledby="modalCalendar" aria-describedby="modalDescription">
    <section class="modal-body" id="modalDescription">
      <slot name="body">
        <div class="modal-body__wrapper">
          <p class="modal-body__text" v-html="$t('order_finish')"></p>
        </div>
        <a href="/policy" class="modal-body__content-policy" target="_blank">{{ $t('order_policy') }}</a>
      </slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "ModalThanks",
  data() {
    return {
      isModalVisible: false,
      CloseIsModal: false,
      pickedLanguage: this.$i18n.locale,
      titleModal: 'ModalThanks',
    }
  },
  methods: {
    changeLocale() {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    },
  },
  computed: {
      returnTitleModal(){
        return this.$store.getters['changeModal/returnTitleModal'];
      },
      availableLocales() {
        return this.$i18n.locales;
      },
  }
}
</script>

<style lang="scss" scoped>
.modal-body__text {
  font-weight: 400;
  text-align: center;
  background: #62c584;
  color: #fff;
  font-size: 20px;
  padding: 20px;
  margin-bottom: 20px;
  line-height: 1.55;
  @media(max-width: 1200px) {
    font-size: 18px;
  }
}
</style>
