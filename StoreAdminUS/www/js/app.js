

var db = null;


angular.module('starter', [
    'ionic',
    'ngCordova',
    'producto.controllers',
    'producto.routes',
    'proveedor.controllers',
    'proveedor.routes',
    'cliente.controllers',
    'cliente.routes',
    'categoria.controllers',
    'categoria.routes',
    'impuesto.controllers',
    'impuesto.routes'
    ])
    .constant('apiService', {
        baseUri: 'http://192.168.1.10/inventariocc/api/'
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            });
        $urlRouterProvider.otherwise('/');
    })
    .run(function ($ionicPlatform,$cordovaSQLite) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            
            db = $cordovaSQLite.openDB({ name: "storeAdminUS.db" });            

            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS proveedor (codigo_proveedor text primary key, nombre_proveedor text, telefono text, direccion text)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS cliente (codigo_cliente integer  primary key, cedula text, nombre text, telefono text, direccion text)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS impuesto (codigo_impuesto integer  primary key, concepto text, gravamen integer)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS categoria (codigo_categoria integer  primary key, nombre_categoria text");
            
        });
    })
    .controller('homeController', function ($scope) {
        var m = [
            {
                name: 'Producto',
                topic: 'producto'
            },
            {
                name: 'Proveedor',
                topic: 'proveedor'
            },
            {
                name: 'Cliente',
                topic: 'cliente'
            },
            {
            	name: 'Impuesto',
                topic: 'impuesto'
            },
            {
            	name: 'Categoria',
                topic: 'categoria'
            }            
        ];
        $scope.items = m;
    });