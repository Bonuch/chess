<template>
    <div>
        <template v-if="paymentConfirmMode">
            <PromoPage :warnPage="true" :description="content.content_title" :title="content.content_text" :btnHandler="goToMain"/>
        </template>
        <template v-else>
            <AboutCompany v-if="content" :title="content.content_title" :content="content.content_text"/>
        </template>
    </div>
</template>

<script>
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import PromoPage from "../../components/Promo/PromoPage";

export default {
    components: {PromoPage, AboutCompany},
    async asyncData({ $axios, app, error }) {
        try {
            let content;
            let paymentConfirmMode = true;
            const order = app.$cookies.get('orderId');
            if (order) {
                const paymentResult = await $axios.$post('/website/check-payment', {
                    API_SECRET_KEY: process.env.API_SECRET_KEY,
                    paymentId: order
                });
                if (paymentResult && paymentResult.status === 'success') {
                    content = {
                      content_title: "Оплата прошла успешно.",
                      content_text: "Спасибо",
                    }
                } else {
                    content = {
                        content_title: "Что-то пошло не так...",
                        content_text: "Оплата не удалась",
                    }
                }
            } else {
                content = {
                    content_title: "Что-то пошло не так, не можем определить номер заказа.",
                    content_text: "Свяжитесь с нами",
                }
            }
            return { content, paymentConfirmMode };
        } catch (ex) {
            console.log(ex);
            error(ex);
        }
    },
    head() {
        return {
            title: this.content?.page_title ? this.content.page_title : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.content?.content_description ? this.content.content_description : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.content?.content_keywords ? this.content.content_keywords : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
                },
            ],
        };
    },
    data() {
        return {
            content: null,
            paymentConfirmMode: false,
        }
    },
    methods: {
        goToMain() {
            this.$router.push({name: 'index'})
        }
    }
}
</script>

<style scoped>

</style>
