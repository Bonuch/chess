<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" @click="findModal($event)">
            <button type="button"
                    class="btn-close__team"
                    @click.prevent="close"
                    aria-label="Close modal">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_171_2113)">
                        <circle cx="24" cy="24" r="24" fill="white"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M32.4858 16.5753L31.4252 15.5146L23.9999 22.9399L16.5758 15.5159L15.5151 16.5765L22.9392 24.0006L15.5152 31.4246L16.5759 32.4852L23.9999 25.0613L31.425 32.4864L32.4857 31.4258L25.0605 24.0006L32.4858 16.5753Z"
                          fill="#1B3C66"/>
                    <defs>
                        <filter id="filter0_b_171_2113" x="-17.1429" y="-17.1429" width="82.2857" height="82.2857"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="8.57143"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_171_2113"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_171_2113"
                                     result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </button>
            <div class="modal" id="modalThanks" role="dialog" aria-labelledby="modalCalendar"
                 aria-describedby="modalDescription">
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        <div class="modal-body__wrapper" v-for="(list, team) in returnTrainer.slice(0,1)" :key="team">
                            <iframe v-model="returnNameVacancies" title="vimeo-player" :src="returnNameVacancies.src"
                                    style="background-color: black" width="640" height="1137" frameborder="0"
                                    allowfullscreen></iframe>
                        </div>
                    </slot>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ModalCoach",
    props: ['returnTrainer'],
    data() {
        return {
            isModalVisible: true,
            CloseIsModal: false,
        }
    },
    computed: {
        ...mapGetters({returnNameVacancies: 'employeeInfo/returnNameVacancies'})
    },
    methods: {
        closeModal() {
            this.isModalVisible = false
            document.body.style.overflowX = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
            console.log(this.isModalVisible)
        },
        findModal(event) {
            if (!event.target.classList.contains('modal-backdrop')) {
                return null
            } else {
                this.close()
            }
        },
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style scoped lang="scss">
.modal {
    width: 742px;
    position: relative;
    z-index: 20;
    padding: 0;
}

.modal-body {
    padding: 0;
    overflow: hidden;
    background-color: transparent;
}

.modal-body__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 67vh;

    @media (max-width: 767px) {
        //max-width: 90vw;
        height: 98vh;
        overflow: hidden;
    }
    @media (max-width: 516px) {
        //max-width: 90vw;
        height: 168vw;
        overflow: hidden;
    }
}

.btn-close__team {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
}
</style>
