import { qs, qsAll } from "../utils/helper.js"

class RacingGameView {
  constructor() {
    this.racingArrowElement = qs(".racing-arrow");
    this.racingCarsElement = qs(".racing-cars");

  }

  showCarBoxes(carList) {
    this.racingCarsElement.innerHTML = carList
      .map((car) => car.carNameTemplate)
      .join("");
  }

  showCarsMove(carList, carMaxRace) {
    this.carList = carList;
    this.carMaxRace = carMaxRace;
    this.carArrowBox = qsAll(".car-arrow-box");
    this.num = 0;
    this.carRaceInterval = setInterval(() => this.carRace(), 1000);
  }

  carRace() {
    this.num++;
    for (let j = 0; j < this.carList.length; j++) {
      if (this.carList[j].count >= this.num) {
        this.carArrowBox[j].insertAdjacentHTML("afterbegin", `<div class="racing-arrow-wrap">⬇️️</div>`);
      } 
      if (this.num === this.carMaxRace) {
        const spinner = qsAll(".spinner");
        spinner.map((v) => v.style.opacity = 0);
        clearInterval(this.carRaceInterval);
      }
    }
  }

  restartRace() {
    this.racingCarsElement.innerHTML = "";
    this.racingArrowElement.innerHTML = "";
    this.racingResultElement.innerHTML = "";
  }

}

export default RacingGameView;
