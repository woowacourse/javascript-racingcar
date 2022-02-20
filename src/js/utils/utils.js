export function $(selector) {
  return document.querySelector(selector);
}

export function $all(selector) {
  return document.querySelectorAll(selector);
}

export function splitString(string, delimeter) {
  return string.split(delimeter);
}

export function trimStringArray(array) {
  return array.map((string) => string.trim());
}
