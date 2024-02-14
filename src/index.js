import CarList from './Model/CarList.js';

class App {
	async play() {
		const car = new CarList();
		await car.ask();
	}
}

const app = new App();
await app.play();

export default App;
