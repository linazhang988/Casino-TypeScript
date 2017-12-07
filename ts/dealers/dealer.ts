
class Dealer extends Deck{

    dealer = Dealer;
    dealtCard = Card;
    deck = Deck;

    constructor(){
        super();
    }

    shuffle (): void {
        this.cards.sort(() => Math.floor(Math.random() * 2 - 1));
    }

    draw(): string {
        let cardDrawn = this.cards[0];
        return cardDrawn.name;
    }

    drawBlackjack() {
        let c = new Deck();
        let d = new Dealer();
        for (let i = 0; i <= 3; i++) {
            d.shuffle();
            IO.display((d.draw()))
        }
    }
}