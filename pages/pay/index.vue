<template>
    <div style="display: flex; align-items: center; flex-direction: column;">
        <template v-if="fetchError">
            <h2>Произошла ошибка при загрузке данных попробуйте позже</h2>
        </template>
        <template v-else>
            <ClassesAbout
                :priseList="pricesRu"
                :title="$i18n.t('price_lessons')"
                @buyProduct="buyProduct"/>

            <button
                @click.prevent="buyProduct({
      id: 1,
      title: 'Оплата турнира',
      unitPrice: 990,
      count: 1,
      }, 'tournament')"
                type="button"
                class="payment-button">{{ $t('pay_tournament') }}
            </button>

            <ClassesAbout
                :priseList="pricesEn"
                :title="$i18n.t('price_en_lessons')"
                @buyProduct="buyProduct($event, 'lesson_eng')"/>

            <client-only>
                <transition name="fade">
                    <Overlay v-if="overlay && productList.length > 0" @closeOverlay="toggleOverlay">
                        <template v-slot:container>
                            <PaymentForm
                                :products="productList"
                                :productType='productType'
                                @emptyList="toggleOverlay"/>
                        </template>
                    </Overlay>
                </transition>
            </client-only>

            <AboutCompany v-if="content" :title="content.content_title" :content="content.content_text"/>
        </template>
    </div>
</template>

<script>
import ClassesAbout from "@/components/AboutPage/ClassesAbout";
import AboutCompany from "@/components/AboutCompany/AboutCompany";

export default {
    name: "index",
    components: {AboutCompany, ClassesAbout},
    head() {
        return {
            title: this.content && this.content.page_title ? this.content.page_title : 'Онлайн-обучение в шахматной школе для детей',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.content && this.content.content_description ? this.content.content_description : 'Онлайн-обучение в шахматной школе для детей'
                },
                {
                    hid: 'Keywords',
                    name: 'Keywords',
                    content: this.content && this.content.content_keywords ? this.content.content_keywords : 'Онлайн-обучение в шахматной школе для детей'
                }
            ]
        }
    },
    data() {
        return {
            pricesRu: null,
            pricesEn: null,
            content: null,
            productList: [],
            overlay: false,
            fetchError: false,
            productType: 'lesson',
        }
    },
    methods: {
        toggleOverlay() {
            this.overlay = !this.overlay
            if (this.productList.length)
                this.productList = []
        },
        buyProduct(product, prodType = 'lesson') {
            this.productList.push(product)
            this.productType = prodType
            this.overlay = true;
        },
        async fetchPriceLists() {

        }
    },
    async created() {
        await this.fetchPriceLists()
    },
    async asyncData({$axios, $helpers}) {
        try {
            const [pricesRu, pricesEn, content] = await Promise.all([
                $axios.$post('/content/price-list', {lang_key: $helpers.getLocale()}),
                $axios.$post('/content/price-list', {lang_key: $helpers.getLocale(), language: 'english'}),
                $helpers.getPageMeta('pay')
            ])
            return {pricesEn: pricesEn.priceList, pricesRu: pricesRu.priceList, content: content}
        } catch (e) {
            return {fetchError: true}
        }
    }
}
</script>

<style scoped lang="scss">
.payment-button {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
    cursor: pointer;
    display: inline-block;
    width: 360px;
    height: 68px;
    color: #ffffff !important;
    font-size: 24px;
    font-family: 'Manrope', Arial, sans-serif;
    font-weight: 700;
    border-width: 1px;
    border-radius: 10px;
    background-color: #3b81c2;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    box-shadow: 0px 15px 44px 0px rgb(166 166 166 / 50%);
    text-align: center;
}
</style>
