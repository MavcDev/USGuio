// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'producto.controllers'])
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
            });

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
        var m = [{
            name: 'Producto',
            topic: 'producto'
        }];
        $scope.items = m;
    });