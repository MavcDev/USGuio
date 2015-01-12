// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'producto.controllers','proveedor.controllers','cliente.controllers'])
    .constant('apiService', {
        baseUri: 'http://192.168.1.31/inventariocc/api/'
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController',
                //                views: {
                //                  '@': {
                //                      templateUrl: 'views/home.html',
                //                      controller: 'homeController'
                //                  }
                //                }
            })
            .state('producto', {
                url: '/producto',
                abstract: true,
                templateUrl: 'views/producto/index.html',
                controller: 'mainCtrl'
            })
            .state('producto.list', {
                url: '',
                views: {
                    '_view': {
                        templateUrl: 'views/producto/list.html',
                        controller: 'listCtrl'
                    }
                }
            })
            .state('producto.create', {
                url: '',
                views: {
                    '_view': {
                        templateUrl: 'views/producto/create.html',
                        controller: 'createCtrl'
                    }
                }
            })

        //            .state('producto.sub', {
        //                url: '',
        //                views: {
        //                    'view1': {
        //                        templateUrl: 'views/producto/create.html'
        //                    },
        //                    'view2': {
        //                        templateUrl: 'views/producto/list.html',
        //                        controller: 'listCtrl'
        //                    }
        //                }
        //            });

        //router proveedor Mavc
        
        .state('proveedor', {
            url: '/proveedor',
            abstract: true,
            templateUrl: 'views/proveedor/index.html',
            controller: 'mainProveCtrl'
        })
        .state('proveedor.list', {
            url: '',
            views: {
                '_viewProve': {
                    templateUrl: 'views/proveedor/list.html',
                    controller: 'listProveCtrl'
                }
            }
        })
        .state('proveedor.create', {
            url: '',
            views: {
                '_viewProve': {
                    templateUrl: 'views/proveedor/create.html',
                    controller: 'createProveCtrl'
                }
            }
        })
        
        //
        
        //router cliente Mavc
        .state('cliente', {
            url: '/cliente',
            abstract: true,
            templateUrl: 'views/cliente/index.html',
            controller: 'mainCliCtrl'
        })
        .state('cliente.list', {
            url: '',
            views: {
                '_viewCli': {
                    templateUrl: 'views/cliente/list.html',
                    controller: 'listCliCtrl'
                }
            }
        })
        .state('cliente.create', {
            url: '',
            views: {
                '_viewCli': {
                    templateUrl: 'views/cliente/create.html',
                    controller: 'createCliCtrl'
                }
            }
        });
        
        //
        
        $urlRouterProvider.otherwise('/');
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('homeController', function ($scope) {
        var m = [
            {name: 'Producto',topic: 'producto'},
            {name: 'Proveedor',topic: 'proveedor'},
            {name: 'Cliente',topic: 'cliente'}
        ];
        $scope.items = m;
    });