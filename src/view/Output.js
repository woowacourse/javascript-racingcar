import Condition from '../constant/Condition.js';
import Message from '../constant/Message.js';

const { COMBINER } = Condition;
const { OUTPUT } = Message;

const Output = {
  notice() {
    console.log(OUTPUT.RESULT_NOTICE);
  },

  roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} : ${OUTPUT.ADVANCE_LETTER.repeat(car.getAdvance())}`);
    });

    console.log('');
  },

  winnerResult(winnerCars) {
    console.log(
      `${OUTPUT.WINNER_NOTICE} ${winnerCars.map((winnerCar) => winnerCar.getName()).join(COMBINER)}`
    );
  },
};

export default Output;
