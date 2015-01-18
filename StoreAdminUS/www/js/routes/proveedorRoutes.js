angular.module('proveedor.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('proveedor', {
                url: '/proveedor',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('proveedor.list', {
                url: '',
                templateUrl: 'views/proveedor/list.html',
                controller: 'listProveCtrl',
                cache: false
            })
            .state('proveedor.create', {
                url: '/create',
                templateUrl: 'views/proveedor/create.html',
                controller: 'createProveCtrl',
                cache: false
            })
            .state('proveedor.update', {
                url: '/update/:id',
                templateUrl: 'views/proveedor/create.html',
                controller: 'updateProveCtrl',
                cache: false
            })
        
    });