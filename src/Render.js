import { $ } from './util.js';
import { SCREEN_CMD } from './constant.js';
import template from './template.js';

const render = {
    showTryForm() {
        $('#app').classList.add(SCREEN_CMD.SHOW_TRT);
    },
    showResultArea() {
        $('#app').classList.add(SCREEN_CMD.SHOW_RESULT);
    },
    renderResult(racingCars) {
        $('#track-area').innerHTML = template.track(racingCars.cars);
        $('#winners').innerText = racingCars.getWinners().join(',');
        this.showResultArea();
    },
    reset() {
        $('#app').classList.remove(SCREEN_CMD.SHOW_TRT, SCREEN_CMD.SHOW_RESULT);
    },
};

export default render;
