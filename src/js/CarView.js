import { SELECTOR } from "./constants.js";

export default class CarView {
  constructor(name) {
    this.gameProgressContainer = document.querySelector(
      SELECTOR.GAME_PROGRESS.CONTAINER
    );
    this.block = document.createElement("div");
    this.gameProgressContainer.append(this.block);
    this.block.innerHTML = `<div class="car-player mr-2">${name}</div>`;
  }

  addForwardIcon() {
    this.block.insertAdjacentHTML(
      "beforeend",
      '<div class="forward-icon mt-2">⬇️️</div>'
    );
  }
}
