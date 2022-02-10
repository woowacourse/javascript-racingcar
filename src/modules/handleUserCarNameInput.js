import { EMPYT_INPUT_ERROR } from "../constants/error.js";
import { $ } from "../dom/dom.js";
import showAlert from "./showAlert.js";

export default function handleUserCarNameInput(){
    $('#car-name-button').addEventListener('click', (e) => {
        e.preventDefault();
        if($('#car-name-input').innerText === ''){
            showAlert(EMPYT_INPUT_ERROR);
        }
    })
}