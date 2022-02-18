import { SELECTOR } from '../constants/constants.js';

export default class Template {
  static winnerTemplate(winnerList) {
    return `
        <h2 id="${SELECTOR.ID.WINNER_SPAN.substr(
          1
        )}">🏆 최종 우승자: ${winnerList.join(', ')}🏆</h2>
        <button id="${SELECTOR.ID.RESTART_BUTTON.substr(
          1
        )}">다시 시작하기</button>
    `;
  }

  static racingProgressTemplate(cars) {
    return `
      ${cars
        .map((car) => {
          return `
          <div class="${SELECTOR.CLASS.CAR_PROGRESS_CONTAINER.substr(1)}">
            <div class="${SELECTOR.CLASS.CAR_PROGRESS_NAME.substr(1)}">${
            car.name
          }</div>
            ${`<div class="${SELECTOR.CLASS.CAR_PROGRESS_STATUS.substr(
              1
            )}">⬇️️</div>`.repeat(car.position)}
          </div>
        `;
        })
        .join('')}
    `;
  }

  static loaderTemplate() {
    return `
        <div class="loader"></div>
    `;
  }
}
