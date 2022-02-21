import racingCars from './racingCars.js';
import render from './render.js';
import { passedOneSecond } from './util.js';
import { SUCCESS_MESSAGE } from './constant.js';

export default class RunGame {
    constructor() {
        this.running = false;
    }

    isRunning() {
        return this.running;
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
        render.readyToGame(racingCars.cars);
        this.readyToAnimate();
        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        if (passedOneSecond(this.startTime)) {
            render.updateTrackAfterOffLoading(racingCars.run());

            if (this.isFinishGame()) {
                this.finishGame();
                return;
            }

            this.gameToNextStep();
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    isFinishGame() {
        return this.count === this.tryCount - 1;
    }

    finishGame() {
        render.renderWinners(racingCars.getWinners());
        setTimeout(() => alert(SUCCESS_MESSAGE), 2000);
        this.running = false;
    }

    gameToNextStep() {
        render.onLoading();
        this.initializeStartTime();
        this.count += 1;
    }
}
