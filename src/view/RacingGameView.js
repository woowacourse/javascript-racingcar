import { $ } from '../util/util.js';
import { SCREEN_COMMAND } from '../constant/constant.js';
import SELECTOR from '../constant/selectors.js';
import racingGameTemplate from './racingGameTemplate.js';

export default class View {
    constructor() {
        this.app = $(SELECTOR.APP);
        this.resultArea = $(SELECTOR.RESULT_AREA);
    }

    updateInitialTrack(cars) {
        this.resultArea.querySelector(SELECTOR.CAR_TRACK_AREA).innerHTML = racingGameTemplate.emptyTrack(cars);
    }

    updateLoading() {
        this.resultArea.querySelectorAll(SELECTOR.CAR_STEPS)
            .forEach((track) => {
                track.insertAdjacentHTML('beforeend', racingGameTemplate.loader());
            });
    }

    updateProgress(cars) {
        this.resultArea.querySelector(SELECTOR.CAR_TRACK_AREA).innerHTML = racingGameTemplate.track(cars);
    }

    updateWinner(winners) {
        this.resultArea.querySelector(SELECTOR.WINNERS).innerText = winners.join(',');
    }

    updateResult(cars, winners) {
        this.updateProgress(cars);
        this.resultArea.querySelector(SELECTOR.WINNERS).innerText = winners.join(',');
    }

    showTurnForm() {
        this.app.classList.add(SCREEN_COMMAND.SHOW_TURN_COUNT_FORM);
        $(SELECTOR.TURN_COUNT_INPUT).focus();
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
        this.app.classList.remove(SCREEN_COMMAND.SHOW_TURN_COUNT_FORM, SCREEN_COMMAND.SHOW_RESULT);
        $(SELECTOR.CAR_NAME_INPUT).value = '';
        $(SELECTOR.TURN_COUNT_INPUT).value = '';
    }
}
