import { EMPYT_INPUT_ERROR, OVER_CAR_COUNT_ERROR, OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import { $ } from "../dom/dom.js";
import showAlert from "./showAlert.js";
import initInputText from "./initInputText.js";

export default function handleUserCarNameInput(){
    $('#car-name-button').addEventListener('click', (e) => {
        e.preventDefault();
        const carNameInput = $('#car-name-input').value;

        if(carNameInput === ''){
            showAlert(EMPYT_INPUT_ERROR);
        }
        const carNameArray = carNameInput.split(',').map(carName => carName.trim());
        
        if(carNameArray.length > 5) {
            showAlert(OVER_CAR_COUNT_ERROR);
            initInputText($('#car-name-input'));
        }
        carNameArray.forEach(carName => {
            if(carName.length > 5) {
                showAlert(OVER_CARNAME_LENGTH_ERROR);
                initInputText($('#car-name-input'));
            }
        });
    })
}