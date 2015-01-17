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
                controller: 'listCtrl',
                cache: false
            })
            .state('proveedor.create', {
                url: '/create',
                templateUrl: 'views/proveedor/create.html',
                controller: 'createCtrl',
                cache: false
            });
    });