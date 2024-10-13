(function(g) {
    var window = this;
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var vib = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.dR(a)
        },
        wib = function(a) {
            g.bp(a);
            for (var b = 0; b < a.gg.length; b++) {
                var c = a.gg[b],
                    d = a.Yy[b];
                if (d !== c.version) return !0;
                if (!g.$o(c) || c.Sm)
                    if (c.Sm || c.y_ !== g.ep)(c.V1(c) || wib(c)) && c.W1(c), c.Sm = !1, c.y_ = g.ep;
                if (d !== c.version) return !0
            }
            return !1
        },
        p4 = function(a) {
            var b = g.Yo(a);
            a = {};
            return a[Symbol.dispose] = function() {
                g.Yo(b)
            }, a
        },
        q4 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        xib = function(a) {
            a = Array(a);
            q4(a, 0);
            return a
        },
        yib = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        zib = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        Aib = function(a, b, c) {
            b = new zib(b, c);
            return a.__incrementalDOMData = b
        },
        r4 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = Aib(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = xib(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        Bib = function(a, b) {
            g.np = g.kp();
            var c;
            a: {
                if (c = g.np) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = r4(d, f);
                        if ((0, g.rp)(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = g.op.createTextNode(""), Aib(a, "#text", null)) : (c = g.op, d = g.jp, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || r4(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), Aib(c, a, b), a = c), g.lp.created.push(a), c = a);
            a = c;
            if (a !== g.np) {
                if (g.pp.indexOf(a) >= 0)
                    for (b =
                        g.jp, c = a.nextSibling, d = g.np; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else g.jp.insertBefore(a, g.np);
                g.np = a
            }
        },
        Cib = function(a, b) {
            Bib(a, b);
            g.jp = g.np;
            g.np = null;
            return g.jp
        },
        Dib = function(a, b, c, d) {
            s4.push(yib);
            s4.push(a);
            s4.push(b);
            s4.push(c);
            s4.push(d)
        },
        Eib = function(a) {
            Bib("#text", null);
            var b = g.np;
            var c = r4(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        Fib = function() {
            var a = Object.assign({}, g.Gbb);
            Object.getOwnPropertyNames(g.Gbb).forEach(function(b) {
                g.tp[b] !== void 0 && (a[b] = g.tp[b])
            });
            return a
        },
        Gib = function() {
            return {
                I: "svg",
                X: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Fc: !0,
                    S: "ytp-svg-fill",
                    X: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Hib = function() {
            return {
                I: "svg",
                X: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    X: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        u4 = function(a) {
            var b = t4;
            t4 = a;
            a = {};
            return a[Symbol.dispose] = function() {
                t4 = b
            }, a
        },
        Jib = function(a) {
            Iib.add(a);
            for (var b = g.w(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                for (c = [d]; d.parent !== void 0;) d = d.parent, a.has(d) && c.push(d);
                for (; c.length > 0;) {
                    d = c.pop();
                    try {
                        d.oz()
                    } finally {
                        a.delete(d)
                    }
                }
            }
            Iib.delete(a)
        },
        Lib = function() {
            var a;
            g.J(function(b) {
                if (b.j == 1) return a = Kib, Kib = new Set, g.G(b, Promise.resolve(), 2);
                Jib(a);
                g.va(b)
            })
        },
        Mib = function() {
            return Array.from(Iib).map(function(a) {
                return Array.from(a)
            })
        },
        Nib = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.Cx;
            var d, e = (d = b.fu) != null ? d : b.name;
            v4.push({
                name: c ? e + " (" + c + ")" : e,
                ER: b.componentType !== w4
            });
            b = a();
            v4.pop();
            return b
        },
        x4 = function() {
            var a = v4[v4.length - 1];
            return a ? a.ER || !1 : !1
        },
        y4 = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = v4.length;
            b.stack && (v4 = [].concat(g.x(b.stack)));
            try {
                return a()
            } catch (d) {
                throw a = d, Oib(a), a !== Pib && (Qib = v4.slice()), Pib = a, a;
            } finally {
                c = v4.length - c, c > 0 && v4.splice(-c)
            }
        },
        Oib = function(a) {
            var b = v4;
            if (b.length !== 0 && !a.ZE) {
                var c = b.slice(-20).reverse().map(function(d) {
                    return d.name
                }).join(" > ");
                c = a.message + "\n\nComponent stack: " + c;
                try {
                    a.ZE = b.slice(), g.tp.L8 && (a.stack && (a.stack = a.stack.replace(a.message, c)), a.message = c)
                } catch (d) {}
            }
        },
        z4 = function(a) {
            var b = t4;
            if (b) {
                var c = v4.slice();
                b.oF || (b.oF = []);
                b.oF.push(function() {
                    return void y4(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        Sib = function(a) {
            var b = t4;
            b && !b.Ia && (z4(function() {
                return void Rib(a)
            }), a.parent = b)
        },
        Uib = function(a) {
            if (a.oF) {
                var b = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    g.cb(b, p4(Tib));
                    for (var c = g.w(a.oF), d = c.next(); !d.done; d = c.next()) {
                        var e = d.value;
                        e()
                    }
                } catch (f) {
                    b.error = f, b.hasError = !0
                } finally {
                    g.eb(b)
                }
                a.oF.length = 0
            }
        },
        Rib = function(a) {
            if (!a.Ia) {
                a.Ia = !0;
                var b;
                (b = a[Symbol.dispose]) == null || b.call(a);
                delete a.parent;
                Uib(a)
            }
        },
        Vib = function() {
            g.bp(this);
            if (g.$o(this))
                for (var a = 0; a < this.gg.length; a++) g.ap(this.gg[a], this.Gn[a]);
            this.gg.length = this.Yy.length = this.Gn.length = 0;
            this.ij && (this.ij.length = this.Wu.length = 0);
            A4.delete(this);
            Kib.delete(this);
            Rib(this)
        },
        C4 = function(a, b, c) {
            var d, e;
            var f = {
                ZE: (e = (d = Qib) == null ? void 0 : d.slice()) != null ? e : [],
                EA: c === void 0 ? 3 : c,
                Tna: Fib(),
                Xpa: Mib(),
                Mpa: t4,
                Ypa: [].concat(g.x(Wib.slice(B4)), g.x(Wib.slice(0, B4))),
                tagName: b
            };
            return [a, f]
        },
        D4 = function(a) {
            var b = !!t4,
                c = {};
            (b === void 0 || b) && Sib(c);
            b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.cb(b, u4(c)), a(c)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                g.eb(b)
            }
            return function() {
                return void Rib(c)
            }
        },
        Zib = function(a, b) {
            Xib++;
            var c = Object.create(Yib);
            c.ZE = v4.slice();
            c.FT = a;
            b && (c.fu = b);
            Sib(c);
            if ((a = g.Xo) && a.isAsync) {
                var d;
                (d = g.tp.handleError) == null || d.call.apply(d, [g.tp].concat(g.x(C4(Error("Sync reactions can not be called inside a reaction call.")))))
            }
            c.oz()
        },
        $ib = function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                return g.cb(b, p4(null)), a()
            } catch (c) {
                b.error = c, b.hasError = !0
            } finally {
                g.eb(b)
            }
        },
        cjb = function(a, b, c) {
            if (Object.hasOwnProperty.call(ajb, a) && (a = ajb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Li;
                    if (!m) return l.Bd;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Ui) return l.Bd;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = bjb[b];
            return typeof b === "number" ? b : null
        },
        ejb = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = cjb(a.tagName.toLowerCase(), b, function() {
                var h;
                (h = g.tp.handleError) == null || h.call.apply(h, [g.tp].concat(g.x(C4(Error("Contingent attribute/property lookups are not supported."), a.tagName.toLowerCase()))))
            });
            if (d === null) return c;
            d = djb[d];
            var e;
            if ((e = d.Su) == null ? 0 : e.call(d, c)) {
                if (d.Et) return d.Et(c);
                var f;
                (f = g.tp.handleError) == null || f.call.apply(f, [g.tp].concat(g.x(C4(Error("Value Handler's unwrap function does not exist."), a.tagName.toLowerCase()))))
            }
            return d.Ur ? d.Ur(a.tagName, b, String(c)) : c
        },
        gjb = function(a) {
            function b(d, e, f) {
                g.Ql(d, fjb);
                for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
                    if (d[l] !== fjb(e[f + l])) return !1;
                return !0
            }
            a = String(a);
            for (var c = 0;
                (c = a.indexOf("<", c)) != -1;) {
                if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
                c += 1
            }
            return a
        },
        fjb = function(a) {
            return "A" <= a && a <= "Z" ? a.toLowerCase() : a
        },
        E4 = function(a, b, c) {
            if (c === !1 && hjb.has(b)) g.Ela(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = g.tp.handleError) == null || d.call.apply(d, [g.tp].concat(g.x(C4(Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."), a.tagName))));
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " +
                            (typeof c + ". Event handlers must be created using useHandler."));
                        if (typeof c.XY !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.XY(0),
                            f = b.slice(3);
                        if ((d = x4()) && a["on" + f] === void 0) a.addEventListener(f, e), z4(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !ijb.includes(f)) a["on" + f] = e
                    } else {
                        jjb(a, b, c);
                        return
                    }
                else if (b.startsWith("data-") && typeof c === "string") try {
                    c = gjb(c)
                } catch (h) {
                    c = "zSoyz"
                }
                typeof c !== "function" || a._disposeEffects != null ? (g.tp.K8 && (c = ejb(a, b, c)), b === "style" ? kjb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : jjb(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        ljb = function(a, b, c) {
            c = (c === void 0 ? {} : c).ER;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.wca) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.mda) == null || f.call(d);
                        delete a._disposeRef
                    }, c && z4(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        G4 = function(a, b) {
            var c = g.Ea.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[F4] = !0, d
        },
        mjb = function(a) {
            return a.children
        },
        njb = function() {
            var a = !1;
            H4 !== I4 && (H4 = I4, a = !0);
            var b = {};
            return b[Symbol.dispose] = function() {
                a && (H4 = G4)
            }, b
        },
        ojb = function() {
            var a = !1;
            H4 !== G4 && (H4 = G4, a = !0);
            var b = {};
            return b[Symbol.dispose] = function() {
                a && (H4 = I4)
            }, b
        },
        pjb = function(a) {
            return "(" + typeof a + ") " + (a != null && typeof a === "object" ? a.constructor.name : typeof a) + " " + a
        },
        J4 = function() {
            return document.createTextNode("")
        },
        K4 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        L4 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        M4 = function(a) {
            return a instanceof g.Mf || g.Qf(a) || typeof a === "string" || !1
        },
        qjb = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        rjb = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        N4 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        sjb = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        O4 = function(a) {
            return g.Ta(a) ? "nodeType" in a : !1
        },
        vjb = function(a) {
            var b = tjb();
            Zib(function() {
                var c = b[0],
                    d = b.Vm;
                a: {
                    var e = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.cb(e, njb());
                        var f = a();
                        break a
                    } catch (l) {
                        e.error = l, e.hasError = !0
                    } finally {
                        g.eb(e)
                    }
                    f = void 0
                }
                c = ujb(c, f, b);
                Array.isArray(c) || (b.Vm = [c]);
                f = b.Vm;
                if (d && (!Array.isArray(d) || d.length !== 0)) {
                    d = Array.isArray(d) ? d[0] : d;
                    e = d[P4];
                    var h = d._disposeEffects;
                    d._disposeEffects = void 0;
                    d = Array.isArray(f) ? f[0] : f;
                    d[P4] = e;
                    d[P4] && (d[P4].B0 = d === f ? 1 : f.length);
                    d._disposeEffects = h
                }
                b[0] = c
            }, "p9csj");
            return b
        },
        ujb = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[F4]) {
                var d, e, f;
                (f = g.tp.handleError) == null || f.call.apply(f, [g.tp].concat(g.x(C4(Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((d = b.type) == null ? void 0 : d.Ot)), (e = b.type) == null ? void 0 : e.Ot))))
            }
            if (a == null) return b == null ? J4() : L4(b) ? K4(b) : M4(b) ? K4(b.toString()) : O4(b) ? b : b.length === 0 ? J4() : Q4(b, c);
            if (O4(a)) {
                if (b == null) return qjb(a, J4());
                if (L4(b)) return rjb(a, b);
                if (M4(b)) return rjb(a, b.toString());
                if (O4(b)) return qjb(a, b);
                if (b.length === 0) return qjb(a, J4());
                b = Q4(b, c);
                sjb([a], c.Vm);
                return b
            }
            a = R4(a);
            if (b == null) return N4(a, J4());
            if (L4(b)) return N4(a, K4(b));
            if (M4(b)) return N4(a, K4(b.toString()));
            if (O4(b)) return sjb(a, [b])[0];
            if (b.length === 0) return N4(a, J4());
            b = Q4(b, c);
            sjb(a, c.Vm);
            return b
        },
        R4 = function(a, b, c) {
            return wjb(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        Q4 = function(a, b) {
            var c = R4(a, void 0, !0);
            if (c.length === 0) return J4();
            b.Vm = c;
            return a
        },
        wjb = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            if (O4(b) && b.nodeType === Node.ELEMENT_NODE && b.tagName === "SCRIPT") a: {
                c = a;
                if (Array.isArray(c)) {
                    if (c.length > 1) throw Error("Script tags can contain at most 1 child. Got " + c.length + ": [" + c.map(pjb).join(", ") + "]");
                    c = c[0]
                }
                if (c != null) {
                    if (!(c instanceof g.dg)) {
                        var f, h;
                        if ((f = window) == null ? 0 : (h = f.trustedTypes) == null ? 0 : h.isScript(c)) throw Error("Do not use a TrustedScript instance in a script tag directly. Use a SafeScript instead.");
                        if (String(c).trim().length ===
                            0) break a;
                        throw Error("Script tags must only contain SafeScript or LegacyScript instances. Got: " + pjb(c));
                    }
                    b.textContent = g.eg(c);
                    g.fg(b)
                }
            }
            else {
                L4(a) && (a = K4(a), d && c && (d[e] = a));
                M4(a) && (a = K4(a.toString()), d && c && (d[e] = a));
                if (O4(a)) return xjb(b, a);
                if (Array.isArray(a)) {
                    for (f = 0; f < a.length; f++) wjb(a[f], b, c, a, f);
                    return b
                }
                if (typeof a === "function") return a = vjb(a)[0], d && c && (d[e] = a), xjb(b, a);
                if (a != null && a[F4]) {
                    a: {
                        f = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            g.cb(f, njb());
                            var l = H4.apply(null, [a.type, a.props].concat(g.x(a.children)));
                            break a
                        } catch (n) {
                            f.error = n, f.hasError = !0
                        } finally {
                            g.eb(f)
                        }
                        l = void 0
                    }
                    return wjb(l, b, c)
                }
                var m;
                (m = g.tp.handleError) == null || m.call.apply(m, [g.tp].concat(g.x(C4(Error("Unrecognized JSXResult type in flattening.")))));
                return b
            }
        },
        tjb = function(a) {
            var b = [];
            if (!a) return b.Vm = [], b;
            b[0] = Q4(a, b);
            return b
        },
        xjb = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        zjb = function(a, b) {
            var c, d, e = yjb(a),
                f = D4(function(q) {
                    var r = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        d = q, g.cb(r, njb()), g.cb(r, p4(g.G1)), g.cb(r, g.up("render", e)), c = a(b)
                    } catch (t) {
                        r.error = t, r.hasError = !0
                    } finally {
                        g.eb(r)
                    }
                });
            c != null && c.Vm || !Array.isArray(c) || (c = tjb(c));
            var h = c != null && c.Vm ? c.Vm : c;
            var l = Array.isArray(h) ? h[0] : h,
                m = !1;
            if (l) {
                var n, p = (n = b == null ? void 0 : b.idomKey) != null ? n : a;
                l._disposeEffects = f;
                n = l[P4] || {};
                Object.assign(n, {
                    key: p,
                    B0: h !== l ? h.length : 1,
                    context: d,
                    bpa: !!l[P4],
                    e3: c != null && c.Vm ? c : n.e3
                });
                l[P4] = n
            } else m = !0;
            (function() {
                var q = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    g.cb(q, u4(d))
                } catch (r) {
                    q.error = r, q.hasError = !0
                } finally {
                    g.eb(q)
                }
            })();
            m && f();
            return c
        },
        yjb = function(a) {
            var b, c;
            return (c = (b = a.fu) != null ? b : a.name) != null ? c : "[component]"
        },
        S4 = function(a) {
            this.props = a;
            this.C = !1
        },
        Ajb = function() {
            if (x4()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return T4
        },
        U4 = function(a) {
            S4.call(this, a);
            var b = this;
            this.aB = [];
            this.D = 0;
            this.G = D4(function(c) {
                b.gK = c;
                z4(function() {
                    Bjb(b, b.el)
                })
            })
        },
        Bjb = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.dK()
                } catch (e) {
                    var c, d;
                    (d = g.tp.handleError) == null || d.call.apply(d, [g.tp].concat(g.x(C4(e, (c = a.B) == null ? void 0 : c.Ot))))
                }
                V4.dK(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        Cjb = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = D4(function() {
                Zib(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, E4(a, f, h))
                    }
                }, "dH6kJb")
            }))
        },
        Djb = function(a, b) {
            a._disposeEffects = D4(function() {
                a._isSignalTextNode = !0;
                Zib(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                }, "a6Kfjd")
            })
        },
        Fjb = function(a, b) {
            var c = g.Ea.apply(2, arguments);
            b != null || (b = {});
            if (a === mjb) return c;
            if (typeof a === "function") return Nib({
                component: a,
                debugInstance: b.debugInstance,
                Cx: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = b;
                    if (a.componentType !== w4) var h = !1;
                    else {
                        f || (f = {});
                        h = new U4(f);
                        h.j = a;
                        b: {
                            var l = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                g.cb(l, p4(g.G1));
                                var m = h.kz(f);
                                break b
                            } catch (n) {
                                l.error = n, l.hasError = !0
                            } finally {
                                g.eb(l)
                            }
                            m = void 0
                        }
                        f = m;
                        f instanceof HTMLElement ? (f.__instance = h, h.el = f, h.B = a, a.Ot = f.tagName.toLowerCase(), V4.kF(h), h = f) : h = f
                    }
                    return h ===
                        !1 ? Ejb(a, b) : h
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) E4(d, e, b[e]);
            Cjb(d, b);
            R4(c, d);
            ljb(d, b, {
                ER: !0
            });
            return d
        },
        Gjb = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof S4 && (b = a.__instance, Bjb(b, a), b instanceof U4 && b.G());
                for (b = 0; b < a.childNodes.length; b++) Gjb(a.childNodes[b])
            }
        },
        Ijb = function(a) {
            Hjb.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.x(Hjb));
                    Hjb = [];
                    b = g.w(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) Gjb(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = g.tp).handleError) == null || d.call.apply(d, [c].concat(g.x(C4(e))))
                        }
                    }
                })
            })
        },
        W4 = function(a, b) {
            return H4.apply(null, [a,
                b
            ].concat(g.x(g.Ea.apply(2, arguments))))
        },
        Jjb = function(a) {
            var b = null,
                c;
            return {
                value: null,
                wca: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                mda: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        Kjb = function(a) {
            var b = Ajb();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.aB || (b.aB = []);
            var d = b.aB;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.B) == null ? void 0 : e.name) || ((f = b.j) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        Ljb = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        Mjb = function(a, b) {
            var c = Kjb("onChange"),
                d = Ajb();
            Ljb(c.kh, b) && (c.kh = b, c.G1 = a, d.Zz || (d.Zz = []), d.Zz.push(c))
        },
        Njb = function(a) {
            if (g.tp.vfa) {
                var b = g.Xo;
                if (b && b.isAsync) {
                    var c;
                    (c = g.tp.handleError) == null || c.call.apply(c, [g.tp].concat(g.x(C4(Error("onInit cannot be called inside a reaction.")))))
                }
            }
            var d = t4,
                e = v4.slice();
            Promise.resolve().then(function() {
                d && !d.Ia && y4(function() {
                    var f = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.cb(f, u4(d)), a()
                    } catch (h) {
                        f.error = h, f.hasError = !0
                    } finally {
                        g.eb(f)
                    }
                }, {
                    stack: e
                })
            })
        },
        X4 = function(a, b) {
            Mjb(function() {
                return $ib(a)
            }, b)
        },
        Ojb = function(a) {
            x4() ? Njb(function() {
                $ib(a)
            }) : Mjb(function() {
                return $ib(a)
            }, [])
        },
        Qjb = function(a) {
            var b = [].concat(g.x(a));
            a.length = 0;
            a = g.w(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                Pjb(b);
                var c = b.G1;
                b.G1 = null;
                if (c = c == null ? void 0 : c()) b.F1 = c
            }
        },
        Pjb = function(a) {
            var b = a.F1;
            a.F1 = null;
            b == null || b()
        },
        Y4 = function(a) {
            var b = [];
            if (x4()) return a();
            var c = Kjb("useMemoInternal");
            Ljb(c.kh, b) && (c.kh = b, c.value = a());
            return c.value
        },
        Z4 = function() {
            var a = Y4(function() {
                return Jjb(function(b) {
                    a.value = b;
                    var c = function() {
                        var d = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            g.cb(d, p4(null))
                        } catch (e) {
                            d.error = e, d.hasError = !0
                        } finally {
                            g.eb(d)
                        }
                    }();
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        Rjb = function(a) {
            var b = t4,
                c = v4.slice();
            return {
                XY: function() {
                    return function(d) {
                        b.Ia || y4(function() {
                            var e = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                return g.cb(e, p4(null)), a(d)
                            } catch (f) {
                                e.error = f, e.hasError = !0
                            } finally {
                                g.eb(e)
                            }
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        Sjb = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.w(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        Ujb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            y4(function() {
                return Tjb(a, b, c)
            })
        },
        Tjb = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? g.Jbb : g.Ibb)(a, function() {
                $4(b)
            });
            return c === null ? a : c
        },
        $4 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    var b = g.w(a);
                    for (a = b.next(); !a.done; a = b.next()) $4(a.value)
                } else if (a instanceof g.Mf) Eib(a.toString());
            else if (O4(a)) {
                if (g.kp() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                g.np = g.kp()
            } else {
                if (typeof a === "string" || g.Qf(a)) a = a.toString();
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") Eib(a);
                else if (typeof a === "function") {
                    b = g.jp;
                    var d =
                        g.kp();
                    if (!d || !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        Djb(f, a);
                        e.call(b, f, d)
                    }
                    g.np = g.kp()
                } else {
                    if (typeof a.type === "string") {
                        a.Kr || Cib(a.type, a.props.idomKey);
                        d = g.jp;
                        for (e in a.props) a.props[e] !== Vjb && (f = a.props[e], c = g.qp, c.push(e), c.push(f));
                        e = g.tp.attributes;
                        e = e === void 0 ? g.Hbb : e;
                        f = g.jp;
                        var h = r4(f);
                        c = e;
                        e = g.qp;
                        h = h.j || (h.j = xib(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !== p) h[m + 1] = p, Dib(f,
                                n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m = l = m; m < h.length; m += 2) g.H1[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], g.H1[l] !== n && Dib(f, l, n, c), h[m] = l, h[m + 1] = n, delete g.H1[l];
                            q4(h, e.length);
                            for (b in g.H1) Dib(f, b, void 0, c), delete g.H1[b]
                        }
                        b = Wjb;
                        Wjb = f = s4.length;
                        for (c = b; c < f; c += 5)(0, s4[c])(s4[c + 1], s4[c + 2], s4[c + 3], s4[c + 4]);
                        Wjb = b;
                        q4(s4, b);
                        q4(e, 0);
                        Cjb(d, a.props);
                        (a.props.skip || a.props.skipchildren) && g.jp.hasChildNodes() ? g.np = g.jp.lastChild : $4(a.children);
                        g.mp(null);
                        g.np = g.jp;
                        g.jp = g.jp.parentNode;
                        a.Kr && (a.Kr = !1);
                        ljb(d, a.props);
                        return d
                    }
                    if (a.type === mjb) $4(a.children);
                    else if (!Xjb(a)) {
                        b = a;
                        try {
                            Yjb(b)
                        } catch (q) {
                            a = q, (f = g.tp.handleError) == null || f.call.apply(f, [g.tp].concat(g.x(C4(a, (d = b.type) == null ? void 0 : d.Ot))))
                        }
                        b.Kr && (g.mp(null), g.np = g.jp, g.jp = g.jp.parentNode, b.Kr = !1)
                    }
                }
            }
        },
        $jb = function(a, b) {
            Zjb(a) ? (b = new U4(b), b.j = a) : b = new a(b);
            b.B = a;
            b.EO = {
                pS: b.state,
                p_: !1
            };
            return b
        },
        Yjb = function(a) {
            var b = a.type,
                c = b.Ot;
            if (b === Sjb) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = Cib(c, a.props.idomKey);
                    a.Kr = !0;
                    var f = e.__instance
                }
                f || (f = $jb(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.EO) != null ? h : {
                    pS: f.state,
                    p_: !1
                }).pS;
                f.EO = void 0;
                b.z9 && (c = b.z9(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    V4.PX(l);
                    var m = l.kz(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.Kr = a.Kr, l = $4(m), a.Kr = m.Kr, !b.Ot)
                            if (l) b.Ot = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.aB) == null ? 0 : n.length) {
                                    var p;
                                    (p = g.tp.handleError) == null || p.call.apply(p, [g.tp].concat(g.x(C4(Error("A component used hooks, but failed to return a host element")))))
                                }
                            }
                    f.kF();
                    V4.kF(f)
                };
                (c = f.j) ? Nib({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    Cx: h
                }): h()
            }
        },
        Xjb = function(a) {
            var b = a.type;
            if (!Zjb(b) || b === Sjb || b.componentType === w4) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (g.kp() && ((e = g.kp()[P4]) == null ? void 0 : e.key) === d) {
                b = g.kp();
                c = b[P4];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + b.tagName);
                var f;
                (f = c.Hqa) == null || f.call(c, a.props);
                akb(c);
                return !0
            }
            if (bkb.has(b.name)) throw Error(b.name + " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            (f = Nib({
                component: a.type,
                debugInstance: a.props.debugInstance,
                Cx: function() {
                    return Ejb(a.type, a.props)
                }
            })) && ckb(f);
            return !0
        },
        dkb = function(a) {
            for (var b = 0; b < R4(a).length; b++) g.np = g.kp()
        },
        akb = function(a) {
            var b = ekb();
            if (b) dkb(b);
            else
                for (var c = 0; c < a.B0; c++)(b = ekb()) ? dkb(b) : g.np = g.kp()
        },
        ekb = function() {
            var a;
            return (a = g.kp()[P4]) == null ? void 0 : a.e3
        },
        ckb = function(a) {
            a = a != null && a.Vm ? a.Vm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.w(a);
            for (var b = a.next(); !b.done; b = a.next()) g.jp.insertBefore(b.value, g.kp()), g.np = g.kp()
        },
        Zjb = function(a) {
            var b;
            return ((b = a.prototype) == null ? void 0 : b.kz) === void 0
        },
        fkb = function(a) {
            var b = Ajb(),
                c = Y4(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                var e = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    if (T4 !== null) {
                        var f;
                        (f = g.tp.handleError) == null || f.call.apply(f, [g.tp].concat(g.x(C4(Error("Can't set state during rendering")))))
                    }
                    c.value = typeof d === "function" ? d(c.value) : d;
                    b.EO = {
                        pS: b.state,
                        p_: !0
                    };
                    g.cb(e, u4(b.gK));
                    g.cb(e, ojb());
                    if (b.el) {
                        var h;
                        d = {};
                        var l = (d.props = b.props, d.type = b.B, d.children = (h = b.props.children) != null ? h : [], d[F4] = !0, d);
                        try {
                            Ujb(b.el, l, !0)
                        } catch (p) {
                            var m, n;
                            (n = g.tp.handleError) == null || n.call.apply(n, [g.tp].concat(g.x(C4(p,
                                (m = b.B) == null ? void 0 : m.Ot))))
                        }
                    }
                } catch (p) {
                    e.error = p, e.hasError = !0
                } finally {
                    g.eb(e)
                }
            }]
        },
        gkb = function() {
            return Y4(function() {
                return {
                    value: null
                }
            })
        },
        kkb = function(a) {
            var b = hkb;
            ikb.push(a);
            jkb || (b(function() {
                for (var c = g.w(ikb), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                ikb.length = 0;
                jkb = !1
            }), jkb = !0)
        },
        hkb = function(a) {
            Promise.resolve().then(a)
        },
        lkb = function(a) {
            a = g.w(fkb(a));
            var b = a.next().value,
                c = a.next().value,
                d = !1;
            Ojb(function() {
                return function() {
                    d = !0
                }
            });
            return [b, function(e) {
                kkb(function() {
                    d && !g.Zr("cow_prevent_state_setter_after_cleanup_killswitch") || c(e)
                })
            }]
        },
        mkb = function(a) {
            function b() {
                var l = a.J.fd() ? "Hide more shorts" : "Hide more videos";
                e(l)
            }
            var c = g.w(fkb("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            X4(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = Y4(function() {
                    return (new g.Ux(g.ny())).element
                }),
                h = Z4();
            Ojb(function() {
                h.value.appendChild(f)
            });
            return W4("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": Rjb(function() {
                    a.action && a.action()
                })
            }, W4("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        nkb = function(a) {
            function b() {
                var h = a.J.fd() ? "More shorts" : "More videos";
                e(h)
            }
            var c = g.w(lkb("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = Z4();
            X4(function() {
                a.UM && (a.UM.value = f.value)
            }, [a.UM]);
            X4(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return W4("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": Rjb(function() {
                    a.action && a.action()
                })
            }, d)
        },
        okb = function(a, b) {
            var c = gkb();
            X4(function() {
                var d = new g.p1(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        pkb = function(a) {
            function b(y) {
                a: {
                    var A = g.w([1,
                        16, 32
                    ]);
                    for (var C = A.next(); !C.done; C = A.next())
                        if (g.U(y, C.value)) {
                            A = !0;
                            break a
                        }
                    A = !1
                }
                if (!A) {
                    var F;
                    (F = p.value) != null && F.suggestionData.length > 0 && h(g.U(y, 4) && !g.U(y, 2) && !g.U(y, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(y) {
                b(y.state)
            }
            var e = g.w(lkb(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.w(lkb(!1));
            e = l.next().value;
            var m = l.next().value,
                n = Z4(),
                p = okb(a.J, a.Se),
                q = Z4();
            l = gkb();
            var r = gkb();
            X4(function() {
                var y = a.J,
                    A = y.fd() ? 157212 : 172777;
                r.value = new g.O;
                y.createClientVe(q.value, r.value, A);
                y.addEventListener("presentingplayerstatechange", d);
                y.addEventListener("videodatachange", c);
                A = y.U().controlsType === "0";
                g.Qp(y.getRootNode(), "ytp-pause-overlay-controls-hidden", A);
                return function() {
                    y.removeEventListener("videodatachange", c);
                    y.removeEventListener("presentingplayerstatechange",
                        d);
                    var C;
                    (C = r.value) == null || C.dispose()
                }
            }, [a.J]);
            X4(function() {
                var y;
                (y = p.value) == null || y.Ha(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.Qp(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.q1(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return W4("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, W4(mkb, {
                J: a.J,
                Se: a.Se,
                action: function() {
                    m(!0)
                }
            }), W4(nkb, {
                J: a.J,
                Se: a.Se,
                action: function() {
                    m(!1)
                },
                UM: l
            }), W4("div", {
                el: n,
                skip: !0
            }))
        },
        qkb = function(a) {
            g.S.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.jG(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.S({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-previous"],
                X: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.dy()]
            });
            this.oa = new g.o1(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-next"],
                X: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.ey()]
            });
            g.P(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.Mp(this.element, "ytp-error-overlay-round-corners");
            this.W = a.D;
            g.P(this, this.title);
            this.title.Ha(this.element);
            this.suggestions = new g.S({
                I: "div",
                S: "ytp-suggestions"
            });
            g.P(this, this.suggestions);
            this.suggestions.Ha(this.element);
            g.P(this, this.previous);
            this.previous.Ha(this.element);
            this.previous.listen("click", this.n5, this);
            g.P(this, this.oa);
            for (var c = {
                    eB: 0
                }; c.eB < 16; c = {
                    eB: c.eB
                }, c.eB++) {
                var d = new g.S({
                    I: "a",
                    S: "ytp-suggestion-link",
                    X: {
                        href: "{{link}}",
                        target: a.W,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            X: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        X: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.P(this, d);
                d.Ha(this.suggestions.element);
                var e = d.Da("ytp-suggestion-link");
                g.Fm(e, "transitionDelay", c.eB / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.eB,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.LP(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.Pl(), m = {}, g.aNa(b.api, m), l = g.gj(l, m), g.lT(l, b.api, h)) : g.kT(h, b.api, b.W, n || void 0) && b.api.Ip(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.P(this, this.next);
            this.next.Ha(this.element);
            this.next.listen("click", this.m5, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.ob().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        rkb = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        skb = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.Qp(a.element, "ytp-scroll-min", b >= 0);
            g.Qp(a.element, "ytp-scroll-max", b <= c)
        },
        tkb = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Pl(),
                    h = a.api.U();
                if (g.LP(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.eS(a.api, "addEmbedsConversionTrackingParams", [l]);
                    f = g.gj(f, l)
                }
                d.element.style.display = "";
                l = d.Da("ytp-suggestion-title");
                g.Up.test(c.title) ? l.dir = "rtl" : g.Nbb.test(c.title) && (l.dir = "ltr");
                l = d.Da("ytp-suggestion-author");
                g.Up.test(e) ? l.dir = "rtl" : g.Nbb.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.iz(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Da("ytp-suggestion-image");
                f = c.nh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            skb(a)
        },
        a5 = function(a) {
            g.AY.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.W
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.nQ(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.S({
                I: "a",
                La: e,
                X: d,
                V: [{
                    I: "svg",
                    X: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        X: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        X: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ha(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                ukb(b, h, f.element)
            });
            g.P(this, f);
            a.U().C || (this.j = new qkb(a), this.j.Ha(this.element), g.P(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.ob().getPlayerSize())
        },
        ukb = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.eS(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Sg(c) ? b : g.gj(b, c);
            g.bg(window, b)
        },
        vkb = function(a, b) {
            a.Da("ytp-error-content").style.paddingTop = "0px";
            var c = a.Da("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        ykb = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (wkb(b.reason) ? d = g.by(b.reason) : d = g.BY(g.ay(b.reason)), a.Fd(d, "content"));
            var e;
            b.subreason && (wkb(b.subreason) ? e = g.by(b.subreason) : e = g.BY(g.ay(b.subreason)), a.Fd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Da("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.qh("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !xkb(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.Q(b == null ? void 0 : b.navigationEndpoint, g.uy)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.Q(b == null ? void 0 : b.navigationEndpoint, g.uy)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        ukb(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.qh("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        wkb = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        xkb = function(a, b) {
            a = g.hh("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        zkb = function(a, b) {
            g.S.call(this, {
                I: "a",
                La: ["ytp-impression-link"],
                X: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Se = b;
            this.updateValue("target", a.U().W);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.lj);
            this.T(this.api, "videoplayerreset", this.EV);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.EV()
        },
        Akb = function(a) {
            var b = {};
            g.eS(a.api, "addEmbedsConversionTrackingParams", [b]);
            a = a.api.getVideoUrl();
            return a = g.gj(a, b)
        },
        b5 = function(a) {
            g.S.call(this, {
                I: "div",
                La: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    X: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    X: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Da("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Da("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.lj);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.lj()
        },
        c5 = function(a) {
            g.S.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Da("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        d5 = function(a) {
            var b = a.U();
            g.S.call(this, {
                I: "a",
                La: ["ytp-watermark", "yt-uix-sessionlink"],
                X: {
                    target: b.W,
                    href: "{{url}}",
                    "aria-label": g.XE("Watch on $WEBSITE", {
                        WEBSITE: g.aQ(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.kc);
            this.onVideoDataChange();
            this.yd(this.state);
            this.kc(a.ob().getPlayerSize())
        },
        Bkb = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U();
            c = c.Nd && !g.U(a.state, 2) && !g.YR(a.api.getVideoData(1)) && !(c.L("embeds_enable_emc3ds_woyt_counterfactual") && a.api.getPlayerStateObject().isCued());
            b.mutedAutoplay || g.Xx(a, c);
            a.api.logVisibility(a.element, c)
        },
        Ekb = function(a) {
            g.S.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        X: {
                            "aria-label": "Muted Playback Indicator"
                        },
                        V: [{
                            I: "div",
                            La: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                X: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    X: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            X: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            X: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            X: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Da("ytp-muted-autoplay-bottom-buttons");
            this.Da("ytp-muted-autoplay-equalizer");
            this.C = new g.Ep(this.B$, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.XN);
            this.T(a, "onMutedAutoplayStarts", function() {
                Ckb(b);
                b.XN();
                Dkb(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            a.isMutedByEmbedsMutedAutoplay() && (Ckb(this), this.XN(), Dkb(this));
            g.P(this, this.C)
        },
        Dkb = function(a) {
            a.Eb && a.j && (a.j.show(), a.C.start())
        },
        Ckb = function(a) {
            a.watermark || (a.watermark = new d5(a.api), g.P(a, a.watermark), a.watermark.Ha(a.bottomButtons, 0), g.Qp(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.Ny(a.watermark, 0, !0, 100), g.P(a,
                a.j))
        },
        e5 = function(a) {
            g.S.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                X: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.jG(this);
            this.D = new g.Ny(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-expand"],
                va: this.api.fd() ? "More shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.Mp(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.Mp(this.element, "ytp-pause-overlay-round-corners");
            g.P(this, this.C);
            g.P(this, this.D);
            var c = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-collapse"],
                X: {
                    "aria-label": this.api.fd() ? "Hide more shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.ny()]
                }]
            });
            g.P(this, c);
            c.Ha(this.element);
            c.listen("click", this.G, this);
            g.P(this, this.expandButton);
            this.expandButton.Ha(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.p1(a);
            g.P(this, this.j);
            this.j.B = !1;
            this.j.Ha(this.element);
            this.api.fd() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Ra);
            this.C.T(this.api, "videodatachange", this.Ra);
            this.hide()
        },
        f5 = function(a) {
            g.S.call(this, {
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
                    V: [{
                        I: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-countdown-timer-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Da("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        Gkb = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.hu)(), a.j = new g.Dp(function() {
                Fkb(a)
            }, null), Fkb(a))
        },
        Fkb = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.hu)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? g5(a) : a.j && a.j.start()
            }
        },
        g5 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        Ikb = function(a) {
            g.hY.call(this, a);
            this.J = a;
            this.j = new g.jG(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.W = !1;
            Hkb(this);
            g.P(this, this.j);
            this.load()
        },
        Kkb = function(a) {
            var b = g.Q$a(a.J);
            b !== a.W && (a.W = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.iS(a.J), a.J.fd() && (a.D = new g.S({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.D), g.US(a.J, a.D.element, 4), a.B = new g.Ny(a.D, 1E3, !1, 100), g.P(a, a.B), a.D.hide()), a.G = new g.S({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? Ujb(a.G.element, W4(pkb, {
                    J: a.J,
                    Se: b
                })) :
                (a.C = new e5(a.J, b), g.P(a, a.C), a.C.Ha(a.G.element)), g.US(a.J, a.G.element, 4), Jkb(a, a.J.getPlayerStateObject())))
        },
        Jkb = function(a, b) {
            a.B && (!g.U(b, 4) && !g.U(b, 2) || g.U(b, 1024) ? a.B.hide() : a.B.show())
        },
        Hkb = function(a) {
            var b = a.J;
            a = !!b.fd();
            g.Qp(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.QZ = a
        },
        h5 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Kfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.aj(a.J.U().Ca) || ""
            };
            a.embeddedPlayerMode = c.Fa;
            g.Qt("embedsAdEvent", a)
        },
        Xib = 0,
        Lkb = 0,
        s4 = [],
        Wjb = 0;
    var t4 = null;
    var Tib = g.gp(!0);
    var A4 = new Set,
        Kib = new Set,
        Iib = new Set;
    g.Cla = function() {
        var a = A4;
        A4 = new Set;
        Jib(a);
        Lib()
    };
    var Wib = [],
        B4 = 0;
    var w4 = Symbol("idom");
    var v4 = [],
        Pib, Qib;
    var i5 = {},
        Mkb = Object.assign({}, {
            mpa: !0
        }, g.fp, (i5.gg = void 0, i5.eR = !1, i5.FT = null, i5.zP = !0, i5.bF = !1, i5[Symbol.dispose] = Vib, i5.ZE = void 0, i5.fu = "[reaction]", i5.oz = function() {
            var a = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                if (this.FT !== null && !this.Ia) {
                    if (g.Zo) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                    this.Sm = !1;
                    if (!this.eR || wib(this)) {
                        this.eR = !0;
                        Lkb++;
                        Uib(this);
                        g.cb(a, u4(this));
                        var b = g.wla(this);
                        try {
                            var c = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                g.cb(c, g.up("reactionRun",
                                    this.fu)), y4(this.FT, {
                                    stack: this.ZE
                                })
                            } catch (d) {
                                c.error = d, c.hasError = !0
                            } finally {
                                g.eb(c)
                            }
                        } finally {
                            g.xla(this, b), Wib[B4] = this.fu, B4 = (10 + B4 + 1) % 10
                        }
                    }
                }
            } catch (d) {
                a.error = d, a.hasError = !0
            } finally {
                g.eb(a)
            }
        }, i5));
    var Yib = Object.assign({}, Mkb, {
        AP: function(a) {
            a.Ia || A4.add(a)
        },
        bF: !1
    });
    var hjb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var bjb = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        ajb = {
            a: {
                href: [{
                    Bd: 3
                }]
            },
            area: {
                href: [{
                    Bd: 3
                }]
            },
            audio: {
                src: [{
                    Bd: 3
                }]
            },
            button: {
                formaction: [{
                    Bd: 3
                }],
                formmethod: [{
                    Bd: 1
                }]
            },
            form: {
                action: [{
                    Bd: 3
                }],
                method: [{
                    Bd: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    Bd: 2
                }]
            },
            img: {
                src: [{
                    Bd: 3
                }],
                srcset: [{
                    Bd: 11
                }]
            },
            input: {
                accept: [{
                    Bd: 1
                }],
                formaction: [{
                    Bd: 3
                }],
                formmethod: [{
                    Bd: 1
                }],
                pattern: [{
                    Bd: 1
                }],
                readonly: [{
                    Bd: 1
                }],
                src: [{
                    Bd: 3
                }]
            },
            link: {
                href: [{
                    Bd: 3,
                    Li: "rel",
                    Ui: "alternate"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "author"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "bookmark"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "canonical"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "cite"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "help"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "icon"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "license"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "next"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "prefetch"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "dns-prefetch"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "prerender"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "preconnect"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "preload"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "prev"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "search"
                }, {
                    Bd: 3,
                    Li: "rel",
                    Ui: "subresource"
                }]
            },
            script: {
                defer: [{
                    Bd: 1
                }]
            },
            source: {
                src: [{
                    Bd: 3
                }],
                srcset: [{
                    Bd: 11
                }]
            },
            textarea: {
                readonly: [{
                    Bd: 1
                }]
            },
            video: {
                src: [{
                    Bd: 3
                }]
            }
        };
    var Nkb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        j5 = {},
        djb = (j5[1] = {
            Ur: null,
            Su: null,
            Et: null
        }, j5[2] = {
            Ur: function() {
                return g.Uf.toString()
            },
            Su: function(a) {
                return a instanceof g.Zf
            },
            Et: function(a) {
                return g.ag(a)
            }
        }, j5[3] = {
            Ur: function(a, b, c) {
                return Nkb.test(c) ? c : g.Uf.toString()
            },
            Su: function(a) {
                return g.Qf(a)
            },
            Et: function(a) {
                return g.Rf(a)
            }
        }, j5[4] = {
            Ur: function() {
                return g.Uf.toString()
            },
            Su: function(a) {
                return a instanceof g.Mf
            },
            Et: function(a) {
                return g.Of(a)
            }
        }, j5[5] = {
            Ur: null,
            Su: function(a) {
                return typeof a === "string"
            },
            Et: function(a) {
                return a.toString()
            }
        }, j5[7] = {
            Ur: null,
            Su: null,
            Et: null
        }, j5[8] = {
            Ur: null,
            Su: null,
            Et: null
        }, j5[10] = {
            Ur: null,
            Su: null,
            Et: null
        }, j5);
    var Vjb = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var Okb = g.ip(),
        jjb = Okb.__default,
        kjb = Okb.style,
        ijb = ["focusin", "focusout"];
    var F4 = Symbol("IS_VNODE");
    var I4, H4 = G4;
    var P4 = Symbol("reactiveData");
    var Ejb = zjb;
    var V4 = {
        nna: function() {},
        Ipa: function() {},
        qna: function() {},
        PX: function() {},
        ona: function() {},
        z8: function() {},
        kF: function() {},
        dK: function() {},
        A8: function() {}
    };
    S4.prototype.kF = function() {};
    S4.prototype.z8 = function() {};
    S4.prototype.dK = function() {};
    S4.prototype.A8 = function() {};
    var T4 = null;
    g.z(U4, S4);
    U4.prototype.kz = function(a) {
        var b = T4;
        T4 = this;
        this.D = 0;
        try {
            var c = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                var d, e, f = (e = (d = this.j.fu) != null ? d : this.j.name) != null ? e : "[component]";
                g.cb(c, p4(g.G1));
                g.cb(c, u4(this.gK));
                g.cb(c, g.up("render", f));
                return this.j(a)
            } catch (h) {
                c.error = h, c.hasError = !0
            } finally {
                g.eb(c)
            }
        } finally {
            T4 = b
        }
    };
    var Hjb = [];
    g.cp = function() {
        var a = g.Xo === Tib ? Error("A Signal Setter was called within onCleanup, which can lead to infinite update loops. See go/cow-errors#signal-write-in-oncleanup for more information.") : g.Xo === g.G1 ? Error("A Signal Setter was called during rendering, which can lead to consistency issues. See go/cow-errors#signal-write-during-rendering for more information.") : Error("A Signal Setter was called within a Reaction, which can lead to infinite update loops. See go/cow-errors#signal-write-in-a-reactive-context for more information.");
        if (g.tp.R$) throw a;
        var b;
        (b = g.tp.handleError) == null || b.call.apply(b, [g.tp].concat(g.x(C4(a, "", 2))))
    };
    (function() {
        var a = g.sp;
        g.sp = function(b) {
            a == null || a(b);
            Ijb(b)
        }
    })();
    g.gp(!1);
    I4 = Fjb;
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            T1: void 0,
            u0: void 0
        }, b.T1 = V4[c], b.u0 = a[c], V4[c] = function(d) {
            return function() {
                var e = g.Ea.apply(0, arguments);
                d.T1.apply(null, g.x(e));
                d.u0.apply(null, g.x(e))
            }
        }(b)
    })({
        PX: function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.cb(b, u4(a.gK));
                var c;
                ((c = a.Zz) == null ? 0 : c.length) && Qjb(a.Zz)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                g.eb(b)
            }
        },
        kF: function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.cb(b, u4(a.gK));
                var c;
                ((c = a.Zz) == null ? 0 : c.length) && Qjb(a.Zz)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                g.eb(b)
            }
        },
        dK: function(a) {
            var b;
            ((b = a.aB) == null ? 0 : b.length) && a.aB.forEach(Pjb)
        }
    });
    I4 = Fjb;
    var bkb = new Set(["For", "If", "Match", "Watch"]),
        Pkb = {},
        Qkb = (Pkb.__default = function() {
            return E4
        }, Pkb.style = function() {
            return E4
        }, Pkb),
        k5;
    for (k5 in Qkb) g.tp.attributes[k5] = Qkb[k5](g.tp.attributes[k5]);
    var ikb = [],
        jkb = !1;
    mkb.componentType = w4;
    nkb.componentType = w4;
    pkb.componentType = w4;
    g.z(qkb, g.S);
    g.k = qkb.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.S.prototype.hide.call(this);
        rkb(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.S.prototype.show.call(this);
        rkb(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.m5 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.n5 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Ad) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.uS(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Da("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Da("ytp-suggestion-title").style.width = m + "px";
                d.Da("ytp-suggestion-author").style.width = m + "px";
                d = d.Da("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            skb(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.W = a.Jf ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.Bn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        tkb(this);
        a.Jf ? this.title.update({
            title: g.XE("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Bg(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.oa.start(this.C, a, 1E3);
        this.C = a;
        skb(this);
        rkb(this, !0)
    };
    g.z(a5, g.AY);
    a5.prototype.show = function() {
        g.AY.prototype.show.call(this);
        vkb(this, this.api.ob().getPlayerSize())
    };
    a5.prototype.resize = function(a) {
        g.AY.prototype.resize.call(this, a);
        this.j && (vkb(this, a), g.Qp(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    a5.prototype.B = function(a) {
        g.AY.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.AE || b.playerErrorMessageRenderer)(a = b.AE) ? ykb(this, a) : b.playerErrorMessageRenderer && ykb(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.zo && (b.Vw ? wkb(b.Vw) ? c = g.by(b.Vw) : c = g.BY(g.ay(b.Vw)) : c = g.BY(a.zo), this.Fd(c, "subreason"))
        }
    };
    g.z(zkb, g.S);
    g.k = zkb.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = Gib(),
            c = 96714;
        g.ZR(a) ? (b = Hib(), c = 216165, g.Mp(this.element, "ytp-music-impression-link")) : g.Op(this.element, "ytp-music-impression-link");
        this.api.U().L("embeds_enable_emc3ds_woyt_counterfactual") && g.Mp(this.element, "ytp-woyt-emc3ds-cf");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.lj = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.EV = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Jf,
            d = b.Nd && !b.L("embeds_enable_emc3ds_woyt_counterfactual"),
            e = !b.Ad,
            f = this.Se.Sg() && !b.L("embeds_enable_emc3ds_woyt_counterfactual");
        b = b.C;
        d || f || c || e || b || this.api.fd() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = Akb(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = Akb(this);
        g.lT(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.S.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(b5, g.S);
    b5.prototype.lj = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.Ph() || g.U(a, 2) && g.rS(this.api) || g.U(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    b5.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    b5.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z(c5, g.S);
    c5.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.U(a, 2) && !this.Eb ? (this.show(), this.j || (this.j = new g.yY(this.api), g.P(this, this.j), this.j.Ha(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.WW), g.Qp(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Eb), this.api.Cd("onMutedAutoplayEnds")) : this.hide())
    };
    c5.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.Qp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            vib(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.HB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    c5.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.z(d5, g.S);
    g.k = d5.prototype;
    g.k.onStateChange = function(a) {
        this.yd(a.state)
    };
    g.k.yd = function(a) {
        this.state !== a && (this.state = a);
        Bkb(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.Mp(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Mc(this.j), this.j = null);
        a = Gib();
        var c = 76758;
        g.ZR(b) && (a = Hib(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        Bkb(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.jz(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.eS(this.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.gj(b, c)
        }
        g.lT(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.kc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.S(Gib()),
                c = this.Da("ytp-watermark");
            g.Qp(c, "ytp-watermark-small", a);
            g.th(c);
            b.Ha(c);
            this.B = a
        }
    };
    g.z(Ekb, g.S);
    g.k = Ekb.prototype;
    g.k.XN = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.U(a, 2) ? this.hide() : this.Eb || (g.S.prototype.show.call(this), this.api.logVisibility(this.element, this.Eb))
    };
    g.k.B$ = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        vib(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.Qp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            vib(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.HB();
            this.api.logClick(this.element);
            this.api.Cd("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.z(e5, g.S);
    e5.prototype.hide = function() {
        g.Op(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.S.prototype.hide.call(this)
    };
    e5.prototype.G = function() {
        this.B = !0;
        g.Op(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.fd() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    e5.prototype.K = function() {
        this.B = !1;
        g.Mp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.fd() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    e5.prototype.Ra = function() {
        var a = this.api.getPlayerStateObject();
        g.U(a, 1) || g.U(a, 16) || g.U(a, 32) || (!g.U(a, 4) || g.U(a, 2) || g.U(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.Mp(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.q1(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.z(f5, g.S);
    f5.prototype.show = function() {
        g.S.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    f5.prototype.xa = function() {
        g5(this);
        g.S.prototype.xa.call(this)
    };
    g.z(Ikb, g.hY);
    g.k = Ikb.prototype;
    g.k.Ln = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.iS(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.GA({
            clientPlaybackNonce: d
        });
        a.Va && !a.disableOrganicUi && Kkb(this);
        var e;
        this.J.L("embeds_enable_emc3ds_muted_autoplay") && ((e = a.getWebPlayerContextConfig()) == null ? 0 : e.embedsEnableEmc3ds) || (this.Z = new Ekb(this.J), g.P(this, this.Z), g.US(this.J, this.Z.element, 4), this.qa = new c5(this.J), g.P(this, this.qa), g.US(this.J, this.qa.element, 4));
        a.Nd && (this.watermark = new d5(this.J), g.P(this, this.watermark),
            g.US(this.J, this.watermark.element, 8));
        b && !a.disableOrganicUi && (this.K = new zkb(this.J, b), g.P(this, this.K), g.US(this.J, this.K.element, 8), this.J.isMutedByEmbedsMutedAutoplay() && (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && !a.disableOrganicUi && (this.oa = new b5(this.J), g.P(this, this.oa), g.US(this.J, this.oa.element, 4));
        this.j.T(this.J, "appresize", this.kc);
        this.j.T(this.J, "presentingplayerstatechange", this.lj);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset",
            this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J, "onAdComplete", this.onAdComplete);
        this.j.T(this.J, "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.Ps(g.UP(a))) this.countdownTimer = new f5(this.J), g.P(this, this.countdownTimer), g.US(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.ME("embeds"), this.onCueRangeEnter), this.j.T(this.J,
            g.NE("embeds"), this.onCueRangeExit);
        this.Ec(this.J.getPlayerStateObject());
        this.player.Gg("embed");
        var f, h;
        ((f = this.J.U().getWebPlayerContextConfig()) == null ? 0 : (h = f.embedsHostFlags) == null ? 0 : h.allowOverridingVisitorDataPlayerVars) && (a = g.zr("IDENTITY_MEMENTO")) && this.J.tf("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), Gkb(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (g5(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.kc = function() {
        var a = this.J.ob().getPlayerSize();
        this.zg && this.zg.resize(a)
    };
    g.k.onReset = function() {
        Hkb(this)
    };
    g.k.lj = function(a) {
        this.Ec(a.state)
    };
    g.k.Ec = function(a) {
        g.U(a, 128) ? (this.zg || (this.zg = new a5(this.J), g.P(this, this.zg), g.US(this.J, this.zg.element, 4)), this.zg.B(a.Pg), this.zg.show(), g.Mp(this.J.getRootNode(), "ytp-embed-error")) : this.zg && (this.zg.dispose(), this.zg = null, g.Op(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.U(a, 64)) this.countdownTimer.hide(), g5(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.hu)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.hu)() - b.G, b.B = !1, Fkb(b)));
        Jkb(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.Qp(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.DG !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.fd()
        };
        g.Qt("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.DG = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.kf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.uS(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.KE(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.qf([b]))), this.J.U().Va && !this.J.U().disableOrganicUi && (Hkb(this), Kkb(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        h5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        h5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        h5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && h5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.gY("embed", Ikb);
})(_yt_player);