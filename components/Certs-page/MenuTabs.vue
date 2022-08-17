<template>
  <div class="wrapper">
    <div class="cp-container" style="margin-top: 136px;">
      <h1 style="font-size: 28px; line-height: 40px; text-align: center">
        {{ $t('cert_prize_title') }}
      </h1>
      <tabsSec>
        <tabSec title="Русский">
          <div class="cards-wrap">
            <div
                v-for="(list, index) in cardsRu"
                :key="index"
                class="card"
            >
              <div class="image-wrap">
                <a class="clink" href="#" @click.prevent="handleCardClick(index, list.id)">
                  <img :src="list.url" alt="#">
                </a>
              </div>
              <div class="title">
                <a class="clink" href="#" @click.prevent="handleCardClick(index, list.id)">{{ list.title }}</a>
              </div>
            </div>
          </div>
        </tabSec>
        <tabSec title="English">
          <div class="cards-wrap">
            <div v-for="(list, index) in cardsEn" :key="index" class="card">
              <div class="image-wrap">
                <a class="clink" href="#" @click.prevent="handleCardClick(cardsRu.length + index, list.id)">
                  <img :src="list.url" alt="#">
                </a>
              </div>
              <div class="title">
                <a class="clink" href="#" @click.prevent="handleCardClick(cardsRu.length + index, list.id)">{{ list.title }}</a>
              </div>
            </div>
          </div>
        </tabSec>
      </tabsSec>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import tabSec from '~/components/Certs-page/Tab'
import TabsSec from '~/components/Certs-page/Tabs'

export default {
  components: {
    tabSec,
    TabsSec
  },
  data() {
    return {
      cards: [
        {lang: 'ru', title: 'С 8 Марта', url: '/img/certs-page/8_card.jpg', id: 1},
        {lang: 'ru', title: 'С 23 Февраля', url: '/img/certs-page/23_card.jpg', id: 2},
        {lang: 'ru', title: 'С Днем Рождения', url: '/img/certs-page/hb_ru_card.jpg', id: 3},
        {lang: 'ru', title: 'С Рождеством', url: '/img/certs-page/mc_ru_card.jpg', id: 4},
        {lang: 'ru', title: 'С Новым Годом', url: '/img/certs-page/ng_card.jpg', id: 5},
        {lang: 'ru', title: 'Поздравляем!', url: '/img/certs-page/uni_card.jpg', id: 6},
        {lang: 'en', title: 'Merry Christmas', url: '/img/certs-page/mc_eng_card.jpg', id: 7},
        {lang: 'en', title: 'Happy Birthday', url: '/img/certs-page/hb_eng_card.jpg', id: 8},
      ]
    }
  },
  computed: {
    cardsEn: function () {
      return this.cards.filter(cards => cards.lang === 'en');
    },
    cardsRu: function () {
      return this.cards.filter(cards => cards.lang === 'ru');
    },
  },
  methods: {
      ...mapMutations({
          setActiveCertSlide: "setActiveCertSlide",
      }),
      handleCardClick(idx, id) {
          this.setActiveCertSlide({ idx, id });
      },
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

.card {
  width: 350px;
  height: 398px;
  margin-bottom: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vw - 40px);
  }
}

.title {
  margin-top: 10px;
}

.clink {
  font-size: 24px;
  font-weight: 600;
  color: #1b3c66;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 10px;
    }
  }
}

.cards-wrap {
  max-width: 1111px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1189px) {
    justify-content: center;
  }
}
</style>

