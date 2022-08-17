<template>
  <div class="start-trial-modal" id="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
    <section class="modal-body" id="modalDescription">
      <slot name="body">
        <div class="Buyers-input__inner-block modal-input">
          <form
            id="validation"
            @submit.prevent="submitHandler"
            method="post"
            class="Buyers-input__inner-block modal-input__wrapper"
          >
            <div class="modal-input__block">
              <div class="form__field input__wrapper-modal">
                <label for="name" class="input__wrapper-descr">{{ $t('order_step1') }}</label>
                <input
                  class="input__wrapper-field" type="text" name="name" id="name"
                  v-model.trim="name"
                  :class="{'invalid': $v.name.$dirty && !$v.name.required}"
                  :placeholder="$t('order_name')"
                >
                <small class="error-text invalid" v-if="$v.name.$dirty && !$v.name.required">
                  {{ $t('validationErrors.required') }}
                </small>
              </div>

              <div class="form__field form__phone">
                <label class="input__wrapper-descr">{{ $t('order_phone') }}</label>
                <PhonePicker
                  class="input__wrapper-modal modal__phone_dropdown"
                  :validate="true"
                  :class="{'invalid': $v.phone.$dirty && !$v.phone.required}"
                  @phoneUpdate="updatePhoneNumber"
                  v-model="phone"
                />
                <small
                  class="error-text invalid"
                  v-if="$v.phone.$dirty && !$v.phone.required"
                >
                  {{ $t('validationErrors.required') }}
                </small>
              </div>

              <div class="form__field input__wrapper-modal">
                <input
                  class="input__wrapper-field" type="email" name="mail" id="mail"
                  v-model="email"
                  :class="{'invalid': $v.email.$dirty && (!$v.email.email || !$v.email.required)}"
                  :placeholder="$t('mail')"
                >
                <small
                  class="error-text invalid"
                  v-if="$v.email.$dirty && (!$v.email.email || !$v.email.required)"
                >
                  {{ $t('validationErrors.email') }}
                </small>
              </div>
            </div>
            <div class="modal-body__radio">
              <p class="input__wrapper-descr">{{ $t('order_msg_type') }}</p>
              <label class="modal-body__radio-text radio-width">WhatsApp
                <input type="checkbox" name="ws" value="whatsapp" v-model="notifyTypes" class="modal-body__radio-item">
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> Telegram
                <input type="checkbox" name="tg" value="telegram" v-model="notifyTypes" class="modal-body__radio-item">
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> Email
                <input type="checkbox" name="email" value="email" v-model="notifyTypes" class="modal-body__radio-item">
                <span class="checkmark"></span>
              </label>
              <small
                class="error-text invalid"
                v-if="$v.notifyTypes.$dirty && !$v.notifyTypes.required"
              >
                {{ $t('validationErrors.notify_type') }}
              </small>
            </div>
            <div class="modal-body__content-down">
              <div class="Buyers-input__inner-button">
                <button type="submit" class="modal-button__gifts">{{ $t('order_nxt') }}</button>
              </div>
            </div>
          </form>

          <a href="/policy" class="modal-body__content-policy" target="_blank">{{ $t('order_policy') }}</a>
        </div>
      </slot>
    </section>
  </div>
</template>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators';
import PhonePicker from "@/components/PhonePicker/PhonePicker";
import {mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  name: 'ModalMain',
  components: {
    PhonePicker,
  },
  data() {
    return {
      isModalVisible: false,
      notifyTypes: [],
      name: '',
      phone: '',
      email: '',
      ws: '',
      tg: '',
      emailRadio: '',
      status: null,
      titleModal: 'ModalMain',
      showModal: false,
      pickedLanguage: this.$i18n.locale,
    }
  },
  created() {
    if (this.savedData) {
      this.phone = this.savedData.parent_phone;
      this.name = this.savedData.parent_name;
      this.email = this.savedData.parent_email;

      if (this.savedData.notifications_way) {
        this.notifyTypes = this.savedData.notifications_way.split(',');
      }
    }
  },
  validations: {
    name: {required},
    phone: {required},
    email: {required, email},
    notifyTypes: {
      required,
      minLength: minLength(1),
    }
  },
    computed: {
        ...mapGetters({
            savedData: 'changeModal/getFormData',
        }),
        availableLocales() {
            return this.$i18n.locales;
        },
    },
  methods: {
      ...mapMutations({
          updateFormData: 'changeModal/updateFormData'
      }),
      ...mapActions({
          openModal: 'changeModal/openModal',
      }),
    updatePhoneNumber(phone) {
      this.phone = phone
    },
    changeLocale() {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    },
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const payload = {
        parent_name: this.name,
        parent_phone: this.phone,
        parent_email: this.email,
        notifications_way: this.notifyTypes.join(','),
      };

        this.updateFormData(payload);
        this.openModal("ModalIn");
    }
  },
}
</script>
<style lang="scss" scoped></style>
