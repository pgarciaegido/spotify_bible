import Vue from 'vue';
import Vuex from 'vuex';

import LateralStore from './modules/Lateral';
import StoreCredentials from './modules/StoreCredentials';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    LateralStore,
    StoreCredentials
  }
});

export default store;
