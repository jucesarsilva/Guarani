/**
 * @function main module
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __guarani(){
    
    'use strict';
    
    angular.module(modules.main, ['ngRoute',
      modules.search,
      modules.detail,
      modules.directives,
      modules.filters,
      modules.services
    ])
    .config(Config);
    
    Config.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];
    
    function Config($locationProvider, $routeProvider, $httpProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/search', {
            templateUrl: 'search/search.html',
            controller: 'SearchController',
            controllerAs: 'searchController'
        })
        .when('/detail/:id', {
            templateUrl: 'detail/detail.html',
            controller: 'DetailController',
            controllerAs: 'detailController'
        })
        .otherwise({redirectTo: '/search'});
    };
    
})();