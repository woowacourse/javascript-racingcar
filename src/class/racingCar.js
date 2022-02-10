import { $ } from "../dom/dom.js";
import Car from "./car.js";
export default class RacingCar {
    constructor(carNameArray, raceCount) {
        this.carNameArray = carNameArray;
        this.raceCount = raceCount;
        this.carArray = [];
    }

    gameStart(){
        this.generateCars();
        this.playGame();
        
    }

    generateRandomNumber() {
        return parseInt((Math.random() * 10) + 1);
    }

    generateCars() {
        this.carNameArray.forEach(car => {
            this.carArray.push(new Car(car));
        });
    }
    
    playGame(){
        for(let i=0; i < this.raceCount; i++){
            this.updateCarSuccessCount();
        }
        this.renderRacingContent();
        console.log(this.carArray);
    }

    updateCarSuccessCount() {
        this.carArray.forEach((item) => {
            if(this.generateRandomNumber() >= 4){
                item.successCount++;
            }
        })
    }

    renderRacingContent() {
        let racingResult = '';
        this.carArray.forEach(car => {
            racingResult += `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderOneCarContent(car.successCount)}</div>
                </div>
            `;
        })
        $('.racing-content').innerHTML = racingResult;
    }

    renderOneCarContent(carCount) {
        let arrowResult = '';
        for(let i = 0; i < carCount; i++) {
            arrowResult +='<p>⬇️</p>';
        }
        return arrowResult;
    }
}