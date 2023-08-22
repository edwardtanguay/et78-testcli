export const PageTodoList = () => {
	return /*html*/`
<div class="page pageFormExample">
	<form>
		<input class="newTodo text-slate-800"/> <button type="button" class="btnAddTodo btn-primary">Add Todo</button>
	</form>
	<ul class="list mt-3">
	</ul>
</div>
`;
}


export const PageTodoListAttachEvents = () => {

	const _btnAddTodoElem = document.querySelector<HTMLButtonElement>('.btnAddTodo');
	const _listElem = document.querySelector<HTMLUListElement>('.list');
	const _newTodoElem = document.querySelector<HTMLInputElement>('.newTodo');

	if (_btnAddTodoElem && _listElem && _newTodoElem) {
		const btnAddTodoElem = _btnAddTodoElem;
		const listElem = _listElem;
		const newTodoElem = _newTodoElem;

		newTodoElem.focus();

		listElem.addEventListener('click', (e: Event) => {
			const elem = e.target as HTMLElement;
			const liElem = elem.parentElement as HTMLLIElement;

			if (elem.className.includes('trashcan')) {
				liElem?.remove();
			}
			if (elem.className.includes('pencil')) {

				// hide text
				const textElem = elem.previousElementSibling?.previousElementSibling as HTMLElement;
				const trashcanElem = elem.previousElementSibling as HTMLSpanElement;
				textElem.style.display = 'none';
				trashcanElem.style.display = 'none';
				elem.style.display = 'none';

				// create and insert input element
				const inputElem = document.createElement('input') as HTMLInputElement;
				inputElem.value = textElem.innerText;
				inputElem.style.marginRight = '.5rem';
				setTimeout(() => {
					inputElem.focus();
				}, 10);
				liElem.insertBefore(inputElem, trashcanElem);
			}
		})

		btnAddTodoElem.addEventListener('click', () => {
			const newTodo = newTodoElem.value.trim();

			if (newTodo !== '') {
				listElem.innerHTML += `<li><span>${newTodo}</span> <i class="trashcan cursor-pointer fa fa-trash-o text-red-400" aria-hidden="true"></i> <i class="pencil fa fa-pencil text-green-500 cursor-pointer" aria-hidden="true"></i></li>`;
				newTodoElem.value = '';
				newTodoElem.focus();
			}
		});
	}


}
