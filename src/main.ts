import { attachAllEvents, getCurrentPage, getMenu } from './Router';
import './style.scss';

const siteElem = document.querySelector('#app');

if (siteElem) {
	siteElem.innerHTML = /*html*/ `
		${getMenu()}
		${getCurrentPage()}
`;


	attachAllEvents();
} else {
	alert('sorry')
}
