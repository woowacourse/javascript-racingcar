import Message from '../constant/Message.js';

const { OUTPUT } = Message;

class Output {
  static roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} ${OUTPUT.colon} ${OUTPUT.advance.repeat(car.getAdvance())}`);
    });

    console.log('');
  }

  static winnerResult(winnerCars) {
    console.log(
      `${OUTPUT.winner} ${winnerCars.map((winnerCar) => winnerCar.getName()).join(OUTPUT.combiner)}`
    );
  }
}

export default Output;
