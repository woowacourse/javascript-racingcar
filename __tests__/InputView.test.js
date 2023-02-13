import Console from '../src/utils/Console.js';
import InputView from '../src/view/InputView';

describe('InputView 테스트 입니다.', () => {
  const mockQuestion = (answer) => {
    Console.readline = jest.fn();
    Console.readline.mockReturnValue(answer);
  };

  test('readCarNames 메서드는 차 이름을 입력받아 쉼표(,)를 기준으로 배열로 반환해줍니다.', async () => {
    // given
    mockQuestion('pobi,crong');

    // when
    const carnames = await InputView.readCarNames();

    // then
    expect(carnames).toEqual(['pobi', 'crong']);
  });

  test('readRaceStep 메서드는 횟수를 입력받아 숫자 타입으로 반환해야합니다.', async () => {
    // given
    mockQuestion('3');

    // when
    const raceStep = await InputView.readRaceStep();

    // then
    expect(raceStep).toBe(3);
  });
});
