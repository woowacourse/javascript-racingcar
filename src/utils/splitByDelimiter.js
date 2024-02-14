import CONDITIONS from '../constant/Conditions.js';

const splitByDelimiter = (input) => {
  return input.split(CONDITIONS.delimiter);
};

export default splitByDelimiter;
