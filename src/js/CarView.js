import { SELECTOR } from "./constants.js";

export default class CarView {
  constructor(name) {
    this.gameProgressContainer = document.querySelector(
      SELECTOR.GAME_PROGRESS.CONTAINER
    );
    this.carView = document.createElement("div");
    this.carView.innerHTML = `<div class="car-player mr-2">${name}</div>`;

    this.gameProgressContainer.append(this.carView);
    this.addSpinner();
  }

  addSpinner() {
    this.carView.insertAdjacentHTML(
      "beforeend",
      `<div class="d-flex justify-center mt-4">
        <div class="relative spinner-container" hidden>
          <span class="material spinner"></span>
        </div>
      </div>`
    );
  }

  addForwardIcon() {
    this.carView.lastElementChild.insertAdjacentHTML(
      "beforebegin",
      '<div class="forward-icon mt-2">⬇️️</div>'
    );
  }
}
