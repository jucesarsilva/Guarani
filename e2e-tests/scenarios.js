'use strict';

describe('guarani', function() {

  it('deve redirecionar automaticamente para', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/search");
  });

  describe('search', function() {

    beforeEach(function() {
      browser.get('/#!/search');
    });

    it('Deve recuperar o título', function() {
        expect(browser.getTitle()).toEqual('guarani');
    });
  });
});
