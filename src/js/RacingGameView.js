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

  setAbleForm($formElement) {
    console.log($formElement);
    $formElement.querySelectorAll('input, button').forEach(($element) => {
      $element.removeAttribute('disabled');
      console.log($element);
    });
  }

  setDisableForm($formElement) {
    $formElement.querySelectorAll('input, button').forEach(($element) => {
      $element.setAttribute('disabled', '');
    });
  }

  renderResult(winner) {
    $$('.racing-car-container, #result').forEach(($element) => {
      $element.setAttribute('data-state', 'on');
    });

    $(SELECTOR.RACE_WINNER_DISPLAY).innerHTML =
      '🏆 최종 우승자: ' + winner + ' 🏆';
  }

  renderAdvanceDiv(carName) {
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

  renderInit() {
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML = '';
    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';
    this.setAbleForm($(SELECTOR.CAR_NAME_FORM));
    this.setDisableForm($(SELECTOR.RACE_TIME_FORM));
  }
}
