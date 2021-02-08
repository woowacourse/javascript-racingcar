export const isValidLength = (name) => {
  return name.length <= VALIDATOR.MAX_NAME_LENGTH;
};

export const isNotBlank = (name) => {
  return name.length >= VALIDATOR.MIN_NAME_LENGTH;
};
