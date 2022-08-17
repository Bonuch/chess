<template>
  <ClientOnly>
    <transition name="modal-fade">
      <div v-if="getStep" class="modal-backdrop" @click="findModal($event)">
        <button type="button"
                class="btn-close"
                @click="closeModal"
                aria-label="Close modal"></button>
        <component :is="getStep"/>
      </div>
    </transition>
  </ClientOnly>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ModalLearnAdult',
    components: {
        ModalInAdult: () => import("@/components/ModalLearnAdult/ModalInAdult"),
        ModalLearnAdult: () => import("@/components/ModalLearnAdult/ModalLearnAdult"),
        ModalMainAdult: () => import("@/components/ModalLearnAdult/ModalMainAdult"),
        ModalCalendarAdult: () => import("@/components/ModalLearnAdult/ModalCalendarAdult"),
        ModalThanks: () => import("@/components/ModalLearn/ModalThanks"),
    },
  methods: {
    ...mapActions({
      closeModal: 'changeModalAdult/closeModal',
    }),
    findModal(event) {
      if (!event.target.classList.contains('modal-backdrop')) {
        return null
      } else {
        this.closeModal();
      }
    },
  },
  computed: {
    ...mapGetters({
      getStep: 'changeModalAdult/getStep',
    }),
  },
};

</script>
