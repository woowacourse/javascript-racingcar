const loadingAnimation = () => {
  const loading = document.createElement('div');
  loading.setAttribute('class', 'loading-ring');
  loading.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  `;

  return loading;
};

export default loadingAnimation;
