
const helper = require("protractor-helper");

class HomePage{

constructor(){

    this._postMsg = element(by.css("textarea[title*='on your mind']"));
    this._logOutMenu = element(by.css('#logoutMenu'))
    this._logOutLnk = element(by.css("ul[role='menu'] li:nth-of-type(8)"));

}

get postMsg(){
    return this._postMsg;
}
get logOutMenu(){
    return this._logOutMenu;
}
get logOutLnk(){
    return this._logOutLnk;
}


doLogout(){
    helper.click(this.logOutMenu);
    helper.click(this.logOutLnk);
}




}

module.exports =HomePage;
