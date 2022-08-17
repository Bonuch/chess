<template>
  <div class="form__input">
    <label class="form__label" v-if="label" :for="id">{{ label }}</label>
    <div class="input__container">
      <input v-if="cookie" class="input" :id="id" v-bind="$attrs" :value="cookie" v-on="inputListeners">
      <input v-else class="input" :id="id" v-bind="$attrs" :value="value" v-on="inputListeners">
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ['id', 'label', 'value', 'cookie'],
  inheritAttrs: false,
  computed: {
    inputListeners: function () {
      const vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.form__input {

}
.form__label {
  display: block;
  margin-bottom: 5px;
}
.input__container {
  display: flex;
  align-items: center;
  position: relative;
  color: #000000;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  height: 60px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 1.33;
  width: 100%;
  margin: 0;
}
.input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

</style>
