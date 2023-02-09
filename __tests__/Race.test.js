import Car from '../src/models/Car';
import Race from '../src/models/Race';
import Random from '../src/utils/Random';

const mockRandom = (randomValues) => {
  Random.randomNumberBetween = jest.fn();
  randomValues.reduce((fn, randomValue) => {
    return fn.mockReturnValueOnce(randomValue);
  }, Random.randomNumberBetween);
};

describe('Race 클래스 테스트 입니다.', () => {
  test('경주를 1회 진행하면 자동차들이 랜덤 값에 따라 움직이거나 멈춰있어야 한다.', () => {
    // given
    const cars = ['pobi', 'crong'].map((carName) => new Car(carName));
    const race = new Race(cars);
    mockRandom([8, 3]);

    // when
    race.moveOnce();

    // then
    expect(race.getCars().map((car) => car.getRaceState().position)).toEqual([1, 0]);
  });

  test('우승자들을 반환해준다.', () => {
    // given
    const carNames = ['pobi', 'crong', 'conan'];
    const race = new Race(carNames);
    mockRandom([8, 3, 9]);

    // when
    race.moveOnce();

    // then
    expect(race.getWinners().map((car) => car.getRaceState().name)).toEqual(['pobi', 'conan']);
  });
});
