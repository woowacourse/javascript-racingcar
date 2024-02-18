import AppError from '../errors/AppError/module.js';

export const startValidation = (validationTypes, value) => {
  Object.values(validationTypes).forEach(({ errorMessage, isValid }) => {
    if (!isValid(value)) throw new AppError(errorMessage);
  });
};
