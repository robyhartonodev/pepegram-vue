// As of 11/05/2022 example currentUser object
/**
 * currentUser: {
 * "username":"rhrt04",
 * "biography":"poggers 123",
 * "phoneNumber":"+49 017612712172",
 * "postArray":["d7hARXPIz5JN7GW1m61S"],
 * "postCount":2,
 * "followerCount":1,
 * "followingArray":[],
 * "website":"https://poggers.com",
 * "gender":"male",
 * "followerArray":["3AHInvmuXePDseAvbplPCigRRah2"],
 * "email":"robyhartono01@gmail.com",
 * "followingCount":0,
 * "name":"Roby Hartono"
 * }
 *
 * */
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
