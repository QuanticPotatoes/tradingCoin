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
  logUser: ({ commit }, user) => {
    console.log(user);
    axios.post('/api/login', {
      email: user.email,
      password: user.password
    });
  }
};

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};
