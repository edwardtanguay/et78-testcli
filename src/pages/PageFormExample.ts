const localStorageMessage = localStorage.getItem('message');

export const PageFormExample = () => {
	return /*html*/`
<div class="page pageFormExample">
	<form>
		<input class="message"/>
		<button class="btnPost btn-primary">Post</button>
		<button class="btnClear btn-primary">Clear</button>
	</form>

	<div>
Output: [<span class="output">${localStorageMessage}</span>]
	</div>
</div>
`;
}

export const PageFormExampleAttachEvents = () => {
	const _outputElem = document.querySelector<HTMLSpanElement>('.output');
	const _btnPostElem = document.querySelector<HTMLButtonElement>('.btnPost');
	const _messageElem = document.querySelector<HTMLInputElement>('.message');
	const _btnClearElem = document.querySelector<HTMLButtonElement>('.btnClear');

	if (_outputElem && _btnPostElem && _messageElem && _btnClearElem) {
		const outputElem = _outputElem;
		const btnPostElem = _btnPostElem;
		const messageElem = _messageElem;
		const btnClearElem = _btnClearElem;

		btnPostElem.addEventListener('click', (e: Event) => {
			e.preventDefault();
			const message = messageElem.value;
			outputElem.innerText = message;
			messageElem.value = '';
			localStorage.setItem('message', message);
		});

		btnClearElem.addEventListener('click', (e: Event) => {
			e.preventDefault();
			outputElem.innerText = '';
			localStorage.setItem('message', '');
		});
	}
}
