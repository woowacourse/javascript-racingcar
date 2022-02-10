import RacingCarModel from "../models/RacingCarModel.js";

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
  }

  init = () => {
    this.bindEvent();
  };

  bindEvent = () => {
    document
      .querySelector("#car-names-input")
      .closest("form")
      .addEventListener("submit", this.submitCarNamesHandler);
  };

  submitCarNamesHandler = (e) => {
    e.preventDefault();
    const carNames = document.querySelector("#car-names-input").value;
    try {
      this.model.setCars(carNames);
    } catch (err) {
      alert(err);
    }
  };
}
