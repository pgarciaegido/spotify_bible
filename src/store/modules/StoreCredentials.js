
const state = {
  token: null,
  expiresIn: null
};

const getExpirationDate = (expiresIn) => {
  return + new Date() 
  // turn to miliseconds
  + (expiresIn * 1000);
};

const getCookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

const deleteCookie = (name) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const getters = {
  tokenIsValid(state) {
    return state.expiresIn > (+ new Date());
  }
}

const mutations = {
  SET_STATE_CREDENTIALS(state, payload){
    state.token = payload.access_token;
    state.expiresIn = payload.expires_in;
  },
  EMPTY_CREDENTIALS(state) {
    state.token = null;
    state.expiresIn = null;
    deleteCookie('spotify_token');
    deleteCookie('spotify_expires');
  },
  SET_CREDENTIALS_IN_COOKIE(state){
    document.cookie = `spotify_token=${state.token}`;
    document.cookie = `spotify_expires=${getExpirationDate(state.expiresIn)}`;
  },
  GET_CREDENTIALS_FROM_COOKIE(state){
    state.token = getCookie('spotify_token');
    state.expiresIn = Number(getCookie('spotify_expires'));
  }
};

const actions = {
  SAVE_CREDENTIALS({ commit }, payload){
    commit('SET_STATE_CREDENTIALS', payload);
    commit('SET_COOKIE');
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
