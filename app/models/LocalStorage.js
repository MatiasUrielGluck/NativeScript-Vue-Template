import { knownFolders } from "@nativescript/core";
import localStorageConfig from "~/config/localstorage.config";

const appRootFolder = knownFolders.currentApp();

export class LocalStorage {
  static _instance;

  static getInstance() {
    if (!this._instance) {
      this._instance = new LocalStorage();
    }
    return this._instance;
  }

  constructor() {
    this.initLocalStorage();
  }

  initLocalStorage() {
    this.file = appRootFolder.getFile(localStorageConfig.fileName);
    this.data = this.getJSONFromFile();
  }

  getJSONFromFile() {
    try {
      if (!this.file.readTextSync()) {
        this.file.writeTextSync(JSON.stringify({}));
      }
      return JSON.parse(this.file.readTextSync());
    } catch (error) {
      console.error(error);
    }
  }

  getItem(key) {
    try {
      return this.data[key];
    } catch (error) {
      console.error(error);
    }
  }

  setItem(key, value) {
    try {
      this.data[key] = value;
      this.file.writeTextSync(JSON.stringify(this.data));
    } catch (error) {
      console.log(error);
    }
  }

  removeItem(key) {
    try {
      this.data[key] = undefined;
      this.file.writeTextSync(JSON.stringify(this.data));
    } catch (error) {
      console.log(error);
    }
  }

  clear() {
    try {
      this.file.removeSync();
      this.data = undefined;
      this.initLocalStorage();
    } catch (error) {
      console.error(error);
    }
  }
}
