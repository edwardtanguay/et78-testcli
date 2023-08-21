import { attachAllEvents, getCurrentPage, getMenu } from './Router';
import './style.scss';

const siteElem = document.querySelector('#app');

if (siteElem) {
	siteElem.innerHTML = /*html*/ `
	<hr/>
		${getMenu()}
	<hr/>
		${getCurrentPage()}
	<hr/>
`;


	attachAllEvents();
} else {
	alert('sorry')
}
