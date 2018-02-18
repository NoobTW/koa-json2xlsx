# koa-json2xlsx

![Build status](https://travis-ci.org/NoobTW/koa-json2xlsx.svg?branch=master) ![Node version](https://img.shields.io/badge/node-%3E%3D_7.6.0-green.svg)

> Json to excel(xlsx) middleware for [koa](https://github.com/koajs/koa)

Need async/await support, so you have to use Node v7.6+, or use `--harmony` option.

## Installation

Install using [npm](https://www.npmjs.com):
```bash
npm install koa-json2xlsx
```

## Usage
```javascript
const Koa = require('koa');
const koaJson2xlsx = require('koa-json2xlsx');

const app = new Koa();
const data = [
  {
    name: 'Peter',
    age: 18,
    foo: 'bar'
  },
  {
    name: 'Jane',
    age: 19,
    foo: 'bar'
  }
];

app.use(koaJson2xlsx());
app.use(ctx => {
  ctx.xlsx('data.xlsx', data);
});
```

## Reference

#### xlsx

**ctx.xlsx(filename, [option])**

You can find available option [here](https://github.com/rikkertkoppes/json2xls#options).

#### xls

An alias of `xlsx`.

## Tests

Run tests using `npm test`.

