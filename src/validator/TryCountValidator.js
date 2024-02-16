import Message from "../constant/Message.js";
import Condition from "../constant/Condition.js";

const { ERROR } = Message;
const { TRY_COUNT } = Condition;

class TryCountValidator {
  static naturalNumber(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount < TRY_COUNT.range.min) {
      throw new Error(ERROR.try_count_range);
    }
  }
}

export default TryCountValidator;
