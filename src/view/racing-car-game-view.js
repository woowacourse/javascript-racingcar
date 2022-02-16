import { $ } from '../modules/dom-selector.js';
import { SELECTOR } from '../constants/selector.js';
import resetInputText from '../modules/reset-input-text.js';

export default class RacingCarGameView {
    renderRaceGameCountElement() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.remove(SELECTOR.DISPLAY_NONE);
    }

    renderWholeGameResult(carArray) {
        this.renderRacingContent(carArray);
        this.renderGameWinners(carArray);
    }

    renderRacingContent(carArray) {
        let racingResult = '';
        carArray.forEach(car => {
            racingResult += `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderOneCarContent(car.successCount)}</div>
                </div>
            `;
        });
        $(SELECTOR.RACING_CONTENT).innerHTML = racingResult;
    }

    renderOneCarContent(carCount) {
        let arrowResult = '';
        for(let i = 0; i < carCount; i++) {
            arrowResult +='<p>⬇️</p>';
        }
        return arrowResult;
    }
    
    renderGameWinners(carArray){
        const maxCount = carArray
            .map(car => car.successCount)
            .sort((a, b) => b - a)[0];
        const winners = carArray
            .filter(car => car.successCount === maxCount)
            .map(car => car.name)
            .join(',');
        
        $(SELECTOR.RACING_RESULT).innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }

    resetGameView() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.add(SELECTOR.DISPLAY_NONE);
        $(SELECTOR.RACING_CONTENT).innerHTML = '';
        $(SELECTOR.RACING_RESULT).innerHTML = '';
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
    }
}