<template>
  <section class="certs-slider">
    <VueSlickCarousel ref="certs-slick-slider" v-bind="settings">
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">
          <div class="certs-arrow certs-arrow__prev"></div>
        </div>
      </template>
      <template #nextArrow="arrowOption">
        <div class="custom-arrow">
          <div class="certs-arrow certs-arrow__next"></div>
        </div>
      </template>
      <div class="detail-wrap" v-for="(list, index) in cards" :key="index">
        <div class="image-wrap" :style="{'background-color': ' ' + list.color + ' '}">
          <img :src="list.url" alt="#" draggable="false">
        </div>
        <div class="content-wrap">
          <div>
            <div :id="list.id">
              <div class="sub-header">{{ $t('cert_form_title') }}</div>
              <div class="main-header">{{ list.title }}</div>
            </div>
            <div class="body"></div>
            <div class="controls">
              <div class="select-wrap">
                <div class="select">
                  <label for="lessons" class="form-label">{{ $t('cert_amount') }}</label>
                  <select id="lessons" class="form-input form-input--sm" v-model="lessons">
                    <option value="4">4 {{ $t('price_les_f1') }}</option>
                    <option value="8">8 {{ $t('price_les_f2') }}</option>
                    <option value="16">16 {{ $t('price_les_f2') }}</option>
                    <option value="32">32 {{ $t('price_les_f1') }}</option>
                    <option value="64">64 {{ $t('price_les_f1') }}</option>
                  </select>
                </div>
                <div class="select">
                  <label for="lessons-time" class="form-label">{{ $t('cert_time') }}</label>
                  <select id="lessons-time" class="form-input form-input--sm" v-model="lessonsTime">
                    <option value="25 минут">25 {{ $t('price_les_min') }}</option>
                    <option value="45 минут">45 {{ $t('price_les_min') }}</option>
                    <option value="60 минут">60 {{ $t('price_les_min') }}</option>
                    <option value="75 минут">75 {{ $t('price_les_min') }}</option>
                  </select>
                </div>
              </div>

              <form class="cert-form" @submit.prevent="handleFormSubmit(list)">
                <div class="cert-form-wrap" style="margin-top: 20px;">
                  <label for="cert-form-email" class="form-label">{{ $t('cert_form_email') }}</label>
                  <input
                    id="cert-form-email"
                    type="email"
                    class="form-input form-input--sm"
                    :placeholder="$t('mail')"
                    v-model="emailFrom"
                    autocomplete="off"
                    required
                  >
                </div>

                <div class="cert-form-wrap" style="margin-top: 10px;">
                  <label for="cert-form-recip" class="form-label">{{ $t('cert_form_recip') }}</label>
                  <input
                    id="cert-form-recip"
                    :placeholder="$t('cert_form_recip')"
                    type="text"
                    class="form-input form-input--sm"
                    v-model="emailRecip"
                    autocomplete="off"
                    required
                  >
                </div>

                <div class="cert-form-wrap" style="margin-top: 10px;">
                  <label for="cert-form-sender" class="form-label">{{ $t('cert_form_sender') }}</label>
                  <input
                    id="cert-form-sender"
                    :placeholder="$t('cert_form_sender')"
                    type="text"
                    class="form-input form-input--sm"
                    v-model="senderName"
                    autocomplete="off"
                    required
                  >
                </div>

                <div class="btn-wrap">
                  <button
                      type="submit"
                      class="btn-order"
                      :class="{ 'btn-order--disabled': submitBtnIsDisabled(list) }"
                      :disabled="submitBtnIsDisabled(list)"
                  >
                      <span>{{ $t('cert_form_checkout') }}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "CertsSlider",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      emailFrom: null,
      emailRecip: null,
      senderName: null,
      lessons: 4,
      lessonsTime: "25 минут",
      cards: [
        {id: 1, lang: 'ru', 'code': '8M', title: 'С 8 Марта', url: '/img/certs-page/8_cf_4_25.png', color: '#FEDAE7'},
        {id: 2, lang: 'ru', 'code': 'TT', title: 'С 23 Февраля', url: '/img/certs-page/23_cf_4_25.png', color: '#B7FCC6'},
        {id: 3, lang: 'ru', 'code': 'HB', title: 'С Днем Рождения', url: '/img/certs-page/hb_ru_cf_4_25.png', color: '#FFEEB1'},
        {id: 4, lang: 'ru', 'code': 'MC', title: 'С Рождеством', url: '/img/certs-page/mc_ru_cf_4_25.png', color: '#FFB8B8'},
        {id: 5, lang: 'ru', 'code': 'NY', title: 'С Новым Годом', url: '/img/certs-page/ng_cf_4_25.png', color: '#FFEEB1'},
        {id: 6, lang: 'ru', 'code': 'UN', title: 'Поздравляем!', url: '/img/certs-page/un_cf_4_25.png', color: '#a3d7ff'},
        {id: 7, lang: 'en', 'code': 'MCEn', title: 'Merry Christmas', url: '/img/certs-page/mc_eng_cf_4_25.png', color: '#FEDAE7'},
        {id: 8, lang: 'en', 'code': 'HBEn', title: 'Happy Birthday', url: '/img/certs-page/hb_eng_cf_4_25.png', color: '#FFEEB1'},
      ],
      "settings": {
        "infinite": false,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 0,
        'arrows': true,
        'dots': false,
        "responsive": [
          {
            "breakpoint": 1350,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              'arrows': true,
            }
          },
          {
            "breakpoint": 850,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              'arrows': true,
              'centerMode': false,
            }
          },
        ]
      },
      pricesRu: [],
      pricesEn: [],
    }
  },
    computed: {
      ...mapGetters({
          getActiveCertSlide: "getActiveCertSlide",
      })
    },
  methods: {
    handleFormSubmit(card) {
      const title = `Сертификат "${card.title}", ${this.lessonsTime} - ${this.lessons} занятий`;
      const priceOptions = this.getPriceOptions(card.lang);
      const price = `${priceOptions.unitPrice * this.lessons}`;

      const options = {
        id: priceOptions.id,
        title,
        unitPrice: price,
        count: 1,
        code: card.code,
        additionalFields: {
          sender_mail: {
            label: 'Отправитель',
            value: this.emailFrom,
          },
          recipient_mail: {
            label: 'Кому',
            value: this.emailRecip,
          },
          sender_name: {
            label: 'От кого',
            value: this.senderName,
          },
        }
      }

      this.$emit('on-buy-product', options);
    },
    async fetchPrices() {
      const lang = this.$i18n.locale; // get site lang

      try {
        const [pricesRu, pricesEn] = await Promise.all([
          this.$axios.$post('/content/price-list', { lang_key: lang }),
          this.$axios.$post('/content/price-list', { language: 'english', lang_key: lang }),
        ]);

        this.pricesRu = pricesRu.priceList; // прайс за уроки на русском языке
        this.pricesEn = pricesEn.priceList; // прайс за уроки на английском языке
      } catch (ex) {
        console.log('cant fetch prices for certs form: ' + ex);
      }
    },
    getPriceOptions(lang) {
        let res = {
          unitPrice: 0,
          id: 0,
        };

        const priceList = lang.toLowerCase() === 'ru' ? this.pricesRu : this.pricesEn; // get price list by lesson lang

        if (priceList && Object.keys(priceList).length > 0) {
          const prices = priceList[this.lessonsTime]; // цены по минутам

          // цена по занятиям
          for (const [key, val] of Object.entries(prices)) {
            if (Number(val.items_number) === Number(this.lessons)) {
              res.unitPrice = val.item_price;
              res.id = val.id;
            }
          }
        }

        return res;
    },
      submitBtnIsDisabled(card) {
          let res = false;
          const priceOptions = this.getPriceOptions(card.lang);

          if (priceOptions && priceOptions.unitPrice) {
              res = Number(priceOptions.unitPrice) === 0;
          }

          return res;
      },
  },
    async created() {
        await this.fetchPrices();
    },
    watch: {
        getActiveCertSlide(val) {
            if (val && Object.keys(val).length > 0) {
                const slide = this.$refs['certs-slick-slider'];

                if (slide) {
                    let el = slide.$el;
                    let y = el.getBoundingClientRect().top + window.pageYOffset - 150;
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                    slide.goTo(val.idx);
                }
            }
        }
    },
}
</script>

<style scoped lang="scss">
.certs-slider {
    position: relative;
  max-width: 1280px;
  min-height: 500px;
  margin: 0 auto 100px;
  padding-left: 20px;
  padding-right: 20px;
}

.certs-arrow {
  border: solid #007aff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
  transform: rotate(135deg);
  cursor: pointer;
  @media (max-width: 1010px) {
    display: none;
  }

  &__prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
  }

  &__next {
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(315deg);
  }
}

.detail-wrap {
  display: flex !important;
  @media (max-width: 1010px) {
    flex-direction: column;
    gap: 60px 0;
    align-items: center;
  }
}

.image-wrap {
  max-width: 42%;
}

.content-wrap {
  display: flex;
  align-items: center;
  padding: 0 80px;
  text-align: left;
  @media (max-width: 1199px) {
    padding: 0 0 0 3%;
  }
}

.content-wrap .body {
  margin-bottom: 32px;
  min-height: 20px;
}

.image-wrap {
  background: radial-gradient(86.78% 86.78% at 38.39% -19.29%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  /* background-color: #67D07F; */
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-left: 75px;
  max-height: 530px;
  min-width: 520px;
  @media (max-width: 1010px) {
    height: 335px;
    min-width: 350px;
    margin-left: 0;
  }

  & img {
    transform: rotate(-10deg);
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.sub-header {
  color: #2EC5CE;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
}

.main-header {
  font-weight: 800;
  margin-bottom: 32px;
  font-size: 40px;
  line-height: 54px;
}

.select-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 20px;
  margin-bottom: 12px;

  .select {
    max-width: 200px;
  }
}

.cert-form {
  &-wrap {
    margin-bottom: 7px;
  }
}

.btn-wrap {
  margin-top: 16px;
}

.btn-order {
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 206px;
  height: 50px;
  margin: 0 auto;
  background: linear-gradient(266.25deg, #00B7FF 1.36%, #8D53E9 98.57%);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 48px;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(266.25deg, #8D53E9 1.36%, #00B7FF 98.57%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s linear;
  }

  &:hover,
  &:focus,
  &:active {
    &:before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 2;
    text-align: center;
  }

    &--disabled {
        opacity: 0.3;
        pointer-events: none;
        tab-index: -1;
    }
}

@media all and (max-width: 992px) {
  .content-wrap {
    padding: 0;
  }
}

@media all and (max-width: 390px) {
  .select-wrap {
    .select {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
