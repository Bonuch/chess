<template>
    <div>
        <PromoTeam />
        <AboutTeam />
        <!--     template exist data-->
        <template v-if='trainerRating && trainerRating.length || Object.keys($route.query).length'>
            <Trainers v-if='!$store.getters.isMobile' :trainerList='trainerRating' :nextPageUrl='nextPageUrl' />
            <TrainersMobile v-else :trainerList='trainerRating' :nextPageUrl='nextPageUrl' />
        </template>
        <template v-else>
            <div class='content'>
                <h2 class='text-center'>Раздел заполняется пожалуйта зайдите позже :)</h2>
            </div>
        </template>
        <!--    <TrainersMobile :trainerList="trainerRating"/>-->
        <AboutCompany v-if="content" :title='content.content_title' :content='content.content_text' />
    </div>
</template>

<script>
import PromoTeam from '@/components/TeamPage/PromoTeam';
import AboutTeam from '@/components/TeamPage/AboutTeam';
import Trainers from '@/components/TeamPage/Trainers';
import TrainersMobile from '@/components/TeamPage/TrainersMobile';
import AboutCompany from '../../components/AboutCompany/AboutCompany';

async function fetchTrainerList({$helpers, $axios, query, app}) {
    return $axios.$get('/rating', {
        params: {
            lang: app.i18n.locale,
            ...query,
        },
    });

    // return request

    // const [content, trainerRating] = await Promise.all([
    //     $helpers.getPageMeta('team'),
    //     $axios.$get('/rating', {
    //         params: {
    //             lang: app.i18n.locale,
    //             ...query
    //         },
    //     }),
    // ]);
    // return {
    //     content,
    //     trainerRating: trainerRating.data,
    //     nextPageUrl: trainerRating.meta.current_page < trainerRating.meta.last_page ? trainerRating.meta : null,
    // };
    // } catch (e) {
    //     console.error(e);
    //     return { fetchError: true };
    // }
}

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
    name: 'index',
    components: {
        Trainers,
        TrainersMobile,
        AboutTeam,
        PromoTeam,
        AboutCompany,
    },
    async asyncData(context) {
        const { $helpers, $axios, app, query } = context;
        try {
            console.log('--------QUERY-------', query);
            const [content, trainerRating] = await Promise.all([
                $helpers.getPageMeta('team'),
                fetchTrainerList(context),
                // $axios.$get('/rating', {
                //     params: {
                //         lang: app.i18n.locale,
                //         ...query
                //     },
                // }),
            ]);
            return {
                content,
                trainerRating: trainerRating.data,
                nextPageUrl: trainerRating.meta.current_page < trainerRating.meta.last_page ? trainerRating.meta : null,
            };
        } catch (e) {
            console.error(e);
            return { fetchError: true };
        }
    },
    async beforeRouteUpdate(to, from, next) {


        try {
            const [content, trainerRating] = await Promise.all([
                this.$helpers.getPageMeta('team'),
                this.$axios.$get('/rating', {
                    params: {
                        lang: this.$i18n.locale,
                        ...to.query,
                    },
                }),
            ]);
            this.trainerRating = trainerRating.data;
            this.nextPageUrl = trainerRating.meta.current_page < trainerRating.meta.last_page ? trainerRating.meta : null;

        } catch (e) {
            console.error(e);
        }

        await next();
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
            fetchError: false,
            trainerRating: null,
            nextPageUrl: null,
        };
    },
    computed: {
        returnRating() {
            return this.$store.getters.returnRating;
        },
    },

};
</script>

<style scoped lang='scss'>
.content {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
    flex-direction: column;
}
</style>
