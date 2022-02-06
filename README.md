# Resume - Automated resume publishing

Small project made to play with [GitHub Actions](https://github.com/features/actions).

On push, converts the Markdown files at the root into PDF & HTML in the _docs_ directory which content is then served by [GitHub Pages](https://pages.github.com/).

The result is available at [amadisbravard.fr](https://www.amadisbravard.fr/).

## Made with

- [Node.js](https://github.com/nodejs)
- [simonhaenisch/md-to-pdf](https://github.com/simonhaenisch/md-to-pdf/)
- [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)