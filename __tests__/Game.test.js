import Game from '../src/controllers/Game.js';

test('우승자를 제대로 출력하는가?', () => {
  //given
  const carList = [
    { name: 'beomtae', position: 1 },
    { name: 'camel', position: 0 },
  ];

  //when
  const game = new Game();

  //then
  expect(game.judgeWinner()).toBe('beomtae');
});

test('우승자가 여러명일 경우 모두 출력하는가?', () => {
  //given
  const carList = [
    { name: 'beomtae', position: 1 },
    { name: 'camel', position: 1 },
  ];

  //when
  const game = new Game();

  //then
  expect(game.judgeWinner()).toEqual(['beomtae', 'camel']);
});
