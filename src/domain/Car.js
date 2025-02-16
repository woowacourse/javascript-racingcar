const MOVE_CONDITION = 4
const MOVE_FORWARD = 1;

class Car {
    name
    position
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move(randomNumber) {
        if(randomNumber >= MOVE_CONDITION) {
            this.position += MOVE_FORWARD;
        }
    }
}

export default Car;
