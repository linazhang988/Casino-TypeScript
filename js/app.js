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
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
        this.betInput = document.getElementById("betAmount");
        this.player = player;
    }
    //telling it to go to the html file and link it to this typescript class
    Craps.prototype.play = function () {
        var play = document.getElementById("playStreetCraps");
        var firstThrow = document.getElementById("firstThrow");
        var secondThrow = document.getElementById("secondThrow");
        var newGame = document.getElementById("newStreetCrapsGame");
        play.setAttribute("hidden", "true");
        firstThrow.removeAttribute("hidden");
        secondThrow.removeAttribute("hidden");
        newGame.removeAttribute("hidden");
    };
    Craps.prototype.showOpeningMessage = function () {
        this.openingMessage = "~Welcome to Street Craps~" + this.player.getName();
        return this.openingMessage;
    };
    Craps.prototype.getName = function () {
    };
    Craps.prototype.showOpeningMsgCrapsHTML = function () {
        this.displayElement.innerHTML = this.showOpeningMessage();
    };
    Craps.prototype.initialThrow = function () {
        var diceRollSumOne = dice.rollDice(2);
        switch (diceRollSumOne) {
            case 7:
            case 11:
                this.messageAfterFirstThrow = "Your rolled a " + diceRollSumOne + ". " + "You Win!";
                // betamount + gambling money
                this.point = 1;
                break;
            case 2:
            case 3:
            case 12:
                this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". " + "Sorry, you lose...";
                //gambling money - betamount
                this.point = 0;
                break;
            default:
                this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". " + "Click on Second Throw.";
                this.point = diceRollSumOne;
                break;
        }
        return this.messageAfterFirstThrow;
    };
    Craps.prototype.firstThrowHTML = function () {
        this.displayElement.innerHTML += "<br/>" + this.initialThrow();
    };
    Craps.prototype.afterFirstThrowPoint = function () {
        var pointAfterFirstThrow = this.point;
        return pointAfterFirstThrow;
    };
    Craps.prototype.secondThrow = function () {
        var diceRollSumTwo = dice.rollDice(2);
        console.log("You rolled a " + diceRollSumTwo);
        if (diceRollSumTwo == this.point) {
            this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Win!";
        }
        else if (diceRollSumTwo == 7) {
            this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Lose!";
        }
        else {
            this.messageAfterSecondThrow = "Meep, you rolled a " + diceRollSumTwo + ". Roll Again. ";
        }
        return this.messageAfterSecondThrow;
    };
    Craps.prototype.secondThrowHTML = function () {
        this.displayElement.innerHTML += "<br/>" + this.secondThrow();
    };
    return Craps;
}());
var IO = /** @class */ (function () {
    function IO() {
    }
    IO.display = function (displayString) {
        this.displayEle.innerHTML += "<br/>" + displayString;
    };
    IO.getStringInput = function (prompt) {
        this.display(prompt);
        return this.userInputEle.value;
    };
    IO.getNumberInput = function (prompt) {
        this.display(prompt);
        return this.moneyInputEle.value;
    };
    IO.displayEle = document.getElementById("display");
    IO.userInputEle = document.getElementById("user_input");
    IO.moneyInputEle = document.getElementById("money_input");
    return IO;
}());
///<reference path="IO.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.askForName = function () {
        var name = IO.getStringInput("Player Name:");
        IO.display(name);
    };
    Casino.prototype.askForMoney = function () {
        var amount = IO.getNumberInput("Money Pot:");
        IO.display(amount);
    };
    Casino.prototype.askWhichGameToPlay = function () {
        var name = IO.getStringInput("~~Pick a Game to Play: Street Craps or BlackJack~~ Click Below");
    };
    return Casino;
}());
var Dice = /** @class */ (function () {
    function Dice() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    Dice.prototype.rollDice = function (diceNumber) {
        var diceSum = 0;
        var singleRandomNumber;
        for (var i = 0; i < diceNumber; i++) {
            singleRandomNumber = Math.ceil(Math.random() * 6); // gives you one random number from one dice
            diceSum += singleRandomNumber; //adds up my random number from each dice
        }
        return diceSum;
    };
    Dice.prototype.showDice = function () {
        this.displayElement.innerHTML += this.rollDice(2);
    };
    return Dice;
}());
var Player = /** @class */ (function () {
    // hand: Card[];
    function Player(name, gamblingMoney) {
        this.name = name;
        this.gamblingMoney = gamblingMoney;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getGamblingMoney = function () {
        return this.gamblingMoney;
    };
    Player.prototype.setGamblingMoney = function (amount) {
        this.gamblingMoney = amount;
    };
    Player.prototype.addGamblingMoney = function (amount) {
        this.gamblingMoney += amount;
    };
    return Player;
}());
/// <reference path="Craps.ts" />
/// <reference path="Casino.ts" />
/// <reference path="Dice.ts" />
/// <reference path="Player.ts" />
var dice = new Dice();
var casino = new Casino();
var craps = new Craps(name);
var Card = /** @class */ (function () {
    function Card(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
    }
    return Card;
}());
var CardPlayer = /** @class */ (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardPlayer;
}(Player));
var Deck = /** @class */ (function () {
    function Deck() {
        this.suits = ["hearts", "diamonds", "spades", "clubs"];
        this.cards = [];
    }
    Deck.prototype.populate = function () {
        for (var i = 0; i < 4; i++) {
            for (var value = 1; value <= 13; value++) {
                if (value < 11) {
                    if (value === 1) {
                        this.cards.push(new Card(this.suits[i], "ace", value));
                    }
                    else {
                        this.cards.push(new Card(this.suits[i], value, value));
                    }
                }
                else {
                    this.cards.push(new Card(this.suits[i], faceCard(value), numValue(value)));
                }
            }
        }
        function faceCard(value) {
            switch (value) {
                case (11):
                    return "jack";
                case (12):
                    return "queen";
                case (13):
                    return "king";
            }
        }
        function numValue(value) {
            switch (value) {
                case (11):
                    return 10;
                case (12):
                    return 10;
                case (13):
                    return 10;
            }
        }
    };
    Deck.prototype.getDeck = function () {
        this.populate();
        return this.cards;
    };
    return Deck;
}());
//# sourceMappingURL=app.js.map