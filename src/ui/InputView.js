import readLineAsync from './ReadLineAsync.js';

const MESSAGE = {
  READ_CAR_NAME: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  READ_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n'
}

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
