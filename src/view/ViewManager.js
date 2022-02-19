import { SELECTOR } from "../constants/ConstantsManager.js";

import { $ } from "../utils/dom.js";

export default class ViewManager {
  static carArrow() {
    return '<div class="racing-arrow-wrap">⬇️️</div>';
  }

  static loading() {
    return '<div class="loading-spin-wrap"></div>';
  }

  static carNameBox(car) {
    return `
      <div class="car-name-box">
        <div class="car-name-box-text">${car.name}</div>
      </div>
    `;
  }

  static hideRaceCountSection() {
    $(SELECTOR.race_count_wrap).style.visibility = "hidden";
  }

  static showRaceCountSection() {
    $(SELECTOR.race_count_wrap).style.visibility = "visible";
  }

  static makeDisableInput() {
    $(SELECTOR.car_name_input).disabled = true;
    $(SELECTOR.race_count_input).disabled = true;
    $(SELECTOR.car_name_button).disabled = true;
    $(SELECTOR.race_count_button).disabled = true;
  }

  static restartSetting() {
    $(SELECTOR.racing_cars).innerHTML = "";
    $(SELECTOR.racing_arrow).innerHTML = "";
    $(SELECTOR.racing_result).innerHTML = "";
    $(SELECTOR.car_name_input).value = "";
    $(SELECTOR.race_count_input).value = "";
    $(SELECTOR.car_name_input).disabled = false;
    $(SELECTOR.race_count_input).disabled = false;
    $(SELECTOR.car_name_button).disabled = false;
    $(SELECTOR.race_count_button).disabled = false;
    $(SELECTOR.race_count_wrap).style.visibility = "hidden";
  }
}
