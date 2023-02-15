const Car = require('../src/domain/Car');

describe('Car - move() 기능 테스트', () => {
  test('차가 출발선 1에서 랜덤 수 5(4이상의 수)가 나와 한 칸 이동하는지 테스트', () => {
    const car = new Car('pobi');
    const random = 5;

    car.move(random);
    expect(car.getPosition()).toEqual(2);
  });

  test('차가 출발선 1에서 랜덤 수 1(4미만의 수)가 나와 한 칸 이동하지 않는지 테스트', () => {
    const car = new Car('crong');
    const random = 1;

    car.move(random);
    expect(car.getPosition()).toEqual(1);
  });

  test('차가 출발선 1에서 랜덤 수가 1 - 5 - 2 - 6 - 9가 나왔을 때 3칸 이동하는 지 테스트', () => {
    const car = new Car('honux');

    [1, 5, 2, 6, 9].forEach((random) => {
      car.move(random);
    });

    expect(car.getPosition()).toEqual(4);
  });
});
