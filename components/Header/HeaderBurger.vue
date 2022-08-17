<template>
    <div class="nav-container">
      <button
        type="button"
        class="hamburger-lines"
        :class="{'hamburger-lines--active': returnActive}"
        @click="toggleMenu"
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
    </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.dispatch('menu/togglingMenuActive');
    },
  },
  computed: {
    returnActive() {
      return this.$store.getters['menu/returnActiveMenu'];
    }
  },
}
</script>

<style scoped lang="scss">
.nav-container {
  display: none;
  @media(max-width: 950px) {
    display: block;
  }
}

.nav-container .hamburger-lines {
  display: none;
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 27px;
  height: 18px;
  width: 32px;
  padding: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  transform: rotate(180deg);
  border: 0;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &--active {
    .line1 {
      transform: rotate(45deg);
    }

    .line2 {
      transform: scaleY(0);
    }

    .line3 {
      transform: rotate(-45deg);
    }

    .logo{
      display: none;
    }
  }

  @media(max-width: 950px) {
    display: flex;
  }
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 2px;
  width: 24px;
  background: #1B3C66;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}
</style>
