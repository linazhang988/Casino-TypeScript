
enum Games {
    GoFish,
    Blackjack,
    Craps,
}

class Game {
    private suit: any;
    private rank: any;
    public constructor(rank: number, game: Games){
        this.rank = rank;
        this.suit = game;
    }

    private static rankNames = [
        '1',
        '2',
        '3'
    ]

    public get rankName (): string {
        return Game.rankNames[this.rank-1];
    }

    public get suitName(): string {
        return Games[this.suit]
    }

    public get name(): string{
        return this.suitName + ', level ' + this.rankName;
    }
}