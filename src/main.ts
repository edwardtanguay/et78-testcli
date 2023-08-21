import './style.scss';

const siteElem = document.querySelector('#app')

if (siteElem) {
  siteElem.innerHTML = /*html*/ `
  <form>
    <input class="message"/>
    <button class="btn-primary">Post</button>
  </form>

  <div>
Output: [<span class="output"></span>]
  </div>
`;

  const _outputElem = document.querySelector('.output');
  if (_outputElem) {
    const outputElem = _outputElem;
    
    outputElem.innerHTML = 'nnn';
  }


} else {
  alert('sorry')
}
