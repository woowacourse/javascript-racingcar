import { $ } from "../dom/dom.js";

export default function renderGameWinners(winners){
    $('.racing-result').innerHTML = `
    <h2 class="result-text">🏆 최종 우승자: ${winners}🏆</h2>
    <button class="restart-button">다시 시작하기</button>
    `;
}