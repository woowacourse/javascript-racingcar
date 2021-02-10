/* eslint-disable max-lines-per-function */

import { $ } from '../utils/index.js';

export default class RacingGameView {
  renderCountInput() {
    $('.count-container').innerHTML = `
      <p>시도할 횟수를 입력해주세요.</p>
      <div class="d-flex">
        <input 
          type="number" 
          class="count-input w-100 mr-2" 
          placeholder="시도 횟수"
        />
        <button type="button" class="count-btn btn btn-cyan">확인</button>
      </div>
    `;
  }

  renderProgress(cars) {
    function progressTemplate(car) {
      return `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(car.position)}
        </div>
      `;
    }

    $('.progress-container').innerHTML = `
      <section class="mt-4">
        <div class="d-flex">
          ${cars.map(car => progressTemplate(car)).join('')}
        </div>
      </section>
    `;
  }

  renderResult(winners) {
    $('.result-container').innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
          <button type="button" class="reset-btn btn btn-cyan">
            다시 시작하기
          </button>
        </div>
      </section>
    `;
  }

  reset() {
    $('.car-name-input').value = '';
    $('.count-container').innerHTML = '';
    $('.progress-container').innerHTML = '';
    $('.result-container').innerHTML = '';
  }
}
