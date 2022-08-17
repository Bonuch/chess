<template>
  <div class="counter">
    <a class="counter__btn" @click="decrease"><img src="@/assets/images/circle_minus.svg" alt="#" width="100%"></a>
    <div class="counter__total"><input type="text" v-model="count"/></div>
    <a class="counter__btn" @click="increase"><img src="@/assets/images/circle_plus.svg" alt="#" width="100%"></a>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    count: {
      type: [Number, String],
      required: true,
    }
  },
  watch: {
    count: function (newVal, old) {
      this.$emit('update:count', this.count)
    }
  },
  methods: {
    emitUpdate() {
      this.$emit('update:count', this.count)
    },
    decrease() {
      this.$emit('update:count', this.count - 1);
    },
    increase() {
      this.$emit('update:count', this.count + 1);
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  //width: px;
  //padding-left: 10px;
  vertical-align: middle;
  color: #000;
  white-space: nowrap;
  align-items: center;
  &__total {
    text-align: center;
    input {
      position: relative;
      margin: 0 3px;
      border: none;
      width: 20px;
      text-align: center;

      &:hover {
        border: 1px solid rgba(0, 0, 0, .3);
      }
    }
  }
  &__btn {
    display: block;
    cursor: pointer;
    width: 16px;
    height: 16px;
    padding: 0;
    background: none;
    border: none;
  }
}
</style>
