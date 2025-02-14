class Car {
    #name = "";
    #position = 0;
    constructor(){

    }
    move(){
        this.position++;
    }
}

export default Car;

/*
공원과의 실습
class Car {
    constructor(name){
    if(name.length > MAX어쩌궁 || 0이면){
    throw new Error();
    }
    }
    this.name = name;
    this.position = 0;
    move(){
        this.position++;
    }
}

export default Car;



*/