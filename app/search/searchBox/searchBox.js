/**
 * @function component for search
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __SearchBox(){
    'use strict';

    angular
    .module(modules.search)
    .directive("searchBox", searchBox);

    function searchBox() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl:'search/searchBox/searchBox.html',
            link:function(scope, elem, attrs) {}
        }
    }
})();