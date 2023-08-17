import './style.scss';

const siteElem = document.querySelector('#app')

if (siteElem) {
  siteElem.innerHTML = `
<h1 class="text-orange-300 text-4xl">CLI Test</h1>
`;
} else {
  alert('sorry')
}
