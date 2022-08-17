<template>
  <div class="gp-bottom">
    <div class="gp-container" style="margin-top: 50px;">

      <h3 class="h3dft">
        F.A.Q
      </h3>
      <h4 class="pdft">{{ $t('main_faq_par') }}</h4>

      <AccordionList :items="items"></AccordionList>

    </div>
  </div>
</template>

<script>

import AccordionList from "@/components/AccordionList";

export default {
  name: "FAQ",
  components: {AccordionList},
  props: {
    items: {
      items: Array,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
::v-deep {
  p {
    margin: 0;
  }
}

.gp-bottom {
  display: flex;
  justify-content: center;
}

.h3dft {
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
}

.gp-container {
    max-width: 1100px;
    width: 100%;
    margin-top: 50px;
}

.pdft {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

@media all and (max-width: 768px) {
  .gp-container {
    width: 100%;
    margin: 10px;
  }

  .gp-bottom {
    margin: 0 20px;
  }

  .h3dft {
    font-size: 28px;
  }
}
</style>
