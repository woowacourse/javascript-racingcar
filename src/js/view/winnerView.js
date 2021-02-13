import { $ } from "../controller/utils.js";

export const displayWinnerView = function (winners) {
  const winnerElement = $("#winner-container > section > h2");

  winnerElement.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
  $("#winner-container").style.display = "flex";
};

export const initializeWinnerView = function () {
  const winnerElement = $("#winner-container > section > h2");
  $("#winner-container").style.display = "none";
  winnerElement.innerText = "🏆 최종 우승자 🏆";
};
