import Vue from "vue"
import App from "./App.vue"
import LevelData from "./data/levels.json"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: function() {
    return {
      levelData: JSON.parse(JSON.stringify(LevelData)),
      currentLevel: parseInt(localStorage.getItem("currentLevel")) || 0,
      maxLevel: parseInt(localStorage.getItem("maxLevel")) || 0
    }
  },
  watch: {
    currentLevel() {
      if (this.currentLevel > this.maxLevel) this.maxLevel = this.currentLevel

      localStorage.setItem("currentLevel", this.currentLevel)
    },
    maxLevel() {
      localStorage.setItem("maxLevel", this.maxLevel)
    }
  }
}).$mount("#app")
