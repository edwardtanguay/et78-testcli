import './style.scss';

const localStorageMessage = localStorage.getItem('message');
const siteElem = document.querySelector('#app');


if (siteElem) {
	siteElem.innerHTML = /*html*/ `
	<form>
		<input class="message"/>
		<button class="btnMain btn-primary">Post</button>
	</form>

	<div>
Output: [<span class="output">${localStorageMessage}</span>]
	</div>
`;

	const _outputElem = document.querySelector<HTMLSpanElement>('.output');
	const _btnMainElem = document.querySelector<HTMLButtonElement>('.btnMain');
	const _messageElem = document.querySelector<HTMLInputElement>('.message');

	if (_outputElem && _btnMainElem && _messageElem) {
		const outputElem = _outputElem;
		const btnMainElem = _btnMainElem;
		const messageElem = _messageElem;

		btnMainElem.addEventListener('click', (e:Event) => {
			e.preventDefault();
			const message = messageElem.value;
			outputElem.innerText = message;
			messageElem.value = '';
			localStorage.setItem('message', message);
		});
	}


} else {
	alert('sorry')
}
