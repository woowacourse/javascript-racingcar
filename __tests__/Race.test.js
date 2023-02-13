import Car from '../src/domain/Car';
import Race from '../src/domain/Race';

const mockRandom = (randomNumbers) => {
  const remainRandomNumbers = [...randomNumbers];
  return {
    randomNumberBetween(inclusiveStart, exclusiveEnd) {
      return remainRandomNumbers.shift();
    },
  };
};

describe('Race 클래스 테스트 입니다.', () => {
  test('경주를 1회 진행하면 자동차들이 랜덤 값에 따라 움직이거나 멈춰있어야 한다.', () => {
    // given
    const Random = mockRandom([8, 3]);
    const cars = ['pobi', 'crong'].map((carName) => new Car(carName));
    const race = new Race(cars, Random);

    // when
    race.moveOnce();

    // then
    expect(race.getCars().map((car) => car.getPosition())).toEqual([1, 0]);
  });

  test('우승자들을 반환해준다.', () => {
    // given
    const Random = mockRandom([8, 3, 9]);
    const cars = ['pobi', 'crong', 'conan'].map((carName) => new Car(carName));
    const race = new Race(cars, Random);

    // when
    race.moveOnce();

    // then
    expect(race.getWinners().map((car) => car.getName())).toEqual(['pobi', 'conan']);
  });
});
