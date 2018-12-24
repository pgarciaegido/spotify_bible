
const state = {
  token: null,
  expiresIn: null
};

const mutations = {
  SAVE_CREDENTIALS(state, payload) {
    state.token = payload.access_token;
    state.expiresIn = payload.expires_in;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
