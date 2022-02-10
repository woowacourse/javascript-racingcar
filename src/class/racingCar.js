export default class RacingCar {
    constructor(carNameArray, raceCount) {
        this.carNameArray = carNameArray;
        this.raceCount = raceCount;
    }

    gameStart(){
        console.log(this.carNameArray, this.raceCount);
    }

    generateRandomNumber() {
        return parseInt((Math.random() * 10) + 1);
    }
}