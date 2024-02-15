import ERROR_MESSAGE from '../src/error/message.js';
import Car from '../src/model/Car.js';

describe('Car 테스트', () => {
  // 올바른 테스트
  test.each`
    testTitle                        | carName   | expected
    ${'올바른 이름이 들어온 경우'}   | ${'pobi'} | ${'pobi'}
    ${'5자 초과 이름이 들어온 경우'} | ${'cron'} | ${'cron'}
  `('$testTitle테스트는 $carName이 입력되면 $expected 에러를 던진다.', ({ carName, expected }) => {
    expect(new Car(carName).name).toEqual(expected);
  });

  // 예외 테스트
  test.each`
    testTitle                        | carName     | expected
    ${'빈 칸이 들어온 경우'}         | ${''}       | ${ERROR_MESSAGE.nameLength}
    ${'5자 초과 이름이 들어온 경우'} | ${'tenten'} | ${ERROR_MESSAGE.nameLength}
  `('$testTitle테스트는 $carName이 입력되면 $expected 에러를 던진다.', ({ carName, expected }) => {
    expect(() => new Car(carName)).toThrow(expected);
  });
});
