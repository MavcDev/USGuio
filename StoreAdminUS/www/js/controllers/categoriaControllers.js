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
            	//$cordovaToast.show(err, 'long', 'center');
            });       	
		};
                      
        $scope.listar();
        
    })
    .controller('createCateCtrl', function ($scope, $http, $location,$cordovaSQLite,$cordovaToast, apiService) {
            	    	
    	$scope.btnName = 'Guardar';  
    	$scope.model = {
            codigo: null,
            nombre: null                               
        };
    	    	
        $scope.save = function(){
        	var query = "INSERT INTO categoria (nombre_categoria) VALUES (?)";
            $cordovaSQLite.execute(db, query, [$scope.model.nombre]).then(
            function(res) {
            	$cordovaToast.show('Se ha guardado con exito', 'long', 'center');
            	$location.path('/categoria');
            }, function (err) {
            	 $cordovaToast.show(err, 'long', 'center');            	    
            });            
        };

    })
    .controller('updateCateCtrl', function ($scope, $http, $stateParams,$cordovaSQLite,$cordovaToast,apiService) {
    	    	
    	$scope.btnName = 'Modificar';
    	$scope.model = {
    		codigo: null,
    		nombre: null                               
    	};
    	
    	$scope.buscar = function(){
    		var query = "SELECT codigo_categoria,nombre_categoria FROM categoria where codigo_categoria=?";
            $cordovaSQLite.execute(db, query, [$stateParams.id]).then(function(res) {
                if(res.rows.length > 0) {
                	$scope.model.codigo= res.rows.item(0).codigo_categoria;
                	$scope.model.nombre = res.rows.item(0).nombre_categoria;               	 		               	 	                	                     
                } 
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });
    	};
    	    	    	
    	$scope.save = function(){
    		var query = "UPDATE categoria set nombre_categoria=? where codigo_categoria=?";
            $cordovaSQLite.execute(db, query, [$scope.model.nombre,$scope.model.codigo]).then(
            function(res) {
            	$cordovaToast.show('Se ha modificado con exito', 'long', 'center');
            	$location.path('/categoria');
            }, function (err) {
            	 $cordovaToast.show(err, 'long', 'center');            	    
            });              
        };        
        
        $scope.buscar();
        
    });