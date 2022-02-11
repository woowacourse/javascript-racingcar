import { $ } from "../dom/dom.js";
import showAlert from "./showAlert.js";
import initInputText from "./initInputText.js";
import { NOT_NUMBER_TYPE_ERROR, EMPTY_INPUT_ERROR, OVER_COUNT_RANGE_ERROR } from "../constants/error.js";
import { MAX_RACE_COUNT, MIN_RACE_COUNT } from "../constants/gameCondition.js";

function isCorrectRaceCountRange(raceCountInput) {
    return raceCountInput <= MAX_RACE_COUNT && raceCountInput >= MIN_RACE_COUNT && Number.isInteger(raceCountInput);
}

export default function checkUserRacingCountInput(raceCountInput){
    if(raceCountInput === ''){
        showAlert(EMPTY_INPUT_ERROR);
        return;
    }
    
    if(!Number(raceCountInput)) {
        showAlert(NOT_NUMBER_TYPE_ERROR);
        initInputText($('#race-count-input'));
        return;
    }
    
    if(!isCorrectRaceCountRange(Number(raceCountInput))){
        showAlert(OVER_COUNT_RANGE_ERROR);
        initInputText($('#race-count-input'));
        return;
    }
    return raceCountInput;
}