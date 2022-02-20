export const querySelector = (selector, context = document) => context.querySelector(selector);
export const querySelectorAll = (selector, context = document) => context.querySelectorAll(selector);
export const htmlToElement = (htmlString) => {
  const template = document.createElement('div');
  template.innerHTML = htmlString;
  return template.firstElementChild;
};
