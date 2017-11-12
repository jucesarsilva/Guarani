/**
 * @function controller for Contacts
 * @author julio_c.silva@outlook.com
 * @since 11/11/2017
 * @returns
 */
(function __BackToTopController(){
    
    'use strict';

    angular.module(modules.directives)
    .controller('BackToTopController', BackToTopController);
    
    BackToTopController.$inject = ['$scope', '$window', '$document']
    
    function BackToTopController($scope, $window, $document) {
        var _this = this;

        _this.btnScrollShow = false;

        _this.backToTop = function _backToTop() {
            var body = $("html, body");
            body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
        } 

        _this.init = function _init() {
            var doc = angular.element($document);
            doc.on('scroll', function() {
                if ($window.scrollY >= 100) {
                    $scope.$apply(function() {
                        _this.btnScrollShow = true;
                    });
                } else {
                    $scope.$apply(function() {
                        _this.btnScrollShow = false;
                    });
                }
            });
        }
    };
})();