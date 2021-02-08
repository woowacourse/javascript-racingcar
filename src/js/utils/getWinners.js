export const getWinners = () => {
  const cars = document.querySelectorAll('.car-player');
  const maxScore = Math.max(
    cars.map((car) => Number(car.dataset.forwardCount)),
  );

  return cars
    .filter((car) => Number(car.dataset.forwardCount) === maxScore)
    .map((car) => car.innerHTML)
    .join(', ');
};
