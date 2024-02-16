import { ERROR_MESSAGE } from '../constants/index.js';

const RoundValidator = {
  validateRound(number) {
    const regex = /^[1-5]$/;

    if (!regex.test(number)) {
      throw new Error(ERROR_MESSAGE.round);
    }
  },
};

export default RoundValidator;
