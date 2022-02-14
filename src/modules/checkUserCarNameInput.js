import { $ } from "./dom-selector.js";
import { EMPTY_INPUT_ERROR, OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import initInputText from "./initInputText.js";
import { MAX_CAR_NAME_LENGTH } from '../constants/gameCondition.js';

function isCorrectCarNameLength(carNameArray){
    return !carNameArray.filter(carName => carName.length > MAX_CAR_NAME_LENGTH).length;
}

export default function checkUserCarNameInput(carNameInput) {
    if(!carNameInput){
        throw new Error(EMPTY_INPUT_ERROR);
    }

    const carNameArray = carNameInput
        .split(',')
        .filter(carName => !!carName.trim().length);

    if(!isCorrectCarNameLength(carNameArray)){
        initInputText($('#car-name-input'));
        throw new Error(OVER_CARNAME_LENGTH_ERROR);
    }

    return carNameArray;
}