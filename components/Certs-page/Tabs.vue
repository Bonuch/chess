<template lang="html">
  <div>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabsSec"
        :key="tab.title"
        @click="selectTab(index)"
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
    }
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabsSec: []         // all of the tabs
    }
  },
  created () {
    this.tabsSec = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabsSec.forEach((tab, index) => {
        tab.isActiveTab = (index === i)
      })
    }
  }
}
</script>

<style lang="scss">

ul.tabs__header {
  text-align: center;
  margin: 50px 0;
  font-size: 28px;
  font-weight: 600;
  padding: 0;
}

ul.tabs__header > li {
  padding: 0 20px;
  opacity: 0.45;
  margin: 0;
  display: inline-block;
  cursor: pointer;
  transition: .3s;
  &:hover {
    opacity: 1;
    transition: .3s;
   }
}

ul.tabs__header > li.tab__selected {
  opacity: 1;
}

.tabs__light .tab{
  background-color: #fff;
}

.tabs__light li {
  background-color: #ddd;
  color: #aaa;
}

.tabs__light li.tab__selected {
  background-color: #fff;
  color: #83FFB3;
}
</style>
