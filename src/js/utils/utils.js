export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function $all(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

export function splitString(string, delimeter) {
  return string.split(delimeter);
}

export function trimStringArray(array) {
  return array.map((string) => string.trim());
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setIntervalForDefinedTimes(callback, intervalMs, times) {
  let intervalId = null;
  let remain = times;

  return new Promise((resolve) => {
    intervalId = setInterval(() => {
      callback();
      remain -= 1;

      if (remain <= 0) resolve();
    }, intervalMs);
  }).then(() => {
    clearInterval(intervalId);
  });
}

export function cloneObject(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    clone[key] =
      typeof obj[key] === 'object' && obj[key] !== null
        ? cloneObject(obj[key])
        : (clone[key] = obj[key]);
  });

  return clone;
}
