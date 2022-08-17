<template>
    <div class="classes-video">
        <div class="iframe-box">
            <iframe :src="`https://kinescope.io/201157681${getUrl}`"
                    style="max-width: 525px; width: 100%; border-radius: 16px;" width="525" height="294" frameborder="0"
                    allowfullscreen></iframe>
        </div>

        <img src="@/static/img/individual_classes-ru.png" alt="">
    </div>
</template>

<script>
export default {
    name: "AboutClassesVideoNew",
    props: {
        urlVideo: {
            type: Boolean
        }
    },
    computed: {
        getUrl() {
            if(this.urlVideo === false) {
                return '?autoplay=0'
            } else {
                return '?autoplay=1'
            }
        }
    }
}
</script>

<style scoped lang="scss">
.classes-video {
    display: flex;
    justify-content: center;
    position: relative;
    width: 50%;
    height: 710px;
    &:before {
        content: "";
        position: absolute;
        background: url("/img/classes-video-figure.svg") no-repeat;
        background-size: 100%;
        width: 100%;
        max-width: 390px;
        height: 100%;
        z-index: 10;
    }
    &:after {
        content: "";
        position: absolute;
        border-radius: 100%;
        max-width: 477px;
        max-height: 477px;
        width: 100%;
        height: 100%;
        background: #E4F6FF;
        bottom: 0;
        z-index: 5;
        animation: circleScale 5s infinite ease-in-out;
    }
    & img {
        position: absolute;
        bottom: 43px;
        left: 48px;
        max-width: 100%;
        z-index: 16;
    }
    & .iframe-box {
        position: absolute;
        border: 10px solid #4F9BFA;
        max-width: 545px;
        width: 100%;
        height: 314px;
        bottom: 91px;
        z-index: 15;
        border-radius: 28px;
    }
    & iframe {
        position: absolute;
        z-index: 10;
    }
}
@media (max-width: 1150px) {
    .classes-video {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        &:before {
        }
        & img {
            left: unset;
        }
        & iframe {
            left: unset;
        }
    }
}
@media (max-width: 570px) {
    .classes-video {

        &:before {
        }
        &:after {
            width: 95vw;
            height: 95vw;
        }
        & img {
            bottom: 65px;
            max-width: 100%;
            width: 85%;
        }
        & iframe {
        }
    }
}
@media (max-width: 440px) {
    .classes-video {
        //height: 122vw;
        height: 536px;
        &:before {
            max-width: 300px;
        }
        &:after {
            max-width: 80vw;
            height: 80vw;
            bottom: 30px;
        }
        & img {
        }
        & .iframe-box {
            height: 214px;
            border: 7px solid #4F9BFA;
        }
        & iframe {
            height: 200px;

        }
    }
}

</style>
