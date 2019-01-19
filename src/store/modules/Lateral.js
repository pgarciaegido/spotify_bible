import menuItems from '../../db/LateralMenuItems';

const state = {
  items: [],
};

const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload.menuItems;
  }
};

const actions = {
  FETCH_MENU_ITEMS({commit}){
    commit('MainPage/LATERAL_MANAGE_LOADER', { activeLoader: true }, {root: true});
    // Simulate api call
    setTimeout(() => {
      commit('SET_ITEMS', { menuItems });
      commit('MainPage/LATERAL_MANAGE_LOADER', { activeLoader: false }, {root: true});
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
