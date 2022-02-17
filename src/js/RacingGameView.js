import { $, $$ } from './utils/element-tools.js';
import SELECTOR from './constants/selector.js';

export default class RacingGameView {
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

  renderProgress() {
    $('.racing-car-container').setAttribute('data-state', 'on');
  }

  renderResult(winner) {
    $('#result').setAttribute('data-state', 'on');
    $(SELECTOR.RACE_WINNER_DISPLAY).innerHTML =
      '🏆 최종 우승자: ' + winner + ' 🏆';
  }

  renderAdvanceDiv(carName) {
    const str = `<div id="${carName}" class="car-instance"><div class="car-name-box">${carName}</div></div>`;
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML += str;
  }

  renderAdvance(target) {
    const str = `<div class="car-advance">⬇️️</div>`;
    const targetID = '#' + target;
    $(targetID).innerHTML += str;
  }

  LoadingStart() {
    $$('.car-instance').forEach(($element) => {
      $element.innerHTML +=
        '<div class="round-loading"><img src="./src/asset/loading.png" class="spinner" alt="loading"></div>';
    });
  }

  LoadingEnd() {
    $$('.round-loading').forEach(($element) => {
      $element.remove();
    });
  }

  renderInit() {
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML = '';
    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';
    this.setAbleForm($(SELECTOR.CAR_NAME_FORM));
    this.setDisableForm($(SELECTOR.RACE_TIME_FORM));
  }
}
