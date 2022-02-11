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
        return Math.floor(10 * Math.random());
    }

    generateCars() {
        this.carNameArray.forEach(car => this.carArray.push(new Car(car)));
    }
    
    playGame(){
        for(let i=0; i < this.raceCount; i++){
            this.updateCarSuccessCount();
        }
        this.renderRacingContent();
        this.renderGameWinners();
        this.onRestartButtonClick();
    }

    updateCarSuccessCount() {
        this.carArray.forEach(car => {
            this.generateRandomNumber() >= 4 && car.successCount++;
        });
    }

    renderRacingContent() {
        let racingResult = '';
        this.carArray.forEach(car => {
            racingResult += `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderOneCarContent(car.successCount)}</div>
                </div>
            `;
        });
        $('.racing-content').innerHTML = racingResult;
    }

    renderOneCarContent(carCount) {
        let arrowResult = '';
        for(let i = 0; i < carCount; i++) {
            arrowResult +='<p>⬇️</p>';
        }
        return arrowResult;
    }
    
    renderGameWinners(){
        const maxCount = this.carArray
            .map(car => car.successCount)
            .sort((a, b) => b - a)[0];
        const winners = this.carArray
            .filter(car => car.successCount === maxCount)
            .map(car => car.name)
            .join(',');
        
        $('.racing-result').innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }

    onRestartButtonClick(){
        $('.restart-button').addEventListener('click', () => {
            location.reload();
        });
    }
}