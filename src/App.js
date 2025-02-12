import RaceController from "./controllers/RaceController";

class App {
    async run(){
        await RaceController.race();
    }
}

export default App;