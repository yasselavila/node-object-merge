/**
 * yag-object-merge
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/node-object-merge
 */
"use strict";
var lodash = require('lodash');
var isPlainObject = lodash.isPlainObject;
var isArray = lodash.isArray;
function merge() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i - 0] = arguments[_i];
    }
    var ret = {};
    for (var i = 0, l = objs.length; i < l; i++) {
        var currentObj = objs[i];
        if (isPlainObject(currentObj)) {
            var keys = Object.keys(currentObj);
            for (var j = 0, k = keys.length; j < k; j++) {
                var key = keys[j];
                var member = currentObj[key];
                if (isPlainObject(member)) {
                    if (isPlainObject(ret[key] || null)) {
                        ret[key] = merge(ret[key], member);
                    }
                    else {
                        ret[key] = merge(member);
                    }
                }
                else if (isArray(member)) {
                    if (isArray(ret[key] || null)) {
                        ret[key] = ret[key].concat(member);
                    }
                    else {
                        ret[key] = member;
                    }
                }
                else {
                    ret[key] = currentObj[key];
                }
            }
        }
    }
    return ret;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = merge;
