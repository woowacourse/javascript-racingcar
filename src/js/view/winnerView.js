import { handleRestartButton } from "../controller/winnerController.js";

export const displayWinners = function (winners) {
//   let winnerContent = "";

//   winnerContent = `<section>
//   <h2>🏆 최종 우승자: ${winners.join(", ")} 🏆</h2>
//   <div class="d-flex justify-center">
//     <button id="restart-button" type="button" class="btn btn-cyan">다시 시작하기</button>
//   </div>
// </section>`;

  const winnerSection = document.querySelector('#winner-container > section');
  const h2Element = document.createElement('h2');
  h2Element.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
  winnerSection.prepend(h2Element);


  // document.querySelector("#winner-container").innerHTML = winnerContent;
  document.querySelector("#winner-container").style.display = "flex";
};
