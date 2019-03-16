import shellController from './controllers/list.controller'
import { dropDown } from './components/drop-down.component'
import { popUp } from './components/pop-up.component';

export default angular.module('shellModule', [])
                        .controller('shellController', shellController)
                        .component('dropDown', dropDown)
                        .component('popUp', popUp)


