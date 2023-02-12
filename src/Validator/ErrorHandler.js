import { utils } from "../Utils/Utils.js";

const ErrorHandler = ({ validator, nextStep, afterError }) => {
  try {
    validator();
    nextStep();
  } catch (error) {
    utils.print(error);
    afterError();
  }
};

export { ErrorHandler };
