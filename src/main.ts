import './style.scss';

const siteElem = document.querySelector('#app')

if (siteElem) {
  siteElem.innerHTML = `
<h1 class="text-orange-300 text-4xl">CLI Test</h1>
<h2>sass</h2>
<button class="btn-primary">test button</button>
`;
} else {
  alert('sorry')
}
