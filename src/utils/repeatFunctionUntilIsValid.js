import { ERROR_INPUT_COUNT } from '../constants/message';
import { ROUND, SYMBOLS } from '../constants/setting';
import OutputView from '../views/OutputView';

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
  while (errorStack.length < ROUND.MAX) {
    const result = await runMethod(method, params);
    if (!(result instanceof Error)) return result;
    errorStack.push(result);
  }
  throw new Error(`${SYMBOLS.NEW_LINE}${ERROR_INPUT_COUNT}`);
}

export default repeatFunctionUntilIsValid;
