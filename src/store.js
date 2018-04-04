import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    worksheet: {
      canvas: null
    }
  },
  mutations: {
    // worksheet
    setCanvas(state, canvas){
      state.worksheet.canvas = canvas
    }
  },
  actions: {

  }
})
