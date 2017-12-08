/// <reference path="Player.ts" />

class Craps extends Player{
    player: Player;
    play():boolean{
        let win:number=0;
        let lose:number=0;
        let diceValue: number = Dice.rollDice();
        if(diceValue==7||diceValue==11){
            win=1;
            WebPageInteraction.getInstance().displayToWebpage("You rolled " + diceValue + ".You win!<br>");    
        }else if(diceValue==2||diceValue==3||diceValue==12){
            lose=1;
            WebPageInteraction.getInstance().displayToWebpage("You rolled " + diceValue + ".You lose!<br>");   
        }else{
            WebPageInteraction.getInstance().displayToWebpage("Keep rolling until you get the point number.<br>");
            //add submit button option
            if(WebPageInteraction.getInstance().setOnClickAttribute()){
            let secondRoll:number = Dice.rollDice();
            while(secondRoll!=diceValue && secondRoll!=7 &&WebPageInteraction.getInstance().setOnClickAttribute()){
                secondRoll=Dice.rollDice();
            }
            if(secondRoll==7){
                WebPageInteraction.getInstance().displayToWebpage("You rolled a 7, you lose!<br>");
                lose=1;
            }else{
                WebPageInteraction.getInstance().displayToWebpage("You rolled the point number " + secondRoll + ".You win!<br>");
                win=1;
            }
        }
        }
        return win>lose;
    }
    takeBet(playBet:number){
        if(this.play()){
            this.player.setMoney(this.player.getMoney()+2*playBet);
        }else{
            this.player.setMoney(this.player.getMoney()-playBet);
        }
    }
    playAgain(){
        if(WebPageInteraction.getInstance().setOnClickAttribute()){
            
        }
    }
}
class Dice extends Craps{
    static rollDice(): number{
        let dice1: number = Math.floor((Math.random()*6)+1);
        let dice2: number = Math.floor((Math.random()*6)+1);
        WebPageInteraction.getInstance().displayToWebpage("Dice1:"+dice1+" Dice2:"+dice2+
    ".<br>Total value:" +(dice1+dice2)+"<br>");
    return dice1+dice2;
    }
}