import Car from '../src/domain/Car.js';

describe('Car', () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test('Car을 생성한다.', () => {
    expect(car).toBeDefined();
  });

  test('Car은 초기에 position은 0이다.', () => {
    expect(car.position).toBe(0);
  });

  test('Car.go()는 앞으로 한칸 앞으로 간다.', () => {
    car.go();
    expect(car.position).toBe(1);
  });
});
