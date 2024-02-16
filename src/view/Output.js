import Message from '../constant/Message.js';

const { OUTPUT } = Message;

class Output {
  static roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} ${OUTPUT.COLON} ${OUTPUT.ADVANCE.repeat(car.getAdvance())}`);
    });

    console.log('');
  }

  static winnerResult(winnerCars) {
    console.log(
      `${OUTPUT.WINNER} ${winnerCars.map((winnerCar) => winnerCar.getName()).join(OUTPUT.COMBINER)}`
    );
  }
}

export default Output;
