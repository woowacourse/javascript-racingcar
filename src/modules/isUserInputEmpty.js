import { EMPTY_INPUT_ERROR } from "../constants/error.js";
import showAlert from "./showAlert.js";

export default function isUserInputEmpty(userInput){
    if(userInput === ''){
        showAlert(EMPTY_INPUT_ERROR);
        return true;
    }
    return false;
}