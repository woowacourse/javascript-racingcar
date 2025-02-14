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

  return cars
    .filter((car) => car.count === maxAdvanceCount)
    .map((car) => car.name);
}

export default findWinners;
