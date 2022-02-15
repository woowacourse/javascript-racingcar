import { EMPTY_INPUT_ERROR } from "../constants/error.js";

export default function isUserInputEmpty(userInput){
    if(userInput === ''){
        throw new Error(EMPTY_INPUT_ERROR);
    }
    return false;
}