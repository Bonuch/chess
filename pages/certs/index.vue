<template>
  <div class="page-certificates">
    <CertsPromo/>

    <div class="page-certificates-content">
      <div class="why-container">
        <div class="why-heading" v-html="$t('cert_why_cert')"></div>
        <div class="tabs-block">
          <div class="tabs">
            <div class="tab active"> {{ $t('cert_at_first') }}</div>
            <div class="tab"> {{ $t('cert_at_second') }}</div>
            <div class="tab"> {{ $t('cert_at_third') }}</div>
          </div>
          <div class="content">
            <div class="content-item active">
              {{ $t('cert_at_first_txt') }}
            </div>
            <div class="content-item">
              {{ $t('cert_at_second_txt') }}
            </div>
            <div class="content-item">
              {{ $t('cert_at_third_txt') }}
            </div>
            <div class="whyg">
              <img src="../../static/img/certs-page/whyg.png" alt="#">
            </div>
            <div style="display: flex; position: absolute; justify-content: center; top: 216px; width: 100%;">
              <div class="whyg-mobile">
                <img src="../../static/img/certs-page/whyg-mobile.png" alt="#">
              </div>
            </div>
          </div>
          <div class="why-benefits">
            <div>
              {{ $t('cert_slogan') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <MenuTabs/>

    <CertsSlider @on-buy-product="buyProduct"/>

    <client-only>
      <transition name="fade">
        <Overlay v-if="overlay && productList.length > 0" @closeOverlay="toggleOverlay">
          <template v-slot:container>
            <PaymentForm
              :products="productList"
              productType='cert'
              :additional-fields="paymentAdditionalFields"
              @emptyList="toggleOverlay"
            />
          </template>
        </Overlay>
      </transition>
    </client-only>
  </div>
</template>

<script>
import MenuTabs from "@/components/Certs-page/MenuTabs";
import CertsSlider from "@/components/Certs-page/CertsSlider";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import CertsPromo from "@/components/Certs-page/CertsPromo";

export default {
    name: "certs-page",
    components: { CertsSlider, MenuTabs, PaymentForm, CertsPromo },
    head() {
        return {
            title: this.content?.page_title ? this.content.page_title : "Подарочные сертификаты в шахматной школе для детей",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.content?.content_description ? this.content.content_description : "Приобретая сертификат онлайн-школы шахмат Chessfirst - Вы точно не прогадаете с подарком и подарите человеку незабываемые интеллектуальные эмоции",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.content?.content_keywords ? this.content.content_keywords : "Приобретая сертификат онлайн-школы шахмат Chessfirst - Вы точно не прогадаете с подарком и подарите человеку незабываемые интеллектуальные эмоции",
                },
            ],
        }
    },
    data() {
        return {
            content: {
                content_description: null,
                content_keywords: null,
                page_title: null,
                content_title: null,
                content_text: null,
            },
            productList: [],
            overlay: false,
            paymentAdditionalFields: null,
        }
    },
    methods: {
        toggleOverlay() {
            this.overlay = !this.overlay
            if (this.productList.length)
                this.productList = []
        },
        buyProduct(product) {
            this.productList.push(product);
            this.paymentAdditionalFields = product?.additionalFields;
            this.overlay = true;
        }
    },
    mounted() {
        // First tabs in certs
        const $el = this.$el;

        if ($el) {
            let tabs = $el.querySelectorAll('.tab');
            let content = $el.querySelectorAll('.content-item');
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click', () => tabClick(i));
            }

            function tabClick(currentTab) {
                removeActive();
                tabs[currentTab].classList.add('active');
                content[currentTab].classList.add('active');
                // console.log(currentTab);
                // console.log(content);
            }

            function removeActive() {
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                    content[i].classList.remove('active');
                }
            }
        }
    },
    async asyncData({ $helpers }) {
        try {
            const [ content ] = await Promise.all([
                $helpers.getPageMeta('certs')
            ])
            return { content };
        } catch (ex) {
            console.log(ex);
            return { fetchError: true };
        }
    },
}
</script>

<style scoped lang="scss">
.page-certificates {
  &-content {
    display: flex;
    justify-content: center;
    font-family: 'Manrope', Arial, sans-serif;
    color: #1b3c66;
  }
}

.tabs-block {
  position: relative;
  margin-top: 80px;
}

.tabs {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}

.tab {
  text-align: center;
  background: #D5FAFC;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  opacity: 0.6;
  cursor: pointer;
}

.tab.active {
  background: #F9D260;
  opacity: 1;
}

.content {
  background-image: url("../../static/img/certs-page/tpb.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  position: relative;
  min-height: 240px;
  max-width: 800px;
  border-radius: 20px;
  margin: 0 auto;
}

.content-item {
  position: relative;
  color: white;
  top: 60px;
  padding: 0 60px;
  font-size: 18px;
  display: none;
}

.content-item.active {
  display: block;
}

.why-container {
  width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
}

.why-container .why-heading {
  text-align: center;
  font-size: 48px;
  line-height: 64px;
  font-weight: 700;
}

.why-container .why-panel {
  position: relative;
  //background: url(/images/custom/certs/tpb.png) no-repeat center center / 100%;
  min-height: 240px;
  max-width: 800px;
  /*margin: 0 auto;*/
  border-radius: 20px;
}

.why-container .tab {
  padding: 10px 0;
  width: 30%;
  min-width: 146px;
}

.why-btns-wrap {
  position: absolute;
  top: -65px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
}

.why-btn {
  text-align: center;
  background: #D5FAFC;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 50px;
  border-radius: 10px;
  opacity: 60%;
  cursor: pointer;
}

.why-btn.active {
  background: #F9D260;
  opacity: 1;
}

.why-text {
  /*position: absolute;*/
  position: relative;
  top: 60px;
  color: white;
  padding: 0 60px;
  font-size: 18px;
  display: none;
}

.why-text.active {
  display: block;
}

.whyg {
  width: 184px;
  position: absolute;
  /*right: -60px;*/
  /*top: 60px;*/
  right: -60px;
  top: 130px;
}

.whyg > img {
  width: 100%;
}

.whyg-mobile > img {
  width: 100%;
}

.whyg-mobile {
  width: 136px;
  display: none;
}

.why-benefits {
  margin: 136px auto 0;
  max-width: 920px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  opacity: 0.5;
}

@media all and (max-width: 992px) {
    .whyg {
        display: none;
    }
}

@media all and (max-width: 768px) {
  .why-container {
    width: 100%;
    margin-top: 50px;
  }
  .why-container .why-heading {
    font-size: 28px;
    line-height: 40px;
  }
  .why-container .tab {
    font-size: 16px;
    padding: 17px 2px;
  }
  .content-item {
    font-size: 14px;
    top: 30px;
    padding: 0 30px;
  }

  .whyg-mobile {
    display: block;
  }


  .why-container .content {
    background: url("../../static/img/certs-page/whyb1.png") no-repeat center center / 100%;
    min-height: 285px;
  }

  .why-benefits {
    font-size: 18px;
    line-height: 24px;
  }
}

@media all and (max-width: 480px) {
  .tabs {
    gap: 10px 15px;
    justify-content: center;
  }

  .tab {
    margin-bottom: 0;
  }

  .why-container .content {
    margin-top: 15px;
  }
}

</style>
