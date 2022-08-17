<template>
    <div>
        <PromoAbout/>

        <History/>

        <AboutProfit/>

        <AboutSlider/>

        <AboutBenefits/>

        <ClassesAbout
            :priseList="pricesRu"
            :RuClassesTitle="ClassesTitle"
            :title="$i18n.t('price_lessons')"
            @buyProduct="buyProduct"/>

        <client-only>
            <transition name="fade">
                <Overlay v-if="overlay && productList.length > 0" @closeOverlay="toggleOverlay">
                    <template v-slot:container>
                        <PaymentForm
                            :products="productList"
                            @emptyList="toggleOverlay"
                        />
                    </template>
                </Overlay>
            </transition>
        </client-only>

        <StartTrial/>

        <AboutCompany v-if="content" :title="content.content_title" :content="content.content_text"/>

    </div>
</template>

<script>
import History from "@/components/AboutPage/History";
import Profit from "@/components/AboutPage/AboutProfit";
import AboutSlider from "@/components/AboutPage/AboutSlider";
import AboutBenefits from "@/components/AboutPage/AboutBenefits";
import ClassesAbout from "@/components/AboutPage/ClassesAbout";
import StartTrial from "@/components/StartTrial/StartTrial";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import PromoAbout from "@/components/AboutPage/PromoAbout";


export default {
    name: "About",
    components: {PromoAbout, AboutCompany, StartTrial, ClassesAbout, AboutBenefits, AboutSlider, Profit, History},
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
            productList: [],
            overlay: false,
            priseList: [
                {
                    number: 25,
                    text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #00B7FF 0%, #5374E9 100%), #0DAEFE',
                    link: [
                        {price: 890, amount: 4, les: 'занятия'},
                        {price: 840, amount: 8, les_2: 'занятий'},
                        {price: 760, amount: 16, les_2: 'занятий'},
                        {price: 690, amount: 32, les: 'занятия'},
                        {price: 640, amount: 64, les: 'занятия'},
                    ]
                },
                {
                    number: 45, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #FEDF1D 0%, #E0BC00 100%), linear-gradient(266.25deg, #00B7FF 1.36%, #8D53E9 98.57%), #7464E9;',
                    link: [
                        {price: 1390, amount: 4, les: 'занятия'},
                        {price: 1290, amount: 8, les_2: 'занятий'},
                        {price: 1190, amount: 16, les_2: 'занятий'},
                        {price: 1030, amount: 32, les: 'занятия'},
                        {price: 960, amount: 64, les: 'занятия'},
                    ]
                },
                {
                    number: 60,
                    text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #00B7FF 0%, #5374E9 100%), #0DAEFE',
                    link: [
                        {price: 1690, amount: 4, les: 'занятия'},
                        {price: 1590, amount: 8, les_2: 'занятий'},
                        {price: 1490, amount: 16, les_2: 'занятий'},
                        {price: 1390, amount: 32, les: 'занятия'},
                        {price: 1290, amount: 64, les: 'занятия'},
                    ]
                },
                {
                    number: 75, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #FEDF1D 0%, #E0BC00 100%), linear-gradient(266.25deg, #00B7FF 1.36%, #8D53E9 98.57%), #7464E9;',
                    link: [
                        {price: 1990, amount: 4, les: 'занятия'},
                        {price: 1890, amount: 8, les_2: 'занятий'},
                        {price: 1790, amount: 16, les_2: 'занятий'},
                        {price: 1690, amount: 32, les: 'занятия'},
                        {price: 1590, amount: 64, les: 'занятия'},
                    ]
                },
            ],
            content: null,
            ClassesTitle: [
                {titleRu: this.$i18n.t('price_rus_lessons')}
            ]
        }
    },
    methods: {
        toggleOverlay() {
            this.overlay = !this.overlay
            if (this.productList.length)
                this.productList = []
        },
        buyProduct(product) {
            this.productList.push(product)
            this.overlay = true;
        }
    },
    async asyncData({$axios, $helpers}) {
        try {
            const [content, pricesRu] = await Promise.all([
                $helpers.getPageMeta('main'),
                $axios.$post('/content/price-list'),
            ])
            return {pricesRu: pricesRu.priceList, content: content}
        } catch (e) {
            return {fetchError: true}
        }
    },
}
</script>

<style scoped>

</style>
