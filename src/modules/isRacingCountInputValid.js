import { NOT_INTEGER_TYPE_ERROR, OVER_COUNT_RANGE_ERROR } from "../constants/error.js";
import initInputText from "../views/initInputText.js";
import isUserInputEmpty from "./isUserInputEmpty.js";
import showAlert from "./showAlert.js";
import { $ } from "../dom/dom.js";
import { MAXIMUM_RACE_COUNT, MINMUM_RACE_COUNT } from "../constants/constants.js";

function isRacingCountInteger(raceCountInput){
    if(!Number.isInteger(raceCountInput)){
        showAlert(NOT_INTEGER_TYPE_ERROR);
        initInputText($('#race-count-input'));
        return false;
    }
    return true;
}

function isRacingCountInRange(raceCountInput){
    if(raceCountInput > MAXIMUM_RACE_COUNT || raceCountInput < MINMUM_RACE_COUNT){
        showAlert(OVER_COUNT_RANGE_ERROR);
        initInputText($('#race-count-input'));
        return false;
    }
    return true;
}

export default function isRacingCountInputValid(userRacingCountInput){
    let isValid = !isUserInputEmpty(userRacingCountInput);
    if(isValid){
        isValid = isRacingCountInteger(Number(userRacingCountInput));
    }
    if(isValid){
        isValid = isRacingCountInRange(userRacingCountInput);
    }
    return isValid 

}