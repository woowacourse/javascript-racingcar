import ERROR from "../constants/Error.js";

export class AttemptRangeError extends Error {
  constructor() {
    super(ERROR.attemptRange);
    console.log(ERROR.attemptRange);
  }
}

export class AttemptTypeError extends Error {
  constructor() {
    super(ERROR.attemptType);
    console.log(ERROR.attemptType);
  }
}

export class CarNameLengthError extends Error {
  constructor() {
    super(ERROR.carNameLength);
    console.log(ERROR.carNameLength);
  }
}

export class CarNameTypeError extends Error {
  constructor() {
    super(ERROR.carNameType);
    console.log(ERROR.carNameType);
  }
}

export class CarNameRangeError extends Error {
  constructor() {
    super(ERROR.carNameRange);
    console.log(ERROR.carNameRange);
  }
}

export class CarNameDuplicatedError extends Error {
  constructor() {
    super(ERROR.carNameDuplicated);
    console.log(ERROR.carNameDuplicated);
  }
}
