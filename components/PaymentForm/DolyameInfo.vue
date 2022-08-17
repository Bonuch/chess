<template>
<div class="dolyame__modal">
  <div class="dolyame__modal__close">
    <a href="#" id="closeDolyameTerms" @click.prevent="$emit('closeModal')">
      назад
    </a>
  </div>
  <h2 class="dolyame__title">Купи сейчас, плати потом
    <span>
                        <svg class="dolyame__logo" viewBox="0 0 182 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                             href="/"><g clip-path="url(#headerLogoDolyame)" fill="#000"><path
                          d="M146.228 12.548l-7.012-7.766h-4.099v17.981h4.28V11.291l6.401 6.797h.791l6.292-6.797v11.472h4.28V4.782h-4.099l-6.834 7.766zM177.552 4.782l-10.608 11.687V4.782h-4.28v17.981h3.921l10.608-11.687v11.687h4.28V4.782h-3.921zM112.064 11.361c0 2.863 1.572 5.119 3.984 6.064l-4.523 5.338h5.238l4.115-4.856h4.453v4.856h4.28V4.782h-10.896c-4.063 0-6.651 2.768-6.651 6.58zm13.27-2.619v5.317h-5.826c-1.943 0-2.986-1.079-2.986-2.66 0-1.583 1.08-2.662 2.986-2.662l5.826.005zM92.176 8.378c-.262 6.184-1.572 10.176-4.136 10.176h-.642v4.317l.684.036c5.142.286 7.984-4.209 8.45-14.026h6.763v13.882h4.272V4.782H92.32l-.144 3.596zM76.065 4.53c-5.789 0-9.954 3.992-9.954 9.241 0 5.43 4.532 9.28 9.954 9.28 5.647 0 10.034-4.065 10.034-9.28 0-5.215-4.387-9.24-10.034-9.24zm0 14.205c-3.272 0-5.5-2.122-5.5-4.964 0-2.913 2.23-4.977 5.5-4.977 3.269 0 5.574 2.159 5.574 4.977 0 2.819-2.337 4.964-5.574 4.964zM61.572 4.815H46.467l-.145 3.597c-.214 5.18-1.571 10.108-4.136 10.178L41 18.627v8.382L45.317 27v-4.235h14.995V27h4.353v-8.41h-3.093V4.815zm-4.28 13.775H48.16c1.545-2.336 2.373-5.718 2.517-9.673h6.616v9.673zM31 .5h-4v22h4V.5zM4 5H0v22h4V5zM13 3.5H9v22h4v-22zM22 2h-4v22h4V2z"></path></g><defs><clipPath
                          id="headerLogoDolyame"><path fill="#fff"
                                                       d="M0 0h182v27H0z"></path></clipPath></defs></svg>
                        </span>
  </h2>
  <p class="dolyame__title_sm">без дополнительных платежей</p>
  <div class="dolyame__advantage__wrapper">
    <div class="dolyame__advantage">
      <div class="advantage__image">
        <img src="~/assets/images/thunder.png" alt="#">
      </div>
      <div class="advantage__text">
        <h4 class="advantage__title">Покупайте сейчас</h4>
        <p class="advantage__description">Не откладывайте деньги на то, что давно хотелось. Купите уже сейчас</p>
      </div>
    </div>
    <div class="dolyame__advantage">
      <div class="advantage__image">
        <img src="~/assets/images/credit-card.png" alt="#">
      </div>
      <div class="advantage__text">
        <h4 class="advantage__title">Распределяйте расходы</h4>
        <p class="advantage__description">Оплачивайте покупки часятми - по 25% от стоимости каждые две недели</p>
      </div>
    </div>
    <div class="dolyame__advantage">
      <div class="advantage__image">
        <img src="~/assets/images/pie-chart.png" alt="#">
      </div>
      <div class="advantage__text">
        <h4 class="advantage__title">Без процентов и комиссий</h4>
        <p class="advantage__description">Никаких дополнительных платежей - как обычная оплата картой</p>
      </div>
    </div>
  </div>
  <div class="dolyame__guide">
    <h4>Как оплатить?</h4>
    <ol class="guide__list">
      <li>Добавьте товары в корзину</li>
      <li>Укажите номер телефона ФИО</li>
      <li>Выберите "оплатить долями"</li>
      <li>Заполните форму в открывшемся окне</li>
      <li>Введите номер карты</li>
      <li>Оставшиеся 3 части спишутся автоматически</li>
    </ol>
  </div>
</div>
</template>

<script>
export default {
  name: "DolyameInfo"
}
</script>

<style lang="scss" scoped>
* {
  color: #000;
  line-height: 1.4;
}
.dolyame__modal {
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2147483640;
  position: absolute;
  box-sizing: border-box;
  padding: 40px;
  /*display: flex;*/
  /*flex-direction: row;*/
  top: 0;
  left: 0;
}
.dolyame__title {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Manrope',Arial,sans-serif;
}

.dolyame__modal__close {
  position: absolute;
  box-sizing: border-box;
  right: 50%;
  transform: translateX(50%);
  bottom: 20px;
}

.dolyame__modal__close a {
  display: inline-block;
  box-sizing: border-box;
  background: #000;
  font-size: 14px;
  padding: 10px 40px;
  color: #fff !important;
  font-family: 'Manrope',Arial,sans-serif;
}

.dolyame__logo {
  width: 100px;
}

.dolyame__title_sm {
  margin: 0;
  font-family: 'Manrope',Arial,sans-serif;
}

.dolyame__advantage__wrapper {
  margin: 20px 0px;
}

.dolyame__advantage {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-family: 'Manrope',Arial,sans-serif;
}

.advantage__image {
  margin-right: 15px;
}
.advantage__image img {
  height: 20px;
}

.advantage__description {
  font-size: 12px;
}

.dolyame__period__wrapper {
  margin: 30px 0px 10px 0px;
}
.period__text__wrapper {
  display: flex;
  justify-content: space-between;
}
.period__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope',Arial,sans-serif;
}
.period__text:first-child {
  align-items: flex-start;
}
.period__text:last-child {
  align-items: flex-end;
}

.period__text .text {
  font-size: 12px;
}

.period__text .text .text_lg {
  display: block;
}

.period__bar__wrapper {
  display: flex;
  position: relative;
  top: -16px;
  align-items: center;
  height: 16px;
}

.bar__label {
  width: 100%;
  display: flex;
  position: relative;
  height: 2px;
  border-bottom: 2px dotted #000;
}
.bar__column__container {
  height: 20px;
  display: flex;
  justify-content: center;
}
.bar__column__container:first-child {
  justify-content: flex-start;
}
.bar__column__container:last-child {
  justify-content: flex-end;
}
.bar__column__wrapper {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.bar__column {
  /*position: absolute;*/
  /*top: 0;*/
  display: block;
  border-radius: 3px;
  width: 5px;
  height: 16px;
  background: #F2DC52;
  z-index: 100;
}

.dolyame__guide {
  font-family: 'Manrope',Arial,sans-serif;
}

.dolyame__guide li{
  padding: 0;
  font-size: 12px;
}

.terms__link {
  font-family: 'Manrope',Arial,sans-serif;
  color: #000 !important;
  font-size: 12px;
  position: relative;
  overflow: hidden;
}

.terms__link::after {
  transition: ease-out .2s;
  width: 0px;
  height: 3px;
  border-radius: 2px;
  /*left: 1000px;*/
  background: #F2DC52;
  display: block;
  content: "";
  position: absolute;
  bottom: -5px;
}

.terms__link:hover::after {
  width: 61.8%;
}

h4 {
  margin: 0;
}

h2 {
  margin: 0;
}
ol {
  padding-left: 22px;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
