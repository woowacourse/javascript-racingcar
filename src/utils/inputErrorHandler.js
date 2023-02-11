const inputErrorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    console.log(message);
    return false;
  }
};

export default inputErrorHandler;
