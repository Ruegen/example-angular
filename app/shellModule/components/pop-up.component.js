import template from "html-loader!./pop-up.component.html";

export const popUp = {
  template: template,
  bindings: {
    modalInstance: "<",
    resolve: "<"
  },
  controllerAs: "vm",
  controller: class {

    $onInit() {
      this.fileTypes = this.resolve.fileTypes;
    }
  }
};
