import { InputView, OutputView } from '../View';
import GameSetupManager from '../service/GameSetupManager';
import RaceExecutionManager from '../service/RaceExecutionManager';

export default class RacingGameController {
  async run() {
    const gameSetupManager = new GameSetupManager(InputView);
    const raceInfo = await gameSetupManager.setup();

    const raceExecuteManager = new RaceExecutionManager(raceInfo, OutputView);
    const winner = raceExecuteManager.executeRace();

    OutputView.printRaceResult(winner);
  }
}
