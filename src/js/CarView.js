import { SELECTOR } from "./constants.js";
import { $ } from "./utils.js";

export default class CarView {
  constructor(name) {
    this.$gameProgressContainer = $(SELECTOR.GAME_PROGRESS.CONTAINER);
    this.$carView = document.createElement("div");
    this.$carView.innerHTML = `<div class="car-player mr-2">${name}</div>`;

    this.$gameProgressContainer.append(this.$carView);
  }

  addForwardIcon() {
    this.$carView.insertAdjacentHTML(
      "beforeend",
      '<div class="forward-icon mt-2">⬇️️</div>'
    );
  }
}
