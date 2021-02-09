/* eslint-disable max-lines-per-function */

export default class RacingGameView {
  constructor() {
    this.$app = document.querySelector('#app');
  }

  renderInitialView() {
    this.$app.innerHTML = `
      <div class="d-flex justify-center mt-5">
        <div class="input-container">
          <section>
            <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
            <p>
              5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
              예시) EAST, WEST, SOUTH, NORTH
            </p>
          </section>
          <section>
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
}
