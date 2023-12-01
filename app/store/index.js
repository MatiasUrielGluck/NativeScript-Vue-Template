import Vue from "nativescript-vue";
import Vuex from "vuex";
import { getAllPokemons } from "~/services/pokemons";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    showLoader: false,
    pokemons: [],
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    setAllPokemons: (state, payload) => (state.pokemons = payload.pokemons),
    toggleLoader: (state) => (state.showLoader = !state.showLoader),
  },
  actions: {
    incrementAsync({ commit }, { time }) {
      setTimeout(() => {
        commit("increment");
      }, time);
    },

    async fetchAllPokemons({ commit }) {
      commit("toggleLoader");
      const pokemons = await getAllPokemons();
      commit("setAllPokemons", { pokemons: pokemons });
      commit("toggleLoader");
    },
  },
});

Vue.prototype.$store = store;

export default store;
