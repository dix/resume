# mdConverter - Markdown to PDF/HTML

Node.js script based on [simonhaenisch/md-to-pdf](https://github.com/simonhaenisch/md-to-pdf/) that converts the Markdown files of a repository into PDF or HTML.

The CSS used comes from [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css) and has been tweaked for this project.

## How to

### Retrieve dependencies

```bash
npm install
```

### Run

#### Basic

```bash
# Convert Markdown files to PDF in the upper directory and put them in a docs sub-folder 
node mdConverter.js
# Same
npm run build-pdf
# Same but to HTML
npm run build-html
```

#### Advanced

```bash
node mdConverter.js [options]
```

| Parameter | Required | Default             | Use                                         | Example                   |
|---        |---       |---                  |---                                          |---                        |
| --html    | No       | false               | Generate HTML if set; PDF otherwise         | `--html`                  |
| --src     | No       | `..`                | Where to find the Markdown files to convert | `--src /home/dix/md`      |
| --dest    | No       | `../docs/`          | Where to put the generated files            | `--dest /home/dix/pdfs`   |
| --css     | No       | `./style-[EXT].css` | What stylesheet to use                      | `--dest /home/dix/gh.css` |