<template>
    <ClientOnly>
        <transition name="modal-fade">
            <div v-if="getStep" class="modal-backdrop" @click="findModal($event)">
                <button type="button"
                        class="btn-close"
                        @modalClose="closeModal"
                        @click="closeModal"
                        aria-label="Close modal"></button>
                <component :is="getStep"/>
            </div>
        </transition>
    </ClientOnly>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ModalQuestion",
    components: {
        ModalQuestion: () => import('~/components/ModalQuestion/ModalQuestion.vue'),
        ModalQuestionTrue: () => import('~/components/ModalQuestion/ModalQuestionTrue.vue'),
        ModalQuestionFalse: () => import('~/components/ModalQuestion/ModalQuestionFalse.vue'),
    },
    computed: {
        ...mapGetters({
            getStep: 'changeModalQuestion/getStep',
        }),
    },
    methods: {
        ...mapActions({
            closeModal: 'changeModalQuestion/closeModal',
        }),
        findModal(event) {
            if (!event.target.classList.contains('modal-backdrop')) {
                return null
            } else {
                this.closeModal();
            }
        },
    }
}
</script>

<style scoped lang="scss">

</style>
