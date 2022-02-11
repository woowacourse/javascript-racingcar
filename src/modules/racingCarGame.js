import RacingCar from "../class/racingCar.js";
import { $ } from "../dom/dom.js";
import checkUserCarNameInput from "./checkUserCarNameInput.js";
import checkUserRacingCountInput from "./checkUserRacingCountInput.js";

export default class racingCarGame {
    
    init() {
        this.onCarNameButtonClick();
    }

    onCarNameButtonClick() {
        $('#car-name-button').addEventListener('click', (e) => {
            e.preventDefault();
            if (!!checkUserCarNameInput($('#car-name-input').value)) {
                this.renderRaceGameCountElement();
            }
        });
    }

    renderRaceGameCountElement() {
        $('.race-count-input-container').style.display = 'flex';
        this.onRaceCountButtonClick();
    }

    onRaceCountButtonClick() {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();

            const carNameArray = checkUserCarNameInput($('#car-name-input').value);
            const raceCount = checkUserRacingCountInput($('#race-count-input').value);
            if (!!carNameArray && !!raceCount) {
                const racingCar = new RacingCar(carNameArray, raceCount);
                racingCar.gameStart();
            }
        });
    }
}