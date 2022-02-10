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
    const names = this.result.map((car) => car.name);
    const forwardCounts = this.result.map((car) => car.forward);
    const template = `
        <div class="cars-name">${names
          .map((name) => `<span class="car-name">${name}</span>`)
          .join("")}</div>
        <div class="">
          ${forwardCounts
            .map((count) => `<span>${"⬇️️".repeat(count)}</span>`)
            .join("")}
        </div>
        `;
    return template;
  };
}
