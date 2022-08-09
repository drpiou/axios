var ht = Object.defineProperty;
var gt = (r, e, t) => e in r ? ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nr = (r, e, t) => (gt(r, typeof e != "symbol" ? e + "" : e, t), t);
import mr, { AxiosError as yt } from "axios";
var bt = Object.defineProperty, $t = (r, e, t) => e in r ? bt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Tt = (r, e, t) => ($t(r, typeof e != "symbol" ? e + "" : e, t), t), q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = typeof q == "object" && q && q.Object === Object && q, Ee = At, mt = Ee, St = typeof self == "object" && self && self.Object === Object && self, Ot = mt || St || Function("return this")(), g = Ot, wt = g, Ct = wt.Symbol, Sr = Ct, Fr = Sr, Pe = Object.prototype, xt = Pe.hasOwnProperty, Et = Pe.toString, R = Fr ? Fr.toStringTag : void 0;
function Pt(r) {
  var e = xt.call(r, R), t = r[R];
  try {
    r[R] = void 0;
    var a = !0;
  } catch {
  }
  var n = Et.call(r);
  return a && (e ? r[R] = t : delete r[R]), n;
}
var It = Pt, jt = Object.prototype, Rt = jt.toString;
function Mt(r) {
  return Rt.call(r);
}
var Dt = Mt, Lr = Sr, Nt = It, Ft = Dt, Lt = "[object Null]", Gt = "[object Undefined]", Gr = Lr ? Lr.toStringTag : void 0;
function Ut(r) {
  return r == null ? r === void 0 ? Gt : Lt : Gr && Gr in Object(r) ? Nt(r) : Ft(r);
}
var Or = Ut;
function Bt(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Ie = Bt, Ht = Or, Kt = Ie, qt = "[object AsyncFunction]", zt = "[object Function]", Wt = "[object GeneratorFunction]", Jt = "[object Proxy]";
function Xt(r) {
  if (!Kt(r))
    return !1;
  var e = Ht(r);
  return e == zt || e == Wt || e == qt || e == Jt;
}
var Yt = Xt, Zt = g, kt = Zt["__core-js_shared__"], Vt = kt, sr = Vt, Ur = function() {
  var r = /[^.]+$/.exec(sr && sr.keys && sr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Qt(r) {
  return !!Ur && Ur in r;
}
var ra = Qt, ea = Function.prototype, ta = ea.toString;
function aa(r) {
  if (r != null) {
    try {
      return ta.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var je = aa, na = Yt, sa = ra, ia = Ie, oa = je, ua = /[\\^$.*+?()[\]{}|]/g, ca = /^\[object .+?Constructor\]$/, fa = Function.prototype, la = Object.prototype, va = fa.toString, pa = la.hasOwnProperty, da = RegExp(
  "^" + va.call(pa).replace(ua, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _a(r) {
  if (!ia(r) || sa(r))
    return !1;
  var e = na(r) ? da : ca;
  return e.test(oa(r));
}
var ha = _a;
function ga(r, e) {
  return r == null ? void 0 : r[e];
}
var ya = ga, ba = ha, $a = ya;
function Ta(r, e) {
  var t = $a(r, e);
  return ba(t) ? t : void 0;
}
var S = Ta, Aa = S, ma = g, Sa = Aa(ma, "Map"), Oa = Sa, wa = S;
wa(Object, "create");
var Ca = S;
(function() {
  try {
    var r = Ca(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
})();
function xa(r) {
  return r != null && typeof r == "object";
}
var Re = xa, Ea = Or, Pa = Re, Ia = "[object Arguments]";
function ja(r) {
  return Pa(r) && Ea(r) == Ia;
}
var Ra = ja, Br = Ra, Ma = Re, Me = Object.prototype, Da = Me.hasOwnProperty, Na = Me.propertyIsEnumerable;
Br(function() {
  return arguments;
}());
var X = { exports: {} };
function Fa() {
  return !1;
}
var La = Fa;
(function(r, e) {
  var t = g, a = La, n = e && !e.nodeType && e, s = n && !0 && r && !r.nodeType && r, i = s && s.exports === n, o = i ? t.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || a;
  r.exports = u;
})(X, X.exports);
var D = { exports: {} };
(function(r, e) {
  var t = Ee, a = e && !e.nodeType && e, n = a && !0 && r && !r.nodeType && r, s = n && n.exports === a, i = s && t.process, o = function() {
    try {
      var c = n && n.require && n.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(D, D.exports);
var Hr = D.exports;
Hr && Hr.isTypedArray;
X.exports;
var cr = { exports: {} };
(function(r, e) {
  var t = g, a = e && !e.nodeType && e, n = a && !0 && r && !r.nodeType && r, s = n && n.exports === a, i = s ? t.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function c(u, p) {
    if (p)
      return u.slice();
    var v = u.length, f = o ? o(v) : new u.constructor(v);
    return u.copy(f), f;
  }
  r.exports = c;
})(cr, cr.exports);
var Ga = S, Ua = g, Ba = Ga(Ua, "DataView"), Ha = Ba, Ka = S, qa = g, za = Ka(qa, "Promise"), Wa = za, Ja = S, Xa = g, Ya = Ja(Xa, "Set"), Za = Ya, ka = S, Va = g, Qa = ka(Va, "WeakMap"), rn = Qa, fr = Ha, lr = Oa, vr = Wa, pr = Za, dr = rn, De = Or, w = je, Kr = "[object Map]", en = "[object Object]", qr = "[object Promise]", zr = "[object Set]", Wr = "[object WeakMap]", Jr = "[object DataView]", tn = w(fr), an = w(lr), nn = w(vr), sn = w(pr), on = w(dr), O = De;
(fr && O(new fr(new ArrayBuffer(1))) != Jr || lr && O(new lr()) != Kr || vr && O(vr.resolve()) != qr || pr && O(new pr()) != zr || dr && O(new dr()) != Wr) && (O = function(r) {
  var e = De(r), t = e == en ? r.constructor : void 0, a = t ? w(t) : "";
  if (a)
    switch (a) {
      case tn:
        return Jr;
      case an:
        return Kr;
      case nn:
        return qr;
      case sn:
        return zr;
      case on:
        return Wr;
    }
  return e;
});
var un = g;
un.Uint8Array;
var Xr = Sr, Yr = Xr ? Xr.prototype : void 0;
Yr && Yr.valueOf;
var Zr = D.exports;
Zr && Zr.isMap;
var kr = D.exports;
kr && kr.isSet;
cr.exports;
X.exports;
const k = (...r) => {
  console.log(...r);
};
var cn = Function.prototype, fn = cn.toString;
fn.call(Object);
const ln = (...r) => {
  k("\x1B[31m%s\x1B[0m", ...r);
}, vn = (...r) => {
  k("\x1B[36m%s\x1B[0m", ...r);
}, pn = (...r) => {
  k("\x1B[33m%s\x1B[0m", ...r);
}, dn = {
  active: !0,
  transform: (r) => typeof r == "object" ? JSON.parse(JSON.stringify(r)) : r
};
class _n {
  constructor(e) {
    Tt(this, "options"), this.options = { ...dn, ...e };
  }
  setActive(e) {
    this.options.active = e;
  }
  setTransform(e) {
    this.options.transform = e;
  }
  debug(e, t) {
    this.options.active && e(...t.map(this.options.transform));
  }
  log(...e) {
    this.debug(k, e);
  }
  info(...e) {
    this.debug(vn, e);
  }
  warn(...e) {
    this.debug(pn, e);
  }
  error(...e) {
    this.debug(ln, e);
  }
}
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hn(r, e) {
  for (var t = -1, a = r == null ? 0 : r.length, n = 0, s = []; ++t < a; ) {
    var i = r[t];
    e(i, t, r) && (s[n++] = i);
  }
  return s;
}
var Ne = hn;
function gn(r) {
  return function(e, t, a) {
    for (var n = -1, s = Object(e), i = a(e), o = i.length; o--; ) {
      var c = i[r ? o : ++n];
      if (t(s[c], c, s) === !1)
        break;
    }
    return e;
  };
}
var yn = gn, bn = yn, $n = bn(), Tn = $n;
function An(r, e) {
  for (var t = -1, a = Array(r); ++t < r; )
    a[t] = e(t);
  return a;
}
var mn = An, Sn = typeof z == "object" && z && z.Object === Object && z, Fe = Sn, On = Fe, wn = typeof self == "object" && self && self.Object === Object && self, Cn = On || wn || Function("return this")(), y = Cn, xn = y, En = xn.Symbol, V = En, Vr = V, Le = Object.prototype, Pn = Le.hasOwnProperty, In = Le.toString, M = Vr ? Vr.toStringTag : void 0;
function jn(r) {
  var e = Pn.call(r, M), t = r[M];
  try {
    r[M] = void 0;
    var a = !0;
  } catch {
  }
  var n = In.call(r);
  return a && (e ? r[M] = t : delete r[M]), n;
}
var Rn = jn, Mn = Object.prototype, Dn = Mn.toString;
function Nn(r) {
  return Dn.call(r);
}
var Fn = Nn, Qr = V, Ln = Rn, Gn = Fn, Un = "[object Null]", Bn = "[object Undefined]", re = Qr ? Qr.toStringTag : void 0;
function Hn(r) {
  return r == null ? r === void 0 ? Bn : Un : re && re in Object(r) ? Ln(r) : Gn(r);
}
var G = Hn;
function Kn(r) {
  return r != null && typeof r == "object";
}
var U = Kn, qn = G, zn = U, Wn = "[object Arguments]";
function Jn(r) {
  return zn(r) && qn(r) == Wn;
}
var Xn = Jn, ee = Xn, Yn = U, Ge = Object.prototype, Zn = Ge.hasOwnProperty, kn = Ge.propertyIsEnumerable, Vn = ee(function() {
  return arguments;
}()) ? ee : function(r) {
  return Yn(r) && Zn.call(r, "callee") && !kn.call(r, "callee");
}, Ue = Vn, Qn = Array.isArray, b = Qn, Y = { exports: {} };
function rs() {
  return !1;
}
var es = rs;
(function(r, e) {
  var t = y, a = es, n = e && !e.nodeType && e, s = n && !0 && r && !r.nodeType && r, i = s && s.exports === n, o = i ? t.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || a;
  r.exports = u;
})(Y, Y.exports);
var ts = 9007199254740991, as = /^(?:0|[1-9]\d*)$/;
function ns(r, e) {
  var t = typeof r;
  return e = e == null ? ts : e, !!e && (t == "number" || t != "symbol" && as.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var Be = ns, ss = 9007199254740991;
function is(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ss;
}
var wr = is, os = G, us = wr, cs = U, fs = "[object Arguments]", ls = "[object Array]", vs = "[object Boolean]", ps = "[object Date]", ds = "[object Error]", _s = "[object Function]", hs = "[object Map]", gs = "[object Number]", ys = "[object Object]", bs = "[object RegExp]", $s = "[object Set]", Ts = "[object String]", As = "[object WeakMap]", ms = "[object ArrayBuffer]", Ss = "[object DataView]", Os = "[object Float32Array]", ws = "[object Float64Array]", Cs = "[object Int8Array]", xs = "[object Int16Array]", Es = "[object Int32Array]", Ps = "[object Uint8Array]", Is = "[object Uint8ClampedArray]", js = "[object Uint16Array]", Rs = "[object Uint32Array]", l = {};
l[Os] = l[ws] = l[Cs] = l[xs] = l[Es] = l[Ps] = l[Is] = l[js] = l[Rs] = !0;
l[fs] = l[ls] = l[ms] = l[vs] = l[Ss] = l[ps] = l[ds] = l[_s] = l[hs] = l[gs] = l[ys] = l[bs] = l[$s] = l[Ts] = l[As] = !1;
function Ms(r) {
  return cs(r) && us(r.length) && !!l[os(r)];
}
var Ds = Ms;
function Ns(r) {
  return function(e) {
    return r(e);
  };
}
var Fs = Ns, _r = { exports: {} };
(function(r, e) {
  var t = Fe, a = e && !e.nodeType && e, n = a && !0 && r && !r.nodeType && r, s = n && n.exports === a, i = s && t.process, o = function() {
    try {
      var c = n && n.require && n.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(_r, _r.exports);
var Ls = Ds, Gs = Fs, te = _r.exports, ae = te && te.isTypedArray, Us = ae ? Gs(ae) : Ls, He = Us, Bs = mn, Hs = Ue, Ks = b, qs = Y.exports, zs = Be, Ws = He, Js = Object.prototype, Xs = Js.hasOwnProperty;
function Ys(r, e) {
  var t = Ks(r), a = !t && Hs(r), n = !t && !a && qs(r), s = !t && !a && !n && Ws(r), i = t || a || n || s, o = i ? Bs(r.length, String) : [], c = o.length;
  for (var u in r)
    (e || Xs.call(r, u)) && !(i && (u == "length" || n && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || zs(u, c))) && o.push(u);
  return o;
}
var Zs = Ys, ks = Object.prototype;
function Vs(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || ks;
  return r === t;
}
var Qs = Vs;
function ri(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var ei = ri, ti = ei, ai = ti(Object.keys, Object), ni = ai, si = Qs, ii = ni, oi = Object.prototype, ui = oi.hasOwnProperty;
function ci(r) {
  if (!si(r))
    return ii(r);
  var e = [];
  for (var t in Object(r))
    ui.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
var fi = ci;
function li(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Cr = li, vi = G, pi = Cr, di = "[object AsyncFunction]", _i = "[object Function]", hi = "[object GeneratorFunction]", gi = "[object Proxy]";
function yi(r) {
  if (!pi(r))
    return !1;
  var e = vi(r);
  return e == _i || e == hi || e == di || e == gi;
}
var Ke = yi, bi = Ke, $i = wr;
function Ti(r) {
  return r != null && $i(r.length) && !bi(r);
}
var qe = Ti, Ai = Zs, mi = fi, Si = qe;
function Oi(r) {
  return Si(r) ? Ai(r) : mi(r);
}
var xr = Oi, wi = Tn, Ci = xr;
function xi(r, e) {
  return r && wi(r, e, Ci);
}
var Ei = xi, Pi = qe;
function Ii(r, e) {
  return function(t, a) {
    if (t == null)
      return t;
    if (!Pi(t))
      return r(t, a);
    for (var n = t.length, s = e ? n : -1, i = Object(t); (e ? s-- : ++s < n) && a(i[s], s, i) !== !1; )
      ;
    return t;
  };
}
var ji = Ii, Ri = Ei, Mi = ji, Di = Mi(Ri), Ni = Di, Fi = Ni;
function Li(r, e) {
  var t = [];
  return Fi(r, function(a, n, s) {
    e(a, n, s) && t.push(a);
  }), t;
}
var Gi = Li;
function Ui() {
  this.__data__ = [], this.size = 0;
}
var Bi = Ui;
function Hi(r, e) {
  return r === e || r !== r && e !== e;
}
var ze = Hi, Ki = ze;
function qi(r, e) {
  for (var t = r.length; t--; )
    if (Ki(r[t][0], e))
      return t;
  return -1;
}
var Q = qi, zi = Q, Wi = Array.prototype, Ji = Wi.splice;
function Xi(r) {
  var e = this.__data__, t = zi(e, r);
  if (t < 0)
    return !1;
  var a = e.length - 1;
  return t == a ? e.pop() : Ji.call(e, t, 1), --this.size, !0;
}
var Yi = Xi, Zi = Q;
function ki(r) {
  var e = this.__data__, t = Zi(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var Vi = ki, Qi = Q;
function ro(r) {
  return Qi(this.__data__, r) > -1;
}
var eo = ro, to = Q;
function ao(r, e) {
  var t = this.__data__, a = to(t, r);
  return a < 0 ? (++this.size, t.push([r, e])) : t[a][1] = e, this;
}
var no = ao, so = Bi, io = Yi, oo = Vi, uo = eo, co = no;
function C(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
C.prototype.clear = so;
C.prototype.delete = io;
C.prototype.get = oo;
C.prototype.has = uo;
C.prototype.set = co;
var rr = C, fo = rr;
function lo() {
  this.__data__ = new fo(), this.size = 0;
}
var vo = lo;
function po(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
var _o = po;
function ho(r) {
  return this.__data__.get(r);
}
var go = ho;
function yo(r) {
  return this.__data__.has(r);
}
var bo = yo, $o = y, To = $o["__core-js_shared__"], Ao = To, ir = Ao, ne = function() {
  var r = /[^.]+$/.exec(ir && ir.keys && ir.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function mo(r) {
  return !!ne && ne in r;
}
var So = mo, Oo = Function.prototype, wo = Oo.toString;
function Co(r) {
  if (r != null) {
    try {
      return wo.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var We = Co, xo = Ke, Eo = So, Po = Cr, Io = We, jo = /[\\^$.*+?()[\]{}|]/g, Ro = /^\[object .+?Constructor\]$/, Mo = Function.prototype, Do = Object.prototype, No = Mo.toString, Fo = Do.hasOwnProperty, Lo = RegExp(
  "^" + No.call(Fo).replace(jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Go(r) {
  if (!Po(r) || Eo(r))
    return !1;
  var e = xo(r) ? Lo : Ro;
  return e.test(Io(r));
}
var Uo = Go;
function Bo(r, e) {
  return r == null ? void 0 : r[e];
}
var Ho = Bo, Ko = Uo, qo = Ho;
function zo(r, e) {
  var t = qo(r, e);
  return Ko(t) ? t : void 0;
}
var x = zo, Wo = x, Jo = y, Xo = Wo(Jo, "Map"), Er = Xo, Yo = x, Zo = Yo(Object, "create"), er = Zo, se = er;
function ko() {
  this.__data__ = se ? se(null) : {}, this.size = 0;
}
var Vo = ko;
function Qo(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var ru = Qo, eu = er, tu = "__lodash_hash_undefined__", au = Object.prototype, nu = au.hasOwnProperty;
function su(r) {
  var e = this.__data__;
  if (eu) {
    var t = e[r];
    return t === tu ? void 0 : t;
  }
  return nu.call(e, r) ? e[r] : void 0;
}
var iu = su, ou = er, uu = Object.prototype, cu = uu.hasOwnProperty;
function fu(r) {
  var e = this.__data__;
  return ou ? e[r] !== void 0 : cu.call(e, r);
}
var lu = fu, vu = er, pu = "__lodash_hash_undefined__";
function du(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = vu && e === void 0 ? pu : e, this;
}
var _u = du, hu = Vo, gu = ru, yu = iu, bu = lu, $u = _u;
function E(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = hu;
E.prototype.delete = gu;
E.prototype.get = yu;
E.prototype.has = bu;
E.prototype.set = $u;
var Tu = E, ie = Tu, Au = rr, mu = Er;
function Su() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (mu || Au)(),
    string: new ie()
  };
}
var Ou = Su;
function wu(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Cu = wu, xu = Cu;
function Eu(r, e) {
  var t = r.__data__;
  return xu(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var tr = Eu, Pu = tr;
function Iu(r) {
  var e = Pu(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var ju = Iu, Ru = tr;
function Mu(r) {
  return Ru(this, r).get(r);
}
var Du = Mu, Nu = tr;
function Fu(r) {
  return Nu(this, r).has(r);
}
var Lu = Fu, Gu = tr;
function Uu(r, e) {
  var t = Gu(this, r), a = t.size;
  return t.set(r, e), this.size += t.size == a ? 0 : 1, this;
}
var Bu = Uu, Hu = Ou, Ku = ju, qu = Du, zu = Lu, Wu = Bu;
function P(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Hu;
P.prototype.delete = Ku;
P.prototype.get = qu;
P.prototype.has = zu;
P.prototype.set = Wu;
var Pr = P, Ju = rr, Xu = Er, Yu = Pr, Zu = 200;
function ku(r, e) {
  var t = this.__data__;
  if (t instanceof Ju) {
    var a = t.__data__;
    if (!Xu || a.length < Zu - 1)
      return a.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new Yu(a);
  }
  return t.set(r, e), this.size = t.size, this;
}
var Vu = ku, Qu = rr, rc = vo, ec = _o, tc = go, ac = bo, nc = Vu;
function I(r) {
  var e = this.__data__ = new Qu(r);
  this.size = e.size;
}
I.prototype.clear = rc;
I.prototype.delete = ec;
I.prototype.get = tc;
I.prototype.has = ac;
I.prototype.set = nc;
var Je = I, sc = "__lodash_hash_undefined__";
function ic(r) {
  return this.__data__.set(r, sc), this;
}
var oc = ic;
function uc(r) {
  return this.__data__.has(r);
}
var cc = uc, fc = Pr, lc = oc, vc = cc;
function Z(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.__data__ = new fc(); ++e < t; )
    this.add(r[e]);
}
Z.prototype.add = Z.prototype.push = lc;
Z.prototype.has = vc;
var pc = Z;
function dc(r, e) {
  for (var t = -1, a = r == null ? 0 : r.length; ++t < a; )
    if (e(r[t], t, r))
      return !0;
  return !1;
}
var _c = dc;
function hc(r, e) {
  return r.has(e);
}
var gc = hc, yc = pc, bc = _c, $c = gc, Tc = 1, Ac = 2;
function mc(r, e, t, a, n, s) {
  var i = t & Tc, o = r.length, c = e.length;
  if (o != c && !(i && c > o))
    return !1;
  var u = s.get(r), p = s.get(e);
  if (u && p)
    return u == e && p == r;
  var v = -1, f = !0, h = t & Ac ? new yc() : void 0;
  for (s.set(r, e), s.set(e, r); ++v < o; ) {
    var d = r[v], _ = e[v];
    if (a)
      var $ = i ? a(_, d, v, e, r, s) : a(d, _, v, r, e, s);
    if ($ !== void 0) {
      if ($)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!bc(e, function(T, A) {
        if (!$c(h, A) && (d === T || n(d, T, t, a, s)))
          return h.push(A);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || n(d, _, t, a, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(r), s.delete(e), f;
}
var Xe = mc, Sc = y, Oc = Sc.Uint8Array, wc = Oc;
function Cc(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(a, n) {
    t[++e] = [n, a];
  }), t;
}
var xc = Cc;
function Ec(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(a) {
    t[++e] = a;
  }), t;
}
var Pc = Ec, oe = V, ue = wc, Ic = ze, jc = Xe, Rc = xc, Mc = Pc, Dc = 1, Nc = 2, Fc = "[object Boolean]", Lc = "[object Date]", Gc = "[object Error]", Uc = "[object Map]", Bc = "[object Number]", Hc = "[object RegExp]", Kc = "[object Set]", qc = "[object String]", zc = "[object Symbol]", Wc = "[object ArrayBuffer]", Jc = "[object DataView]", ce = oe ? oe.prototype : void 0, or = ce ? ce.valueOf : void 0;
function Xc(r, e, t, a, n, s, i) {
  switch (t) {
    case Jc:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case Wc:
      return !(r.byteLength != e.byteLength || !s(new ue(r), new ue(e)));
    case Fc:
    case Lc:
    case Bc:
      return Ic(+r, +e);
    case Gc:
      return r.name == e.name && r.message == e.message;
    case Hc:
    case qc:
      return r == e + "";
    case Uc:
      var o = Rc;
    case Kc:
      var c = a & Dc;
      if (o || (o = Mc), r.size != e.size && !c)
        return !1;
      var u = i.get(r);
      if (u)
        return u == e;
      a |= Nc, i.set(r, e);
      var p = jc(o(r), o(e), a, n, s, i);
      return i.delete(r), p;
    case zc:
      if (or)
        return or.call(r) == or.call(e);
  }
  return !1;
}
var Yc = Xc;
function Zc(r, e) {
  for (var t = -1, a = e.length, n = r.length; ++t < a; )
    r[n + t] = e[t];
  return r;
}
var kc = Zc, Vc = kc, Qc = b;
function rf(r, e, t) {
  var a = e(r);
  return Qc(r) ? a : Vc(a, t(r));
}
var ef = rf;
function tf() {
  return [];
}
var af = tf, nf = Ne, sf = af, of = Object.prototype, uf = of.propertyIsEnumerable, fe = Object.getOwnPropertySymbols, cf = fe ? function(r) {
  return r == null ? [] : (r = Object(r), nf(fe(r), function(e) {
    return uf.call(r, e);
  }));
} : sf, ff = cf, lf = ef, vf = ff, pf = xr;
function df(r) {
  return lf(r, pf, vf);
}
var _f = df, le = _f, hf = 1, gf = Object.prototype, yf = gf.hasOwnProperty;
function bf(r, e, t, a, n, s) {
  var i = t & hf, o = le(r), c = o.length, u = le(e), p = u.length;
  if (c != p && !i)
    return !1;
  for (var v = c; v--; ) {
    var f = o[v];
    if (!(i ? f in e : yf.call(e, f)))
      return !1;
  }
  var h = s.get(r), d = s.get(e);
  if (h && d)
    return h == e && d == r;
  var _ = !0;
  s.set(r, e), s.set(e, r);
  for (var $ = i; ++v < c; ) {
    f = o[v];
    var T = r[f], A = e[f];
    if (a)
      var Nr = i ? a(A, T, f, e, r, s) : a(T, A, f, r, e, s);
    if (!(Nr === void 0 ? T === A || n(T, A, t, a, s) : Nr)) {
      _ = !1;
      break;
    }
    $ || ($ = f == "constructor");
  }
  if (_ && !$) {
    var H = r.constructor, K = e.constructor;
    H != K && "constructor" in r && "constructor" in e && !(typeof H == "function" && H instanceof H && typeof K == "function" && K instanceof K) && (_ = !1);
  }
  return s.delete(r), s.delete(e), _;
}
var $f = bf, Tf = x, Af = y, mf = Tf(Af, "DataView"), Sf = mf, Of = x, wf = y, Cf = Of(wf, "Promise"), xf = Cf, Ef = x, Pf = y, If = Ef(Pf, "Set"), jf = If, Rf = x, Mf = y, Df = Rf(Mf, "WeakMap"), Nf = Df, hr = Sf, gr = Er, yr = xf, br = jf, $r = Nf, Ye = G, j = We, ve = "[object Map]", Ff = "[object Object]", pe = "[object Promise]", de = "[object Set]", _e = "[object WeakMap]", he = "[object DataView]", Lf = j(hr), Gf = j(gr), Uf = j(yr), Bf = j(br), Hf = j($r), m = Ye;
(hr && m(new hr(new ArrayBuffer(1))) != he || gr && m(new gr()) != ve || yr && m(yr.resolve()) != pe || br && m(new br()) != de || $r && m(new $r()) != _e) && (m = function(r) {
  var e = Ye(r), t = e == Ff ? r.constructor : void 0, a = t ? j(t) : "";
  if (a)
    switch (a) {
      case Lf:
        return he;
      case Gf:
        return ve;
      case Uf:
        return pe;
      case Bf:
        return de;
      case Hf:
        return _e;
    }
  return e;
});
var Kf = m, ur = Je, qf = Xe, zf = Yc, Wf = $f, ge = Kf, ye = b, be = Y.exports, Jf = He, Xf = 1, $e = "[object Arguments]", Te = "[object Array]", W = "[object Object]", Yf = Object.prototype, Ae = Yf.hasOwnProperty;
function Zf(r, e, t, a, n, s) {
  var i = ye(r), o = ye(e), c = i ? Te : ge(r), u = o ? Te : ge(e);
  c = c == $e ? W : c, u = u == $e ? W : u;
  var p = c == W, v = u == W, f = c == u;
  if (f && be(r)) {
    if (!be(e))
      return !1;
    i = !0, p = !1;
  }
  if (f && !p)
    return s || (s = new ur()), i || Jf(r) ? qf(r, e, t, a, n, s) : zf(r, e, c, t, a, n, s);
  if (!(t & Xf)) {
    var h = p && Ae.call(r, "__wrapped__"), d = v && Ae.call(e, "__wrapped__");
    if (h || d) {
      var _ = h ? r.value() : r, $ = d ? e.value() : e;
      return s || (s = new ur()), n(_, $, t, a, s);
    }
  }
  return f ? (s || (s = new ur()), Wf(r, e, t, a, n, s)) : !1;
}
var kf = Zf, Vf = kf, me = U;
function Ze(r, e, t, a, n) {
  return r === e ? !0 : r == null || e == null || !me(r) && !me(e) ? r !== r && e !== e : Vf(r, e, t, a, Ze, n);
}
var ke = Ze, Qf = Je, rl = ke, el = 1, tl = 2;
function al(r, e, t, a) {
  var n = t.length, s = n, i = !a;
  if (r == null)
    return !s;
  for (r = Object(r); n--; ) {
    var o = t[n];
    if (i && o[2] ? o[1] !== r[o[0]] : !(o[0] in r))
      return !1;
  }
  for (; ++n < s; ) {
    o = t[n];
    var c = o[0], u = r[c], p = o[1];
    if (i && o[2]) {
      if (u === void 0 && !(c in r))
        return !1;
    } else {
      var v = new Qf();
      if (a)
        var f = a(u, p, c, r, e, v);
      if (!(f === void 0 ? rl(p, u, el | tl, a, v) : f))
        return !1;
    }
  }
  return !0;
}
var nl = al, sl = Cr;
function il(r) {
  return r === r && !sl(r);
}
var Ve = il, ol = Ve, ul = xr;
function cl(r) {
  for (var e = ul(r), t = e.length; t--; ) {
    var a = e[t], n = r[a];
    e[t] = [a, n, ol(n)];
  }
  return e;
}
var fl = cl;
function ll(r, e) {
  return function(t) {
    return t == null ? !1 : t[r] === e && (e !== void 0 || r in Object(t));
  };
}
var Qe = ll, vl = nl, pl = fl, dl = Qe;
function _l(r) {
  var e = pl(r);
  return e.length == 1 && e[0][2] ? dl(e[0][0], e[0][1]) : function(t) {
    return t === r || vl(t, r, e);
  };
}
var hl = _l, gl = G, yl = U, bl = "[object Symbol]";
function $l(r) {
  return typeof r == "symbol" || yl(r) && gl(r) == bl;
}
var Ir = $l, Tl = b, Al = Ir, ml = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sl = /^\w*$/;
function Ol(r, e) {
  if (Tl(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || Al(r) ? !0 : Sl.test(r) || !ml.test(r) || e != null && r in Object(e);
}
var jr = Ol, rt = Pr, wl = "Expected a function";
function Rr(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(wl);
  var t = function() {
    var a = arguments, n = e ? e.apply(this, a) : a[0], s = t.cache;
    if (s.has(n))
      return s.get(n);
    var i = r.apply(this, a);
    return t.cache = s.set(n, i) || s, i;
  };
  return t.cache = new (Rr.Cache || rt)(), t;
}
Rr.Cache = rt;
var Cl = Rr, xl = Cl, El = 500;
function Pl(r) {
  var e = xl(r, function(a) {
    return t.size === El && t.clear(), a;
  }), t = e.cache;
  return e;
}
var Il = Pl, jl = Il, Rl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ml = /\\(\\)?/g, Dl = jl(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(Rl, function(t, a, n, s) {
    e.push(n ? s.replace(Ml, "$1") : a || t);
  }), e;
}), Nl = Dl;
function Fl(r, e) {
  for (var t = -1, a = r == null ? 0 : r.length, n = Array(a); ++t < a; )
    n[t] = e(r[t], t, r);
  return n;
}
var Ll = Fl, Se = V, Gl = Ll, Ul = b, Bl = Ir, Hl = 1 / 0, Oe = Se ? Se.prototype : void 0, we = Oe ? Oe.toString : void 0;
function et(r) {
  if (typeof r == "string")
    return r;
  if (Ul(r))
    return Gl(r, et) + "";
  if (Bl(r))
    return we ? we.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -Hl ? "-0" : e;
}
var Mr = et, Kl = Mr;
function ql(r) {
  return r == null ? "" : Kl(r);
}
var Dr = ql, zl = b, Wl = jr, Jl = Nl, Xl = Dr;
function Yl(r, e) {
  return zl(r) ? r : Wl(r, e) ? [r] : Jl(Xl(r));
}
var tt = Yl, Zl = Ir, kl = 1 / 0;
function Vl(r) {
  if (typeof r == "string" || Zl(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -kl ? "-0" : e;
}
var ar = Vl, Ql = tt, rv = ar;
function ev(r, e) {
  e = Ql(e, r);
  for (var t = 0, a = e.length; r != null && t < a; )
    r = r[rv(e[t++])];
  return t && t == a ? r : void 0;
}
var at = ev, tv = at;
function av(r, e, t) {
  var a = r == null ? void 0 : tv(r, e);
  return a === void 0 ? t : a;
}
var nv = av;
function sv(r, e) {
  return r != null && e in Object(r);
}
var iv = sv, ov = tt, uv = Ue, cv = b, fv = Be, lv = wr, vv = ar;
function pv(r, e, t) {
  e = ov(e, r);
  for (var a = -1, n = e.length, s = !1; ++a < n; ) {
    var i = vv(e[a]);
    if (!(s = r != null && t(r, i)))
      break;
    r = r[i];
  }
  return s || ++a != n ? s : (n = r == null ? 0 : r.length, !!n && lv(n) && fv(i, n) && (cv(r) || uv(r)));
}
var dv = pv, _v = iv, hv = dv;
function gv(r, e) {
  return r != null && hv(r, e, _v);
}
var yv = gv, bv = ke, $v = nv, Tv = yv, Av = jr, mv = Ve, Sv = Qe, Ov = ar, wv = 1, Cv = 2;
function xv(r, e) {
  return Av(r) && mv(e) ? Sv(Ov(r), e) : function(t) {
    var a = $v(t, r);
    return a === void 0 && a === e ? Tv(t, r) : bv(e, a, wv | Cv);
  };
}
var Ev = xv;
function Pv(r) {
  return r;
}
var Iv = Pv;
function jv(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}
var Rv = jv, Mv = at;
function Dv(r) {
  return function(e) {
    return Mv(e, r);
  };
}
var Nv = Dv, Fv = Rv, Lv = Nv, Gv = jr, Uv = ar;
function Bv(r) {
  return Gv(r) ? Fv(Uv(r)) : Lv(r);
}
var Hv = Bv, Kv = hl, qv = Ev, zv = Iv, Wv = b, Jv = Hv;
function Xv(r) {
  return typeof r == "function" ? r : r == null ? zv : typeof r == "object" ? Wv(r) ? qv(r[0], r[1]) : Kv(r) : Jv(r);
}
var Yv = Xv, Zv = Ne, kv = Gi, Vv = Yv, Qv = b;
function rp(r, e) {
  var t = Qv(r) ? Zv : kv;
  return t(r, Vv(e));
}
var ep = rp;
function tp(r, e, t) {
  var a = -1, n = r.length;
  e < 0 && (e = -e > n ? 0 : n + e), t = t > n ? n : t, t < 0 && (t += n), n = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(n); ++a < n; )
    s[a] = r[a + e];
  return s;
}
var ap = tp, np = ap;
function sp(r, e, t) {
  var a = r.length;
  return t = t === void 0 ? a : t, !e && t >= a ? r : np(r, e, t);
}
var nt = sp;
function ip(r, e, t, a) {
  for (var n = r.length, s = t + (a ? 1 : -1); a ? s-- : ++s < n; )
    if (e(r[s], s, r))
      return s;
  return -1;
}
var op = ip;
function up(r) {
  return r !== r;
}
var cp = up;
function fp(r, e, t) {
  for (var a = t - 1, n = r.length; ++a < n; )
    if (r[a] === e)
      return a;
  return -1;
}
var lp = fp, vp = op, pp = cp, dp = lp;
function _p(r, e, t) {
  return e === e ? dp(r, e, t) : vp(r, pp, t);
}
var st = _p, hp = st;
function gp(r, e) {
  for (var t = r.length; t-- && hp(e, r[t], 0) > -1; )
    ;
  return t;
}
var yp = gp;
function bp(r) {
  return r.split("");
}
var $p = bp, Tp = "\\ud800-\\udfff", Ap = "\\u0300-\\u036f", mp = "\\ufe20-\\ufe2f", Sp = "\\u20d0-\\u20ff", Op = Ap + mp + Sp, wp = "\\ufe0e\\ufe0f", Cp = "\\u200d", xp = RegExp("[" + Cp + Tp + Op + wp + "]");
function Ep(r) {
  return xp.test(r);
}
var Pp = Ep, it = "\\ud800-\\udfff", Ip = "\\u0300-\\u036f", jp = "\\ufe20-\\ufe2f", Rp = "\\u20d0-\\u20ff", Mp = Ip + jp + Rp, Dp = "\\ufe0e\\ufe0f", Np = "[" + it + "]", Tr = "[" + Mp + "]", Ar = "\\ud83c[\\udffb-\\udfff]", Fp = "(?:" + Tr + "|" + Ar + ")", ot = "[^" + it + "]", ut = "(?:\\ud83c[\\udde6-\\uddff]){2}", ct = "[\\ud800-\\udbff][\\udc00-\\udfff]", Lp = "\\u200d", ft = Fp + "?", lt = "[" + Dp + "]?", Gp = "(?:" + Lp + "(?:" + [ot, ut, ct].join("|") + ")" + lt + ft + ")*", Up = lt + ft + Gp, Bp = "(?:" + [ot + Tr + "?", Tr, ut, ct, Np].join("|") + ")", Hp = RegExp(Ar + "(?=" + Ar + ")|" + Bp + Up, "g");
function Kp(r) {
  return r.match(Hp) || [];
}
var qp = Kp, zp = $p, Wp = Pp, Jp = qp;
function Xp(r) {
  return Wp(r) ? Jp(r) : zp(r);
}
var vt = Xp, Yp = /\s/;
function Zp(r) {
  for (var e = r.length; e-- && Yp.test(r.charAt(e)); )
    ;
  return e;
}
var kp = Zp, Vp = Mr, Qp = nt, rd = yp, Ce = vt, ed = Dr, td = kp;
function ad(r, e, t) {
  if (r = ed(r), r && (t || e === void 0))
    return r.slice(0, td(r) + 1);
  if (!r || !(e = Vp(e)))
    return r;
  var a = Ce(r), n = rd(a, Ce(e)) + 1;
  return Qp(a, 0, n).join("");
}
var nd = ad, sd = st;
function id(r, e) {
  for (var t = -1, a = r.length; ++t < a && sd(e, r[t], 0) > -1; )
    ;
  return t;
}
var od = id, ud = Mr, cd = nt, fd = od, xe = vt, ld = Dr, vd = /^\s+/;
function pd(r, e, t) {
  if (r = ld(r), r && (t || e === void 0))
    return r.replace(vd, "");
  if (!r || !(e = ud(e)))
    return r;
  var a = xe(r), n = fd(a, xe(e));
  return cd(a, n).join("");
}
var dd = pd;
class _d extends yt {
  constructor() {
    super(...arguments);
    nr(this, "__CANCEL__");
    nr(this, "__NETWORK_ERROR__");
  }
}
const B = "none", pt = 200, hd = {
  abort: !1,
  axios: mr,
  log: B,
  test: !1,
  testCancel: !1,
  testNetworkError: !1,
  testSleep: 0,
  testStatus: pt
}, N = new _n(), md = (r, e) => {
  const t = { ...hd, ...e };
  return ["verbose"].includes(t.log || B) && N.log(F("axios:prepare", t), L(r), { config: r, options: t }), t.test ? gd(r, t) : yd(r, t);
}, gd = (r, e) => {
  const t = {
    current: () => {
    }
  };
  return {
    start: (n) => {
      const s = { ...e, ...n, testSignal: t }, i = dt(r, s);
      return s.abort && t.current(), i;
    },
    abort: () => {
      t.current();
    }
  };
}, yd = (r, e) => {
  const t = new AbortController();
  return {
    start: (n) => {
      const s = { ...e, ...n }, i = dt({ ...r, signal: t.signal }, s);
      return s.abort && t.abort(), i;
    },
    abort: () => {
      t.abort();
    }
  };
}, dt = async (r, e) => {
  const t = Date.now();
  return ["verbose", "info"].includes(e.log || B) && N.log(F("axios:start", e), L(r), { config: r, options: e, startTime: t }), e.test ? bd(r, e) : $d(r, e);
}, bd = async (r, e) => {
  var i;
  const t = Date.now(), a = {
    data: e.testData,
    status: (i = e.testStatus) != null ? i : pt,
    statusText: "test",
    headers: {},
    config: r
  };
  let n = !1;
  e.testSleep && e.testCancel !== !0 && await new Promise((o) => {
    const c = () => {
      e.testSignal.current = () => {
      }, o();
    }, u = setTimeout(c, e.testSleep);
    e.testSignal.current = () => {
      n = !0, clearTimeout(u), c();
    };
  });
  const s = new _d("Test", "TEST", r, null, a);
  return e.testCancel || n ? (s.__CANCEL__ = !0, J(s, r, e, t)) : e.testNetworkError ? (s.__NETWORK_ERROR__ = !0, J(s, r, e, t)) : a.status < 200 || a.status >= 300 ? J(s, r, e, t) : _t(a, r, e, t);
}, $d = async (r, e) => {
  var n;
  const t = Date.now();
  let a;
  try {
    a = await ((n = e.axios) != null ? n : mr)(r);
  } catch (s) {
    return J(s, r, e, t);
  }
  return _t(a, r, e, t);
}, _t = (r, e, t, a) => {
  const n = Date.now(), s = {
    data: r.data,
    elapsedTime: n - a,
    isError: !1,
    response: r
  };
  return ["verbose", "info", "success", "response"].includes(t.log || B) && N.info(F("axios:success", t), L(e), { response: s, options: t, endTime: n }), s;
}, J = async (r, e, t, a) => {
  var h, d, _;
  const n = Date.now(), s = "code" in r, i = "response" in r, o = ((h = t.axios) != null ? h : mr).isCancel(r), c = s && r.code === "ERR_NETWORK", u = s && r.code === "ECONNABORTED", p = i || o || c || u, v = t.test ? i && r.__NETWORK_ERROR__ !== void 0 ? !r.__NETWORK_ERROR__ : void 0 : await ((d = t.isNetworkConnected) == null ? void 0 : d.call(t)), f = {
    data: i ? (_ = r.response) == null ? void 0 : _.data : void 0,
    elapsedTime: n - a,
    error: r,
    isAxiosError: p,
    isCancel: o,
    isError: !0,
    isConnexionError: c || u,
    isConnexionTimeoutError: u,
    isNetworkError: v === void 0 ? void 0 : !v,
    response: i ? r.response : void 0
  };
  return ["verbose", "info", "error", "response"].includes(t.log || B) && (i ? N.error(F("axios:error", t), L(e), { response: f, options: t, endTime: n }) : N.error(F("axios:error", t), L(e), { config: e, options: t, endTime: n })), f;
}, F = (r, e) => `${r}${e.test ? ":test" : ""}`, L = (r) => ep([nd(r.baseURL, "/"), dd(r.url, "/")]).join("/") || void 0;
export {
  md as prepareAxios
};
