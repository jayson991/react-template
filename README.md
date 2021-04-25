# react-template

## Development Warning

- **Linux/Mac** for development is necessary, setting environment valuables on **Windows** is not compatible
- **Highly Recommend** using **yarn** or **pnpm** to run the project since both are faster than **npm** for their own features

## Features

- Use **Webpack 5** for bundler
- Use **Babel** for **Javascript** compiler
- Use **Eslint** && **Prettier** for linter
- Support **Fast Refresh** of **React** (`v17+`)
- No need to do `import React from 'react'` since `@babel/preset-react` has injected **React** to scripts for you
- Support **sass** (Replace `node-sass` with `dart-sass` for [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated)), **Postcss** && **Autoprefixer** for applying prefixes to support browsers you want
- Run the project in development mode and monitor production deployment through **Docker**, you can understand the pipeline of deployment clearly
- Use **Jest** for unit test, you can make it a **TDD** project to level up your personal skills

## Install dependencies

```bash
$ npm i
```

## Start up development

```bash
$ npm start
```

### Then open http://localhost:8080/ to see your app

## Build for deploy

```bash
$ npm run build
```

## Check code formation

```bash
$ npm run lint
```

## Lint to correct code formation

```bash
$ npm run lint:fix
$ npm run prettify
```

## Docker for development

```bash
$ npm run docker:dev
```

### If you have not installed node && npm, try the command below

```bash
$ docker build -f Dockerfile.dev -t dev:builder . && docker run -v ${PWD}:/app -v /app/node_modules -p 8080:8080 --rm dev:builder
```

#### Then open http://localhost:8080/ to see your app

## Docker for deploy

```bash
$ npm run docker:deploy
```

### If you have not installed node && npm, try the command below

```bash
$ docker build -f Dockerfile.prod -t prod:builder . && docker run -it -p 80:80 --rm prod:builder
```

#### Then open http://localhost/ to see your app
