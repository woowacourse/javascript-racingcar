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
    document
      .querySelector("#racing-count-input")
      .closest("form")
      .addEventListener("submit", this.submitRacingCountHandler);
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

  submitRacingCountHandler = (e) => {
    e.preventDefault();
    const racingCount = document.querySelector("#racing-count-input").value;
    this.model.setRacingCount(racingCount);
    this.playGame();
  };
}
