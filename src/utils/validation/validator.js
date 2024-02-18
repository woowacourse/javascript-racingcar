import carNamesValidation from './carNamesValidation.js';
import tryCountValidation from './tryCountValidation.js';

const validator = {
  carNamesValidation: (value) => carNamesValidation.validate(value),
  tryCountValidation: (value) => tryCountValidation.validate(value)
};

export default validator;
