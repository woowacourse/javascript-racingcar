import { app } from "../index.js";
import { getRandomNumber } from "./utils.js";

export const gameStart = function (count) {
  const racingCarElements = document.querySelector("#racing-cars");
  
  for (let round = 0; round < Number(count); round++) {
    app.cars.forEach((car, index) => {
      const randomNumber = getRandomNumber();
      car.moveForward(randomNumber);
    });
  }
};