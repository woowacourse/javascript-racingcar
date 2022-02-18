import { $, $$ } from '../utils/element-tools.js';
import { SELECTOR } from '../constants/selector.js';
import { templateProgress } from '../template/share.js';
import { templateCarStateConatiner, templateCarAdvance } from '../template/RacingGame.js';

export default class RacingGameView {
  init() {
    this.setVisibleResult(false);

    this.setDisableForm($(SELECTOR.CAR_NAME_BUTTON), false);
    this.setDisableForm($(SELECTOR.RACE_TIME_BUTTON), false);

    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';
  }

  setDisableForm($target, isDisable = true) {
    $target
      .closest('form')
      .querySelectorAll('input, button')
      .forEach(($element) => {
        if (isDisable === false) {
          $element.removeAttribute('disabled');
          return;
        }

        $element.setAttribute('disabled', '');
      });
  }

  setVisibleProgress(isVisible) {
    $(SELECTOR.RACE_CONTAINER)
      .querySelectorAll(SELECTOR.RACE_CAR_STATE)
      .forEach(($element) => {
        if (isVisible === false) {
          $element.querySelector(SELECTOR.PROGRESS).remove();
          return;
        }

        const $progress = templateProgress();
        $element.append($progress);
      });
  }

  setVisibleResult(isVisible) {
    $$(`${SELECTOR.RACE_CONTAINER}, ${SELECTOR.RESULT_CONTAINER}`).forEach(($element) => {
      $element.dataset.state = isVisible ? 'on' : 'off';
    });
  }

  renderCarContainer(carList) {
    const $$carList = templateCarStateConatiner(carList);

    const $raceContainer = $(SELECTOR.RACE_CONTAINER);
    $raceContainer.innerHTML = '';
    $raceContainer.append(...$$carList);
    $raceContainer.dataset.state = 'on';
  }

  renderCarAdvance(carList) {
    carList.forEach((instance, index) => {
      const { distance } = instance;

      const $carStateContainer = $(`${SELECTOR.RACE_CAR_STATE}[data-key="${index}"]`);
      const $$advanceElements = $carStateContainer.querySelectorAll(SELECTOR.RACE_ADVANCE);

      if ($$advanceElements.length === distance) {
        return;
      }

      const $advance = templateCarAdvance();
      $carStateContainer.querySelector(SELECTOR.RACE_CAR_NAME_BOX).after($advance);
    });
  }

  renderWinners(winners) {
    $(SELECTOR.RESULT_CONTAINER).dataset.state = 'on';
    $(SELECTOR.WINNERS).innerText = `🏆 최종 우승자: ${winners
      .map((carInstance) => carInstance.name)
      .join(', ')} 🏆`;
  }

  bindCarNameInput(handler) {
    $(SELECTOR.CAR_NAME_BUTTON).addEventListener('click', (event) => {
      event.preventDefault();
      handler({ event, carNameList: $(SELECTOR.CAR_NAME_INPUT).value });
    });
  }
}
