import Vue from 'vue';
import Vuex from 'vuex';

import MainPage from './modules/MainPage';
import LateralStore from './modules/Lateral';
import StoreCredentials from './modules/StoreCredentials';
import ByGenre from './modules/ByGenre';
import CountrySelector from './modules/CountrySelector';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    MainPage,
    LateralStore,
    StoreCredentials,
    ByGenre,
    CountrySelector
  }
});

export default store;
