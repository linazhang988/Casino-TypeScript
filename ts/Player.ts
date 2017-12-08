class Player {
    private name: string;
    private money: number;

    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
    }

    getName(): string {
        return this.name;
    }

    getMoney(): number {
        return this.money;
    }
    setMoney(value:number){
        this.money=value;
    }

}
