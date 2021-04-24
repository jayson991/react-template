# react-template

> **Highly Recommend** using **yarn** or **pnpm** to run the project since both are faster than **npm**

## Features

- Use **Webpack** for bundler
- Use **Babel** for **Javascript** compiler
- Use **Eslint** && **Prettier** for linter
- Support **Fast Refresh** of the latest **React**
- Support **sass(dart-sass)**, **Postcss** && **Autoprefixer** for applying prefixes to support browsers you want
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

## Docker for deploy

```bash
$ npm run docker:deploy
```

### If you have not installed node && npm, try the command below

```bash
$ docker build -f Dockerfile.prod -t prod:builder . && docker run -it -p 80:80 --rm prod:builder
```
