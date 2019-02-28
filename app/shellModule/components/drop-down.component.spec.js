const {module} = angular.mock
const {inject} = angular.mock

describe('test component', function() {
    var ctrl, bindings, $componentController;
    var fruit = [
        {label: 'apple', value: 'apple'},
        {label: 'bannana', value: 'bannana'},
        {label: 'orange', value: 'orange'},
    ]

    beforeEach(module('app'))
    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_
    }))

    it('should have options', function(){
        bindings = {options: fruit}
        ctrl = $componentController('dropDown', null, bindings)
        expect(ctrl.options).toEqual(fruit)
        expect(ctrl.options.length).toBe(3)
    })
})