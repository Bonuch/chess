<template>
    <div>
        <PromoEnglish/>
        <AboutClassesEnglish/>
        <EnglishTrainer/>
        <StartTrial/>
        <template v-if="fetchError">
            <h2>Произошла ошибка при загрузке данных попробуйте позже</h2>
        </template>
        <template v-else>
            <ClassesAbout
                :priseList="pricesEn"
                :EnClassesTitle="ClassesTitle"
                :title="$i18n.t('price_en_lessons')"
                @buyProduct="buyProduct"/>
        </template>
        <client-only>
            <transition name="fade">
                <Overlay v-if="overlay && productList.length > 0" @closeOverlay="toggleOverlay">
                    <template v-slot:container>
                        <PaymentForm
                            :products="productList"
                            productType='lesson_eng'
                            @emptyList="toggleOverlay"/>
                    </template>
                </Overlay>
            </transition>
        </client-only>

        <AboutCompany v-if="content" :title="content.content_title" :content="content.content_text"/>
    </div>
</template>

<script>
import PromoEnglish from "@/components/EnglishPage/PromoEnglish";
import AboutClassesEnglish from "@/components/EnglishPage/AboutClassesEnglish";
import StartTrial from "@/components/StartTrial/StartTrial";
import ClassesAbout from "@/components/AboutPage/ClassesAbout";
import EnglishTrainer from "@/components/EnglishPage/EnglishTrainer";
import AboutCompany from "../../components/AboutCompany/AboutCompany";

export default {
    name: "index",
    components: {AboutCompany, EnglishTrainer, ClassesAbout, StartTrial, AboutClassesEnglish, PromoEnglish},
    async asyncData({$axios, $helpers}) {
        try {
            const [pricesEn, content] = await Promise.all([
                $axios.$post('/content/price-list', {language: 'english'}),
                $helpers.getPageMeta('pay')
            ])
            return {pricesEn: pricesEn.priceList, content: content}
        } catch (e) {
            return {fetchError: true}
        }
    },
    head() {
        return {
            title: this.content.page_title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.content.content_description
                },
                {
                    hid: 'Keywords',
                    name: 'Keywords',
                    content: this.content.content_keywords
                }
            ]
        }
    },
    data() {
        return {
            pricesEn: null,
            content: null,
            fetchError: null,
            ClassesTitle: [
                {titleEn: this.$i18n.t('price_en_lessons')}
            ],
            priseListEn: [
                {
                    number: 25, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #00B7FF 0%, #5374E9 100%), #0DAEFE', link: [
                        {price: 1540, amount: 4, les: 'занятия'},
                        {price: 1490, amount: 8, les_2: 'занятий'},
                        {price: 1410, amount: 16, les_2: 'занятий'},
                        {price: 1360, amount: 32, les: 'занятия'},
                    ]
                },
                {
                    number: 45, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #FEDF1D 0%, #E0BC00 100%), linear-gradient(266.25deg, #00B7FF 1.36%, #8D53E9 98.57%), #7464E9;',
                    link: [
                        {price: 2390, amount: 4, les: 'занятия'},
                        {price: 2330, amount: 8, les_2: 'занятий'},
                        {price: 2280, amount: 16, les_2: 'занятий'},
                        {price: 2230, amount: 32, les: 'занятия'},
                    ]
                },
                {
                    number: 60, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #00B7FF 0%, #5374E9 100%), #0DAEFE', link: [
                        {price: 3190, amount: 4, les: 'занятия'},
                        {price: 3120, amount: 8, les_2: 'занятий'},
                        {price: 3080, amount: 16, les_2: 'занятий'},
                        {price: 2990, amount: 32, les: 'занятия'},
                    ]
                },
                {
                    number: 75, text: this.$i18n.t('price_les_min'),
                    color: 'linear-gradient(180deg, #FEDF1D 0%, #E0BC00 100%), linear-gradient(266.25deg, #00B7FF 1.36%, #8D53E9 98.57%), #7464E9;',
                    link: [
                        {price: 4190, amount: 4, les: 'занятия'},
                        {price: 4120, amount: 8, les_2: 'занятий'},
                        {price: 4080, amount: 16, les_2: 'занятий'},
                        {price: 3990, amount: 32, les: 'занятия'},
                    ]
                },
            ],
            productList: [],
            overlay: false,
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
}
</script>

<style scoped lang="scss">

</style>
