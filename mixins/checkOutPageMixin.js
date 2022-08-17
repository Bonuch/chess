export default {
    async asyncData({$axios, $helpers, params, app, error, route}) {
        try {
            let content;
            let paymentConfirmMode = true;
            const order = app.$cookies.get('orderId');
            if (order) {
                const paymentResult = await $axios.$get('/website/check-payment', {
                    'API_SECRET_KEY': process.env.API_SECRET_KEY,
                    'paymentId': order,
                })
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
            return {content, paymentConfirmMode}
        } catch (e) {
            error(e)
        }
    },
    head() {
        return {
            title: this.content.page_title ? this.content.page_title : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.content.content_description ? this.content.content_description : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.content.content_keywords ? this.content.content_keywords : "Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих",
                },
            ],
        };
    },
    data() {
        return {
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            },
            paymentConfirmMode: false,
        }
    },
    methods: {
        goToMain() {
            this.$router.push({ name: 'index' })
        }
    }

}
