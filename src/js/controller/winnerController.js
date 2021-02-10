import { app } from "../index.js";
import { initializeInputView } from "../view/inputView.js";
import { initializeRacingView } from "../view/racingView.js";
import { displayWinnerView, initializeWinnerView } from "../view/winnerView.js";

export const chooseWinners = function () {
  const maxPosition = Math.max(...app.cars.map((car) => car.position));
  const winners = app.cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  displayWinnerView(winners);
};

export const handleRestartButton = function () {
  // 자동차 이름 input 빈칸인지 체크
  // 시도횟수 input 빈칸, display none 인지 체크
  // racing car도 display none // , 엘리먼트 없어야함
  // winner container도 display none // , 엘리먼트 없어야함

  initializeInputView();
  initializeRacingView();
  initializeWinnerView();
};
