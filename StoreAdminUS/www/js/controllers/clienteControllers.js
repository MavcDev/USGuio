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
            	//$cordovaToast.show(err, 'long', 'center');
            });                               	      
		};                      
        $scope.listar();        
    })
    .controller('createCliCtrl', function ($scope, $http, $location,$cordovaSQLite,$cordovaToast, apiService) {
    	$scope.btnName = 'Guardar';  	    	
    	$scope.model = {
    		codigo: 0,
            cedula: '',
            nombre: '',            
            telefono: '',
            direccion: '',
            estado : true
        };
    	    	
        $scope.save = function(){
        	var query = "INSERT INTO cliente (cedula, nombre,telefono,direccion,estado) VALUES (?,?,?,?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.cedula, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion,Number($scope.model.estado)]).then(
            function(res) {
            	$cordovaToast.show('Se ha guardado con exito', 'long', 'center');
            	$location.path('/cliente');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });      
        };

    })
    .controller('updateCliCtrl', function ($scope, $http,$location, $stateParams,$cordovaToast, $cordovaSQLite,apiService) {
    	$scope.btnName = 'Modificar';
    	$scope.model = {
        	codigo: 0,
            cedula: '',
            nombre: '',            
            telefono: '',
            direccion: '',
            estado : true
    	};    	    
    	$scope.buscar = function(){
           	var query = "SELECT codigo_cliente, cedula, nombre,telefono,direccion,estado FROM cliente where codigo_cliente=?";
            $cordovaSQLite.execute(db, query, [$stateParams.id]).then(function(res) {
                if(res.rows.length > 0) {               	 
               	 	$scope.model.codigo= res.rows.item(0).codigo_cliente;
               	 	$scope.model.cedula =  parseInt(res.rows.item(0).cedula);
               	 	$scope.model.nombre = res.rows.item(0).nombre;
               	 	$scope.model.telefono = res.rows.item(0).telefono;
               	 	$scope.model.direccion= res.rows.item(0).direccion;
                    $scope.model.estado = Boolean(res.rows.item(0).estado);
                }               
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });  
    	};    	
    	$scope.save = function(){
    		var query = "UPDATE cliente set cedula=?, nombre=?,telefono=?,direccion=?,estado=? where codigo_cliente=?";
            $cordovaSQLite.execute(db, query, [$scope.model.cedula, $scope.model.nombre,$scope.model.telefono,$scope.model.direccion,Number($scope.model.estado),$scope.model.codigo]).then(
            function(res) {
            	$cordovaToast.show('Se ha modificado con exito', 'long', 'center');
            	$location.path('/cliente');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });       
        };          
        $scope.buscar();
    });


