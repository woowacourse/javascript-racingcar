import { $ } from "./dom-selector.js";
import { EMPTY_INPUT_ERROR, OVER_CARNAME_LENGTH_ERROR, NOT_NUMBER_TYPE_ERROR, OVER_COUNT_RANGE_ERROR } from "../constants/error.js";
import resetInputText from "./reset-input-text.js";
import { MAX_CAR_NAME_LENGTH, MAX_RACE_COUNT, MIN_RACE_COUNT } from '../constants/game-condition.js';
import { SELECTOR } from '../constants/selector.js';

function isCorrectCarNameLength(carNameArray){
    return carNameArray.every(carName => carName.length <= MAX_CAR_NAME_LENGTH);
}

export function checkUserCarNameInput(carNameInput) {
    if(!carNameInput){
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
        throw new Error(EMPTY_INPUT_ERROR);
    }

    const carNameArray = carNameInput
        .split(',')
        .map(carName => carName.trim())
        .filter(carName => !!carName.length);

    if(!carNameArray.length) {
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
        throw new Error(EMPTY_INPUT_ERROR);
    }

    if(!isCorrectCarNameLength(carNameArray)){
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
        throw new Error(OVER_CARNAME_LENGTH_ERROR);
    }

    return carNameArray;
}

function isCorrectRaceCountRange(raceCountInput) {
    return raceCountInput <= MAX_RACE_COUNT && raceCountInput >= MIN_RACE_COUNT && Number.isInteger(raceCountInput);
}

export function checkUserRacingCountInput(raceCountInput){
    if(raceCountInput === ''){
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        throw new Error(EMPTY_INPUT_ERROR);
    }
    
    if(!Number(raceCountInput)) {
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        throw new Error(NOT_NUMBER_TYPE_ERROR);
    }
    
    if(!isCorrectRaceCountRange(Number(raceCountInput))){  
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        throw new Error(OVER_COUNT_RANGE_ERROR);
    }
    return Number(raceCountInput);
}
