import { DOM_STRING } from './constants.js';

const template = {
  racingProgress(carList) {
    return `
      <ul id="${DOM_STRING.RACING_PROGRESS_LIST}">
        ${carList
          .map(
            () => `
            <li class="${DOM_STRING.RACING_CAR}">
              <p class="${DOM_STRING.CAR_NAME}"></p>
              <ul class="${DOM_STRING.PROGRESS_LIST}"></ul>
            </li>
            `
          )
          .join('')}
    </ul>
  `;
  },
  racingResult: `
      <section id="racing-result">
        <h2 hidden>자동차 경주 결과</h2>
        <h3 id="${DOM_STRING.RESULT_MESSAGE}">🏆 최종 우승자: <span id="${DOM_STRING.WINNERS}"></span> 🏆</h3>
        <button id="${DOM_STRING.RESTART_BUTTON}">다시 시작하기</button>
      </section>
      `,
  progressList: `<li class="${DOM_STRING.PROGRESS}">⬇️️</li>`,
  loadingAnimation: `<div class="${DOM_STRING.SPINNER}"><div></div><div></div><div></div><div></div></div>`,
};

export default template;
