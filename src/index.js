const Racing = require("./Racing");

class App {
    constructor() {
        this.play();
    }

    play() {
        const racing = new Racing();
        racing.startRace();
    }
}

const app = new App();
app.play();
