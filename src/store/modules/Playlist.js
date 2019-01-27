import api from '../../api';

const state = {
  playlist: {}
};

const mutations = {
  SET_PLAYLIST(state, playlist) {
    state.playlist = playlist;
  }
};

const actions = {
  FETCH_PLAYLIST({commit}, {token, playlistId}) {
    commit('MainPage/CONTENT_MANAGE_LOADER', { activeLoader: true }, {root: true});

    api.getPlaylistInformation({ token, playlistId })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then((playlist) => {
      commit('SET_PLAYLIST', playlist);
      commit('MainPage/CONTENT_MANAGE_LOADER', { activeLoader: false }, {root: true});
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
