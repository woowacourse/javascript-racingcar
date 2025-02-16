import readLineAsync from './ReadLineAsync.js';
import MESSAGE from '../constants/RacingMessage.js';

class InputView {  
 async readCarNames() {
    const name = await readLineAsync(MESSAGE.READ_CAR_NAME);
    return name;
  }

  async readAttempts(){
    const attempts = await readLineAsync(MESSAGE.READ_ATTEMPTS);
    return attempts;
  }
}
  
export default InputView;
