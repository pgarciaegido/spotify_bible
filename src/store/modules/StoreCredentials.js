const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

const deleteCookie = (name) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const state = {
  token: null,
  expiresIn: null
};

const getters = {
  tokenIsValid({ expiresIn }) {
    return expiresIn > (+ new Date());
  }
}

const mutations = {
  SET_STATE_CREDENTIALS(state, {access_token, expires_in}){
    state.token = access_token;
    state.expiresIn = expires_in;
  },
  EMPTY_CREDENTIALS(state) {
    state.token = null;
    state.expiresIn = null;
    deleteCookie('spotify_token');
    deleteCookie('spotify_expires');
  },
  SET_CREDENTIALS_IN_COOKIE({token, expiresIn}){
    document.cookie = `spotify_token=${token}`;
    document.cookie = `spotify_expires=${expiresIn}`;
  },
  GET_CREDENTIALS_FROM_COOKIE(state){
    state.token = getCookie('spotify_token');
    state.expiresIn = getCookie('spotify_expires');
  }
};

const actions = {
  SAVE_CREDENTIALS({ commit }, payload){
    commit('SET_STATE_CREDENTIALS', payload);
    commit('SET_CREDENTIALS_IN_COOKIE');
  },
  GET_CREDENTIALS({ commit, getters, state }) {
    commit('GET_CREDENTIALS_FROM_COOKIE');

    if (state.token) {
      if (!getters.tokenIsValid) {
        commit('EMPTY_CREDENTIALS');
      }
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
