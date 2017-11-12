/**
 * @function system data retrieve
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __DetailResource() {
    
    'use strict';

    angular
        .module(modules.services)
        .factory('DetailResource', DetailResource);

    DetailResource.$inject = ['$http'];

    function DetailResource($http) {
        return {
            getVideo: function(id) { 
                return $http.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        key: 'AIzaSyCmPoX3Je3fm6vPtI0JiqeTJ6HOI9vGohU',
                        part: 'snippet,statistics',
                        id: id
                    }
                });
            }
        };
    };
})();