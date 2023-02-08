class Validator{
    validateLength(names){
        names.forEach((name)=>{
            if(name.length<1 || name.length>5) throw new Error();
        })
    }

    validateOverLap(names){
        const set = new Set(names);
        if(names.length!==set.size) throw new Error();
    }

    validateInvalidInput(names) {
        const ALPHA_REGEXP = /^[a-z|A-Z]+$/;
        names.forEach((name)=>{
            if(!ALPHA_REGEXP.test(name)) throw new Error();
        })
    }

    
}

module.exports = Validator;