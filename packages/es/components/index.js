import s from "./button/index.js";
import { default as f } from "./button/index.js";
import * as r from "../utils/type.js";
const a = [
  s
], n = (o) => {
  a.forEach((t) => {
    o.component(t.name, t);
  });
};
export {
  n as default,
  f as sButton,
  r as types
};
