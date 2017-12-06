import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  showLogin: false,
  isLoading: false,
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  toogleLogin(state) {
    state.showLogin = ! state.showLogin
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  toogleLogin: ({ commit }) => commit('toogleLogin'),
  logUser: ({ commit }, user) => {
    commit('setLoading', true)
    console.log(user);
  }, 
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  showLogin: state => state.showLogin,
  isLoading: state => state.isLoading
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})