import InputView from "../views/InputView.js";
import { INPUT_MESSAGE, LINE_BREAK } from "../constants/Constants.js";
import validateCarNameList from "../validation/validate/validateCarNameList.js";
import validateAttemptCount from "../validation/validate/validateAttemptCount.js";
import OutputView from "../views/OutputView.js";
import InputParser from "./InputParser.js";
import Car from "../domain/Car.js";

 const InputHandler = {
   async getCarNameList() {
     while (true) {
       try {
         const carInput = await InputView.readUserInput(INPUT_MESSAGE.CAR);
         OutputView.print(LINE_BREAK);
         const carNameList = InputParser.car(carInput);
         validateCarNameList(carNameList);
        const carList = carNameList.map((carName)=>new Car(carName))
         return carList;
       } catch (e) {
         OutputView.print(e.message);
       }
     }
    },

    async getAttemptCount() {
      while (true) {
        try {
          const attemptInput = await InputView.readUserInput(INPUT_MESSAGE.ATTEMPT);
          OutputView.print(LINE_BREAK);
          const attemptCount = InputParser.attempt(attemptInput);
          validateAttemptCount(attemptCount);
          return attemptCount;
        } catch (e) {
          OutputView.print(e.message);
        }
      }
    },
  };
 
  export default InputHandler;