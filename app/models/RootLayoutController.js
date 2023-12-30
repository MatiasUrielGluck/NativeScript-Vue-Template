import Vue from "nativescript-vue";
import { getRootLayout } from "@nativescript/core";

export class RootLayoutController {
  static _instance;

  static getInstance() {
    if (!this._instance) {
      this._instance = new RootLayoutController();
    }
    return this._instance;
  }

  // Properties
  instancedLayers = [];

  // Methods

  /**
   * Creates a Vue instance from a component, and renders it on the parent.
   * @param {*} component Vue component
   */
  getComponentInstance(component, options) {
    try {
      let navEntryInstance = new Vue({
        name: "LayerEntry",
        render: function (h) {
          return h(component, {
            ...options,
          });
        },
      });

      let view = navEntryInstance.$mount().$el.nativeView;

      this.instancedLayers.push({
        component: component,
        instance: navEntryInstance,
        view,
      });

      return {
        instance: navEntryInstance,
        view,
      };
    } catch (error) {
      console.log(error);
    }
  }

  getInstancedLayerFromComponent(component) {
    return this.instancedLayers.find((c) => c.component === component);
  }

  openLayer(component, options) {
    try {
      getRootLayout().open(this.getComponentInstance(component, options).view, {
        shadeCover: {
          color: "#000",
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            opacity: 0,
            translateY: 500,
            duration: 200,
          },
          exitTo: {
            opacity: 0,
            translateY: 500,
            duration: 200,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  closeLayer(view = null) {
    try {
      let instanceToDelete;

      if (view) {
        instanceToDelete = this.instancedLayers.find((l) => l.view === view);
      } else {
        instanceToDelete = this.instancedLayers.pop();
      }

      getRootLayout().close(instanceToDelete.view, {
        opacity: 0,
        translateY: 500,
        duration: 200,
      });

      if (view)
        this.instancedLayers = this.instancedLayers.filter(
          (c) => c.view !== view
        );
      instanceToDelete.instance.$destroy();
    } catch (error) {
      console.log(error);
    }
  }
}
