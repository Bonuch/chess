<template>
    <div class="modal-body__wrapper">
        <iframe class="frame" title="iframe-player" :src="videoUrl" style="background-color: black" autofocus
                frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: "VideoModal",
    props: {
        videoUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-body__wrapper {
    width: 60%;
    height: 64%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
}
.frame {
    width: 100%;
    height: 100%;
}
</style>
