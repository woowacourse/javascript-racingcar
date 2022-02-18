import { $, $$ } from '../utils/element-tools.js';
import { SELECTOR, DOM_ID } from '../constants/selector.js';

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

        this.#renderProgress($element);
      });
  }

  #renderProgress($raceContainer) {
    const $container = document.createElement('DIV');
    $container.classList.add(DOM_ID.PROGRESS);

    const $progress = document.createElement('DIV');
    $progress.classList.add(DOM_ID.PROGRESS_INNER);
    $container.append($progress);

    $raceContainer.append($container);
  }

  setVisibleResult(isVisible) {
    $$(`${SELECTOR.RACE_CONTAINER}, ${SELECTOR.RESULT_CONTAINER}`).forEach(($element) => {
      $element.dataset.state = isVisible ? 'on' : 'off';
    });
  }

  #createCarStateConatiner(carList) {
    return carList.map((instance, index) => {
      const $carStateContainer = document.createElement('DIV');
      $carStateContainer.dataset.key = index;
      $carStateContainer.classList.add(DOM_ID.RACE_CAR_STATE);

      const $carName = document.createElement('DIV');
      $carName.classList.add(DOM_ID.RACE_CAR_NAME_BOX);
      $carName.innerText = instance.name;
      $carStateContainer.append($carName);

      return $carStateContainer;
    });
  }

  renderCarContainer(carList) {
    const $$carList = this.#createCarStateConatiner(carList);

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

      const $advance = document.createElement('DIV');
      $advance.classList.add(DOM_ID.RACE_ADVANCE);
      $advance.innerText = '⬇️️';

      $carStateContainer.querySelector(SELECTOR.RACE_CAR_NAME_BOX).after($advance);
    });
  }

  renderWinners(winners) {
    $(SELECTOR.RESULT_CONTAINER).dataset.state = 'on';
    $(SELECTOR.WINNERS).innerHTML = `🏆 최종 우승자: ${winners
      .map((carInstance) => carInstance.name)
      .join(', ')} 🏆`;
  }
}
