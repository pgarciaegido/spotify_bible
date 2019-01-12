import countries from '../../db/countries.json';

const state = {
  countries: [],
  selectedCountry: {name: 'Spain', code: 'ES'}
};

const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload.countries;
  },
  SET_SELECTED_COUNTRY(state, payload) {
    state.selectedCountry = payload.selectedCountry
  }
};

const actions = {
  FETCH_COUNTRIES({commit}) {
    commit('SET_COUNTRIES', { countries });
  },
  COUNTRY_SELECTED({commit, state}, selectedCountryCode) {
    return new Promise((resolve) => {
      resolve(commit('SET_SELECTED_COUNTRY', { selectedCountry:  state.countries.find(c => selectedCountryCode  === c.code )}));
    }) 
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
