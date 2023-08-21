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
