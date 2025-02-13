class Car {
    name
    position
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move(randomNumber) {
        if(randomNumber > 3) {
            this.position += 1;
        }
    }

}

export default Car;