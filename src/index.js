import { startRace } from "./domain/Race.js";

async function run() {
  await startRace();
}

run();
