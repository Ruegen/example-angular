import uiRouter from "angular-ui-router"
import ocLazyLoad from "oclazyload"
import datatables from 'angular-datatables'
import angularAnimate from 'angular-animate'
import angularTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap'
import shellModule from './shell/shell.module'
import guiModule from './gui/gui.module'

// css
import css from './ui-bootstrap-csp.css'
import styles from './angular-datatables.css'

export default angular.module('app', [
    'ui.router',
    uiRouter, 
    'oc.lazyLoad',
    ocLazyLoad,
    'datatables',
    datatables,
    'shellModule',
    shellModule.name,
    'ngAnimate',
    angularAnimate,
    'ngTouch',
    angularTouch,
    'ui.bootstrap',
    uiBootstrap,
    'guiModule',
    guiModule.name
])
.controller('AppController', AppController)

AppController.$inject = ['$timeout','$scope', '$rootScope', 'DTOptionsBuilder', 'DTColumnBuilder', '$log'];

function AppController($timeout, $scope, $rootScope, DTOptionsBuilder, DTColumnBuilder, $log) {
    const vm = this;
    vm.hello = "hello world!"
    vm.counter = 0
    vm.increment = increment


    


    vm.choice = ''
    vm.updateChoice = function($event, option) {
        $log.log('choice updated', $event.target.options[$event.target.selectedIndex], option)
    }

    vm.fruit = [
        {text: 'apple', value: 'apple'},
        {text: 'bannana', value: 'bannana'},
        {text: 'orange', value: 'orange'},
    ]

    $timeout(function() {
        vm.fruit.push({text: 'strawberry', value: 'strawberry'})
    },3000)


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

