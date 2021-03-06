import api from '../../api';

const state = {
  genres: []
};

const mutations = {
  SET_GENRES(state, {items}) {
    state.genres = items;
  }
};

const actions = {
  FETCH_GENRES({commit}, {token, countryCode}) {
    commit('MainPage/CONTENT_MANAGE_LOADER', { activeLoader: true }, {root: true});

    api.getGenresByCountry({countryCode, token})
    .then(res => res.json())
    .catch(err => console.log(err))
    .then((genres) => {
      commit('SET_GENRES', {items: genres.categories.items});
      commit('MainPage/CONTENT_MANAGE_LOADER', { activeLoader: false }, {root: true});
    });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
