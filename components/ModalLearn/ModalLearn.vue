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
        name: 'ModalLearn',
        components: {
            ModalIn: () => import("@/components/ModalLearn/ModalIn"),
            ModalLearn: () => import("@/components/ModalLearn/ModalLearn"),
            ModalMain: () => import("@/components/ModalLearn/ModalMain"),
            ModalCalendar: () => import("@/components/ModalLearn/ModalCalendar"),
            ModalThanks: () => import("@/components/ModalLearn/ModalThanks"),
        },
        methods: {
            ...mapActions({
                closeModal: 'changeModal/closeModal',
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
                getStep: 'changeModal/getStep',
            }),
        },
    };
</script>
