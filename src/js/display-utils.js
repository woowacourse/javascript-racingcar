import { parseHTML, carNameSection, countSection, resultSection } from "./index.js";
import { resetGame } from "./game-utils.js";

export const resetCarNamesInput = () => {
  carNameSection.element.querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  countSection.element.querySelector("input").value = "";
};

export const resetProgressView = () => {
  document.querySelector("#show-game-progress > .d-flex").innerHTML = "";
};

export const hideView = (elements) => {
  for (let element of elements) {
    element.hide();
  }
};

export const racingCarComponent = (carName) => {
  return parseHTML(
    `<div class="car-block">
      <div class="car-player mr-2">${carName}</div>
      <div id="${carName}-progress"></div>
     </div>`
  );
};

export const totalStepComponent = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

const getWinnerText = (winners) => (winners.length === 1 ? winners[0] : winners.join(", "));

export const setWinnerView = (winners) => {
  resultSection.element.innerHTML = "";
  const winnerText = getWinnerText(winners);

  const winnerTemplate = parseHTML(`<h2>🏆 최종 우승자: ${winnerText} 🏆</h2>`);
  const resetBtnString = `<div class="d-flex justify-center">
                            <button type="button" class="btn btn-cyan">다시 시작하기</button>
                          </div>`;
  const resetBtn = parseHTML(resetBtnString);

  resultSection.element.append(winnerTemplate);
  resultSection.element.append(resetBtn);

  resetGame();
};
