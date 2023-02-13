const { RACING } = require("./Constant_domain");

const Move = {
    moveCar(car, makeRandomFunction) {
        const randomNum = makeRandomFunction(
            RACING.MIN_MOVE_CONDITION,
            RACING.MAX_MOVE_CONDITION
        );
        if (this.isMove(randomNum)) car.move();
    },

    isMove(num) {
        return num >= RACING.MOVE_CONDITION;
    },
};

module.exports = Move;
