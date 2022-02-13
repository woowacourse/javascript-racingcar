import { RANDOM_NUMBER_LIMIT } from "../constants/constants.js";

export default function generateRandomNumber(){
    return Math.floor((RANDOM_NUMBER_LIMIT + 1) * Math.random());
}