import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from "./template.js";

class RacingCarView {
  renderCount() {
    const $countSection = document.querySelector("#count");
    $countSection.style.display = "block";
    $countSection.innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = document.querySelector("#process");
    $processSection.style.display = "block";

    $processSection.innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = document.querySelector("#result");
    $resultSection.style.display = "block";
    $resultSection.innerHTML = resultSectionTemplate(winners);
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
    $result.innerHTML = ``;
  }

  reset() {
    this.resetCount();
    this.resetProcess();
    this.resetResult();
  }
}

export default RacingCarView;
