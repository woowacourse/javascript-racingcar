import { DOM_STRING } from '../configs/dom.js';
import { DELIMETER } from '../configs/constants.js';
import validator from '../utils/validator.js';

const template = {
  getInputSectionHTML({ carList, isRacing, winners }) {
    return `
      <div class="input-form">
        <label id="car-name-description" for="car-name-input"
          >5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요.</label
        >
        <form>
          <input type="text" id="car-name-input" placeholder="east, west, south, north, all" ${
            ((isRacing || winners.length > 0) && 'disabled') || ''
          } />
          <button id="car-name-button" ${
            ((isRacing || winners.length > 0) && 'disabled') || ''
          }>확인</button>
        </form>
      </div>
      <div class="input-form">
        <label id="racing-count-description" for="racing-count-input"
          >시도할 횟수를 입력해주세요.</label
        >
        <form>
          <input type="number" id="racing-count-input" placeholder="10" ${
            ((isRacing ||
              validator.isCarListNotFound(carList) ||
              winners.length > 0) &&
              'disabled') ||
            ''
          } />
          <button id="racing-count-button" ${
            ((isRacing ||
              validator.isCarListNotFound(carList) ||
              winners.length > 0) &&
              'disabled') ||
            ''
          }>확인</button>
        </form>
      </div>
    `;
  },
  getRacingResultHTML({ carList, isRacing }) {
    return `
      <ul id="${DOM_STRING.RESULT_LIST}">
        ${carList
          .map(
            (car) => `
            <li class="${DOM_STRING.RACING_CAR}">
              <p class="${DOM_STRING.CAR_NAME}">${car.name}</p>
              <ul class="${DOM_STRING.PROGRESS_LIST}">
                ${`<li class="${DOM_STRING.PROGRESS}">⬇️️</li>`.repeat(
                  car.distance
                )}
<<<<<<< HEAD
                ${
                  (isRacing &&
                    `<li class="progress"><div class="${DOM_STRING.LOADING}"></div></li>`) ||
                  ''
                }
=======
>>>>>>> remotes/upstream/greenblues1190
              </ul>
            </li>
            `
          )
          .join('')}
    </ul>
  `;
  },
<<<<<<< HEAD
  getResultHTML({ winners }) {
=======
  getResultHTML(winners) {
>>>>>>> remotes/upstream/greenblues1190
    return (
      (winners.length > 0 &&
        `
        <h6 id="${DOM_STRING.RESULT_MESSAGE}">🏆 최종 우승자: <span id="${
          DOM_STRING.WINNERS
        }">${winners.join(`${DELIMETER} `)}</span> 🏆</h6>
        <button id="${DOM_STRING.RESTART_BUTTON}">다시 시작하기</button>
        `) ||
      ''
    );
  },
};

export default template;
