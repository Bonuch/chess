<template>
  <section class="join" id="join" ref="join2"
           @wheel="handleScroll">
    <div class="join__decoration">
      <img src="@/static/img/coach-page/man.png" alt="man" class="join__decoration-man">
      <img src="@/static/img/coach-page/anim-man.png" alt="anim-man" class="join__decoration-anim-man">
      <img src="@/static/img/coach-page/hand.png" alt="hand" class="join__decoration-hand">
    </div>
    <div class="container">
      <div class="join__content">
        <h2 class="join__content-title">{{ $t('how_join') }}</h2>
        <div class="join__content-block">
          <transition name="fade1">
            <div class="profit__content-list__tag"
                 v-if="show">
              <h2 class="profit__content-list__title">{{ $t('coach_join_1') }}</h2>
            </div>
          </transition>
          <transition name="fade2">
          <div class="profit__content-list__tag"
               v-if="show">
            <h2 class="profit__content-list__title">{{ $t('coach_join_2') }}</h2>
          </div>
          </transition>
          <transition name="fade3">
          <div class="profit__content-list__tag"
               v-if="show">
            <h2 class="profit__content-list__title">{{ $t('coach_join_3') }}</h2>
          </div>
          </transition>
          <transition name="fade4">
          <div class="profit__content-list__tag"
          v-if="show">
            <h2 class="profit__content-list__title" v-html="$t('coach_join_4')"></h2>
          </div>
          </transition>
            <transition name="fade5">
          <div class="profit__content-list__tag"
          v-if="show">
            <h2 class="profit__content-list__title" v-html="$t('coach_join_5')"></h2>
          </div>
            </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    if(document.documentElement.clientWidth < 849) {
      this.show = true
    }
  },
  methods: {
    handleScroll: function (e) {
        if (!e.target || !e.target.scrollingElement)  return;
      let top = e.target.scrollingElement.scrollTop;
      if(e) {
        if (top > 3100) {
          this.show = true
        }
        else if (top < 1) {
          this.show = false
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.fade1-enter-active, .fade1-leave-active {
  transition: opacity .7s;}
.fade1-enter, .fade1-leave-to {
  opacity: 0;}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 1.3s;}
.fade2-enter, .fade2-leave-to {
  opacity: 0;}

.fade3-enter-active, .fade3-leave-active {
  transition: opacity 1.9s;}
.fade3-enter, .fade3-leave-to {
  opacity: 0;}

.fade4-enter-active, .fade4-leave-active {
  transition: opacity 2.5s;}
.fade4-enter, .fade4-leave-to {
  opacity: 0;}

.fade5-enter-active, .fade5-leave-active {
  transition: opacity 3.1s;}
.fade5-enter, .fade5-leave-to {
  opacity: 0;}


.join {
  margin-top: 50px;
  margin-bottom: 100px;
  position: relative;

  &__decoration {
    position: relative;

    &-man {
      position: absolute;
      width: 200px;
      z-index: 7;
      top: 80px;
      left: calc(50% - 600px + 180px);
      @media(max-width: 900px) {
        display: none;
      }
    }

    &-anim-man {
      position: absolute;
      z-index: 10;
      width: 210px;
      top: 80px;
      left: calc(50% - 600px + 830px);
      @media(max-width: 900px) {
        left: calc(50% - 600px + 690px);
      }
      @media(max-width: 640px) {
        display: none;
      }
    }

    &-hand {
      position: absolute;
      z-index: 9;
      width: 150px;
      top: 148px;
      left: calc(50% - 600px + 742px);
      transform-origin: right;
      animation: 4s handAnim infinite linear;
      @media(max-width: 900px) {
        left: calc(50% - 600px + 602px);
      }
      @media(max-width: 640px) {
        display: none;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px 0;
    @media(max-width: 900px) {
      align-items: flex-start;
      padding: 0 20px;
    }

    &-title {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
      margin: 0;
      padding: 0 20px;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 38px;
      }
    }

    &-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px 0;
    }
  }
}

@keyframes handAnim {
  0% {
    transform: translate(0) rotate(0deg);
  }
  45% {
    transform: translate(-8px, 10px) rotate(35deg);
  }
  70% {
    transform: translate(0) rotate(0deg);
  }
}
</style>
