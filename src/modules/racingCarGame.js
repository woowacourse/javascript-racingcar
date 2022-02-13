import RacingCar from "../class/racingCar.js";
import { $ } from "../dom/dom.js";
import isCarNameInputValid from "./isCarNameInputValid.js";
import isRacingCountInputValid from "./isRacingCountInputValid.js";

export default function racingCarGame() {
    this.racingInfoObject = {
        carNames: '',
        gameCount: 0,
      };

    this.init = () => {
        handleCarNameCheckEvent();
    };

    const handleCarNameCheckEvent = () => {
        $('#car-name-button').addEventListener('click', (e) => {
            e.preventDefault();  
            if(isCarNameInputValid($('#car-name-input').value)){
                renderRaceGameCountElement();  
            }
        });
    };
    
    const renderRaceGameCountElement = () => {
        $('.race-count-input-container').style.display = 'flex';
        handleRaceCountCheckEvent();
    };

    const handleRaceCountCheckEvent = () => {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();
            const carNameArray = $('#car-name-input').value.split(',').map(carName => carName.trim());
            const raceCount = $('#race-count-input').value;
            if(isRacingCountInputValid(raceCount)){
                new RacingCar(carNameArray, raceCount);
            }
        });
    };
}