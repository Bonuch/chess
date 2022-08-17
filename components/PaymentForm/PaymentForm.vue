<template>
    <form class="form__payment">
        <div class="form__header">
            <h2 class="form__title">{{ $t('your_order') }}:</h2>
        </div>
        <OrderList class="mb-20px"
                   :products="products"
                   :total.sync="totalSum"
                   :currency="currency"
                   @emptyList="$emit('emptyList')"/>
        <FormInput
            class="mb-20px"
            :label="$t('paymentForm.order_fio')"
            required
            id="studentName"
            v-model="studentName"
            type="text"
            :placeholder="$i18n.locale !== 'ru' ? 'Your name and surname': 'Иванов Иван Иванович'"
        />
        <template v-if="addedFields.length">
            <FormInput v-for="(item, idx) in addedFields"
                       :key="item.name + idx"
                       :label="item.label ? item.label : null"
                       class="mb-20px"
                       :disabled="item.disabled"
                       v-model="item.model"
                       :type="item.type ? item.type : 'text'"
            />
        </template>
        <PhonePicker class="mb-20px" @input="updatePhoneNumber" @validated="handlePhoneValidate" validate :disable-label="false"
                     required/>
        <PromoCode
            v-if='totalSum >= 2600'
            :total="totalSum"
            :currency="currency"
            @promocodeActivated="calculatePromocode"/>

        <div class="error__block" v-if="error">
            <h2 class="error__message">{{ error }}</h2>
        </div>

        <div class="submit__container">
            <button class="checkout__btn" :disabled="totalSum <= 0 || !isPhoneValid" type="submit" @click="checkOut($event)">{{
                    $t('pay')
                }}
            </button>
            <button class="checkout__btn checkout__btn_dolyame" :disabled="totalSum <= 0 || !isPhoneValid" type="submit"
                    v-if="$i18n.locale !== 'en'" @click="checkOut($event,'dolyame')">Оплатить долями
            </button>
        </div>
    </form>
</template>

<script>
import Overlay from "../Overlay";
import OrderList from "./OrderList";
import PhonePicker from "../PhonePicker/PhonePicker";
import FormInput from "../FormInput";
import PromoCode from "./PromoCode";

export default {
    name: "PaymentForm",
    components: {PromoCode, FormInput, PhonePicker, OrderList, Overlay},
    props: {
        products: {
            type: Array,
            required: true,
        },
        currency: {
            type: String,
            default: '₽'
        },
        additionalFields: {
            type: Object,
            required: false
        },
        productType: {
            type: String,
            default: "lesson"
        },
    },
    data() {
        return {
            overlay: true,
            studentName: null,
            phoneNumber: null,
            totalSum: null,
            totalDiscount: null,    // Для промокода, если промокод зайдействован то в payload вставляем это
            promoCodeData: null,
            error: null,
            addedFields: [],
            isPhoneValid: false,
        }
    },
    computed: {
        total() {
            if (this.promoCodeData) {
                return this.totalSum - this.totalSum / 100 * this.promoCodeData.discountpercent
            }
            return this.totalSum
        },
        dolyameAvailable() {
            return this.totalSum <= 30000;
        }
    },
    methods: {
        handlePhoneValidate(valid) {
            this.isPhoneValid = valid
        },
        calculatePromocode(promoData) {
            this.totalDiscount = promoData.discount;
            this.promoCodeData = promoData.details;
        },
        // validatePhone(phone, mask) {
        //     this.isPhoneValid = phone.length === mask.length
        // },
        updatePhoneNumber(phone) {
            this.phoneNumber = phone
        },
        async checkOut(evt, type) {
            const debugAmount = this.$cookies.get('debug_amount'); // для тестирования оплаты можно добавить себе в кукисы параметр с указанием суммы, которой не жалко реально оплатить (5р)
            const payloadProduct = {
                amount: {
                    value: debugAmount && debugAmount > 0 ? debugAmount : this.total,
                    currency: 'RUB'
                },
                confirmation: {
                    type: 'redirect',
                    return_url: `${process.env.appHost}/${this.$i18n.locale}/checkout-complete`
                },
                capture: true,
                description: `Оплата от ${this.studentName} (${this.phoneNumber.phone}) за ${this.products[0].title}`
            };

            const payload = {
                json_payment_data: JSON.stringify(payloadProduct),
                clientName: this.studentName,
                clientPhone: this.phoneNumber.phone.replace('/^(\\+)|\\D/', ''),
                promoCode: this.promoCodeData ? this.promoCodeData.promocode : null,
                product: this.products[0].title,
                productType: this.productType,
                dolyami: (type === 'dolyame'), // TODO переделать на gatewayType
                API_SECRET_KEY: process.env.paymentHeader,
            };

            if (this.addedFields) {
                this.addedFields.forEach(item => {
                    payload[item.name] = item.model
                })
            }

            if (this.studentName && this.phoneNumber && this.products) {
                try {
                    evt.preventDefault()
                    const { data } = await this.$axios.post('/website/create-payment', payload);
                    if (data && data.status === 'success') {
                        this.$cookies.set('orderId', data.id);
                        window.document.location.href = data.confirmationUrl
                        return;
                    }
                    this.error = this.$i18n.t('payment_error')
                } catch (e) {
                    console.log(e)
                }
            } else {
                // TODO сообщение об ошибке
                alert('Необходимо заполнить все поля');
            }
        }
    },
    created() {
        if (this.additionalFields) {
            for (const key in this.additionalFields) {
                this.addedFields.push({
                    label: this.additionalFields[key].label,
                    name: key,
                    model: this.additionalFields[key].value
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.submit__container {
    margin-top: 30px;
}

.form__payment {
    margin: 65px auto;
    width: 100%;
    max-width: 560px;
    min-height: 300px;
    max-height: 860px;
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    padding: 40px;
    box-sizing: border-box;
    overflow: auto;

    @media screen and (max-width: 425px) {
        max-height: 90%;
        padding: 20px;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}

.form {
    &__title {
        font-family: 'Manrope', Arial, sans-serif;
        font-weight: 600;
        color: #1b3c66;
        margin: 0;
        font-size: 24px;
        line-height: 1.35;
    }

    &__header {
        padding: 0 0 30px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
}

.checkout__btn {
    color: #ffffff;
    display: block;
    width: 100%;
    height: 60px;
    border: 2px solid transparent;
    background-color: #3b81c2;
    border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    font-family: Manrope;
    font-weight: 400;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #f2dc51 !important;
        color: #000000 !important;
    }
}

.checkout__btn:disabled {
    opacity: .5;
    pointer-events: none;
}

.checkout__btn_dolyame {
    color: black;
    background: #fff;
    border: 2px solid #000;
    margin-top: 15px;

    &:hover {
        background: yellow;
    }
}

.error__block {
    background: #f95d51;
    padding: 20px;
    text-align: center;
    color: #fff;
    margin-top: 15px;

    .error__message {
        font-size: 18px;
        font-weight: 400;
    }
}
</style>
