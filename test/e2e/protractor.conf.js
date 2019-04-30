//const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [{
    browserName: 'firefox',
    'moz:firefoxOptions': {
      'prefs': {"dom.webnotifications.enabled":false}
    }
    }, {
     browserName: 'chrome',
     'chromeOptions': {
      'args': ['--disable-notifications=true']
     },
   
  }],
  baseUrl: "https://www.facebook.com/",
  specs: ["specs/*.spec.js"],
  onPrepare: () => {
    browser.waitForAngularEnabled(false)
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target'
      })
    );
  }
};
