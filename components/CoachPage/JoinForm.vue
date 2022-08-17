<template>
    <section class="connect">
        <div id="coach" style="position:relative;"></div>
        <div class="container">
            <div class="connect__content">
                <h2 class="connect__content-title">{{ $t('how_join') }}</h2>
                <p class="connect__content-text">{{ $t('coach_join_inst') }}</p>
                <div class="connect__content-wrapper">
                    <form
                        class="connect__content-form"
                        action=""
                        @submit.prevent="submitHandler">

                        <input type="text" autocomplete="off" v-model="name" :placeholder="`${$t('fio')} *`" class="connect__content-wrapper__input" required>
                        <PhonePicker @phoneUpdate="updatePhoneNumber" required/>
                        <input autocomplete="off" type="email" v-model="email" :placeholder="`${$t('mail')} *`" class="connect__content-wrapper__input" required>

                        <button type="submit" class="connect__content-wrapper__btn">{{ $t('send_form') }}</button>

                        <Overlay v-if="isModalVisible" @closeOverlay="closeModal">
                            <template v-slot:container>
                                <ModalCoach
                                    v-show="isModalVisible"
                                    @close="closeModal"/>
                            </template>
                        </Overlay>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {required} from "vuelidate/lib/validators";
import ModalCoach from "@/components/CoachPage/ModalCoach";
import getCountryList from "~/components/PhonePicker/pickerHelper";
import '~/components/PhonePicker/flags.css';
import PhonePicker from "../PhonePicker/PhonePicker";
import Overlay from "../Overlay";

export default {
    name: 'JoinForm',
    components: { PhonePicker, ModalCoach, Overlay },
    model: {
        prop: 'phone',
        event: 'update',
    },
    props: {
        defaultCountryCode: {
            type: String,
            default: 'ru'
        },
        required: {
            type: Boolean
        }
    },
    data() {
        return {
            name: '',
            email: '',
            phoneInput: '',
            isAnim: false,
            isModalVisible: false,
            countryList: getCountryList(),
            pickedCountry: getCountryList()[this.defaultCountryCode],
            listOpened: false,
            countryCode: null,
        }
    },
    validations: {
        phoneInput: { required },
        name: { required },
        email: { required },
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                this.isAnim = true;
                setTimeout(() => {
                    this.$v.$reset();
                    this.isAnim = false;
                }, 13000);
            } else {
                console.log(this.name, this.phoneInput.phone, this.email);
                try {
                    const { data } = await this.$axios.post('/website/send-email', {
                        subject: 'Заявка от преподавателя',
                        message: `<p>Имя: ${this.name}</p><br><p>Телефон: ${this.phoneInput.phone}</p><br><p>Email: ${this.email}</p>`,
                        API_SECRET_KEY: process.env.paymentHeader
                    });
                    if (data.status && data.status === 'success') {
                        this.isModalVisible = true;
                        this.error = false;
                        this.name = null;
                        this.phoneInput.phone = null;
                        this.email = null;
                        this.$v.$reset();
                    } else {
                        console.log(data);
                        alert(data.message);
                    }
                } catch (ex) {
                    console.log(ex);
                }
            }
        },
        updatePhoneNumber(value) {
            this.phoneInput = value;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        closeList() {
            if (this.listOpened) {
                this.listOpened = false;
            }
        },
        setPlaceholder(phoneMask) {
            return phoneMask.replace(this.pickedCountry.c, "").replace(/^[\-\+]/gm, "").trim();
        },
        setMask(phoneMask) {
            const out = this.setPlaceholder(phoneMask).replace(/\d/gm, "#");
            console.log('out', out, 'origin', this.setPlaceholder(phoneMask))
            return out;
        },
        setPickedCountry(country, code) {
            this.pickedCountry = country
            this.countryCode = code
            this.closeList()
        }
    }
}
</script>

<style lang="scss" scoped>
.phone__label {
    display: block;
    padding-bottom: 5px;
}

.flag__btn {
    display: flex;
    align-items: center;
    color: #000;

    .phone__mask {
        padding-left: 28px;
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

::v-deep {
    .dropdown {
        display: flex;
        align-items: center;
        position: relative;
        color: #000000;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 0 20px;
        line-height: 1.33;
        max-width: 280px;
        margin: 0;
        height: 100%;
        border: none;
        font-size: 20px;

        @media (max-width: 1150px) {
            max-width: none;
            height: 64px;
        }
    }

    .dropdown .connect__content-wrapper__input {
        padding: 0;
        max-width: 172px;
        @media (min-width: 1150px) {
            max-width: 150px;
        }
    }

    .country__code {
        text-align: right;
    }

    .phone__list {
        margin-top: 3px;
        width: 400px;
    }
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

.connect {
    padding: 50px 16px 150px;
    background-color: #ffffff;

    &__content {
        &-title {
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            margin: 0;
            text-align: center;
            @media (max-width: 767px) {
                font-size: 38px;
            }
            @media (max-width: 390px) {
                font-size: 32px;
            }
        }

        &-text {
            font-size: 18px;
            line-height: 1.55;
            font-weight: 700;
            text-align: center;
        }

        &-form {
            width: 100%;
            display: flex;
            gap: 10px;

            @media (max-width: 1150px) {
                flex-direction: column;
            }
        }

        &-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 100px;
            padding: 25px 20px;
            border-radius: 12px;
            background-color: #498bdf;
            @media (max-width: 1150px) {
                max-width: 500px;
                margin: 60px auto 0;
            }
            @media (max-width: 600px) {
                margin: 0 auto;
            }

            &__input {
                color: #000000;
                border: 1px solid #ffffff;
                background-color: #fff;
                border-radius: 12px;
                font-size: 20px;
                font-weight: 500;
                height: 64px;
                margin: 0;
                padding: 0 20px;
                max-width: 260px;
                outline: none;
                transition: .3s;
                &:focus::-webkit-input-placeholder {
                    color: #ffffff;
                    transition: .3s;
                }

                @media (max-width: 1150px) {
                    max-width: none;
                }

                @media all and (max-width: 640px) {
                    font-size: 16px;
                }
            }

            &::v-deep .dropdown__text {
                @media all and (max-width: 640px) {
                    font-size: 16px;
                }
            }

            &__btn {
                color: #000000;
                background-color: #f2dc51;
                border-radius: 12px;
                font-weight: 600;
                font-size: 20px;
                width: 230px;
                height: 64px;
                padding: 0 15px;
                display: block;
                border: none;
                cursor: pointer;

                @media (max-width: 1150px) {
                    width: 100%;
                }
            }
        }
    }
}

.error-popup {
    box-shadow: 0 0 3px 1px rgb(0 0 0 / 20%);
    border-radius: 3px;
    text-align: left;
    background: #F95D51;
    max-width: 400px;
    min-width: 260px;
    padding: 20px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 100;

    &__text {
        font-size: 15px;
        line-height: 1.55;
        margin: 0;
        color: #ffffff;
        opacity: 0.3;
    }
}

.error-popup__btn {
    border: none;
    padding: 0;
    cursor: pointer;
    background: #F95D51;
}

.error-popup__btn:before, .error-popup__btn:after {
    position: absolute;
    right: 12px;
    top: 5px;
    content: " ";
    height: 17px;
    width: 1px;
    background-color: #ffffff;
}

.error-popup__btn:before {
    transform: rotate(45deg);
}

.error-popup__btn:after {
    transform: rotate(-45deg);
}

.error-anim {
    animation: errorAnim 0.5s forwards linear;
}

.invalid.border-red {
    border: 1px solid #f95d51 !important;
}

@keyframes errorAnim {
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
}
</style>
