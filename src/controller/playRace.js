import generateCars from '../model/generateCars.js';
import showResult from '../view/showResult.js';
import getWinners from '../model/getWinners.js';
import showWinners from '../view/showWinners.js';
import showRestart from '../view/showRestart.js';

const sortCars = cars => {
  return [...cars].sort((a, b) => b.position - a.position);
};

const playRace = count => {
  const cars = generateCars();

  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }

  showResult(sortCars(cars));
  showWinners(getWinners(cars));
  showRestart();
};

export default playRace;
