export const displayWinners = function (winners) {
  let winnerContent = "";

  winnerContent = `<section>
  <h2>🏆 최종 우승자: ${winners.join(", ")} 🏆</h2>
  <div class="d-flex justify-center">
    <button type="button" class="btn btn-cyan">다시 시작하기</button>
  </div>
</section>`;

  document.querySelector("#winner-container").innerHTML = winnerContent;
  document.querySelector("#winner-container").style.display = "flex";
};
