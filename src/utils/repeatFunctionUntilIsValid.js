import OutputView from '../views/OutputView';

async function runMethod(method, params) {
  try {
    const result = await method.call(this, params);
    return result;
  } catch (error) {
    OutputView.printError(error);
    return false;
  }
}

async function repeatFunctionUntilIsValid(method, params) {
  let retryCount = 0;
  while (retryCount < 10) {
    const result = await runMethod(method, params);
    if (result !== false) return result;
    retryCount += 1;
  }
  return OutputView.printError(new Error('\n입력 횟수를 초과하였습니다.'));
}

export default repeatFunctionUntilIsValid;
