export const getWinners = () => {
  const cars = document.querySelectorAll('.car-player');
  const scores = [...cars].map((car) => Number(car.dataset.forwardCount));
  const maxScore = Math.max(...scores);

  return [...cars]
    .filter((car) => Number(car.dataset.forwardCount) === maxScore)
    .map((car) => car.innerHTML)
    .join(', ');
};
