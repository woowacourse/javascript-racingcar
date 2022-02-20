import { $, $$ } from '../utils/element-tools.js';
import { SELECTOR } from '../constants/selector.js';
import { isSameDistance } from '../utils/RacingGame/validator.js';
import { templateProgress } from '../template/Share.js';
import { templateCarStateContainer, templateCarAdvance } from '../template/RacingGame.js';

export default class RacingGameView {
  #progressList = [];

  init() {
    this.setVisibleResult(false);

    this.setDisableForm($(SELECTOR.CAR_NAME_BUTTON), false);
    this.setDisableForm($(SELECTOR.RACE_TIME_BUTTON), false);

    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';

    $(SELECTOR.RETRY_BUTTON).classList.add('hidden');
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

  setRenderProgress(isVisible) {
    $(SELECTOR.RACE_CONTAINER)
      .querySelectorAll(SELECTOR.RACE_CAR_STATE)
      .forEach(($element) => {
        if (isVisible === false) {
          $element.querySelector(SELECTOR.PROGRESS_CONTAINER).remove();
          this.#progressList.length = 0;
          return;
        }

        const $progressContainer = templateProgress();
        this.#progressList.push($progressContainer.querySelector(SELECTOR.PROGRESS));

        $element.append($progressContainer);
      });
  }

  setProgressPercent(percent) {
    this.#progressList.forEach(($progress) => {
      $progress.setAttribute('style', `--value: ${percent}`);
    });
  }

  setVisibleResult(isVisible) {
    $$(`${SELECTOR.RACE_CONTAINER}, ${SELECTOR.RESULT_CONTAINER}`).forEach(($element) => {
      $element.dataset.state = isVisible ? 'on' : 'off';
    });
  }

  renderCarContainer(carList) {
    const $$carList = templateCarStateContainer(carList);

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

      if (isSameDistance($$advanceElements.length, distance)) {
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

  renderRetryButton() {
    $(SELECTOR.RETRY_BUTTON).classList.remove('hidden');
  }

  static bindCarNameInput(handler) {
    $(SELECTOR.CAR_NAME_BUTTON).addEventListener('click', (event) => {
      event.preventDefault();
      handler({ event, carNameList: $(SELECTOR.CAR_NAME_INPUT).value });
    });
  }

  static bindRaceTimeInput(handler) {
    $(SELECTOR.RACE_TIME_BUTTON).addEventListener('click', (event) => {
      event.preventDefault();
      handler({ event, raceTimeInput: $(SELECTOR.RACE_TIME_INPUT).value });
    });
  }

  static bindGameRetry(handler) {
    $(SELECTOR.RETRY_BUTTON).addEventListener('click', (event) => {
      event.preventDefault();
      handler({ event });
    });
  }
}
