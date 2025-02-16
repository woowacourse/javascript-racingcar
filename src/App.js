import RaceController from "./controllers/RaceController.js";

import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const views = {
      inputView: new InputView(),
      outputView: new OutputView(),
    };

    await new RaceController(views).race();
  }
}

export default App;
