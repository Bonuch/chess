<template>
  <div class="orders">
    <div class="order__list">
      <OrderItem
        v-for="(product, idx) in order"
        :key="product.id"
        :product="product"
        :currency="currency"
        @startCoundown="tempRemove"
        @cancelCoundown="cancelRemove"
        @countdownCompleted="deleteProduct"
      />
    </div>
    <client-only>
    <div class="total" v-if="intTotalSum > 0">
      <div class="total__text">{{ $t('paymentForm.total') }}: {{ totalSum }} </div>
      <template v-if="$i18n.locale !== 'en' && dolyameAvailable">
        <div class="total__dolyame" v-if="dolyameAvailable">{{ $t('or_dolyame') }}: {{ dolyameSum }} {{ currency }}</div>
        <div class="text-right"><a href="#" class="dolyame__more" @click.prevent="toggleDolyameInfo">{{ $t('more_about') }}</a></div>
      </template>
    </div>
    </client-only>
    <transition name="fade">
      <DolyameInfo v-if="$i18n.locale !== 'en' && showInfo" @closeModal="toggleDolyameInfo"/>
    </transition>
  </div>
</template>

<script>

import OrderItem from "./OrderItem";
import DolyameInfo from "./DolyameInfo";

export default {
  name: "OrderList",
  props: {
    total: {
      type: Number,
    },
    currency: {
      type: String
    },
    products: {
      type: Array,
      required: true
    }},
  components: {DolyameInfo, OrderItem},
  data() {
    return {
      productList: this.products.map(item => {return {...item, removed: false}}),
      // productList: [
      //   {
      //     id: 1,
      //     title: '45 минут - 4 занятий',
      //     unitPrice: 1890,
      //     count: 1,
      //     removed: false,
      //   },
      //   {
      //     id: 2,
      //     title: 'Сертификат с 8-марта действующий с 8марта до конца года отличный подарок',
      //     unitPrice: 415,
      //     count: 1,
      //     removed: false,
      //   },
      //   {
      //     id: 3,
      //     title: '45 минут - 4 занятий на английском',
      //     unitPrice: 500,
      //     count: 3,
      //     removed: false,
      //   },
      // ],
      temporaryRemoved: [],
      showInfo: false
    }
  },
  computed: {
    totalSum() {
      let total;
      if (this.productList.length === 1) {
        total = this.productList.map(item => item.count * item.unitPrice).reduce((a, b) => a + b);
      } else {
        total = this.productList.filter(item => !item.removed).map(item => item.count * item.unitPrice).reduce((a, b) => a + b);
      }
      this.$emit('update:total', total);
      return this.formatPrice(total);
    },
    intTotalSum() {
      return parseInt(this.totalSum.replace(' ', ''))
    },
    order() {
      return this.productList
    },
    dolyameAvailable() {
      return this.intTotalSum <= 30000;
    },
    dolyameSum() {
      return this.formatPrice(this.intTotalSum / 4);
    }
  },
  methods: {
    formatPrice(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    addItem() {

    },
    tempRemove(delId) {
      // console.log('----', delId)
      // console.log('tempremove', delId);
      // const index = this.getItemIndex(delId);
      // const item = this.productList[index]
      // console.log('before', item)
      // this.temporaryRemoved.push({
      //   ...item,
      //   count: item.count ? item.count: 1
      // });
      // this.$set(item, 'count', 0);
    },
    toggleDolyameInfo() {
      this.showInfo = !this.showInfo;
    },
    cancelRemove(id) {
      const itemIdx = this.getItemIndex(id, this.temporaryRemoved);
      const productId = this.getItemIndex(id);
      const product = this.productList[productId];
      if (product.count <= 0) {
        this.$set(product, 'count', 1);
      }
      this.$set(product, 'removed', false);
    },
    deleteProduct(id) {
      this.removeItem(id);
    },
    getItemIndex(id, list = this.productList) {
      return list.findIndex(item => {
        return item.id === id
      });
    },
    removeItem(id) {
      const delId = this.getItemIndex(id);
      if (this.productList.length === 1) {
        this.$emit('emptyList')
      }
      this.productList.splice(delId, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
.order__list {
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.total {
  padding-top: 30px;
}

.total__text {
  text-align: right;
  font-weight: 600;
  color: #000;
}

.total__dolyame {
  text-align: right;
  color: #c03f31;
  font-weight: 600;
}

.dolyame__more {
  color: #1b3c66;
  font-weight: 100;
}
.dolyame__wrapper {
  display: flex;
  position: absolute;
  background: #7b7b7b;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
