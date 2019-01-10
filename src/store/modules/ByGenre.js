import api from '../../api';
import countries from '../../db/countries.json';

const state = {
  genres: [],
  countries: []
};

const mutations = {
  SET_GENRES(state, {items}) {
    state.genres = items;
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload.countries;
  }
};

const actions = {
  FETCH_GENRES({commit}, {token, countryCode}) {
    commit('CONTENT_MANAGE_LOADER', { activeLoader: true }, {root: true});

    api.getGenresByCountry({countryCode, token})
    .then(res => res.json())
    .catch(err => console.log(err))
    .then((genres) => {
      commit('SET_GENRES', {items: genres.categories.items});
      commit('CONTENT_MANAGE_LOADER', { activeLoader: false }, {root: true});
    });
  },
  FETCH_COUNTRIES({commit}) {
    commit('SET_COUNTRIES', { countries });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
