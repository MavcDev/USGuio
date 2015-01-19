// Mavc

angular.module('proveedor.controllers', [])
	
    .controller('listProveCtrl', function ($scope, $http,$ionicSideMenuDelegate, $cordovaSQLite, apiService) {
    	$scope.sideMenu = $ionicSideMenuDelegate;
    
    	$scope.listar = function() {
	        $scope.list= [];        	 
	       	var query = "SELECT codigo_proveedor, nombre_proveedor, telefono, direccion FROM proveedor";
	       	$cordovaSQLite.execute(db, query, []).then(function(res) {
	       		if(res.rows.length > 0) {
	       			for(i =0;i < res.rows.length;i++){
	       				$scope.list.push({codigo: res.rows.item(i).codigo_proveedor, nombre: res.rows.item(i).nombre_proveedor,telefono: res.rows.item(i).telefono , direccion: res.rows.item(i).direccion}); 
	       			}                	                      
	       		} 
	       	}, function (err) {
	       		console.error(err);
	       	});	       		           	      
    	};                          
    	$scope.listar();
        
    })
    .controller('createProveCtrl', function ($scope, $http, $location, $cordovaSQLite, apiService) {
            	  
    	$scope.btnName = 'Guardar';    	
    	$scope.model = {
    		codigo: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
    	};        	    
    	
    	$scope.save = function(){
            var query = "INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono, direccion) VALUES (?,?,?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.codigo, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion]).then(function(res) {            	
            }, function (err) {
            	console.error(err);
            });                           
    	};

    })
    .controller('updateProveCtrl', function ($scope, $http, $location, $cordovaSQLite, apiService) {
        
    	$scope.btnName = 'Modificar';
    	
    	$scope.model = {
    		codigo: null,
            nombre: null,            
            telefono: '',
            direccion: ''                    
    	};
    	
    	$scope.save = function(){
            /*var query = "INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono, direccion) VALUES (?,?,?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.codigo, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion]).then(function(res) {            	
            }, function (err) {
            	console.error(err);
            });
            */                           
    	};

    });