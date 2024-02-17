import { FORMAT_MESSAGE } from './messages';

describe('자동차 경주 문자열 변환 테스트', () => {
  describe('racingResultToString 메서드를 통한 자동차 경주 결과 문자열 변환 테스트', () => {
    test.each([
      {
        description:
          "racingResult가 [[{ carName: 'CarA', moveCount: 1 }, { carName: 'CarB', moveCount: 1 }]] 일 때, \n 문자열 변환 결과는 'CarA : - CarB : -'이다.",
        racingResult: [
          [
            { carName: 'CarA', moveCount: 1 },
            { carName: 'CarB', moveCount: 1 },
          ],
        ],
        expected: 'CarA : -\nCarB : -',
      },
      {
        description:
          "racingResult가 [[{ carName: 'CarA', moveCount: 2 }, { carName: 'CarB', moveCount: 0 }], [{ carName: 'CarA', moveCount: 3 },{ carName: 'CarB', moveCount: 1 }]] 일 때, \n 문자열 변환 결과는 'CarA : -- CarB : CarA : --- CarB : -'이다.",
        racingResult: [
          [
            { carName: 'CarA', moveCount: 2 },
            { carName: 'CarB', moveCount: 0 },
          ],
          [
            { carName: 'CarA', moveCount: 3 },
            { carName: 'CarB', moveCount: 1 },
          ],
        ],
        expected: 'CarA : --\nCarB : \n\nCarA : ---\nCarB : -',
      },
    ])('$description', ({ racingResult, expected }) => {
      expect(FORMAT_MESSAGE.racingResultToString(racingResult)).toMatch(expected);
    });
  });

  describe('racingWinnersToString 메서드를 통한 우승자 문자열 변환 테스트', () => {
    test.each([
      {
        racingWinners: ['CarA'],
        expected: '\n최종 우승자: CarA',
      },
      {
        racingWinners: ['CarA', 'CarB'],
        expected: '\n최종 우승자: CarA, CarB',
      },
    ])('racingWinners가 $racingWinners일 때, 문자열 변환 결과는 "$expected다."', ({ racingWinners, expected }) => {
      expect(FORMAT_MESSAGE.racingWinnersToString(racingWinners)).toMatch(expected);
    });
  });
});
