import template from "./menu-icon-list.html";

export const menuIconList = {
  template: template,
  require: {
    parentComponent: '^menuIcon'
  },
  controllerAs: "vm",
  controller: class {

    constructor() {
        this.list = []
    }

    $onInit() {
      console.log(this)
      this.list = this.parentComponent.list
    }
  }
};