import { $ } from "../dom.js";

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
    $(".race-count-wrap").style.visibility = "hidden";
  }

  static showRaceCountSection() {
    $(".race-count-wrap").style.visibility = "visible";
  }

  static makeDisableInput() {
    $(".car-name-input").disabled = true;
    $(".race-count-input").disabled = true;
    $(".car-name-button").disabled = true;
    $(".race-count-button").disabled = true;
  }

  static restartSetting() {
    $(".racing-cars").innerHTML = "";
    $(".racing-arrow").innerHTML = "";
    $(".racing-result").innerHTML = "";
    $(".car-name-input").value = "";
    $(".race-count-input").value = "";
    $(".car-name-input").disabled = false;
    $(".race-count-input").disabled = false;
    $(".car-name-button").disabled = false;
    $(".race-count-button").disabled = false;
    $(".race-count-wrap").style.visibility = "hidden";
  }
}
