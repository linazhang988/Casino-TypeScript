class Casino {
    static aPlayer:any;

    static setAPlayer(player) {
        Casino.aPlayer = player;
    }

    static getAPlayer(): Player {
        return Casino.aPlayer;
    }
}