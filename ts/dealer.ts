
class Dealer extends Deck{

    private dealer = Dealer;
    private dealtCard = Card;
    private deck = Deck;

    public constructor(){
        super();
    }

    public shuffle (): void {
        this.cards.sort(() => Math.floor(Math.random() * 2 - 1));
    }

    public draw(): string {
        let cardDrawn = this.cards[0];
        return cardDrawn.name;
    }

    public drawBlackjack() {
        let c = new Deck();
        let d = new Dealer();
        for (let i = 0; i <= 3; i++) {
            d.shuffle();
            IO.display((d.draw()))
        }
    }
}