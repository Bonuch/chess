<template>
    <section id="trainers" class="trainers-mobile">
        <div class="container">
            <h2 class='filter-name'>Тренеры</h2>
            <div class='trainers-filters'>
                <div class='filter-search'>
                    <span class='search-span'><img src='~/assets/images/Search.svg' alt='#'></span>
                    <input class='search-input' type='search' :placeholder='$t("teamPage.searchPlacheloder")' v-model='searchName'
                           @input='handleSearchInput'>
                </div>
                <a href='#' class='filter-params' @click.prevent='openParamFilter'>{{ $t('teamPage.filterParams') }}<img
                    src='~/assets/images/icon_filters.svg' alt='#'></a>
                <a href='#' class='filter-special' @click.prevent='showModalForm'>{{ $t('teamPage.filterSpecial') }}<img src='~/assets/images/like.svg' alt='#'></a>
            </div>

            <div v-if='trainerList.length' class="trainers-mobile__content">
                <transition-group name="groupVisible">
                    <TrainerCardMobile
                        v-for="(item, idx) in trainerList"
                        :trainer.sync="item"
                        @update:trainer='handleUpdateTrainer($event, idx)'
                        @showTrainerCard="openModal"
                        :key="item.id"
                    />
                </transition-group>
                <button v-if="nextPageUrl && nextFetch" class="trainers-team__content-btn" @click="showMore">
                    {{ $t('team_btn_show_more') }}
                </button>
            </div>
            <div v-if='trainerList.length === 0 && Object.keys($route.query)' class="trainers-mobile__content">
                <h2 class='query-empty'>По вашему запросу ничего не найдено</h2>
            </div>
        </div>

        <Overlay v-if="isModalOpen" :show-close="activeModal === 'video'" @closeOverlay="isModalOpen = false">
            <template v-slot:close-icon>
                <svg style="z-index: 10000000" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </template>
            <template v-slot:container>
                <component :is="componentsMap[activeModal]" v-bind="modalPayload"
                           @closeOverlay='isModalOpen = false'
                           @update:trainer="handleUpdateTrainer($event)"/>
            </template>
        </Overlay>
        <ModalLearn  @close="closeModalForm"/>
    </section>
</template>

<script>
import TrainerCardMobile from "./TrainerCardMobile";
import Overlay from "../Overlay";
import VideoModal from "./VideoModal";
import TrainerCardModal from "./TrainerCardModal";
import TrainersMixin from "../../mixins/TrainersMixin";
import FilterParamsModalMobile from './FilterParamsModalMobile';
import ModalLearn from '../ModalLearn/ModalLearn';
import { debounce } from 'debounce';

export default {
    name: "TrainersMobile",
    mixins: [TrainersMixin],
    components: {
        TrainerCardMobile,
        Overlay,
        ModalLearn
    },
    data() {
        return {
            isModalVisible: false,
            isInvisible: false,
            commentsToShow: 4,
            activeModal: null,
            isModalOpen: false,
            searchName: null,
            componentsMap: {
                'trainer': TrainerCardModal,
                'video': VideoModal,
                'filters': FilterParamsModalMobile,
            },
            modalPayload: null,
            callbackModal: false
        }
    },
    props: {
        // trainerList: {
        //     type: Array,
        //     required: true,
        // },
    },
    computed: {
        invisibleContainer() {
            return this.isInvisible
        }
    },
    methods: {
        handleSearchInput: debounce(function(evt) {
            const value = evt.target.value;
            this.$router.push({ query: { name: value } });
        }, 300),
        handleUpdateTrainer(trainer) {
            let idx = null;
            this.trainerList.some((item, ind) => {
                if (item.id === trainer.id) {
                    idx = ind
                    return true
                }
                return false
            })
            this.$set(this.trainerList, idx, trainer)
        },
        closeModal() {
            this.isModalOpen = false;
        },
        showModal(title) {
            this.isModalOpen = true
            this.$store.dispatch('gettingNameVacancies', {title: title})
        },
        openModal({type, data}) {
            this.activeModal = type
            this.modalPayload = data
            if (type === 'trainer') {
                this.modalPayload['videoModalFunc'] = this.openModal
            }
            this.isModalOpen = true
        },
        async useFilters(values) {
            await this.$router.push({
                query: values,
            });
            this.modalVisible = false;
            this.clearTeacherList();
            await this.showMore();
            // debugger
        },
        openParamFilter() {
            this.activeModal = 'filters';
            this.modalPayload = {
                closeFn: this.closeModal,
            };
            this.isModalOpen = true;
        },
        showModalForm() {
            this.$store.dispatch('changeModal/openModal', 'ModalMain');
            this.callbackModal = true;
        },
        closeModalForm() {
            this.callbackModal = false;
        },
    }
}
</script>

<style scoped lang="scss">
h4, p {
    margin: 0;
}

.trainers-team__content-btn {
    background-color: #498BDF;
    box-shadow: 0 4.28603px 14.2868px rgba(39, 39, 39, 0.25);
    border-radius: 12px;
    padding: 18px 60px;
    position: relative;
    top: -6px;
    border: none;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    cursor: pointer;
    margin-bottom: 85px;
}

.trainers-mobile {
    background: linear-gradient(0deg, #D5FAFC, #D5FAFC), #C4C4C4;
    //@media(max-width: 767px) {
    //    display: block;
    //    padding-bottom: 85px;
    //}

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;

        & span {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px 5px;
            padding: 40px 15px 40px 15px;
            //max-width: 375px;
            margin: 0 auto;
        }

        &-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #FFFFFF;
            border-radius: 12px;
            padding: 40px 25px;
            max-width: 170px;
        }

        &-img {
            object-fit: cover;
            max-width: 80px;
            margin-bottom: 16px;
        }

        &-name {
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 140%;
        }

        &-rate {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 140%;
            margin-bottom: 21px;
        }

        &-stars {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-bottom: 21px;

            &__img {
                width: 20px;
            }
        }

        &-more {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 140%;
            text-decoration-line: underline;
            border: none;
            background-color: transparent;
            color: #1B3C66;
        }
    }
}

.container_invisible {
    animation: containerInvis .3s forwards;
}

.groupVisible-enter-active, .list-leave-active {
    transition: all 3s;
}

.groupVisible, .list-leave-to /* .list-leave-active до версии 2.1.8 */
{
    opacity: 0;
    transform: translateY(30px);
}

@keyframes bounce-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }

}

@keyframes containerInvis {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.trainers-filters {
    //margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;
}

.filter-name {
    font-size: 32px;
    font-weight: 800;
    font-family: 'Manrope', sans-serif;
    margin: 0 0 12px 0;
    padding-top: 22px;
    text-align: center;
}

.filter-search {
    //padding: 13px 16px;
    //border: 1px solid #E5E5E5;
    position: relative;
    border-radius: 12px;
    width: 100%;
    //margin: 0 12px 0 0;

    .search-span {
        position: absolute;
        left: 13px;
        top: 50%;
        transform: translateY(-50%);
    }

    .search-input {
        padding: 15px 15px 15px 46px;
        background: transparent;
        border-radius: 12px;
        line-height: 24px;
        border: 1px solid #B0BAC9;
        //width: 216px;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        width: 100%;

        &::placeholder {
            color: #B0BAC9;
        }
    }
}

@mixin filterButton($bgCol) {
    display: flex;
    align-items: center;
    height: 54px;
    padding: 15px;
    font-size: 14px;
    width: 100%;
    color: #fff;
    margin-top: 12px;
    justify-content: space-between;
    background: $bgCol;
    border-radius: 14px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    img {
        margin-left: 8px;
    }
}

.filter-params {
    @include filterButton(#1B3C66);
    //margin-right: 12px;
}

.filter-special {
    @include filterButton(#498BDF)
}
.query-empty {
    padding: 15px;
    text-align: center;
}
</style>
