import Car from '../src/Model/Car';

/* eslint-disable */
describe('Car 객체 테스트', () => {
  test.each([['ABCDEF'], ['']])('Car 이름 길이는 1~5자여야한다. (예외)', (name) => {
    // arrange

    // action
    expect(() => new Car(name))
      // assert
      .toThrow('[ERROR]');
  });

  test('랜덤 숫자가 4이상이면 1칸 전진해야한다.', () => {
    // arrange
    const num = 4;
    const car = new Car('러기');

    // action
    car.move(num);

    // assert
    expect(car.getDistance()).toBe(1);
  });
});
