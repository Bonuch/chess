<template>
    <section class="parents-review" v-if="reviews">
        <div class="parents-review-decor-left">
            <svg width="166" height="603" viewBox="0 0 166 603" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                      d="M-421.832 351.355C-424.915 292.137 -384.897 243.076 -360.76 188.91C-333.643 128.058 -329.785 48.5776 -272.069 15.2765C-213.761 -18.3664 -141.515 12.3359 -75.2385 24.1686C-7.78782 36.211 68.9972 34.6893 115.971 84.5553C163 134.48 168.964 210.718 164.979 279.177C161.472 339.417 122.664 387.677 95.1997 441.41C66.4956 497.57 61.2586 581.627 0.942226 600.111C-60.9183 619.069 -109.397 539.111 -172.147 523.34C-229.147 509.014 -295.469 546.786 -343.866 513.45C-394.49 478.579 -418.637 412.728 -421.832 351.355Z"
                      fill="#E6EDF9"/>
            </svg>
        </div>

        <div class="container">
            <h2 class="parents-review-title"
                data-aos="up-fade"
                data-aos-once="true"
                data-aos-duration="800"
                data-aos-delay="400"
            >{{ $t('main_parent_review_title') }}</h2>

            <ParentsReviewsSlider
                data-aos="up-fade"
                data-aos-once="true"
                data-aos-duration="800"
                data-aos-delay="500"
                :reviews="reviews"
                :response="response"
                @on-open-trainer-modal="handleOpenReviewModal"
            />
        </div>

        <div class="parents-review-decor-right">
            <svg width="190" height="600" viewBox="0 0 164 726" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                      d="M501.856 32.7446C563.572 63.8552 589.73 131.958 630.368 187.217C676.023 249.298 754.166 299.004 754 375.609C753.832 453 680.393 507.115 629.546 566.185C577.798 626.3 534.297 703.525 456.296 721.452C378.203 739.4 297.579 701.332 230.66 657.861C171.775 619.609 145.718 553.17 107.469 494.852C67.4928 433.901 -14.4718 380.183 2.20939 309.543C19.3176 237.095 128.643 235.039 181.406 181.748C229.334 133.342 230.026 45.5994 292.139 16.7176C357.111 -13.4931 437.894 0.501701 501.856 32.7446Z"
                      fill="#E6EDF9"/>
            </svg>
        </div>
        <Overlay v-if='modalVisible' :showClose='true' @closeOverlay='modalVisible = false'>
            <template v-slot:close-icon>
                <svg style='z-index: 10000000' width='48' height='48' viewBox='0 0 48 48' fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_b_171_2113)'>
                        <circle cx='24' cy='24' r='24' fill='white' />
                    </g>
                    <path fill-rule='evenodd' clip-rule='evenodd'
                          d='M32.4858 16.5753L31.4252 15.5146L23.9999 22.9399L16.5758 15.5159L15.5151 16.5765L22.9392 24.0006L15.5152 31.4246L16.5759 32.4852L23.9999 25.0613L31.425 32.4864L32.4857 31.4258L25.0605 24.0006L32.4858 16.5753Z'
                          fill='#1B3C66' />
                    <defs>
                        <filter id='filter0_b_171_2113' x='-17.1429' y='-17.1429' width='82.2857' height='82.2857'
                                filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImage' stdDeviation='8.57143' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_171_2113' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_171_2113'
                                     result='shape' />
                        </filter>
                    </defs>
                </svg>
            </template>
            <template v-slot:container>
                <component
                    :is='activeModal'
                    :trainer="teacher"
                    :updateDataFn="handleUpdateRating"
                    :videoUrl="teacher.video_url"
                    @update:trainer='handleUpdateTrainer($event)'
                    @on-open-modal='handleOpenReviewModal'
                ></component>
            </template>
        </Overlay>
        <ModalLearn  @close="closeModalForm"/>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ParentsReviewsSlider from "@/components/ParentsReviews/ParentsReviewsSlider";
import ParentsReviewsRateModal from "@/components/ParentsReviews/ParentsReviewsRateModal";
import ParentsReviewsModal from "@/components/ParentsReviews/ParentsReviewsModal";
import TrainerCardModal from "@/components/TeamPage/TrainerCardModal";
import VideoModal from "@/components/TeamPage/VideoModal";
import ModalLearn from '../ModalLearn/ModalLearn';

export default {
    name: "ParentsReviews",
    components: {ParentsReviewsModal, TrainerCardModal, ParentsReviewsSlider, ModalLearn, VideoModal, ParentsReviewsRateModal},
    mounted() {
        this.fetchReviews()
    },
    data() {
        return {
            response: [
                {
                    teacher_img: '/img/reviews-form.svg',
                    customer: this.$t('main_reviews_title'),
                    review_text: this.$t('main_reviews_desc'),
                    review: this.$t('main_reviews_text'),
                    button: this.$t('main_reviews_button'),
                }
            ],
            "reviews": null,
            modalVisible: false,
            activeModal: null,
            modalProps: {},
            trainersRating: {},
        }
    },
    computed: {
        ...mapGetters({
           'teacher': "getModalTrainer"
        }),
        reviewsWithResponse() {
            const firstPart = this.reviews.slice(0, 4)
            const secondPart = this.reviews.slice(4, 10)
            return [...firstPart, ...this.response, ...secondPart]
        }
    },
    methods: {
        handleOpenReviewModal(modalName) {
            this.activeModal = modalName;
            this.modalVisible = true;
        },
        handleUpdateRating({ id, val }) {
            this.modalVisible = false;
            this.$set(this.trainersRating, id, val);
        },
        closeModal() {
            this.modalVisible = false;
        },
        openModal({type, data}) {
            this.activeModal = type
            this.modalPayload = data
            if (type === 'trainer') {
                this.modalPayload['videoModalFunc'] = this.openModal
            }
        },
        showModalForm() {
            this.$store.dispatch('changeModal/openModal', 'ModalMain');
            this.callbackModal = true;
        },
        closeModalForm() {
            this.callbackModal = false;
        },
        async fetchReviews(){
            try {
                const {data} = await this.$axios.get('/content/reviews-main');
                this.reviews = data.data;
            } catch (e) {
                console.error(`Error fetch: ${e}`)
            }
        }
    }
}
</script>
<style scoped lang="scss">
.parents-review {
    margin-top: 256px;
    margin-bottom: 128px;
    position: relative;
    &-decor {
        &-left {
            position: absolute;
        }
        &-right {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    & .container {
        max-width: 884px;
    }
    &-title {
        font-weight: 700;
        font-size: 48px;
        text-align: center;
    }
}
@media (max-width: 1165px) {
    .parents-review {
        &-decor {
            &-left {
                display: none;
            }
            &-right {
                display: none;
            }
        }
    }
}
@media (max-width: 767px) {
    .parents-review {
        margin-top: 80px;
        margin-bottom: 80px;

        &-title {
            font-size: 24px;
            letter-spacing: -0.01em;
            text-align: left;
            padding-left: 16px;
            margin-bottom: 25px;
        }

    }
}
</style>
