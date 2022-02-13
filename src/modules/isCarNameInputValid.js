import { OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import initInputText from "../views/initInputText.js";
import isUserInputEmpty from "./isUserInputEmpty.js";
import showAlert from "./showAlert.js";
import { $ } from "../dom/dom.js";
import { CARNAME_LENGTH_LIMIT } from "../constants/constants.js";

function checkCarNameLength(carNameArray){
    if(carNameArray.filter(carName => carName.length > CARNAME_LENGTH_LIMIT).length){
        showAlert(OVER_CARNAME_LENGTH_ERROR);
        initInputText($('#car-name-input'));
        return false;
    };
    return true;
}

export default function isCarNameInputValid(userCarNameInput){
    let isValid = !isUserInputEmpty(userCarNameInput);
    if(isValid){
        isValid = checkCarNameLength(userCarNameInput.split(',').map(carName => carName.trim()));
    }
    return isValid;
}