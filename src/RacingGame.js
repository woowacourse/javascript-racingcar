import RacingCars from './RacingCars.js';
import render from './render.js';
import userInput from './userInput.js';
import { isValidCarNames, isValidTryCnt } from './validation.js';
import { $ } from './util.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
    }

    initialize() {
        this.initCarNameFormEvent();
        this.initTryCntFormEvent();
        this.initRestartEvent();
    }

    initCarNameFormEvent() {
        $('#car-name-submit-button').addEventListener('click', () => {
            const carNames = userInput.getCarNames();
            if (!isValidCarNames(carNames)) return;

            this.racingCars.reset();
            this.racingCars.adds(carNames);
            render.showTryForm();
        });
    }

    initTryCntFormEvent() {
        $('#try-count-submit-button').addEventListener('click', () => {
            const tryCnt = userInput.getTryCnt();
            if (!isValidTryCnt(tryCnt)) return;

            this.runGame(tryCnt);
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

    runGame(tryCnt) {
        this.racingCars.run(tryCnt);
        render.renderResult(this.racingCars);
    }
}
