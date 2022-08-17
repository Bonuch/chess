<template>
    <section class="content-page">
        <div class="container">
            <div class="content">
                <h1 v-if="title">{{ title }}</h1>
                <div class="content__footer" v-html="content"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutCompany",
    props: ['title', 'content']
}
</script>

<style lang="scss" scoped>
.content {
    padding: 0 20px 60px 20px;

    & h1 {
        font-size: 32px;
        margin-bottom: 24px;
        text-align: left;
    }

    & h2 {
        margin: 25px 0 15px;
        font-size: 24px;
        text-align: left;
    }

    & p {
        font-size: 16px;
        text-align: left;
    }

    & ul {
        padding-left: 20px;
        list-style-type: disc;

        & li {
            font-size: 16px;
        }
    }
    .content__footer {
        line-height: 1.4;
    }
}
@media (max-width: 1200px) {
    .content {
        padding: 0 40px 40px 40px;
    }
}
</style>
