export default class ResultView {
  constructor() {
    this.result = [];
    this.$result = document.querySelector("#result");
  }

  setResult = (result) => {
    this.result = result;
  };

  renderResult = () => {
    this.$result.innerHTML = this.makeResultTemplate();
  };

  makeResultTemplate = () => {
    const template = `
      <div class="racing-results">
        ${this.result
          .map(
            (result) =>
              `<div class="racing-result">
                <div class="car-name">${result.name}</div> 
                ${"<div class=arrow>⬇️️</div>".repeat(result.forward)}
              </div>`
          )
          .join("")}
      </div>
      `;
    return template;
  };

  renderWinners = (winners) => {
    this.$result.insertAdjacentHTML(
      "beforeend",
      this.makeWinnersTemplate(winners)
    );
  };

  makeWinnersTemplate = (winners) => {
    const template = ` 
      <div>
        <h3>🏆 최종 우승자: ${winners} 🏆</h3>
      </div>
    `;
    return template;
  };
}
