import OutputView from '../views/OutputView';

const RETRY_INPUT_LIMIT = 10;

async function runMethod(method, params) {
  try {
    const result = await method.call(this, params);
    return result;
  } catch (error) {
    OutputView.printError(error);
    return error;
  }
}

async function repeatFunctionUntilIsValid(method, params) {
  const errorStack = [];
  while (errorStack.length < RETRY_INPUT_LIMIT) {
    const result = await runMethod(method, params);
    if (!(result instanceof Error)) return result;
    errorStack.push(result);
  }
  throw new Error('\n입력 횟수를 초과하였습니다.');
}

export default repeatFunctionUntilIsValid;
