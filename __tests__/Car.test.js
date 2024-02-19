import ERROR_MESSAGE from '../src/error/message.js';
import Car, { FORWARD_CONDITION } from '../src/model/Car.js';
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../src/model/Name.js';
import Random from '../src/utils/getRandomNumber.js';

// Car validate 메소드 테스트
describe('Car 이름 테스트', () => {
  // 올바른 테스트
  test.each`
    testTitle          | carName   | expected
    ${'올바른 경우의'} | ${'pobi'} | ${'pobi'}
    ${'올바른 경우의'} | ${'cron'} | ${'cron'}
  `(
    `${MIN_NAME_LENGTH}~${MAX_NAME_LENGTH} 길이의 이름이 입력되면 정상적으로 이름을 저장한다.`,
    ({ carName, expected }) => {
      const car = new Car(carName);

      expect(car.getName()).toEqual(expected);
    },
  );

  // 예외 테스트
  test.each`
    testTitle                        | carName     | expected
    ${'빈 칸이 들어온 경우'}         | ${''}       | ${ERROR_MESSAGE.nameLength}
    ${'5자 초과 이름이 들어온 경우'} | ${'tenten'} | ${ERROR_MESSAGE.nameLength}
  `('$testTitle테스트는 $carName이 입력되면 $expected 에러를 던진다.', ({ carName, expected }) => {
    expect(() => new Car(carName)).toThrow(expected);
  });
});

// Car forward 테스트

// 랜덤 함수가 고정값을 반환하도록 하는 함수
export const mockRandoms = (numbers) => {
  Random.create = jest.fn();
  numbers.reduce((acc, num) => acc.mockReturnValueOnce(num), Random.create);
};

describe('각 자동차가 올바르게 전진하고 정지하는 지 테스트', () => {
  // given
  const car = new Car('pobi');
  const gasPowerHigh = 4;
  const gasPowerLow = 3;

  const afterGo = 1;
  const stopHere = 1;

  test(`${FORWARD_CONDITION}이상이면 전진한다.`, () => {
    // when
    car.forward(gasPowerHigh);

    // then
    expect(car.getLocation()).toEqual(afterGo);
  });

  test(`${FORWARD_CONDITION}미만이면 정지한다.`, () => {
    // when
    car.forward(gasPowerLow);

    // then
    expect(car.getLocation()).toEqual(stopHere);
  });
});
