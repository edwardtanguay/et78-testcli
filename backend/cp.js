import * as tools from './tools.js';

const pageName = process.argv[2];

// this was added by StackBlitz

if (!pageName) {
	console.log('Please run script with a page name, e.g. "npm run cp Reports".');
} else {

	// create page component
	const pathAndFileName = `./src/pages/Page${pageName}.ts`;
	if (tools.fileExists(pathAndFileName)) {
		console.log('file exists, please choose a new name');
	} else {
		tools.createFile(pathAndFileName, `export const Page${pageName} = () => {
	return /*html*/\`
	<div class="page page${pageName}">
		<p>This is the ${pageName} page.</p>
	</div>
	\`;
	}`);

		// edit Router.ts file
		const routerPathAndFileName = './src/Router.ts';
		tools.addLineInFile(routerPathAndFileName, '@@FIRSTLINE', `import { Page${pageName} } from './pages/Page${pageName}';`);
		tools.changeLineInFile(routerPathAndFileName, 'const pageNames = [', ']', `, '${pageName}'`);
		tools.addLineInFile(routerPathAndFileName, 'switch (', `case '${pageName.toLowerCase()}':\nreturn Page${pageName}();`)
	}
}