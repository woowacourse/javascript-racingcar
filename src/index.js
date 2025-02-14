import CarRace from './domain/CarRace.js';

const carRace = new CarRace();
await carRace.init();
carRace.run();
