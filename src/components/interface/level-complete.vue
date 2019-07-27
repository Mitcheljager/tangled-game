<template>
  <div class="interface interface--fullscreen interface--level-complete" slot="interface" ref="level-complete">
    done.

    <div class="interface--fullscreen__tray">
      <a @click="goToNextLevel()">view.</a>
      <a @click="goToNextLevel()">next.</a>
    </div>
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
      goToNextLevel() {
        EventBus.$emit("goToLevel")
        EventBus.$emit("initiateLevel")
      }
    }
  }
</script>

<style lang="scss">
  .interface--level-complete {
    opacity: 0;
    animation: fade-in 1000ms 500ms forwards;
  }
</style>
