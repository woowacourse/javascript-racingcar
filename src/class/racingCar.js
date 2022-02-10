import Car from "./car.js";
export default class RacingCar {
    constructor(carNameArray, raceCount) {
        this.carNameArray = carNameArray;
        this.raceCount = raceCount;
        this.carArray = [];
    }

    gameStart(){
        this.generateCars();
        
    }

    generateRandomNumber() {
        return parseInt((Math.random() * 10) + 1);
    }

    generateCars() {
        this.carNameArray.forEach(car => {
            this.carArray.push(new Car(car));
        });
    }
}