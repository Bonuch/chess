<template>
    <div
        class='start-trial-modal modal-calendar'
        id='modalCalendar'
        role='dialog'
        aria-labelledby='modalCalendar'
        aria-describedby='modalDescription'
        :class="{'start-trial-modal--disabled': loading}"
    >
        <Preloader v-show='loading' class='start-trial-modal-preloader' />

        <header class='modal-header modal-header__calendar' id='modalTitle'>
            <slot name='header'>
                {{ $t('order_calend') }}
            </slot>
        </header>
        <section class='modal-body' id='modalDescription'>
            <slot name='body'>
                <div class='Buyers-input__inner-block modal-input'>
                    <form
                        id='validation'
                        @submit.prevent='submitHandler'
                        method='post'
                        class='Buyers-input__inner-block modal-input__wrapper'
                    >
                        <div class='modal-calendar__wrapper'>
                            <client-only>
                                <div class='modal-calendar-wrap'>
                                    <v-date-picker
                                        class='modal-calendar-calendar custom-v-calendar'
                                        locale='ru'
                                        :min-date='new Date()'
                                        v-model='pickedDate'
                                    >
                                    </v-date-picker>

                                    <small
                                        class='error-text invalid'
                                        v-if='$v.pickedDate.$dirty && !$v.pickedDate.required'
                                    >
                                        {{ $t('validationErrors.required') }}
                                    </small>
                                </div>

                                <div class='modal-calendar-time'>
                                    <select
                                        id='pickedTime'
                                        class='modal-calendar-time-select'
                                        v-model='pickedTime'
                                        required
                                    >
                                        <option
                                            v-for='(item, idx) in timeRange'
                                            :key='idx'
                                            :value='item'
                                        >
                                            {{ item }}
                                        </option>
                                    </select>

                                    <small
                                        class='error-text invalid'
                                        v-if='$v.pickedTime.$dirty && !$v.pickedTime.required'
                                    >
                                        {{ $t('validationErrors.required') }}
                                    </small>

                                    <label for='pickedTime' class='modal-calendar-label'>{{ $t('order_time') }}</label>
                                </div>
                            </client-only>
                        </div>

                        <p class='necessarily__descr'>{{ $t('order_ast') }}</p>

                        <div class='step-2-modal__btn'>
                            <div class='Buyers-input__inner-button'>
                                <button type='submit' class='modal-button__gifts' :disabled='loading'>
                                    {{ $t('order_send') }}
                                </button>
                            </div>

                            <div class='Buyers-input__inner-button'>
                                <button type='button' class='modal-button__gifts' @click='prevModal'>{{ $t('order_prv')
                                    }}
                                </button>
                            </div>
                        </div>

                        <small class='start-trial-modal-errors error-text invalid' v-if='hasFormErrors'>
                            {{ $t('errors.something_wrong') }}
                        </small>
                    </form>

                    <a href='/policy' class='modal-body__content-policy' target='_blank'>{{ $t('order_policy') }}</a>
                </div>
            </slot>
        </section>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'ModalCalendar',
    components: {
        Preloader: () => import('../Preloader/Preloader'),
    },
    data() {
        return {
            hasFormErrors: null,
            loading: false,
            pickedDate: new Date(),
            pickedTime: null,
            timeRange: [],
            isModalVisible: false,
            status: null,
            titleModal: 'ModalCalendar',
            CloseIsModal: false,
            showModal: false,
            pickedLanguage: this.$i18n.locale,
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD',
            },
            attrs: [
                {
                    highlight: {
                        color: 'red',
                        fillMode: 'solid',
                    },
                },
            ],
        };
    },
    validations: {
        pickedDate: { required },
        pickedTime: { required },
    },
    created() {
        this.fillTimeRange();

        if (this.savedData) {
            this.pickedDate = this.savedData.lesson_date;
            this.pickedTime = this.savedData.lesson_time;
        }
    },
    computed: {
        ...mapGetters({
            savedData: 'changeModal/getFormData',
            getPreparedFormData: 'changeModal/getPreparedFormData',
        }),
        availableLocales() {
            return this.$i18n.locales;
        },
    },
    methods: {
        ...mapMutations({
            updateFormData: 'changeModal/updateFormData',
        }),
        ...mapActions({
            openModal: 'changeModal/openModal',
        }),
        changeLocale() {
            this.$router.push(this.switchLocalePath(this.pickedLanguage));
        },
        prevModal() {
            this.openModal('ModalIn');
            this.isModalVisible = true;
        },
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }

            this.loading = true;

            let timezone = new Date().toString().substring(new Date().toString().indexOf('GMT')).split(' ')[0].replace('GMT', 'UTC').substring(0, 6);

            const payload = {
                lesson_date: this.$dayjs(this.pickedDate).format('YYYY-MM-DD'),
                lesson_time: this.pickedTime,
                utm: this.$helpers.getUtmMarks(),
                timezone,
                'API_SECRET_KEY': process.env.API_SECRET_KEY,
            };

        this.updateFormData(payload);

        try {
            const { data } = await this.$axios.post("/website/create-new-lead", this.getPreparedFormData);
            this.loading = false;
            if (window.fbq)  fbq('track', 'Lead');
            this.hasFormErrors = data.status && data.status === "error";
            this.openModal("ModalThanks");
        } catch (ex) {
            this.loading = false;
            this.hasFormErrors = true;
            console.log('cant send learn form data: ' + ex);
        }
    },
    fillTimeRange() {
      const startTime = 17;
      const endTime = 23.30;
      let current = endTime - startTime;
      let cnt = 0;

            while (true) {
                if (current > endTime) break;

                if (cnt % 2 === 0) {
                    this.timeRange.push(`${Math.floor(current)}:00`);
                } else {
                    this.timeRange.push(`${Math.floor(current)}:30`);
                }
                cnt++;
                current += 0.5;
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.modal-calendar {
    &__wrapper {
        display: flex;
        gap: 0 30px;
        margin-bottom: 24px;
    }

    &-label {
        display: block;
        margin-top: 7px;
        color: #1b3c66;
        font-size: 14px;
    }

    &-wrap {
        margin-bottom: 12px;
    }

    &-time {
        width: 250px;
    }

    &-time-select {
      width: 100%;
      padding: 8px 8px;
      font-size: 14px;
      color: #4a4a4a;
      border: 1px solid #cbd5e0;
      border-radius: 7px;
    }
}

.necessarily__descr {
    font-size: 14px;
}

@media all and (max-width: 640px) {
    .modal-calendar__wrapper {
        flex-wrap: wrap;
    }
}
</style>
