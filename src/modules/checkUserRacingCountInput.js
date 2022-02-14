import { $ } from "./dom-selector.js";
import initInputText from "./initInputText.js";
import { NOT_NUMBER_TYPE_ERROR, EMPTY_INPUT_ERROR, OVER_COUNT_RANGE_ERROR } from "../constants/error.js";
import { MAX_RACE_COUNT, MIN_RACE_COUNT } from "../constants/gameCondition.js";
import { SELECTOR } from '../constants/selector.js';

function isCorrectRaceCountRange(raceCountInput) {
    return raceCountInput <= MAX_RACE_COUNT && raceCountInput >= MIN_RACE_COUNT && Number.isInteger(raceCountInput);
}

export default function checkUserRacingCountInput(raceCountInput){
    if(raceCountInput === ''){
        throw new Error(EMPTY_INPUT_ERROR);
    }
    
    if(!Number(raceCountInput)) {
        initInputText($(SELECTOR.RACE_COUNT_INPUT));
        throw new Error(NOT_NUMBER_TYPE_ERROR);
    }
    
    if(!isCorrectRaceCountRange(Number(raceCountInput))){  
        initInputText($(SELECTOR.RACE_COUNT_INPUT));
        throw new Error(OVER_COUNT_RANGE_ERROR);
    }
    return raceCountInput;
}