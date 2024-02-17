import { CAR_CONSTANTS } from "../Constants/Constants";
import AppError from "../utils/Error";

const { NAME_LENGTH_RANGE } = CAR_CONSTANTS;

const CarValidator = (() => {
  const checkNameLength = (name) => {
    if (
      NAME_LENGTH_RANGE.max < name.length ||
      name.length < NAME_LENGTH_RANGE.min
    ) {
      throw new AppError();
    }
  };

  return {
    checkCarName: (carNames) => {
      checkNameLength(carNames);
    },
  };
})();

export default CarValidator;
