export const getWinners = (cars) => {
  let winners = [];
  let maxForwardCount = -1;

  cars.forEach((car) => {
    const carName = car.getName();
    const forwardCount = car.getForwardCount();

    if (forwardCount > maxForwardCount) {
      winners = [carName];
      maxForwardCount = forwardCount;
    } else if (forwardCount === maxForwardCount) {
      winners.push(carName);
    }
  });
  return winners.join(', ');
};
