import RacingcarConstants from "../constants/RacingCarConstants.js";

class Car {
    name
    position
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move(randomNumber) {
        if(randomNumber >= RacingcarConstants.MOVE_CONDITION) {
            this.position += RacingcarConstants.MOVE_FORWARD;
        }
    }
}

export default Car;
