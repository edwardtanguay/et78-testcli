import './style.scss';

const siteElem = document.querySelector('#app')

if (siteElem) {
	siteElem.innerHTML = /*html*/ `
	<form>
		<input class="message"/>
		<button class="btnMain btn-primary">Post</button>
	</form>

	<div>
Output: [<span class="output"></span>]
	</div>
`;

	const _outputElem = document.querySelector<HTMLSpanElement>('.output');
	const _btnMainElem = document.querySelector('.btnMain');

	if (_outputElem && _btnMainElem) {
		const outputElem = _outputElem;
		const btnMainElem = _btnMainElem;

		btnMainElem.addEventListener('click', (e:Event) => {
			e.preventDefault();
			outputElem.innerText = 'testing';
		});
	}


} else {
	alert('sorry')
}
