import { $, $$ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';
import { template } from './template.js';
export default class View {
  constructor() {
    this.renderInitial();
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).insertAdjacentHTML('afterbegin', template.carNamesTemplate(carNames));
  }

  renderInitialLoader(carPosition) {
    $(SELECTOR.CAR_PROGRESS).insertAdjacentHTML(
      'afterbegin',
      template.initialLoaderTemplate(carPosition)
    );
  }

  renderCarProgress(carPosition) {
    $(SELECTOR.CAR_PROGRESS).replaceChildren('');
    $(SELECTOR.CAR_PROGRESS).insertAdjacentHTML(
      'afterbegin',
      template.carProgressTemplate(carPosition)
    );
  }

  renderLoader() {
    $$(SELECTOR.CAR_PROGRESS_RESULT).forEach((el) => {
      el.insertAdjacentHTML('beforeend', template.loaderTemplate());
    });
  }

  hideLoader() {
    $$(SELECTOR.LOADER).forEach((el) => {
      el.style.display = 'none';
    });
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).insertAdjacentHTML(
      'afterbegin',
      template.winnerTemplate(winners)
    );
  }

  disableCarNamesForm() {
    $(SELECTOR.CAR_NAMES_INPUT).disabled = true;
    $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).disabled = true;
  }

  disableRacingCountForm() {
    $(SELECTOR.CAR_RACING_COUNT_INPUT).disabled = true;
    $(SELECTOR.CAR_RACING_COUNT_SUBMIT_BUTTON).disabled = true;
  }

  enableAllForms() {
    $(SELECTOR.CAR_NAMES_INPUT).disabled = false;
    $(SELECTOR.CAR_RACING_COUNT_INPUT).disabled = false;
    $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).disabled = false;
    $(SELECTOR.CAR_RACING_COUNT_SUBMIT_BUTTON).disabled = false;
  }

  renderInitial() {
    $(SELECTOR.GAME_RESTART).style.display = 'none';
    $(SELECTOR.CAR_NAMES).innerText = '';
    $(SELECTOR.CAR_PROGRESS).innerText = '';
    $(SELECTOR.CAR_RACING_WINNER).innerText = '';
    $(SELECTOR.CAR_NAMES_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'none';
    this.enableAllForms();
  }

  renderRestartButton() {
    $(SELECTOR.GAME_RESTART).style.display = 'block';
  }

  renderRacingCountForm() {
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'block';
  }
}
