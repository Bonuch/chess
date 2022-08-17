<template>
  <div class="start-trial-modal" id="modalIn" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
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
              <div class=" form__field input__wrapper-modal">
                <label for="name" class="input__wrapper-descr">{{ $t('order_step2') }}</label>
                <input class="input__wrapper-field" type="text" name="name" id="name"
                       v-model.trim="name"
                       :class="{'invalid': $v.name.$dirty && !$v.name.required}"
                       :placeholder="$t('order_name')"
                >
                <small
                  class="error-text invalid"
                  v-if="$v.name.$dirty && !$v.name.required"
                >
                  {{ $t('validationErrors.required') }}
                </small>
              </div>

              <div class=" form__field input__wrapper-modal">
                <label for="age" class="input__wrapper-descr"></label>
                <input class="input__wrapper-field" type="number" name="age" id="age" v-model.trim="age"
                       :class="{'invalid': $v.age.$dirty && !$v.age.required}"
                       :placeholder="$t('order_age')"
                >
                <small
                  class="error-text invalid"
                  v-if="$v.age.$dirty && !$v.age.required"
                >
                  {{ $t('validationErrors.required') }}
                </small>
              </div>
            </div>

            <div class="modal-body__radio">
              <p class="input__wrapper-descr">{{ $t('order_exp') }}</p>
              <label class="modal-body__radio-text radio-width">{{ $t('order_exp1') }}
                <input type="radio" name="experience" v-model="experience" value="0" class="modal-body__radio-item" required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp2') }}
                <input type="radio" name="experience" v-model="experience" value="1" class="modal-body__radio-item" required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp3') }}
                <input type="radio" name="experience" v-model="experience" value="2" class="modal-body__radio-item" required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp4') }}
                <input type="radio" name="experience" v-model="experience" value="3" class="modal-body__radio-item" required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp5') }}
                <input type="radio" name="experience" v-model="experience" value="4" class="modal-body__radio-item" required>
                <span class="checkmark"></span>
              </label>

              <small
                class="error-text invalid"
                v-if="$v.experience.$dirty && !$v.experience.required"
              >
                {{ $t('validationErrors.experience') }}
              </small>
            </div>

            <div class="step-2-modal__btn">
              <div class="Buyers-input__inner-button">
                <button class="modal-button__gifts" type="submit">{{ $t('order_nxt') }}</button>
              </div>
              <div class="Buyers-input__inner-button">
                <button
                  class="modal-button__gifts"
                  type="button"
                  @click.prevent="prevModal"
                >
                  {{ $t('order_prv') }}
                </button>
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
import {required} from 'vuelidate/lib/validators';
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: 'ModalIn',
  data() {
    return {
      isModalVisible: false,
      errors: [],
      name: '',
      age: '',
      status: null,
      titleModal: 'ModalIn',
      CloseIsModal: false,
      showModal: false,
      experience: null,
      pickedLanguage: this.$i18n.locale,
    }
  },
  validations: {
    age: {required},
    name: {required},
    experience: {required},
  },
    created() {
        if (this.savedData) {
            this.name = this.savedData.student_full_name;
            this.age = this.savedData.student_age;
            this.experience = this.savedData.experience;
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
          updateFormData: "changeModal/updateFormData"
      }),
      ...mapActions({
          openModal: "changeModal/openModal"
      }),
    changeLocale(e) {
      this.$router.push(this.switchLocalePath(this.pickedLanguage));
    },
      prevModal() {
          this.openModal("ModalMain");
      },
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const payload = {
        student_full_name: this.name,
        student_age: this.age,
        experience: this.experience
      };

        this.updateFormData(payload);
        this.openModal("ModalCalendar");
    }
  },
}
</script>
<style lang="scss" scoped></style>
