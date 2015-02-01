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
	       		//$cordovaToast.show(err, 'long', 'center');
	       	});	       		           	      
    	};                          
    	$scope.listar();
        
    })
    .controller('createProveCtrl', function ($scope, $http, $location, $cordovaSQLite,$cordovaToast, apiService) {
            	  
    	$scope.btnName = 'Guardar';    	
    	$scope.model = {
    		codigo: '',
            nombre: '',
            telefono: '',
            direccion: '',
            estado : true
    	};        	    
    	
    	$scope.save = function(){
            var query = "INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono, direccion, estado) VALUES (?,?,?,?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.codigo, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion,Number($scope.model.estado)]).then(
            function(res) {
            	$cordovaToast.show('Se ha guardado con exito', 'long', 'center');
            	$location.path('/proveedor');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });                           
    	};

    })
    .controller('updateProveCtrl', function ($scope, $http, $location,$stateParams,$cordovaToast, $cordovaSQLite, apiService) {        
    	$scope.btnName = 'Modificar';    	
    	$scope.model = {
    		codigo: '',
            nombre: '',
            telefono: '',
            direccion: '',
            estado : true
    	};    	
    	$scope.buscar = function(){
    		var query = "SELECT codigo_proveedor, nombre_proveedor, telefono, direccion, estado FROM proveedor where codigo_proveedor=?";
	       	$cordovaSQLite.execute(db, query, [$stateParams.id]).then(function(res) {
	       		if(res.rows.length > 0) {
	       			 $scope.model.codigo = parseInt(res.rows.item(0).codigo_proveedor);
	       			 $scope.model.nombre = res.rows.item(0).nombre_proveedor;
	       			 $scope.model.telefono = res.rows.item(0).telefono;
	       			 $scope.model.direccion = res.rows.item(0).direccion;
                     $scope.model.estado = Boolean(res.rows.item(0).estado);
	       		} 
	       	}, function (err) {
	       		$cordovaToast.show(err, 'long', 'center');
	       	});	 
    		
    	};    	
    	$scope.save = function(){
            var query = "UPDATE proveedor set nombre_proveedor=?, telefono=?, direccion=?, estado=? where codigo_proveedor=?";
            $cordovaSQLite.execute(db, query, [$scope.model.nombre,$scope.model.telefono,$scope.model.direccion,Number($scope.model.estado),$scope.model.codigo]).then(
            function(res) {
            	$cordovaToast.show('Se ha guardado con exito', 'long', 'center');
            	$location.path('/proveedor');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });                            
    	};    	
    	$scope.buscar();    	
    });