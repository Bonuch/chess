<template>
    <div class="error-page">
        <PromoPage
            :warnPage="true"
            :description="'Страница не найдена'"
            :title="404"
            :btnHandler="goToMain"
        />
    </div>
</template>

<script>
import PromoPage from '@/components/Promo/PromoPage';


export default {
    name: 'error.vue',
    components: { PromoPage },
    props: ['error'],
    layout: 'default',
    head() {
        return {
            title: "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
            meta: [],
        };
    },
    methods: {
        goToMain() {
            this.$router.push({
                name: 'index'
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .error-page {
        &::v-deep {
            .promo {
                &__wrapper-left {
                    & > * {
                        margin-bottom: 12px;

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: 780px) {
        .error-page {
            &::v-deep {
                .promo {
                    height: 670px;
                }
            }
        }
    }

    @media all and (max-width: 480px) {
        .error-page {
            &::v-deep {
                .promo {
                    height: 500px;
                }
            }
        }
    }
</style>
