import ERROR_MESSAGE from '../src/error/message.js';
import Cars from '../src/model/Cars.js';

// Cars validate 메소드 테스트
describe('Cars 이름 문자열 테스트', () => {
  // 예외 테스트
  test.each`
    testTitle                      | carNames              | expected
    ${'빈 칸이 들어온 경우'}       | ${''}                 | ${ERROR_MESSAGE.nameLength}
    ${'중복된 이름이 들어온 경우'} | ${'pobi,pobi,  pobi'} | ${ERROR_MESSAGE.duplicated}
  `(
    '$testTitle테스트는 잘못 된 입력인 $carNames이 들어오면 $expected 에러를 던진다.',
    ({ carNames, expected }) => {
      expect(() => new Cars(carNames)).toThrow(expected);
    },
  );
});

// Cars winners 메소드 테스트
describe('Cars 우승자 테스트', () => {
  test('모든 라운드가 끝나면 우승자를 반환한다.', () => {
    // given
    const names = 'pobi,jun,cron';
    const cars = new Cars(names);
    const FORWARD = 4;
    const STOP = 3;
    const randomNumbers = [
      [FORWARD, STOP, FORWARD],
      [FORWARD, STOP, FORWARD],
    ]; // 2 : 0 : 2
    const output = ['pobi', 'cron'];

    // when
    randomNumbers.forEach((numbers) => {
      cars.play(numbers);
    });

    // then
    cars.winners().forEach((name, i) => expect(name).toEqual(output[i]));
  });
});
