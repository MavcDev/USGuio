// Mavc

angular.module('cliente.controllers', [])

	
	.config(function ($stateProvider) {


	})
	.controller('mainCliCtrl', function ($scope, $ionicSideMenuDelegate,$location) {
        $scope.sideMenu = $ionicSideMenuDelegate;        
        
    })
    .controller('listCliCtrl', function ($scope, $http, apiService) {
        $scope.list = [];

        $scope.c = {
            find: '',
            b: false
        };

        $scope.listar = function() {
        	$scope.list= [{nombre:'carlos',cedula:'1176543456'},{nombre:'pedro',cedula:'1118765456'}];
        	if($scope.list.length>0){
        		$scope.c.b=true;
        	}
		};
                      
        $scope.listar();
        
    })
    .controller('createCliCtrl', function ($scope, $http, $location, apiService) {
            	    	
    	$scope.model = {
    		codigo: null,
            cedula: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
        };
    	    	
        $scope.save = function(){
            console.log($scope.model);            
        };

    });