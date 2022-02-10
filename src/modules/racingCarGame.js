import RacingCar from "../class/racingCar.js";
import { $ } from "../dom/dom.js";
import checkUserCarNameInput from "./checkUserCarNameInput.js";
import checkUserRacingCountInput from "./checkUserRacingCountInput.js";

export default function racingCarGame() {
    this.racingInfoObject = {
        carNames: '',
        gameCount: 0,
      };

    this.init = () => {
        onCarNameButtonClick();
 
    };
    const onCarNameButtonClick = () => {
        $('#car-name-button').addEventListener('click', (e) => {
            e.preventDefault();    
            if(!!checkUserCarNameInput($('#car-name-input').value)){
                renderRaceGameCountElement();
            }
        })
    };
    
    const renderRaceGameCountElement = () => {
        $('.race-count-input-container').style.display = 'flex';
        onRaceCountButtonClick();
    };

    const onRaceCountButtonClick = () => {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();

            const carNameArray = checkUserCarNameInput($('#car-name-input').value);
            const raceCount = checkUserRacingCountInput($('#race-count-input').value);
            if(!!carNameArray && !!raceCount) {
                const racingCar = new RacingCar(carNameArray, raceCount);
                racingCar.gameStart();
            }
        })
    };
}