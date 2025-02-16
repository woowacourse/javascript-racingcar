import runValidators from "./runValidators.js";
import validateRandomNumberArrange from "../validation/validate/validateRandomNumberArrange.js";

export const getRandomNumber=(min,max)=>{
    runValidators([validateRandomNumberArrange],{min, max})

    return  Math.floor(Math.random() * (max - min + 1) + min);
}

