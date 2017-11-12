/**
 * @function system data retrieve
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __SearchResource() {
    
    'use strict';

    angular
        .module(modules.services)
        .factory('SearchResource', SearchResource);

    SearchResource.$inject = ['$http'];

    function SearchResource($http) {
        return {
            search: function(query, pageToken, maxResults) {
                return $http.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyCmPoX3Je3fm6vPtI0JiqeTJ6HOI9vGohU',
                        type: 'video',
                        maxResults: maxResults,
                        pageToken: pageToken ? pageToken : '',
                        part: 'id,snippet',
                        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
                        q: query
                    }
                });
            }
        };
    };
})();