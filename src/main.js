import Vue from "vue"
import App from "./App.vue"
import LevelData from "./data/levels.json"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: function() {
    return {
      levelData: LevelData,
      currentLevel: 0
    }
  }
}).$mount("#app")
