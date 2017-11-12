/**
 * @function controller for Contacts
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __SearchController(){
    
    'use strict';

    angular.module(modules.search, ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages'])

    .controller('SearchController', SearchController);
    
    SearchController.$inject = ['$scope', '$notification', '$timeout', 'SearchResource', '$window', '$location', 'SearchService']
    
    function SearchController($scope, $notification, $timeout, SearchResource, $window, $location, SearchService) {
        var _this = this;

        _this.searchForm;
        _this.offset = 200;
        _this.pageToken = true;
        _this.query = '';
        _this.youtubeData = [];
        _this.maxResults = 3;
        _this.pages = [
            3,
            5,
            10,
            20,
            30
        ];

        _this.search = function _search(query) {
            SearchResource.search(_this.query, _this.pageToken, _this.maxResults).then(function(result) {
                if (result.data.items.length === 0) {
                    _this.reset();
                    $notification.info('',  'Nenhum resultado encontrado!');
                    return false;
                }
                _this.youtubeData = _this.youtubeData.concat(result.data.items);
                _this.pageToken = result.data.nextPageToken;
                SearchService.set(_this.query, _this.youtubeData, _this.pageToken, _this.maxResults);
            }).catch(function(result) {
                _this.reset();
                $notification.error('',  'Erro na comunicação com o servidor!');
            });
        };

        _this.filter = function _filter(query) {
            _this.youtubeData = [];
            _this.search(query);
        }

        _this.keyup = function _keyup(event, query) {
            if (!_this.searchForm) {
                return false;
            } else if (_this.searchForm.$invalid) {
                return false;
            } else if (event.keyCode === 13) {
                _this.filter(query);
            }
        }

        _this.reset = function _reset(){
            _this.youtubeData = [];
        }

        _this.checkDataLength = function _checkDataLength(data){
            return (data.length >= 1);
        };
     
        _this.loadMore = function _loadMore(nextPage){
            _this.nextPage = nextPage;
            _this.search(_this.query);
        };

        _this.goToDetail = function _goToDetail(id) {
            if (id) {
                $location.path("/detail/" + id);
            } else {
                $notification.alert('',  'Este vídeo possui o id corrompido!');
            }
        };

        _this.init = function _init() {
            var historical = SearchService.get();
            if (historical.data) {
                _this.youtubeData = historical.data;
                _this.query = historical.query;
                _this.pageToken = historical.pageToken;
                _this.maxResults = historical.maxResults;
            }
        }
    };
})();