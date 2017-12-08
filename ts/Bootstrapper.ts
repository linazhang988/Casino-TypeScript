/// <reference path="Player.ts" />
/// <reference path="WebPageInteraction.ts" /> 
/// <reference path="UserCreationMenu.ts" />

let userCreationMenu: UserCreationMenu = new UserCreationMenu();
WebPageInteraction.getInstance().displayToWebpage(userCreationMenu.menuTitle());
console.log(userCreationMenu.menuTitle());

let userInputButton = document.getElementById("userInput");
let currentUserInfo = document.getElementById("currentUserInfo");
currentUserInfo.hidden = true;
userInputButton.hidden = true;
let submitButton = document.getElementById("submitButton");
let newUserForm = document.getElementById("newUserForm");

let aPlayer: Player;

submitButton.addEventListener("click", () => {
    let playerName: string = (<HTMLInputElement>document.getElementById("playerName")).value;
    let playerMoney: number = parseFloat((<HTMLInputElement>document.getElementById("playerMoney")).value);
    newUserForm.hidden = true;
    userInputButton.hidden = false;
    aPlayer = new Player(playerName, playerMoney);
    document.getElementById("playersName").innerHTML += " " + aPlayer.getName();
    document.getElementById("playersMoney").innerHTML += " " + aPlayer.getMoney();
    currentUserInfo.hidden = false;
    console.log("Got this info from user: "+aPlayer.getName()+" "+aPlayer.getMoney());
    WebPageInteraction.getInstance().displayToWebpage(userCreationMenu.casinoMenu());
});
