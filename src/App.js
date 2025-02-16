import Race from "./domain/Race.js";

export default class App {
  async run () {
    const race = new Race();
    await race.play();
  }
}
