angular.module('impuesto.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('impuesto', {
                url: '/impuesto',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('impuesto.list', {
                url: '',
                templateUrl: 'views/impuesto/list.html',
                controller: 'listImpuCtrl',
                cache: false
            })
            .state('impuesto.create', {
                url: '/create',
                templateUrl: 'views/impuesto/create.html',
                controller: 'createImpuCtrl',
                cache: false
            })
            .state('impuesto.update', {
                url: '/update/:id',
                templateUrl: 'views/impuesto/create.html',
                controller: 'updateImpuCtrl',
                cache: false
            });
            
    });