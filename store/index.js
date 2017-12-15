import axios from 'axios';

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
  isAuth: false
});

export const getters = ({ state }) => ({
  isAuth: state => state.isAuth
});

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session) {
      
    }
  },
  logUser: ({ commit }, { email, password }) => {
    try {
      axios.post('/api/login', {
        email,
        password
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials');
      }

      throw error;
    }
  }
};

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};
