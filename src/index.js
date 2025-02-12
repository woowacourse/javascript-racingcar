import { InputView } from "./view/InputView.js";
import { parsingService } from "./Service/parsingService.js";

function printError(parser, input) {
  let parsedValue;
  try {
    parsedValue = parser(input);
  } catch (error) {
    console.error(error.message);
  }
  return parsedValue;
}

while (true) {
  const carInput = await InputView.getCarName();
  let parsedCars = printError(parsingService.parseNames, carInput);
  if (!parsedCars) {
    continue;
  }
  break;
}

while (true) {
  const roundInput = await InputView.getRound();
  let parsedRound = printError(parsingService.parseRound, roundInput);
  if (!parsedRound) {
    continue;
  }
  break;
}
