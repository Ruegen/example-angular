
import template from './drop-down.component.html'

export const dropDown = {
    template: template,
    bindings: {
        options: '=',
        handleChange: '='
    },
    controllerAs: 'vm',
    controller: class {

        constructor() {
            this.option = null
        }
    }
}