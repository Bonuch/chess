<template>
    <div class="coach-bg">
        <CoachPromo/>
        <BenefitsCoach/>
        <Criteria/>
        <Expectations/>
        <BenefitWhy/>
        <Join/>
        <JoinForm/>
        <AboutCompany v-if="content" :title="content.content_title" :content="content.content_text"/>
    </div>
</template>

<script>
import CoachPromo from '@/components/CoachPage/CoachPromo';
import BenefitsCoach from '@/components/CoachPage/BenefitsCoach';
import Criteria from '@/components/CoachPage/Criteria';
import Expectations from '@/components/CoachPage/Expectations';
import BenefitWhy from '@/components/CoachPage/BenefitWhy';
import Join from '@/components/CoachPage/Join';
import JoinForm from '@/components/CoachPage/JoinForm';
import AboutCompany from "@/components/AboutCompany/AboutCompany";

export default {
    name: 'Coach',
    components: { AboutCompany, JoinForm, Join, BenefitWhy, Expectations, Criteria, BenefitsCoach, CoachPromo },
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
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            },
        }
    },
    async asyncData({ $helpers }) {
        try {
            const [ content ] = await Promise.all([
                $helpers.getPageMeta('coach')
            ])
            return { content };
        } catch (ex) {
            console.log(ex);
            return { fetchError: true };
        }
    },
}
</script>

<style lang="scss">
.coach-bg:after {
    content: "";
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    -webkit-overflow-scrolling: touch;
    background-image: url("../../static/img/coach-page/coach-bg.png");
    background-repeat: repeat;
    background-position: center;
    min-height: 100%;
    height: 100vh;
    background-attachment: initial;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s linear;
}
</style>
