import consolePrint from "../src/utils/consolePrint";
import gameUtils from "../src/utils/gameUtils";
import readLineAsync from "../src/utils/readLineAsync";
import App from './../src/App';

const mockQuestions = (inputs) => {
  readLineAsync = jest.fn();

  readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  gameUtils.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, gameUtils.pickRandomNumber);
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(consolePrint);
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 테스트', () => {
  test('경기는 2번, 랜덤 값을 썬데이가 4, 7, 쿠키가 5, 8을 받으면 썬데이와 쿠키가 공동우승자로 출력된다.', async () => {
    // given
    const inputs = ["썬데이,쿠키", '2'];
    const randomNumbers = [4, 7, 5, 8];
    const logSpy = getLogSpy();
    const answer = '최종 우승자: 썬데이, 쿠키';

    mockQuestions(inputs);
    mockRandoms([...randomNumbers]);

    // when
    const app = new App();
    await app.init();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });
});
