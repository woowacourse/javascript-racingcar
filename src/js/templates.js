import { DOM_STRING, DELIMETER } from './constants.js';

const template = {
  renderRacingProgress(carList) {
    return carList
      ? `
      <ul id="${DOM_STRING.RESULT_LIST}">
        ${carList
          .map(
            (car) => `
            <li class="${DOM_STRING.RACING_CAR}">
              <p class="${DOM_STRING.CAR_NAME}">${car.name}</p>
              <ul class="${DOM_STRING.PROGRESS_LIST}"></ul>
            </li>
            `
          )
          .join('')}
    </ul>
  `
      : '';
  },
  renderRacingResult(winners) {
    return winners
      ? `
      <section id="racing-result">
        <h2 id="${DOM_STRING.RESULT_MESSAGE}">🏆 최종 우승자: <span id="${
          DOM_STRING.WINNERS
        }">${winners.join(`${DELIMETER} `)}</span> 🏆</h2>
        <button id="${DOM_STRING.RESTART_BUTTON}">다시 시작하기</button>
      </section>
      `
      : '';
  },
  renderProgressList(distance) {
    return distance ? `<li class="${DOM_STRING.PROGRESS}">⬇️️</li>` : '';
  },
  renderLoadingAnimation() {
    return `<div class="spinner"><div></div><div></div><div></div><div></div></div>`;
  },
};

export default template;
