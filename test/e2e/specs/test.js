// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser.url(browser.globals.url)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.logo')
      .assert.elementNotPresent('h1')
      .assert.elementCount('p', 4)
      .end();
  },

  'login page': browser => {
    browser.url(browser.globals.url + 'login')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.logo')
      .assert.containsText('h1', 'Hello World!')
      .assert.elementCount('p', 4)
      .end();
  }
};
