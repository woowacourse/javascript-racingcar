export const delay = (time = 0) => {
  if (typeof time !== 'number') {
    throw new Error('time must be number');
  }

  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};
