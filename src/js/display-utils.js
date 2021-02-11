import { parseHTML, state } from "./index.js";
import { resetGame } from "./game-utils.js";

const hideElement = (element) => {
  return (element.style.display = "none");
};

export const showElement = (element) => {
  return (element.style.display = "block");
};

export const resetCarNamesInput = () => {
  document.getElementById("car-names").querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  document.getElementById("try-num").querySelector("input").value = "";
};

export const resetView = () => {
  hideElement(document.getElementById("try-num"));
  hideElement(document.getElementById("result"));
  hideElement(document.getElementById("winners"));
};

const showCarName = (carName) => {
  return parseHTML(`<div class="car-player mr-2">${carName}</div>`);
};

const showTotalStep = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

export const setResultView = () => {
  document.getElementById("result").querySelector("div").innerHTML = "";

  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);

    resultDiv.appendChild(showCarName(car.name));
    for (let idx = 0; idx < car.totalStep; idx++) {
      const step = showTotalStep();
      resultDiv.appendChild(step);
    }
    document.getElementById("result").querySelector("div").append(resultDiv);
  });
};

const getWinnerText = (winners) => {
  let winnerText = "";
  if (winners.length === 1) {
    winnerText = winners[0];
  } else {
    winnerText = winners.join(", ");
  }

  return winnerText;
};

export const setWinnerView = (winners) => {
  document.getElementById("winners").innerHTML = "";
  const winnerText = getWinnerText(winners);

  const winnerTemplateString = `<h2>🏆 최종 우승자: ${winnerText} 🏆</h2>`;
  const winnerTemplate = parseHTML(winnerTemplateString);
  const resetBtnString = `<div class="d-flex justify-center">
                            <button type="button" class="btn btn-cyan">다시 시작하기</button>
                          </div>`;
  const resetBtn = parseHTML(resetBtnString);

  document.getElementById("winners").append(winnerTemplate);
  document.getElementById("winners").append(resetBtn);

  resetGame();
};
