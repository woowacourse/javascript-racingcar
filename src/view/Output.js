class Output {
  static roundResult(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} : ${'-'.repeat(car.getAdvance())}`);
    });
  }

  static winnerResult(winnerCars) {
    console.log(`최종 우승자: ${winnerCars.map((winnerCar) => winnerCar.getName()).join(', ')}`);
  }
}

export default Output;
