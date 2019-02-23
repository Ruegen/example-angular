// angular is loaded in globally from the karma

describe('test module', function() {
    var ctrl, scope;
    beforeEach(angular.mock.module('app'))
    beforeEach(angular.mock.inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('shellController', {$scope: scope})
    }))
    it('should be a controller', function(){
        expect(scope.list.length).toBe(3)
    })
})
