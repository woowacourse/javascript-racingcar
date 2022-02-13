import { $ } from "../dom/dom.js";
import renderCarArrowResult from "./renderCarArrowResult.js";

export default function renderRacingContent(carArray){
    $('.racing-content').innerHTML = carArray.map(car => {
        return `<div class="car">
            <label>${car.name}</label>
            <div>${renderCarArrowResult(car.forwardCount)}</div>
            </div>`
    }).join('');
}