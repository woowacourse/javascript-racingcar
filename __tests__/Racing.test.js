import Racing from '../src/domain/Racing.js';
import Car from '../src/domain/Car.js';

describe('자동차 경주 객체 테스트', () => {
  const carNames = ['abc', 'def', 'efg'];
  const carList = carNames.map((carName, i) => new Car(carName, i));
  const racing = new Racing(carList);

  test('자동차 경주 객체는 자동차 객체 정보를 저장한다.', () => {
    expect(racing.carList.map((car) => car.getCarStatus().name)).toEqual(
      carNames,
    );
  });

  test('자동차 객체 중 가장 멀리 간 자동차를 배열에 담아 반환한다.', () => {
    expect(racing.getWinner()).toEqual(['efg']);
  });
  test('우승자가 여러 명인 경우 여러 개의 자동차를 배열에 담아 반환한다.', () => {
    carList.push(new Car('hij', 2));
    expect(racing.getWinner()).toEqual(['efg', 'hij']);
  });
});
