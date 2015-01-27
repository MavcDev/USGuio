// Mavc

angular.module('impuesto.controllers', [])

	
    .controller('listImpuCtrl', function ($scope, $http, $ionicSideMenuDelegate, $cordovaSQLite, apiService) {
    	$scope.sideMenu = $ionicSideMenuDelegate;
    	$scope.list = [];        
        $scope.listar = function() {
           	var query = "SELECT codigo_impuesto,concepto, gravamen FROM impuesto";           	
            $cordovaSQLite.execute(db, query, []).then(function(res) {
                if(res.rows.length > 0) {
               	 	for(i =0;i < res.rows.length;i++){
               	 		$scope.list.push({codigo: res.rows.item(i).codigo_impuesto, concepto: res.rows.item(i).concepto , gravable: res.rows.item(i).gravamen}); 
               	 	}                	                      
                } 
            }, function (err) {
            	//$cordovaToast.show(err, 'long', 'center');
            });  
		};                      
        $scope.listar();
        
    })
    .controller('createImpuCtrl', function ($scope, $http, $location,$cordovaSQLite,$cordovaToast, apiService) {            	    
    	$scope.btnName = 'Guardar';    	    	
    	$scope.model = {
            codigo: null,
            concepto: null,            
            gravamen: 0                               
        };    	    
        $scope.save = function(){
        	var query = "INSERT INTO impuesto (concepto, gravamen) VALUES (?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.concepto,$scope.model.gravamen]).then(
            function(res) {
            	$cordovaToast.show('Se ha guardado con exito', 'long', 'center');
            	$location.path('/impuesto');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });   
        };

    })
	.controller('updateImpuCtrl', function ($scope, $http, $location,$stateParams,$cordovaToast, $cordovaSQLite,apiService) {
		$scope.btnName = 'Modificar';
		$scope.model = {
			codigo: null,
			concepto: null,            
			gravamen: 0                               
		};		
		$scope.buscar = function(){
           	var query = "SELECT codigo_impuesto,concepto, gravamen FROM impuesto where codigo_impuesto=?";           	
            $cordovaSQLite.execute(db, query, [$stateParams.id]).then(function(res) {
                if(res.rows.length > 0) {               	 
               	 	$scope.model.codigo = res.rows.item(0).codigo_impuesto;
               	 	$scope.model.concepto = res.rows.item(0).concepto;
               	 	$scope.model.gravamen =  res.rows.item(0).gravamen;                	 	                	                     
                } 
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });  
		};		
		$scope.save = function(){
        	var query = "UPDATE impuesto set concepto=?, gravamen=? where codigo_impuesto=?";
            $cordovaSQLite.execute(db, query, [$scope.model.concepto,$scope.model.gravamen,$scope.model.codigo]).then(
            function(res) {
            	$cordovaToast.show('Se ha modificado con exito', 'long', 'center');
            	$location.path('/impuesto');
            }, function (err) {
            	$cordovaToast.show(err, 'long', 'center');
            });   
		};  		
		$scope.buscar();
	});
