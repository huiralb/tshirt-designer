import Vue from 'vue'
import Vuex from 'vuex'
import Worksheet from "@/services/worksheet";

Vue.use(Vuex)

const canvas = Worksheet.canvas()
console.log(canvas.getActiveObject())

export default new Vuex.Store({
  state: {
    worksheet: {
      canvas: canvas,
      canvasJson: null,
      objects: null
    }
  },
  mutations: {
    // worksheet
    setCanvas(state, payload){
      state.worksheet.canvas = payload.canvas
      state.worksheet.canvasJson = payload.json
    }
  },
  actions: {

  }
})
