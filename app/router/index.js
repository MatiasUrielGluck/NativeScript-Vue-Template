import Vue from "nativescript-vue";

import routerConfig from "../config/router";
import routes from "./routes";

class Router {
  constructor() {
    this.actualRoute = routerConfig.startingRoute;
  }

  /**
   *
   * @param {String} to Desired route path
   * @param {Object} options Options
   * @returns
   */
  goto(to, { transition = "slideLeft", props } = {}) {
    if (!routes[to]) {
      console.log(`Router: The route ${to} doesn't exist.`);
      return;
    }

    console.log(`Going from '${this.actualRoute}' to '${to}'`);
    this.actualRoute = to;
    Vue.navigateTo(routes[to], {
      transition,
      props,
    });
  }
}

export default Router;
