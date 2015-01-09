angular.module('producto.controllers', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        //        $stateProvider
        //            .state('producto.sub', {
        //                url: '',
        //                //templateUrl: 'views/producto/index.html',
        //                //controller: 'mainCtrl',
        //                views: {
        //                    'view1@producto': {
        //                        templateUrl: 'views/producto/index.html',
        //                        controller: 'mainCtrl'
        //                    },
        //                    'view2@producto': {
        //                        templateUrl: 'views/producto/list.html',
        //                        controller: 'listCtrl'
        //                    }
        //                }
        //            });
        //        $urlRouterProvider.otherwise('/list');
    })
    .controller('mainCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.c = {
            find: '',
            b: false
        };
        $scope.sideMenu = $ionicSideMenuDelegate;
        $scope._view = 'view1';
        $scope.setView = function (s) {
            $scope._view = s;
        };
    })
    .controller('listCtrl', function ($scope, $http, apiService) {
        $scope.list = [];
        $scope.c = {
            find: '',
            b: false
        };
        //$scope.sideMenu = $ionicSideMenuDelegate;

        $http
            .get(apiService.baseUri + 'producto/')
            .success(function (data) {
                data.$values.forEach(function (item) {
                    item.v = true;
                })
                $scope.list = data.$values;
            });

        $scope.buscar = function () {
            console.log($scope.c.find);
            var re = new RegExp($scope.c.find, 'i');
            $scope.list.forEach(function (item) {
                /*var b = false;
                $scope.text
                    .split('\u0022')
                    .forEach(function (obj) {
                        b = re.test(item.concepto) || re.test(item.codigo);
                        if (b) return;
                    });*/
                item.v = re.test(item.concepto) || re.test(item.codigo);
            });
        };
    })
    .controller('createCtrl', function ($scope, $http, $location, $cordovaBarcodeScanner, apiService) {
        $scope.model = {
            codigo: null,
            concepto: null,
            decripcion: '',
            imagen: '',
            stopmin: 0,
            stopmax: 0,
            categoriaId: 1,
            unidadId: 1,
            estado: 1
        };

        $scope.save = function () {
            $http.post(apiService.baseUri + 'producto/', $scope.model)
                .success(function (data) {
                    $location.path('/');
                })
                .error(function (data) {
                    alert(data.Message);
                });
        };

        $scope.scan = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (result) {
                    // Success! Barcode data is here
                    $scope.model.codigo = parseInt(result.text);
                }, function (error) {
                    // An error occurred
                });
        };
    });