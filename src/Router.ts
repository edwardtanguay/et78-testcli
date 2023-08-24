import { PageReports } from './pages/PageReports';
import * as tools from './tools';
import { PageWelcome } from './pages/PageWelcome';
import { Page404 } from './pages/Page404';
import { PageFormExample, PageFormExampleAttachEvents } from './pages/PageFormExample';
import { PageTodoList, PageTodoListAttachEvents } from './pages/PageTodoList';

const pageNames = ['Welcome', 'Form Example', 'Todo List'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'welcome':
			return PageWelcome();
		case 'formexample':
			return PageFormExample();
		case 'todolist':
			return PageTodoList();
		default:
			return Page404();
	}
}

export const attachAllEvents = () => {
	switch (currentPageIdCode) {
		case 'formexample':
			PageFormExampleAttachEvents();
			break;
		case 'todolist':
			PageTodoListAttachEvents();
			break;
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
<nav class="menu">
<ul>
${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
</ul>
</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}