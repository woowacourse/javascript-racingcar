import RacingCars from './RacingCars.js';
import View from './View.js';
import userInputValue from './userInputValue.js';
import { validateCarNames, validateTurnCount } from './validation.js';

import { $ } from './utils/util.js';

import { KEYCODE_ENTER } from './constants/constant.js';
import SELECTOR from './constants/selectors.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.view = new View();
    }

    initialize() {
        this.setClickEvent();
        this.setKeyDownEnterEvent();
    }

    setClickEvent() {
        $(SELECTOR.CAR_NAME_SUBMIT_BUTTON).addEventListener('click', () => { this.onSubmitCarName(); });
        $(SELECTOR.TURN_COUNT_SUBMIT_BUTTON).addEventListener('click', () => { this.onSubmitTurnCount(); });
        $(SELECTOR.RESTART_BUTTON).addEventListener('click', () => { this.onClickRestartButton(); });
    }

    setKeyDownEnterEvent() {
        $(SELECTOR.CAR_NAME_INPUT).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitCarName();
            }
        });
        $(SELECTOR.TURN_COUNT_INPUT).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitTurnCount();
            }
        });
    }

    onSubmitCarName() {
        const carNames = userInputValue.carNames();
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

    onSubmitTurnCount() {
        const turnCount = userInputValue.turnCount();
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
        userInputValue.reset();
    }

    endGame() {
        const winners = this.racingCars.getWinners();
        setTimeout(() => { alert(`🎉 축하합니다! 🎉 \n🏆 우승자: ${winners}!`); }, 2000);
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
