import { $ } from "../dom/dom.js";
import { EMPTY_INPUT_ERROR, OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import initInputText from "./initInputText.js";
import showAlert from "./showAlert.js"

function isCorrectCarNameLength(carNameArray){
    return !carNameArray.filter(carName => carName.length > 5).length;
}

export default function checkUserCarNameInput(carNameInput) {
    if(carNameInput === ''){
        showAlert(EMPTY_INPUT_ERROR);
        return;
    }

    const carNameArray = carNameInput.split(',').map(carName => carName.trim());

    if(!isCorrectCarNameLength(carNameArray)){
        showAlert(OVER_CARNAME_LENGTH_ERROR);
        initInputText($('#car-name-input'));
        return;
    }

    return carNameArray;
}