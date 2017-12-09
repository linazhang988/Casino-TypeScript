///<reference path="../io.ts"/>
class Casino {

    constructor() {
    }

    casinoWelcome() {
        IO.display("Welcome to the Casino");
    }

    askForName(){
        let name: string = IO.getStringInput("Player Name:");
        IO.display(name);
        IO.display("What game would you like to play?")
    }

    printCardName() {
        let c = new Card(6, Suit.Diamonds);
        console.log(c.name);
        IO.display((c.name));
    }

    printGameName() {
        let c = new Game(3, Games.GoFish);
        console.log(c.name);
        IO.display((c.name));
    }

    printCards(){
        let c = new Deck();
        let d = new Dealer();
        console.log(d.drawBlackjack())
    }

}