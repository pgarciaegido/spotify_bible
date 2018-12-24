import menuItems from '../../db/LateralMenuItems';

export default {
  namespaced: true,
  state: {
    items: [],
    activeLoader: null
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload.menuItems;
    },
    manageLoader(state, payload) {
      state.activeLoader = payload.activeLoader;
    }
  },
  actions: {
    FETCH_MENU_ITEMS({commit}){
      commit('manageLoader', { activeLoader: true });
      // Simulate api call
      setTimeout(() => {
        commit('setItems', { menuItems });
        commit('manageLoader', { activeLoader: false });
      }, 1000);
    }
  }
}
