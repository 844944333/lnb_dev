import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPageLoadScrollBar: true
  },
  mutations: {
    setShowPageLoadScrollBar (state, data) {
      state.showPageLoadScrollBar = !!data
    }
  },
  actions: {
  },
  modules: {
  }
})
