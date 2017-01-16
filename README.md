yag-object-merge
=====

Version 0.1.2, Copyright (c) 2016-2017, [Yassel Avila Gil](http://yasselavila.com)

### What is this?

Tool to merge objects recursively.

### License

[BSD 3 Clause](./LICENSE.txt)

## Documentation

### Usage

JavaScript:
```js
var merge = require('yag-object-merge').merge;

var one = {
  foo: 50,
  bar: [1, 2],
  baz: {
    one: 100,
    two: 200
  }
};

var two = {
  foo: 100,
  bar: [3],
  baz: {
    one: 200,
    two: 400
  }
};

var result = merge(one, two);

console.log(result);
/*
 * Result:
 * {
 *   foo: 100,
 *   bar: [1, 2, 3],
 *   baz: {
 *     one: 200,
 *     two: 400
 *   }
 * };
 */

```

TypeScript:
```ts
import merge from 'yag-object-merge';

interface Config {
  optionOne: string;
  optionTwo?: number;
}

let defaultConfig: Config = {
  optionOne: 'Default config',
  optionTwo: 1000
};

let userConfig: Config = {
  optionOne: 'User config'
};

let finalConfig: Config = merge<Config>(defaultConfig, userConfig);

console.log(finalConfig);
// { optionOne: 'User config', optionTwo: 1000 }
```
