import racingCars from './racingCars.js';
import render from './render.js';
import { passedOneSecond } from './util.js';
import { SUCCESS_MESSAGE } from './constant.js';

export default class RunGame {
    constructor() {
        this.running = false;
    }

    initializeStartTime() {
        this.startTime = new Date().getTime();
    }

    setTryCount(tryCount) {
        this.tryCount = tryCount;

        return this;
    }

    readyToAnimate() {
        this.initializeStartTime();
        this.count = 0;
        this.running = true;
    }

    start() {
        render.appendTrack(racingCars.cars);
        render.onLoading();
        render.showResultArea();
        this.readyToAnimate();
        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        if (passedOneSecond(this.startTime)) {
            if (this.draw()) {
                render.renderWinners(racingCars.getWinners());
                racingCars.reset();
                setTimeout(() => alert(SUCCESS_MESSAGE), 2000);
                this.running = false;
                return;
            }

            render.onLoading();
            this.initializeStartTime();
            this.count += 1;
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    isRunning() {
        return this.running;
    }

    draw() {
        render.offLoading();
        render.updateTrack(racingCars.run());

        return this.count === this.tryCount - 1;
    }
}
