import { az as c } from './index-fa93e99f.js'
const e =
  (...a) =>
  (s) => {
    a.forEach((o) => {
      c(o) ? o(s) : (o.value = s)
    })
  }
export { e as c }
