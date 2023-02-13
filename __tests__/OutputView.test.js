const OutputView = require('../src/view/OutputView');

describe('OutputView 객체 테스트', () => {
  const LOG_SPY = jest.spyOn(global.console, 'log');

  test('printMoveDistance 테스트', () => {
    const INPUT_VALUES = [
      ['우형', 10],
      ['네이버', 4],
      ['카카오', 3],
    ];
    const EXPECTED_RESULTS = ['우형 : ----------', '네이버 : ----', '카카오 : ---'];

    INPUT_VALUES.forEach((input, index) => {
      OutputView.printMoveDistance(input);
      expect(LOG_SPY).toHaveBeenCalledWith(EXPECTED_RESULTS[index]);
    });
  });

  test('printWinner 테스트', () => {
    const INPUT_VALUES = [['우형'], ['우형', '네이버'], ['우형', '네이버', '카카오']];
    const EXPECTED_RESULTS = [
      '우형(이)가 최종 우승했습니다.',
      '우형, 네이버(이)가 최종 우승했습니다.',
      '우형, 네이버, 카카오(이)가 최종 우승했습니다.',
    ];

    INPUT_VALUES.forEach((winners, index) => {
      OutputView.printWinner(winners);
      expect(LOG_SPY).toHaveBeenCalledWith(EXPECTED_RESULTS[index]);
    });
  });
});
