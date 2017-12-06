import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  showLogin: false,
  isLoading: false,
  isAuth: false,
  isAdmin: false,
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
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  toogleLogin: ({ commit }) => commit('toogleLogin'),
  logUser: ({ commit, state }, user) => {
    state.isLoading = true;

    setTimeout(() => { 
      state.isAuth = true;
      state.isLoading = false;
      state.showLogin = false;
    }, 1000);
    console.log(user);
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  showLogin: state => state.showLogin,
  isLoading: state => state.isLoading,
  isAuth: state => state.isAuth,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})