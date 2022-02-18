import { $ } from "../dom/dom.js";
export default class RacingCarView{
    renderGameWinners(winners){
        const winnerElement = `
        <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
        <button class="restart-button">다시 시작하기</button>
        `;
        $('.racing-result').insertAdjacentHTML('afterbegin', winnerElement);
    }
    renderRacingContent(carArray){
        const carElement = carArray.map((car,index) => {
            return `<div class="car">
                <label>${car.name}</label>
                <div class="car-${index} step-container"></div>
                </div>`
        }).join('');

        $('.racing-content').insertAdjacentHTML('afterbegin',carElement); 
    }
    renderCarArrowResult(forwardCount) {
        return '<p>⬇️</p>'.repeat(forwardCount);
    }
    renderSpinningContent(elementIndex, forwardCount){
        $(`.car-${elementIndex}`).insertAdjacentHTML('afterbegin', `<p class="is-loading step-${elementIndex}"></p>`.repeat(forwardCount));
    }
    renderArrowContent(element ,index){
        const elementNode = document.querySelectorAll(element)[index];
        elementNode.classList.remove('is-loading');
        elementNode.textContent = '⬇️';
    }
}
