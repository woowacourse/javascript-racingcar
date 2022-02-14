import { $ } from '../dom/dom.js';

export default class RacingCarGameView {
    renderRaceGameCountElement() {
        $('.race-count-input-container').style.display = 'flex';
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
        $('.racing-content').innerHTML = racingResult;
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
        
        $('.racing-result').innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }
}