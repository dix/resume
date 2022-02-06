const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Converts Markdown files to PDF/HTML
// Basic launch : node ./mdConverter.js [--html] [--src path_src] [--dest path_dest] [--css path_stylesheet]


(async () => {
	const argv = yargs(hideBin(process.argv)).argv;
	const srcPath = argv.src ?? '..';
	const destPath = argv.dest ?? '../docs/';
	const htmlOutput = argv.html ?? false;
	const stylesheet = argv.css ?? `./style-${htmlOutput ? 'html' : 'pdf'}.css`;

	// Checks if src exists
	if (!fs.existsSync(srcPath)) {
		console.error(`Source path ${srcPath} doesn't exist!`);
		process.exit(42);
	}

	// Creates dest directory if it doesn't exist
	if (!fs.existsSync(destPath)) {
		fs.mkdirSync(destPath, { recursive: true });
	}

	// List Markdown files in src 
	const mdFiles = fs.readdirSync(srcPath).filter((f) => fs.statSync(path.join(srcPath, f)).isFile() && path.extname(f) === '.md');
	// Converts them
	for (let i = 0; i < mdFiles.length; i++) {
		await convertFile(path.join(srcPath, mdFiles[i]), destPath, htmlOutput, stylesheet);
	}
})();

async function convertFile(file, output, htmlOutput, css) {
	const outputExt = htmlOutput ? 'html' : 'pdf';
	console.info(`Converting ${file} to : ${outputExt}`);
	const outputFile = path.join(output, `${path.parse(file).name}.${outputExt}`);
	return mdToPdf(
		{ path: file },
		{ as_html: htmlOutput, dest: outputFile, stylesheet: css }
	).then(() => {
		console.info(`File ${outputFile} created`);
	})
		.catch(console.error);
}