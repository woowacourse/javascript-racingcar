import { $ } from '../modules/dom-selector.js';
import { DISPLAY_NONE, SELECTOR } from '../constants/selector.js';
import resetInputText from '../modules/reset-input-text.js';

export default class RacingCarGameView {
    renderRaceGameCountElement() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.remove(DISPLAY_NONE);
    }

    renderRacingContent(carArray) {
        let racingResult = '';
        carArray.forEach(car => {
            racingResult += `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderOneCarContent(car.successCount, car.isCurrentTurnSuccess)}</div>
                </div>
            `;
        });
        $(SELECTOR.RACING_CONTENT).innerHTML = racingResult;
    }

    renderOneCarContent(carCount, isCurrentTurnSuccess) {
        return carCount <= 0 ? '' : this.getOneCarContent(carCount, isCurrentTurnSuccess);
    }

    getOneCarContent(carCount, isCurrentTurnSuccess) {
        let arrowResult = '';
        for(let i = 0; i < carCount - 1; i++) {
            arrowResult +='<p>⬇️</p>';
        }
        arrowResult += isCurrentTurnSuccess ? '<p class="loading-spinner"></p>' : '<p>⬇️</p>';
        return arrowResult;
    }
    
    renderGameWinners(winners){
        $(SELECTOR.RACING_RESULT).innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }

    removeGameWinnerResult() {
        $(SELECTOR.RACING_RESULT).innerHTML = '';
    }

    resetGameView() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.add(DISPLAY_NONE);
        $(SELECTOR.RACING_CONTENT).innerHTML = '';
        $(SELECTOR.RACING_RESULT).innerHTML = '';
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
    }
}