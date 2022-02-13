import { $ } from "../dom/dom.js";
import Car from "./car.js";
import generateRandomNumber from "../modules/generateRandomNumber.js";
import renderRacingContent from "../views/renderRacingContent.js";
import renderGameWinners from "../views/renderGameWinners.js";
import { FORWARD_MARK_NUMBER } from "../constants/constants.js";
export default class RacingCar {
    constructor(carNameArray, raceCount) {
        this.carNameArray = carNameArray;
        this.raceCount = raceCount;
        this.carArray = [];
        this.generateCars();
        this.playGame();
    }

    generateCars() {
        this.carNameArray.forEach(carName => {
            this.carArray.push(new Car(carName));
        });
    }
    
    playGame(){
        for(let i=0; i < this.raceCount; i++){
            this.updateCarForwardCount();
        }
        renderRacingContent(this.carArray);
        renderGameWinners(this.getGameWinners());
        this.handleRestartButtonClickEvent();
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
        .filter((item) => item.forwardCount === maxCount)
        .map(item => item.name).join(',');
    }
    

    handleRestartButtonClickEvent(){
        $('.restart-button').addEventListener('click', () =>{
            location.reload();
        });
    }
}