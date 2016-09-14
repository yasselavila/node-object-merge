yag-object-merge
=====

Version 0.1.1, Copyright (c) 2016, [Yassel Avila Gil](http://yasselavila.com)

## Warning!

**THIS TOOL IS UNDER HEAVY DEVELOPMENT.**

### What is this?

Tool to merge objects recursively.

### License

[BSD 3 Clause](./LICENSE.txt)

## Documentation

### API

JavaScript:
```js
var merge = require('yag-object-merge').default;

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
import {default as merge} from 'yag-object-merge';

// ...
```
