import { $ } from "../dom/dom.js";
import Car from "./car.js";
import generateRandomNumber from "../modules/generateRandomNumber.js";
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
            this.updateCarSuccessCount();
        }
        this.renderRacingContent();
        this.renderGameWinners();
        this.handleRestartButtonClickEvent();
    }

    updateCarSuccessCount() {
        this.carArray.forEach((item) => {
            if(generateRandomNumber() >= 4){
                item.successCount++;
            }
        })
    }

    renderRacingContent() {
        $('.racing-content').innerHTML = this.carArray.map(car => {
            return `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderCarArrowResult(car.successCount)}</div>
                </div>`
        }).join('');
    }

    renderCarArrowResult(carCount) {
        return '<p>⬇️</p>'.repeat(carCount);
    }
    
    renderGameWinners(){
        const maxCount = this.carArray
            .map(car => car.successCount)
            .sort((a, b) => b - a)[0];
        const winners = this.carArray
            .filter((item) => item.successCount === maxCount)
            .map(item => item.name)
            .join(',');
        
        $('.racing-result').innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }

    handleRestartButtonClickEvent(){
        $('.restart-button').addEventListener('click', () =>{
            location.reload();
        });
    }
}