import { ERROR_MESSAGE, MIN_ROUND_COUNT, MAX_ROUND_COUNT } from '../constants/index.js';

const RoundValidator = {
  confirmRound(number) {
    const regex = new RegExp(`^[${MIN_ROUND_COUNT}-${MAX_ROUND_COUNT}]$`);

    if (!regex.test(number)) {
      throw new Error(ERROR_MESSAGE.round);
    }
  },
};

export default RoundValidator;