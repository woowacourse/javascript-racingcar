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

export class CarNameLengthError extends Error {
  constructor() {
    super(ERROR.carNameLength);
  }
}

export class CarNameTypeError extends Error {
  constructor() {
    super(ERROR.carNameType);
  }
}

export class CarNameRangeError extends Error {
  constructor() {
    super(ERROR.carNameRange);
  }
}

export class CarNameDuplicatedError extends Error {
  constructor() {
    super(ERROR.carNameDuplicated);
  }
}
