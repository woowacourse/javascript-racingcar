export const getRandomNumber = () => Math.floor(Math.random() * 10);
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
