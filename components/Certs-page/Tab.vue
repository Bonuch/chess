<template>
  <div class="tabSec" v-show="isActiveTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'TabSec'
    }
  },
  data () {
    return {
      isActiveTab: true
    }
  }
}
</script>

<style scoped lang="scss"></style>

