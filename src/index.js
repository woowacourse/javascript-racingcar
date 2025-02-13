import { raceInit, raceManager } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";
import { SystemMessage } from "./settings/SystemMessage.js";
import { getWinner } from "./service/statisticsService.js";

const { cars, round } = await raceInit();
raceManager.startRace(cars, round);

const winner = getWinner(cars);
OutputView.printMessage(SystemMessage.WINNER_MESSAGE(winner));
