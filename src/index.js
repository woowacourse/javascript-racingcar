import { carNameInput, tryInput } from "./view/Input.js";
import Move from "./Move.js";
import Output from "./view/Output.js";

class App {
  async play() {
    const cars = await carNameInput();
    const tryNumber = await tryInput();
    const carsMove = [];

    cars.map((car) => carsMove.push(new Move(car)));

    console.log("실행결과");

    for (let i = 0; i <= tryNumber; i++) {
      carsMove.forEach((carMove) => {
        carMove.move();
        Output.printMove(carMove.getInfo());
      });
      console.log("");
    }
    const winners = [];
    carsMove.map((carMove) => {
      winners.push(carMove.getInfo());
    });
    const maxMove = Math.max(
      ...winners.map((winner) => {
        return winner.moveCount;
      })
    );
    const result = winners
      .filter((winner) => {
        return winner.moveCount === maxMove;
      })
      .map((winner) => {
        return winner.carName;
      });

    Output.printWinner(result);
  }
}

new App().play();
