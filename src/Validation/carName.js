import { CAR_NAMES } from '../Constants/errorMessage.js';
import { MAX } from '../Constants/rules.js';

export const validateCarsNameLength = (input) => {
  if (
    input.split(',').some((carName) => carName.length > MAX.CAR_NAME_LENGTH)
  ) {
    throw new Error(CAR_NAMES.LENGTH);
  }
};

export const validateCarsNameForm = (input) => {
  const commaCount = input.split('').filter((value) => value === ',').length;
  const carCount = input.split(',').filter(Boolean).length;
  if (input.trim() === '' || commaCount !== carCount - 1) {
    throw new Error(CAR_NAMES.FORM);
  }
};

export const validateDuplicatedCarName = (input) => {
  const target = Array.from(new Set(input.split(',')));
  const origin = input.split(',');
  if (target.length !== origin.length) {
    throw new Error(CAR_NAMES.DUPLICATED);
  }
};
