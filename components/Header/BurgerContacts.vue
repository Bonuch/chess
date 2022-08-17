<template>
  <section class="burger-contacts">
    <div class="burger-contacts__container">
      <p class="burger-contacts__text">{{$t('footer_call_us')}}</p>
      <a href="tel:79167447719" class="burger-contacts__phone">+7 (916) 744-77-19</a>
      <div class="burger-contacts__wrapper">
        <a href="https://vk.com/chessfirst_online" target="_blank" class="burger-contacts__social">
          <img src="@/static/img/Header/vk-icon-blue.svg" alt="vk">
        </a>
        <a href="http://t.me/Chess_First_Online" target="_blank" class="burger-contacts__social">
          <img src="@/static/img/Header/tg-icon-blue.svg" alt="telegram">
        </a>
        <a href="https://wa.me/+79299500192" target="_blank" class="burger-contacts__social">
          <img src="@/static/img/Header/ws-icon-blue.svg" alt="whatsApp">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BurgerContacts"
}
</script>

<style lang="scss">
.burger-contacts__container:before {
  content: "";
  position: absolute;
  background-image: url("./static/img/Header/crown.svg");
  background-repeat: no-repeat;
  width: 192px;
  height: 189px;
  right: -30px;
  bottom: -30px;
}

.burger-contacts {
  display: none;
  position: relative;
  @media (max-width: 950px) {
    display: block;
    background: #E5EDF9;
    width: 100vw;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 40px 30px 16px;
    overflow: hidden;
    position: relative;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 16px;
  }

  &__text {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1B3C66;
  }

  &__phone {
    padding-top: 20px;
    padding-bottom: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #1B3C66;
  }

  &__social {
    width: 48px;

    & img {
      max-width: 48px;
      width: 100%;
    }
  }
}
</style>
