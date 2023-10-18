import {
  aV as Jl,
  aW as Ae,
  aX as en,
  aY as zt,
  aZ as Vt,
  a_ as tn,
  a$ as jt,
  b0 as Gt,
  aw as et,
  b1 as ln,
  b2 as Ye,
  b3 as nn,
  b4 as on,
  b5 as sn,
  b6 as rn,
  aB as Se,
  b7 as Yt,
  m as mt,
  s as an,
  t as un,
  b8 as Ut,
  b9 as qt,
  a as R,
  ba as cn,
  bb as dn,
  y as I,
  H as Xt,
  w as re,
  Z as Me,
  P as We,
  a3 as le,
  ae as xt,
  v as pe,
  x as ae,
  o as Y,
  z as Q,
  h as $,
  f as F,
  _ as qe,
  a0 as gt,
  D as Fe,
  e as he,
  F as V,
  A as Ee,
  ak as Re,
  a2 as Ce,
  I as Zt,
  bc as Ie,
  bd as fn,
  ah as Rt,
  ax as hn,
  i as pn,
  C as yt,
  $ as vn,
  be as mn,
  W as de,
  aH as Qt,
  c as Te,
  d as xe,
  a5 as tt,
  aI as Nt,
  g as Jt,
  ab as De,
  bf as el,
  bg as gn,
  bh as bt,
  O as be,
  a6 as tl,
  a8 as Ke,
  a7 as lt,
  aa as H,
  ag as He,
  V as Lt,
  ai as At,
  bi as yn,
  q as bn,
  N as Cn,
  ac as Mt,
  bj as wn,
  ad as ll,
  bk as Sn,
  bl as En,
  aC as xn,
  Q as Rn,
  G as Nn,
  M as Ln
} from './index-fa93e99f.js'
import { U as nl } from './el-input-84ed1cb2.js'
import {
  u as nt,
  t as An,
  a as Mn
} from './_plugin-vue_export-helper-3666fca8.js'
import {
  l as On,
  m as Tn,
  y as Fn,
  E as ol,
  b as kn
} from './el-overlay-47b1e40b.js'
import {
  i as Xe,
  g as $n,
  S as sl,
  k as rl,
  c as Wn,
  a as al,
  b as Hn,
  d as Pn,
  e as Bn,
  f as In,
  h as _n,
  j as Ot,
  l as Dn
} from './_baseClone-875524b2.js'
import {
  s as Kn,
  o as zn,
  i as il,
  h as Vn,
  b as jn,
  E as ke
} from './el-checkbox-e5975ba5.js'
import { b as ul } from './isEqual-21c5d1b8.js'
var Gn = /\s/
function Yn(e) {
  for (var t = e.length; t-- && Gn.test(e.charAt(t)); );
  return t
}
var Un = /^\s+/
function qn(e) {
  return e && e.slice(0, Yn(e) + 1).replace(Un, '')
}
var Tt = 0 / 0,
  Xn = /^[-+]0x[0-9a-f]+$/i,
  Zn = /^0b[01]+$/i,
  Qn = /^0o[0-7]+$/i,
  Jn = parseInt
function Ft(e) {
  if (typeof e == 'number') return e
  if (Jl(e)) return Tt
  if (Ae(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = Ae(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = qn(e)
  var l = Zn.test(e)
  return l || Qn.test(e) ? Jn(e.slice(2), l ? 2 : 8) : Xn.test(e) ? Tt : +e
}
function eo(e, t) {
  return Kn(zn(e, t, il), e + '')
}
function to(e, t, l) {
  if (!Ae(l)) return !1
  var n = typeof t
  return (n == 'number' ? Xe(l) && en(t, l.length) : n == 'string' && t in l)
    ? zt(l[t], e)
    : !1
}
function lo(e) {
  return eo(function (t, l) {
    var n = -1,
      s = l.length,
      i = s > 1 ? l[s - 1] : void 0,
      a = s > 2 ? l[2] : void 0
    for (
      i = e.length > 3 && typeof i == 'function' ? (s--, i) : void 0,
        a && to(l[0], l[1], a) && ((i = s < 3 ? void 0 : i), (s = 1)),
        t = Object(t);
      ++n < s;

    ) {
      var o = l[n]
      o && e(t, o, n, i)
    }
    return t
  })
}
var no = '[object Object]',
  oo = Function.prototype,
  so = Object.prototype,
  cl = oo.toString,
  ro = so.hasOwnProperty,
  ao = cl.call(Object)
function io(e) {
  if (!Vt(e) || tn(e) != no) return !1
  var t = $n(e)
  if (t === null) return !0
  var l = ro.call(t, 'constructor') && t.constructor
  return typeof l == 'function' && l instanceof l && cl.call(l) == ao
}
var uo = 1,
  co = 2
function fo(e, t, l, n) {
  var s = l.length,
    i = s,
    a = !n
  if (e == null) return !i
  for (e = Object(e); s--; ) {
    var o = l[s]
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
  }
  for (; ++s < i; ) {
    o = l[s]
    var r = o[0],
      u = e[r],
      c = o[1]
    if (a && o[2]) {
      if (u === void 0 && !(r in e)) return !1
    } else {
      var f = new sl()
      if (n) var h = n(u, c, r, e, t, f)
      if (!(h === void 0 ? ul(c, u, uo | co, n, f) : h)) return !1
    }
  }
  return !0
}
function dl(e) {
  return e === e && !Ae(e)
}
function ho(e) {
  for (var t = rl(e), l = t.length; l--; ) {
    var n = t[l],
      s = e[n]
    t[l] = [n, s, dl(s)]
  }
  return t
}
function fl(e, t) {
  return function (l) {
    return l == null ? !1 : l[e] === t && (t !== void 0 || e in Object(l))
  }
}
function po(e) {
  var t = ho(e)
  return t.length == 1 && t[0][2]
    ? fl(t[0][0], t[0][1])
    : function (l) {
        return l === e || fo(l, e, t)
      }
}
var vo = 1,
  mo = 2
function go(e, t) {
  return jt(e) && dl(t)
    ? fl(Gt(e), t)
    : function (l) {
        var n = et(l, e)
        return n === void 0 && n === t ? Vn(l, e) : ul(t, n, vo | mo)
      }
}
function yo(e) {
  return function (t) {
    return t == null ? void 0 : t[e]
  }
}
function bo(e) {
  return function (t) {
    return ln(t, e)
  }
}
function Co(e) {
  return jt(e) ? yo(Gt(e)) : bo(e)
}
function wo(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? il
    : typeof e == 'object'
    ? Ye(e)
      ? go(e[0], e[1])
      : po(e)
    : Co(e)
}
function So(e) {
  return function (t, l, n) {
    for (var s = -1, i = Object(t), a = n(t), o = a.length; o--; ) {
      var r = a[e ? o : ++s]
      if (l(i[r], r, i) === !1) break
    }
    return t
  }
}
var Eo = So()
const hl = Eo
function xo(e, t) {
  return e && hl(e, t, rl)
}
function Ro(e, t) {
  return function (l, n) {
    if (l == null) return l
    if (!Xe(l)) return e(l, n)
    for (
      var s = l.length, i = t ? s : -1, a = Object(l);
      (t ? i-- : ++i < s) && n(a[i], i, a) !== !1;

    );
    return l
  }
}
var No = Ro(xo)
const Lo = No
var Ao = function () {
  return nn.Date.now()
}
const Qe = Ao
var Mo = 'Expected a function',
  Oo = Math.max,
  To = Math.min
function Ue(e, t, l) {
  var n,
    s,
    i,
    a,
    o,
    r,
    u = 0,
    c = !1,
    f = !1,
    h = !0
  if (typeof e != 'function') throw new TypeError(Mo)
  ;(t = Ft(t) || 0),
    Ae(l) &&
      ((c = !!l.leading),
      (f = 'maxWait' in l),
      (i = f ? Oo(Ft(l.maxWait) || 0, t) : i),
      (h = 'trailing' in l ? !!l.trailing : h))
  function g(w) {
    var y = n,
      N = s
    return (n = s = void 0), (u = w), (a = e.apply(N, y)), a
  }
  function p(w) {
    return (u = w), (o = setTimeout(x, t)), c ? g(w) : a
  }
  function S(w) {
    var y = w - r,
      N = w - u,
      M = t - y
    return f ? To(M, i - N) : M
  }
  function m(w) {
    var y = w - r,
      N = w - u
    return r === void 0 || y >= t || y < 0 || (f && N >= i)
  }
  function x() {
    var w = Qe()
    if (m(w)) return v(w)
    o = setTimeout(x, S(w))
  }
  function v(w) {
    return (o = void 0), h && n ? g(w) : ((n = s = void 0), a)
  }
  function E() {
    o !== void 0 && clearTimeout(o), (u = 0), (n = r = s = o = void 0)
  }
  function d() {
    return o === void 0 ? a : v(Qe())
  }
  function C() {
    var w = Qe(),
      y = m(w)
    if (((n = arguments), (s = this), (r = w), y)) {
      if (o === void 0) return p(r)
      if (f) return clearTimeout(o), (o = setTimeout(x, t)), g(r)
    }
    return o === void 0 && (o = setTimeout(x, t)), a
  }
  return (C.cancel = E), (C.flush = d), C
}
function ot(e, t, l) {
  ;((l !== void 0 && !zt(e[t], l)) || (l === void 0 && !(t in e))) &&
    on(e, t, l)
}
function Fo(e) {
  return Vt(e) && Xe(e)
}
function st(e, t) {
  if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__')
    return e[t]
}
function ko(e) {
  return Wn(e, al(e))
}
function $o(e, t, l, n, s, i, a) {
  var o = st(e, l),
    r = st(t, l),
    u = a.get(r)
  if (u) {
    ot(e, l, u)
    return
  }
  var c = i ? i(o, r, l + '', e, t, a) : void 0,
    f = c === void 0
  if (f) {
    var h = Ye(r),
      g = !h && Hn(r),
      p = !h && !g && Pn(r)
    ;(c = r),
      h || g || p
        ? Ye(o)
          ? (c = o)
          : Fo(o)
          ? (c = Bn(o))
          : g
          ? ((f = !1), (c = In(r, !0)))
          : p
          ? ((f = !1), (c = _n(r, !0)))
          : (c = [])
        : io(r) || Ot(r)
        ? ((c = o), Ot(o) ? (c = ko(o)) : (!Ae(o) || sn(o)) && (c = Dn(r)))
        : (f = !1)
  }
  f && (a.set(r, c), s(c, r, n, i, a), a.delete(r)), ot(e, l, c)
}
function pl(e, t, l, n, s) {
  e !== t &&
    hl(
      t,
      function (i, a) {
        if ((s || (s = new sl()), Ae(i))) $o(e, t, a, l, pl, n, s)
        else {
          var o = n ? n(st(e, a), i, a + '', e, t, s) : void 0
          o === void 0 && (o = i), ot(e, a, o)
        }
      },
      al
    )
}
function Wo(e, t) {
  var l = -1,
    n = Xe(e) ? Array(e.length) : []
  return (
    Lo(e, function (s, i, a) {
      n[++l] = t(s, i, a)
    }),
    n
  )
}
function Ho(e, t) {
  var l = Ye(e) ? rn : Wo
  return l(e, wo(t))
}
function Po(e, t) {
  return jn(Ho(e, t), 1)
}
var Bo = lo(function (e, t, l) {
  pl(e, t, l)
})
const vl = Bo,
  Io = (e) => (Se ? window.requestAnimationFrame(e) : setTimeout(e, 16))
var Vr =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function _o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
const we = new Map()
let kt
Se &&
  (document.addEventListener('mousedown', (e) => (kt = e)),
  document.addEventListener('mouseup', (e) => {
    for (const t of we.values())
      for (const { documentHandler: l } of t) l(e, kt)
  }))
function $t(e, t) {
  let l = []
  return (
    Array.isArray(t.arg) ? (l = t.arg) : Yt(t.arg) && l.push(t.arg),
    function (n, s) {
      const i = t.instance.popperRef,
        a = n.target,
        o = s == null ? void 0 : s.target,
        r = !t || !t.instance,
        u = !a || !o,
        c = e.contains(a) || e.contains(o),
        f = e === a,
        h =
          (l.length && l.some((p) => (p == null ? void 0 : p.contains(a)))) ||
          (l.length && l.includes(o)),
        g = i && (i.contains(a) || i.contains(o))
      r || u || c || f || h || g || t.value(n, s)
    }
  )
}
const Do = {
  beforeMount(e, t) {
    we.has(e) || we.set(e, []),
      we.get(e).push({ documentHandler: $t(e, t), bindingFn: t.value })
  },
  updated(e, t) {
    we.has(e) || we.set(e, [])
    const l = we.get(e),
      n = l.findIndex((i) => i.bindingFn === t.oldValue),
      s = { documentHandler: $t(e, t), bindingFn: t.value }
    n >= 0 ? l.splice(n, 1, s) : l.push(s)
  },
  unmounted(e) {
    we.delete(e)
  }
}
var Wt = !1,
  Ne,
  rt,
  at,
  ze,
  Ve,
  ml,
  je,
  it,
  ut,
  ct,
  gl,
  dt,
  ft,
  yl,
  bl
function oe() {
  if (!Wt) {
    Wt = !0
    var e = navigator.userAgent,
      t =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          e
        ),
      l = /(Mac OS X)|(Windows)|(Linux)/.exec(e)
    if (
      ((dt = /\b(iPhone|iP[ao]d)/.exec(e)),
      (ft = /\b(iP[ao]d)/.exec(e)),
      (ct = /Android/i.exec(e)),
      (yl = /FBAN\/\w+;/i.exec(e)),
      (bl = /Mobile/i.exec(e)),
      (gl = !!/Win64/.exec(e)),
      t)
    ) {
      ;(Ne = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
        Ne && document && document.documentMode && (Ne = document.documentMode)
      var n = /(?:Trident\/(\d+.\d+))/.exec(e)
      ;(ml = n ? parseFloat(n[1]) + 4 : Ne),
        (rt = t[2] ? parseFloat(t[2]) : NaN),
        (at = t[3] ? parseFloat(t[3]) : NaN),
        (ze = t[4] ? parseFloat(t[4]) : NaN),
        ze
          ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)),
            (Ve = t && t[1] ? parseFloat(t[1]) : NaN))
          : (Ve = NaN)
    } else Ne = rt = at = Ve = ze = NaN
    if (l) {
      if (l[1]) {
        var s = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e)
        je = s ? parseFloat(s[1].replace('_', '.')) : !0
      } else je = !1
      ;(it = !!l[2]), (ut = !!l[3])
    } else je = it = ut = !1
  }
}
var ht = {
    ie: function () {
      return oe() || Ne
    },
    ieCompatibilityMode: function () {
      return oe() || ml > Ne
    },
    ie64: function () {
      return ht.ie() && gl
    },
    firefox: function () {
      return oe() || rt
    },
    opera: function () {
      return oe() || at
    },
    webkit: function () {
      return oe() || ze
    },
    safari: function () {
      return ht.webkit()
    },
    chrome: function () {
      return oe() || Ve
    },
    windows: function () {
      return oe() || it
    },
    osx: function () {
      return oe() || je
    },
    linux: function () {
      return oe() || ut
    },
    iphone: function () {
      return oe() || dt
    },
    mobile: function () {
      return oe() || dt || ft || ct || bl
    },
    nativeApp: function () {
      return oe() || yl
    },
    android: function () {
      return oe() || ct
    },
    ipad: function () {
      return oe() || ft
    }
  },
  Ko = ht,
  _e = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  zo = {
    canUseDOM: _e,
    canUseWorkers: typeof Worker < 'u',
    canUseEventListeners:
      _e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: _e && !!window.screen,
    isInWorker: !_e
  },
  Cl = zo,
  wl
Cl.canUseDOM &&
  (wl =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature('', '') !== !0)
function Vo(e, t) {
  if (!Cl.canUseDOM || (t && !('addEventListener' in document))) return !1
  var l = 'on' + e,
    n = l in document
  if (!n) {
    var s = document.createElement('div')
    s.setAttribute(l, 'return;'), (n = typeof s[l] == 'function')
  }
  return (
    !n &&
      wl &&
      e === 'wheel' &&
      (n = document.implementation.hasFeature('Events.wheel', '3.0')),
    n
  )
}
var jo = Vo,
  Ht = 10,
  Pt = 40,
  Bt = 800
function Sl(e) {
  var t = 0,
    l = 0,
    n = 0,
    s = 0
  return (
    'detail' in e && (l = e.detail),
    'wheelDelta' in e && (l = -e.wheelDelta / 120),
    'wheelDeltaY' in e && (l = -e.wheelDeltaY / 120),
    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = l), (l = 0)),
    (n = t * Ht),
    (s = l * Ht),
    'deltaY' in e && (s = e.deltaY),
    'deltaX' in e && (n = e.deltaX),
    (n || s) &&
      e.deltaMode &&
      (e.deltaMode == 1 ? ((n *= Pt), (s *= Pt)) : ((n *= Bt), (s *= Bt))),
    n && !t && (t = n < 1 ? -1 : 1),
    s && !l && (l = s < 1 ? -1 : 1),
    { spinX: t, spinY: l, pixelX: n, pixelY: s }
  )
}
Sl.getEventType = function () {
  return Ko.firefox() ? 'DOMMouseScroll' : jo('wheel') ? 'wheel' : 'mousewheel'
}
var Go = Sl
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Yo = function (e, t) {
    if (e && e.addEventListener) {
      const l = function (n) {
        const s = Go(n)
        t && Reflect.apply(t, this, [n, s])
      }
      e.addEventListener('wheel', l, { passive: !0 })
    }
  },
  Uo = {
    beforeMount(e, t) {
      Yo(e, t.value)
    }
  },
  qo = mt({
    center: Boolean,
    alignCenter: Boolean,
    closeIcon: { type: an },
    customClass: { type: String, default: '' },
    draggable: Boolean,
    fullscreen: Boolean,
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
    ariaLevel: { type: String, default: '2' }
  }),
  jr = { close: () => !0 },
  Gr = mt({
    ...qo,
    appendToBody: Boolean,
    beforeClose: { type: un(Function) },
    destroyOnClose: Boolean,
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    top: { type: String },
    modelValue: Boolean,
    modalClass: String,
    width: { type: [String, Number] },
    zIndex: { type: Number },
    trapFocus: { type: Boolean, default: !1 },
    headerAriaLevel: { type: String, default: '2' }
  }),
  Yr = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [nl]: (e) => Ut(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0
  },
  Ur = (e, t) => {
    const n = le().emit,
      { nextZIndex: s } = qt()
    let i = ''
    const a = nt(),
      o = nt(),
      r = R(!1),
      u = R(!1),
      c = R(!1),
      f = R(e.zIndex || s())
    let h, g
    const p = cn('namespace', dn),
      S = I(() => {
        const k = {},
          j = `--${p.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (k[`${j}-margin-top`] = e.top),
            e.width && (k[`${j}-width`] = Xt(e.width))),
          k
        )
      }),
      m = I(() => (e.alignCenter ? { display: 'flex' } : {}))
    function x() {
      n('opened')
    }
    function v() {
      n('closed'), n(nl, !1), e.destroyOnClose && (c.value = !1)
    }
    function E() {
      n('close')
    }
    function d() {
      g == null || g(),
        h == null || h(),
        e.openDelay && e.openDelay > 0
          ? ({ stop: h } = xt(() => N(), e.openDelay))
          : N()
    }
    function C() {
      h == null || h(),
        g == null || g(),
        e.closeDelay && e.closeDelay > 0
          ? ({ stop: g } = xt(() => M(), e.closeDelay))
          : M()
    }
    function w() {
      function k(j) {
        j || ((u.value = !0), (r.value = !1))
      }
      e.beforeClose ? e.beforeClose(k) : C()
    }
    function y() {
      e.closeOnClickModal && w()
    }
    function N() {
      Se && (r.value = !0)
    }
    function M() {
      r.value = !1
    }
    function K() {
      n('openAutoFocus')
    }
    function B() {
      n('closeAutoFocus')
    }
    function O(k) {
      var j
      ;((j = k.detail) == null ? void 0 : j.focusReason) === 'pointer' &&
        k.preventDefault()
    }
    e.lockScroll && On(r)
    function D() {
      e.closeOnPressEscape && w()
    }
    return (
      re(
        () => e.modelValue,
        (k) => {
          k
            ? ((u.value = !1),
              d(),
              (c.value = !0),
              (f.value = e.zIndex ? f.value++ : s()),
              Me(() => {
                n('open'), t.value && (t.value.scrollTop = 0)
              }))
            : r.value && C()
        }
      ),
      re(
        () => e.fullscreen,
        (k) => {
          t.value &&
            (k
              ? ((i = t.value.style.transform), (t.value.style.transform = ''))
              : (t.value.style.transform = i))
        }
      ),
      We(() => {
        e.modelValue && ((r.value = !0), (c.value = !0), d())
      }),
      {
        afterEnter: x,
        afterLeave: v,
        beforeLeave: E,
        handleClose: w,
        onModalClick: y,
        close: C,
        doClose: M,
        onOpenAutoFocus: K,
        onCloseAutoFocus: B,
        onCloseRequested: D,
        onFocusoutPrevented: O,
        titleId: a,
        bodyId: o,
        closed: u,
        style: S,
        overlayDialogStyle: m,
        rendered: c,
        visible: r,
        zIndex: f
      }
    )
  },
  Xo = {
    viewBox: '0 0 79 86',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  Zo = ['id'],
  Qo = ['stop-color'],
  Jo = ['stop-color'],
  es = ['id'],
  ts = ['stop-color'],
  ls = ['stop-color'],
  ns = ['id'],
  os = {
    id: 'Illustrations',
    stroke: 'none',
    'stroke-width': '1',
    fill: 'none',
    'fill-rule': 'evenodd'
  },
  ss = { id: 'B-type', transform: 'translate(-1268.000000, -535.000000)' },
  rs = { id: 'Group-2', transform: 'translate(1268.000000, 535.000000)' },
  as = ['fill'],
  is = ['fill'],
  us = {
    id: 'Group-Copy',
    transform:
      'translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)'
  },
  cs = ['fill'],
  ds = ['fill'],
  fs = ['fill'],
  hs = ['fill'],
  ps = ['fill'],
  vs = {
    id: 'Rectangle-Copy-17',
    transform: 'translate(53.000000, 45.000000)'
  },
  ms = ['fill', 'xlink:href'],
  gs = ['fill', 'mask'],
  ys = ['fill'],
  bs = pe({ name: 'ImgEmpty' }),
  Cs = pe({
    ...bs,
    setup(e) {
      const t = ae('empty'),
        l = nt()
      return (n, s) => (
        Y(),
        Q('svg', Xo, [
          $('defs', null, [
            $(
              'linearGradient',
              {
                id: `linearGradient-1-${F(l)}`,
                x1: '38.8503086%',
                y1: '0%',
                x2: '61.1496914%',
                y2: '100%'
              },
              [
                $(
                  'stop',
                  {
                    'stop-color': `var(${F(t).cssVarBlockName(
                      'fill-color-1'
                    )})`,
                    offset: '0%'
                  },
                  null,
                  8,
                  Qo
                ),
                $(
                  'stop',
                  {
                    'stop-color': `var(${F(t).cssVarBlockName(
                      'fill-color-4'
                    )})`,
                    offset: '100%'
                  },
                  null,
                  8,
                  Jo
                )
              ],
              8,
              Zo
            ),
            $(
              'linearGradient',
              {
                id: `linearGradient-2-${F(l)}`,
                x1: '0%',
                y1: '9.5%',
                x2: '100%',
                y2: '90.5%'
              },
              [
                $(
                  'stop',
                  {
                    'stop-color': `var(${F(t).cssVarBlockName(
                      'fill-color-1'
                    )})`,
                    offset: '0%'
                  },
                  null,
                  8,
                  ts
                ),
                $(
                  'stop',
                  {
                    'stop-color': `var(${F(t).cssVarBlockName(
                      'fill-color-6'
                    )})`,
                    offset: '100%'
                  },
                  null,
                  8,
                  ls
                )
              ],
              8,
              es
            ),
            $(
              'rect',
              {
                id: `path-3-${F(l)}`,
                x: '0',
                y: '0',
                width: '17',
                height: '36'
              },
              null,
              8,
              ns
            )
          ]),
          $('g', os, [
            $('g', ss, [
              $('g', rs, [
                $(
                  'path',
                  {
                    id: 'Oval-Copy-2',
                    d: 'M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z',
                    fill: `var(${F(t).cssVarBlockName('fill-color-3')})`
                  },
                  null,
                  8,
                  as
                ),
                $(
                  'polygon',
                  {
                    id: 'Rectangle-Copy-14',
                    fill: `var(${F(t).cssVarBlockName('fill-color-7')})`,
                    transform:
                      'translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ',
                    points: '13 58 53 58 42 45 2 45'
                  },
                  null,
                  8,
                  is
                ),
                $('g', us, [
                  $(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-10',
                      fill: `var(${F(t).cssVarBlockName('fill-color-7')})`,
                      transform:
                        'translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ',
                      points: '2.84078316e-14 3 18 3 23 7 5 7'
                    },
                    null,
                    8,
                    cs
                  ),
                  $(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-11',
                      fill: `var(${F(t).cssVarBlockName('fill-color-5')})`,
                      points: '-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43'
                    },
                    null,
                    8,
                    ds
                  ),
                  $(
                    'rect',
                    {
                      id: 'Rectangle-Copy-12',
                      fill: `url(#linearGradient-1-${F(l)})`,
                      transform:
                        'translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ',
                      x: '38',
                      y: '7',
                      width: '17',
                      height: '36'
                    },
                    null,
                    8,
                    fs
                  ),
                  $(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-13',
                      fill: `var(${F(t).cssVarBlockName('fill-color-2')})`,
                      transform:
                        'translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ',
                      points: '24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12'
                    },
                    null,
                    8,
                    hs
                  )
                ]),
                $(
                  'rect',
                  {
                    id: 'Rectangle-Copy-15',
                    fill: `url(#linearGradient-2-${F(l)})`,
                    x: '13',
                    y: '45',
                    width: '40',
                    height: '36'
                  },
                  null,
                  8,
                  ps
                ),
                $('g', vs, [
                  $(
                    'use',
                    {
                      id: 'Mask',
                      fill: `var(${F(t).cssVarBlockName('fill-color-8')})`,
                      transform:
                        'translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ',
                      'xlink:href': `#path-3-${F(l)}`
                    },
                    null,
                    8,
                    ms
                  ),
                  $(
                    'polygon',
                    {
                      id: 'Rectangle-Copy',
                      fill: `var(${F(t).cssVarBlockName('fill-color-9')})`,
                      mask: `url(#mask-4-${F(l)})`,
                      transform:
                        'translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ',
                      points: '7 0 24 0 20 18 7 16.5'
                    },
                    null,
                    8,
                    gs
                  )
                ]),
                $(
                  'polygon',
                  {
                    id: 'Rectangle-Copy-18',
                    fill: `var(${F(t).cssVarBlockName('fill-color-2')})`,
                    transform:
                      'translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ',
                    points: '62 45 79 45 70 58 53 58'
                  },
                  null,
                  8,
                  ys
                )
              ])
            ])
          ])
        ])
      )
    }
  })
var ws = qe(Cs, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue'
  ]
])
const Ss = mt({
    image: { type: String, default: '' },
    imageSize: Number,
    description: { type: String, default: '' }
  }),
  Es = ['src'],
  xs = { key: 1 },
  Rs = pe({ name: 'ElEmpty' }),
  Ns = pe({
    ...Rs,
    props: Ss,
    setup(e) {
      const t = e,
        { t: l } = gt(),
        n = ae('empty'),
        s = I(() => t.description || l('el.table.emptyText')),
        i = I(() => ({ width: Xt(t.imageSize) }))
      return (a, o) => (
        Y(),
        Q(
          'div',
          { class: V(F(n).b()) },
          [
            $(
              'div',
              { class: V(F(n).e('image')), style: Ee(F(i)) },
              [
                a.image
                  ? (Y(),
                    Q(
                      'img',
                      { key: 0, src: a.image, ondragstart: 'return false' },
                      null,
                      8,
                      Es
                    ))
                  : Fe(a.$slots, 'image', { key: 1 }, () => [he(ws)])
              ],
              6
            ),
            $(
              'div',
              { class: V(F(n).e('description')) },
              [
                a.$slots.description
                  ? Fe(a.$slots, 'description', { key: 0 })
                  : (Y(), Q('p', xs, Re(F(s)), 1))
              ],
              2
            ),
            a.$slots.default
              ? (Y(),
                Q(
                  'div',
                  { key: 0, class: V(F(n).e('bottom')) },
                  [Fe(a.$slots, 'default')],
                  2
                ))
              : Ce('v-if', !0)
          ],
          2
        )
      )
    }
  })
var Ls = qe(Ns, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue'
  ]
])
const qr = Zt(Ls)
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var As = /["'&<>]/,
  Ms = Os
function Os(e) {
  var t = '' + e,
    l = As.exec(t)
  if (!l) return t
  var n,
    s = '',
    i = 0,
    a = 0
  for (i = l.index; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        n = '&quot;'
        break
      case 38:
        n = '&amp;'
        break
      case 39:
        n = '&#39;'
        break
      case 60:
        n = '&lt;'
        break
      case 62:
        n = '&gt;'
        break
      default:
        continue
    }
    a !== i && (s += t.substring(a, i)), (a = i + 1), (s += n)
  }
  return a !== i ? s + t.substring(a, i) : s
}
const Ts = _o(Ms),
  Je = function (e) {
    var t
    return (t = e.target) == null ? void 0 : t.closest('td')
  },
  Fs = function (e, t, l, n, s) {
    if (!t && !n && (!s || (Array.isArray(s) && !s.length))) return e
    typeof l == 'string'
      ? (l = l === 'descending' ? -1 : 1)
      : (l = l && l < 0 ? -1 : 1)
    const i = n
        ? null
        : function (o, r) {
            return s
              ? (Array.isArray(s) || (s = [s]),
                s.map((u) => (typeof u == 'string' ? et(o, u) : u(o, r, e))))
              : (t !== '$key' && Rt(o) && '$value' in o && (o = o.$value),
                [Rt(o) ? et(o, t) : o])
          },
      a = function (o, r) {
        if (n) return n(o.value, r.value)
        for (let u = 0, c = o.key.length; u < c; u++) {
          if (o.key[u] < r.key[u]) return -1
          if (o.key[u] > r.key[u]) return 1
        }
        return 0
      }
    return e
      .map((o, r) => ({ value: o, index: r, key: i ? i(o, r) : null }))
      .sort((o, r) => {
        let u = a(o, r)
        return u || (u = o.index - r.index), u * +l
      })
      .map((o) => o.value)
  },
  El = function (e, t) {
    let l = null
    return (
      e.columns.forEach((n) => {
        n.id === t && (l = n)
      }),
      l
    )
  },
  ks = function (e, t) {
    let l = null
    for (let n = 0; n < e.columns.length; n++) {
      const s = e.columns[n]
      if (s.columnKey === t) {
        l = s
        break
      }
    }
    return l || An('ElTable', `No column matching with column-key: ${t}`), l
  },
  It = function (e, t, l) {
    const n = (t.className || '').match(new RegExp(`${l}-table_[^\\s]+`, 'gm'))
    return n ? El(e, n[0]) : null
  },
  J = (e, t) => {
    if (!e) throw new Error('Row is required when get row identity')
    if (typeof t == 'string') {
      if (!t.includes('.')) return `${e[t]}`
      const l = t.split('.')
      let n = e
      for (const s of l) n = n[s]
      return `${n}`
    } else if (typeof t == 'function') return t.call(null, e)
  },
  Le = function (e, t) {
    const l = {}
    return (
      (e || []).forEach((n, s) => {
        l[J(n, t)] = { row: n, index: s }
      }),
      l
    )
  }
function $s(e, t) {
  const l = {}
  let n
  for (n in e) l[n] = e[n]
  for (n in t)
    if (Ie(t, n)) {
      const s = t[n]
      typeof s < 'u' && (l[n] = s)
    }
  return l
}
function Ct(e) {
  return (
    e === '' ||
      (e !== void 0 &&
        ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))),
    e
  )
}
function xl(e) {
  return (
    e === '' || (e !== void 0 && ((e = Ct(e)), Number.isNaN(e) && (e = 80))), e
  )
}
function Ws(e) {
  return typeof e == 'number'
    ? e
    : typeof e == 'string'
    ? /^\d+(?:px)?$/.test(e)
      ? Number.parseInt(e, 10)
      : e
    : null
}
function Hs(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, l) =>
          (...n) =>
            t(l(...n))
      )
}
function Pe(e, t, l) {
  let n = !1
  const s = e.indexOf(t),
    i = s !== -1,
    a = (o) => {
      o === 'add' ? e.push(t) : e.splice(s, 1),
        (n = !0),
        fn(t.children) &&
          t.children.forEach((r) => {
            Pe(e, r, l ?? !i)
          })
    }
  return (
    Ut(l)
      ? l && !i
        ? a('add')
        : !l && i && a('remove')
      : a(i ? 'remove' : 'add'),
    n
  )
}
function Ps(e, t, l = 'children', n = 'hasChildren') {
  const s = (a) => !(Array.isArray(a) && a.length)
  function i(a, o, r) {
    t(a, o, r),
      o.forEach((u) => {
        if (u[n]) {
          t(u, null, r + 1)
          return
        }
        const c = u[l]
        s(c) || i(u, c, r + 1)
      })
  }
  e.forEach((a) => {
    if (a[n]) {
      t(a, null, 0)
      return
    }
    const o = a[l]
    s(o) || i(a, o, 0)
  })
}
let ye
function Bs(e, t, l, n, s) {
  s = vl({ enterable: !0, showArrow: !0 }, s)
  const i = e == null ? void 0 : e.dataset.prefix,
    a = e == null ? void 0 : e.querySelector(`.${i}-scrollbar__wrap`)
  function o() {
    const m = s.effect === 'light',
      x = document.createElement('div')
    return (
      (x.className = [
        `${i}-popper`,
        m ? 'is-light' : 'is-dark',
        s.popperClass || ''
      ].join(' ')),
      (l = Ts(l)),
      (x.innerHTML = l),
      (x.style.zIndex = String(n())),
      e == null || e.appendChild(x),
      x
    )
  }
  function r() {
    const m = document.createElement('div')
    return (m.className = `${i}-popper__arrow`), m
  }
  function u() {
    c && c.update()
  }
  ye == null || ye(),
    (ye = () => {
      try {
        c && c.destroy(),
          g && (e == null || e.removeChild(g)),
          t.removeEventListener('mouseenter', f),
          t.removeEventListener('mouseleave', h),
          a == null || a.removeEventListener('scroll', ye),
          (ye = void 0)
      } catch {}
    })
  let c = null,
    f = u,
    h = ye
  s.enterable &&
    ({ onOpen: f, onClose: h } = Tn({
      showAfter: s.showAfter,
      hideAfter: s.hideAfter,
      open: u,
      close: ye
    }))
  const g = o()
  ;(g.onmouseenter = f), (g.onmouseleave = h)
  const p = []
  if (
    (s.offset && p.push({ name: 'offset', options: { offset: [0, s.offset] } }),
    s.showArrow)
  ) {
    const m = g.appendChild(r())
    p.push({ name: 'arrow', options: { element: m, padding: 10 } })
  }
  const S = s.popperOptions || {}
  return (
    (c = Fn(t, g, {
      placement: s.placement || 'top',
      strategy: 'fixed',
      ...S,
      modifiers: S.modifiers ? p.concat(S.modifiers) : p
    })),
    t.addEventListener('mouseenter', f),
    t.addEventListener('mouseleave', h),
    a == null || a.addEventListener('scroll', ye),
    c
  )
}
function Rl(e) {
  return e.children ? Po(e.children, Rl) : [e]
}
function _t(e, t) {
  return e + t.colSpan
}
const Nl = (e, t, l, n) => {
    let s = 0,
      i = e
    const a = l.states.columns.value
    if (n) {
      const r = Rl(n[e])
      ;(s = a.slice(0, a.indexOf(r[0])).reduce(_t, 0)),
        (i = s + r.reduce(_t, 0) - 1)
    } else s = e
    let o
    switch (t) {
      case 'left':
        i < l.states.fixedLeafColumnsLength.value && (o = 'left')
        break
      case 'right':
        s >= a.length - l.states.rightFixedLeafColumnsLength.value &&
          (o = 'right')
        break
      default:
        i < l.states.fixedLeafColumnsLength.value
          ? (o = 'left')
          : s >= a.length - l.states.rightFixedLeafColumnsLength.value &&
            (o = 'right')
    }
    return o ? { direction: o, start: s, after: i } : {}
  },
  wt = (e, t, l, n, s, i = 0) => {
    const a = [],
      { direction: o, start: r, after: u } = Nl(t, l, n, s)
    if (o) {
      const c = o === 'left'
      a.push(`${e}-fixed-column--${o}`),
        c && u + i === n.states.fixedLeafColumnsLength.value - 1
          ? a.push('is-last-column')
          : !c &&
            r - i ===
              n.states.columns.value.length -
                n.states.rightFixedLeafColumnsLength.value &&
            a.push('is-first-column')
    }
    return a
  }
function Dt(e, t) {
  return (
    e +
    (t.realWidth === null || Number.isNaN(t.realWidth)
      ? Number(t.width)
      : t.realWidth)
  )
}
const St = (e, t, l, n) => {
    const { direction: s, start: i = 0, after: a = 0 } = Nl(e, t, l, n)
    if (!s) return
    const o = {},
      r = s === 'left',
      u = l.states.columns.value
    return (
      r
        ? (o.left = u.slice(0, i).reduce(Dt, 0))
        : (o.right = u
            .slice(a + 1)
            .reverse()
            .reduce(Dt, 0)),
      o
    )
  },
  $e = (e, t) => {
    e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`))
  }
function Is(e) {
  const t = le(),
    l = R(!1),
    n = R([])
  return {
    updateExpandRows: () => {
      const r = e.data.value || [],
        u = e.rowKey.value
      if (l.value) n.value = r.slice()
      else if (u) {
        const c = Le(n.value, u)
        n.value = r.reduce((f, h) => {
          const g = J(h, u)
          return c[g] && f.push(h), f
        }, [])
      } else n.value = []
    },
    toggleRowExpansion: (r, u) => {
      Pe(n.value, r, u) && t.emit('expand-change', r, n.value.slice())
    },
    setExpandRowKeys: (r) => {
      t.store.assertRowKey()
      const u = e.data.value || [],
        c = e.rowKey.value,
        f = Le(u, c)
      n.value = r.reduce((h, g) => {
        const p = f[g]
        return p && h.push(p.row), h
      }, [])
    },
    isRowExpanded: (r) => {
      const u = e.rowKey.value
      return u ? !!Le(n.value, u)[J(r, u)] : n.value.includes(r)
    },
    states: { expandRows: n, defaultExpandAll: l }
  }
}
function _s(e) {
  const t = le(),
    l = R(null),
    n = R(null),
    s = (u) => {
      t.store.assertRowKey(), (l.value = u), a(u)
    },
    i = () => {
      l.value = null
    },
    a = (u) => {
      const { data: c, rowKey: f } = e
      let h = null
      f.value && (h = (F(c) || []).find((g) => J(g, f.value) === u)),
        (n.value = h),
        t.emit('current-change', n.value, null)
    }
  return {
    setCurrentRowKey: s,
    restoreCurrentRowKey: i,
    setCurrentRowByKey: a,
    updateCurrentRow: (u) => {
      const c = n.value
      if (u && u !== c) {
        ;(n.value = u), t.emit('current-change', n.value, c)
        return
      }
      !u && c && ((n.value = null), t.emit('current-change', null, c))
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value,
        c = e.data.value || [],
        f = n.value
      if (!c.includes(f) && f) {
        if (u) {
          const h = J(f, u)
          a(h)
        } else n.value = null
        n.value === null && t.emit('current-change', null, f)
      } else l.value && (a(l.value), i())
    },
    states: { _currentRowKey: l, currentRow: n }
  }
}
function Ds(e) {
  const t = R([]),
    l = R({}),
    n = R(16),
    s = R(!1),
    i = R({}),
    a = R('hasChildren'),
    o = R('children'),
    r = le(),
    u = I(() => {
      if (!e.rowKey.value) return {}
      const x = e.data.value || []
      return f(x)
    }),
    c = I(() => {
      const x = e.rowKey.value,
        v = Object.keys(i.value),
        E = {}
      return (
        v.length &&
          v.forEach((d) => {
            if (i.value[d].length) {
              const C = { children: [] }
              i.value[d].forEach((w) => {
                const y = J(w, x)
                C.children.push(y),
                  w[a.value] && !E[y] && (E[y] = { children: [] })
              }),
                (E[d] = C)
            }
          }),
        E
      )
    }),
    f = (x) => {
      const v = e.rowKey.value,
        E = {}
      return (
        Ps(
          x,
          (d, C, w) => {
            const y = J(d, v)
            Array.isArray(C)
              ? (E[y] = { children: C.map((N) => J(N, v)), level: w })
              : s.value && (E[y] = { children: [], lazy: !0, level: w })
          },
          o.value,
          a.value
        ),
        E
      )
    },
    h = (
      x = !1,
      v = ((E) =>
        (E = r.store) == null ? void 0 : E.states.defaultExpandAll.value)()
    ) => {
      var E
      const d = u.value,
        C = c.value,
        w = Object.keys(d),
        y = {}
      if (w.length) {
        const N = F(l),
          M = [],
          K = (O, D) => {
            if (x)
              return t.value
                ? v || t.value.includes(D)
                : !!(v || (O != null && O.expanded))
            {
              const k = v || (t.value && t.value.includes(D))
              return !!((O != null && O.expanded) || k)
            }
          }
        w.forEach((O) => {
          const D = N[O],
            k = { ...d[O] }
          if (((k.expanded = K(D, O)), k.lazy)) {
            const { loaded: j = !1, loading: X = !1 } = D || {}
            ;(k.loaded = !!j), (k.loading = !!X), M.push(O)
          }
          y[O] = k
        })
        const B = Object.keys(C)
        s.value &&
          B.length &&
          M.length &&
          B.forEach((O) => {
            const D = N[O],
              k = C[O].children
            if (M.includes(O)) {
              if (y[O].children.length !== 0)
                throw new Error('[ElTable]children must be an empty array.')
              y[O].children = k
            } else {
              const { loaded: j = !1, loading: X = !1 } = D || {}
              y[O] = {
                lazy: !0,
                loaded: !!j,
                loading: !!X,
                expanded: K(D, O),
                children: k,
                level: ''
              }
            }
          })
      }
      ;(l.value = y), (E = r.store) == null || E.updateTableScrollY()
    }
  re(
    () => t.value,
    () => {
      h(!0)
    }
  ),
    re(
      () => u.value,
      () => {
        h()
      }
    ),
    re(
      () => c.value,
      () => {
        h()
      }
    )
  const g = (x) => {
      ;(t.value = x), h()
    },
    p = (x, v) => {
      r.store.assertRowKey()
      const E = e.rowKey.value,
        d = J(x, E),
        C = d && l.value[d]
      if (d && C && 'expanded' in C) {
        const w = C.expanded
        ;(v = typeof v > 'u' ? !C.expanded : v),
          (l.value[d].expanded = v),
          w !== v && r.emit('expand-change', x, v),
          r.store.updateTableScrollY()
      }
    },
    S = (x) => {
      r.store.assertRowKey()
      const v = e.rowKey.value,
        E = J(x, v),
        d = l.value[E]
      s.value && d && 'loaded' in d && !d.loaded ? m(x, E, d) : p(x, void 0)
    },
    m = (x, v, E) => {
      const { load: d } = r.props
      d &&
        !l.value[v].loaded &&
        ((l.value[v].loading = !0),
        d(x, E, (C) => {
          if (!Array.isArray(C))
            throw new TypeError('[ElTable] data must be an array')
          ;(l.value[v].loading = !1),
            (l.value[v].loaded = !0),
            (l.value[v].expanded = !0),
            C.length && (i.value[v] = C),
            r.emit('expand-change', x, !0)
        }))
    }
  return {
    loadData: m,
    loadOrToggle: S,
    toggleTreeExpansion: p,
    updateTreeExpandKeys: g,
    updateTreeData: h,
    normalize: f,
    states: {
      expandRowKeys: t,
      treeData: l,
      indent: n,
      lazy: s,
      lazyTreeNodeMap: i,
      lazyColumnIdentifier: a,
      childrenColumnName: o
    }
  }
}
const Ks = (e, t) => {
    const l = t.sortingColumn
    return !l || typeof l.sortable == 'string'
      ? e
      : Fs(e, t.sortProp, t.sortOrder, l.sortMethod, l.sortBy)
  },
  Ge = (e) => {
    const t = []
    return (
      e.forEach((l) => {
        l.children && l.children.length > 0
          ? t.push.apply(t, Ge(l.children))
          : t.push(l)
      }),
      t
    )
  }
function zs() {
  var e
  const t = le(),
    { size: l } = hn((e = t.proxy) == null ? void 0 : e.$props),
    n = R(null),
    s = R([]),
    i = R([]),
    a = R(!1),
    o = R([]),
    r = R([]),
    u = R([]),
    c = R([]),
    f = R([]),
    h = R([]),
    g = R([]),
    p = R([]),
    S = [],
    m = R(0),
    x = R(0),
    v = R(0),
    E = R(!1),
    d = R([]),
    C = R(!1),
    w = R(!1),
    y = R(null),
    N = R({}),
    M = R(null),
    K = R(null),
    B = R(null),
    O = R(null),
    D = R(null)
  re(s, () => t.state && ie(!1), { deep: !0 })
  const k = () => {
      if (!n.value) throw new Error('[ElTable] prop row-key is required')
    },
    j = (A) => {
      var T
      ;(T = A.children) == null ||
        T.forEach((P) => {
          ;(P.fixed = A.fixed), j(P)
        })
    },
    X = () => {
      o.value.forEach((z) => {
        j(z)
      }),
        (c.value = o.value.filter((z) => z.fixed === !0 || z.fixed === 'left')),
        (f.value = o.value.filter((z) => z.fixed === 'right')),
        c.value.length > 0 &&
          o.value[0] &&
          o.value[0].type === 'selection' &&
          !o.value[0].fixed &&
          ((o.value[0].fixed = !0), c.value.unshift(o.value[0]))
      const A = o.value.filter((z) => !z.fixed)
      r.value = [].concat(c.value).concat(A).concat(f.value)
      const T = Ge(A),
        P = Ge(c.value),
        W = Ge(f.value)
      ;(m.value = T.length),
        (x.value = P.length),
        (v.value = W.length),
        (u.value = [].concat(P).concat(T).concat(W)),
        (a.value = c.value.length > 0 || f.value.length > 0)
    },
    ie = (A, T = !1) => {
      A && X(), T ? t.state.doLayout() : t.state.debouncedUpdateLayout()
    },
    Z = (A) => d.value.includes(A),
    b = () => {
      ;(E.value = !1),
        d.value.length && ((d.value = []), t.emit('selection-change', []))
    },
    L = () => {
      let A
      if (n.value) {
        A = []
        const T = Le(d.value, n.value),
          P = Le(s.value, n.value)
        for (const W in T) Ie(T, W) && !P[W] && A.push(T[W].row)
      } else A = d.value.filter((T) => !s.value.includes(T))
      if (A.length) {
        const T = d.value.filter((P) => !A.includes(P))
        ;(d.value = T), t.emit('selection-change', T.slice())
      }
    },
    _ = () => (d.value || []).slice(),
    G = (A, T = void 0, P = !0) => {
      if (Pe(d.value, A, T)) {
        const z = (d.value || []).slice()
        P && t.emit('select', z, A), t.emit('selection-change', z)
      }
    },
    U = () => {
      var A, T
      const P = w.value ? !E.value : !(E.value || d.value.length)
      E.value = P
      let W = !1,
        z = 0
      const ee =
        (T = (A = t == null ? void 0 : t.store) == null ? void 0 : A.states) ==
        null
          ? void 0
          : T.rowKey.value
      s.value.forEach((ce, Oe) => {
        const ge = Oe + z
        y.value
          ? y.value.call(null, ce, ge) && Pe(d.value, ce, P) && (W = !0)
          : Pe(d.value, ce, P) && (W = !0),
          (z += te(J(ce, ee)))
      }),
        W && t.emit('selection-change', d.value ? d.value.slice() : []),
        t.emit('select-all', d.value)
    },
    q = () => {
      const A = Le(d.value, n.value)
      s.value.forEach((T) => {
        const P = J(T, n.value),
          W = A[P]
        W && (d.value[W.index] = T)
      })
    },
    se = () => {
      var A, T, P
      if (((A = s.value) == null ? void 0 : A.length) === 0) {
        E.value = !1
        return
      }
      let W
      n.value && (W = Le(d.value, n.value))
      const z = function (ge) {
        return W ? !!W[J(ge, n.value)] : d.value.includes(ge)
      }
      let ee = !0,
        ce = 0,
        Oe = 0
      for (let ge = 0, ql = (s.value || []).length; ge < ql; ge++) {
        const Xl =
            (P =
              (T = t == null ? void 0 : t.store) == null ? void 0 : T.states) ==
            null
              ? void 0
              : P.rowKey.value,
          Zl = ge + Oe,
          Ze = s.value[ge],
          Ql = y.value && y.value.call(null, Ze, Zl)
        if (z(Ze)) ce++
        else if (!y.value || Ql) {
          ee = !1
          break
        }
        Oe += te(J(Ze, Xl))
      }
      ce === 0 && (ee = !1), (E.value = ee)
    },
    te = (A) => {
      var T
      if (!t || !t.store) return 0
      const { treeData: P } = t.store.states
      let W = 0
      const z = (T = P.value[A]) == null ? void 0 : T.children
      return (
        z &&
          ((W += z.length),
          z.forEach((ee) => {
            W += te(ee)
          })),
        W
      )
    },
    me = (A, T) => {
      Array.isArray(A) || (A = [A])
      const P = {}
      return (
        A.forEach((W) => {
          ;(N.value[W.id] = T), (P[W.columnKey || W.id] = T)
        }),
        P
      )
    },
    ne = (A, T, P) => {
      K.value && K.value !== A && (K.value.order = null),
        (K.value = A),
        (B.value = T),
        (O.value = P)
    },
    ue = () => {
      let A = F(i)
      Object.keys(N.value).forEach((T) => {
        const P = N.value[T]
        if (!P || P.length === 0) return
        const W = El({ columns: u.value }, T)
        W &&
          W.filterMethod &&
          (A = A.filter((z) =>
            P.some((ee) => W.filterMethod.call(null, ee, z, W))
          ))
      }),
        (M.value = A)
    },
    fe = () => {
      s.value = Ks(M.value, {
        sortingColumn: K.value,
        sortProp: B.value,
        sortOrder: O.value
      })
    },
    kl = (A = void 0) => {
      ;(A && A.filter) || ue(), fe()
    },
    $l = (A) => {
      const { tableHeaderRef: T } = t.refs
      if (!T) return
      const P = Object.assign({}, T.filterPanels),
        W = Object.keys(P)
      if (W.length)
        if ((typeof A == 'string' && (A = [A]), Array.isArray(A))) {
          const z = A.map((ee) => ks({ columns: u.value }, ee))
          W.forEach((ee) => {
            const ce = z.find((Oe) => Oe.id === ee)
            ce && (ce.filteredValue = [])
          }),
            t.store.commit('filterChange', {
              column: z,
              values: [],
              silent: !0,
              multi: !0
            })
        } else
          W.forEach((z) => {
            const ee = u.value.find((ce) => ce.id === z)
            ee && (ee.filteredValue = [])
          }),
            (N.value = {}),
            t.store.commit('filterChange', {
              column: {},
              values: [],
              silent: !0
            })
    },
    Wl = () => {
      K.value &&
        (ne(null, null, null),
        t.store.commit('changeSortCondition', { silent: !0 }))
    },
    {
      setExpandRowKeys: Hl,
      toggleRowExpansion: Et,
      updateExpandRows: Pl,
      states: Bl,
      isRowExpanded: Il
    } = Is({ data: s, rowKey: n }),
    {
      updateTreeExpandKeys: _l,
      toggleTreeExpansion: Dl,
      updateTreeData: Kl,
      loadOrToggle: zl,
      states: Vl
    } = Ds({ data: s, rowKey: n }),
    {
      updateCurrentRowData: jl,
      updateCurrentRow: Gl,
      setCurrentRowKey: Yl,
      states: Ul
    } = _s({ data: s, rowKey: n })
  return {
    assertRowKey: k,
    updateColumns: X,
    scheduleLayout: ie,
    isSelected: Z,
    clearSelection: b,
    cleanSelection: L,
    getSelectionRows: _,
    toggleRowSelection: G,
    _toggleAllSelection: U,
    toggleAllSelection: null,
    updateSelectionByRowKey: q,
    updateAllSelected: se,
    updateFilters: me,
    updateCurrentRow: Gl,
    updateSort: ne,
    execFilter: ue,
    execSort: fe,
    execQuery: kl,
    clearFilter: $l,
    clearSort: Wl,
    toggleRowExpansion: Et,
    setExpandRowKeysAdapter: (A) => {
      Hl(A), _l(A)
    },
    setCurrentRowKey: Yl,
    toggleRowExpansionAdapter: (A, T) => {
      u.value.some(({ type: W }) => W === 'expand') ? Et(A, T) : Dl(A, T)
    },
    isRowExpanded: Il,
    updateExpandRows: Pl,
    updateCurrentRowData: jl,
    loadOrToggle: zl,
    updateTreeData: Kl,
    states: {
      tableSize: l,
      rowKey: n,
      data: s,
      _data: i,
      isComplex: a,
      _columns: o,
      originColumns: r,
      columns: u,
      fixedColumns: c,
      rightFixedColumns: f,
      leafColumns: h,
      fixedLeafColumns: g,
      rightFixedLeafColumns: p,
      updateOrderFns: S,
      leafColumnsLength: m,
      fixedLeafColumnsLength: x,
      rightFixedLeafColumnsLength: v,
      isAllSelected: E,
      selection: d,
      reserveSelection: C,
      selectOnIndeterminate: w,
      selectable: y,
      filters: N,
      filteredData: M,
      sortingColumn: K,
      sortProp: B,
      sortOrder: O,
      hoverRow: D,
      ...Bl,
      ...Vl,
      ...Ul
    }
  }
}
function pt(e, t) {
  return e.map((l) => {
    var n
    return l.id === t.id
      ? t
      : ((n = l.children) != null &&
          n.length &&
          (l.children = pt(l.children, t)),
        l)
  })
}
function vt(e) {
  e.forEach((t) => {
    var l, n
    ;(t.no = (l = t.getColumnIndex) == null ? void 0 : l.call(t)),
      (n = t.children) != null && n.length && vt(t.children)
  }),
    e.sort((t, l) => t.no - l.no)
}
function Vs() {
  const e = le(),
    t = zs()
  return {
    ns: ae('table'),
    ...t,
    mutations: {
      setData(a, o) {
        const r = F(a._data) !== o
        ;(a.data.value = o),
          (a._data.value = o),
          e.store.execQuery(),
          e.store.updateCurrentRowData(),
          e.store.updateExpandRows(),
          e.store.updateTreeData(e.store.states.defaultExpandAll.value),
          F(a.reserveSelection)
            ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
            : r
            ? e.store.clearSelection()
            : e.store.cleanSelection(),
          e.store.updateAllSelected(),
          e.$ready && e.store.scheduleLayout()
      },
      insertColumn(a, o, r, u) {
        const c = F(a._columns)
        let f = []
        r
          ? (r && !r.children && (r.children = []),
            r.children.push(o),
            (f = pt(c, r)))
          : (c.push(o), (f = c)),
          vt(f),
          (a._columns.value = f),
          a.updateOrderFns.push(u),
          o.type === 'selection' &&
            ((a.selectable.value = o.selectable),
            (a.reserveSelection.value = o.reserveSelection)),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      updateColumnOrder(a, o) {
        var r
        ;((r = o.getColumnIndex) == null ? void 0 : r.call(o)) !== o.no &&
          (vt(a._columns.value), e.$ready && e.store.updateColumns())
      },
      removeColumn(a, o, r, u) {
        const c = F(a._columns) || []
        if (r)
          r.children.splice(
            r.children.findIndex((h) => h.id === o.id),
            1
          ),
            Me(() => {
              var h
              ;((h = r.children) == null ? void 0 : h.length) === 0 &&
                delete r.children
            }),
            (a._columns.value = pt(c, r))
        else {
          const h = c.indexOf(o)
          h > -1 && (c.splice(h, 1), (a._columns.value = c))
        }
        const f = a.updateOrderFns.indexOf(u)
        f > -1 && a.updateOrderFns.splice(f, 1),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      sort(a, o) {
        const { prop: r, order: u, init: c } = o
        if (r) {
          const f = F(a.columns).find((h) => h.property === r)
          f &&
            ((f.order = u),
            e.store.updateSort(f, r, u),
            e.store.commit('changeSortCondition', { init: c }))
        }
      },
      changeSortCondition(a, o) {
        const { sortingColumn: r, sortProp: u, sortOrder: c } = a,
          f = F(r),
          h = F(u),
          g = F(c)
        g === null &&
          ((a.sortingColumn.value = null), (a.sortProp.value = null))
        const p = { filter: !0 }
        e.store.execQuery(p),
          (!o || !(o.silent || o.init)) &&
            e.emit('sort-change', { column: f, prop: h, order: g }),
          e.store.updateTableScrollY()
      },
      filterChange(a, o) {
        const { column: r, values: u, silent: c } = o,
          f = e.store.updateFilters(r, u)
        e.store.execQuery(),
          c || e.emit('filter-change', f),
          e.store.updateTableScrollY()
      },
      toggleAllSelection() {
        e.store.toggleAllSelection()
      },
      rowSelectedChanged(a, o) {
        e.store.toggleRowSelection(o), e.store.updateAllSelected()
      },
      setHoverRow(a, o) {
        a.hoverRow.value = o
      },
      setCurrentRow(a, o) {
        e.store.updateCurrentRow(o)
      }
    },
    commit: function (a, ...o) {
      const r = e.store.mutations
      if (r[a]) r[a].apply(e, [e.store.states].concat(o))
      else throw new Error(`Action not found: ${a}`)
    },
    updateTableScrollY: function () {
      Me(() => e.layout.updateScrollY.apply(e.layout))
    }
  }
}
const Be = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  data: 'data',
  'treeProps.hasChildren': {
    key: 'lazyColumnIdentifier',
    default: 'hasChildren'
  },
  'treeProps.children': { key: 'childrenColumnName', default: 'children' }
}
function js(e, t) {
  if (!e) throw new Error('Table is required.')
  const l = Vs()
  return (
    (l.toggleAllSelection = Ue(l._toggleAllSelection, 10)),
    Object.keys(Be).forEach((n) => {
      Ll(Al(t, n), n, l)
    }),
    Gs(l, t),
    l
  )
}
function Gs(e, t) {
  Object.keys(Be).forEach((l) => {
    re(
      () => Al(t, l),
      (n) => {
        Ll(n, l, e)
      }
    )
  })
}
function Ll(e, t, l) {
  let n = e,
    s = Be[t]
  typeof Be[t] == 'object' && ((s = s.key), (n = n || Be[t].default)),
    (l.states[s].value = n)
}
function Al(e, t) {
  if (t.includes('.')) {
    const l = t.split('.')
    let n = e
    return (
      l.forEach((s) => {
        n = n[s]
      }),
      n
    )
  } else return e[t]
}
class Ys {
  constructor(t) {
    ;(this.observers = []),
      (this.table = null),
      (this.store = null),
      (this.columns = []),
      (this.fit = !0),
      (this.showHeader = !0),
      (this.height = R(null)),
      (this.scrollX = R(!1)),
      (this.scrollY = R(!1)),
      (this.bodyWidth = R(null)),
      (this.fixedWidth = R(null)),
      (this.rightFixedWidth = R(null)),
      (this.gutterWidth = 0)
    for (const l in t)
      Ie(t, l) && (pn(this[l]) ? (this[l].value = t[l]) : (this[l] = t[l]))
    if (!this.table) throw new Error('Table is required for Table Layout')
    if (!this.store) throw new Error('Store is required for Table Layout')
  }
  updateScrollY() {
    if (this.height.value === null) return !1
    const l = this.table.refs.scrollBarRef
    if (this.table.vnode.el && l != null && l.wrapRef) {
      let n = !0
      const s = this.scrollY.value
      return (
        (n = l.wrapRef.scrollHeight > l.wrapRef.clientHeight),
        (this.scrollY.value = n),
        s !== n
      )
    }
    return !1
  }
  setHeight(t, l = 'height') {
    if (!Se) return
    const n = this.table.vnode.el
    if (((t = Ws(t)), (this.height.value = Number(t)), !n && (t || t === 0)))
      return Me(() => this.setHeight(t, l))
    typeof t == 'number'
      ? ((n.style[l] = `${t}px`), this.updateElsHeight())
      : typeof t == 'string' && ((n.style[l] = t), this.updateElsHeight())
  }
  setMaxHeight(t) {
    this.setHeight(t, 'max-height')
  }
  getFlattenColumns() {
    const t = []
    return (
      this.table.store.states.columns.value.forEach((n) => {
        n.isColumnGroup ? t.push.apply(t, n.columns) : t.push(n)
      }),
      t
    )
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers('scrollable')
  }
  headerDisplayNone(t) {
    if (!t) return !0
    let l = t
    for (; l.tagName !== 'DIV'; ) {
      if (getComputedStyle(l).display === 'none') return !0
      l = l.parentElement
    }
    return !1
  }
  updateColumnsWidth() {
    if (!Se) return
    const t = this.fit,
      l = this.table.vnode.el.clientWidth
    let n = 0
    const s = this.getFlattenColumns(),
      i = s.filter((r) => typeof r.width != 'number')
    if (
      (s.forEach((r) => {
        typeof r.width == 'number' && r.realWidth && (r.realWidth = null)
      }),
      i.length > 0 && t)
    ) {
      if (
        (s.forEach((r) => {
          n += Number(r.width || r.minWidth || 80)
        }),
        n <= l)
      ) {
        this.scrollX.value = !1
        const r = l - n
        if (i.length === 1) i[0].realWidth = Number(i[0].minWidth || 80) + r
        else {
          const u = i.reduce((h, g) => h + Number(g.minWidth || 80), 0),
            c = r / u
          let f = 0
          i.forEach((h, g) => {
            if (g === 0) return
            const p = Math.floor(Number(h.minWidth || 80) * c)
            ;(f += p), (h.realWidth = Number(h.minWidth || 80) + p)
          }),
            (i[0].realWidth = Number(i[0].minWidth || 80) + r - f)
        }
      } else
        (this.scrollX.value = !0),
          i.forEach((r) => {
            r.realWidth = Number(r.minWidth)
          })
      ;(this.bodyWidth.value = Math.max(n, l)),
        (this.table.state.resizeState.value.width = this.bodyWidth.value)
    } else
      s.forEach((r) => {
        !r.width && !r.minWidth
          ? (r.realWidth = 80)
          : (r.realWidth = Number(r.width || r.minWidth)),
          (n += r.realWidth)
      }),
        (this.scrollX.value = n > l),
        (this.bodyWidth.value = n)
    const a = this.store.states.fixedColumns.value
    if (a.length > 0) {
      let r = 0
      a.forEach((u) => {
        r += Number(u.realWidth || u.width)
      }),
        (this.fixedWidth.value = r)
    }
    const o = this.store.states.rightFixedColumns.value
    if (o.length > 0) {
      let r = 0
      o.forEach((u) => {
        r += Number(u.realWidth || u.width)
      }),
        (this.rightFixedWidth.value = r)
    }
    this.notifyObservers('columns')
  }
  addObserver(t) {
    this.observers.push(t)
  }
  removeObserver(t) {
    const l = this.observers.indexOf(t)
    l !== -1 && this.observers.splice(l, 1)
  }
  notifyObservers(t) {
    this.observers.forEach((n) => {
      var s, i
      switch (t) {
        case 'columns':
          ;(s = n.state) == null || s.onColumnsChange(this)
          break
        case 'scrollable':
          ;(i = n.state) == null || i.onScrollableChange(this)
          break
        default:
          throw new Error(`Table Layout don't have event ${t}.`)
      }
    })
  }
}
const { CheckboxGroup: Us } = ke,
  qs = pe({
    name: 'ElTableFilterPanel',
    components: {
      ElCheckbox: ke,
      ElCheckboxGroup: Us,
      ElScrollbar: ol,
      ElTooltip: kn,
      ElIcon: yt,
      ArrowDown: vn,
      ArrowUp: mn
    },
    directives: { ClickOutside: Do },
    props: {
      placement: { type: String, default: 'bottom-start' },
      store: { type: Object },
      column: { type: Object },
      upDataColumn: { type: Function }
    },
    setup(e) {
      const t = le(),
        { t: l } = gt(),
        n = ae('table-filter'),
        s = t == null ? void 0 : t.parent
      s.filterPanels.value[e.column.id] ||
        (s.filterPanels.value[e.column.id] = t)
      const i = R(!1),
        a = R(null),
        o = I(() => e.column && e.column.filters),
        r = I({
          get: () => {
            var d
            return (((d = e.column) == null ? void 0 : d.filteredValue) ||
              [])[0]
          },
          set: (d) => {
            u.value &&
              (typeof d < 'u' && d !== null
                ? u.value.splice(0, 1, d)
                : u.value.splice(0, 1))
          }
        }),
        u = I({
          get() {
            return e.column ? e.column.filteredValue || [] : []
          },
          set(d) {
            e.column && e.upDataColumn('filteredValue', d)
          }
        }),
        c = I(() => (e.column ? e.column.filterMultiple : !0)),
        f = (d) => d.value === r.value,
        h = () => {
          i.value = !1
        },
        g = (d) => {
          d.stopPropagation(), (i.value = !i.value)
        },
        p = () => {
          i.value = !1
        },
        S = () => {
          v(u.value), h()
        },
        m = () => {
          ;(u.value = []), v(u.value), h()
        },
        x = (d) => {
          ;(r.value = d), v(typeof d < 'u' && d !== null ? u.value : []), h()
        },
        v = (d) => {
          e.store.commit('filterChange', { column: e.column, values: d }),
            e.store.updateAllSelected()
        }
      re(
        i,
        (d) => {
          e.column && e.upDataColumn('filterOpened', d)
        },
        { immediate: !0 }
      )
      const E = I(() => {
        var d, C
        return (C = (d = a.value) == null ? void 0 : d.popperRef) == null
          ? void 0
          : C.contentRef
      })
      return {
        tooltipVisible: i,
        multiple: c,
        filteredValue: u,
        filterValue: r,
        filters: o,
        handleConfirm: S,
        handleReset: m,
        handleSelect: x,
        isActive: f,
        t: l,
        ns: n,
        showFilterPanel: g,
        hideFilterPanel: p,
        popperPaneRef: E,
        tooltip: a
      }
    }
  }),
  Xs = { key: 0 },
  Zs = ['disabled'],
  Qs = ['label', 'onClick']
function Js(e, t, l, n, s, i) {
  const a = de('el-checkbox'),
    o = de('el-checkbox-group'),
    r = de('el-scrollbar'),
    u = de('arrow-up'),
    c = de('arrow-down'),
    f = de('el-icon'),
    h = de('el-tooltip'),
    g = Qt('click-outside')
  return (
    Y(),
    Te(
      h,
      {
        ref: 'tooltip',
        visible: e.tooltipVisible,
        offset: 0,
        placement: e.placement,
        'show-arrow': !1,
        'stop-popper-mouse-event': !1,
        teleported: '',
        effect: 'light',
        pure: '',
        'popper-class': e.ns.b(),
        persistent: ''
      },
      {
        content: xe(() => [
          e.multiple
            ? (Y(),
              Q('div', Xs, [
                $(
                  'div',
                  { class: V(e.ns.e('content')) },
                  [
                    he(
                      r,
                      { 'wrap-class': e.ns.e('wrap') },
                      {
                        default: xe(() => [
                          he(
                            o,
                            {
                              modelValue: e.filteredValue,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (p) => (e.filteredValue = p)),
                              class: V(e.ns.e('checkbox-group'))
                            },
                            {
                              default: xe(() => [
                                (Y(!0),
                                Q(
                                  tt,
                                  null,
                                  Nt(
                                    e.filters,
                                    (p) => (
                                      Y(),
                                      Te(
                                        a,
                                        { key: p.value, label: p.value },
                                        {
                                          default: xe(() => [
                                            Jt(Re(p.text), 1)
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['label']
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 1
                            },
                            8,
                            ['modelValue', 'class']
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['wrap-class']
                    )
                  ],
                  2
                ),
                $(
                  'div',
                  { class: V(e.ns.e('bottom')) },
                  [
                    $(
                      'button',
                      {
                        class: V({
                          [e.ns.is('disabled')]: e.filteredValue.length === 0
                        }),
                        disabled: e.filteredValue.length === 0,
                        type: 'button',
                        onClick:
                          t[1] ||
                          (t[1] = (...p) =>
                            e.handleConfirm && e.handleConfirm(...p))
                      },
                      Re(e.t('el.table.confirmFilter')),
                      11,
                      Zs
                    ),
                    $(
                      'button',
                      {
                        type: 'button',
                        onClick:
                          t[2] ||
                          (t[2] = (...p) =>
                            e.handleReset && e.handleReset(...p))
                      },
                      Re(e.t('el.table.resetFilter')),
                      1
                    )
                  ],
                  2
                )
              ]))
            : (Y(),
              Q(
                'ul',
                { key: 1, class: V(e.ns.e('list')) },
                [
                  $(
                    'li',
                    {
                      class: V([
                        e.ns.e('list-item'),
                        {
                          [e.ns.is('active')]:
                            e.filterValue === void 0 || e.filterValue === null
                        }
                      ]),
                      onClick: t[3] || (t[3] = (p) => e.handleSelect(null))
                    },
                    Re(e.t('el.table.clearFilter')),
                    3
                  ),
                  (Y(!0),
                  Q(
                    tt,
                    null,
                    Nt(
                      e.filters,
                      (p) => (
                        Y(),
                        Q(
                          'li',
                          {
                            key: p.value,
                            class: V([
                              e.ns.e('list-item'),
                              e.ns.is('active', e.isActive(p))
                            ]),
                            label: p.value,
                            onClick: (S) => e.handleSelect(p.value)
                          },
                          Re(p.text),
                          11,
                          Qs
                        )
                      )
                    ),
                    128
                  ))
                ],
                2
              ))
        ]),
        default: xe(() => [
          De(
            (Y(),
            Q(
              'span',
              {
                class: V([
                  `${e.ns.namespace.value}-table__column-filter-trigger`,
                  `${e.ns.namespace.value}-none-outline`
                ]),
                onClick:
                  t[4] ||
                  (t[4] = (...p) =>
                    e.showFilterPanel && e.showFilterPanel(...p))
              },
              [
                he(f, null, {
                  default: xe(() => [
                    e.column.filterOpened
                      ? (Y(), Te(u, { key: 0 }))
                      : (Y(), Te(c, { key: 1 }))
                  ]),
                  _: 1
                })
              ],
              2
            )),
            [[g, e.hideFilterPanel, e.popperPaneRef]]
          )
        ]),
        _: 1
      },
      8,
      ['visible', 'placement', 'popper-class']
    )
  )
}
var er = qe(qs, [
  ['render', Js],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue'
  ]
])
function Ml(e) {
  const t = le()
  el(() => {
    l.value.addObserver(t)
  }),
    We(() => {
      n(l.value), s(l.value)
    }),
    gn(() => {
      n(l.value), s(l.value)
    }),
    bt(() => {
      l.value.removeObserver(t)
    })
  const l = I(() => {
      const i = e.layout
      if (!i) throw new Error('Can not find table layout.')
      return i
    }),
    n = (i) => {
      var a
      const o =
        ((a = e.vnode.el) == null
          ? void 0
          : a.querySelectorAll('colgroup > col')) || []
      if (!o.length) return
      const r = i.getFlattenColumns(),
        u = {}
      r.forEach((c) => {
        u[c.id] = c
      })
      for (let c = 0, f = o.length; c < f; c++) {
        const h = o[c],
          g = h.getAttribute('name'),
          p = u[g]
        p && h.setAttribute('width', p.realWidth || p.width)
      }
    },
    s = (i) => {
      var a, o
      const r =
        ((a = e.vnode.el) == null
          ? void 0
          : a.querySelectorAll('colgroup > col[name=gutter]')) || []
      for (let c = 0, f = r.length; c < f; c++)
        r[c].setAttribute('width', i.scrollY.value ? i.gutterWidth : '0')
      const u =
        ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll('th.gutter')) ||
        []
      for (let c = 0, f = u.length; c < f; c++) {
        const h = u[c]
        ;(h.style.width = i.scrollY.value ? `${i.gutterWidth}px` : '0'),
          (h.style.display = i.scrollY.value ? '' : 'none')
      }
    }
  return { tableLayout: l.value, onColumnsChange: n, onScrollableChange: s }
}
const ve = Symbol('ElTable')
function tr(e, t) {
  const l = le(),
    n = be(ve),
    s = (S) => {
      S.stopPropagation()
    },
    i = (S, m) => {
      !m.filters && m.sortable
        ? p(S, m, !1)
        : m.filterable && !m.sortable && s(S),
        n == null || n.emit('header-click', m, S)
    },
    a = (S, m) => {
      n == null || n.emit('header-contextmenu', m, S)
    },
    o = R(null),
    r = R(!1),
    u = R({}),
    c = (S, m) => {
      if (Se && !(m.children && m.children.length > 0) && o.value && e.border) {
        r.value = !0
        const x = n
        t('set-drag-visible', !0)
        const E = (x == null ? void 0 : x.vnode.el).getBoundingClientRect()
            .left,
          d = l.vnode.el.querySelector(`th.${m.id}`),
          C = d.getBoundingClientRect(),
          w = C.left - E + 30
        tl(d, 'noclick'),
          (u.value = {
            startMouseLeft: S.clientX,
            startLeft: C.right - E,
            startColumnLeft: C.left - E,
            tableLeft: E
          })
        const y = x == null ? void 0 : x.refs.resizeProxy
        ;(y.style.left = `${u.value.startLeft}px`),
          (document.onselectstart = function () {
            return !1
          }),
          (document.ondragstart = function () {
            return !1
          })
        const N = (K) => {
            const B = K.clientX - u.value.startMouseLeft,
              O = u.value.startLeft + B
            y.style.left = `${Math.max(w, O)}px`
          },
          M = () => {
            if (r.value) {
              const { startColumnLeft: K, startLeft: B } = u.value,
                D = Number.parseInt(y.style.left, 10) - K
              ;(m.width = m.realWidth = D),
                x == null || x.emit('header-dragend', m.width, B - K, m, S),
                requestAnimationFrame(() => {
                  e.store.scheduleLayout(!1, !0)
                }),
                (document.body.style.cursor = ''),
                (r.value = !1),
                (o.value = null),
                (u.value = {}),
                t('set-drag-visible', !1)
            }
            document.removeEventListener('mousemove', N),
              document.removeEventListener('mouseup', M),
              (document.onselectstart = null),
              (document.ondragstart = null),
              setTimeout(() => {
                lt(d, 'noclick')
              }, 0)
          }
        document.addEventListener('mousemove', N),
          document.addEventListener('mouseup', M)
      }
    },
    f = (S, m) => {
      if (m.children && m.children.length > 0) return
      const x = S.target
      if (!Yt(x)) return
      const v = x == null ? void 0 : x.closest('th')
      if (!(!m || !m.resizable) && !r.value && e.border) {
        const E = v.getBoundingClientRect(),
          d = document.body.style
        E.width > 12 && E.right - S.pageX < 8
          ? ((d.cursor = 'col-resize'),
            Ke(v, 'is-sortable') && (v.style.cursor = 'col-resize'),
            (o.value = m))
          : r.value ||
            ((d.cursor = ''),
            Ke(v, 'is-sortable') && (v.style.cursor = 'pointer'),
            (o.value = null))
      }
    },
    h = () => {
      Se && (document.body.style.cursor = '')
    },
    g = ({ order: S, sortOrders: m }) => {
      if (S === '') return m[0]
      const x = m.indexOf(S || null)
      return m[x > m.length - 2 ? 0 : x + 1]
    },
    p = (S, m, x) => {
      var v
      S.stopPropagation()
      const E = m.order === x ? null : x || g(m),
        d = (v = S.target) == null ? void 0 : v.closest('th')
      if (d && Ke(d, 'noclick')) {
        lt(d, 'noclick')
        return
      }
      if (!m.sortable) return
      const C = e.store.states
      let w = C.sortProp.value,
        y
      const N = C.sortingColumn.value
      ;(N !== m || (N === m && N.order === null)) &&
        (N && (N.order = null), (C.sortingColumn.value = m), (w = m.property)),
        E ? (y = m.order = E) : (y = m.order = null),
        (C.sortProp.value = w),
        (C.sortOrder.value = y),
        n == null || n.store.commit('changeSortCondition')
    }
  return {
    handleHeaderClick: i,
    handleHeaderContextMenu: a,
    handleMouseDown: c,
    handleMouseMove: f,
    handleMouseOut: h,
    handleSortClick: p,
    handleFilterClick: s
  }
}
function lr(e) {
  const t = be(ve),
    l = ae('table')
  return {
    getHeaderRowStyle: (o) => {
      const r = t == null ? void 0 : t.props.headerRowStyle
      return typeof r == 'function' ? r.call(null, { rowIndex: o }) : r
    },
    getHeaderRowClass: (o) => {
      const r = [],
        u = t == null ? void 0 : t.props.headerRowClassName
      return (
        typeof u == 'string'
          ? r.push(u)
          : typeof u == 'function' && r.push(u.call(null, { rowIndex: o })),
        r.join(' ')
      )
    },
    getHeaderCellStyle: (o, r, u, c) => {
      var f
      let h =
        (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {}
      typeof h == 'function' &&
        (h = h.call(null, { rowIndex: o, columnIndex: r, row: u, column: c }))
      const g = St(r, c.fixed, e.store, u)
      return $e(g, 'left'), $e(g, 'right'), Object.assign({}, h, g)
    },
    getHeaderCellClass: (o, r, u, c) => {
      const f = wt(l.b(), r, c.fixed, e.store, u),
        h = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...f]
      c.children || h.push('is-leaf'), c.sortable && h.push('is-sortable')
      const g = t == null ? void 0 : t.props.headerCellClassName
      return (
        typeof g == 'string'
          ? h.push(g)
          : typeof g == 'function' &&
            h.push(
              g.call(null, { rowIndex: o, columnIndex: r, row: u, column: c })
            ),
        h.push(l.e('cell')),
        h.filter((p) => !!p).join(' ')
      )
    }
  }
}
const Ol = (e) => {
    const t = []
    return (
      e.forEach((l) => {
        l.children ? (t.push(l), t.push.apply(t, Ol(l.children))) : t.push(l)
      }),
      t
    )
  },
  nr = (e) => {
    let t = 1
    const l = (i, a) => {
      if (
        (a && ((i.level = a.level + 1), t < i.level && (t = i.level)),
        i.children)
      ) {
        let o = 0
        i.children.forEach((r) => {
          l(r, i), (o += r.colSpan)
        }),
          (i.colSpan = o)
      } else i.colSpan = 1
    }
    e.forEach((i) => {
      ;(i.level = 1), l(i, void 0)
    })
    const n = []
    for (let i = 0; i < t; i++) n.push([])
    return (
      Ol(e).forEach((i) => {
        i.children
          ? ((i.rowSpan = 1), i.children.forEach((a) => (a.isSubColumn = !0)))
          : (i.rowSpan = t - i.level + 1),
          n[i.level - 1].push(i)
      }),
      n
    )
  }
function or(e) {
  const t = be(ve),
    l = I(() => nr(e.store.states.originColumns.value))
  return {
    isGroup: I(() => {
      const i = l.value.length > 1
      return i && t && (t.state.isGroup.value = !0), i
    }),
    toggleAllSelection: (i) => {
      i.stopPropagation(), t == null || t.store.commit('toggleAllSelection')
    },
    columnRows: l
  }
}
var sr = pe({
  name: 'ElTableHeader',
  components: { ElCheckbox: ke },
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) }
  },
  setup(e, { emit: t }) {
    const l = le(),
      n = be(ve),
      s = ae('table'),
      i = R({}),
      { onColumnsChange: a, onScrollableChange: o } = Ml(n)
    We(async () => {
      await Me(), await Me()
      const { prop: w, order: y } = e.defaultSort
      n == null || n.store.commit('sort', { prop: w, order: y, init: !0 })
    })
    const {
        handleHeaderClick: r,
        handleHeaderContextMenu: u,
        handleMouseDown: c,
        handleMouseMove: f,
        handleMouseOut: h,
        handleSortClick: g,
        handleFilterClick: p
      } = tr(e, t),
      {
        getHeaderRowStyle: S,
        getHeaderRowClass: m,
        getHeaderCellStyle: x,
        getHeaderCellClass: v
      } = lr(e),
      { isGroup: E, toggleAllSelection: d, columnRows: C } = or(e)
    return (
      (l.state = { onColumnsChange: a, onScrollableChange: o }),
      (l.filterPanels = i),
      {
        ns: s,
        filterPanels: i,
        onColumnsChange: a,
        onScrollableChange: o,
        columnRows: C,
        getHeaderRowClass: m,
        getHeaderRowStyle: S,
        getHeaderCellClass: v,
        getHeaderCellStyle: x,
        handleHeaderClick: r,
        handleHeaderContextMenu: u,
        handleMouseDown: c,
        handleMouseMove: f,
        handleMouseOut: h,
        handleSortClick: g,
        handleFilterClick: p,
        isGroup: E,
        toggleAllSelection: d
      }
    )
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: l,
      getHeaderCellStyle: n,
      getHeaderCellClass: s,
      getHeaderRowClass: i,
      getHeaderRowStyle: a,
      handleHeaderClick: o,
      handleHeaderContextMenu: r,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: f,
      handleMouseOut: h,
      store: g,
      $parent: p
    } = this
    let S = 1
    return H(
      'thead',
      { class: { [e.is('group')]: t } },
      l.map((m, x) =>
        H(
          'tr',
          { class: i(x), key: x, style: a(x) },
          m.map(
            (v, E) => (
              v.rowSpan > S && (S = v.rowSpan),
              H(
                'th',
                {
                  class: s(x, E, m, v),
                  colspan: v.colSpan,
                  key: `${v.id}-thead`,
                  rowspan: v.rowSpan,
                  style: n(x, E, m, v),
                  onClick: (d) => o(d, v),
                  onContextmenu: (d) => r(d, v),
                  onMousedown: (d) => u(d, v),
                  onMousemove: (d) => c(d, v),
                  onMouseout: h
                },
                [
                  H(
                    'div',
                    {
                      class: [
                        'cell',
                        v.filteredValue && v.filteredValue.length > 0
                          ? 'highlight'
                          : ''
                      ]
                    },
                    [
                      v.renderHeader
                        ? v.renderHeader({
                            column: v,
                            $index: E,
                            store: g,
                            _self: p
                          })
                        : v.label,
                      v.sortable &&
                        H(
                          'span',
                          { onClick: (d) => f(d, v), class: 'caret-wrapper' },
                          [
                            H('i', {
                              onClick: (d) => f(d, v, 'ascending'),
                              class: 'sort-caret ascending'
                            }),
                            H('i', {
                              onClick: (d) => f(d, v, 'descending'),
                              class: 'sort-caret descending'
                            })
                          ]
                        ),
                      v.filterable &&
                        H(er, {
                          store: g,
                          placement: v.filterPlacement || 'bottom-start',
                          column: v,
                          upDataColumn: (d, C) => {
                            v[d] = C
                          }
                        })
                    ]
                  )
                ]
              )
            )
          )
        )
      )
    )
  }
})
function rr(e) {
  const t = be(ve),
    l = R(''),
    n = R(H('div')),
    { nextZIndex: s } = qt(),
    i = (p, S, m) => {
      var x
      const v = t,
        E = Je(p)
      let d
      const C =
        (x = v == null ? void 0 : v.vnode.el) == null
          ? void 0
          : x.dataset.prefix
      E &&
        ((d = It({ columns: e.store.states.columns.value }, E, C)),
        d && (v == null || v.emit(`cell-${m}`, S, d, E, p))),
        v == null || v.emit(`row-${m}`, S, d, p)
    },
    a = (p, S) => {
      i(p, S, 'dblclick')
    },
    o = (p, S) => {
      e.store.commit('setCurrentRow', S), i(p, S, 'click')
    },
    r = (p, S) => {
      i(p, S, 'contextmenu')
    },
    u = Ue((p) => {
      e.store.commit('setHoverRow', p)
    }, 30),
    c = Ue(() => {
      e.store.commit('setHoverRow', null)
    }, 30),
    f = (p) => {
      const S = window.getComputedStyle(p, null),
        m = Number.parseInt(S.paddingLeft, 10) || 0,
        x = Number.parseInt(S.paddingRight, 10) || 0,
        v = Number.parseInt(S.paddingTop, 10) || 0,
        E = Number.parseInt(S.paddingBottom, 10) || 0
      return { left: m, right: x, top: v, bottom: E }
    }
  return {
    handleDoubleClick: a,
    handleClick: o,
    handleContextMenu: r,
    handleMouseEnter: u,
    handleMouseLeave: c,
    handleCellMouseEnter: (p, S, m) => {
      var x
      const v = t,
        E = Je(p),
        d =
          (x = v == null ? void 0 : v.vnode.el) == null
            ? void 0
            : x.dataset.prefix
      if (E) {
        const ie = It({ columns: e.store.states.columns.value }, E, d),
          Z = (v.hoverState = { cell: E, column: ie, row: S })
        v == null || v.emit('cell-mouse-enter', Z.row, Z.column, Z.cell, p)
      }
      if (!m) return
      const C = p.target.querySelector('.cell')
      if (!(Ke(C, `${d}-tooltip`) && C.childNodes.length)) return
      const w = document.createRange()
      w.setStart(C, 0), w.setEnd(C, C.childNodes.length)
      let y = w.getBoundingClientRect().width,
        N = w.getBoundingClientRect().height
      y - Math.floor(y) < 0.001 && (y = Math.floor(y)),
        N - Math.floor(N) < 0.001 && (N = Math.floor(N))
      const { top: B, left: O, right: D, bottom: k } = f(C),
        j = O + D,
        X = B + k
      ;(y + j > C.offsetWidth ||
        N + X > C.offsetHeight ||
        C.scrollWidth > C.offsetWidth) &&
        Bs(
          t == null ? void 0 : t.refs.tableWrapper,
          E,
          E.innerText || E.textContent,
          s,
          m
        )
    },
    handleCellMouseLeave: (p) => {
      if (!Je(p)) return
      const m = t == null ? void 0 : t.hoverState
      t == null ||
        t.emit(
          'cell-mouse-leave',
          m == null ? void 0 : m.row,
          m == null ? void 0 : m.column,
          m == null ? void 0 : m.cell,
          p
        )
    },
    tooltipContent: l,
    tooltipTrigger: n
  }
}
function ar(e) {
  const t = be(ve),
    l = ae('table')
  return {
    getRowStyle: (u, c) => {
      const f = t == null ? void 0 : t.props.rowStyle
      return typeof f == 'function'
        ? f.call(null, { row: u, rowIndex: c })
        : f || null
    },
    getRowClass: (u, c) => {
      const f = [l.e('row')]
      t != null &&
        t.props.highlightCurrentRow &&
        u === e.store.states.currentRow.value &&
        f.push('current-row'),
        e.stripe && c % 2 === 1 && f.push(l.em('row', 'striped'))
      const h = t == null ? void 0 : t.props.rowClassName
      return (
        typeof h == 'string'
          ? f.push(h)
          : typeof h == 'function' &&
            f.push(h.call(null, { row: u, rowIndex: c })),
        f
      )
    },
    getCellStyle: (u, c, f, h) => {
      const g = t == null ? void 0 : t.props.cellStyle
      let p = g ?? {}
      typeof g == 'function' &&
        (p = g.call(null, { rowIndex: u, columnIndex: c, row: f, column: h }))
      const S = St(c, e == null ? void 0 : e.fixed, e.store)
      return $e(S, 'left'), $e(S, 'right'), Object.assign({}, p, S)
    },
    getCellClass: (u, c, f, h, g) => {
      const p = wt(l.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, g),
        S = [h.id, h.align, h.className, ...p],
        m = t == null ? void 0 : t.props.cellClassName
      return (
        typeof m == 'string'
          ? S.push(m)
          : typeof m == 'function' &&
            S.push(
              m.call(null, { rowIndex: u, columnIndex: c, row: f, column: h })
            ),
        S.push(l.e('cell')),
        S.filter((x) => !!x).join(' ')
      )
    },
    getSpan: (u, c, f, h) => {
      let g = 1,
        p = 1
      const S = t == null ? void 0 : t.props.spanMethod
      if (typeof S == 'function') {
        const m = S({ row: u, column: c, rowIndex: f, columnIndex: h })
        Array.isArray(m)
          ? ((g = m[0]), (p = m[1]))
          : typeof m == 'object' && ((g = m.rowspan), (p = m.colspan))
      }
      return { rowspan: g, colspan: p }
    },
    getColspanRealWidth: (u, c, f) => {
      if (c < 1) return u[f].realWidth
      const h = u.map(({ realWidth: g, width: p }) => g || p).slice(f, f + c)
      return Number(h.reduce((g, p) => Number(g) + Number(p), -1))
    }
  }
}
function ir(e) {
  const t = be(ve),
    l = ae('table'),
    {
      handleDoubleClick: n,
      handleClick: s,
      handleContextMenu: i,
      handleMouseEnter: a,
      handleMouseLeave: o,
      handleCellMouseEnter: r,
      handleCellMouseLeave: u,
      tooltipContent: c,
      tooltipTrigger: f
    } = rr(e),
    {
      getRowStyle: h,
      getRowClass: g,
      getCellStyle: p,
      getCellClass: S,
      getSpan: m,
      getColspanRealWidth: x
    } = ar(e),
    v = I(() =>
      e.store.states.columns.value.findIndex(({ type: y }) => y === 'default')
    ),
    E = (y, N) => {
      const M = t.props.rowKey
      return M ? J(y, M) : N
    },
    d = (y, N, M, K = !1) => {
      const { tooltipEffect: B, tooltipOptions: O, store: D } = e,
        { indent: k, columns: j } = D.states,
        X = g(y, N)
      let ie = !0
      return (
        M && (X.push(l.em('row', `level-${M.level}`)), (ie = M.display)),
        H(
          'tr',
          {
            style: [ie ? null : { display: 'none' }, h(y, N)],
            class: X,
            key: E(y, N),
            onDblclick: (b) => n(b, y),
            onClick: (b) => s(b, y),
            onContextmenu: (b) => i(b, y),
            onMouseenter: () => a(N),
            onMouseleave: o
          },
          j.value.map((b, L) => {
            const { rowspan: _, colspan: G } = m(y, b, N, L)
            if (!_ || !G) return null
            const U = Object.assign({}, b)
            U.realWidth = x(j.value, G, L)
            const q = {
              store: e.store,
              _self: e.context || t,
              column: U,
              row: y,
              $index: N,
              cellIndex: L,
              expanded: K
            }
            L === v.value &&
              M &&
              ((q.treeNode = { indent: M.level * k.value, level: M.level }),
              typeof M.expanded == 'boolean' &&
                ((q.treeNode.expanded = M.expanded),
                'loading' in M && (q.treeNode.loading = M.loading),
                'noLazyChildren' in M &&
                  (q.treeNode.noLazyChildren = M.noLazyChildren)))
            const se = `${N},${L}`,
              te = U.columnKey || U.rawColumnKey || '',
              me = C(L, b, q),
              ne =
                b.showOverflowTooltip &&
                vl({ effect: B }, O, b.showOverflowTooltip)
            return H(
              'td',
              {
                style: p(N, L, y, b),
                class: S(N, L, y, b, G - 1),
                key: `${te}${se}`,
                rowspan: _,
                colspan: G,
                onMouseenter: (ue) => r(ue, y, ne),
                onMouseleave: u
              },
              [me]
            )
          })
        )
      )
    },
    C = (y, N, M) => N.renderCell(M)
  return {
    wrappedRowRender: (y, N) => {
      const M = e.store,
        { isRowExpanded: K, assertRowKey: B } = M,
        {
          treeData: O,
          lazyTreeNodeMap: D,
          childrenColumnName: k,
          rowKey: j
        } = M.states,
        X = M.states.columns.value
      if (X.some(({ type: Z }) => Z === 'expand')) {
        const Z = K(y),
          b = d(y, N, void 0, Z),
          L = t.renderExpanded
        return Z
          ? L
            ? [
                [
                  b,
                  H('tr', { key: `expanded-row__${b.key}` }, [
                    H(
                      'td',
                      {
                        colspan: X.length,
                        class: `${l.e('cell')} ${l.e('expanded-cell')}`
                      },
                      [L({ row: y, $index: N, store: M, expanded: Z })]
                    )
                  ])
                ]
              ]
            : (console.error('[Element Error]renderExpanded is required.'), b)
          : [[b]]
      } else if (Object.keys(O.value).length) {
        B()
        const Z = J(y, j.value)
        let b = O.value[Z],
          L = null
        b &&
          ((L = { expanded: b.expanded, level: b.level, display: !0 }),
          typeof b.lazy == 'boolean' &&
            (typeof b.loaded == 'boolean' &&
              b.loaded &&
              (L.noLazyChildren = !(b.children && b.children.length)),
            (L.loading = b.loading)))
        const _ = [d(y, N, L)]
        if (b) {
          let G = 0
          const U = (se, te) => {
            se &&
              se.length &&
              te &&
              se.forEach((me) => {
                const ne = {
                    display: te.display && te.expanded,
                    level: te.level + 1,
                    expanded: !1,
                    noLazyChildren: !1,
                    loading: !1
                  },
                  ue = J(me, j.value)
                if (ue == null)
                  throw new Error('For nested data item, row-key is required.')
                if (
                  ((b = { ...O.value[ue] }),
                  b &&
                    ((ne.expanded = b.expanded),
                    (b.level = b.level || ne.level),
                    (b.display = !!(b.expanded && ne.display)),
                    typeof b.lazy == 'boolean' &&
                      (typeof b.loaded == 'boolean' &&
                        b.loaded &&
                        (ne.noLazyChildren = !(
                          b.children && b.children.length
                        )),
                      (ne.loading = b.loading))),
                  G++,
                  _.push(d(me, N + G, ne)),
                  b)
                ) {
                  const fe = D.value[ue] || me[k.value]
                  U(fe, b)
                }
              })
          }
          b.display = !0
          const q = D.value[Z] || y[k.value]
          U(q, b)
        }
        return _
      } else return d(y, N, void 0)
    },
    tooltipContent: c,
    tooltipTrigger: f
  }
}
const ur = {
  store: { required: !0, type: Object },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: { type: Object },
  context: { default: () => ({}), type: Object },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: { type: String, default: '' },
  highlight: Boolean
}
var cr = pe({
  name: 'ElTableBody',
  props: ur,
  setup(e) {
    const t = le(),
      l = be(ve),
      n = ae('table'),
      { wrappedRowRender: s, tooltipContent: i, tooltipTrigger: a } = ir(e),
      { onColumnsChange: o, onScrollableChange: r } = Ml(l)
    return (
      re(e.store.states.hoverRow, (u, c) => {
        !e.store.states.isComplex.value ||
          !Se ||
          Io(() => {
            const f = t == null ? void 0 : t.vnode.el,
              h = Array.from((f == null ? void 0 : f.children) || []).filter(
                (S) =>
                  S == null ? void 0 : S.classList.contains(`${n.e('row')}`)
              ),
              g = h[c],
              p = h[u]
            g && lt(g, 'hover-row'), p && tl(p, 'hover-row')
          })
      }),
      bt(() => {
        var u
        ;(u = ye) == null || u()
      }),
      {
        ns: n,
        onColumnsChange: o,
        onScrollableChange: r,
        wrappedRowRender: s,
        tooltipContent: i,
        tooltipTrigger: a
      }
    )
  },
  render() {
    const { wrappedRowRender: e, store: t } = this,
      l = t.states.data.value || []
    return H('tbody', { tabIndex: -1 }, [
      l.reduce((n, s) => n.concat(e(s, n.length)), [])
    ])
  }
})
function dr() {
  const e = be(ve),
    t = e == null ? void 0 : e.store,
    l = I(() => t.states.fixedLeafColumnsLength.value),
    n = I(() => t.states.rightFixedColumns.value.length),
    s = I(() => t.states.columns.value.length),
    i = I(() => t.states.fixedColumns.value.length),
    a = I(() => t.states.rightFixedColumns.value.length)
  return {
    leftFixedLeafCount: l,
    rightFixedLeafCount: n,
    columnsCount: s,
    leftFixedCount: i,
    rightFixedCount: a,
    columns: t.states.columns
  }
}
function fr(e) {
  const { columns: t } = dr(),
    l = ae('table')
  return {
    getCellClasses: (i, a) => {
      const o = i[a],
        r = [
          l.e('cell'),
          o.id,
          o.align,
          o.labelClassName,
          ...wt(l.b(), a, o.fixed, e.store)
        ]
      return (
        o.className && r.push(o.className),
        o.children || r.push(l.is('leaf')),
        r
      )
    },
    getCellStyles: (i, a) => {
      const o = St(a, i.fixed, e.store)
      return $e(o, 'left'), $e(o, 'right'), o
    },
    columns: t
  }
}
var hr = pe({
  name: 'ElTableFooter',
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: l, columns: n } = fr(e)
    return { ns: ae('table'), getCellClasses: t, getCellStyles: l, columns: n }
  },
  render() {
    const {
        columns: e,
        getCellStyles: t,
        getCellClasses: l,
        summaryMethod: n,
        sumText: s
      } = this,
      i = this.store.states.data.value
    let a = []
    return (
      n
        ? (a = n({ columns: e, data: i }))
        : e.forEach((o, r) => {
            if (r === 0) {
              a[r] = s
              return
            }
            const u = i.map((g) => Number(g[o.property])),
              c = []
            let f = !0
            u.forEach((g) => {
              if (!Number.isNaN(+g)) {
                f = !1
                const p = `${g}`.split('.')[1]
                c.push(p ? p.length : 0)
              }
            })
            const h = Math.max.apply(null, c)
            f
              ? (a[r] = '')
              : (a[r] = u.reduce((g, p) => {
                  const S = Number(p)
                  return Number.isNaN(+S)
                    ? g
                    : Number.parseFloat((g + p).toFixed(Math.min(h, 20)))
                }, 0))
          }),
      H(
        H('tfoot', [
          H('tr', {}, [
            ...e.map((o, r) =>
              H(
                'td',
                {
                  key: r,
                  colspan: o.colSpan,
                  rowspan: o.rowSpan,
                  class: l(e, r),
                  style: t(o, r)
                },
                [H('div', { class: ['cell', o.labelClassName] }, [a[r]])]
              )
            )
          ])
        ])
      )
    )
  }
})
function pr(e) {
  return {
    setCurrentRow: (c) => {
      e.commit('setCurrentRow', c)
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (c, f) => {
      e.toggleRowSelection(c, f, !1), e.updateAllSelected()
    },
    clearSelection: () => {
      e.clearSelection()
    },
    clearFilter: (c) => {
      e.clearFilter(c)
    },
    toggleAllSelection: () => {
      e.commit('toggleAllSelection')
    },
    toggleRowExpansion: (c, f) => {
      e.toggleRowExpansionAdapter(c, f)
    },
    clearSort: () => {
      e.clearSort()
    },
    sort: (c, f) => {
      e.commit('sort', { prop: c, order: f })
    }
  }
}
function vr(e, t, l, n) {
  const s = R(!1),
    i = R(null),
    a = R(!1),
    o = (b) => {
      a.value = b
    },
    r = R({ width: null, height: null, headerHeight: null }),
    u = R(!1),
    c = { display: 'inline-block', verticalAlign: 'middle' },
    f = R(),
    h = R(0),
    g = R(0),
    p = R(0),
    S = R(0),
    m = R(0)
  He(() => {
    t.setHeight(e.height)
  }),
    He(() => {
      t.setMaxHeight(e.maxHeight)
    }),
    re(
      () => [e.currentRowKey, l.states.rowKey],
      ([b, L]) => {
        !F(L) || !F(b) || l.setCurrentRowKey(`${b}`)
      },
      { immediate: !0 }
    ),
    re(
      () => e.data,
      (b) => {
        n.store.commit('setData', b)
      },
      { immediate: !0, deep: !0 }
    ),
    He(() => {
      e.expandRowKeys && l.setExpandRowKeysAdapter(e.expandRowKeys)
    })
  const x = () => {
      n.store.commit('setHoverRow', null), n.hoverState && (n.hoverState = null)
    },
    v = (b, L) => {
      const { pixelX: _, pixelY: G } = L
      Math.abs(_) >= Math.abs(G) &&
        (n.refs.bodyWrapper.scrollLeft += L.pixelX / 5)
    },
    E = I(
      () =>
        e.height ||
        e.maxHeight ||
        l.states.fixedColumns.value.length > 0 ||
        l.states.rightFixedColumns.value.length > 0
    ),
    d = I(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : '' })),
    C = () => {
      E.value && t.updateElsHeight(),
        t.updateColumnsWidth(),
        requestAnimationFrame(M)
    }
  We(async () => {
    await Me(), l.updateColumns(), K(), requestAnimationFrame(C)
    const b = n.vnode.el,
      L = n.refs.headerWrapper
    e.flexible &&
      b &&
      b.parentElement &&
      (b.parentElement.style.minWidth = '0'),
      (r.value = {
        width: (f.value = b.offsetWidth),
        height: b.offsetHeight,
        headerHeight: e.showHeader && L ? L.offsetHeight : null
      }),
      l.states.columns.value.forEach((_) => {
        _.filteredValue &&
          _.filteredValue.length &&
          n.store.commit('filterChange', {
            column: _,
            values: _.filteredValue,
            silent: !0
          })
      }),
      (n.$ready = !0)
  })
  const w = (b, L) => {
      if (!b) return
      const _ = Array.from(b.classList).filter(
        (G) => !G.startsWith('is-scrolling-')
      )
      _.push(t.scrollX.value ? L : 'is-scrolling-none'),
        (b.className = _.join(' '))
    },
    y = (b) => {
      const { tableWrapper: L } = n.refs
      w(L, b)
    },
    N = (b) => {
      const { tableWrapper: L } = n.refs
      return !!(L && L.classList.contains(b))
    },
    M = function () {
      if (!n.refs.scrollBarRef) return
      if (!t.scrollX.value) {
        const te = 'is-scrolling-none'
        N(te) || y(te)
        return
      }
      const b = n.refs.scrollBarRef.wrapRef
      if (!b) return
      const { scrollLeft: L, offsetWidth: _, scrollWidth: G } = b,
        { headerWrapper: U, footerWrapper: q } = n.refs
      U && (U.scrollLeft = L), q && (q.scrollLeft = L)
      const se = G - _ - 1
      L >= se
        ? y('is-scrolling-right')
        : y(L === 0 ? 'is-scrolling-left' : 'is-scrolling-middle')
    },
    K = () => {
      n.refs.scrollBarRef &&
        (n.refs.scrollBarRef.wrapRef &&
          Lt(n.refs.scrollBarRef.wrapRef, 'scroll', M, { passive: !0 }),
        e.fit ? At(n.vnode.el, B) : Lt(window, 'resize', B),
        At(n.refs.bodyWrapper, () => {
          var b, L
          B(),
            (L = (b = n.refs) == null ? void 0 : b.scrollBarRef) == null ||
              L.update()
        }))
    },
    B = () => {
      var b, L, _, G
      const U = n.vnode.el
      if (!n.$ready || !U) return
      let q = !1
      const { width: se, height: te, headerHeight: me } = r.value,
        ne = (f.value = U.offsetWidth)
      se !== ne && (q = !0)
      const ue = U.offsetHeight
      ;(e.height || E.value) && te !== ue && (q = !0)
      const fe =
        e.tableLayout === 'fixed'
          ? n.refs.headerWrapper
          : (b = n.refs.tableHeaderRef) == null
          ? void 0
          : b.$el
      e.showHeader &&
        (fe == null ? void 0 : fe.offsetHeight) !== me &&
        (q = !0),
        (h.value =
          ((L = n.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0),
        (p.value = (fe == null ? void 0 : fe.scrollHeight) || 0),
        (S.value =
          ((_ = n.refs.footerWrapper) == null ? void 0 : _.offsetHeight) || 0),
        (m.value =
          ((G = n.refs.appendWrapper) == null ? void 0 : G.offsetHeight) || 0),
        (g.value = h.value - p.value - S.value - m.value),
        q &&
          ((r.value = {
            width: ne,
            height: ue,
            headerHeight:
              (e.showHeader && (fe == null ? void 0 : fe.offsetHeight)) || 0
          }),
          C())
    },
    O = Mn(),
    D = I(() => {
      const { bodyWidth: b, scrollY: L, gutterWidth: _ } = t
      return b.value ? `${b.value - (L.value ? _ : 0)}px` : ''
    }),
    k = I(() => (e.maxHeight ? 'fixed' : e.tableLayout)),
    j = I(() => {
      if (e.data && e.data.length) return null
      let b = '100%'
      e.height && g.value && (b = `${g.value}px`)
      const L = f.value
      return { width: L ? `${L}px` : '', height: b }
    }),
    X = I(() =>
      e.height
        ? {
            height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
          }
        : e.maxHeight
        ? {
            maxHeight: Number.isNaN(Number(e.maxHeight))
              ? e.maxHeight
              : `${e.maxHeight}px`
          }
        : {}
    ),
    ie = I(() =>
      e.height
        ? { height: '100%' }
        : e.maxHeight
        ? Number.isNaN(Number(e.maxHeight))
          ? { maxHeight: `calc(${e.maxHeight} - ${p.value + S.value}px)` }
          : { maxHeight: `${e.maxHeight - p.value - S.value}px` }
        : {}
    )
  return {
    isHidden: s,
    renderExpanded: i,
    setDragVisible: o,
    isGroup: u,
    handleMouseLeave: x,
    handleHeaderFooterMousewheel: v,
    tableSize: O,
    emptyBlockStyle: j,
    handleFixedMousewheel: (b, L) => {
      const _ = n.refs.bodyWrapper
      if (Math.abs(L.spinY) > 0) {
        const G = _.scrollTop
        L.pixelY < 0 && G !== 0 && b.preventDefault(),
          L.pixelY > 0 &&
            _.scrollHeight - _.clientHeight > G &&
            b.preventDefault(),
          (_.scrollTop += Math.ceil(L.pixelY / 5))
      } else _.scrollLeft += Math.ceil(L.pixelX / 5)
    },
    resizeProxyVisible: a,
    bodyWidth: D,
    resizeState: r,
    doLayout: C,
    tableBodyStyles: d,
    tableLayout: k,
    scrollbarViewStyle: c,
    tableInnerStyle: X,
    scrollbarStyle: ie
  }
}
function mr(e) {
  const t = R(),
    l = () => {
      const s = e.vnode.el.querySelector('.hidden-columns'),
        i = { childList: !0, subtree: !0 },
        a = e.store.states.updateOrderFns
      ;(t.value = new MutationObserver(() => {
        a.forEach((o) => o())
      })),
        t.value.observe(s, i)
    }
  We(() => {
    l()
  }),
    bt(() => {
      var n
      ;(n = t.value) == null || n.disconnect()
    })
}
var gr = {
  data: { type: Array, default: () => [] },
  size: yn,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: { type: Boolean, default: !0 },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: { type: Boolean, default: !0 },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: { type: Boolean, default: !0 },
  indent: { type: Number, default: 16 },
  treeProps: {
    type: Object,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' })
  },
  lazy: Boolean,
  load: Function,
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' },
  tableLayout: { type: String, default: 'fixed' },
  scrollbarAlwaysOn: { type: Boolean, default: !1 },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
}
function Tl(e) {
  const t = e.tableLayout === 'auto'
  let l = e.columns || []
  t && l.every((s) => s.width === void 0) && (l = [])
  const n = (s) => {
    const i = { key: `${e.tableLayout}_${s.id}`, style: {}, name: void 0 }
    return t ? (i.style = { width: `${s.width}px` }) : (i.name = s.id), i
  }
  return H(
    'colgroup',
    {},
    l.map((s) => H('col', n(s)))
  )
}
Tl.props = ['columns', 'tableLayout']
const yr = () => {
  const e = R(),
    t = (i, a) => {
      const o = e.value
      o && o.scrollTo(i, a)
    },
    l = (i, a) => {
      const o = e.value
      o && bn(a) && ['Top', 'Left'].includes(i) && o[`setScroll${i}`](a)
    }
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (i) => l('Top', i),
    setScrollLeft: (i) => l('Left', i)
  }
}
let br = 1
const Cr = pe({
    name: 'ElTable',
    directives: { Mousewheel: Uo },
    components: {
      TableHeader: sr,
      TableBody: cr,
      TableFooter: hr,
      ElScrollbar: ol,
      hColgroup: Tl
    },
    props: gr,
    emits: [
      'select',
      'select-all',
      'selection-change',
      'cell-mouse-enter',
      'cell-mouse-leave',
      'cell-contextmenu',
      'cell-click',
      'cell-dblclick',
      'row-click',
      'row-contextmenu',
      'row-dblclick',
      'header-click',
      'header-contextmenu',
      'sort-change',
      'filter-change',
      'current-change',
      'header-dragend',
      'expand-change'
    ],
    setup(e) {
      const { t } = gt(),
        l = ae('table'),
        n = le()
      Cn(ve, n)
      const s = js(n, e)
      n.store = s
      const i = new Ys({
        store: n.store,
        table: n,
        fit: e.fit,
        showHeader: e.showHeader
      })
      n.layout = i
      const a = I(() => (s.states.data.value || []).length === 0),
        {
          setCurrentRow: o,
          getSelectionRows: r,
          toggleRowSelection: u,
          clearSelection: c,
          clearFilter: f,
          toggleAllSelection: h,
          toggleRowExpansion: g,
          clearSort: p,
          sort: S
        } = pr(s),
        {
          isHidden: m,
          renderExpanded: x,
          setDragVisible: v,
          isGroup: E,
          handleMouseLeave: d,
          handleHeaderFooterMousewheel: C,
          tableSize: w,
          emptyBlockStyle: y,
          handleFixedMousewheel: N,
          resizeProxyVisible: M,
          bodyWidth: K,
          resizeState: B,
          doLayout: O,
          tableBodyStyles: D,
          tableLayout: k,
          scrollbarViewStyle: j,
          tableInnerStyle: X,
          scrollbarStyle: ie
        } = vr(e, i, s, n),
        {
          scrollBarRef: Z,
          scrollTo: b,
          setScrollLeft: L,
          setScrollTop: _
        } = yr(),
        G = Ue(O, 50),
        U = `${l.namespace.value}-table_${br++}`
      ;(n.tableId = U),
        (n.state = {
          isGroup: E,
          resizeState: B,
          doLayout: O,
          debouncedUpdateLayout: G
        })
      const q = I(() => e.sumText || t('el.table.sumText')),
        se = I(() => e.emptyText || t('el.table.emptyText'))
      return (
        mr(n),
        {
          ns: l,
          layout: i,
          store: s,
          handleHeaderFooterMousewheel: C,
          handleMouseLeave: d,
          tableId: U,
          tableSize: w,
          isHidden: m,
          isEmpty: a,
          renderExpanded: x,
          resizeProxyVisible: M,
          resizeState: B,
          isGroup: E,
          bodyWidth: K,
          tableBodyStyles: D,
          emptyBlockStyle: y,
          debouncedUpdateLayout: G,
          handleFixedMousewheel: N,
          setCurrentRow: o,
          getSelectionRows: r,
          toggleRowSelection: u,
          clearSelection: c,
          clearFilter: f,
          toggleAllSelection: h,
          toggleRowExpansion: g,
          clearSort: p,
          doLayout: O,
          sort: S,
          t,
          setDragVisible: v,
          context: n,
          computedSumText: q,
          computedEmptyText: se,
          tableLayout: k,
          scrollbarViewStyle: j,
          tableInnerStyle: X,
          scrollbarStyle: ie,
          scrollBarRef: Z,
          scrollTo: b,
          setScrollLeft: L,
          setScrollTop: _
        }
      )
    }
  }),
  wr = ['data-prefix'],
  Sr = { ref: 'hiddenColumns', class: 'hidden-columns' }
function Er(e, t, l, n, s, i) {
  const a = de('hColgroup'),
    o = de('table-header'),
    r = de('table-body'),
    u = de('table-footer'),
    c = de('el-scrollbar'),
    f = Qt('mousewheel')
  return (
    Y(),
    Q(
      'div',
      {
        ref: 'tableWrapper',
        class: V([
          {
            [e.ns.m('fit')]: e.fit,
            [e.ns.m('striped')]: e.stripe,
            [e.ns.m('border')]: e.border || e.isGroup,
            [e.ns.m('hidden')]: e.isHidden,
            [e.ns.m('group')]: e.isGroup,
            [e.ns.m('fluid-height')]: e.maxHeight,
            [e.ns.m('scrollable-x')]: e.layout.scrollX.value,
            [e.ns.m('scrollable-y')]: e.layout.scrollY.value,
            [e.ns.m('enable-row-hover')]: !e.store.states.isComplex.value,
            [e.ns.m('enable-row-transition')]:
              (e.store.states.data.value || []).length !== 0 &&
              (e.store.states.data.value || []).length < 100,
            'has-footer': e.showSummary
          },
          e.ns.m(e.tableSize),
          e.className,
          e.ns.b(),
          e.ns.m(`layout-${e.tableLayout}`)
        ]),
        style: Ee(e.style),
        'data-prefix': e.ns.namespace.value,
        onMouseleave:
          t[0] ||
          (t[0] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h))
      },
      [
        $(
          'div',
          { class: V(e.ns.e('inner-wrapper')), style: Ee(e.tableInnerStyle) },
          [
            $('div', Sr, [Fe(e.$slots, 'default')], 512),
            e.showHeader && e.tableLayout === 'fixed'
              ? De(
                  (Y(),
                  Q(
                    'div',
                    {
                      key: 0,
                      ref: 'headerWrapper',
                      class: V(e.ns.e('header-wrapper'))
                    },
                    [
                      $(
                        'table',
                        {
                          ref: 'tableHeader',
                          class: V(e.ns.e('header')),
                          style: Ee(e.tableBodyStyles),
                          border: '0',
                          cellpadding: '0',
                          cellspacing: '0'
                        },
                        [
                          he(
                            a,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout
                            },
                            null,
                            8,
                            ['columns', 'table-layout']
                          ),
                          he(
                            o,
                            {
                              ref: 'tableHeaderRef',
                              border: e.border,
                              'default-sort': e.defaultSort,
                              store: e.store,
                              onSetDragVisible: e.setDragVisible
                            },
                            null,
                            8,
                            [
                              'border',
                              'default-sort',
                              'store',
                              'onSetDragVisible'
                            ]
                          )
                        ],
                        6
                      )
                    ],
                    2
                  )),
                  [[f, e.handleHeaderFooterMousewheel]]
                )
              : Ce('v-if', !0),
            $(
              'div',
              { ref: 'bodyWrapper', class: V(e.ns.e('body-wrapper')) },
              [
                he(
                  c,
                  {
                    ref: 'scrollBarRef',
                    'view-style': e.scrollbarViewStyle,
                    'wrap-style': e.scrollbarStyle,
                    always: e.scrollbarAlwaysOn
                  },
                  {
                    default: xe(() => [
                      $(
                        'table',
                        {
                          ref: 'tableBody',
                          class: V(e.ns.e('body')),
                          cellspacing: '0',
                          cellpadding: '0',
                          border: '0',
                          style: Ee({
                            width: e.bodyWidth,
                            tableLayout: e.tableLayout
                          })
                        },
                        [
                          he(
                            a,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout
                            },
                            null,
                            8,
                            ['columns', 'table-layout']
                          ),
                          e.showHeader && e.tableLayout === 'auto'
                            ? (Y(),
                              Te(
                                o,
                                {
                                  key: 0,
                                  ref: 'tableHeaderRef',
                                  class: V(e.ns.e('body-header')),
                                  border: e.border,
                                  'default-sort': e.defaultSort,
                                  store: e.store,
                                  onSetDragVisible: e.setDragVisible
                                },
                                null,
                                8,
                                [
                                  'class',
                                  'border',
                                  'default-sort',
                                  'store',
                                  'onSetDragVisible'
                                ]
                              ))
                            : Ce('v-if', !0),
                          he(
                            r,
                            {
                              context: e.context,
                              highlight: e.highlightCurrentRow,
                              'row-class-name': e.rowClassName,
                              'tooltip-effect': e.tooltipEffect,
                              'tooltip-options': e.tooltipOptions,
                              'row-style': e.rowStyle,
                              store: e.store,
                              stripe: e.stripe
                            },
                            null,
                            8,
                            [
                              'context',
                              'highlight',
                              'row-class-name',
                              'tooltip-effect',
                              'tooltip-options',
                              'row-style',
                              'store',
                              'stripe'
                            ]
                          ),
                          e.showSummary && e.tableLayout === 'auto'
                            ? (Y(),
                              Te(
                                u,
                                {
                                  key: 1,
                                  class: V(e.ns.e('body-footer')),
                                  border: e.border,
                                  'default-sort': e.defaultSort,
                                  store: e.store,
                                  'sum-text': e.computedSumText,
                                  'summary-method': e.summaryMethod
                                },
                                null,
                                8,
                                [
                                  'class',
                                  'border',
                                  'default-sort',
                                  'store',
                                  'sum-text',
                                  'summary-method'
                                ]
                              ))
                            : Ce('v-if', !0)
                        ],
                        6
                      ),
                      e.isEmpty
                        ? (Y(),
                          Q(
                            'div',
                            {
                              key: 0,
                              ref: 'emptyBlock',
                              style: Ee(e.emptyBlockStyle),
                              class: V(e.ns.e('empty-block'))
                            },
                            [
                              $(
                                'span',
                                { class: V(e.ns.e('empty-text')) },
                                [
                                  Fe(e.$slots, 'empty', {}, () => [
                                    Jt(Re(e.computedEmptyText), 1)
                                  ])
                                ],
                                2
                              )
                            ],
                            6
                          ))
                        : Ce('v-if', !0),
                      e.$slots.append
                        ? (Y(),
                          Q(
                            'div',
                            {
                              key: 1,
                              ref: 'appendWrapper',
                              class: V(e.ns.e('append-wrapper'))
                            },
                            [Fe(e.$slots, 'append')],
                            2
                          ))
                        : Ce('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['view-style', 'wrap-style', 'always']
                )
              ],
              2
            ),
            e.showSummary && e.tableLayout === 'fixed'
              ? De(
                  (Y(),
                  Q(
                    'div',
                    {
                      key: 1,
                      ref: 'footerWrapper',
                      class: V(e.ns.e('footer-wrapper'))
                    },
                    [
                      $(
                        'table',
                        {
                          class: V(e.ns.e('footer')),
                          cellspacing: '0',
                          cellpadding: '0',
                          border: '0',
                          style: Ee(e.tableBodyStyles)
                        },
                        [
                          he(
                            a,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout
                            },
                            null,
                            8,
                            ['columns', 'table-layout']
                          ),
                          he(
                            u,
                            {
                              border: e.border,
                              'default-sort': e.defaultSort,
                              store: e.store,
                              'sum-text': e.computedSumText,
                              'summary-method': e.summaryMethod
                            },
                            null,
                            8,
                            [
                              'border',
                              'default-sort',
                              'store',
                              'sum-text',
                              'summary-method'
                            ]
                          )
                        ],
                        6
                      )
                    ],
                    2
                  )),
                  [
                    [Mt, !e.isEmpty],
                    [f, e.handleHeaderFooterMousewheel]
                  ]
                )
              : Ce('v-if', !0),
            e.border || e.isGroup
              ? (Y(),
                Q(
                  'div',
                  { key: 2, class: V(e.ns.e('border-left-patch')) },
                  null,
                  2
                ))
              : Ce('v-if', !0)
          ],
          6
        ),
        De(
          $(
            'div',
            { ref: 'resizeProxy', class: V(e.ns.e('column-resize-proxy')) },
            null,
            2
          ),
          [[Mt, e.resizeProxyVisible]]
        )
      ],
      46,
      wr
    )
  )
}
var xr = qe(Cr, [
  ['render', Er],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue'
  ]
])
const Rr = {
    selection: 'table-column--selection',
    expand: 'table__expand-column'
  },
  Nr = {
    default: { order: '' },
    selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    index: { width: 48, minWidth: 48, realWidth: 48, order: '' }
  },
  Lr = (e) => Rr[e] || '',
  Ar = {
    selection: {
      renderHeader({ store: e, column: t }) {
        function l() {
          return e.states.data.value && e.states.data.value.length === 0
        }
        return H(ke, {
          disabled: l(),
          size: e.states.tableSize.value,
          indeterminate:
            e.states.selection.value.length > 0 &&
            !e.states.isAllSelected.value,
          'onUpdate:modelValue': e.toggleAllSelection,
          modelValue: e.states.isAllSelected.value,
          ariaLabel: t.label
        })
      },
      renderCell({ row: e, column: t, store: l, $index: n }) {
        return H(ke, {
          disabled: t.selectable ? !t.selectable.call(null, e, n) : !1,
          size: l.states.tableSize.value,
          onChange: () => {
            l.commit('rowSelectedChanged', e)
          },
          onClick: (s) => s.stopPropagation(),
          modelValue: l.isSelected(e),
          ariaLabel: t.label
        })
      },
      sortable: !1,
      resizable: !1
    },
    index: {
      renderHeader({ column: e }) {
        return e.label || '#'
      },
      renderCell({ column: e, $index: t }) {
        let l = t + 1
        const n = e.index
        return (
          typeof n == 'number'
            ? (l = t + n)
            : typeof n == 'function' && (l = n(t)),
          H('div', {}, [l])
        )
      },
      sortable: !1
    },
    expand: {
      renderHeader({ column: e }) {
        return e.label || ''
      },
      renderCell({ row: e, store: t, expanded: l }) {
        const { ns: n } = t,
          s = [n.e('expand-icon')]
        return (
          l && s.push(n.em('expand-icon', 'expanded')),
          H(
            'div',
            {
              class: s,
              onClick: function (a) {
                a.stopPropagation(), t.toggleRowExpansion(e)
              }
            },
            { default: () => [H(yt, null, { default: () => [H(ll)] })] }
          )
        )
      },
      sortable: !1,
      resizable: !1
    }
  }
function Mr({ row: e, column: t, $index: l }) {
  var n
  const s = t.property,
    i = s && wn(e, s).value
  return t && t.formatter
    ? t.formatter(e, t, i, l)
    : ((n = i == null ? void 0 : i.toString) == null ? void 0 : n.call(i)) || ''
}
function Or({ row: e, treeNode: t, store: l }, n = !1) {
  const { ns: s } = l
  if (!t) return n ? [H('span', { class: s.e('placeholder') })] : null
  const i = [],
    a = function (o) {
      o.stopPropagation(), !t.loading && l.loadOrToggle(e)
    }
  if (
    (t.indent &&
      i.push(
        H('span', {
          class: s.e('indent'),
          style: { 'padding-left': `${t.indent}px` }
        })
      ),
    typeof t.expanded == 'boolean' && !t.noLazyChildren)
  ) {
    const o = [
      s.e('expand-icon'),
      t.expanded ? s.em('expand-icon', 'expanded') : ''
    ]
    let r = ll
    t.loading && (r = Sn),
      i.push(
        H(
          'div',
          { class: o, onClick: a },
          {
            default: () => [
              H(
                yt,
                { class: { [s.is('loading')]: t.loading } },
                { default: () => [H(r)] }
              )
            ]
          }
        )
      )
  } else i.push(H('span', { class: s.e('placeholder') }))
  return i
}
function Kt(e, t) {
  return e.reduce((l, n) => ((l[n] = n), l), t)
}
function Tr(e, t) {
  const l = le()
  return {
    registerComplexWatchers: () => {
      const i = ['fixed'],
        a = { realWidth: 'width', realMinWidth: 'minWidth' },
        o = Kt(i, a)
      Object.keys(o).forEach((r) => {
        const u = a[r]
        Ie(t, u) &&
          re(
            () => t[u],
            (c) => {
              let f = c
              u === 'width' && r === 'realWidth' && (f = Ct(c)),
                u === 'minWidth' && r === 'realMinWidth' && (f = xl(c)),
                (l.columnConfig.value[u] = f),
                (l.columnConfig.value[r] = f)
              const h = u === 'fixed'
              e.value.store.scheduleLayout(h)
            }
          )
      })
    },
    registerNormalWatchers: () => {
      const i = [
          'label',
          'filters',
          'filterMultiple',
          'filteredValue',
          'sortable',
          'index',
          'formatter',
          'className',
          'labelClassName',
          'showOverflowTooltip'
        ],
        a = {
          property: 'prop',
          align: 'realAlign',
          headerAlign: 'realHeaderAlign'
        },
        o = Kt(i, a)
      Object.keys(o).forEach((r) => {
        const u = a[r]
        Ie(t, u) &&
          re(
            () => t[u],
            (c) => {
              l.columnConfig.value[r] = c
            }
          )
      })
    }
  }
}
function Fr(e, t, l) {
  const n = le(),
    s = R(''),
    i = R(!1),
    a = R(),
    o = R(),
    r = ae('table')
  He(() => {
    ;(a.value = e.align ? `is-${e.align}` : null), a.value
  }),
    He(() => {
      ;(o.value = e.headerAlign ? `is-${e.headerAlign}` : a.value), o.value
    })
  const u = I(() => {
      let d = n.vnode.vParent || n.parent
      for (; d && !d.tableId && !d.columnId; ) d = d.vnode.vParent || d.parent
      return d
    }),
    c = I(() => {
      const { store: d } = n.parent
      if (!d) return !1
      const { treeData: C } = d.states,
        w = C.value
      return w && Object.keys(w).length > 0
    }),
    f = R(Ct(e.width)),
    h = R(xl(e.minWidth)),
    g = (d) => (
      f.value && (d.width = f.value),
      h.value && (d.minWidth = h.value),
      !f.value && h.value && (d.width = void 0),
      d.minWidth || (d.minWidth = 80),
      (d.realWidth = Number(d.width === void 0 ? d.minWidth : d.width)),
      d
    ),
    p = (d) => {
      const C = d.type,
        w = Ar[C] || {}
      Object.keys(w).forEach((N) => {
        const M = w[N]
        N !== 'className' && M !== void 0 && (d[N] = M)
      })
      const y = Lr(C)
      if (y) {
        const N = `${F(r.namespace)}-${y}`
        d.className = d.className ? `${d.className} ${N}` : N
      }
      return d
    },
    S = (d) => {
      Array.isArray(d) ? d.forEach((w) => C(w)) : C(d)
      function C(w) {
        var y
        ;((y = w == null ? void 0 : w.type) == null ? void 0 : y.name) ===
          'ElTableColumn' && (w.vParent = n)
      }
    }
  return {
    columnId: s,
    realAlign: a,
    isSubColumn: i,
    realHeaderAlign: o,
    columnOrTableParent: u,
    setColumnWidth: g,
    setColumnForcedProps: p,
    setColumnRenders: (d) => {
      e.renderHeader ||
        (d.type !== 'selection' &&
          (d.renderHeader = (w) => {
            n.columnConfig.value.label
            const y = t.header
            return y ? y(w) : d.label
          }))
      let C = d.renderCell
      return (
        d.type === 'expand'
          ? ((d.renderCell = (w) => H('div', { class: 'cell' }, [C(w)])),
            (l.value.renderExpanded = (w) =>
              t.default ? t.default(w) : t.default))
          : ((C = C || Mr),
            (d.renderCell = (w) => {
              let y = null
              if (t.default) {
                const D = t.default(w)
                y = D.some((k) => k.type !== En) ? D : C(w)
              } else y = C(w)
              const { columns: N } = l.value.store.states,
                M = N.value.findIndex((D) => D.type === 'default'),
                K = c.value && w.cellIndex === M,
                B = Or(w, K),
                O = { class: 'cell', style: {} }
              return (
                d.showOverflowTooltip &&
                  ((O.class = `${O.class} ${F(r.namespace)}-tooltip`),
                  (O.style = {
                    width: `${
                      (w.column.realWidth || Number(w.column.width)) - 1
                    }px`
                  })),
                S(y),
                H('div', O, [B, y])
              )
            })),
        d
      )
    },
    getPropsData: (...d) =>
      d.reduce(
        (C, w) => (
          Array.isArray(w) &&
            w.forEach((y) => {
              C[y] = e[y]
            }),
          C
        ),
        {}
      ),
    getColumnElIndex: (d, C) => Array.prototype.indexOf.call(d, C),
    updateColumnOrder: () => {
      l.value.store.commit('updateColumnOrder', n.columnConfig.value)
    }
  }
}
var kr = {
  type: { type: String, default: 'default' },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  renderHeader: Function,
  sortable: { type: [Boolean, String], default: !1 },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: { type: Boolean, default: !0 },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: { type: [Boolean, Object], default: void 0 },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: { type: Boolean, default: !0 },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ['ascending', 'descending', null],
    validator: (e) =>
      e.every((t) => ['ascending', 'descending', null].includes(t))
  }
}
let $r = 1
var Fl = pe({
  name: 'ElTableColumn',
  components: { ElCheckbox: ke },
  props: kr,
  setup(e, { slots: t }) {
    const l = le(),
      n = R({}),
      s = I(() => {
        let E = l.parent
        for (; E && !E.tableId; ) E = E.parent
        return E
      }),
      { registerNormalWatchers: i, registerComplexWatchers: a } = Tr(s, e),
      {
        columnId: o,
        isSubColumn: r,
        realHeaderAlign: u,
        columnOrTableParent: c,
        setColumnWidth: f,
        setColumnForcedProps: h,
        setColumnRenders: g,
        getPropsData: p,
        getColumnElIndex: S,
        realAlign: m,
        updateColumnOrder: x
      } = Fr(e, t, s),
      v = c.value
    ;(o.value = `${v.tableId || v.columnId}_column_${$r++}`),
      el(() => {
        r.value = s.value !== v
        const E = e.type || 'default',
          d = e.sortable === '' ? !0 : e.sortable,
          C = xn(e.showOverflowTooltip)
            ? v.props.showOverflowTooltip
            : e.showOverflowTooltip,
          w = {
            ...Nr[E],
            id: o.value,
            type: E,
            property: e.prop || e.property,
            align: m,
            headerAlign: u,
            showOverflowTooltip: C,
            filterable: e.filters || e.filterMethod,
            filteredValue: [],
            filterPlacement: '',
            isColumnGroup: !1,
            isSubColumn: !1,
            filterOpened: !1,
            sortable: d,
            index: e.index,
            rawColumnKey: l.vnode.key
          }
        let B = p(
          [
            'columnKey',
            'label',
            'className',
            'labelClassName',
            'type',
            'renderHeader',
            'formatter',
            'fixed',
            'resizable'
          ],
          ['sortMethod', 'sortBy', 'sortOrders'],
          ['selectable', 'reserveSelection'],
          [
            'filterMethod',
            'filters',
            'filterMultiple',
            'filterOpened',
            'filteredValue',
            'filterPlacement'
          ]
        )
        ;(B = $s(w, B)), (B = Hs(g, f, h)(B)), (n.value = B), i(), a()
      }),
      We(() => {
        var E
        const d = c.value,
          C = r.value
            ? d.vnode.el.children
            : (E = d.refs.hiddenColumns) == null
            ? void 0
            : E.children,
          w = () => S(C || [], l.vnode.el)
        ;(n.value.getColumnIndex = w),
          w() > -1 &&
            s.value.store.commit(
              'insertColumn',
              n.value,
              r.value ? d.columnConfig.value : null,
              x
            )
      }),
      Rn(() => {
        s.value.store.commit(
          'removeColumn',
          n.value,
          r.value ? v.columnConfig.value : null,
          x
        )
      }),
      (l.columnId = o.value),
      (l.columnConfig = n)
  },
  render() {
    var e, t, l
    try {
      const n =
          (t = (e = this.$slots).default) == null
            ? void 0
            : t.call(e, { row: {}, column: {}, $index: -1 }),
        s = []
      if (Array.isArray(n))
        for (const a of n)
          ((l = a.type) == null ? void 0 : l.name) === 'ElTableColumn' ||
          a.shapeFlag & 2
            ? s.push(a)
            : a.type === tt &&
              Array.isArray(a.children) &&
              a.children.forEach((o) => {
                ;(o == null ? void 0 : o.patchFlag) !== 1024 &&
                  !Nn(o == null ? void 0 : o.children) &&
                  s.push(o)
              })
      return H('div', s)
    } catch {
      return H('div', [])
    }
  }
})
const Xr = Zt(xr, { TableColumn: Fl }),
  Zr = Ln(Fl)
export {
  Do as C,
  Zr as E,
  Yr as a,
  wo as b,
  Vr as c,
  Gr as d,
  Ue as e,
  qr as f,
  _o as g,
  Xr as h,
  qo as i,
  jr as j,
  Ft as t,
  Ur as u
}
