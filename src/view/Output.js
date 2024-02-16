import Message from "../constant/Message.js";

const { OUTPUT } = Message;

class Output {
  static roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} : ${"-".repeat(car.getAdvance())}`);
    });

    console.log("");
  }

  static winnerResult(winnerCars) {
    console.log(`${OUTPUT.WINNER} ${winnerCars.map((winnerCar) => winnerCar.getName()).join(",")}`);
  }
}

export default Output;
