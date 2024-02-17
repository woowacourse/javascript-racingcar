import { FORMAT_MESSAGE } from './messages';

describe('자동차 경주 문자열 변환 테스트', () => {
  describe('racingResultToString 메서드를 통한 자동차 경주 결과 문자열 변환 테스트', () => {
    // given
    const testCases = [
      {
        description:
          "racingResult가 [[{ carName: 'CarA', moveCount: 1 }, { carName: 'CarB', moveCount: 1 }]] 일 때, \n 문자열 변환 결과는 'CarA : - CarB : -'이다.",
        racingResult: [
          [
            { carName: 'CarA', moveCount: 1 },
            { carName: 'CarB', moveCount: 1 },
          ],
        ],
        expectedFormatResult: 'CarA : -\nCarB : -',
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
        expectedFormatResult: 'CarA : --\nCarB : \n\nCarA : ---\nCarB : -',
      },
    ];
    test.each(testCases)('$description', ({ racingResult, expectedFormatResult }) => {
      // when
      const formatResult = FORMAT_MESSAGE.racingResultToString(racingResult);

      // then
      expect(formatResult).toMatch(expectedFormatResult);
    });
  });

  describe('racingWinnersToString 메서드를 통한 우승자 문자열 변환 테스트', () => {
    // given
    const testCases = [
      {
        racingWinners: ['CarA'],
        expectedFormatResult: '\n최종 우승자: CarA',
      },
      {
        racingWinners: ['CarA', 'CarB'],
        expectedFormatResult: '\n최종 우승자: CarA, CarB',
      },
    ];
    test.each(testCases)(
      'racingWinners가 $racingWinners일 때, 문자열 변환 결과는 "$expectedFormatResult다."',
      ({ racingWinners, expectedFormatResult }) => {
        // when
        const formatResult = FORMAT_MESSAGE.racingWinnersToString(racingWinners);

        // then
        expect(formatResult).toMatch(expectedFormatResult);
      },
    );
  });
});
