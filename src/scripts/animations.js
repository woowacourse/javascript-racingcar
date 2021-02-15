const fadeIn = ($element, opacity, callback) => {
  opacity += 0.07;
  $element.style.opacity = opacity;
  if (opacity < 1) {
    requestAnimationFrame(() => fadeIn($element, opacity, callback));
  } else {
    callback();
  }
};

const requestFadeInAnimation = ($element, duration) => {
  $element.style.display = 'flex';
  const initialOpacity = Number($element.style.opacity);
  return new Promise((resolve, reject) => {
    fadeIn($element, initialOpacity, () => {
      if ($element.style.opacity >= 1) {
        resolve();
      }
    });
  });
};

export { requestFadeInAnimation };
