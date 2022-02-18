import { RULES } from '../constants/index.js';

export const isEmpty = (value) => value === '';

export const isExceedLength = (value) => value.length > RULES.MAX_CAR_NAME_LENGTH;

export const isNotNaturalNumber = (number) => number < 1 || Math.floor(number) !== number;

export const convertToNumber = (value) => parseInt(value, 10);

export const pickRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
