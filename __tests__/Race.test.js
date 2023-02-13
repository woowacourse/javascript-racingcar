const Race = require('../src/domain/Race');
const Car = require('../src/domain/Car');

describe('Race - getWinners() 기능 테스트', () => {
  test('전진해서 우승한 자동차의 이름을 도출한다.', () => {
    const car1 = new Car('test1');
    const car2 = new Car('test2');
    const car3 = new Car('test3');

    car1.move(5);
    car2.move(1);
    car3.move(1);

    const race = new Race();

    race.addCar(car1);
    race.addCar(car2);
    race.addCar(car3);

    const result = race.getWinners();
    expect(result).toEqual(['test1']);
  });
});
