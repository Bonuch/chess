<template>
    <div class="benefits-slider">
        <VueSlickCarousel v-bind="settings">
            <div
                class="benefit-info__wrapper"
                v-for="(item, indexIdx) in benefitItems"
                :key="indexIdx"
            >
                <img :src="item.img_bg" alt="" class="img-bg">
                <div class="benefit-info-content">
                    <img :src="item.img" alt="">
                    <h3 v-html="item.title"></h3>
                    <p v-html="item.description"></p>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: "BenefitsSlider",
    components: {
        VueSlickCarousel
    },
    props: {
        benefitItems: {
            type: Array,
        }
    },
    data() {
        return {
            "settings": {
                'draggable': true,
                'arrows': false,
                "slidesToShow": 2,
                'infinite': false,
                "responsive": [
                    {
                        "breakpoint": 1350,
                        "settings": {
                            'arrows': false,
                        }
                    },
                    {
                        "breakpoint": 560,
                        "settings": {
                            "slidesToShow": 1.25,
                            'arrows': false,
                        }
                    },
                ]
            }
        }
    },

}
</script>

<style lang='scss'>
.benefits-slider {
    .benefit-info__wrapper {
        height: 100%;
    }

    .slick-track {
        display: flex !important;
    }

    .slick-slide {
        height: inherit !important;

        & > div {
            height: 100% !important;
        }
    }
}
</style>
