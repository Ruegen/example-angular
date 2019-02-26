// angular is loaded in globally from the karma
const {module} = angular.mock
const {inject} = angular.mock

describe('test module', function() {
    var ctrl, scope;
    beforeEach(module('app'))
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('shellController', {$scope: scope})
    }))
    it('should be a controller', function(){
        expect(scope.list.length).toBe(3)
    })
})
