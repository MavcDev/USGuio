// Mavc

angular.module('proveedor.controllers', [])

	
	.config(function ($stateProvider) {


	})
	.controller('mainProveCtrl', function ($scope, $ionicSideMenuDelegate,$location) {
        $scope.sideMenu = $ionicSideMenuDelegate;        
        
    })
    .controller('listProveCtrl', function ($scope, $http, apiService) {
        $scope.list = [];

        $scope.c = {
            find: '',
            b: false
        };

        $scope.listar = function() {
        	$scope.list= [{nombre:'carlos',codigo:'01'},{nombre:'pedro',codigo:'02'}];
        	if($scope.list.length>0){
        		$scope.c.b=true;
        	}
		};
                      
        $scope.listar();
        
    })
    .controller('createProveCtrl', function ($scope, $http, $location, apiService) {
            	    	
    	$scope.model = {
            codigo: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
        };
    	    	
        $scope.save = function(){
            console.log($scope.model);            
        };

    });