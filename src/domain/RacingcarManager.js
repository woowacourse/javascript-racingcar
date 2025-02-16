import Car from './Car.js';
import getRandomNumber from '../utils/Random.js';

class RacingcarManager{
    createCars(carNames){
        return carNames.map(name => new Car(name));
    }
    
    oneRound(cars){
        cars.forEach(car => {
            car.move(getRandomNumber());            
        });
    }

    getMaxPosition(cars) {
        return Math.max(...cars.map((car) => car.position));
    }

    getWinners(cars) {
        const maxPositon = this.getMaxPosition(cars);
        const winners = [];
        cars.forEach(car => {
            if(car.position === maxPositon){
                winners.push(car.name);
            }
        });
        return winners;
    }
}

export default RacingcarManager;
