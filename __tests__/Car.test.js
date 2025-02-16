import Car from '../src/domain/Car.js';

describe('Car 클래스의 자동차 기능 테스트', () => {
  test('move가 호출되면 자동차의 position 값이 1씩 증가한다.', () => {
    const NAME = 'jenna';
    const car = new Car(NAME);

    car.move();

    const { position } = car.getCarInfo();

    expect(position).toBe(1);
  });

  test.each([['jenna'], ['mato']])(
    'getCarInfo가 호출되면 자동차의 이름과 위치를 반환한다.',
    (name) => {
      const car = new Car(name);

      const carInfo = car.getCarInfo();

      expect(carInfo).toEqual({ name, position: 0 });
    },
  );
});
