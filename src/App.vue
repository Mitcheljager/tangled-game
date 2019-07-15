<template>
  <div class="board">
    <div class="main-interface">
      <div @click="activeInstance = 'Level'">Level</div>
    </div>

    <div v-bind:is="activeInstance" :class="activeInstance" ref="instance"></div>
  </div>
</template>

<script>
  import Level from "./components/instances/level"

  export default {
    name: "app",
    components: {
      Level
    },
    data: function () {
      return {
        activeInstance: "Level"
      }
    }
  }
</script>

<style lang="scss">
  :root {
    --black : #111;
    --white: #E5E5E5;
    --red: #BD4545;
    --green: #28905B;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    overflow: hidden;
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .board {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    user-select: none;
  }

  .main-interface {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    color: white;
    text-shadow: 1px 1px 0 rgba(black, .5), -1px -1px 0 rgba(black, .5), -1px 1px 0 rgba(black, .5), 1px -1px 0 rgba(black, .5);
  }
</style>
