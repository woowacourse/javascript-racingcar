const Race = require('../src/domain/Race');
const Car = require('../src/domain/Car');

const getRacingCar = (car, randomTrace) => {
  randomTrace.forEach((random) => {
    car.move(random);
  });

  return car;
};

describe('Race - getWinner() 기능 테스트', () => {
  test('crong은 2칸 전진, honux는 1칸 전진했을 때 crong이 우승', () => {
    const race = new Race();

    const cars = [
      getRacingCar(new Car('crong'), [5, 5]),
      getRacingCar(new Car('honux'), [5, 1]),
    ];

    cars.forEach((car) => {
      race.addCar(car);
    });

    expect(race.getWinners()).toEqual(['crong']);
  });

  test('crong은 2칸 전진, honux는 2칸 전진했을 때 pobi는 한 칸 전진했을 때 crong, honux 우승', () => {
    const race = new Race();

    const cars = [
      getRacingCar(new Car('crong'), [5, 5]),
      getRacingCar(new Car('honux'), [5, 5]),
      getRacingCar(new Car('pobi'), [5, 1]),
    ];

    cars.forEach((car) => {
      race.addCar(car);
    });

    expect(race.getWinners()).toEqual(['crong', 'honux']);
  });
});
