import { $ } from './util.js';
import { SCREEN_CMD } from './constant.js';

export default class Render {
    static parsingStep(step) {
        let steps = '';

        for (let i = 0; i < step; i += 1) {
            steps += '<span class="car-step">⬇️️</span>';
        }

        return steps;
    }

    static parsingTrack(cars) {
        return cars
            .map(
                ({ name, step }) => `<div class="car-track">
                        <div class="car-name">${name}</div>
                        <div class="car-steps">
                            ${this.parsingStep(step)}
                        </div>
                    </div>`,
            )
            .join('');
    }

    static renderResult(cars) {
        $('#track-area').innerHTML = this.parsingTrack(cars);
    }

    static renderWinners(winners) {
        $('#winners').innerText = winners.join(',');
    }

    static showTryForm() {
        $('#app').classList.add(SCREEN_CMD.SHOW_TRT);
    }

    static showResultArea() {
        $('#app').classList.add(SCREEN_CMD.SHOW_RESULT);
    }

    static showResult(cars, winners) {
        this.renderResult(cars);
        this.renderWinners(winners);
        this.showResultArea();
    }

    static reset() {
        $('#app').classList.remove(SCREEN_CMD.SHOW_TRT, SCREEN_CMD.SHOW_RESULT);
    }
}
