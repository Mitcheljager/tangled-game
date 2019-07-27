<template>
  <div class="board">
    <main-menu v-if="menuActive"></main-menu>

    <div class="main-interface">
      <div @click="toggleMenu()">menu.</div>
    </div>

    <div v-bind:is="activeInstance" :class="activeInstance" ref="instance"></div>
  </div>
</template>

<script>
  import { EventBus } from "./components/event_bus"
  import MainMenu from "./components/interface/main-menu"
  import Level from "./components/instances/level"
  import LevelSelect from "./components/instances/level-select"
  import Settings from "./components/instances/settings"

  export default {
    name: "app",
    components: {
      Level,
      LevelSelect,
      Settings,
      MainMenu
    },
    data: function () {
      return {
        activeInstance: "Level",
        menuActive: false
      }
    },
    mounted() {
      EventBus.$on("toggleMainMenu", () => { this.toggleMenu() })
      EventBus.$on("closeMainMenu", () => { this.closeMenu() })
      EventBus.$on("goToLevel", (level) => { this.goToLevel(level) })
      EventBus.$on("changeInstance", (instance) => { this.changeInstance(instance) })
    },
    methods: {
      changeInstance(instance) {
        this.activeInstance = instance
        this.toggleMenu()
      },
      toggleMenu() {
        this.menuActive = !this.menuActive
      },
      closeMenu() {
        this.menuActive = false
      },
      goToLevel(level = this.$root.currentLevel + 1) {
        this.$root.currentLevel = level

        EventBus.$emit("resetBoardPosition")
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
    bottom: 5vmax;
    left: 5vmax;
    z-index: 10;
    color: white;
    text-shadow: 1px 1px 0 rgba(black, .5), -1px -1px 0 rgba(black, .5), -1px 1px 0 rgba(black, .5), 1px -1px 0 rgba(black, .5);
  }

  @keyframes fade-in {
    from {
      opacity: 0l
    }

    to {

      opacity: 1;
    }
  }
</style>
