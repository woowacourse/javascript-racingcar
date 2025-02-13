import App from '../src/App.js';
import { mockQuestions, mockRandoms } from '../src/helpers/testUtils.js';

describe('애플리케이션 테스트', () => {
  test('우승자가 한명일때', async () => {
    const inputs = ['a,b,c', '1'];
    const randomNumbers = [1, 1, 9];

    mockQuestions(inputs);
    mockRandoms(randomNumbers);

    const consoleSpy = jest.spyOn(console, 'log');

    const app = new App();
    await app.run();

    expect(consoleSpy).toHaveBeenCalledWith('실행 결과');
    expect(consoleSpy).toHaveBeenCalledWith('a : ');
    expect(consoleSpy).toHaveBeenCalledWith('b : ');
    expect(consoleSpy).toHaveBeenCalledWith('c : -');
  });
});
