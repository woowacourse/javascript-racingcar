import { $ } from './util.js';
import { SCREEN_COMMAND, SELECTOR } from './constant.js';
import template from './template.js';

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
