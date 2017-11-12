/**
 * @function controller for Deatil
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __DetailController() {
    
    'use strict';

    angular.module(modules.detail, ['ngRoute', 'ngMaterial', 'ngMessages'])
    .controller('DetailController', DetailController);
    
    DetailController.$inject = ['$scope', '$notification', '$window', '$timeout', 'DetailResource', '$routeParams', '$sce']
    
    function DetailController($scope, $notification,  $window, $timeout, DetailResource, $routeParams, $sce) {
        var _this =  this;

        var player;

        _this.init = function() {
            if ($routeParams.id) {
                DetailResource.getVideo($routeParams.id).then(function(result) {
                    if (result.data === null || result.data === undefined ||
                        result.data.items === null || result.data.items === undefined ||
                        result.data.items.length === 0 ||
                        result.data.items[0].id === null || result.data.items[0].id === undefined) {
                        $notification.info('', 'Dados corrompidos retornados pelo servidor!');
                    }
                    _this.youTubeData = result.data.items[0];
                    _this.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + result.data.items[0].id + '?enablejsapi=1&origin=http://localhost:8000');
                    _this.initPlayer();
                }).catch(function() {
                    $notification.error('', 'Problemas nas comunicação com o servidor!');
                });
            } else {
                $notification.alert('', 'O id especificado não é válido!');
            }
        };

        _this.initPlayer = function _initPlayer() {
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                  height: '390',
                  width: '640',
                  videoId: result.data.items[0].id
                });
            }
        }

        _this.backPage = function _backPage() {
            $window.history.back();
        }
    }; 
})();