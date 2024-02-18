import Message from '../constant/Message.js';

const { OUTPUT } = Message;

const Output = {
  notice() {
    console.log(OUTPUT.RESULT_NOTICE);
  },

  roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} ${OUTPUT.COLON} ${OUTPUT.ADVANCE.repeat(car.getAdvance())}`);
    });

    console.log('');
  },

  winnerResult(winnerCars) {
    console.log(
      `${OUTPUT.WINNER} ${winnerCars.map((winnerCar) => winnerCar.getName()).join(OUTPUT.COMBINER)}`
    );
  },
};

export default Output;
