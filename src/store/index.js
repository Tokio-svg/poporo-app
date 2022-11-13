import { createStore } from 'vuex'

export default createStore({

  state () {
    return {
      modalIsActive: false,
      modalData: {}
    }
  },

  mutations: {
    modalOn(state) {
      state.modalIsActive = true
    },

    modalOff(state) {
      state.modalIsActive = false
    },

    // dataは{component ,header , param}のオブジェクト
    setModalData(state, data) {
      state.modalData = data
    }
  },

  actions: {
    modalOn(context) {
      context.commit('modalOn')
    },

    modalOff(context) {
      context.commit('modalOff')
    },

    setModalData(context, data) {
      context.commit('setModalData', data)
    }
  }
})
