import generateCars from '../model/generateCars.js';
import { showArrowProgress, showCarElements } from '../view/showProgress.js';

const sortCars = cars => {
  return [...cars].sort((a, b) => b.position - a.position);
};

const handleRace = async count => {
  const cars = generateCars();
  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }

  showCarElements(sortCars(cars));
  showArrowProgress();
};

export default handleRace;
