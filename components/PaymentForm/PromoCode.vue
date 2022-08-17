<template>
    <div>
        <div v-if='!promocodeDiscount' class='promocode mb-20px'>
            <FormInput
                class='flex_1'
                v-model='promoCode'
                type='text'
                :placeholder="$t('promo')"
                :cookie="getCookie"
                @focus='promoFocus'
            />
            <button v-if='promoFocused' type='button' class='promocode__btn' @click='getPromoDetails'>{{ $tc('activate')
                }}
            </button>
        </div>
        <div v-if='promocodeBonus'>
            <div class='promo__descr'>
                <p class='descr__par'>{{ $t('promo') }} {{ promoCode|uppercase }} {{ $tc('activate', 2) }}</p>
                <p class='descr__par'>{{ $t('your_bonus') }}: {{ promocodeBonus }}</p>
            </div>
<!--            <div class='promo__descr__details'>-->
<!--&lt;!&ndash;                <p class='descr__par'>{{$t('paymentForm.bonus')}}</p>&ndash;&gt;-->
<!--                <h4 class='descr__par'>{{ promocodeBonus }}</h4>-->
<!--&lt;!&ndash;                <p class='descr__par'>{{ $t('your_bonus') }} {{ promoPercents }}</p>&ndash;&gt;-->
<!--            </div>-->
        </div>
        <div v-if='promocodeDiscount'>
<!--            <div class='promo__descr'>-->
<!--                <p class='descr__par'>{{ $t('promo') }} {{ promoCode|uppercase }} {{ $tc('activate', 2) }}</p>-->
<!--                <p class='descr__par'>{{ $t('your_bonus') }} {{ promoPercents }}</p>-->
<!--            </div>-->
            <div class='promo__descr__details'>
                <p class='descr__par'>{{ $t('paymentForm.total') }}: {{ displayedTotal }} {{ currency }}</p>
                <p class='descr__par'>{{ $t('promo') }}: {{ promoCode|uppercase }}</p>
                <p class='descr__par'>{{ $t('total_w_dscnt') }}: {{ displayedTotalEnd }} {{ currency }}</p>
                <p class='descr__par descr__par_big'>{{ $t('total_f_pay') }}: {{ displayedTotalEnd }} {{ currency }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromoCode',
    props: {
        total: {
            type: Number,
            required: false,
        },
        currency: {
            type: String,
        },
    },
    filters: {
        uppercase(val) {
            return val.toUpperCase();
        },
    },
    data() {
        return {
            promocodeDiscount: null,
            promoFocused: false,
            promoCode: null,
            promocodeBonus: null,
        };
    },
    computed: {
        promoPercents() {
            return this.promocodeDiscount + '%';
        },
        totalDiscount() {
            return this.total / 100 * this.promocodeDiscount;
        },
        totalEnd() {
            return this.total - this.totalDiscount;
        },
        displayedTotal() {
            return this.$helpers.formatPrice(this.total);
        },
        displayedTotalEnd() {
            return this.$helpers.formatPrice(this.totalEnd);
        },
        getCookie() {
            const obj = {};
            const cookies = document.cookie.split(/ /);
            for (let i = 0, len = cookies.length; i < len; i++) {
                const cookie = cookies[i].split(/=/);
                obj[cookie[0]] = cookie[1];
            }
            return obj.promo
        }
    },
    methods: {
        promoFocus(evt) {
                this.promoFocused = true;
        },
        ////////////////////// PROMOCODES //////////////////////////
        // магия
        // var $product = $($(qel).closest('.t706__cartwin-content').find('.t706__cartwin-products .t706__product')[0]);
        // d['count'] = $product.find('.t706__product-title').text().split('-')[1].trim().split(' ')[0];
        // console.log(d['count']);
        // d['price'] = $product.find('.t706__product-amount').text().replace('р.', '').split(' ').join('');
        // console.log(d['price']);
        ////////////////////////////////////////////////////////////
        async getPromoDetails() {
            try {
                const { data } = await this.$axios.post('/check-promo-code', {
                    promocode: this.promoCode,
                    count: 4,
                    price: 1000,
                });
                if (data.error) {
                    alert(data.error);
                    return;
                }
                this.promocodeDiscount = data.discountpercent;
                this.promocodeBonus = data.profit_description;
                this.$emit('promocodeActivated', { details: data, discount: this.totalDiscount });
            } catch (e) {
                alert(e);
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.promocode {
    display: flex;
    gap: 10px;
    &__btn {
        background: #000;
        color: #fff;
        width: 50%;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        cursor: pointer;
    }
}

.descr__par {
    line-height: 1.5;
    margin: 0;
    font-size: 14px;

    &_big {
        font-weight: 600;
        font-size: 24px;
    }
}

.promo__descr {
    margin-bottom: 20px;

    .descr__par {
        font-weight: 600;
    }
}

.promo__descr__details {
    margin-top: 25px;

    .descr__par {
        text-align: right;
    }
}
</style>
