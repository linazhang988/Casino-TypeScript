var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(name, money) {
        this.name = name;
        this.money = money;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getMoney = function () {
        return this.money;
    };
    return Player;
}());
var WebPageInteraction = /** @class */ (function () {
    function WebPageInteraction() {
        this.verifyEntry = false;
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("submit");
    }
    WebPageInteraction.getInstance = function () {
        if (!WebPageInteraction.instance) {
            WebPageInteraction.instance = new WebPageInteraction();
            // ... any one time initialization goes here ...
        }
        return WebPageInteraction.instance;
    };
    WebPageInteraction.prototype.displayToWebpage = function (input) {
        this.displayElement = document.getElementById("display");
        this.displayElement.innerHTML += "<br/>";
        this.displayElement.innerHTML += input;
        this.displayElement.innerHTML += "<br/>";
    };
    // setOnClickAttribute(newOnClickValue) : void {
    //     //this.userInputElement.setAttribute("OnClick", newOnClickValue);
    //     this.userInputElement = document.getElementById("submit");
    // }
    WebPageInteraction.prototype.setOnClickAttribute = function () {
        //this.userInputElement.setAttribute("OnClick", newOnClickValue);
        this.userInputElement = document.getElementById("user_input");
        WebPageInteraction.getInstance().displayToWebpage(this.userInputElement.value);
        return true;
    };
    return WebPageInteraction;
}());
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());
///<reference path="Menu.ts"/>
var UserCreationMenu = /** @class */ (function (_super) {
    __extends(UserCreationMenu, _super);
    function UserCreationMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserCreationMenu.prototype.menuTitle = function () {
        var welcomeString = "User Creation Menu<br\>" +
            "========================================<br/>";
        return welcomeString;
    };
    UserCreationMenu.prototype.casinoMenu = function () {
        var outputString = "Casino Menu<br\>" +
            "========================================<br>" +
            "What would you like to play?<br>" +
            "1) BlackJack<br>" +
            "2) Craps<br>" +
            "3) Go Fish<br>";
        return outputString;
    };
    UserCreationMenu.prototype.createNewPlayer = function () {
        var playerName = prompt("Please enter a username.");
        var amountOfMoney = parseInt(prompt("Please enter the amount of money you have."));
        var aPlayer = new Player(playerName, amountOfMoney);
        console.log(aPlayer);
        Casino.setAPlayer(aPlayer);
        WebPageInteraction.getInstance().displayToWebpage("Your account has been created.");
        console.log("Your account has been created.");
        //CasinoMenu.INSTANCE.display();
    };
    return UserCreationMenu;
}(Menu));
/// <reference path="Player.ts" />
/// <reference path="WebPageInteraction.ts" /> 
/// <reference path="UserCreationMenu.ts" />
var userCreationMenu = new UserCreationMenu();
WebPageInteraction.getInstance().displayToWebpage(userCreationMenu.menuTitle());
console.log(userCreationMenu.menuTitle());
var userInputButton = document.getElementById("userInput");
var currentUserInfo = document.getElementById("currentUserInfo");
currentUserInfo.hidden = true;
userInputButton.hidden = true;
var submitButton = document.getElementById("submitButton");
var newUserForm = document.getElementById("newUserForm");
var aPlayer;
submitButton.addEventListener("click", function () {
    var playerName = document.getElementById("playerName").value;
    var playerMoney = parseFloat(document.getElementById("playerMoney").value);
    newUserForm.hidden = true;
    userInputButton.hidden = false;
    aPlayer = new Player(playerName, playerMoney);
    document.getElementById("playersName").innerHTML += " " + aPlayer.getName();
    document.getElementById("playersMoney").innerHTML += " " + aPlayer.getMoney();
    currentUserInfo.hidden = false;
    console.log("Got this info from user: " + aPlayer.getName() + " " + aPlayer.getMoney());
    WebPageInteraction.getInstance().displayToWebpage(userCreationMenu.casinoMenu());
});
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.setAPlayer = function (player) {
        Casino.aPlayer = player;
    };
    Casino.getAPlayer = function () {
        return Casino.aPlayer;
    };
    return Casino;
}());
//# sourceMappingURL=app.js.map