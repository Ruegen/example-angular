shellController.$inject = ['$rootScope']

function shellController($rootScope) {
    $rootScope.list = ['eggs', 'bananas', 'apples']
}

export default shellController

