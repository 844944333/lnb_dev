import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPageLoadScrollBar: true,
    headerHeight: 56
  },
  mutations: {
    setShowPageLoadScrollBar (state, data) {
      state.showPageLoadScrollBar = !!data
    },
    setHeaderHeight (state, data) {
      state.headerHeight = data
    }
  },
  actions: {
  },
  modules: {
  }
})
