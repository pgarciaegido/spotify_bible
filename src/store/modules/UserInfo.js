import api from '../../api';

const state = {
  userInfo: {},
  playlists: []
};

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_PLAYLISTS(state, playlists) {
    state.playlists = playlists.items;
  }
};

const actions = {
  FETCH_USER_INFO({commit}, {token}) {
    commit('CONTENT_MANAGE_LOADER', { activeLoader: true }, {root: true});

    api.getUserInfo({ token })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then((userInfo) => {
      commit('SET_USER_INFO', userInfo);

      api.getUserPlaylists({ token, userId: userInfo.id })
      .then(res => res.json())
      .catch(err => console.log(err))
      .then((playlists) => {
        console.log(playlists);
        commit('SET_PLAYLISTS', playlists);
        commit('CONTENT_MANAGE_LOADER', { activeLoader: false }, {root: true});
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
