export const PageTodoList = () => {
	return /*html*/`
<div class="page pageFormExample">
	<form>
		<input class="newTodo"/> <button type="button" class="btnAddTodo btn-primary">Add Todo</button>
	</form>
</div>
`;
}

export const PageTodoListAttachEvents = () => {
	
	const btnAddTodoElem = document.querySelector<HTMLButtonElement>('.btnAddTodo');

	btnAddTodoElem?.addEventListener('click', () => {
		alert('clicked');
	});
}
