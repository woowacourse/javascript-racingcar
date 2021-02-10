export const getWinners = (cars) => {
  let winners = [];
  let maxForwardCount = -1;

  cars.forEach((car) => {
    if (car.forwardCount > maxForwardCount) {
      winners = [car.name];
      maxForwardCount = car.forwardCount;
    } else if (car.forwardCount === maxForwardCount) {
      winners.push(car.name);
    }
  });
  return winners.join(', ');
};
