// [
//   {
//     name: "A",
//     count: 2
//   },
//   {
//     name: "B",
//     count: 1
//   },
//   {
//     name: "C",
//     count: 3
//   }
// ];
function findWinners(cars) {
  const maxAdvanceCount = Math.max(...cars.map((cars) => cars.count));
  const winners = cars.filter((car) => car.count === maxAdvanceCount);

  let winnersName = [];

  for (let winner of winners) {
    winnersName.push(winner.name);
  }

  return winnersName;
}

export default findWinners;
