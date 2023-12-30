import Vue from "nativescript-vue";
import Vuex from "vuex";

import store from "./store";

import Home from "./views/Home";

import Router from "./router";
import { RootLayoutController } from "./models/RootLayoutController";

Vue.use(Vuex);

// Router Init
const router = new Router();
Vue.prototype.$router = router;

Vue.prototype.$rootLayoutController = RootLayoutController.getInstance();

new Vue({
  store,
  render: (h) => h("frame", [h(Home)]),
}).$start();
