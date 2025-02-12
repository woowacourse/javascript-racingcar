import moveCar from "./moveCar.js"
import generateRandomNumber from "../utils/generateRandomNumber.js"

const playRound = (cars) => {
    const updatedCars = cars.map(car => {
        const randomNumber = generateRandomNumber()
        return moveCar(car, randomNumber)
    })
    return updatedCars
}

export default playRound
