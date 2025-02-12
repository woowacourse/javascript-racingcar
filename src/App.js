import RaceController from "./controllers/RaceController";

class App {
    async run(){
        const views = {inputView : new InputView()}

        await RaceController.race(views);
    }
}

export default App;