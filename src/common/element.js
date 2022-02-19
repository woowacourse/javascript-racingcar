export default function loadingElement() {
  const loading = document.createElement('img');
  loading.setAttribute('src', '../../public/loading.png');
  loading.setAttribute('alt', 'loading');
  loading.setAttribute('class', 'loading');

  return loading;
}
