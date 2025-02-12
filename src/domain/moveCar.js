
// { name: '가', count: 0 }
// 3

const moveCar = (car, randomNumber) => {
    if (randomNumber >= 4){
      car.count++;
    }
    return car;
}

// { name: '가', count: 0 }

export default moveCar