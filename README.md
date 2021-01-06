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
