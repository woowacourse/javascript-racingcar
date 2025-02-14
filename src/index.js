import { raceInit } from "./service/raceService.js";

import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";
import { parsingService } from "./service/parsingService.js";
import { startRace } from "./service/raceService.js";
import { SystemMessage } from "./settings/SystemMessage.js";
import { getWinner } from "./service/statisticsService.js";

const { cars, round } = await raceInit(InputView, parsingService);

OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
startRace(cars, round);

const winner = getWinner(cars);

OutputView.printMessage(SystemMessage.WINNER_MESSAGE(winner.join(", ")));
