<template>
    <div class="accordion">
        <div class="accordion-item" v-for="item in items" :key="item.id">
            <button
                type="button"
                class="accordion-heading"
                :class="{'selected': isSelected(item.id)}"
                @click="toggleList(item.id)"
            >
                <div class="accordion-title" v-html="item.title"></div>
                <div class="accordion-icon">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="2px" fill="none" fill-rule="evenodd" stroke-linecap="square">
                            <g class="accordion-icon-path" transform="translate(1.000000, 1.000000)">
                                <path d="M0,11 L22,11"></path>
                                <path d="M11,0 L11,22"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </button>

            <transition name="list-transition">
                <div v-show="isSelected(item.id)" class="accordion-list">
                    <div class="accordion-content" v-html="item.content"></div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccordionList",
        props: {
            items: {
                items: Array,
                required: true,
            },
            selectedItem: {
                type: null,
            },
        },
        data() {
            return {
                selected: []
            }
        },
        computed: {
            isSelected() {
                return (id) => this.selected.includes(id);
            }
        },
        methods: {
            toggleList(id) {

                if (this.isSelected(id)) {
                    const idx = this.selected.indexOf(id);
                    this.selected.splice(idx, 1);
                } else {
                    this.selected.push(id);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes custom-slide-in-top {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .accordion {
        max-width: 760px;
        margin: 80px auto;

        &-heading {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 27px 0;
            background-color: transparent;
            color: #1b3c66;
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
            border: 0;
            border-top: 2px solid #E5E5E5;
            outline: none;
            cursor: pointer;

            &.selected,
            &:hover {
                outline: none;

                .accordion-icon {
                    &:before {
                        opacity: 1;
                    }

                    svg {
                        path {
                            stroke: #fff;
                        }
                    }
                }
            }

            &.selected {
                .accordion-icon {
                    svg {
                        transform: rotate(45deg);
                    }
                }
            }

            &:focus,
            &:active {
                &:before {
                    opacity: 1;
                    background-color: $blue-290;
                }
            }
        }

        &-title {
            flex: 1;
            margin-right: 10px;
            text-align: left;
        }

        &-icon {
            position: relative;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:before {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                width: 100%;
                height: 100%;
                background-color: $blue-300;
                opacity: 0;
                border-radius: 50%;
                transition: all .3s ease;
                transform: translate(-50%, -50%);
            }

            svg {
                position: relative;
                z-index: 1;
                width: 24px;
                height: 24px;
                fill: currentColor;
                transition: all .3s ease;

                path {
                    stroke: #000;
                }
            }
        }

        &-list {
            padding-bottom: 20px;
            font-size: 18px;
            line-height: 1.55;
            font-weight: 300;
        }
    }

    .list-transition-enter-active {
        animation: custom-slide-in-top 0.35s linear both;
    }

    .list-transition-leave-active {
        animation: custom-slide-in-top 0.25s both reverse;
    }

    @media all and (max-width: 767px) {
        .accordion {
            margin: 60px auto;

            &-heading {
                font-size: 16px;
            }

            &-icon {
                width: 32px;
                height: 32px;

                svg {
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
</style>
