import './style.scss';

const siteElem = document.querySelector('#app')

if (siteElem) {
  siteElem.innerHTML = `
<h1>CLI Test</h1>
`;
} else {
  alert('sorry')
}
