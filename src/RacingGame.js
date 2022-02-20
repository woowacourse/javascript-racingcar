import RacingCars from './RacingCars.js';
import View from './view/RacingGameView.js';
import { validateCarNames, validateTurnCount } from './validation.js';

import { $ } from './util/util.js';

import SELECTOR from './constant/selectors.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.view = new View();
    }

    initialize() {
        this.setSubmitEvent();
    }

    setSubmitEvent() {
        $(SELECTOR.CAR_NAME_FORM).addEventListener('submit', (e) => { this.onSubmitCarName(e); });
        $(SELECTOR.TURN_COUNT_FORM).addEventListener('submit', (e) => { this.onSubmitTurnCount(e); });
        $(SELECTOR.RESTART_BUTTON).addEventListener('click', () => { this.onClickRestartButton(); });
    }

    onSubmitCarName(e) {
        e.preventDefault();
        const carNames = $(SELECTOR.CAR_NAME_INPUT).value.split(',').map((name) => name.trim());
        try {
            validateCarNames(carNames);
        } catch (error) {
            alert(error.message);
            return;
        }
        this.racingCars.reset();
        this.racingCars.initialize(carNames);
        this.view.showTurnForm();
    }

    onSubmitTurnCount(e) {
        e.preventDefault();
        const turnCount = Number($(SELECTOR.TURN_COUNT_INPUT).value);
        try {
            validateTurnCount(turnCount);
        } catch (error) {
            alert(error.message);
            return;
        }
        this.playGame(turnCount);
        this.racingCars.resetSteps();
    }

    onClickRestartButton() {
        this.racingCars.reset();
        this.view.reset();
    }

    endGame() {
        const winners = this.racingCars.getWinners();
        setTimeout(() => { alert(`🎉 축하합니다! 우승자는 ${winners}! 🎉`); }, 2000);
        this.view.showFinalResult(winners);
    }

    playTurns(turnCount) {
        let currentTurnNumber = 0;
        this.view.updateLoading();
        const turnTimerID = setInterval(() => {
            if (currentTurnNumber + 1 === turnCount) {
                clearInterval(turnTimerID);
                this.endGame();
            }
            this.racingCars.playTurn();
            this.view.updateProgress(this.racingCars.cars);
            if (currentTurnNumber + 1 < turnCount) this.view.updateLoading();
            currentTurnNumber += 1;
        }, 1000);
    }

    playGame(turnCount) {
        this.view.showTrackSection(this.racingCars.cars);
        this.playTurns(turnCount);
    }
}
