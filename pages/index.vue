<template>
    <div>
        <PromoPageNew/>
        <Benefits />
        <AboutClassesNew/>
        <Question data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"/>
        <Trainers />
        <AboutWork/>
        <StartTrial />
        <ParentsReviews/>
        <FAQ v-if='faqItems && faqItems.length > 0' :items='faqItems' />
<!--        <AboutCompany v-if="content" :title='content.content_title' :content='content.content_text' />-->
    </div>
</template>

<script>
import Question from '@/components/Question/Question';
import Trainers from '@/components/Trainers/Trainers';
import Benefits from '@/components/Benefits/Benefits';
import AboutWork from '@/components/AboutWork/AboutWork';
import StartTrial from '@/components/StartTrial/StartTrial';
import FAQ from '@/components/FAQ/FAQ';
import AboutCompany from '@/components/AboutCompany/AboutCompany';
import translateMixin from '@/mixins/translateMixin.js';
import PromoPageNew from "@/components/Promo/PromoPageNew";
import AboutClassesNew from "@/components/AboutClassesNew/AboutClassesNew";
import ParentsReviews from "@/components/ParentsReviews/ParentsReviews";

export default {
    head() {
        return {
            title: this.content?.page_title ? this.content.page_title : 'Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.content?.content_description ? this.content.content_description : 'Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.content?.content_keywords ? this.content.content_keywords : 'Онлайн-обучение в шахматной школе для детей | Cпортивная шахматная онлайн-школа для начинающих',
                },
            ],
        };
    },
    name: 'IndexPage',
    mixins: [translateMixin],
    components: {
        ParentsReviews,
        AboutClassesNew,
        PromoPageNew,
        AboutCompany,
        FAQ,
        StartTrial,
        AboutWork,
        Benefits,
        Trainers,
        Question,
    },
    data() {
        return {
            faqItems: [],
            translates: null,
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            },
        };
    },
    async asyncData({ $helpers }) {
        try {
            const [content] = await Promise.all([
                $helpers.getPageMeta('main'),
            ]);
            const faqItems = $helpers.getFaqContent('mainPageFaq');
            return { content, faqItems };
        } catch (ex) {
            console.log('cant fetch content: ' + ex);
        }
    },
};
</script>
