/**
 * yag-object-merge
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/node-object-merge
 */

import isPlainObject = require('is-plain-object');
import isArray = require('is-array');

export type ObjectOf<T> = {[key: string]: T};

export default function merge(...objs: Array<ObjectOf<any>>): ObjectOf<any> {
  let ret: ObjectOf<any> = {};

  for (let i: number = 0, l: number = objs.length; i < l; i++) {
    let currentObj: ObjectOf<any> = objs[i];

    if (isPlainObject(currentObj)) {
      let keys: string[] = Object.keys(currentObj);

      for (let j: number = 0, k: number = keys.length; j < k; j++) {
        let key: string = keys[j];
        let member: any = currentObj[key];

        if (isPlainObject(member)) {
          if (isPlainObject(ret[key] || null)) {
            ret[key] = merge(ret[key], member);
          } else {
            ret[key] = merge(member);
          }
        } else if (isArray(member)) {
          if (isArray(ret[key] || null)) {
            ret[key] = ret[key].concat(member);
          } else {
            ret[key] = member;
          }
        } else {
          ret[key] = currentObj[key];
        }
      }
    }
  }

  return ret;
}
