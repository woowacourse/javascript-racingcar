import { $ } from './utils/util.js';
import { SCREEN_COMMAND } from './constants/constant.js';
import SELECTOR from './constants/selectors.js';
import template from './templates/template.js';

export default class View {
    constructor() {
        this.app = $(SELECTOR.APP);
        this.resultArea = $(SELECTOR.RESULT_AREA);
    }

    updateInitialTrack(cars) {
        this.resultArea.querySelector(SELECTOR.TRACK_AREA).innerHTML = template.emptyTrack(cars);
    }

    updateLoading() {
        document.querySelectorAll(SELECTOR.CAR_STEPS)
            .forEach((track) => track.innerHTML += template.loader());
    }

    updateProgress(cars) {
        this.resultArea.querySelector(SELECTOR.TRACK_AREA).innerHTML = template.track(cars);
    }

    updateWinner(winners) {
        this.resultArea.querySelector(SELECTOR.WINNERS).innerText = winners.join(',');
    }

    updateResult(cars, winners) {
        this.resultArea.querySelector(SELECTOR.TRACK_AREA).innerHTML = template.track(cars);
        this.resultArea.querySelector(SELECTOR.WINNERS).innerText = winners.join(',');
    }

    showTryForm() {
        this.app.classList.add(SCREEN_COMMAND.SHOW_TRY_FORM);
        $(SELECTOR.TRY_COUNT_INPUT).focus();
    }

    showResultArea() {
        this.app.classList.add(SCREEN_COMMAND.SHOW_RESULT);
    }

    showTrackSection(cars) {
        this.updateInitialTrack(cars);
        this.showResultArea();
    }

    showFinalResult(winners) {
        this.updateWinner(winners);
        this.app.classList.add(SCREEN_COMMAND.SHOW_FINAL_RESULT_AREA);
    }

    reset() {
        this.app.classList.remove(SCREEN_COMMAND.SHOW_TRY_FORM, SCREEN_COMMAND.SHOW_RESULT);
    }
}
