!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("URLHandler", [], e) : "object" == typeof exports ? exports.URLHandler = e() : t.URLHandler = e() }(window, (function () { return function (t) { var e = {}; function r (n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) { return t[e] }.bind(null, o)); return n }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return r.d(e, "a", e), e }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 0) }([function (t, e, r) { var n, o, i; "undefined" != typeof self && self, o = [], void 0 === (i = "function" == typeof (n = function () { "use strict"; function t (t) { const e = []; for (let r in t.query) e.push(r + "=" + encodeURIComponent(t.query[r])); return t.queries = e, t.queryString = e.join("&"), t.search = 0 === e.length ? "" : "?" + t.queryString, t.href = t.origin + t.pathname + t.search + t.hash, t } const e = function (t) { if ("string" != typeof t) throw new TypeError('"url" must be a string type.'); try { let e = t.split("//"); const r = e[0]; e = e[1].split("/"); const n = e.shift(), o = n.split(":")[0], i = n.split(":")[1] || ""; let s = "", u = "", f = ""; e = e.join("/").split("?"), e[1] ? (s = "/" + e[0], e = e[1].split("#"), u = "?" + e.shift()) : e[0] && (e = e[0].split("#"), s = "/" + e.shift()), e[0] && (f = "#" + e[0]); const c = u.substr(1), l = {}, p = []; return u && c.split("&").forEach(t => { p.push(t), l[t.split("=")[0]] = decodeURIComponent(t.split("=")[1]) }), { hash: f, search: u, host: n, hostname: o, pathname: s, protocol: r, port: i, href: t, origin: r + "//" + n, query: l, queries: p, queryString: c } } catch (t) { throw new Error("Invalid URL.") } }; return class { constructor(t, r = "") { const n = e(r + t); for (let t in n) this[t] = n[t]; return this } addQuery (e, r) { let n = e; "string" == typeof e && (n = { [e]: r }); for (let t in n) { const e = n[t]; null != e && (this.query[t.toString()] = "object" == typeof e ? JSON.stringify(e) : e.toString()) } return t(this) } removeQuery (e) { let r = []; return "string" == typeof e ? r = [e] : e instanceof Array && (r = e), r.forEach(t => { delete this.query[t] }), t(this) } setHash (t) { return null == t ? t = "" : 0 !== t.toString().indexOf("#") && (t = "#" + t), this.hash = t, this.href = this.origin + this.pathname + this.search + this.hash, this } toString () { return this.href } } }) ? n.apply(e, o) : n) || (t.exports = i) }]) }));
