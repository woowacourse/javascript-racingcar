
// { name: '가', count: 0 }
// 3

const moveCar = (car, randomNumber) => {
    if (randomNumber >= 4){
        return { ...car, count: car.count + 1 };
    }
    return car;
}

// { name: '가', count: 0 }

export default moveCar