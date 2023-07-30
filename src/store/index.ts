import { createStore } from 'vuex'

export default createStore({
  state: {
    token : '',
    userdata : {},
  },
  getters: {
    gettoken : (state) => state.token,
    getuserdata : (state) => state.userdata,
  },
  mutations: {
  },
  actions: {
    gettoken : ({state},value) => state.token = value,
    getuserdata : ({state},value)=> state.userdata=value,
  },
  modules: {
  }
})
