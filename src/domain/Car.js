import DEFINITION from "../constants/Definition.js";

class Car {
    constructor(name) {
        this.name = name;
        this.position = DEFINITION.DEAFULT_POSITION;
    }

    move(randomNumber) {
        if(randomNumber >= DEFINITION.MOVE_CONDITION) {
            this.position += DEFINITION.MOVE_FORWARD;
        }
    }
}

export default Car;
