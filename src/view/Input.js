import Console from '../utils/Console.js';
import Message from '../constant/Message.js';

const { INPUT } = Message;

class Input {
  static async inputCarName() {
    const input = await Console.readLineAsync(INPUT.car_name);

    return input;
  }

  static async inputTryCount() {
    const input = await Console.readLineAsync(INPUT.try_count);

    return input;
  }
}

export default Input;
