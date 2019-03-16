import angular from 'angular'
import {menuIcon} from './components/menu-icon.component'
import {menuIconList} from './components/menu-icon-list.component'

export default angular.module('guiModule', [])
            .component('menuIcon', menuIcon)
            .component('menuIconList', menuIconList)
