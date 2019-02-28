import uiRouter from "angular-ui-router"
import ocLazyLoad from "oclazyload"
import './shellModule/shellModule.module'

export default angular.module('app', [
    'ui.router',
    uiRouter, 
    'oc.lazyLoad',
    ocLazyLoad,
    'shellModule'
])
.controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$log'];

function AppController($scope, $rootScope, $log) {
    const vm = this;
    vm.hello = "hello world!"
    vm.counter = 0
    vm.increment = increment

    vm.choice = ''
    vm.updateChoice = function($event, option) {
        $log.log('choice updated', $event.target.options[$event.target.selectedIndex], option)
    }

    vm.fruit = [
        {label: 'apple', value: 'apple'},
        {label: 'bannana', value: 'bannana'},
        {label: 'orange', value: 'orange'},
    ]

    function increment() {
        vm.counter += 1
    }
}

