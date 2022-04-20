export const state = () => ({
  show: false,
  text: '',
  type: 'default' // default, danger, success, warning
})

export const mutations = {
  show (state, { text, duration, type }) {
    state.text = text
    state.type = type
    state.show = true

    setTimeout(() => {
      this.commit('flashmessage/setShow', { show: false })
    }, duration)
  },
  setShow (state, { show }) {
    state.show = show
  },
  setText (state, { text }) {
    state.text = text
  },
  setType (state, { type }) {
    state.type = type
  }
}

export const actions = {
  show ({ commit }, { text, duration, type }) {
    setTimeout(() => {
      commit('show', { text, duration, type })
    }, 500)
  }
}
