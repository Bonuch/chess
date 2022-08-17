<template>
    <section class="about-team">
        <div class="container">
            <div class="about-team__content">
                <h2 class="about-team__content-title">{{ $t('team_our') }}</h2>
                <p class="about-team__content-text" v-html="$t('team_our_dsc')"></p>
                <iframe class="about-team__content-video" src="https://kinescope.io/201134050"
                        style="max-width: 742px; width: 100%; max-height: 420px;" width="742" height="420"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <p class="about-team__content-subtitle" v-html="$t('team_hr_dir')"></p>
                <p  class="about-team__content-description" v-html="$t('team_hr_dsc')"></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutTeam"
}
</script>

<style lang="scss">
.about-team {
    margin-top: 100px;
    margin-bottom: 150px;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;

        &-title {
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            margin: 0;
            margin-bottom: 40px;
            @media(max-width: 767px) {
                margin-bottom: 20px;
            }
        }

        &-text {
            font-size: 18px;
            line-height: 1.55;
            font-weight: 700;
            margin: 0;
            margin-bottom: 50px;
            text-align: center;
            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        &-video {
            @media (max-width: 767px) {
                height: 55vw;
            }
        }

        &-subtitle {
            font-size: 14px;
            line-height: 1.55;
            font-weight: 700;
            margin: 0;
            text-align: center;
            margin-top: 10px;
            @media (max-width: 767px) {
                margin-top: 0;
            }
        }

        &-description {
            text-align: center;
            font-size: 18px;
            line-height: 1.4;
            font-weight: 500;
            margin: 0;
            margin-top: 15px;
            max-width: 840px;
        }
    }
}
</style>
