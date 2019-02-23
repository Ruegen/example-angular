import uiRouter from "angular-ui-router"
import './shellModule/shellModule.module'

export default angular.module('app', [
    'ui.router',
    uiRouter, 
    'shellModule'
])
.controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope'];

function AppController($scope, $rootScope) {
    const vm = this;
    vm.hello = "hello world!"
    vm.counter = 0
    vm.increment = increment

    function increment() {
        vm.counter += 1
    }
}

