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

  static setRaceCountSectionVisibility(visibility) {
    $(SELECTOR.race_count_wrap).style.visibility = visibility;
  }

  static setInputDisable(disabled) {
    $(SELECTOR.car_name_input).disabled = disabled;
    $(SELECTOR.race_count_input).disabled = disabled;
    $(SELECTOR.car_name_button).disabled = disabled;
    $(SELECTOR.race_count_button).disabled = disabled;
  }

  static makeReset() {
    $(SELECTOR.racing_cars).innerHTML = "";
    $(SELECTOR.racing_arrow).innerHTML = "";
    $(SELECTOR.racing_result).innerHTML = "";
    $(SELECTOR.car_name_input).value = "";
    $(SELECTOR.race_count_input).value = "";
  }

  static restartSetting() {
    ViewManager.makeReset();
    ViewManager.setInputDisable(false);
    ViewManager.setRaceCountSectionVisibility("hidden");
  }
}
