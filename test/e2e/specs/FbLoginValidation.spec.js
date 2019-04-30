const HomePage = require("../page-objects/HomePage");
const LoginPage = require("../page-objects/LoginPage");

let lPage;
let hPage;

describe('facebook login validation', function() {

  beforeEach(function() {

    lPage = new LoginPage();
    hPage = new HomePage();

    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);

  });

    it('should login to facebook', function() {

      lPage.dologin('your username here','123@2019$');
      expect(hPage.postMsg.isDisplayed()).toBe(true);
      hPage.doLogout();
      expect(lPage.emailField.isDisplayed()).toBe(true);
    });

  it('should not login to facebook', function() {    
    lPage.dologin('bad username','123@2019$');
    expect(lPage.emailField.isDisplayed()).toBe(true);
  });


});
