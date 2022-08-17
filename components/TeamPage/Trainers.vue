<template>
    <section class='trainers-team'>
        <div class='container' v-if='trainerList.length > 0'>
            <div class='trainers-filters'>
                <h2 class='filter-name'>Тренеры</h2>
                <div class='filter-search'>
                    <span class='search-span'><img src='~/assets/images/Search.svg' alt='#'></span>
                    <input class='search-input' type='search' :placeholder='$t("teamPage.searchPlacheloder")' v-model='searchName'
                           @input='handleSearchInput'>
                </div>
                <a href='#' class='filter-params' @click.prevent='openParamFilter'>{{ $t('teamPage.filterParams') }}<img
                    src='~/assets/images/icon_filters.svg' alt='#'></a>
                <a href='#' class='filter-special' @click.prevent='showModalForm'>{{ $t('teamPage.filterSpecial') }}<img src='~/assets/images/like.svg' alt='#'></a>
            </div>

            <div class='trainers-team__content'>
                <transition-group name='groupVisible' class='group--trainers' tag='div'>
                    <TrainerCard
                        v-for='(item, idx) in trainerList'
                        :trainer.sync='item'
                        @update:trainer='handleUpdateTrainer($event, idx)'
                        @showVideoModal='showVideoModal'
                        @showReview='showReview($event, idx)'
                        :key='item.id'
                    />
                </transition-group>

                <div class='trainers-team__content-container--wrap' v-if='nextPageUrl && nextFetch'>
                    <div class='trainers-team__content-container'
                         :class="{'container_invisible':invisibleContainer}">
                        <button class='trainers-team__content-btn' @click='showMore'>{{
                                $t('team_btn_show_more')
                            }}
                        </button>
                    </div>
                    <div class='trainers-team__content-container--overlay'></div>
                </div>
            </div>
        </div>

        <div class='container' v-else-if='(trainerList && trainerList.length === 0) && Object.keys($route.query)'>
            <div class='trainers-filters'>
                <h2 class='filter-name'>Тренеры</h2>
                <div class='filter-search'>
                    <span class='search-span'><img src='~/assets/images/Search.svg' alt='#'></span>
                    <input class='search-input' type='search' placeholder='Фамилия, Имя' v-model='searchName'
                           @input='handleSearchInput'>
                </div>
                <a href='#' class='filter-params' @click.prevent='openParamFilter'>Фильтр по параметрам <img
                    src='~/assets/images/icon_filters.svg' alt='#'></a>
                <a href='#' class='filter-special'>Подбор специалистом <img src='~/assets/images/like.svg' alt='#'></a>
            </div>
            <h2 class='text-center'>По запросу ничего не найдено</h2>
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
                <component :is='activeModal' v-bind='modalProps' @acceptFilterModal='useFilters'></component>
            </template>
        </Overlay>
        <ModalLearn  @close="closeModalForm"/>
    </section>
</template>

<script>
import ModalVideo from './ModalVideo';
import { mapGetters } from 'vuex';
import StarRating from '@/components/StarRating/StarRating';
import TrainerCard from './TrainerCard';
import Overlay from '../Overlay';
import VideoModal from './VideoModal';
import TrainersMixin from '../../mixins/TrainersMixin';
import FilterParamsModal from './FilterParamsModal';
import ReviewModal from './ReviewModal';
import ModalLearn from '../ModalLearn/ModalLearn';
import {debounce} from 'debounce';

export default {
    name: 'Trainers',
    mixins: [TrainersMixin],
    components: {
        // VideoModal,
        Overlay,
        TrainerCard,
        ModalVideo,
        ReviewModal,
        FilterParamsModal,
        ModalLearn,
        StarRating,
    },
    data() {
        return {
            trainersRating: {},
            isModalVisible: false,
            isRatingVisible: false,
            isShow: '',
            isInvisible: false,
            commentsToShow: 4,
            modalVisible: false,
            modalVideoUrl: null,
            searchName: null,
            activeModal: null,
            modalProps: {},
            callbackModal: false,
        };
    },
    watch: {
        searchName: function(val, oldVal) {
            if (val === null || val === '' || !val) {
                this.$router.push({ query: {} });
            }
        },
    },
    methods: {
        handleUpdateRating({ id, val }) {
            this.modalVisible = false;
            this.$set(this.trainersRating, id, val);
        },
        closeModal() {
            this.modalVisible = false;
        },
        showModal(title) {
            this.$store.dispatch('gettingNameVacancies', { title: title });
            this.modalVisible = true;
        },
        showVideoModal(url) {
            this.modalProps = {
                videoUrl: url,
            };
            // this.modalVideoUrl = url
            this.activeModal = VideoModal;
            this.modalVisible = true;
        },
        rhUpdateWindowWidth() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.rhGetWindowWidth);
            });
        },
        rhGetWindowWidth() {
            this.$store.commit('setWindowWidth', document.documentElement.clientWidth);
        },
        handleSearchInput: debounce(function(evt) {
            const value = evt.target.value;
            this.$router.push({ query: { name: value } });
        }, 300),
        openParamFilter() {
            this.activeModal = FilterParamsModal;
            this.modalProps = {
                closeFn: this.closeModal,
            };
            this.modalVisible = true;
        },
        showReview(values, idx) {
            this.activeModal = ReviewModal;
            this.modalProps = {
                trainer: values,
                closeFn: this.closeModal,
                trainerUpdateKey: idx,
                updateDataFn: this.handleUpdateRating,
            };
            this.modalVisible = true;
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
        showModalForm() {
            this.$store.dispatch('changeModal/openModal', 'ModalMain');
            this.callbackModal = true;
        },
        closeModalForm() {
            this.callbackModal = false;
        },
    },
    computed: {
        ...mapGetters({ returnNameVacancies: 'employeeInfo/returnNameVacancies' }),
        invisibleContainer() {
            return this.isInvisible;
        },
    },
    mounted() {
        this.rhGetWindowWidth();
        this.rhUpdateWindowWidth();
        this.searchName = this.$route.query.name;
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.rhGetWindowWidth);
    },
};
</script>

<style lang='scss' scoped>
.group--trainers {
    @media screen and (max-width: 1150px) {
        padding: 0 32px;
        width: 100%;
    }
}

h4, p {
    margin: 0;
}

.trainers-team {
    margin-top: 50px;
    margin-bottom: 100px;
    @media (max-width: 767px) {
        display: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        //gap: 32px;
        //padding: 0 10px;

        & span {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 0 10px;

        }

        &-container {
            //position: relative;
            height: 320px;
            padding: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 32px 32px 0 0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px -10px 34px rgba(0, 0, 0, 0.07);

            &--wrap {
                overflow: hidden;
                width: 1168px;
                margin: 0 -34px;
                padding: 34px;
                padding-bottom: 0;
                position: relative;

                @media (max-width: 1150px) {
                    width: 100%;
                }

            }

            &--overlay {
                background: linear-gradient(180deg, rgba(#fff, 0), #fff);
                z-index: 10;
                left: 0;
                height: 200px;
                position: absolute;
                bottom: 0;
                width: 100%;
            }
        }

        &-decoration {
            //max-width: 1126px;
        }

        &-btn {
            position: relative;
            //left: 50%;
            //top: -45%;
            transform: translateY(-100%);
            background-color: #498BDF;
            box-shadow: 0 4.28603px 14.2868px rgba(39, 39, 39, 0.25);
            border-radius: 12px;
            padding: 18px 60px;
            border: none;
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 140%;
            cursor: pointer;
        }

        &-wrapper {
            display: flex;
            max-width: 1110px;
            background: #FFFFFF;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0px -10px 34px rgba(0, 0, 0, 0.07);
            border-radius: 32px;

            &__left {
                display: flex;
                gap: 0 32px;
                padding: 48px;
                align-items: flex-start;
                position: relative;
                @media(max-width: 1150px) {
                    padding: 24px;
                    gap: 0 24px;
                }

                &:after {
                    content: "";
                    position: absolute;
                    top: 24px;
                    right: 0;
                    height: calc(100% - 48px);
                    width: 1px;
                    background-color: #000000;
                    opacity: 0.3;
                }
            }

            &__right {
                display: flex;
                flex-direction: column;
                padding: 48px 48px 48px 24px;
                align-items: flex-start;
                gap: 12px;
                @media(max-width: 1150px) {
                    padding: 24px;
                }
            }
        }

        &-left {


            &__img {
                border-radius: 70.9784px;
                object-fit: cover;
                max-width: 136px;
            }

            &__block {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-width: 357px;
            }

            &__name {
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 140%;
            }

            &__rank {
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 140%;
                margin-top: 5px;
                margin-bottom: 12px;
            }

            &__stars {
                display: flex;
                gap: 5px;
                margin-bottom: 20px;

                &-img {

                }
            }

            &__wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                gap: 16px 45px;
                max-width: 400px;
            }

            &__about {
                display: flex;
                flex-direction: column;
                min-width: 100px;

                &-top {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 140%;
                    opacity: 0.5;
                }

                &-bottom {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 140%;
                }
            }
        }

        &-right {
            display: flex;

            &__description {
                max-width: 441px;
                margin-bottom: 40px;
            }

            &__bottom {
                display: flex;
                justify-content: center;
                gap: 12px;
            }

            &__btn {
                display: flex;
                justify-content: center;
                align-items: center;

                &-rating {
                    background: rgba(255, 206, 56, 0.5);
                    border-radius: 12px;
                    padding: 16px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 140%;
                    color: #1B3C66;
                    border: none;
                    cursor: pointer;
                    transition: .3s;
                    position: relative;

                    &:active {
                        transform: scale(0.98);
                        transition: .3s;
                    }
                }

                &-video {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0 8px;
                    border: 1px solid #1B3C66;
                    box-sizing: border-box;
                    border-radius: 12px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 140%;
                    text-align: center;
                    background-color: transparent;
                    color: #1B3C66;
                    padding: 16px;
                    cursor: pointer;
                    transition: .3s;

                    &:active {
                        transform: scale(0.97);
                        transition: .1s;
                    }
                }
            }
        }
    }
}

.final-grade {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-color: rgba(255, 206, 56, 0.5);
    border-style: dashed;
    width: 99px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px !important;
    flex-direction: row !important;
    font-size: 24px;
    @media(max-width: 863px) {
        height: 79.5px;
    }

    &__img {
        width: 30px;
    }
}

.container_invisible {
    animation: containerInvis .3s forwards;
}

.groupVisible-enter-active {
    animation: bounce-in .3s;
}

.groupVisible-leave-active {
    animation: bounce-in .3s reverse;
}

.trainers-filters {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-name {
    font-size: 32px;
    font-weight: 800;
    font-family: 'Manrope', sans-serif;
    margin: 0 12px 0 0;
}

.filter-search {
    //padding: 13px 16px;
    //border: 1px solid #E5E5E5;
    position: relative;
    border-radius: 12px;
    margin: 0 12px 0 0;

    .search-span {
        position: absolute;
        left: 13px;
        top: 50%;
        transform: translateY(-50%);
    }

    .search-input {
        padding: 15px 15px 15px 46px;
        border-radius: 12px;
        line-height: 24px;
        border: 1px solid #B0BAC9;
        width: 216px;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;

        &::placeholder {
            color: #B0BAC9;
        }
    }
}

@mixin filterButton($bgCol) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 15px;
    font-size: 14px;
    color: #fff;
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
    margin-right: 12px;
}

.filter-special {
    @include filterButton(#498BDF)
}

@keyframes bounce-in {
    from {
        opacity: 0;
        //left: -340px;
        //position: absolute;
    }
    to {
        //left: 0;
        //position: initial;
        opacity: 1;
        //z-index: 10;
    }

}

@keyframes containerInvis {
    0% {
        opacity: 1;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
</style>
