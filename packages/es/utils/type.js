const n = (t) => Object.prototype.toString.call(t).slice(8, -1).toLowerCase(), o = (t) => n(t) === "object", e = (t) => typeof t == "function", c = (t) => o(t) && e(t.then) && e(t.catch), s = (t) => typeof t == "number" || /^\d+(\.\d+)?$/.test(t), r = (t) => t != null;
export {
  n as _typeof,
  r as isDef,
  e as isFunction,
  s as isNumeric,
  o as isObject,
  c as isPromise
};
