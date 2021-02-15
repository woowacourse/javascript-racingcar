/* eslint-disable max-lines-per-function */

import { wait } from '../utils/index.js';

export default class RacingGameView {
  constructor() {}

  renderInitialView() {
    const $app = document.querySelector('#app');

    $app.innerHTML = `
      <div class="d-flex justify-center mt-5">
        <div class="input-container">
          <section>
            <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
            <p>
              5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
              예시) EAST,WEST,SOUTH,NORTH
            </p>
          </section>
          <section class="name-container">
            <div class="d-flex">
              <input
                type="text"
                class="car-name-input w-100 mr-2"
                placeholder="자동차 이름"
              />
              <button type="button" class="car-name-btn btn btn-cyan">
                확인
              </button>
            </div>
          </section>
          <section class="count-container mt-5"></section>
        </div>
      </div>
      <div class="progress-container d-flex justify-center mt-5"></div>
      <div class="result-container d-flex justify-center mt-5"></div> 
    `;
  }

  renderCountInput() {
    const $countContainer = document.querySelector('.count-container');

    $countContainer.innerHTML = `
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

  async renderProgress(cars) {
    const $progressContainer = document.querySelector('.progress-container');

    $progressContainer.innerHTML = `
    <section class="mt-4">
      <div class="d-flex">
        ${progressTemplate(cars)}
      </div>
    </section>
  `;
    await this.animateProgress(cars);

    function progressTemplate(cars) {
      return cars.reduce((innerHTML, car, idx) => {
        return (innerHTML += `
        <div class ="progress-${idx}">
          <div class="car-player mr-2">${car.name}</div>
          <div class="d-flex justify-center mt-4">
            <div class="relative spinner-container">
              <span class="material spinner"></span>
            </div>
          </div>
        </div>
        `);
      }, '');
    }
  }

  async animateProgress(cars) {
    for (const [idx, car] of cars.entries()) {
      const progress = document.querySelector(`.progress-${idx}`);

      await wait(1);
      progress.innerHTML = `
        <div class="car-player mr-2">${car.name}</div>
        ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(car.position)}
      `;
    }
  }

  renderResult(winners) {
    const $resultContainer = document.querySelector('.result-container');

    $resultContainer.innerHTML = `
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
}
