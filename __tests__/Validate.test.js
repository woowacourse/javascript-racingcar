import CarController from '../src/Controllers/CarController.js';

export const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 이름 입력 검증 테스트', () => {
  const FAIL_CASE = ['재오상추앵버', '', '재오,상추,상추', '앵버'];
  const SUCCESS_CASE = ['재오,상추,앵버', '재,상,앵'];
  test.each(SUCCESS_CASE)('자동차 이름 성공 테스트', (carName) => {
    // when
    const carController = new CarController();
    // then
    expect(carController.validateCarName(carName)).toEqual(carName.split(','));
  });

  test.each(FAIL_CASE)('자동차 이름 실패 테스트', (carName) => {
    // when
    const carController = new CarController();
    // then
    expect(() => carController.validateCarName(carName)).toThrow('[ERROR]');
  });
});
