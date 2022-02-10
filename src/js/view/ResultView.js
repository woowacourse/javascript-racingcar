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
    // $result.insertAdjacentElement(
    //   "beforeend",
    //   this.makeResultTemplate(this.result)
    // );
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

{
  /* <div class="cars-name">${names
          .map((name) => `<span class="car-name">${name}</span>`)
          .join("")}</div>
        <div class="">
          ${forwardCounts
            .map((count) => `<div>${"⬇️️".repeat(count)}</div>`)
            .join("")}
        </div> */
}
