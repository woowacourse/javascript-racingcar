import { ERROR_MESSAGE, ROUND_RULE } from '../constants/index.js';

const RoundValidator = {
  validateRound(number) {
    const { min, max } = ROUND_RULE;
    const regex = new RegExp(`^[${min}-${max}]$`);

    if (!regex.test(number)) {
      throw new Error(ERROR_MESSAGE.round);
    }
  },
};

export default RoundValidator;
