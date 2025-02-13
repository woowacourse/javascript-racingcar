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

async function parseInput(getInput, parser) {
  while (true) {
    const input = await getInput();
    let parsedInput = printError(parser, input);
    if (parsedInput) return parsedInput;
  }
}

const carName = await parseInput(
  InputView.getCarName,
  parsingService.parseNames
);
const round = await parseInput(InputView.getRound, parsingService.parseRound);
