import { $, $$ } from './util.js';
import { SCREEN_CMD } from './constant.js';
import template from './template.js';

const forEachCarSteps = (eachFn) => {
    $$('.car-track .car-steps').forEach(eachFn);
};

const render = {
    showElement(className) {
        $('#app').classList.add(className);
    },
    hideElement(className) {
        $('#app').classList.remove(className);
    },
    showTryForm() {
        this.showElement(SCREEN_CMD.SHOW_TRT);
    },
    hideTryForm() {
        this.hideElement(SCREEN_CMD.SHOW_TRT);
    },
    showResultArea() {
        this.showElement(SCREEN_CMD.SHOW_RESULT);
    },
    hideResultArea() {
        this.hideElement(SCREEN_CMD.SHOW_RESULT);
    },
    reset() {
        this.hideTryForm();
        this.hideResultArea();
    },
    setWinners(value) {
        $('#winners').innerText = value;
    },
    renderWinners(winners) {
        this.setWinners(winners.join(','));
    },
    resetWinners() {
        this.setWinners('');
    },
    appendTrack(cars) {
        $('#track-area').innerHTML = template.track(cars);
    },
    updateTrack(carRunResults) {
        forEachCarSteps(($track, index) => {
            if (!carRunResults[index]) return;

            $track.insertAdjacentHTML('beforeend', template.step());
        });
    },
    onLoading() {
        forEachCarSteps(($track) => {
            $track.insertAdjacentHTML('beforeend', template.loading());
        });
    },
    offLoading() {
        forEachCarSteps(($track) => {
            $track.removeChild($track.lastElementChild);
        });
    },
    readyToGame(cars) {
        this.appendTrack(cars);
        this.onLoading();
        this.showResultArea();
    },
    updateTrackAfterOffLoading(carRunResults) {
        this.offLoading();
        this.updateTrack(carRunResults);
    },
};

export default render;
