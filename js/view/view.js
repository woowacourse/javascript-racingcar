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
      el.classList.add('d-none');
    });
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).insertAdjacentHTML(
      'afterbegin',
      template.winnerTemplate(winners)
    );
  }

  disableCarNamesForm(enable) {
    $(SELECTOR.CAR_NAMES_INPUT).disabled = enable;
    $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).disabled = enable;
  }

  disableRacingCountForm(enable) {
    $(SELECTOR.CAR_RACING_COUNT_INPUT).disabled = enable;
    $(SELECTOR.CAR_RACING_COUNT_SUBMIT_BUTTON).disabled = enable;
  }

  renderInitial() {
    $(SELECTOR.GAME_RESTART).classList.add('d-none');
    $(SELECTOR.CAR_NAMES).innerText = '';
    $(SELECTOR.CAR_PROGRESS).innerText = '';
    $(SELECTOR.CAR_RACING_WINNER).innerText = '';
    $(SELECTOR.CAR_NAMES_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).classList.add('d-none');
    this.disableCarNamesForm(false);
    this.disableRacingCountForm(false);
  }

  renderRestartButton() {
    $(SELECTOR.GAME_RESTART).classList.remove('d-none');
  }

  renderRacingCountForm() {
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).classList.remove('d-none');
  }
}
