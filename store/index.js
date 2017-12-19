import axios from 'axios';

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
  authUser: null
});

export const getters = ({ state }) => ({
  isAuth: state => state.isAuth
});

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser);
    }
  },
  logUser: async ({ commit }, { email, password }) => {
    try {
      const { data } = await axios.post('/api/login', {
        email,
        password
      });
      commit('SET_USER', data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return new Error('Bad credentials');
      }

      return error;
    }
  }
};

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_USER (state, user) {
    state.authUser = user;
  }
};
