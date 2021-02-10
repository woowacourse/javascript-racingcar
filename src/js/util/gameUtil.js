export const getRandomNumber = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getWinners = (cars) => {
  const scores = cars.map((car) => car.score);
  const maxScore = Math.max(...scores);

  return cars.filter((car) => car.score === maxScore).map((car) => car.name);
};
