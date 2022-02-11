import { $ } from './util.js';

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
        $('#result-area').innerHTML = this.parsingTrack(cars);
    }

    static renderWinners(winners) {
        $('#winners').innerText = winners.join(',');
    }
}
