import ErrorHandler from './module.js';

let consoleOutput = [];
const mockPrint = (output) => consoleOutput.push(output);
console.log = mockPrint;

describe('입력 관련 예외 처리 테스트', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  test('함수가 두 번 호출된다.', async () => {
    // given
    let callCount = 0;
    const executeTest = async () => {
      callCount++;
      if (callCount === 1) throw new Error('Test Error');
      return 'Success';
    };
    // when
    await ErrorHandler.retryOnErrors(executeTest);
    // then
    expect(callCount).toBe(2);
  });

  test('첫 번째 호출은 실패 후 에러 로깅이 발생한다.', async () => {
    // given
    let callCount = 0;
    const executeTest = async () => {
      callCount++;
      if (callCount === 1) throw new Error('Test Error');
      return 'Success';
    };
    // when
    await ErrorHandler.retryOnErrors(executeTest);
    // then
    expect(consoleOutput).toEqual(['Test Error']);
  });

  test('두 번째 호출은 성공적인 결과를 반환한다.', async () => {
    // given
    let callCount = 0;
    const executeTest = async () => {
      callCount++;
      if (callCount === 1) throw new Error('Test Error');
      return 'Success';
    };
    // when
    const result = await ErrorHandler.retryOnErrors(executeTest);
    // then
    expect(result).toBe('Success');
  });
});
