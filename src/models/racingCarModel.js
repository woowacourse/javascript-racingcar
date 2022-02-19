import { FORWARD_MARK_NUMBER } from "../constants/constants.js";
import Car from '../class/car.js';
import generateRandomNumber from "../modules/generateRandomNumber.js";

export default class RacingCarModel {
    constructor() {
        this.carArray = [];
    }
    
    generateCars(carNameArray) {
        carNameArray.forEach(carName => {
            this.carArray.push(new Car(carName));
        });
    }
    
    playGame(carNameArray,raceCount){
        this.raceCount = raceCount;        
        this.generateCars(carNameArray);
        for(let i=0; i < this.raceCount; i++){
            this.updateCarForwardCount();
        }
        return this.carArray;
    }

    updateCarForwardCount() {
        this.carArray.forEach((item) => {
            if(generateRandomNumber() >= FORWARD_MARK_NUMBER){
                item.forwardCount++;
            }
        })
    }

    getGameWinners(){
        const maxCount = this.carArray
        .map(car => car.forwardCount)
        .sort((a,b) => b - a)[0];
        return this.carArray
        .filter((item) => item.forwardCount === maxCount);
    }
    
}

