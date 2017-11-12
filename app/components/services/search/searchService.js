/**
 * @function system messages
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __SearchService(){
    
    'use strict';

    angular
        .module(modules.services)
        .factory('SearchService', SearchService);

        SearchService.$inject = [];

    function SearchService() {
        var _data = null;
        var _query = null;
        var _pageToken = null;
        var _maxResults = null;

        var service = {
            get: get,
            set: set,
            clean: clean
        };

        function get() {
            return {
                data: _data,
                query: _query,
                pageToken: _pageToken,
                maxResults: _maxResults
            };
        };

        function set(query, data, pageToken, maxResults) {
            _query = query;
            _data = data;
            _pageToken = pageToken;
            _maxResults = maxResults;
        };

        function clean() {
            _query = null;
            _data = null;
            _pageToken = null;
            _maxResults = null;
        };

        return service;
    };
})();