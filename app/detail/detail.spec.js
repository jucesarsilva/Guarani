describe('DetailController ->', function () {
    
        var $scope;
        var DetailController;
        var $document;
        var $controller;
        var $notification;
        var $compile;
        var $rootScope;
    
        angular.mock.module.sharedInjector();
        beforeAll(angular.mock.module('ngRoute'));
        beforeAll(angular.mock.module('ngMaterial'));
        beforeAll(angular.mock.module('ngMaterial'));
        beforeAll(angular.mock.module(modules.directives));
        beforeAll(angular.mock.module(modules.services));
        beforeAll(angular.mock.module(modules.filters));
        beforeAll(angular.mock.module(modules.search));
        beforeAll(angular.mock.module(modules.detail));
    
        beforeAll(angular.mock.inject(function(_$document_, _$rootScope_, _$controller_, _$notification_, _$compile_){
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $notification = _$notification_;
            $compile = _$compile_;
            $scope = $rootScope.$new();
            DetailController = $controller('DetailController', { $scope: $scope });
        }));
    
        describe('verificar se functions estão definidas --> ', function () {
            it("deve existir o método 'init()' ", function () {
                expect(DetailController.init).toBeDefined();
            });	
    
            it("deve existir o método 'initPlayer()' ", function () {
                expect(DetailController.initPlayer).toBeDefined();
            });

            it("deve existir o método 'backPage()' ", function () {
                expect(DetailController.backPage).toBeDefined();
            });
        });
    });