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
            if (!!checkUserCarNameInput($('#car-name-input').value)) {
                this.view.renderRaceGameCountElement();
                this.addClickEventToRaceCountButton();
            }
        });
    }

    addClickEventToRaceCountButton() {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();

            const carNameArray = checkUserCarNameInput($('#car-name-input').value);
            const raceCount = checkUserRacingCountInput($('#race-count-input').value);
            if (!!carNameArray && !!raceCount) {
                this.gameStart(carNameArray, raceCount);
            }
        });
    }

    addClickEventToRestartButton(){
        $('.restart-button').addEventListener('click', () => {
            location.reload();
        });
    }

    gameStart(carNameArray, raceCount){
        this.model.generateCars(carNameArray);
        this.playGame(raceCount);
    }
    
    playGame(raceCount){
        for(let i = 0; i < raceCount; i++){
            this.model.updateCarSuccessCount();
        }

        const { carArray } = this.model;
        this.view.renderRacingContent(carArray);
        this.view.renderGameWinners(carArray);
        this.addClickEventToRestartButton();
    }
}