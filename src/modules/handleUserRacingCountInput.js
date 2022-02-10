import { $ } from "../dom/dom.js";
import showAlert from "./showAlert.js";
import { EMPTY_INPUT_ERROR, OVER_COUNT_RANGE_ERROR, NOT_NUMBER_TYPE_ERROR } from "../constants/error.js";
import checkUserRacingCountInput from "./checkUserRacingCountInput.js";

export default function handleUserRacingCountInput(){
    $('#race-count-button').addEventListener('click', (e) => {
        e.preventDefault();
        const raceCountInput = checkUserRacingCountInput($('#race-count-input').value);
        if(!!raceCountInput){
            //값 넘기기
        }
        
    })
}