import { $, $$ } from '../utils/elementSeletor.js';
import SELECTOR from '../constants/selector.js';
import TEMPLATE from './template.js';

export default class RacingGameView {
  constructor() {}

  setAbleForm($formElement) {
    $formElement.querySelectorAll('input, button').forEach(($element) => {
      $element.removeAttribute('disabled');
    });
  }

  setDisableForm($formElement) {
    $formElement.querySelectorAll('input, button').forEach(($element) => {
      $element.setAttribute('disabled', '');
    });
  }

  renderProgress() {
    $(SELECTOR.RACE_CONTAINER_DIV).setAttribute('visible', 'true');
  }

  renderResult(winner) {
    $(SELECTOR.RACE_RESULT).setAttribute('visible', 'true');
    $(SELECTOR.RACE_WINNER_DISPLAY).innerHTML = TEMPLATE.WINNER_DISPLAY(winner);
  }

  renderAdvanceDiv(carName) {
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML += TEMPLATE.CAR_NAME_BOX(carName);
  }

  renderAdvance(target) {
    const str = TEMPLATE.ADVANCE_MARK();
    const targetID = '#car-' + target;
    $(targetID).innerHTML += str;
  }

  renderReplayButton() {
    $(SELECTOR.RACE_REPLAY_BUTTON).setAttribute('visible', 'true');
  }

  LoadingStart() {
    $$(SELECTOR.RACE_CAR_INSTANCE).forEach(($element) => {
      $element.innerHTML += TEMPLATE.LOADING_MARK();
    });
  }

  LoadingEnd() {
    $$(SELECTOR.RACE_LOADING).forEach(($element) => {
      $element.remove();
    });
  }

  renderInit() {
    $(SELECTOR.RACE_REPLAY_BUTTON).setAttribute('visible', 'false');
    $(SELECTOR.RACE_WINNER_DISPLAY).innerHTML = '';
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML = '';
    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';
    this.setAbleForm($(SELECTOR.CAR_NAME_FORM));
    this.setDisableForm($(SELECTOR.RACE_TIME_FORM));
  }
}
