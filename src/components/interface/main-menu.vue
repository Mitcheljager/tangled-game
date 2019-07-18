<template>
  <div class="interface interface--main-menu interface--fullscreen">
    <a @click="toggleMainMenu()">resume.</a>
    <a @click="changeInstance('Settings')">settings.</a>
    <a @click="changeInstance('LevelSelect')">levels.</a>
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
      toggleMainMenu() {
        EventBus.$emit("toggleMainMenu")
      },
      changeInstance(instance) {
        EventBus.$emit("changeInstance", instance)
      }
    }
  }
</script>

<style lang="scss">
  .interface--main-menu {
    flex-direction: column;
    opacity: 0;
    animation: fade-in 500ms forwards;
  }
</style>
