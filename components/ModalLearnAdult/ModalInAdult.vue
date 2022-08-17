<template>
  <div class="start-trial-modal" id="modalIn" role="dialog" aria-labelledby="modalTitle"
       aria-describedby="modalDescription">
    <section class="modal-body" id="modalDescription">
      <slot name="body">
        <div class="Buyers-input__inner-block modal-input">
          <form
            @submit.prevent="submitHandler"
            class="Buyers-input__inner-block modal-input__wrapper"
          >
            <div class="modal-body__radio">
              <p class="input__wrapper-descr">{{ $t('order_step2_adult') }}</p>

              <label class="modal-body__radio-text radio-width">{{ $t('order_exp1_adult') }}
                <input type="radio" name="experience" v-model="experience" value="0" class="modal-body__radio-item"
                       required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp2_adult') }}
                <input type="radio" name="experience" v-model="experience" value="1" class="modal-body__radio-item"
                       required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp3_adult') }}
                <input type="radio" name="experience" v-model="experience" value="2" class="modal-body__radio-item"
                       required>
                <span class="checkmark"></span>
              </label>
              <label class="modal-body__radio-text radio-width"> {{ $t('order_exp4_adult') }}
                <input type="radio" name="experience" v-model="experience" value="3" class="modal-body__radio-item"
                       required>
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
                <button type="submit" class="modal-button__gifts">{{ $t('order_nxt') }}</button>
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
  import {required} from 'vuelidate/lib/validators'
  import {mapGetters, mapMutations, mapActions} from "vuex";

  export default {
    name: 'ModalInAdult',
    data() {
      return {
        experience: null,
        pickedLanguage: this.$i18n.locale,
      }
    },
    created() {
      if (this.savedData) {
        this.experience = this.savedData.experience;
      }
    },
    validations: {
      experience: {required},
    },
    computed: {
      availableLocales() {
        return this.$i18n.locales;
      },
      ...mapGetters({
        savedData: 'changeModalAdult/getFormData',
      })
    },
    methods: {
      ...mapMutations({
        updateFormData: "changeModalAdult/updateFormData"
      }),
      ...mapActions({
        openModal: "changeModalAdult/openModal"
      }),
      changeLocale() {
        this.$router.push(this.switchLocalePath(this.pickedLanguage));
      },
      prevModal() {
        this.openModal("ModalMainAdult");
      },
      submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        const payload = {
          experience: this.experience
        };

        this.updateFormData(payload);
        this.openModal("ModalCalendarAdult");
      }
    },
  }
</script>
<style lang="scss" scoped></style>
