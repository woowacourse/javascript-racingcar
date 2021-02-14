import Template from "../layouts/template.js";
import { $ } from "../utils/util.js";

class RacingCarView {
  constructor() {
    this.template = new Template();
  }
  renderCount() {
    const $countSection = $("#count");
    $countSection.style.display = "block";
    $countSection.innerHTML = this.template.countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = $("#process");
    $processSection.style.display = "block";
    $processSection.innerHTML = this.template.processSectionTemplate(cars);
  }

  renderGameLoading() {
    const $processCarSections = document.querySelectorAll(".process-car");
    $processCarSections.forEach(carSection => {
      carSection.innerHTML += this.template.processCarLoadingTemplate();
    });
  }

  renderResult(winners) {
    const $resultSection = $("#result");
    $resultSection.style.display = "block";
    $resultSection.innerHTML = this.template.resultSectionTemplate(winners);
  }

  resetCar() {
    const $carInputSection = $("#car-input");
    $carInputSection.value = "";
  }

  resetCount() {
    const $countSection = $("#count");
    $countSection.style.display = "none";
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = $("#process");
    $processSection.style.display = "none";

    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = $("#result");
    $resultSection.style.display = "none";
    $resultSection.innerHTML = ``;
  }

  reset() {
    this.resetCar();
    this.resetCount();
    this.resetProcess();
    this.resetResult();
  }
}

export default RacingCarView;
