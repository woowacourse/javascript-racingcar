const requestFadeInAnimation = ($element) => {
  $element.style.display = 'flex';
  if (!$element.classList.contains('fade-in')) {
    $element.classList.add("fade-in");
  }
};

export { requestFadeInAnimation };
