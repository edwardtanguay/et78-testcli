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

		btnAddTodoElem.addEventListener('click', () => {
			const listElem = _listElem;
			const newTodoElem = _newTodoElem;
			const newTodo = newTodoElem.value.trim();

			if (newTodo !== '') {
				listElem.innerHTML += `<li>${newTodo}</li>`;
				newTodoElem.value = '';
			}
		});
	}
}
