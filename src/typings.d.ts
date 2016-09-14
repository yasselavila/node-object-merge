/**
 * yag-object-merge
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/node-object-merge
 */

declare module 'is-plain-object' {
  function isPlainObject(obj: any): boolean;
  export = isPlainObject;
}

declare module 'is-array' {
  function isArray(obj: any): boolean;
  export = isArray;
}
