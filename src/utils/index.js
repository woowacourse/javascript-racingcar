import { NAME_LENGTH, MIN_RACING_COUNT, MAX_RANDOM_NUMBER, INTERVAL, ID } from "../constants.js";
import { initRacingStatus, winnerAlert, clearLoadingView, carMovementView, loadingView, winnersView } from "../view.js";
import { getElement } from "./dom.js";

const parseCarName = names => names.split(',').map(name => name.trim())

const validateCarNameLength = names => names.every(name => name.length <= NAME_LENGTH.MAX && name.length >= NAME_LENGTH.MIN);

const validateDuplicateCarName = names => new Set(names).size === names.length;

const validateRacingCount = count => count >= MIN_RACING_COUNT;

const generateRandomNumber = () => Math.floor(Math.random() * MAX_RANDOM_NUMBER);

const getMaxCount = cars => {
  let maxCount = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].racingCount >= maxCount) {
      maxCount = cars[i].racingCount;
    }
  }
  return maxCount;
};

const startRacing = (count, cars) => {
  initRacingStatus(cars)
  const timer = setInterval(()=>{
    if(count <= 1){
      const winners = getWinner(cars).map((car)=>car.name).join(',');
      clearLoadingView(cars);
      getElement(ID.RACING_WINNERS).insertAdjacentHTML('afterbegin', winnersView(winners));
      clearInterval(timer);
      return winnerAlert(winners);
    }
    moveCar(cars);
    loadingView(cars)
    count--;
  }, INTERVAL.LOADING);
}

const moveCar = (cars) => {
  clearLoadingView(cars);
  cars.forEach((car)=>{
    if(car.move()){
      getElement(`car-status-${car.name}`).insertAdjacentHTML('beforeend', carMovementView())
    }
  });
}

const getWinner = (cars) => {
  const maxCount = getMaxCount(cars);
  return cars.filter(
    car => car.racingCount === maxCount,
  );
}

export {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  generateRandomNumber,
  startRacing,
  moveCar
};
