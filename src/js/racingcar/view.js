import Template from "../layouts/template.js";

class RacingCarView {
  constructor() {
    this.template = new Template();
  }
  renderCount() {
    const $countSection = document.querySelector("#count");
    $countSection.style.display = "block";
    $countSection.innerHTML = this.template.countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = document.querySelector("#process");
    $processSection.style.display = "block";
    $processSection.innerHTML = this.template.processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = document.querySelector("#result");
    $resultSection.style.display = "block";
    $resultSection.innerHTML = this.template.resultSectionTemplate(winners);
  }

  resetCar() {
    const $carInputSection = document.querySelector("#car-input");
    $carInputSection.value = "";
  }

  resetCount() {
    const $countSection = document.querySelector("#count");
    $countSection.style.display = "none";
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = document.querySelector("#process");
    $processSection.style.display = "none";

    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = document.querySelector("#result");
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
