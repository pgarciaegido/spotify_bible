import Vue from 'vue';
import Vuex from 'vuex';

import LateralStore from './modules/Lateral';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    LateralStore
  }
});

export default store;
