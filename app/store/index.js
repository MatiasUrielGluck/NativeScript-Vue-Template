import Vue from "nativescript-vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {
    incrementAsync({ commit }, { time }) {
      setTimeout(() => {
        commit("increment");
      }, time);
    },
  },
});

Vue.prototype.$store = store;

export default store;
