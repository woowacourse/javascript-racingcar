export const getWinners = (cars) => {
  let winners = [];
  let maxForwardCount = -1;

  cars.forEach((car) => {
    const carName = car.name;
    const forwardCount = car.forwardCount;

    if (forwardCount > maxForwardCount) {
      winners = [carName];
      maxForwardCount = forwardCount;
    } else if (forwardCount === maxForwardCount) {
      winners.push(carName);
    }
  });
  return winners.join(', ');
};
