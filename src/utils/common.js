const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    object[name] = value && typeof value === 'object' ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
};

const toInt = (string) => Math.floor(Number(string));

const generateRandomNumberInRange = (min, max) => min + Math.floor(Math.random() * (max - min));

const readline = require('node:readline/promises').createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { deepClone, deepFreeze, toInt, generateRandomNumberInRange, readline };
