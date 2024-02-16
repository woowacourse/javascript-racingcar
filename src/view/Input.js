import Console from "../utils/Console.js";
import Message from "../constant/Message.js";

const { INPUT } = Message;

class Input {
  static async carName() {
    return await Console.readLineAsync(INPUT.CAR_NAME);
  }

  static async tryCount() {
    return await Console.readLineAsync(INPUT.TRY_COUNT);
  }
}

export default Input;
