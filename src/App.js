import RaceController from "./controllers/RaceController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
    async run(){
        const views = {
            inputView : new InputView(),
            outputView : new OutputView()
        }

        await RaceController.race(views);
    }
}

export default App;