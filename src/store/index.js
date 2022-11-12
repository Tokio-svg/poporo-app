import { createStore } from 'vuex'

export default createStore({

  state () {
    return {
      isActive: false
    }
  },

  mutations: {
    modalOn(state) {
      state.isActive = true
    },

    modalOff(state) {
      state.isActive = false
    }
  },

  actions: {
    modalOn(context) {
      context.commit('modalOn')
    },

    modalOff(context) {
      context.commit('modalOff')
    }
  }
})
