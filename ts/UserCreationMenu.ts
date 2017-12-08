///<reference path="Menu.ts"/>

class UserCreationMenu extends Menu {
    menuTitle(): string {
        let welcomeString = "User Creation Menu<br\>" +
            "========================================<br/>";
        return welcomeString;
    }

    casinoMenu(): string {
        let outputString = "Casino Menu<br\>" +
            "========================================<br>"+
            "What would you like to play?<br>"+
            "1) BlackJack<br>"+
            "2) Craps<br>"+
            "3) Go Fish<br>";
        return outputString;
    }

    createNewPlayer(): void {
        let playerName: string = prompt("Please enter a username.");
        let amountOfMoney: number = parseInt(prompt("Please enter the amount of money you have."));

        let aPlayer: Player = new Player(playerName, amountOfMoney);

        console.log(aPlayer);

        Casino.setAPlayer(aPlayer);

        WebPageInteraction.getInstance().displayToWebpage("Your account has been created.");
        console.log("Your account has been created.");
        //CasinoMenu.INSTANCE.display();
    }
}
