<template>
  <div class="modal_coach">
    <button type="button"
            class="coach-btn"
            @click.prevent="close"
            aria-label="Close modal">
      <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"></path> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"></path> </g> </svg>
    </button>
    <div class="modal-body__wrapper">
      <svg width="50" height="50" fill="#62C584">
        <path
          d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"></path>
        <path
          d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"></path>
      </svg>
      <p class="modal-body__text" v-html="$t('coach_modal_thanks')"></p>
    </div>
  </div>
<!--  <transition name="modal-fade">-->
<!--    <div class="modal-backdrop"-->
<!--         @click.prevent="close">-->
<!--      <div class="modal" id="modalThanks" role="dialog" aria-labelledby="modalCalendar"-->
<!--           aria-describedby="modalDescription">-->
<!--        <button type="button"-->
<!--                class="coach-btn"-->
<!--                @click.prevent="close"-->
<!--                aria-label="Close modal"><svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"></path> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"></path> </g> </svg></button>-->
<!--        <section class="modal-body" id="modalDescription">-->
<!--          <slot name="body">-->
<!--            -->
<!--          </slot>-->
<!--        </section>-->
<!--      </div>-->
<!--    </div>-->
<!--  </transition>-->
</template>

<script>
export default {
  name: "ModalCoach",
  data() {
    return {
      isModalVisible: true,
      CloseIsModal: false,
    }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false
      document.body.style.overflowX = 'none';
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    },
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped lang="scss">
.modal_coach {
  width: 360px;
  background: #fff;
  padding: 40px;
  position: relative;
  border-radius: 5px;
}
.modal {
  width: 360px;
  position: relative;
}
.modal-body {
  padding: 40px 25px;
  border-radius: 5px;
}
.modal-body__text {
  font-weight: 300;
  text-align: center;
  background-color: #FFFFFF;
  color: #1b3c66;
  font-size: 18px;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  line-height: 1.55;
  @media(max-width: 1200px) {
    font-size: 18px;
  }
}

.coach-btn {
  position: absolute;
  border: none;
  background-color: transparent;
  top: 10px;
  right: 10px;
  padding: 0;
  cursor: pointer;
}

.modal-body__wrapper {
display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
