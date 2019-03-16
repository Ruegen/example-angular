import template from "./menu-icon.html";

export const menuIcon = {
  template: template,
  bindings: {
    list: '<'
  },
  transclude: true,
  controllerAs: "vm",
  controller: class {

  }
};