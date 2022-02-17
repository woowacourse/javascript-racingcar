import racingCars from './racingCars.js';
import render from './render.js';
import userInput from './userInput.js';
import { isValidCarNames, isValidTryCount } from './validation.js';
import { $ } from './util.js';

export default class RacingGame {
    constructor() {
        this.racingCars = racingCars;
    }

    initialize() {
        this.initCarNameFormEvent();
        this.initTryCountFormEvent();
        this.initRestartEvent();
    }

    initCarNameFormEvent() {
        $('#car-name-submit-button').addEventListener('click', () => {
            const carNames = userInput.getCarNames();

            try {
                isValidCarNames(carNames);
            } catch (error) {
                alert(error.message);
                return;
            }

            this.racingCars.reset();
            this.racingCars.adds(carNames);
            render.showTryForm();
        });
    }

    initTryCountFormEvent() {
        $('#try-count-submit-button').addEventListener('click', () => {
            const tryCount = userInput.getTryCount();

            try {
                isValidTryCount(tryCount);
            } catch (error) {
                alert(error.message);
                return;
            }

            this.runGame(tryCount);
            this.racingCars.resetSteps();
        });
    }

    initRestartEvent() {
        $('#restart-button').addEventListener('click', () => {
            this.racingCars.reset();
            render.reset();
            userInput.reset();
        });
    }

    runGame(tryCount) {
        this.racingCars.run(tryCount);
        render.renderResult(this.racingCars);
    }
}
