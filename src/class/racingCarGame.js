import RacingCar from "./racingCar.js";
import { $ } from "../dom/dom.js";
import checkUserCarNameInput from "../modules/checkUserCarNameInput.js";
import checkUserRacingCountInput from "../modules/checkUserRacingCountInput.js";

export default class RacingCarGame {

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