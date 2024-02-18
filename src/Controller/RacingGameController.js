import { InputView, OutputView } from '../view';
import { GameSetupManager, RaceExecutionManager } from '../service';

export default class RacingGameController {
  async run() {
    const gameSetupManager = new GameSetupManager(InputView);
    const raceInfo = await gameSetupManager.setup();

    const raceExecuteManager = new RaceExecutionManager(raceInfo, OutputView);
    const winner = raceExecuteManager.executeRace();

    OutputView.printRaceResult(winner);
  }
}
