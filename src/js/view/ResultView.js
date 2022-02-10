export default class ResultView {
  constructor() {
    this.result = [];
  }

  setResult = (result) => {
    this.result = result;
  };

  renderResult = () => {
    const $result = document.querySelector("#result");
    $result.innerHTML = this.makeResultTemplate();
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
}
