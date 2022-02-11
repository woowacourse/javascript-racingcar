import { $, $$ } from './utils/element-tools.js';
import SELECTOR from './constants/selector.js';

export default class RacingGameView {
  constructor() {
    this.$carNameForm = $('#car-name-form');
    this.$carNameInput = $('#car-name-input');
    this.$carNameButton = $('#car-name-button');

    this.$raceTimeForm = $('#race-time-form');
    this.$raceTimeInput = $('#race-time-input');
    this.$raceTimeButton = $('#race-time-button');

    this.$racingCarContainer = $('#racing-car-container');
    this.$result = $('#result');
  }

  setDisableForm($formElement) {
    $formElement.querySelectorAll('input, button').forEach(($element) => {
      $element.setAttribute('disabled', '');
    });
  }

  renderResult() {
    $$('.racing-car-container, #result').forEach(($element) => {
      $element.setAttribute('data-state', 'on');
    });
  }

  renderAdvanceDiv(carName) {
    // 상수 예정 carName이 오브젝트로 넘어와요!!
    // 이제 잘 넘어와요
    const str = `<div id="car-instance${carName}" class="car-name-box">${carName}</div>`;
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML += str;
  }

  renderAdvance(target) {
    // 상수 예정
    const str = `<div class="car-advance">⬇️️</div>`;
    const targetID = '#' + target;
    console.log(targetID);
    const $target = document.querySelector(targetID);
    $target.innerHTML += str;
  }
}
