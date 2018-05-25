const assert = require('assert');

describe('webdriver.io page', () => {
  beforeEach(function() {
    browser.url('http://localhost:3001');
    browser.setValue('#input__search', 'a');
    browser.pause(500);
    browser.click('#btn__search');
    browser.waitUntil(function () {
      return browser.element('[data-selector="search-results"]').state === 'success';
    }, 5000, 'expected to fetch results within 5s');
  })

  it('should find movies', async (done) => {
    const filmsFound = browser.getText('[data-id="total-found"]').split(' ');
    assert.equal(filmsFound[0] > 0, true);
  });
});
