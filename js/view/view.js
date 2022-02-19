import { $, $$ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';
import { template } from './template.js';
export default class View {
  constructor() {
    this.renderInitial();
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).innerHTML = template.carNamesTemplate(carNames);
  }

  renderCarProgress(carPosition) {
    $(SELECTOR.CAR_PROGRESS).innerHTML = template.carProgressTemplate(carPosition);
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).innerHTML = template.winnerTemplate(winners);
  }

  renderInitialLoader(carPosition) {
    $(SELECTOR.CAR_PROGRESS).innerHTML = template.initialLoaderTemplate(carPosition);
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
    $(SELECTOR.CAR_NAMES).innerHTML = '';
    $(SELECTOR.CAR_RACING_WINNER).innerHTML = '';
    $(SELECTOR.CAR_PROGRESS).innerHTML = '';
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
