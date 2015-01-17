angular.module('cliente.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cliente', {
                url: '/cliente',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('cliente.list', {
                url: '',
                templateUrl: 'views/cliente/list.html',
                controller: 'listCtrl',
                cache: false
            })
            .state('cliente.create', {
                url: '/create',
                templateUrl: 'views/cliente/create.html',
                controller: 'createCtrl',
                cache: false
            });
    });