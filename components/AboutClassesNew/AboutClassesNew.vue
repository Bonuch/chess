<template>
    <section class="about-new">
        <div class="container">
            <div class="about-new-content">
                <AboutClassesInfoNew/>

                <AboutClassesVideoNew :urlVideo="playVideo"/>
            </div>
        </div>

    </section>
</template>

<script>
import AboutClassesInfoNew from "@/components/AboutClassesNew/AboutClassesInfoNew";
import AboutClassesVideoNew from "@/components/AboutClassesNew/AboutClassesVideoNew";

export default {
    name: "AboutClassesNew",
    components: {AboutClassesVideoNew, AboutClassesInfoNew},
    data() {
        return {
            playVideo: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (this.$el) {
                const rect = this.$el.getBoundingClientRect();
                const y = rect.y + window.scrollY - 100;

                if (window.pageYOffset > y && !this.playVideo) {
                    this.playVideo = true;
                }
            }
        });
    }
}
</script>

<style scoped lang="scss">
.about-new {
    padding: 0 16px;
    &-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}
@media (max-width: 1150px) {
    .about-new-content {
        flex-direction: column-reverse;
    }
}
@media (max-width: 767px) {
    .about-new {
        margin-top: 80px;
    }
}
</style>
