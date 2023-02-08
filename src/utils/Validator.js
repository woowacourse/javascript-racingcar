class Validator{
    validateLength(names){
        names.forEach((name)=>{
            if(name.length<1 || name.length>5) throw new Error();
        })
    }

    nameOverLapped(names){
        const set = new Set(names);
        if(names.length!==set.size) throw new Error();
    }

    
}

module.exports = Validator;