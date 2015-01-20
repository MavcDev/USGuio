// Mavc

angular.module('categoria.controllers', [])

	
    .controller('listCateCtrl', function ($scope, $http, $ionicSideMenuDelegate, $cordovaSQLite, apiService) {
    	$scope.sideMenu = $ionicSideMenuDelegate;
    	$scope.list = [];

        $scope.listar = function() {
        	$scope.list= [];        	
       	 	var query = "SELECT codigo_categoria,nombre_categoria FROM categoria";
            $cordovaSQLite.execute(db, query, []).then(function(res) {
                if(res.rows.length > 0) {
               	 	for(i =0;i < res.rows.length;i++){
               	 		$scope.list.push({codigo: res.rows.item(i).codigo_categoria, nombre: res.rows.item(i).nombre_categoria}); 
               	 	}                	                      
                } 
            }, function (err) {
                console.error(err);
            });       	
		};
                      
        $scope.listar();
        
    })
    .controller('createCateCtrl', function ($scope, $http, $location,$cordovaSQLite, apiService) {
            	    	
    	$scope.btnName = 'Guardar';  
    	$scope.model = {
            codigo: null,
            nombre: null                               
        };
    	    	
        $scope.save = function(){
        	var query = "INSERT INTO categoria (nombre_categoria) VALUES (?)";
            $cordovaSQLite.execute(db, query, [$scope.model.nombre]).then(function(res) {
            }, function (err) {
                console.error(err);
            });
            console.log($scope.model);            
        };

    })
    .controller('updateCateCtrl', function ($scope, $http, $cordovaSQLite,apiService) {
    	
    	$scope.btnName = 'Modificar';
    	$scope.model = {
    		codigo: null,
    		nombre: null                               
    	};
    	
    	$scope.save = function(){
        	      
        };        
    });