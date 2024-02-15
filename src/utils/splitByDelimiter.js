import CONDITIONS from '../constant/Conditions.js';

const splitByDelimiter = (input) => {
  return input.split(CONDITIONS.delimiter).map((value) => value.trim());
};

export default splitByDelimiter;
