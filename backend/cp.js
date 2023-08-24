import * as tools from './tools.js';

const pageName = process.argv[2];

if (!pageName) {
	console.log('Please run script with a page name, e.g. "npm run cp Reports".')
	process.exit();
} else {
	console.log(`Creating page ${pageName}...`)
}