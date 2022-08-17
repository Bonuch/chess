<template>
  <div class="overlay" @click.self="closeOverlay">
      <button @click.prevent="closeOverlay" class="close__icon" v-if="showClose">
        <slot name="close-icon">
          <svg class="t706__cartwin-close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
              <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
              <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
            </g>
          </svg>
        </slot>
      </button>
    <slot name="container"></slot>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    showClose: {
      type: Boolean
    }
  },
  methods: {
    closeOverlay(evt) {
      this.$emit('closeOverlay')
    }
  },
  destroyed() {
    document.body.style['overflow'] = 'auto';
  },
  created() {
    const body = document.body;
    body.style['overflow'] = 'hidden';
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  background: rgba(#000, .8);
  justify-content: center;
  align-items: center;
}
.close__icon {
  position: fixed;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
