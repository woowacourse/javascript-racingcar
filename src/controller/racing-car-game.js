import RacingCarGameModel from '../model/racing-car-game-model.js';
import RacingCarGameView from '../view/racing-car-game-view.js';
import { $ } from '../dom/dom.js';
import checkUserCarNameInput from '../modules/checkUserCarNameInput.js';
import checkUserRacingCountInput from '../modules/checkUserRacingCountInput.js';

export default class RacingCarGame {
    constructor() {
        this.view = new RacingCarGameView();
        this.model = new RacingCarGameModel();
        this.addClickEventToCarNameButton();
    }

    addClickEventToCarNameButton() {
        $('#car-name-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.onCarNameButtonClick();
        });
    }

    addClickEventToRaceCountButton() {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.onRaceCountButtonClick();
        });
    }

    addClickEventToRestartButton(){
        $('.restart-button').addEventListener('click', () => {
            this.onRestartButtonClick();
        });
    }
    
    updateWholeGameResult(raceCount){
        for(let i = 0; i < raceCount; i++){
            this.model.updateCarsSuccessCount();
        }
    }

    onCarNameButtonClick() {
        try {
            checkUserCarNameInput($('#car-name-input').value)
            this.view.renderRaceGameCountElement();
            this.addClickEventToRaceCountButton();
        } catch(err) {
            alert(err.message);
        }
    }

    onRaceCountButtonClick() {
        try {
            this.model.generateCars(checkUserCarNameInput($('#car-name-input').value));
            this.updateWholeGameResult(checkUserRacingCountInput($('#race-count-input').value));
            this.view.renderWholeGameResult(this.model.carArray);
            this.addClickEventToRestartButton();
        } catch(err) {
            alert(err.message);
        }
    }

    onRestartButtonClick() {
        location.reload();
    }
}