import ERROR_MESSAGE from '../error/message.js';

export const MIN_TRY_COUNT = 1;
export const MAX_TRY_COUNT = 10;

class TryCount {
  #tryCount;

  constructor(tryCount) {
    this.#validate(tryCount);

    this.#tryCount = Number(tryCount);
  }

  #validate(tryCount) {
    const numberRegExp = /^[0-9]+$/;

    if (tryCount === '') throw new Error(`${ERROR_MESSAGE.tryCountEmpty} ${ERROR_MESSAGE.retry}`);
    if (!numberRegExp.test(tryCount))
      throw new Error(`${ERROR_MESSAGE.isNan} ${ERROR_MESSAGE.retry}`);
    if (Number(tryCount) < MIN_TRY_COUNT || Number(tryCount) > MAX_TRY_COUNT)
      throw new Error(`${ERROR_MESSAGE.tryCountRange} ${ERROR_MESSAGE.retry}`);
  }

  get tryCount() {
    return this.#tryCount;
  }
}

export default TryCount;
