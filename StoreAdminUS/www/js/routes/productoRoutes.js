angular.module('producto.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('producto', {
                url: '/producto',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('producto.list', {
                url: '',
                templateUrl: 'views/producto/list.html',
                controller: 'listCtrl',
                cache: false
            })
            .state('producto.create', {
                url: '/create',
                templateUrl: 'views/producto/create.html',
                controller: 'createCtrl',
                cache: false
            })
            .state('producto.update', {
                url: '/update/:id',
                templateUrl: 'views/producto/create.html',
                controller: 'updateCtrl',
                cache: false
            });
    });