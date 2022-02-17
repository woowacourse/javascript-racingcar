import { $ } from './util.js';
import { SCREEN_CMD } from './constant.js';
import template from './template.js';

export default class Render {
    static showTryForm() {
        $('#app').classList.add(SCREEN_CMD.SHOW_TRT);
    }

    static showResultArea() {
        $('#app').classList.add(SCREEN_CMD.SHOW_RESULT);
    }

    static renderResult(racingCars) {
        $('#track-area').innerHTML = template.track(racingCars.cars);
        $('#winners').innerText = racingCars.getWinners().join(',');
        this.showResultArea();
    }

    static reset() {
        $('#app').classList.remove(SCREEN_CMD.SHOW_TRT, SCREEN_CMD.SHOW_RESULT);
    }
}
