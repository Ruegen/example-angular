import angular from './index.module'

describe('main app module', function() {
    var ctrl, scope;
    beforeEach(module('app'))
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AppController', {$scope: scope})
    })) 

    it('should be a valid module', function(){
        expect(ctrl.hello).toBe("hello world!")
    })

    it('should have a valid function', function() {
        ctrl.increment()
        expect(ctrl.counter).toBe(1)
    })
})