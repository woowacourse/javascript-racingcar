export const getWinnerPosition = (carList) => {
  const winnerPosition = Math.max(...carList.map((car) => car.getPosition()));

  return winnerPosition;
};

export const getWinners = (carList) => {
  const winnerPosition = getWinnerPosition(carList);

  return carList
    .filter((car) => car.getPosition() === winnerPosition)
    .map((winner) => winner.getName());
};
