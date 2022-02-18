import racingCars from './racingCars.js';
import render from './render.js';
import { passedOneSecond } from './util.js';
import { SUCCESS_MESSAGE } from './constant.js';

export default class RunGame {
    constructor(tryCount) {
        this.initializeStartTime();
        this.count = 0;
        this.tryCount = tryCount;
    }

    initializeStartTime() {
        this.startTime = new Date().getTime();
    }

    start() {
        render.appendTrack(racingCars.cars);
        render.onLoading();
        render.showResultArea();
        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        if (passedOneSecond(this.startTime)) {
            if (this.draw()) {
                render.renderWinners(racingCars.getWinners());
                setTimeout(() => alert(SUCCESS_MESSAGE), 2000);
                return;
            }

            render.onLoading();
            this.initializeStartTime();
            this.count += 1;
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    draw() {
        render.offLoading();
        render.updateTrack(racingCars.run());

        return this.count === this.tryCount - 1;
    }
}
