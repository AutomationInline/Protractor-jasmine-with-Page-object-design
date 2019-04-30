
const helper = require("protractor-helper");

class LoginPage {
  
    constructor() {

        this._emailField = element(by.id("email"));
        this._passwordField = element(by.id("pass"));
        this._loginBtn = element(by.css('#loginbutton > input'));

    }
    
      get emailField(){

        return this._emailField;
      }
      get passwordField(){

        return this._passwordField;
      }

      get loginBtn(){

        return this._loginBtn;
      }

      


       dologin(uname,pass){
        helper.fillFieldWithText(this.emailField, uname);
        helper.fillFieldWithText(this.passwordField, pass);
        helper.click(this.loginBtn);
      }
      
    
  }
  
module.exports = LoginPage;