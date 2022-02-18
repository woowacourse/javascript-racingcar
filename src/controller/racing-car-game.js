import RacingCarGameModel from '../model/racing-car-game-model.js';
import RacingCarGameView from '../view/racing-car-game-view.js';
import { $ } from '../modules/dom-selector.js';
import { checkUserCarNameInput, checkUserRacingCountInput } from '../modules/check-user-inputs.js';
import { SELECTOR } from '../constants/selector.js';
import { CONGRATS_MESSAGE_TIME_INTERVAL, ONE_ROUND_TIME_INTERVAL } from '../constants/game-condition.js';

class RacingCarGame {
    constructor() {
        this.view = new RacingCarGameView();
        this.model = new RacingCarGameModel();
    }

    gameStart() {
        this.addClickEventToCarNameButton();
    }

    timeIntervalId = 0

    addClickEventToCarNameButton() {
        $(SELECTOR.CAR_NAME_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onCarNameButtonClick();
        });
    }

    addClickEventToRaceCountButton() {
        $(SELECTOR.RACE_COUNT_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onRaceCountButtonClick();
        });
    }

    addClickEventToRestartButton(){
        $(SELECTOR.RESTART_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onRestartButtonClick();
        });
    }
    
    updateWholeGameResult(raceCount){
        let count = 1;
        this.timeIntervalId = setInterval(() => {
            this.model.updateCarArrayForEachCar();
            this.view.renderRacingContent(this.model.carArray);

            if(count++ === raceCount) {
                this.stopUpdatingWholeGameResult();
                this.addClickEventToRestartButton();
                setTimeout(() => alert(`${this.getGameWinners(this.model.carArray)} 축하합니다!`)
                , CONGRATS_MESSAGE_TIME_INTERVAL);
            }
        }, ONE_ROUND_TIME_INTERVAL);
    }

    getGameWinners(carArray) {
        const maxCount = carArray
            .map(car => car.successCount)
            .sort((a, b) => b - a)[0]; // 내림차순으로 sorting하면 0번째 값이 최대값
        return carArray
            .filter(car => car.successCount === maxCount)
            .map(car => car.name)
            .join(',');
    }

    stopUpdatingWholeGameResult() {
        clearInterval(this.timeIntervalId);
        this.model.resetCarsIsCurrentTurnSuccess();
        this.view.renderRacingContent(this.model.carArray);
        this.view.renderGameWinners(this.getGameWinners(this.model.carArray));
    }

    onCarNameButtonClick() {
        try {
            checkUserCarNameInput($(SELECTOR.CAR_NAME_INPUT).value);
            this.view.renderRaceGameCountElement();
            this.addClickEventToRaceCountButton();
        } catch(err) {
            alert(err.message);
        }
    }

    onRaceCountButtonClick() {
        try {
            clearInterval(this.timeIntervalId);
            this.view.removeGameWinnerResult();
            this.model.generateCars(checkUserCarNameInput($(SELECTOR.CAR_NAME_INPUT).value));
            this.updateWholeGameResult(checkUserRacingCountInput($(SELECTOR.RACE_COUNT_INPUT).value));
        } catch(err) {
            alert(err.message);
        }
    }

    onRestartButtonClick() {
        clearInterval(this.timeIntervalId);
        this.model.resetCarArray();
        this.view.resetGameView();
    }
}

export default new RacingCarGame();
