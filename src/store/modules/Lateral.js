import menuItems from '../../db/LateralMenuItems';

const state = {
  items: [],
  activeLoader: null
};

const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload.menuItems;
  },
  MANAGE_LOADER(state, payload) {
    state.activeLoader = payload.activeLoader;
  }
};

const actions = {
  FETCH_MENU_ITEMS({commit}){
    commit('MANAGE_LOADER', { activeLoader: true });
    // Simulate api call
    setTimeout(() => {
      commit('SET_ITEMS', { menuItems });
      commit('MANAGE_LOADER', { activeLoader: false });
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
