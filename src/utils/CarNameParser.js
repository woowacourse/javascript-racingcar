function CarNameParser(str){
    let carNames = str.split(',');
    carNames = carNames.map((name)=>{
        return name.trim();
    })
    return carNames.slice();
}

module.exports = CarNameParser;