<template>
    <div>
        <label v-if="!disableLabel" class="phone__label" for="phoneInput">{{ $t('order_phone') }}</label>
        <div class="dropdown">
            <a href="#" class="flag__btn" @click.stop.prevent="showList">
                <span class="t-input-phonemask__select-flag" :data-phonemask-flag="currentCountry"></span>
                <span class="phone__mask">{{ pickedCountry.c }}</span>
            </a>
            <div class="text">
                <input
                    class="dropdown__text"
                    id="phoneInput"
                    type="text"
                    v-model="phoneNumber"
                    :placeholder="setPlaceholder(pickedCountry.m)"
                    @input="handleInput"
                    @focus="handleInputFocus"
                    @blur="handleInputBlur"
                    v-mask="currentMask"
                    :required="required"
                    autocomplete="off"
                >
            </div>
            <div
                v-show="listOpened"
                class="phone__list"
                v-click-outside="closeList"
            >
                <div
                    class="phone__item"
                    v-for="(flag, key) in countryList"
                    @click.prevent="setPickedCountry(flag, key)"
                >
                    <span class="country__name">{{ flag.n }}</span>
                    <div class="country__code">
                        <span class="code">{{ flag.c }}</span>
                        <span class="code__flag t-input-phonemask__select-flag" :data-phonemask-flag="key"></span>
                    </div>
                </div>
            </div>
        </div>
        <label v-if="showErrorMessage" class="error-message">{{ $t('errors.phoneValidation') }}</label>
    </div>
</template>

<script>
import getCountryList from './pickerHelper';
import './flags.css';
import PhoneDropDown from "../PhoneDropDown/PhoneDropDown";
import {mapGetters} from 'vuex';

export default {
    name: "PhonePicker",
    props: {
        value: {
            type: Object
        },
        required: {
            type: Boolean
        },
        disableLabel: {
            type: Boolean,
            default: true
        },
        validate: {
            type: Boolean,
        },
    },
    components: {PhoneDropDown},
    data() {
        return {
            countryList: getCountryList(),
            defaultCountryCode: 'ru',
            listOpened: false,
            phoneNumber: null,
            countryCode: null,
            picked: null,
            inputIsFocused: false,
        }
    },
    computed: {
        ...mapGetters({
            clientLocation: 'getClientLocation',
        }),
        currentCountry() {
            return this.countryCode ? this.countryCode : this.defaultCountryCode;
        },
        pickedCountry: {
            get() {
                const curlang = this.clientLocation.iso.toLowerCase()
                return this.picked ?? getCountryList()[curlang]
            },
            set(newVal) {
                this.picked = newVal
            }
        },
        currentPhone() {
            return this.phoneNumber ? {
                phone: (this.pickedCountry.c + this.phoneNumber),
                country: this.currentCountry ?? this.defaultCountryCode
            } : null
        },
        currentMask() {
            const phoneMask = this.pickedCountry.m;
            return this.setPlaceholder(phoneMask).replace(/\d/gm, "#");
        },
        isValidData() {
            if (!this.validate) return true;
            const res = this.phoneNumber ? this.phoneNumber.length === this.currentMask.length : false;
            this.$emit('validated', res);
            return res;
        },
        showErrorMessage() {
            return !this.isValidData && this.phoneNumber && !this.inputIsFocused;
        },
    },
    methods: {
        handleInput() {
            if (this.isValidData) {
                this.$emit('input', this.currentPhone)
            } else {
                this.$emit('input', null)
            }
        },
        handleInputFocus() {
            this.inputIsFocused = true;
        },
        handleInputBlur() {
            this.inputIsFocused = false;
            this.$emit('phoneUpdate', this.currentPhone);
        },
        showList() {
            this.listOpened = true;
        },
        closeList() {
            if (this.listOpened) this.listOpened = false;
        },
        setPlaceholder(phoneMask) {
            return phoneMask.replace(this.pickedCountry.c, "").replace(/^[\-\+]/gm, "").trim();
        },
        setMask(phoneMask) {
            return this.setPlaceholder(phoneMask).replace(/\d/gm, "#");
        },
        setPickedCountry(country, code) {
            this.pickedCountry = country
            this.countryCode = code
            this.phoneNumber = null
            this.closeList()
        },
        parseCountryFromNumber(phone) {
            const country = phone.country
            this.countryCode = country
            this.pickedCountry = this.countryList[country]
            this.phoneNumber = phone.phone.replace(this.pickedCountry.c)
        }
    },
    mounted() {
        if (this.value) {
            this.parseCountryFromNumber(this.value)
        } else {
            this.defaultCountryCode = this.clientLocation.iso.toLowerCase()
        }
    }
}
</script>

<style lang="scss" scoped>
.error-message {
    color: #c03f31;
    margin-top: 5px;
    font-size: 14px;
}

.phone__label {
    display: block;
    padding-bottom: 5px;
}

.flag__btn {
    display: flex;
    align-items: center;
    color: #000;

    .phone__mask {
        padding-left: 25px;
        margin-right: 5px;
        white-space: nowrap;
    }

    position: relative;

    &::before {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        content: "";
        border-radius: 5px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #9a9a9a;
        //border-left: solid #fff;
        //border-top: transparent;
        left: 23px;
    }
}

.dropdown {
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

.phone__list {
    position: absolute;
    top: 65px;
    left: 0;
    border: 1px solid #eee;
    width: 100%;
    padding: 5px 0;
    overflow-y: auto;
    height: 200px;
    border-radius: 8px;
    z-index: 100;
    background: #fff;
}

.dropdown__text {
    width: 100%;
    height: 100%;
    border: none;

    &:focus {
        outline: none;
    }
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

.code__flag {
    margin-left: 8px;
}
</style>
