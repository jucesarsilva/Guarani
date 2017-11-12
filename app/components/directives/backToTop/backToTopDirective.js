/**
 * @function component for backToTop
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __backToTop(){
    'use strict';

    angular
    .module(modules.directives)
    .directive("backToTop", backToTop);

    function backToTop() {
        return {
            restrict: 'E',
            templateUrl:'components/directives/backToTop/backToTop.html',
            controller: 'BackToTopController',
            controllerAs: 'backToTopController',
            bindToController: true
        }
    }
})();