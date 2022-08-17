<template>
<section class="trainers">
  <div class="container">
      <TrainersInfo/>

      <client-only>
          <TrainersSlider/>
      </client-only>
  </div>

    <PromotionalBlock/>

</section>
</template>

<script>
import TrainersInfo from "@/components/Trainers/TrainersInfo";
import TrainersSlider from "@/components/Trainers/TrainersSlider";

export default {
  name: "Trainers",
    components: {TrainersSlider, TrainersInfo},
}
</script>

<style scoped lang="scss">
.trainers {
    padding: 284px 15px 64px;
    background: #E7EDF9;
    margin-bottom: 128px;
    @media (max-width: 767px) {
        margin-bottom: 80px;
        padding-bottom: 80px;
        padding-right: 0 !important;
    }
}
</style>
