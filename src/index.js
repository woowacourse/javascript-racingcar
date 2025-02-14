import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";
import { parsingService } from "./service/parsingService.js";
import { startRace, raceInit } from "./service/raceService.js";
import { getWinner } from "./service/statisticsService.js";
import { systemMessage } from "./settings/SystemMessage.js";

const { cars, round } = await raceInit(InputView, parsingService);

OutputView.printMessage(systemMessage.RESULT_MESSAGE);

const carAfterRace = startRace(cars, round);

const winner = getWinner(carAfterRace);

OutputView.printMessage(systemMessage.WINNER_MESSAGE(winner.join(", ")));
