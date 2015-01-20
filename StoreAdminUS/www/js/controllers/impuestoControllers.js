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
                console.error(err);
            });  
		};
                      
        $scope.listar();
        
    })
    .controller('createImpuCtrl', function ($scope, $http, $location,$cordovaSQLite, apiService) {
            	    	
    	$scope.btnName = 'Guardar';    	    	
    	$scope.model = {
            codigo: null,
            concepto: null,            
            gravamen: 0                               
        };
    	    	
        $scope.save = function(){
        	var query = "INSERT INTO impuesto (concepto, gravamen) VALUES (?,?)";
            $cordovaSQLite.execute(db, query, [$scope.model.concepto,$scope.model.gravamen]).then(function(res) {                
            }, function (err) {
                console.error(err);
            });   
        };

    })
	.controller('updateImpuCtrl', function ($scope, $http, $cordovaSQLite,apiService) {
		$scope.btnName = 'Modificar';
		$scope.model = {
			codigo: null,
			concepto: null,            
			gravamen: 0                               
		};
		
		$scope.save = function(){
    	      
		};        
	});
