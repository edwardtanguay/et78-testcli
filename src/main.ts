import './style.scss';

const localStorageMessage = localStorage.getItem('message');
const siteElem = document.querySelector('#app');


if (siteElem) {
	siteElem.innerHTML = /*html*/ `
	<form>
		<input class="message"/>
		<button class="btnPost btn-primary">Post</button>
		<button class="btnClear btn-primary">Clear</button>
	</form>

	<div>
Output: [<span class="output">${localStorageMessage}</span>]
	</div>
`;

	const _outputElem = document.querySelector<HTMLSpanElement>('.output');
	const _btnPostElem = document.querySelector<HTMLButtonElement>('.btnPost');
	const _messageElem = document.querySelector<HTMLInputElement>('.message');

	if (_outputElem && _btnPostElem && _messageElem) {
		const outputElem = _outputElem;
		const btnPostElem = _btnPostElem;
		const messageElem = _messageElem;

		btnPostElem.addEventListener('click', (e:Event) => {
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
