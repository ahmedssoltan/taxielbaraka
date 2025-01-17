(function() {
    'use strict';
    var q;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var r = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var t = ba(this);

    function u(a, b) {
        if (b) a: {
            var c = t;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var g = a[d];
                if (!(g in c)) break a;
                c = c[g]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && r(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    u("Symbol", function(a) {
        function b(k) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (k || "") + "_" + g++, k)
        }

        function c(k, e) {
            this.g = k;
            r(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            g = 0;
        return b
    });
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = t[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && r(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });

    function ea(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function v(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var fa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        w;
    if (typeof Object.setPrototypeOf == "function") w = Object.setPrototypeOf;
    else {
        var x;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                x = ia.a;
                break a
            } catch (a) {}
            x = !1
        }
        w = x ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = w;

    function y() {
        this.j = !1;
        this.h = null;
        this.m = void 0;
        this.g = 1;
        this.A = this.l = 0;
        this.i = null
    }

    function z(a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0
    }
    y.prototype.s = function(a) {
        this.m = a
    };

    function B(a, b) {
        a.i = {
            P: b,
            R: !0
        };
        a.g = a.l || a.A
    }
    y.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.A
    };

    function C(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }

    function ka(a) {
        this.g = new y;
        this.h = a
    }

    function la(a, b) {
        z(a.g);
        var c = a.g.h;
        if (c) return ma(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return D(a)
    }

    function ma(a, b, c, d) {
        try {
            var g = b.call(a.g.h, c);
            if (!(g instanceof Object)) throw new TypeError("Iterator result " + g + " is not an object");
            if (!g.done) return a.g.j = !1, g;
            var k = g.value
        } catch (e) {
            return a.g.h = null, B(a.g, e), D(a)
        }
        a.g.h = null;
        d.call(a.g, k);
        return D(a)
    }

    function D(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.j = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.m = void 0, B(a.g, c)
        }
        a.g.j = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.R) throw b.P;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function na(a) {
        this.next = function(b) {
            z(a.g);
            a.g.h ? b = ma(a, a.g.h.next, b, a.g.s) : (a.g.s(b), b = D(a));
            return b
        };
        this.throw = function(b) {
            z(a.g);
            a.g.h ? b = ma(a, a.g.h["throw"], b, a.g.s) : (B(a.g, b), b = D(a));
            return b
        };
        this.return = function(b) {
            return la(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function oa(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, g) {
            function k(e) {
                e.done ? d(e.value) : Promise.resolve(e.value).then(b, c).then(k, g)
            }
            k(a.next())
        })
    }

    function pa(a) {
        return oa(new na(new ka(a)))
    }
    u("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.s = !1;
            var f = this.j();
            try {
                e(f.resolve, f.reject)
            } catch (h) {
                f.reject(h)
            }
        }

        function c() {
            this.g = null
        }

        function d(e) {
            return e instanceof b ? e : new b(function(f) {
                f(e)
            })
        }
        if (a) return a;
        c.prototype.h = function(e) {
            if (this.g == null) {
                this.g = [];
                var f = this;
                this.i(function() {
                    f.l()
                })
            }
            this.g.push(e)
        };
        var g = t.setTimeout;
        c.prototype.i = function(e) {
            g(e, 0)
        };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var e = this.g;
                this.g = [];
                for (var f = 0; f < e.length; ++f) {
                    var h = e[f];
                    e[f] = null;
                    try {
                        h()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(e) {
            this.i(function() {
                throw e;
            })
        };
        b.prototype.j = function() {
            function e(l) {
                return function(m) {
                    h || (h = !0, l.call(f, m))
                }
            }
            var f = this,
                h = !1;
            return {
                resolve: e(this.K),
                reject: e(this.l)
            }
        };
        b.prototype.K = function(e) {
            if (e === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.M(e);
            else {
                a: switch (typeof e) {
                    case "object":
                        var f = e != null;
                        break a;
                    case "function":
                        f = !0;
                        break a;
                    default:
                        f = !1
                }
                f ? this.J(e) : this.m(e)
            }
        };
        b.prototype.J = function(e) {
            var f = void 0;
            try {
                f = e.then
            } catch (h) {
                this.l(h);
                return
            }
            typeof f == "function" ? this.N(f, e) : this.m(e)
        };
        b.prototype.l = function(e) {
            this.A(2, e)
        };
        b.prototype.m = function(e) {
            this.A(1, e)
        };
        b.prototype.A = function(e, f) {
            if (this.h != 0) throw Error("Cannot settle(" + e + ", " + f + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = f;
            this.h === 2 && this.L();
            this.T()
        };
        b.prototype.L = function() {
            var e = this;
            g(function() {
                if (e.U()) {
                    var f = t.console;
                    typeof f !== "undefined" && f.error(e.i)
                }
            }, 1)
        };
        b.prototype.U = function() {
            if (this.s) return !1;
            var e = t.CustomEvent,
                f = t.Event,
                h = t.dispatchEvent;
            if (typeof h === "undefined") return !0;
            typeof e === "function" ? e = new e("unhandledrejection", {
                cancelable: !0
            }) : typeof f === "function" ? e = new f("unhandledrejection", {
                cancelable: !0
            }) : (e = t.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
            e.promise = this;
            e.reason = this.i;
            return h(e)
        };
        b.prototype.T = function() {
            if (this.g != null) {
                for (var e = 0; e < this.g.length; ++e) k.h(this.g[e]);
                this.g = null
            }
        };
        var k = new c;
        b.prototype.M = function(e) {
            var f = this.j();
            e.B(f.resolve, f.reject)
        };
        b.prototype.N = function(e, f) {
            var h = this.j();
            try {
                e.call(f, h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        b.prototype.then = function(e, f) {
            function h(p, A) {
                return typeof p == "function" ? function(ca) {
                    try {
                        l(p(ca))
                    } catch (da) {
                        m(da)
                    }
                } : A
            }
            var l, m, n = new b(function(p, A) {
                l = p;
                m = A
            });
            this.B(h(e, l), h(f, m));
            return n
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.B = function(e, f) {
            function h() {
                switch (l.h) {
                    case 1:
                        e(l.i);
                        break;
                    case 2:
                        f(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            this.g == null ? k.h(h) : this.g.push(h);
            this.s = !0
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(f, h) {
                h(e)
            })
        };
        b.race = function(e) {
            return new b(function(f, h) {
                for (var l = v(e), m = l.next(); !m.done; m = l.next()) d(m.value).B(f, h)
            })
        };
        b.all = function(e) {
            var f = v(e),
                h = f.next();
            return h.done ? d([]) : new b(function(l, m) {
                function n(ca) {
                    return function(da) {
                        p[ca] = da;
                        A--;
                        A == 0 && l(p)
                    }
                }
                var p = [],
                    A = 0;
                do p.push(void 0), A++, d(h.value).B(n(p.length - 1), m), h = f.next(); while (!h.done)
            })
        };
        return b
    });

    function E(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var qa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var g in d) E(d, g) && (a[g] = d[g])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || qa
    });
    u("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    u("WeakMap", function(a) {
        function b(h) {
            this.g = (f += Math.random() + 1).toString();
            if (h) {
                h = v(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(h) {
            var l = typeof h;
            return l === "object" && h !== null || l === "function"
        }

        function g(h) {
            if (!E(h, e)) {
                var l = new c;
                r(h, e, {
                    value: l
                })
            }
        }

        function k(h) {
            var l = Object[h];
            l && (Object[h] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && g(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [h, 2],
                            [l, 3]
                        ]);
                    if (m.get(h) != 2 || m.get(l) != 3) return !1;
                    m.delete(h);
                    m.set(l, 4);
                    return !m.has(h) && m.get(l) == 4
                } catch (n) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random();
        k("freeze");
        k("preventExtensions");
        k("seal");
        var f = 0;
        b.prototype.set = function(h, l) {
            if (!d(h)) throw Error("Invalid WeakMap key");
            g(h);
            if (!E(h, e)) throw Error("WeakMap key fail: " + h);
            h[e][this.g] = l;
            return this
        };
        b.prototype.get = function(h) {
            return d(h) && E(h, e) ? h[e][this.g] : void 0
        };
        b.prototype.has = function(h) {
            return d(h) && E(h, e) && E(h[e], this.g)
        };
        b.prototype.delete = function(h) {
            return d(h) && E(h, e) && E(h[e], this.g) ? delete h[e][this.g] : !1
        };
        return b
    });
    u("Map", function(a) {
        function b() {
            var f = {};
            return f.previous = f.next = f.head = f
        }

        function c(f, h) {
            var l = f[1];
            return ea(function() {
                if (l) {
                    for (; l.head != f[1];) l = l.previous;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: h(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(f, h) {
            var l = h && typeof h;
            l == "object" || l == "function" ? k.has(h) ? l = k.get(h) : (l = "" + ++e, k.set(h, l)) : l = "p_" + h;
            var m = f[0][l];
            if (m && E(f[0], l))
                for (f = 0; f < m.length; f++) {
                    var n = m[f];
                    if (h !== h && n.key !== n.key || h === n.key) return {
                        id: l,
                        list: m,
                        index: f,
                        o: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                o: void 0
            }
        }

        function g(f) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (f) {
                f = v(f);
                for (var h; !(h = f.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var f = Object.seal({
                            x: 4
                        }),
                        h = new a(v([
                            [f, "s"]
                        ]));
                    if (h.get(f) != "s" || h.size != 1 || h.get({
                            x: 4
                        }) || h.set({
                            x: 4
                        }, "t") != h || h.size != 2) return !1;
                    var l = h.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != f || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var k = new WeakMap;
        g.prototype.set = function(f, h) {
            f = f === 0 ? 0 : f;
            var l = d(this, f);
            l.list || (l.list = this[0][l.id] = []);
            l.o ? l.o.value = h : (l.o = {
                next: this[1],
                previous: this[1].previous,
                head: this[1],
                key: f,
                value: h
            }, l.list.push(l.o), this[1].previous.next = l.o, this[1].previous = l.o, this.size++);
            return this
        };
        g.prototype.delete = function(f) {
            f = d(this, f);
            return f.o && f.list ? (f.list.splice(f.index, 1), f.list.length || delete this[0][f.id], f.o.previous.next = f.o.next, f.o.next.previous = f.o.previous, f.o.head = null, this.size--, !0) : !1
        };
        g.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].previous = b();
            this.size = 0
        };
        g.prototype.has = function(f) {
            return !!d(this, f).o
        };
        g.prototype.get = function(f) {
            return (f = d(this, f).o) && f.value
        };
        g.prototype.entries = function() {
            return c(this, function(f) {
                return [f.key, f.value]
            })
        };
        g.prototype.keys = function() {
            return c(this, function(f) {
                return f.key
            })
        };
        g.prototype.values = function() {
            return c(this, function(f) {
                return f.value
            })
        };
        g.prototype.forEach = function(f, h) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, f.call(h, m[1], m[0], this)
        };
        g.prototype[Symbol.iterator] = g.prototype.entries;
        var e = 0;
        return g
    });
    u("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var g = d.entries(),
                        k = g.next();
                    if (k.done || k.value[0] != c || k.value[1] != c) return !1;
                    k = g.next();
                    return k.done || k.value[0] == c || k.value[0].x != 4 || k.value[1] != k.value[0] ? !1 : g.next().done
                } catch (e) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var g = this;
            this.g.forEach(function(k) {
                return c.call(d, k, k, g)
            })
        };
        return b
    });
    u("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var g = d.length, k = 0; k < g; k++) {
                    var e = d[k];
                    if (b.call(c, e, k, d)) {
                        b = e;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    u("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(f) {
                return f
            };
            var g = [],
                k = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof k == "function") {
                b = k.call(b);
                for (var e = 0; !(k = b.next()).done;) g.push(c.call(d, k.value, e++))
            } else
                for (k = b.length, e = 0; e < k; e++) g.push(c.call(d, b[e], e));
            return g
        }
    });
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var g = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + g, 0)); c < g; c++) {
                var k = d[c];
                if (k === b || Object.is(k, b)) return !0
            }
            return !1
        }
    });
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (this == null) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return (this + "").indexOf(b, c || 0) !== -1
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var F = this || self;

    function G(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ra(a) {
        return Object.prototype.hasOwnProperty.call(a, sa) && a[sa] || (a[sa] = ++ta)
    }
    var sa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        ta = 0;

    function H(a, b) {
        a = a.split(".");
        var c = F;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ua(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.I = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Z = function(d, g, k) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
            return b.prototype[g].apply(d, e)
        }
    };
    var va = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        wa = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = typeof a === "string" ? a.split("") : a, k = 0; k < d; k++) k in g && b.call(c, g[k], k, a)
        };

    function xa(a, b) {
        b = va(a, b);
        b >= 0 && Array.prototype.splice.call(a, b, 1)
    }

    function ya(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function za(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Aa(a, b) {
        this.i = a;
        this.j = b;
        this.h = 0;
        this.g = null
    }
    Aa.prototype.get = function() {
        if (this.h > 0) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.i();
        return a
    };
    var Ba;

    function Ca() {
        if (typeof MessageChannel !== "undefined") {
            var a = new MessageChannel,
                b = {},
                c = b;
            a.port1.onmessage = function() {
                if (b.next !== void 0) {
                    b = b.next;
                    var d = b.F;
                    b.F = null;
                    d()
                }
            };
            return function(d) {
                c.next = {
                    F: d
                };
                c = c.next;
                a.port2.postMessage(0)
            }
        }
        return function(d) {
            F.setTimeout(d, 0)
        }
    };

    function Da(a) {
        F.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Ea() {
        this.h = this.g = null
    }
    Ea.prototype.add = function(a, b) {
        var c = Fa.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    Ea.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var Fa = new Aa(function() {
        return new Ga
    }, function(a) {
        return a.reset()
    });

    function Ga() {
        this.next = this.scope = this.g = null
    }
    Ga.prototype.set = function(a, b) {
        this.g = a;
        this.scope = b;
        this.next = null
    };
    Ga.prototype.reset = function() {
        this.next = this.scope = this.g = null
    };
    var I, Ha = !1,
        Ia = new Ea;

    function Ja(a) {
        I || Ka();
        Ha || (I(), Ha = !0);
        Ia.add(a, void 0)
    }

    function Ka() {
        if (F.Promise && F.Promise.resolve) {
            var a = F.Promise.resolve(void 0);
            I = function() {
                a.then(La)
            }
        } else I = function() {
            var b = La;
            Ba || (Ba = Ca());
            Ba(b)
        }
    }

    function La() {
        for (var a; a = Ia.remove();) {
            try {
                a.g.call(a.scope)
            } catch (c) {
                Da(c)
            }
            var b = Fa;
            b.j(a);
            b.h < 100 && (b.h++, a.next = b.g, b.g = a)
        }
        Ha = !1
    };

    function J() {
        this.i = this.i;
        this.j = this.j
    }
    J.prototype.i = !1;
    J.prototype.dispose = function() {
        this.i || (this.i = !0, this.C())
    };
    J.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    J.prototype.addOnDisposeCallback = function(a, b) {
        this.i ? b !== void 0 ? a.call(b) : a() : (this.j || (this.j = []), b && (a = a.bind(b)), this.j.push(a))
    };
    J.prototype.C = function() {
        if (this.j)
            for (; this.j.length;) this.j.shift()()
    };
    var Ma = /&/g,
        Na = /</g,
        Oa = />/g,
        Pa = /"/g,
        Qa = /'/g,
        Ra = /\x00/g,
        Sa = /[\x00&<>"']/;
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    function K(a) {
        this.g = a
    }
    K.prototype.toString = function() {
        return this.g
    };
    var Ta = new K("about:invalid#zClosurez");

    function Ua(a) {
        this.S = a
    }

    function L(a) {
        return new Ua(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Va = [L("data"), L("http"), L("https"), L("mailto"), L("ftp"), new Ua(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Wa(a) {
        var b = b === void 0 ? Va : b;
        a: if (b = b === void 0 ? Va : b, !(a instanceof K)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof Ua && d.S(a)) {
                    a = new K(a);
                    break a
                }
            }
            a = void 0
        }
        return a || Ta
    }
    var Xa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var Ya = {
        Y: 0,
        W: 1,
        X: 2,
        0: "FORMATTED_HTML_CONTENT",
        1: "EMBEDDED_INTERNAL_CONTENT",
        2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
    };

    function M(a, b) {
        b = Error.call(this, a + " cannot be used with intent " + Ya[b]);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.type = a;
        this.name = "TypeCannotBeUsedWithIntentError"
    }
    var N = Error;
    M.prototype = fa(N.prototype);
    M.prototype.constructor = M;
    if (ja) ja(M, N);
    else
        for (var O in N)
            if (O != "prototype")
                if (Object.defineProperties) {
                    var Za = Object.getOwnPropertyDescriptor(N, O);
                    Za && Object.defineProperty(M, O, Za)
                } else M[O] = N[O];
    M.I = N.prototype;

    function $a(a, b) {
        a.removeAttribute("srcdoc");
        var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
        a.setAttribute("sandbox", "");
        for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
        if (b instanceof K)
            if (b instanceof K) b = b.g;
            else throw Error("");
        else b = Xa.test(b) ? b : void 0;
        b !== void 0 && (a.src = b)
    };

    function ab(a) {
        Sa.test(a) && (a.indexOf("&") != -1 && (a = a.replace(Ma, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(Na, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(Oa, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(Pa, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(Qa, "&#39;")), a.indexOf("\x00") != -1 && (a = a.replace(Ra, "&#0;")));
        return a
    };
    var bb, P;
    a: {
        for (var cb = ["CLOSURE_FLAGS"], Q = F, db = 0; db < cb.length; db++)
            if (Q = Q[cb[db]], Q == null) {
                P = null;
                break a
            }
        P = Q
    }
    var eb = P && P[610401301];
    bb = eb != null ? eb : !1;

    function R() {
        var a = F.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var S, fb = F.navigator;
    S = fb ? fb.userAgentData || null : null;

    function gb() {
        return bb ? S ? S.brands.some(function(a) {
            return (a = a.brand) && a.indexOf("Chromium") != -1
        }) : !1 : !1
    };

    function hb() {
        return bb ? !!S && S.brands.length > 0 : !1
    }

    function ib(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }

    function jb() {
        for (var a = R(), b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        a = ib(c);
        return (hb() ? gb() : (R().indexOf("Chrome") != -1 || R().indexOf("CriOS") != -1) && (hb() || R().indexOf("Edge") == -1) || R().indexOf("Silk") != -1) ? a(["Chrome", "CriOS", "HeadlessChrome"]) : ""
    }

    function kb() {
        if (hb()) {
            var a = S.brands.find(function(b) {
                return b.brand === "Chromium"
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = jb();
            if (a === "") return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    };

    function T(a) {
        J.call(this);
        this.s = 1;
        this.l = [];
        this.m = 0;
        this.g = [];
        this.h = {};
        this.A = !!a
    }
    ua(T, J);
    q = T.prototype;
    q.subscribe = function(a, b, c) {
        var d = this.h[a];
        d || (d = this.h[a] = []);
        var g = this.s;
        this.g[g] = a;
        this.g[g + 1] = b;
        this.g[g + 2] = c;
        this.s = g + 3;
        d.push(g);
        return g
    };

    function lb(a, b, c) {
        var d = U;
        if (a = d.h[a]) {
            var g = d.g;
            (a = a.find(function(k) {
                return g[k + 1] == b && g[k + 2] == c
            })) && d.D(a)
        }
    }
    q.D = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            this.m != 0 ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && xa(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    q.H = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), g = 1, k = arguments.length; g < k; g++) d[g - 1] = arguments[g];
            if (this.A)
                for (g = 0; g < c.length; g++) {
                    var e = c[g];
                    mb(this.g[e + 1], this.g[e + 2], d)
                } else {
                    this.m++;
                    try {
                        for (g = 0, k = c.length; g < k && !this.i; g++) e = c[g], this.g[e + 1].apply(this.g[e + 2], d)
                    } finally {
                        if (this.m--, this.l.length > 0 && this.m == 0)
                            for (; c = this.l.pop();) this.D(c)
                    }
                }
            return g != 0
        }
        return !1
    };

    function mb(a, b, c) {
        Ja(function() {
            a.apply(b, c)
        })
    }
    q.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.D, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    q.C = function() {
        T.I.C.call(this);
        this.clear();
        this.l.length = 0
    };
    var nb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ob(a) {
        var b = a.match(nb);
        a = b[1];
        var c = b[2],
            d = b[3];
        b = b[4];
        var g = "";
        a && (g += a + ":");
        d && (g += "//", c && (g += c + "@"), g += d, b && (g += ":" + b));
        return g
    }

    function pb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) pb(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function qb(a) {
        var b = [],
            c;
        for (c in a) pb(c, a[c], b);
        return b.join("&")
    }
    var rb = /#|$/;
    var sb = ["https://www.google.com"];

    function tb() {
        var a = this;
        this.g = [];
        this.h = function() {
            Promise.all(a.g.map(function(b) {
                document.requestStorageAccessFor(b)
            })).then(function() {
                window.removeEventListener("click", a.h)
            })
        }
    }

    function ub() {
        return pa(function(a) {
            var b = a.return;
            var c = kb() >= 119;
            return b.call(a, c && !!navigator.permissions && !!navigator.permissions.query && "requestStorageAccessFor" in document)
        })
    }

    function vb() {
        var a = new tb,
            b = ["https://www.youtube.com"];
        b = b === void 0 ? sb : b;
        pa(function(c) {
            switch (c.g) {
                case 1:
                    return C(c, ub(), 2);
                case 2:
                    if (!c.m) {
                        c.g = 3;
                        break
                    }
                    return C(c, Promise.all(b.map(function(d) {
                        var g;
                        return pa(function(k) {
                            if (k.g == 1) return k.l = 2, C(k, navigator.permissions.query({
                                name: "top-level-storage-access",
                                requestedOrigin: d
                            }), 4);
                            k.g != 2 ? (g = k.m, g.state === "prompt" && a.g.push(d), k.g = 0, k.l = 0) : (k.l = 0, k.i = null, k.g = 0)
                        })
                    })), 4);
                case 4:
                    a.g.length > 0 && window.addEventListener("click", a.h);
                case 3:
                    return c.return()
            }
        })
    };
    var V = {},
        wb = [],
        U = new T,
        xb = {};

    function yb() {
        for (var a = v(wb), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    }

    function zb(a, b) {
        return a.tagName.toLowerCase().substring(0, 3) === "yt:" ? a.getAttribute(b) : a.dataset ? a.dataset[b] : a.getAttribute("data-" + b)
    }

    function Ab(a) {
        U.H.apply(U, arguments)
    };

    function Bb(a) {
        return (a.search("cue") === 0 || a.search("load") === 0) && a !== "loadModule"
    }

    function Cb(a) {
        return a.search("get") === 0 || a.search("is") === 0
    };
    var W = window;

    function X(a, b) {
        this.v = {};
        this.playerInfo = {};
        this.videoTitle = "";
        this.j = this.g = null;
        this.h = 0;
        this.m = !1;
        this.l = [];
        this.i = null;
        this.A = {};
        this.options = null;
        if (!a) throw Error("YouTube player element ID required.");
        this.id = ra(this);
        b = Object.assign({
            title: "video player",
            videoId: "",
            width: 640,
            height: 360
        }, b || {});
        var c = document;
        if (a = typeof a === "string" ? c.getElementById(a) : a) {
            W.yt_embedsEnableRsaforFromIframeApi && vb();
            c = a.tagName.toLowerCase() === "iframe";
            b.host || (b.host = c ? ob(a.src) : "https://www.youtube.com");
            this.options =
                b || {};
            b = [this.options, window.YTConfig || {}];
            for (var d = 0; d < b.length; d++) b[d].host && (b[d].host = b[d].host.toString().replace("http://", "https://"));
            c || (b = Db(this, a), this.j = a, (c = a.parentNode) && c.replaceChild(b, a), a = b);
            this.g = a;
            this.g.id || (this.g.id = "widget" + ra(this.g));
            V[this.g.id] = this;
            if (window.postMessage) {
                this.i = new T;
                Eb(this);
                a = Y(this, "events");
                for (var g in a) a.hasOwnProperty(g) && this.addEventListener(g, a[g]);
                for (var k in xb) xb.hasOwnProperty(k) && Fb(this, k)
            }
        }
    }
    q = X.prototype;
    q.setSize = function(a, b) {
        this.g.width = a.toString();
        this.g.height = b.toString();
        return this
    };
    q.getIframe = function() {
        return this.g
    };
    q.addEventListener = function(a, b) {
        var c = b;
        typeof b === "string" && (c = function() {
            window[b].apply(window, arguments)
        });
        if (!c) return this;
        this.i.subscribe(a, c);
        Gb(this, a);
        return this
    };

    function Fb(a, b) {
        b = b.split(".");
        if (b.length === 2) {
            var c = b[1];
            "player" === b[0] && Gb(a, c)
        }
    }
    q.destroy = function() {
        this.g && this.g.id && (V[this.g.id] = null);
        var a = this.i;
        a && typeof a.dispose == "function" && a.dispose();
        if (this.j) {
            a = this.j;
            var b = this.g,
                c = b.parentNode;
            c && c.replaceChild(a, b)
        } else(a = this.g) && a.parentNode && a.parentNode.removeChild(a);
        Z && (Z[this.id] = null);
        this.options = null;
        this.g && this.s && this.g.removeEventListener("load", this.s);
        this.j = this.g = null
    };

    function Hb(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {
            event: "command",
            func: b,
            args: c
        };
        a.m ? a.sendMessage(b) : a.l.push(b)
    }

    function Db(a, b) {
        var c = document.createElement("iframe");
        b = b.attributes;
        for (var d = 0, g = b.length; d < g; d++) {
            var k = b[d].value;
            k != null && k !== "" && k !== "null" && c.setAttribute(b[d].name, k)
        }
        c.setAttribute("frameBorder", "0");
        c.setAttribute("allowfullscreen", "");
        c.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        c.setAttribute("referrerPolicy", "strict-origin-when-cross-origin");
        c.setAttribute("title", "YouTube " + Y(a, "title"));
        (b = Y(a, "width")) &&
        c.setAttribute("width", b.toString());
        (b = Y(a, "height")) && c.setAttribute("height", b.toString());
        var e = Ib(a);
        e.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (e.origin = window.location.protocol + "//" + window.location.host);
        e.widgetid = a.id;
        window.location.href && wa(["debugjs", "debugcss"], function(f) {
            var h = window.location.href;
            var l = h.search(rb);
            b: {
                var m = 0;
                for (var n = f.length;
                    (m = h.indexOf(f, m)) >= 0 && m < l;) {
                    var p = h.charCodeAt(m - 1);
                    if (p == 38 || p == 63)
                        if (p = h.charCodeAt(m + n), !p || p == 61 || p == 38 || p == 35) break b;
                    m += n + 1
                }
                m = -1
            }
            if (m < 0) h = null;
            else {
                n = h.indexOf("&", m);
                if (n < 0 || n > l) n = l;
                m += f.length + 1;
                h = decodeURIComponent(h.slice(m, n !== -1 ? n : 0).replace(/\+/g, " "))
            }
            h !== null && (e[f] = h)
        });
        W.yt_embedsEnableIframeApiSendFullEmbedUrl && (window.location.href && (e.forigin = window.location.href), b = window.location.ancestorOrigins, e.aoriginsup = b === void 0 ? 0 : 1, b && b.length > 0 && (e.aorigins = Array.from(b).join(",")), window.document.referrer && (e.gporigin = window.document.referrer));
        a = "" + Y(a, "host") + Jb(a) + "?" + qb(e);
        W.yt_embedsEnableIframeSrcWithIntent ? ($a(c, Wa(a)), c.sandbox.add("allow-presentation", "allow-top-navigation")) : c.src = a;
        return c
    }
    q.G = function() {
        this.g && this.g.contentWindow ? this.sendMessage({
            event: "listening"
        }) : clearInterval(this.h)
    };

    function Eb(a) {
        Kb(a, a.id, String(Y(a, "host")));
        a.h = setInterval(a.G.bind(a), 250);
        a.g && (a.s = function() {
            clearInterval(a.h);
            a.h = setInterval(a.G.bind(a), 250)
        }, a.g.addEventListener("load", a.s))
    }

    function Gb(a, b) {
        a.A[b] || (a.A[b] = !0, Hb(a, "addEventListener", [b]))
    }
    q.sendMessage = function(a) {
        a.id = this.id;
        a.channel = "widget";
        a = JSON.stringify(a);
        var b = ob(this.g.src || "").replace("http:", "https:");
        if (this.g.contentWindow) try {
            this.g.contentWindow.postMessage(a, b)
        } catch (c) {
            if (c.name && c.name === "SyntaxError") c.message && c.message.indexOf("target origin ''") > 0 || console && console.warn && console.warn(c);
            else throw c;
        } else console && console.warn && console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")
    };

    function Jb(a) {
        if (W.yt_embedsEnableIframeApiVideoIdValidation) {
            a = String(Y(a, "videoId"));
            if (a.includes("../")) throw Error("Invalid video id");
            return "/embed/" + a
        }
        return "/embed/" + String(Y(a, "videoId"))
    }

    function Ib(a) {
        var b = Y(a, "playerVars");
        if (b) {
            var c = {},
                d;
            for (d in b) c[d] = b[d];
            b = c
        } else b = {};
        window !== window.top && document.referrer && (b.widget_referrer = document.referrer.substring(0, 256));
        if (a = Y(a, "embedConfig")) {
            if (G(a)) try {
                a = JSON.stringify(a)
            } catch (g) {
                console.error("Invalid embed config JSON", g)
            }
            b.embed_config = a
        }
        return b
    }

    function Lb(a, b) {
        if (G(b)) {
            for (var c in b) b.hasOwnProperty(c) && (a.playerInfo[c] = b[c]);
            a.playerInfo.hasOwnProperty("videoData") && (b = a.playerInfo.videoData, b.hasOwnProperty("title") && b.title ? (b = b.title, b !== a.videoTitle && (a.videoTitle = b, a.g.setAttribute("title", b))) : (a.videoTitle = "", a.g.setAttribute("title", "YouTube " + Y(a, "title"))))
        }
    }

    function Mb(a, b) {
        b = v(b);
        for (var c = b.next(), d = {}; !c.done; d = {
                u: void 0
            }, c = b.next()) d.u = c.value, a[d.u] || (d.u === "getCurrentTime" ? a[d.u] = function() {
            var g = this.playerInfo.currentTime;
            if (this.playerInfo.playerState === 1) {
                var k = (Date.now() / 1E3 - this.playerInfo.currentTimeLastUpdated_) * this.playerInfo.playbackRate;
                k > 0 && (g += Math.min(k, 1))
            }
            return g
        } : Bb(d.u) ? a[d.u] = function(g) {
            return function() {
                this.playerInfo = {};
                this.v = {};
                Hb(this, g.u, arguments);
                return this
            }
        }(d) : Cb(d.u) ? a[d.u] = function(g) {
            return function() {
                var k = g.u,
                    e = 0;
                k.search("get") === 0 ? e = 3 : k.search("is") === 0 && (e = 2);
                return this.playerInfo[k.charAt(e).toLowerCase() + k.substr(e + 1)]
            }
        }(d) : a[d.u] = function(g) {
            return function() {
                Hb(this, g.u, arguments);
                return this
            }
        }(d))
    }
    q.getVideoEmbedCode = function() {
        var a = "" + Y(this, "host") + Jb(this),
            b = Number(Y(this, "width")),
            c = Number(Y(this, "height"));
        if (isNaN(b) || isNaN(c)) throw Error("Invalid width or height property");
        b = Math.floor(b);
        c = Math.floor(c);
        var d = this.videoTitle;
        a = ab(a);
        d = ab(d != null ? d : "YouTube video player");
        return '<iframe width="' + b + '" height="' + c + '" src="' + a + '" title="' + (d + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    };
    q.getOptions = function(a) {
        return this.v.namespaces ? a ? this.v[a] ? this.v[a].options || [] : [] : this.v.namespaces || [] : []
    };
    q.getOption = function(a, b) {
        if (this.v.namespaces && a && b && this.v[a]) return this.v[a][b]
    };

    function Y(a, b) {
        a = [a.options, window.YTConfig || {}];
        for (var c = 0; c < a.length; c++) {
            var d = a[c][b];
            if (d !== void 0) return d
        }
        return null
    }
    var Z = null,
        Nb = null;

    function Ob(a) {
        if (a.tagName.toLowerCase() !== "iframe") {
            var b = zb(a, "videoid");
            b && (b = {
                videoId: b,
                width: zb(a, "width"),
                height: zb(a, "height")
            }, new X(a, b))
        }
    }

    function Kb(a, b, c) {
        Z || (Z = {}, Nb = new Set, Pb.addEventListener("message", function(d) {
            a: if (Nb.has(d.origin)) {
                try {
                    var g = JSON.parse(d.data)
                } catch (f) {
                    break a
                }
                var k = Z[g.id];
                if (k && d.origin === k.O) switch (d = k.V, d.m = !0, d.m && (wa(d.l, d.sendMessage, d), d.l.length = 0), k = g.event, g = g.info, k) {
                    case "apiInfoDelivery":
                        if (G(g))
                            for (var e in g) g.hasOwnProperty(e) && (d.v[e] = g[e]);
                        break;
                    case "infoDelivery":
                        Lb(d, g);
                        break;
                    case "initialDelivery":
                        G(g) && (clearInterval(d.h), d.playerInfo = {}, d.v = {}, Mb(d, g.apiInterface), Lb(d, g));
                        break;
                    default:
                        d.i.i ||
                            (e = {
                                target: d,
                                data: g
                            }, d.i.H(k, e), Ab("player." + k, e))
                }
            }
        }));
        Z[b] = {
            V: a,
            O: c
        };
        Nb.add(c)
    }
    var Pb = window;
    H("YT.PlayerState.UNSTARTED", -1);
    H("YT.PlayerState.ENDED", 0);
    H("YT.PlayerState.PLAYING", 1);
    H("YT.PlayerState.PAUSED", 2);
    H("YT.PlayerState.BUFFERING", 3);
    H("YT.PlayerState.CUED", 5);
    H("YT.get", function(a) {
        return V[a]
    });
    H("YT.scan", yb);
    H("YT.subscribe", function(a, b, c) {
        U.subscribe(a, b, c);
        xb[a] = !0;
        for (var d in V) V.hasOwnProperty(d) && Fb(V[d], a)
    });
    H("YT.unsubscribe", function(a, b, c) {
        lb(a, b, c)
    });
    H("YT.Player", X);
    X.prototype.destroy = X.prototype.destroy;
    X.prototype.setSize = X.prototype.setSize;
    X.prototype.getIframe = X.prototype.getIframe;
    X.prototype.addEventListener = X.prototype.addEventListener;
    X.prototype.getVideoEmbedCode = X.prototype.getVideoEmbedCode;
    X.prototype.getOptions = X.prototype.getOptions;
    X.prototype.getOption = X.prototype.getOption;
    wb.push(function(a) {
        var b = a;
        b || (b = document);
        a = za(b.getElementsByTagName("yt:player"));
        var c = b || document;
        if (c.querySelectorAll && c.querySelector) b = c.querySelectorAll(".yt-player");
        else {
            var d;
            c = document;
            b = b || c;
            if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll(".yt-player");
            else if (b.getElementsByClassName) {
                var g = b.getElementsByClassName("yt-player");
                b = g
            } else {
                g = b.getElementsByTagName("*");
                var k = {};
                for (c = d = 0; b = g[c]; c++) {
                    var e = b.className,
                        f;
                    if (f = typeof e.split == "function") f = va(e.split(/\s+/),
                        "yt-player") >= 0;
                    f && (k[d++] = b)
                }
                k.length = d;
                b = k
            }
        }
        b = za(b);
        wa(ya(a, b), Ob)
    });
    typeof YTConfig !== "undefined" && YTConfig.parsetags && YTConfig.parsetags !== "onload" || yb();
    var Qb = F.onYTReady;
    Qb && Qb();
    var Rb = F.onYouTubeIframeAPIReady;
    Rb && Rb();
    var Sb = F.onYouTubePlayerAPIReady;
    Sb && Sb();
}).call(this);