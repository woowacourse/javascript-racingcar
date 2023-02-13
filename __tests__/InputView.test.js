import InputView from '../src/view/InputView';

const mockConsole = (questions) => {
  const remainQuestions = [...questions];
  return {
    readline() {
      return remainQuestions.shift();
    },
  };
};

describe('InputView 테스트 입니다.', () => {
  test('readCarNames 메서드는 차 이름을 입력받아 쉼표(,)를 기준으로 배열로 반환해줍니다.', async () => {
    // given
    const questions = ['pobi,crong'];
    InputView.Console = mockConsole(questions);

    // when
    const carnames = await InputView.readCarNames();

    // then
    expect(carnames).toEqual(['pobi', 'crong']);
  });

  test('readRaceStep 메서드는 횟수를 입력받아 숫자 타입으로 반환해야합니다.', async () => {
    // given
    const questions = ['3'];
    InputView.Console = mockConsole(questions);

    // when
    const raceStep = await InputView.readRaceStep();

    // then
    expect(raceStep).toBe(3);
  });
});
