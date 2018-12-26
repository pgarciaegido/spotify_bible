const state = {
  lateralActiveLoader: null,
  contentActiveLoader: null
};

const mutations = {
  LATERAL_MANAGE_LOADER(state, { activeLoader }) {
    state.lateralActiveLoader = activeLoader;
  },
  CONTENT_MANAGE_LOADER(state, { activeLoader }) {
    state.contentActiveLoader = activeLoader;
  }
};

export default {
  state,
  mutations
}