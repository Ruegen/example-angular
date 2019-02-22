import uiRouter from "angular-ui-router"

export default angular.module('app', ['ui.router',uiRouter])
    .controller('AppController', AppController);

AppController.$inject = ['$scope'];

function AppController($scope) {
    const vm = this;
    vm.hello = "hello world!"
    vm.counter = 0
    vm.increment = increment
    // alert('hello world')

    function increment() {
        vm.counter += 1
    }
}

