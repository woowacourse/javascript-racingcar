import validation from './validation.js';
import { ERROR, NAME } from '../../constant/strings.js';
import ExceptionHandler from '../error/ExceptionHandler.js';

const { throwErrorIfInvalid } = ExceptionHandler;

const tryCountValidation = {
  validate(tryCount) {
    this.checkIsInteger(tryCount);
    this.checkIsPositive(tryCount);
  },

  checkIsInteger(tryCount) {
    throwErrorIfInvalid(validation.isInteger(tryCount), ERROR.isNotInteger(NAME.carName));
  },

  checkIsPositive(tryCount) {
    throwErrorIfInvalid(validation.isPositive(tryCount), ERROR.isNotPositive(NAME.carName));
  }
};

export default tryCountValidation;
