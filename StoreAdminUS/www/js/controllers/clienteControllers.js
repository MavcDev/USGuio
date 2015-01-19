// Mavc

angular.module('cliente.controllers', [])

    .controller('listCliCtrl', function ($scope, $http, $ionicSideMenuDelegate, $cordovaSQLite, apiService) {
    	$scope.sideMenu = $ionicSideMenuDelegate;
        $scope.list = [];

        $scope.listar = function() {
           	$scope.list= [];        	
           	var query = "SELECT codigo_cliente,cedula, nombre,telefono,direccion FROM cliente";           	
            $cordovaSQLite.execute(db, query, []).then(function(res) {
                if(res.rows.length > 0) {
               	 	for(i =0;i < res.rows.length;i++){
               	 		$scope.list.push({codigo: res.rows.item(i).codigo_cliente, cedula: res.rows.item(i).cedula , nombre: res.rows.item(i).nombre,telefono: res.rows.item(i).telefono, direccion: res.rows.item(i).direccion}); 
               	 	}                	                      
                } 
            }, function (err) {
                console.error(err);
            });                               	      
		};                      
        $scope.listar();        
    })
    .controller('createCliCtrl', function ($scope, $http, $location,$cordovaSQLite, apiService) {
            	    	
    	$scope.model = {
    		codigo: null,
            cedula: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
        };
    	    	
        $scope.save = function(){
        	var query = "INSERT INTO cliente (cedula, nombre,telefono,direccion) VALUES (?,?,?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.cedula, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion]).then(function(res) {                
            }, function (err) {
                console.error(err);
            });      
        };

    })
    .controller('updateCliCtrl', function ($scope, $http, $cordovaSQLite,apiService) {
    	$scope.model = {
        	codigo: null,
            cedula: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
    	};
        
    });