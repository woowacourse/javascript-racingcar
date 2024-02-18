import Message from '../constant/Message.js';
import Condition from '../constant/Condition.js';

const { ERROR } = Message;
const { TRY_COUNT } = Condition;

const TryCountValidator = {
  validateNaturalNumber(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount < TRY_COUNT.RANGE.MIN) {
      throw new Error(ERROR.TRY_COUNT_RANGE);
    }
  },
};

export default TryCountValidator;
