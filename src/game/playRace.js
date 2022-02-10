export default function playRace(cars, count) {
  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }
}
