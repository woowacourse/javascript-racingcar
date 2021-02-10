export const displayWinnerView = function (winners) {
  const winnerElement = document.querySelector(
    "#winner-container > section > h2"
  );
  winnerElement.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
  document.querySelector("#winner-container").style.display = "flex";
};

export const initializeWinnerView = function () {
  const winnerElement = document.querySelector(
    "#winner-container > section > h2"
  );
  document.querySelector("#winner-container").style.display = "none";
  winnerElement.innerText = "🏆 최종 우승자 🏆";
};
