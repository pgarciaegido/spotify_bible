import api from '../../api';

const state = {
  userInfo: undefined
};

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
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
      commit('CONTENT_MANAGE_LOADER', { activeLoader: false }, {root: true});
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
