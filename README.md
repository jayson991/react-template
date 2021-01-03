# react-template

## Install dependencies

```bash
$ npm i
```

## Start up development

```bash
$ npm start
```

## Build for deploy

```bash
$ npm run build
```

## Docker for development

```bash
$ npm run docker:dev
```

### If you have not installed node && npm, try the command below

```bash
$ docker build -f Dockerfile.dev -t react-template:dev . && docker run -v ${PWD}:/app -v /app/node_modules -p 8080:8080 --rm react-template:dev
```

## Docker for deploy

```bash
$ npm run docker:deploy
```

### If you have not installed node && npm, try the command below

```bash
$ docker build -f Dockerfile.prod -t react-template-builder . && docker run -it -p 80:80 --rm react-template-builder
```

## Check code formation

```bash
$ npm run lint
```

## Lint to correct code formation

```bash
$ npm run prettier
```

## Extensions you need

- Auto Close Tag
- Auto Import
- Auto Rename Tag
- Beautify
- Bracket Pair Colorizer
- Eslint
- GitLens — Git supercharged
- Prettier

### Packages' installation for extensions

```bash
$ npm i -g eslint typescript
```

## VS Code settings

```json
{
  "terminal.integrated.rendererType": "dom",
  "beautify.ignore": ["**/*.js", "**/*.jsx"],
  "editor.tabSize": 2,
  "editor.fontSize": 14,
  "editor.wordWrap": "on",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.preferences.quoteStyle": "single",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "eslint.validate": ["html", "javascript", "javascriptreact", "typescript", "typescriptreact"],
  "typescript.preferences.quoteStyle": "single",
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## Some Dependencies Removed

- enzyme
- enzyme-to-json
- enzyme-adapter-react-16
