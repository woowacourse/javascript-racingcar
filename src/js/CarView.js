import { CLASSNAME, SELECTOR } from "./constants.js";
import { $, hideElement, showElement } from "./utils.js";

const {
  MODIFIER: { HIDDEN },
  GAME_PROGRESS: { SPINNER_ICON },
} = CLASSNAME;

const TEMPLATE = {
  CAR_NAME: (name) => `<div class="car-player mr-2">${name}</div>`,
  FORWARD_ICON: `<div class="forward-icon mt-2">⬇️️</div>`,
  SPINNER_ICON: `<div class="d-flex justify-center mt-4 ${SPINNER_ICON} ${HIDDEN}">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>`,
};

export default class CarView {
  constructor(name) {
    this.$gameProgressContainer = $(SELECTOR.GAME_PROGRESS.CONTAINER);
    this.$carView = document.createElement("div");
    this.$carView.innerHTML = `
      ${TEMPLATE.CAR_NAME(name)}
      ${TEMPLATE.SPINNER_ICON}
    `;

    this.$carName = this.$carView.querySelector(
      SELECTOR.GAME_PROGRESS.CAR_NAME
    );
    this.$spinnerIcon = this.$carView.querySelector(
      SELECTOR.GAME_PROGRESS.SPINNER_ICON
    );

    this.$gameProgressContainer.append(this.$carView);
  }

  addForwardIcon() {
    this.$carName.insertAdjacentHTML("afterend", TEMPLATE.FORWARD_ICON);
  }

  showSpinnerIcon() {
    showElement(this.$spinnerIcon);
  }

  hideSpinnerIcon() {
    hideElement(this.$spinnerIcon);
  }
}
