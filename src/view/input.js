import ReadLine from "../util/readLineAsync.js";
import Cars from "../domain/Cars.js";
import Validation from "../util/Validation.js";
import { MESSAGES, ERROR } from "../constant/index.js";

class Input {
  static carNameInput = async () => {
    try {
      const carList = await ReadLine.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
      const car = new Cars(carList.split(","));
      return car.getCarList();
    } catch (error) {
      console.log(error.message);
      return this.carNameInput();
    }
  };

  static tryInput = async () => {
    try {
      const tryNumber = await ReadLine.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
      new Input().tryInputValidate(tryNumber);
      // <질문> 이 부분을 validation 을 나누는게 좋을 지 고민이 됩니다!
      // static 으로 하지 않으려면 input 클래스를 인스턴스화 해야하는데, 자연수인지를 확인하는 한줄 때문에 이렇게 하는게 맞을지 리뷰어님의 의견도 궁금합니다!
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return this.tryInput();
    }
  };

  tryInputValidate = (tryNumber) => {
    if (!Validation.isNaturalNumber(tryNumber)) {
      throw new Error(ERROR.NOT_NATURAL_NUMBER);
    }
  };
}

export default Input;
