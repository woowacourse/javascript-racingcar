import { $ } from "../dom/dom.js";
export default class RacingCarView{
    renderCarArrowResult(forwardCount) {
        return '<p>⬇️</p>'.repeat(forwardCount);
    }
    initInputTextElement(inputElement){
        inputElement.value = '';
    }
    renderGameWinners(winners){
        $('.racing-result').innerHTML = `
        <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
        <button class="restart-button">다시 시작하기</button>
        `;
    }
    renderRacingContent(carArray){
        $('.racing-content').innerHTML = carArray.map(car => {
            return `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderCarArrowResult(car.forwardCount)}</div>
                </div>`
        }).join('');
    }
    renderRaceGameCountElement = () => {
        $('.race-count-input-container').style.display = 'flex';
        
    };
}
