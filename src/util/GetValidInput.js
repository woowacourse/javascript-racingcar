import { OutputView } from "../view/OutputView.js";

export async function getValidInput(getInput, parser) {
  while (true) {
    try {
      const input = await getInput();
      return parser(input);
    } catch (error) {
      OutputView.printError(error);
    }
  }
}
