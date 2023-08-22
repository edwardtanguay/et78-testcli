export const PageTodoList = () => {
	return /*html*/`
<div class="page pageFormExample">
	<form>
		<input class="newTodo"/> <button type="button" class="btnAddTodo btn-primary">Add Todo</button>
	</form>
	<ul class="list mt-3">
	</ul>
</div>
`;
}

export const PageTodoListAttachEvents = () => {

	const _btnAddTodoElem = document.querySelector<HTMLButtonElement>('.btnAddTodo');
	const _listElem = document.querySelector<HTMLUListElement>('.list');

	if (_btnAddTodoElem && _listElem) {
		const btnAddTodoElem = _btnAddTodoElem;
		const listElem = _listElem;

		btnAddTodoElem?.addEventListener('click', () => {
			listElem.innerHTML += '<li>test li</li>';
		});
	}
}
