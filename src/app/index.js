import { splitString } from "../lib/utils.js";
import Car from "./car.js";

class RacingCarGame {
  constructor() {
    this.initDOM();
    this.initHandler();
  }
  initDOM() {
    this.carNameInputField = document.querySelector("#car-name-input-field");
  }
  initHandler() {
    this.carNameInputField.addEventListener(
      "click",
      this.onCarNameInputFieldClick.bind(this)
    );
  }
  onCarNameInputFieldClick(e) {
    e.preventDefault();
    if (e.target.id === "car-name-btn") {
      const names = splitString(
        e.currentTarget.querySelector("#car-name-input").value,
        ","
      );
      this.makeCars(names);
    }
  }
  makeCars(names) {
    this.cars = names.map((name) => new Car(name));
    console.log(this.cars);
  }
}
export default RacingCarGame;
