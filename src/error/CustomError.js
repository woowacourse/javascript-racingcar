import ERROR from "../constants/Error.js";

export class AttemptRangeError extends Error {
  constructor() {
    super(ERROR.attemptRange);
  }
}

export class AttemptTypeError extends Error {
  constructor() {
    super(ERROR.attemptType);
  }
}
