<template>
    <Content v-if="content" :title="content.content_title" :content="content.content_text"/>
</template>

<script>
import Content from '@/components/Content';
import translateMixin from "@/mixins/translateMixin.js";

export default {
    mixins: [ translateMixin ],
    components: { Content },
    data() {
        return {
            translates: null,
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            }
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
    async asyncData({ $helpers , route, app, error }) {
        const slug = $helpers.parseCustomSlug(route.path);
        try {
            const content = await $helpers.getPageMeta(slug);
            if (!content || content.length === 0) throw ({statusCode: 404, message: app.i18n.t('errors.pageNotFound')})
            return {content}
        } catch (e) {
            error(e)
        }
    },
}
</script>
