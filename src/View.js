import { $ } from './utils/util.js';
import { SCREEN_COMMAND } from './constants/constant.js';
import SELECTOR from './constants/selectors.js';
import template from './templates/template.js';

export default class View {
    constructor() {
        this.app = $(SELECTOR.app);
        this.resultArea = $(SELECTOR.result_area);
    }

    updateResult(cars, winners) {
        this.resultArea.querySelector(SELECTOR.track_area).innerHTML = template.track(cars);
        this.resultArea.querySelector(SELECTOR.winners).innerText = winners.join(',');
    }

    showTryForm() {
        this.app.classList.add(SCREEN_COMMAND.show_try);
        $(SELECTOR.try_count_input).focus();
    }

    showResultArea() {
        this.app.classList.add(SCREEN_COMMAND.show_result);
    }

    showResult(cars, winners) {
        this.updateResult(cars, winners);
        this.showResultArea();
    }

    reset() {
        this.app.classList.remove(SCREEN_COMMAND.show_try, SCREEN_COMMAND.show_result);
    }
}
