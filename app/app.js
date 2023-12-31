import Vue from "nativescript-vue";
import Vuex from "vuex";

import store from "./store";

import Home from "./views/Home";

import { RouterController } from "./router";
import { RootLayoutController } from "./models/RootLayoutController";
import { LocalStorage } from "./models/LocalStorage";

Vue.use(Vuex);

// Prototype Init
Vue.prototype.$router = RouterController.getInstance();
Vue.prototype.$rootLayoutController = RootLayoutController.getInstance();
Vue.prototype.$localStorage = LocalStorage.getInstance();

new Vue({
  store,
  render: (h) => h("frame", [h(Home)]),
}).$start();
