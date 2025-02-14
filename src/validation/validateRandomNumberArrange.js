import runValidators from "../utils/runValidators.js";
import throwError from "../utils/throwError.js";
import {RANDOM_ERROR_MESSAGES } from "../constants/Constants.js";

const checkInteger =(value)=>{
    if (!Number.isInteger(value[0])||!Number.isInteger(value[1]) ){
      throwError(RANDOM_ERROR_MESSAGES.NOT_INTEGER_INPUT);
    }

    if (value[0]>value[1]){
      throwError(RANDOM_ERROR_MESSAGES.MIN_GREATER_THAN_MAX);
    }
}

const validateRandomNumberArrange = (value) => runValidators([checkInteger], value);

export default validateRandomNumberArrange;
