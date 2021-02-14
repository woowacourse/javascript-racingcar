import {
  parseHTML,
  carNameSection,
  countSection,
  carPlayerSection,
  resultSection,
  state,
} from "./index.js";
import { resetGame } from "./game-utils.js";

export const resetCarNamesInput = () => {
  carNameSection.element.querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  countSection.element.querySelector("input").value = "";
};

export const resetView = (elements) => {
  for (let element of elements) {
    element.hide();
  }
};

const racingCarComponent = (carName) => {
  return parseHTML(`<div class="car-player mr-2">${carName}</div>`);
};

const totalStepComponent = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

export const setResultView = () => {
  carPlayerSection.element.querySelector("div").innerHTML = "";

  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);

    resultDiv.appendChild(racingCarComponent(car.name));
    for (let idx = 0; idx < car.totalStep; idx++) {
      const step = totalStepComponent();
      resultDiv.appendChild(step);
    }
    carPlayerSection.element.querySelector("div").append(resultDiv);
  });
};

const getWinnerText = (winners) =>
  winners.length === 1 ? winners[0] : winners.join(", ");

export const setWinnerView = (winners) => {
  resultSection.element.innerHTML = "";
  const winnerText = getWinnerText(winners);

  const winnerTemplateString = `<h2>🏆 최종 우승자: ${winnerText} 🏆</h2>`;
  const winnerTemplate = parseHTML(winnerTemplateString);
  const resetBtnString = `<div class="d-flex justify-center">
                            <button type="button" class="btn btn-cyan">다시 시작하기</button>
                          </div>`;
  const resetBtn = parseHTML(resetBtnString);

  resultSection.element.append(winnerTemplate);
  resultSection.element.append(resetBtn);

  resetGame();
};
