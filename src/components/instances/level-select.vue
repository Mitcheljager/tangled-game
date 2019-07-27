<template>
  <div class="instance--level-select">
    <h1 class="instance__title">levels.</h1>

    <nav class="level-select">
      <a v-for="(level, index) in this.$root.levelData"
        class="level-select__item"
        :class="classList(index)"
        @click="goToLevel(index)">
        <div><span>{{ index > 9 ? index : "0" + index }}.</span> {{ level.name }}</div>

        <span>par. {{ level.par }}.</span>
      </a>
    </nav>
  </div>
</template>

<script>
  import { EventBus } from "../event_bus"

  export default {
    props: [],
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      goToLevel(level) {
        if (level > this.$root.maxLevel) return

        EventBus.$emit("toggleMainMenu")
        EventBus.$emit("goToLevel", level)

        this.$nextTick(() => {
          EventBus.$emit("changeInstance", "Level")
        })
      },
      classList(index) {
        let classes = []

        if (this.$root.currentLevel == index) classes.push("level-select__item--is-active")
        if (index > this.$root.maxLevel) classes.push("level-select__item--is-disabled")

        return classes
      }
    }
  }
</script>

<style lang="scss">
  .instance--level-select {
    padding: 5vmax;
  }

  .level-select {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;
  }

  .level-select__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1em;
    padding: 5px 0;
    color: var(--white);

    span {
      opacity: .5;
      font-size: 13px;
    }

    &--is-active {
      background: var(--white);
      padding: 5px;
      color: var(--black);
      border-radius: 2px;
    }

    &--is-disabled {
      opacity: .25;
    }
  }
</style>
