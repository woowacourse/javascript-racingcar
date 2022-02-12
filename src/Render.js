import { $ } from './util.js';
import { SCREEN_CMD, SELECTOR } from './constant.js';

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
            .map(({ name, step }) => (
                `<div class="car-track">
                    <div class="car-name">${name}</div>
                    <div class="car-steps">
                        ${this.parsingStep(step)}
                    </div>
                </div>`
            )).join('');
    }

    static renderResult(cars) {
        $(SELECTOR.track_area).innerHTML = this.parsingTrack(cars);
    }

    static renderWinners(winners) {
        $(SELECTOR.winners).innerText = winners.join(',');
    }

    static showTryForm() {
        $(SELECTOR.app).classList.add(SCREEN_CMD.show_try);
    }

    static showResultArea() {
        $(SELECTOR.app).classList.add(SCREEN_CMD.show_result);
    }

    static showResult(cars, winners) {
        this.renderResult(cars);
        this.renderWinners(winners);
        this.showResultArea();
    }

    static reset() {
        $(SELECTOR.app).classList.remove(SCREEN_CMD.show_try, SCREEN_CMD.show_result);
    }
}
