<template>
  <div class="dropdown">
    <slot name="icon"></slot>
    <slot name="text"></slot>
    <slot name="list"></slot>
  </div>
</template>

<script>
export default {
  name: "PhoneDropDown",
  data() {
    return {

    }
  },


}
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  align-items: center;
  position: relative;
  color: #000000;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  height: 60px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 1.33;
  width: 100%;
  margin: 0;
}
.phone__list {
  position: absolute;
  top: 65px;
  left: 0;
  border: 1px solid #eee;
  width: 100%;
  padding: 5px 0;
  overflow-y: auto;
  height: 200px;
  border-radius: 5px;
}
.dropdown__text {
  width: 100%;
  height: auto;
  border: none;
}
.text {
  display: flex;
  width: 100%;
  height: 100%;
}
.phone__item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px 20px;
}
.phone__item:hover {
  background: #f2f2f2;
  cursor: pointer;
}
</style>
