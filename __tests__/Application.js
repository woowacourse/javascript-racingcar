import App from '../src/App.js';
import { mockQuestions, mockRandoms } from '../src/helpers/testUtils.js';

describe('애플리케이션', () => {
  describe('정상 케이스', () => {
    test('우승자가 한명인 경우, 한명을 출력한다.', async () => {
      const inputs = ['a,b,c', '1'];
      const randomNumbers = [1, 1, 9];

      mockQuestions(inputs);
      mockRandoms(randomNumbers);

      const consoleSpy = jest.spyOn(console, 'log');

      const app = new App();
      await app.run();

      expect(consoleSpy).toHaveBeenCalledWith('최종 우승자: c');
    });

    test('우승자가 두명 이상인 경우, 두명을 모두 출력한다.', async () => {
      const inputs = ['a,b,c', '1'];
      const randomNumbers = [1, 9, 9];

      mockQuestions(inputs);
      mockRandoms(randomNumbers);

      const consoleSpy = jest.spyOn(console, 'log');

      const app = new App();
      await app.run();

      expect(consoleSpy).toHaveBeenCalledWith('최종 우승자: b, c');
    });
  });

  describe('예외 케이스', () => {
    test('차 이름을 0자 입력한 경우 다시 입력을 받는다..', async () => {
      const inputs = ['a,,c', 'a,b,c', '1'];
      const randomNumbers = [1, 9, 9];

      mockQuestions(inputs);
      mockRandoms(randomNumbers);

      const consoleSpy = jest.spyOn(console, 'log');

      const app = new App();
      await app.run();

      expect(consoleSpy).toHaveBeenCalledWith('최종 우승자: b, c');
    });

    test('차 이름을 5자 초과해 입력한 경우 다시 입력을 받는다.', async () => {
      const inputs = ['a,abcdef,c', 'a,b,c', '1'];
      const randomNumbers = [1, 9, 9];

      mockQuestions(inputs);
      mockRandoms(randomNumbers);

      const consoleSpy = jest.spyOn(console, 'log');

      const app = new App();
      await app.run();

      expect(consoleSpy).toHaveBeenCalledWith('최종 우승자: b, c');
    });
  });
});
