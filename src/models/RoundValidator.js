import { ERROR_MESSAGE } from '../constants/Message.js';

const RoundValidator = {
  validateRound(number) {
    const regex = /^[1-5]$/;

    if (!regex.test(number)) {
      throw new Error(ERROR_MESSAGE.round);
    }
  },
};

export default RoundValidator;
