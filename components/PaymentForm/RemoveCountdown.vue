<template>
  <div class="countdown">
    <span class="remain">{{ visibleCountdown }}</span>
    <div class="flex">
      <div class="hand">
        <span class="remain__spinner_l" :style="{
          'transform': 'rotate(' + leftSpin +'deg)',
        }"></span>
      </div>
      <div class="hand">
        <span class="remain__spinner_r" :style="{
          'transform': 'rotate(' + rightSpin +'deg)',
        }"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemoveCountdown",
  props: {
    countdown: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      transformTimer: null,
      spiners: {
        spin_l: {
          start: 225,
          max: 405,
        },
        spin_r: {
          start: 45,
          max: 225,
        }
      },
      leftSpin: 225,
      rightSpin: 45,
      visibleCountdown: this.countdown,
      animationInterval: null,
      countdownInterval: null,
    }
  },
  computed: {
    speedFactor() {
      return 360 / this.countdown / 100 // каждые 10 мс;
    },
  },
  beforeDestroy() {
    clearInterval(this.countdownInterval)
    clearInterval(this.animationInterval)
    // console.log('timers clear', this.countdownInterval, this.animationInterval, this.animationCountdown)
  },
  mounted() {
    this.animationInterval = setInterval(() => {
      if (this.rightSpin <= this.spiners.spin_r.max) {
        this.rightSpin += this.speedFactor;
      }
      if (this.leftSpin <= this.spiners.spin_l.max && this.rightSpin >= this.spiners.spin_r.max) {
        this.leftSpin += this.speedFactor;
      }
    }, 10);
    this.countdownInterval = setInterval(() => {
      this.visibleCountdown -= 1;
      if (this.visibleCountdown === 0) {
        this.$emit('completed');
      }
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
@mixin spinBorder {
  display: block;
  content: "";
  top: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  border-style: solid;
  border-color: transparent;
  border-width: 4px;
  border-radius: 50%;
}


.countdown {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
}
.hand {
  overflow: hidden;
  height: 24px;
  width: 12px;
  position: relative;
}
.remain {
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  z-index: 10;
  font-weight: bold;
  color: #f95d51;
  background: #fff;

  &__spinner {
    &_l {
      @include spinBorder;
      left: 0;
      border-top-color: #f95d51;
      border-right-color: #f95d51;
      //border-top-color: red;
      transform: rotate(225deg);
    }
    &_r {
      @include spinBorder;
      right: 0;
      border-top-color: #f95d51;
      border-right-color: #f95d51;
      //border-top-color: red;
      transform: rotate(45deg);
    }
  }
}


.remain__spinner:hover {

}
</style>
