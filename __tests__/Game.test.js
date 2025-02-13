import Game from '../src/controllers/Game.js';
import { createRandom } from '../src/utils/Random.js';
import Car from '../src/models/Car.js';
import InputController from '../src/controllers/InputController.js';

jest.mock('../src/utils/Random.js', () => ({
  createRandom: jest.fn(),
}));

jest.mock('../src/controllers/InputController.js');

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('우승자 판단 테스트', () => {
  test('judgeWinner() 메서드 테스트 - 우승자가 둘일 경우', async () => {
    //given
    InputController.inputName.mockReturnValueOnce(['Beom', 'Camel']);
    InputController.inputTryNumber.mockReturnValueOnce(2);
    createRandom.mockReturnValueOnce(5).mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(5);

    //when
    const game = new Game();
    const winnerSpy = jest.spyOn(game, 'judgeWinner');
    await game.start();

    //then
    expect(winnerSpy).toHaveReturnedWith(['Beom', 'Camel']);
  });
  test('judgeWinner() 메서드 테스트 - 단일 우승자일 경우', async () => {
    //given
    InputController.inputName.mockReturnValueOnce(['pobi', 'Beom', 'Camel']);
    InputController.inputTryNumber.mockReturnValueOnce(2);
    [5, 1, 1, 5, 1, 1].forEach(data => createRandom.mockReturnValueOnce(data));
    //when
    const game = new Game();
    const winnerSpy = jest.spyOn(game, 'judgeWinner');
    await game.start();
    //then
    expect(winnerSpy).toHaveReturnedWith(['pobi']);
  });
