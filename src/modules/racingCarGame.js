// import handleUserCarNameInput from "./handleUserCarNameInput.js";
// import handleUserRacingCountInput from "./handleUserRacingCountInput.js";
import RacingCar from "../class/racingCar.js";
import { $ } from "../dom/dom.js";
import checkUserCarNameInput from "./checkUserCarNameInput.js";
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
    };

    
}