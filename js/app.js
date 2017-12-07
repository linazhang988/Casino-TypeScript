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
var WebPage = /** @class */ (function () {
    function WebPage() {
    }
    WebPage.getDisplayElement = function () {
        return WebPage.getElementById("display");
    };
    WebPage.getUserInputElement = function () {
        return WebPage.getElementById("user_input");
    };
    WebPage.getElementById = function (id) {
        return document.getElementById(id);
    };
    return WebPage;
}());
///<reference path="webPage.ts"/>
var IO = /** @class */ (function () {
    function IO() {
    }
    IO.display = function (displayString) {
        this.displayEle.innerHTML += "<br / >" + displayString;
    };
    IO.clear = function () {
        this.displayEle.innerHTML = "";
    };
    IO.getStringInput = function (prompt) {
        this.display(prompt);
        return this.userInputEle.value;
    };
    IO.getNumberInput = function (prompt) {
        var stringInput;
        var numberInput = null;
        do {
            stringInput = this.getStringInput(prompt);
            try {
                numberInput = Number(stringInput);
                return numberInput;
            }
            catch (IllegalArgumentException) {
                this.display("Not a valid amount.");
            }
        } while (true);
    };
    IO.getPositiveNumberInput = function (prompt) {
        var numberInput;
        do {
            numberInput = this.getNumberInput(prompt);
            if (numberInput >= 0) {
                return numberInput;
            }
            else {
                this.display("Please input a positive amount.");
            }
        } while (true);
    };
    IO.displayEle = WebPage.getDisplayElement();
    IO.userInputEle = WebPage.getUserInputElement();
    return IO;
}());
///<reference path="../io.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.casinoWelcome = function () {
        IO.display("Welcome to the Casino");
    };
    Casino.prototype.askForName = function () {
        var name = IO.getStringInput("Player Name:");
        IO.display(name);
        IO.display("What game would you like to play?");
    };
    Casino.prototype.printCardName = function () {
        var c = new Card(6, Suit.Diamonds);
        console.log(c.name);
        IO.display((c.name));
    };
    Casino.prototype.printGameName = function () {
        var c = new Game(3, Games.GoFish);
        console.log(c.name);
        IO.display((c.name));
    };
    Casino.prototype.printCards = function () {
        var c = new Deck();
        var d = new Dealer();
        console.log(d.drawBlackjack());
    };
    return Casino;
}());
///<reference path="casino/casino.ts"/>
var casino;
casino = new Casino();
var Dealer = /** @class */ (function (_super) {
    __extends(Dealer, _super);
    function Dealer() {
        var _this = _super.call(this) || this;
        _this.dealer = Dealer;
        _this.dealtCard = Card;
        _this.deck = Deck;
        return _this;
    }
    Dealer.prototype.shuffle = function () {
        this.cards.sort(function () { return Math.floor(Math.random() * 2 - 1); });
    };
    Dealer.prototype.draw = function () {
        var cardDrawn = this.cards[0];
        return cardDrawn.name;
    };
    Dealer.prototype.drawBlackjack = function () {
        var c = new Deck();
        var d = new Dealer();
        for (var i = 0; i <= 3; i++) {
            d.shuffle();
            IO.display((d.draw()));
        }
    };
    return Dealer;
}(Deck));
var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Object.defineProperty(Card.prototype, "rankName", {
        get: function () {
            return Card.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suitName", {
        get: function () {
            return Suit[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this.rankName + ' of ' + this.suitName;
        },
        enumerable: true,
        configurable: true
    });
    Card.rankNames = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King'
    ];
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var s = 0; s < 4; s++) {
            for (var r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }
    return Deck;
}());
var Games;
(function (Games) {
    Games[Games["GoFish"] = 0] = "GoFish";
    Games[Games["Blackjack"] = 1] = "Blackjack";
    Games[Games["Craps"] = 2] = "Craps";
})(Games || (Games = {}));
var Game = /** @class */ (function () {
    function Game(rank, game) {
        this.rank = rank;
        this.suit = game;
    }
    Object.defineProperty(Game.prototype, "rankName", {
        get: function () {
            return Game.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "suitName", {
        get: function () {
            return Games[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "name", {
        get: function () {
            return this.suitName + ', level ' + this.rankName;
        },
        enumerable: true,
        configurable: true
    });
    Game.rankNames = [
        '1',
        '2',
        '3'
    ];
    return Game;
}());
var konsole = /** @class */ (function (_super) {
    __extends(konsole, _super);
    function konsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return konsole;
}(Casino));
//# sourceMappingURL=app.js.map