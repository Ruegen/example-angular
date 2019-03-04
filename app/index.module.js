import uiRouter from "angular-ui-router"
import ocLazyLoad from "oclazyload"
import datatables from 'angular-datatables'
import angularAnimate from 'angular-animate'
import angularTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap'
import './shellModule/shellModule.module'

export default angular.module('app', [
    'ui.router',
    uiRouter, 
    'oc.lazyLoad',
    ocLazyLoad,
    'datatables',
    datatables,
    'shellModule',
    'ngAnimate',
    angularAnimate,
    'ngTouch',
    angularTouch,
    'ui.bootstrap',
    uiBootstrap
])
.controller('AppController', AppController)

AppController.$inject = ['$scope', '$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log'];

function AppController($scope, $rootScope, DTOptionsBuilder, DTColumnBuilder, $log) {
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


    vm.tableData = [
        {first_name: 'John', last_name: 'Appleseed'},
        {first_name: 'Sylvester', last_name: 'Stallone'}
    ]

    vm.columnHeaders = [
        'First Name',
        'Last Name'
    ]

    
    vm.dtColumnsDefs = [
        DTColumnBuilder.newColumn('first_name').withTitle("First Name"),
        DTColumnBuilder.newColumn('last_name').withTitle("Last Name"),
    ]
 
    vm.dtOptions = DTOptionsBuilder.newOptions()
 
    vm.tableRows = function() {
        return vm.tableData.map(row => {
            return Object.keys(row).map(k => row[k])
        })
    }


    function increment() {
        vm.counter += 1
    }
}

