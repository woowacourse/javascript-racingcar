import Car from '../src/Models/Car.js';

export function mockRandom(numbers) {
  const mockRandomFunction = jest.spyOn(Math, 'random');

  numbers.forEach((number) => {
    const randomNumber = number / 10;

    mockRandomFunction.mockReturnValueOnce(randomNumber);
  });
}

describe('Car 객체를 테스트', () => {
  test('객체가 잘 생성됐는지 확인한다.', () => {
    // given

    // when
    const car = new Car('재오');

    // then
    expect(car.name).toBe('재오');
  });

  test('자동차 위치 history 저장 테스트', () => {
    // when
    const car = new Car('재오');
    car.updateHistory(true);
    car.updateHistory(false);
    car.updateHistory(true);
    car.updateHistory(false);

    // then
    expect(car.history).toEqual([1, 1, 2, 2]);
  });
});
