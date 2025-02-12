import { InputView } from "./view/InputView.js";
import { parsingService } from "./Service/parsingService.js";

const carInput = await InputView.getCarName();
let parsedCars;
// try {
//   parsedCars = parsingService.parseNames(carInput);
// } catch (error) {
//   console.error(error.message);
// }

function printError(parser, input) {
  let parsedValue;
  try {
    parsedValue = parser(input);
  } catch (error) {
    console.error(error.message);
  }
  return parsedValue;
}

// const roundInput = await InputView.getRound();
// const parsedRound = parsingService.parseRound(roundInput);
