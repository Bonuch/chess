<template>
  <div class="flex flex_column expander__row">
    <button
      @click.stop.prevent="toggleAccordion()"
      class="expand__row flex flex_justify_center flex_align_center"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${uid}`"
    >
      <slot name="title"/>
      <img class="expand__button" :class="{expanded: isOpen}" src="~/assets/images/vector_stroke.svg" alt="#">
    </button>

    <div v-show="isOpen" :id="`collapse${uid}`">
        <slot name="content" class="expand"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileExpander",
  data() {
    return {
      uid: Math.round(Math.random() * 200000000),
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style lang="scss" scoped>
.expand__row {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0;
}

.expand__button {
  padding: 8px;
  width: 32px;
  height: 32px;
  transition: .1s;
  transform: rotate(-90deg);

  &.expanded {
    transform: rotate(90deg);
  }

}

.expander__row {
  transition: .1s;
  padding: 0 16px;

  &:hover {
    background: darken(#F4F5F7, 10);
  }

  &:nth-child(even) {
    background: #F4F5F7;

    &:hover {
      background: darken(#F4F5F7, 10);
    }
  }
}

.title {
  min-height: 48px;
  width: 100%;
}

.expand {
  background: #fff;
  padding: 16px;
  margin: 0 -16px;
  .row {
    display: flex;
    padding: 0 50px 10px 50px;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      .expand__title {
        border-bottom: none;
      }
    }
  }
  &__title {
    flex: 1;
    padding: 8px 0;
    border-bottom: 0.5px solid #D1D8E0;
  }
  &__score {
    margin-left: 16px;
    min-width: 50px;
    text-align: center;
  }
}
</style>
