import { $ } from "../dom/dom.js";
import checkUserCarNameInput from "./checkUserCarNameInput.js";

export default function handleUserCarNameInput(){
    $('#car-name-button').addEventListener('click', (e) => {
        e.preventDefault();
        const carNameArray = checkUserCarNameInput($('#car-name-input').value);
        if(!!carNameArray){
            // class import
        }
    })
}