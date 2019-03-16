shellController.$inject = ["$rootScope", "$uibModal"];

function shellController($rootScope, $uibModal) {
  $uibModal.open({
    component: "popUp",
    backdrop: false,  
    bindings: {
        modalInstance: "<",
        resolve: '<',
    },  
    resolve: {
        fileTypes: function() {
            return ['1', '2']
        }
    }
    
  });

  $rootScope.list = ["eggs", "bananas", "apples"];
}

export default shellController;
