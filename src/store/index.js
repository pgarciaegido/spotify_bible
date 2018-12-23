import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    countPlusTen: 10
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    }
  },
  getters: {
    addTen: state => state.count + 10
  }
});

export default store;
