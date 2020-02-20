<template>
  <div class="interface interface--main-menu interface--fullscreen">
    <a @click="changeInstance('Level')">resume.</a>
    <a @click="resetLevel()" v-if="getCurrentInstance() == 'Level'">reset.</a>

    <br>

    <a @click="changeInstance('LevelSelect')">levels.</a>
    <a @click="changeInstance('Settings')">settings.</a>
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
      resetLevel() {
        EventBus.$emit("resetLevel")
      },
      getCurrentInstance() {
        return this.$root.$children[0].activeInstance
      },
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
