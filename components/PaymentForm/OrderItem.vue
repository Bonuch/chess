<template>
  <div class="item">
    <template v-if="product.count > 0 && !product.removed">
      <div class="item__title"><span>{{ product.title }}</span></div>
      <div class="item__qty">
        <Counter :count.sync="product.count"/>
      </div>
      <div class="item__remove">
        <div class="item__sum">{{ totalSum }} {{ currency }}</div>
        <a type="button" class="item__btn_remove" @click="removeItem"><img src="@/assets/images/circle_remove.svg" alt="#"
                                                                  width="100%"></a>
      </div>
    </template>
    <template v-else>
      <div class="remove__countdown">
        <RemoveCountdown :countdown="deleteAfter" @completed="$emit('countdownCompleted', product.id)"/>
      </div>
      <div class="remove__title">{{ $t('you_remove') }} "{{ product.title }}"</div>
      <button type="button" class="remove__back" @click.prevent="cancelRemove">{{ $t('return') }}</button>
    </template>
  </div>
</template>

<script>
import Counter from "./Counter";
import RemoveCountdown from "./RemoveCountdown";

export default {
  name: "OrderItem",
  props: {
    product: {
      type: Object,
      required: true
    },
    deleteAfter: {
      type: Number,
      default: 5,
    },
    currency: {
      type: String
    }
  },
  components: {
    RemoveCountdown,
    Counter,
  },
  data() {
    return {
      remove: false,
      removeTimer: null,
      // totalSum: this.count * this.unitPrice,
    }
  },
  watch: {
    'product.count': function (newVal, old) {
      if (newVal === 0) {
        this.removeItem();
      }
    }
  },
  computed: {
    deleteCountdown() {
      return this.count < 0;
    },
    totalSum() {
      const sum = this.product.count * this.product.unitPrice;
      return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  methods: {
    removeItem() {
      this.$set(this.product, 'removed', true);
      this.$emit('startCoundown', this.product.id)
    },
    cancelRemove() {
      this.$set(this.product, 'removed', false);
      this.$emit('cancelCoundown', this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  height: 58px;
  transition: .1s;
  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    padding: 5px 0;
  }
  ::v-deep {
    .counter__btn {
      transition: .1s;
      opacity: .4;
    }
  }

  &:hover {
    ::v-deep {
      .counter__btn {
        opacity: 1;
      }
    }
    .item__btn_remove {
      opacity: 1;
    }
  }

  &__title {
    font-size: 16px;
    flex: 1;
    font-weight: 600;
    vertical-align: middle;
    color: #000;

    @media screen and (max-width: 425px) {
      flex: 1 1 100%;
      margin-bottom: 5px;
    }
  }

  &__qty {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  &__btn_remove {
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    background: none;
    border: none;
    opacity: .4;
    cursor: pointer;
  }

  &__remove {
    display: flex;
  }

  &__sum {
    margin-right: 15px;
    text-align: center;
    min-width: 80px;
    color: #000;
    font-weight: 300;
    flex: 1;
    //width: 85px;
  }
}
.remove__countdown {
  margin-right: 20px;
}
.remove__title {
  color: #7b7b7b;
  font-size: 14px;
  flex: 1;
}
.remove__back {
  font-size: 14px;
  background: none;
  border: none;
  color: #7b7b7b;
  cursor: pointer;
}
</style>
