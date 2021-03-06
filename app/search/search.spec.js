describe('SearchController ->', function () {

    var $scope;
    var SearchController;
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
        SearchController = $controller('SearchController', { $scope: $scope });
    }));

    describe('verificar se functions estão definidas --> ', function () {
        it("deve existir o método 'init()' ", function () {
            expect(SearchController.init).toBeDefined();
		});	

        it("deve existir o método 'goToDetail()' ", function () {
            expect(SearchController.goToDetail).toBeDefined();
        }); 

        it("deve existir o método 'loadMore()' ", function () {
           expect(SearchController.loadMore).toBeDefined();
        });
        
        it("deve existir o método 'checkDataLength()' ", function () {
            expect(SearchController.checkDataLength).toBeDefined();
        });

        it("deve existir o método 'reset()' ", function () {
            expect(SearchController.reset).toBeDefined();
        });

        it("deve existir o método 'keyup()' ", function () {
            expect(SearchController.keyup).toBeDefined();
        });

        it("deve existir o método 'filter()' ", function () {
            expect(SearchController.filter).toBeDefined();
        });

        it("deve existir o método 'search()' ", function () {
            expect(SearchController.search).toBeDefined();
        });
	});
});