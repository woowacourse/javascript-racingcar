import {
  DELAY_PER_ROUND,
  DOM,
  HIDE_CLASS_NAME,
  ID_PREFIX,
  SHOW_CLASS_NAME,
} from '../lib/constants.js';
import icons from '../lib/icons.js';
import { delay, findElement } from '../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.#init();
  }

  #init() {
    this.inputField = findElement(ID_PREFIX, DOM.INPUT_FIELD);
    this.resultField = findElement(ID_PREFIX, DOM.RESULT_FIELD);
    this.#initInputField();
    this.#initResultField();
    this.#initDOM();
  }

  #initInputField() {
    this.inputField.innerHTML = `<form id="car-name-input-form">
    <label for="car-name-input">5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요.</label>
    <div id="car-name-input-field">
      <input id="car-name-input" type="text" />
      <button id="car-name-btn">확인</button>
    </div>
  </form>  <form id="count-input-form" class="hide">
    <label for="count-input">시도할 횟수를 입력해주세요.</label>
    <div id="count-input-field">
      <input id="count-input" type="number" />
      <button id="count-btn">확인</button>
    </div>
  </form>`;
  }

  #initResultField() {
    this.resultField.innerHTML = `<section id="game-progress">
    </section>
    <section id="winners">
      <button id="${DOM.RESTART_BTN}" class="hide">다시 시작하기</button> 
    </section>`;
  }

  #initDOM() {
    this.countInputForm = findElement(ID_PREFIX, DOM.COUNT_INPUT_FORM);
    this.gameProgress = findElement(ID_PREFIX, DOM.GAME_PROGRESS);
    this.winners = findElement(ID_PREFIX, DOM.WINNERS);
    this.carNameBtn = findElement(ID_PREFIX, DOM.CAR_NAME_BTN);
    this.countBtn = findElement(ID_PREFIX, DOM.COUNT_BTN);
    this.restartBtn = findElement(ID_PREFIX, DOM.RESTART_BTN);
  }

  renderInitialGameState(cars) {
    const progressTemplate = cars.reduce(
      (acc, car) => `${acc}${RacingCarGameView.generateProgressTemplate(car)}`,
      '',
    );
    this.gameProgress.innerHTML = progressTemplate;
  }

  renderAfterCarSetting() {
    RacingCarGameView.renderElement(this.countInputForm);
  }

  renderResults(winners) {
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winners,
    });
    this.winners.insertAdjacentHTML('beforebegin', winnersTemplate);

    RacingCarGameView.renderElement(this.restartBtn);
  }

  /** this가 없다고 해서 static으로 바꾸긴 싫은데 이 옵션이 어떤 의미에서 필요할까요 ? */
  renderGoForwardCars(results) {
    results.forEach(({ isForward, car: { name, id } }) => {
      if (isForward) {
        findElement(ID_PREFIX, `${name}${id}`).insertAdjacentHTML(
          'afterend',
          `<div class="${DOM.STEP}">⬇️️</div>`,
        );
      }
    });
  }

  async renderLoadingAboutRound() {
    const loadingIconNodes = document.querySelectorAll(DOM.LOADING_ICON.toCLASS());
    RacingCarGameView.renderElements(loadingIconNodes);
    await RacingCarGameView.triggerAnimation(
      loadingIconNodes,
      RacingCarGameView.rotateAnimation,
      DELAY_PER_ROUND,
    );
    RacingCarGameView.hideElements(loadingIconNodes);
  }

  disableInputButtons() {
    this.carNameBtn.disabled = true;
    this.countBtn.disabled = true;
  }

  static generateProgressTemplate({ name, id }) {
    return `
    <div class="${DOM.CAR_PROGRESS}">
      <div class="${DOM.CAR_NAME}" id="${name}${id}">${name}</div>
      ${icons.LOADING}
    </div>
  `;
  }

  static generateWinnersTemplate({ winners }) {
    return `<h2 id="${DOM.WINNER_CONTAINER}">🏆최종 승리자:<span id="${
      DOM.WINNER_NAME
    }">${winners.join(',')}</span>🏆</h2>
      `;
  }

  static renderElements(nodeList) {
    nodeList.forEach((node) => RacingCarGameView.renderElement(node));
  }

  static hideElements(nodeList) {
    nodeList.forEach((node) => RacingCarGameView.hideElement(node));
  }

  static renderElement(el) {
    el.classList.replace(HIDE_CLASS_NAME, SHOW_CLASS_NAME);
  }

  static hideElement(el) {
    el.classList.replace(SHOW_CLASS_NAME, HIDE_CLASS_NAME);
  }

  static async triggerAnimation(nodes, animation, during) {
    requestAnimationFrame((timestamp) => animation(0, timestamp, nodes, during));
    await delay(during);
  }

  static rotateAnimation = (progress, start, nodes, during) => {
    nodes.forEach((node) => {
      node.style.transform = `rotate(${progress / 10}deg)`;
    });
    if (progress < 1000) {
      requestAnimationFrame((timestamp) =>
        RacingCarGameView.rotateAnimation(timestamp - start, start, nodes, during),
      );
    }
  };
}
// (timestamp) => rotateAnimation(0, timestamp, nodes)
export default RacingCarGameView;
