<template>
    <div class="benefit-info-main">
        <div
            class="benefit-info__wrapper"
            data-aos="left-fade"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <img src="@/static/img/benefit/elephant.svg" alt="elephant" class="img-bg">
            <div class="benefit-info-content"
            >
                <img src="@/static/img/benefit/gift.svg" alt="">
                <h3>{{$t("main_advantage_free_new")}}</h3>
                <p v-html="$t('main_advantage_free_descr_new')"></p>
            </div>
        </div>
    <div
            class="benefit-info__wrapper"
            data-aos="left-fade"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-once="true"
        >
            <img src="@/static/img/benefit/rook.svg" alt="rook" class="img-bg">
            <div class="benefit-info-content"
            >
                <img src="@/static/img/benefit/calendar.svg" alt="">
                <h3 v-html="$t('main_advantage_calend')"></h3>
                <p v-html="$t('main_advantage_calend_descr_new')"></p>
            </div>
        </div>
    <div
            class="benefit-info__wrapper"
            data-aos="left-fade"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
        >
            <img src="@/static/img/benefit/hourse.svg" alt="horse" class="img-bg">
            <div class="benefit-info-content"
            >
                <img src="@/static/img/benefit/medal.svg" alt="">
                <h3>{{$t("main_advantage_qual_new")}}</h3>
                <p v-html="$t('main_advantage_qual_descr_new')"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BenefitsInfo",
    props: {
        benefitItems: {
            type: Array,
        }
    },
}
</script>

<style scoped lang="scss">
.benefit-info__wrapper {
    width: 33%;
}

</style>
