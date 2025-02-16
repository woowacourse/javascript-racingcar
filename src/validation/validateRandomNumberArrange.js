import runValidators from "../utils/runValidators.js";
import throwError from "../utils/throwError.js";
import {RANDOM_ERROR_MESSAGES } from "../constants/Constants.js";

const checkInteger =(value)=>{
  if (!Number.isInteger(value.min)||!Number.isInteger(value.max) ){
    
    throwError(RANDOM_ERROR_MESSAGES.NOT_INTEGER);
  }

  if (value.min>value.max){
    throwError(RANDOM_ERROR_MESSAGES.MIN_GREATER_THAN_MAX);
  }
}

const validateRandomNumberArrange = (value) => runValidators([checkInteger], value);

export default validateRandomNumberArrange;
