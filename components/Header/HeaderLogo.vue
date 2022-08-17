<template>
  <section class="logo">
    <nuxt-link to="/"><img class="logo-img" src="/img/logo.svg" alt="ChessFirst"></nuxt-link>
  </section>
</template>

<script>
export default {
  name: "HeaderLogo"
}
</script>

<style lang="scss">
.logo {
  position: relative;
  z-index: 1000;
}
</style>
