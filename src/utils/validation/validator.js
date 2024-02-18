import carNamesValidation from './carNamesValidation.js';
import tryCountValidation from './tryCountValidation.js';

const Validator = {
  carNamesValidation: (value) => carNamesValidation.validate(value),
  tryCountValidation: (value) => tryCountValidation.validate(value)
};

export default Validator;
