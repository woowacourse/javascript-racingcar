import { $, $$ } from './utils/element-tools.js';
import SELECTOR from './constants/selector.js';

export default class RacingGameView {
  init() {
    this.setVisibleResult(false);

    this.setDisableForm($(SELECTOR.CAR_NAME_BUTTON), false);
    this.setDisableForm($(SELECTOR.RACE_TIME_BUTTON), false);

    $(SELECTOR.CAR_NAME_INPUT).value = '';
    $(SELECTOR.RACE_TIME_INPUT).value = '';
  }

  setDisableForm($target, isDisable = true) {
    $target.parentElement
      .querySelectorAll('input, button')
      .forEach(($element) => {
        if (isDisable === false) {
          $element.removeAttribute('disabled');
          return;
        }

        $element.setAttribute('disabled', '');
      });
  }

  setVisibleResult(isVisible) {
    $$('#racing-car-container, #result-container').forEach(($element) => {
      $element.dataset.state = isVisible ? 'on' : 'off';
    });
  }

  _renderCarContainer(carList) {
    const insertHTML = carList
      .map(
        (instance, index) =>
          `<div class="racing-car" data-key="${index}">
            <div class="car-name-box">${instance.name}</div>
          </div>`
      )
      .join('');
    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML = insertHTML;
  }

  _renderCarAdvance(carList) {
    carList.forEach((instance, index) => {
      const { distance } = instance;
      const insertHTML = Array.from(
        { length: distance },
        () => `<div class="car-advance">⬇️️</div>`
      ).join('');

      $(`.racing-car[data-key="${index}"]`).innerHTML += insertHTML;
    });
  }

  _renderWinners(winners) {
    $(SELECTOR.WINNERS).innerHTML = `🏆 최종 우승자: ${winners
      .map((carInstance) => carInstance.name)
      .join('')} 🏆`;
  }

  renderResult(carList, winners) {
    this._renderCarContainer(carList);
    this._renderCarAdvance(carList);
    this._renderWinners(winners);
  }
}
