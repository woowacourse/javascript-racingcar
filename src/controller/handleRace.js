import generateCars from '../model/generateCars.js';
import { getWinners, getMaxPosition } from '../model/getWinners.js';
import { showArrowProgress, showCarElements } from '../view/showProgress.js';
import { showRestart, showWinners } from '../view/showResult.js';
import waitSeconds from '../utils/waitSeconds.js';
import hideLoader from '../view/hideLoader.js';

const sortCars = cars => {
  return [...cars].sort((a, b) => b.position - a.position);
};

const finishRace = async cars => {
  const winner = getWinners(cars);
  showWinners(winner);
  showRestart();
  await waitSeconds(2000);
  alert(`🎉 ${[...winner]}의 우승을 축하합니다! 🎉`);
};

const handleRace = async count => {
  const cars = generateCars();
  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }

  showCarElements(sortCars(cars));
  showArrowProgress();
  await waitSeconds((getMaxPosition(cars) + 1) * 1000);
  hideLoader();
  finishRace(cars);
};

export default handleRace;
