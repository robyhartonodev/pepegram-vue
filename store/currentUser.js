export const state = () => ({
  currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
})

export const mutations = {
  setCurrentUser (state, { currentUser }) {
    state.currentUser = currentUser
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
  }
}

export const actions = {
  setCurrentUser ({ commit }, { currentUser }) {
    commit('setCurrentUser', { currentUser })
  }
}
