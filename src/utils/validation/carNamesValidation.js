import validation from './validation.js';
import { ERROR, NAME } from '../../constant/strings.js';
import ExceptionHandler from '../error/ExceptionHandler.js';
import OPT from '../../constant/options.js';

const { throwErrorIfInvalid } = ExceptionHandler;

const carNamesValidation = {
  validate(carNames) {
    this.checkIsUnique(carNames);
    this.checkIsInRange(carNames, OPT.CAR.minNameLength, OPT.CAR.maxNameLength);
  },

  checkIsUnique(carNames) {
    throwErrorIfInvalid(validation.isUnique(carNames), ERROR.isNotUnique(NAME.carName));
  },

  checkIsInRange(carNames, min, max) {
    carNames.forEach((carName) => {
      throwErrorIfInvalid(
        validation.isInRange(carName.length, min, max),
        ERROR.isNotInRange(NAME.carName, min, max)
      );
    });
  }
};

export default carNamesValidation;
