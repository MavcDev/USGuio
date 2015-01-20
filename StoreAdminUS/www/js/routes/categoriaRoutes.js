angular.module('categoria.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('categoria', {
                url: '/categoria',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('categoria.list', {
                url: '',
                templateUrl: 'views/categoria/list.html',
                controller: 'listCateCtrl',
                cache: false
            })
            .state('categoria.create', {
                url: '/create',
                templateUrl: 'views/categoria/create.html',
                controller: 'createCateCtrl',
                cache: false
            })
            .state('categoria.update', {
                url: '/update/:id',
                templateUrl: 'views/categoria/create.html',
                controller: 'updateCateCtrl',
                cache: false
            });
            
    });