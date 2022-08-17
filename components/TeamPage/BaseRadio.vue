<template>
    <div class='chess-radio'>
        <input type='radio' v-bind='$attrs' class='radio' @change='$emit("input", val)' :id='val'>
        <div class='radio-block' :class='{"active": $attrs.value === val}' @click='$emit("input", val)'></div>
        <label class='radio-label' :for='val'>{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'BaseRadio',
    props: ['val', 'label'],
    data() {
        return {

        }
    },
    computed: {
        inputVal: {
            get() {
                return this.label;
            },
            set(val) {
                console.log('-sssssssset');
                this.$emit('input', val);
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.chess-radio {
    display: flex;
}
.radio {
    visibility: hidden;
    width: 0;
    height: 0;
    &-block {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 18px;
        width: 18px;
        border: 1px solid #498BDF;
        position: relative;
        margin-right: 20px;

        &.active {
            &::after {
                display: block;
                width: 12px;
                height: 12px;
                content: "";
                background: #498BDF;
                border-radius: 50%;
            }
        }
    }
    &-label {
        font-size: 14px;
        font-weight: 600;
    }
}
</style>
