(function(g) {
    var window = this;
    'use strict';
    var S2 = function(a) {
            a.publish("cardstatechange", a.El() && a.Xp() ? 1 : 0)
        },
        T2 = function(a, b) {
            var c = g.Sa(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (a == null) return;
                a = a[d[c]]
            }
            return a
        },
        Feb = function(a) {
            var b = g.Om(a);
            a = g.Rm(a);
            return new g.Cm(b.x, b.y, a.width, a.height)
        },
        Geb = function(a, b, c) {
            var d = d === void 0 ? {} : d;
            var e;
            return e = g.at(a, b, function() {
                g.bt(e);
                c.apply(a, arguments)
            }, d)
        },
        W2 = function(a) {
            a = g.Wa(a);
            delete U2[a];
            g.Sg(U2) && V2 && V2.stop()
        },
        Ieb = function() {
            V2 || (V2 = new g.Ep(function() {
                Heb()
            }, 20));
            var a = V2;
            a.isActive() || a.start()
        },
        Heb = function() {
            var a = g.Za();
            g.Ig(U2, function(b) {
                Jeb(b, a)
            });
            g.Sg(U2) || Ieb()
        },
        X2 = function(a, b, c, d) {
            g.Rp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.B = a;
            this.N = b;
            this.duration = c;
            this.G = d;
            this.coords = [];
            this.progress = this.K = 0;
            this.D = null
        },
        Jeb = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            a.progress > 1 && (a.progress = 1);
            a.K = 1E3 / (b - a.D);
            a.D = b;
            Keb(a, a.progress);
            a.progress == 1 ? (a.j = 0, W2(a), a.onFinish(), a.Ns()) : a.isPlaying() && a.AO()
        },
        Keb = function(a, b) {
            typeof a.G === "function" && (b = a.G(b));
            a.coords = Array(a.B.length);
            for (var c = 0; c < a.B.length; c++) a.coords[c] = (a.N[c] - a.B[c]) * b + a.B[c]
        },
        Leb = function(a, b) {
            g.bi.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.K;
            this.state = b.j
        },
        Y2 = function(a, b, c, d, e) {
            X2.call(this, b, c, d, e);
            this.element = a
        },
        Meb = function(a, b, c, d, e) {
            if (b.length != 2 || c.length != 2) throw Error("Start and end points must be 2D");
            Y2.call(this, a, b, c, d, e)
        },
        Neb = function(a) {
            return Math.pow(a, 3)
        },
        Oeb = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        Peb = function(a) {
            g.O.call(this);
            this.B = a || window;
            this.j = []
        },
        Z2 = function(a) {
            return a.baseUrl || null
        },
        $2 = function(a, b) {
            return g.Bn(g.Ql(a, b), function(c) {
                return !!c
            })
        },
        Qeb = function(a, b, c) {
            function d(la) {
                var W = la.hovercardButton;
                if (!W) return null;
                W = W.subscribeButtonRenderer;
                if (!W) return null;
                var R = f(W.unsubscribedButtonText),
                    Y = f(W.subscribedButtonText);
                if (W.subscribed) {
                    var v = f(W.subscriberCountWithUnsubscribeText);
                    var T = f(W.subscriberCountText)
                } else v = f(W.subscriberCountText), T = f(W.subscriberCountWithSubscribeText);
                var $a = null;
                if (la.signinEndpoint) {
                    $a = T2(la, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!$a) {
                        var ub, pb;
                        $a = (pb = g.Q((ub = W.signInEndpoint) == null ? void 0 : ub.commandMetadata, g.L1)) == null ? void 0 : pb.url
                    }
                    if (!$a) return null
                }
                return R &&
                    (Y || $a) ? {
                        subscribed: W.subscribed,
                        subscribeText: R,
                        subscribeCount: v,
                        unsubscribeText: Y,
                        unsubscribeCount: T,
                        enabled: W.enabled,
                        signinUrl: $a,
                        classic: la.useClassicSubscribeButton
                    } : null
            }

            function e(la) {
                if (la) {
                    var W = [],
                        R = la.videoId;
                    R && W.push("v=" + R);
                    (R = la.playlistId) && W.push("list=" + R);
                    (la = la.startTimeSeconds) && W.push("t=" + la);
                    return "/watch?" + W.join("&")
                }
            }

            function f(la) {
                if (!la) return null;
                var W = la.simpleText;
                return W ? W : la.runs ? g.Ql(la.runs, function(R) {
                    return R.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                r = null,
                t = null,
                u = null,
                y = !1,
                A = null,
                C = null,
                F = null,
                H = null,
                L = null,
                N = null;
            if (h === "VIDEO") g.Q(l, g.uy) ? m = g.Q(l, g.uy).url : (N = g.Q(l, g.rR), m = e(N)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = p.style === "LIVE") : r = f(b.videoDuration);
            else if (h === "PLAYLIST") g.Q(l, g.uy) ? m = g.Q(l, g.uy).url : (N = g.Q(l, g.rR), m = e(N)), n = !1, q = a, t = f(b.playlistLength);
            else if (h ===
                "CHANNEL") {
                if (y = T2(l, "browseEndpoint", "browseId")) u = y, m = "/channel/" + u;
                n = !1;
                q = "new";
                (y = !!b.isSubscribe) ? A = d(b): C = f(b.subscribersText)
            } else h === "WEBSITE" ? ((F = T2(l, "urlEndpoint", "url")) && (m = F), n = !0, q = "new", F = b.icon.thumbnails[0].url) : h === "CREATOR_MERCHANDISE" && (b.productPrice && (H = f(b.productPrice)), b.additionalFeesText && (L = f(b.additionalFeesText)), (n = T2(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = T2(b, "title", "accessibility", "accessibilityData", "label");
            var X = b.endpoint ? b.endpoint.clickTrackingParams :
                null,
                V = "";
            if (b.metadata) {
                var ca = f(b.metadata);
                ca && (V = ca)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: V,
                callToAction: f(b.callToAction),
                vY: b.image,
                iconUrl: F,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: r,
                rG: p,
                playlistLength: t,
                channelId: u,
                subscribeButton: A,
                subscribersText: C,
                isSubscribe: y,
                targetUrl: m || null,
                M$: n,
                sessionData: X ? {
                    itct: X
                } : null,
                rfa: q,
                GE: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: $2(b.impressionUrls || [], Z2),
                C$: $2(b.hovercardShowUrls || [], Z2),
                clickUrls: $2(l.loggingUrls || [], Z2),
                visualElement: g.ex(b.trackingParams),
                productPrice: H,
                additionalFeesText: L,
                watchEndpoint: N || null
            }
        },
        Reb = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: $2(a.impressionUrls || [], Z2),
                elements: $2(a.elements || [], function(d, e) {
                    return Qeb(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.ex(a.trackingParams));
            return c
        },
        Seb = function(a) {
            g.hY.call(this, a);
            this.C = this.endscreen = null;
            this.j = {};
            this.G = {};
            this.D = this.B = null;
            this.N = [];
            this.W = !0;
            this.K = 0;
            a = a.U();
            this.Z = g.RP(a) || g.TP(a);
            this.events = new g.jG(this);
            g.P(this, this.events);
            this.events.T(this.player, g.ME("creatorendscreen"), this.onCueRangeEnter);
            this.events.T(this.player, g.NE("creatorendscreen"), this.onCueRangeExit);
            this.events.T(this.player, "resize", this.kc);
            this.events.T(window, "focus", this.sda);
            this.load();
            var b = g.qh("STYLE");
            (g.hh("HEAD")[0] || document.body).appendChild(b);
            this.addOnDisposeCallback(function() {
                g.vh(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Teb = function(a) {
            return a.player.getVideoData().Jf ? "current" : a.Z ? "new" : "current"
        },
        a3 = function(a) {
            return a.player.U().playerStyle === "creator-endscreen-editor"
        },
        Ueb = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.C && a.C.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.C = null;
                    e.status === 200 && (e = e.responseText, e.substring(0, 3) === ")]}" && (e = e.substring(3), f = JSON.parse(e), f = Reb(f, Teb(a))));
                    b3(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.Z && (c.urlParams.ptype = "embedded");
            var d = b.Sw;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.jMa(b))
                if (b = g.Vf(b), b = g.Rf(b)) a.C = g.ds(b, c)
        },
        b3 = function(a, b, c) {
            c = c === void 0 ? !0 : c;
            a.player.kf("creatorendscreen");
            a.B && (a.B.dispose(), a.B = null, a.D.dispose(), a.D = null);
            for (var d = g.w(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.G = {};
            a.N.length > 0 && (a.N.forEach(function(l) {
                l.dispose()
            }), a.N.length = 0);
            a.K = 0;
            if ((a.endscreen = b) && b.elements) {
                c && Veb(a);
                c = [];
                d = new g.KE(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.U().B || (a.B = new g.S({
                    I: "div",
                    S: "ytp-ce-shadow"
                }), g.US(a.player, a.B.element, 4), a.D = new g.Ny(a.B, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = Web(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.G[e.id] = e;
                        g.US(a.player, f.element, 4);
                        var h = new g.KE(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        Xeb(a, f, e)
                    } else g.qx(new g.At("buildEndscreenElement null",
                        e))
                }
                a.player.qf(c);
                a.kc()
            }
        },
        Veb = function(a) {
            var b = g.gx(),
                c = g.hx();
            c && b && a.endscreen.visualElement && g.Dr(g.Cx)(void 0, c, b, a.endscreen.visualElement)
        },
        Web = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.GE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: c3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: d3(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Vp(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: b.rG ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                va: b.videoDuration || void 0
                            }]
                        }]
                    };
                    c = new g.S(a);
                    break;
                case "PLAYLIST":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.GE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: c3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: d3(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Vp(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: "ytp-ce-playlist-count",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-playlist-icon"
                                }, {
                                    I: "div",
                                    S: "ytp-ce-playlist-count-text",
                                    va: b.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    c = new g.S(a);
                    break;
                case "CHANNEL":
                    c = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.GE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "a",
                                            La: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: d3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.Vp(b.title || "")
                                            },
                                            va: b.title
                                        }, b.subscribeButton ? {
                                            I: "div",
                                            S: "ytp-ce-subscribe-container",
                                            V: [{
                                                I: "div",
                                                S: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            I: "div",
                                            S: "ytp-ce-channel-subscribers-text",
                                            va: b.subscribersText
                                        } : "", b.metadata ? {
                                            I: "div",
                                            La: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            va: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: c3(b)
                        }]
                    };
                    c = new g.S(c);
                    var d = g.ih(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.Mp(d, "ytp-ce-subscribe-button");
                        if (a.player.U().B) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.NY(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                            b.channelId, !!b.subscribeButton.subscribed, e, f, a.player, !1);
                        d.appendChild(e.element);
                        a.N.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.GE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-website-title",
                                            X: {
                                                dir: g.Vp(b.title || "")
                                            },
                                            va: b.title
                                        }, {
                                            I: "div",
                                            S: "ytp-ce-website-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: d3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: c3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-icon",
                            X: Yeb(b.iconUrl)
                        }]
                    };
                    c = new g.S(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        I: "div",
                        S: "ytp-ce-merchandise-price-container",
                        V: [{
                            I: "div",
                            S: "ytp-ce-merchandise-price",
                            va: b.productPrice
                        }]
                    }, b.additionalFeesText && c.V.push({
                        I: "div",
                        S: "ytp-ce-merchandise-additional-fees",
                        va: b.additionalFeesText
                    })), a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-merchandise"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.GE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-merchandise-title",
                                            X: {
                                                dir: g.Vp(b.title || "")
                                            },
                                            va: b.title
                                        }, c, {
                                            I: "div",
                                            S: "ytp-ce-merchandise-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            X: {
                                                href: d3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: c3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-merchandise-invideo-cta-container",
                            V: [{
                                I: "div",
                                S: "ytp-ce-merchandise-invideo-cta",
                                va: b.callToAction || void 0
                            }]
                        }]
                    }, c = new g.S(a)
            }
            b.isPlaceholder && g.Mp(c.element, "ytp-ce-placeholder");
            return c
        },
        c3 = function(a) {
            if (a.vY) var b = a.vY.thumbnails;
            return Yeb(b ? b[b.length - 1].url : null)
        },
        Yeb = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        Xeb = function(a, b, c) {
            function d(m) {
                m && (b.listen("blur", function() {
                    m.style.display != "none" && a.W && m.focus()
                }), b.T(m, "focus", f), b.T(m, "blur", h))
            }

            function e(m) {
                a.K += m;
                a.K > 0 ? (g.Mp(b.element, "ytp-ce-force-expand"), e3(a, c.id, !0)) : (g.Op(b.element, "ytp-ce-force-expand"), g.Op(b.element, "ytp-ce-element-hover"), e3(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.listen("mouseenter", function() {
                Zeb(a, b, c)
            });
            b.listen("mouseleave", function() {
                $eb(a, b, c)
            });
            a.player.U().B || b.listen("click", function() {
                g.Mp(b.element, "ytp-ce-element-hover")
            });
            b.listen("click", function(m) {
                afb(a, c, m)
            });
            b.listen("keypress", function(m) {
                afb(a, c, m)
            });
            b.listen("focus", function() {
                Zeb(a, b, c)
            });
            b.listen("blur", function() {
                $eb(a, b, c)
            });
            b.listen("touchstart", function() {
                Zeb(a, b, c)
            });
            var l = g.kh("ytp-ce-expanding-overlay-hider", b.element);
            l && b.T(l, "touchstart", function(m) {
                m.stopPropagation();
                g.Op(b.element, "ytp-ce-element-hover");
                g.Op(b.element, "ytp-ce-force-expand")
            });
            b.listen("keydown", function(m) {
                a.W = m.keyCode === 9 && !m.shiftKey
            });
            d(g.kh("ytp-sb-subscribe", b.element));
            d(g.kh("ytp-sb-unsubscribe", b.element));
            b.listen("focus", f);
            b.listen("blur", h)
        },
        afb = function(a, b, c) {
            if (b.targetUrl && (!c || c.type !== "keypress" || c.keyCode === 13)) {
                for (var d = c.target; d && !g.Lp(d, "ytp-ce-element");) {
                    g.Lp(d, "subscribe-label") && bfb(a, b);
                    if (g.Lp(d, "ytp-ce-channel-subscribe")) return;
                    d = d.parentElement || null
                }
                if (!d || g.Lp(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) $eb(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || b.rfa === "new") bfb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.Vf(d3(a, b.targetUrl)), c = g.Rf(c), g.Uz(c, void 0, b.sessionData);
                    else {
                        var e = g.fQ(a.player.U()) || a.player.getVideoData().Jf,
                            f = function() {
                                var h = d3(a, b.targetUrl),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n =
                                    g.Jr(h);
                                e && n && (n.v || n.list) ? a.player.Ip(n.v, l, n.list, !1, void 0, m || void 0) : g.Tz(h, l)
                            };
                        bfb(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        d3 = function(a, b) {
            a = a.player.U();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.nQ(a) + b
            } else return "";
            return b
        },
        Zeb = function(a, b, c) {
            g.Lp(b.element, "ytp-ce-element-hover") || (c.type === "VIDEO" || c.type === "PLAYLIST" ? g.Mp(b.element, "ytp-ce-element-hover") : a.player.U().B ? (new g.Ep(function() {
                g.Mp(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.Mp(b.element, "ytp-ce-element-hover"), f3(a, c.C$), e3(a, c.id, !0))
        },
        $eb = function(a, b, c) {
            g.Op(b.element, "ytp-ce-element-hover");
            g.Op(b.element, "ytp-ce-force-expand");
            e3(a, c.id, !1)
        },
        e3 = function(a, b, c) {
            a.B && (c ? a.D.show() : a.D.hide());
            for (var d = g.w(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.Qp(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        f3 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || b.length === 0 || a3(a)) c && c();
            else {
                b = cfb(a, b);
                var e = 0,
                    f = !1,
                    h = new g.Ep(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.Av(b[a], d)
            }
        },
        bfb = function(a, b, c) {
            f3(a, b.clickUrls, c);
            (a = g.hx()) && b.M$ && g.Nx(a, b.visualElement)
        },
        cfb = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(dfb(b[d], c));
            return a
        },
        dfb = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        efb = function(a) {
            return typeof a === "string" ? a : ""
        },
        g3 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        ffb = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        h3 = function(a) {
            return a.value ? a.value : null
        },
        i3 = function(a) {
            if (!a) return null;
            var b = g.Vf(efb(a.value));
            b = g.Rf(b);
            if (!b) return null;
            var c = g3(a.target, gfb, "current");
            if (c == null) a = null;
            else {
                var d = a.show_link_icon;
                a = new ffb(b, c, d === "true" || d === "false" ? d === "true" : !0, a.pause_on_navigation != null ? a.pause_on_navigation : !0)
            }
            return a
        },
        hfb = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        kfb = function(a) {
            if (!a) return null;
            var b = g3(a.type, ifb),
                c = g3(a.trigger, jfb);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = i3(a ? a : null);
            return b ? new hfb(b, c, a) : null
        },
        lfb = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        mfb = function(a, b) {
            return g.Ub(a.action, b)
        },
        nfb = function(a, b) {
            this.context = a;
            this.j = b
        },
        ofb = function(a) {
            return a.customMessage ? j3("div", "iv-card-message", a.customMessage) : ""
        },
        k3 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                I: "div",
                S: "iv-card-image",
                X: {
                    style: a
                },
                V: c
            }
        },
        pfb = function(a) {
            if (!a.metaInfo || a.metaInfo.length === 0) return "";
            var b = [];
            a = g.w(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push(j3("li", "", c.value));
            return {
                I: "ul",
                S: "iv-card-meta-info",
                V: b
            }
        },
        j3 = function(a, b, c) {
            b ? typeof b === "string" ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.Vp(c);
            return {
                I: a,
                X: b,
                va: c
            }
        },
        qfb = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.UE && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.UE + ");");
            c.dir = g.Vp(a.customMessage);
            var d = [{
                I: "span",
                va: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                I: "span",
                S: "iv-card-link-icon"
            }));
            return {
                I: "div",
                La: b,
                X: c,
                V: d
            }
        },
        l3 = function(a, b, c, d) {
            if (d) {
                b = g.w(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.wj.click, 5)
            }
        },
        rfb = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        sfb = function(a) {
            var b;
            (b = a) && !(b = a.length > 1 ? a.charAt(0) === "/" && a.charAt(1) !== "/" : a === "/") && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || b.length < 1 || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = b[0] === "com" && b[1] === "youtube" || b[0] === "be" && b[1] === "youtu");
            return b ? a.indexOf("/redirect?") === -1 : !1
        },
        tfb = function(a, b) {
            return b ? b : sfb(a) ? "current" : "new"
        },
        m3 = function(a, b) {
            g.O.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.kb = !1;
            this.Ta = new Map;
            this.Va = new Map;
            this.context.J.addEventListener(g.ME("annotations_module"), function(d) {
                (d = c.Ta.get(d)) && d.apply(c)
            });
            this.context.J.addEventListener(g.NE("annotations_module"), function(d) {
                (d = c.Va.get(d)) && d.apply(c)
            })
        },
        n3 = function(a, b, c, d, e, f, h) {
            a.context.j.listen(b, "click", function(l) {
                a.VN(c, d, e, f || [], h || 0, l)
            });
            a.context.j.listen(b, "touchstart", function() {
                a.kb = !1
            });
            a.context.j.listen(b, "touchmove", function() {
                a.kb = !0
            })
        },
        ufb = function(a) {
            var b;
            return ((b = g.Q(a, g.uy)) == null ? 0 : b.url) ? g.Q(a, g.uy).url : (a = g.Q(a, g.rR)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        o3 = function(a, b, c) {
            return {
                UZ: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                t3: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                xN: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        vfb = function(a, b, c) {
            m3.call(this, b, c);
            var d = this;
            this.J = a;
            this.eventId = null;
            this.Bb = this.Ka = this.Gb = this.C = this.isInitialized = !1;
            this.cards = [];
            this.rb = this.Z = this.Ja = this.G = this.Ua = this.j = null;
            this.oa = [];
            this.qa = this.N = this.Gf = this.Fa = null;
            this.K = 0;
            this.Ca = new g.Ep(function() {}, c.Y.jk ? 4E3 : 3E3);
            g.P(this, this.Ca);
            this.ib = new g.Ep(function() {});
            g.P(this, this.ib);
            this.Aa = new nfb(c, function(e, f, h, l, m, n) {
                n3(d, e, f, h, l, m, n)
            });
            this.W = new g.S({
                I: "div",
                S: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                V: [{
                    I: "div",
                    S: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    V: [{
                        I: "span",
                        S: "iv-drawer-header-text"
                    }, {
                        I: "button",
                        La: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    I: "div",
                    S: "iv-drawer-content"
                }]
            });
            g.P(this, this.W);
            this.D = this.W.element;
            this.Ya = new g.Ny(this.W, 330);
            g.P(this, this.Ya);
            this.Kb = g.kh("iv-drawer-header-text", this.D);
            this.B = g.kh("iv-drawer-content", this.D);
            this.addCueRange(0, c.videoData.lengthSeconds *
                1E3, "",
                function() {
                    d.Gb && p3(d, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (d.Gb = d.C) && q3(d)
                });
            this.Oa = new g.jG(this);
            g.P(this, this.Oa);
            this.J.addEventListener("videodatachange", this.Gu.bind(this))
        },
        wfb = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                p3(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                q3(a)
            });
            var c = b.headerText;
            g.zh(a.Kb, c);
            a.Z && a.Z.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Fa = g.ex(b.trackingParams);
            a.N = g.ex(b.closeTrackingParams);
            a.Gf = g.ex(b.iconTrackingParams)
        },
        xfb = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.K,
                d = a.J.U().experiments.bb("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.K,
                    type: "simple",
                    teaserText: g.ay(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    wj: {},
                    aq: null,
                    gk: e.trackingParams ? g.ex(e.trackingParams) : null,
                    Gf: f && f.trackingParams ? g.ex(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    UE: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                r3(a, b)
            } else {
                var h;
                if ((h = b.content) == null ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = (e = b.content) == null ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.K,
                        type: "simple",
                        teaserText: g.ay(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: s3(a, c, b, f),
                        sponsored: !1,
                        wj: o3(f, e, f.command),
                        aq: f.trackingParams ? g.ex(f.trackingParams) : null,
                        gk: e.trackingParams ? g.ex(e.trackingParams) : null,
                        Gf: l && l.trackingParams ? g.ex(l.trackingParams) : null,
                        imageUrl: t3(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.ay(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        UE: null,
                        title: f.title ? g.ay(f.title) : "",
                        customMessage: f.callToAction ? g.ay(f.callToAction) : "",
                        url: g.Q(f.command, g.uy).url ? i3({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.Q(f.command, g.uy).url
                        }) : null,
                        onClickCommand: null
                    };
                    r3(a, b)
                } else {
                    var m;
                    if ((m = b.content) == null ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = (f = b.content) == null ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.K,
                            type: "collaborator",
                            teaserText: g.ay(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: s3(a, c, b, e),
                            sponsored: !1,
                            wj: o3(e, f, e.endpoint),
                            aq: e.trackingParams ? g.ex(e.trackingParams) : null,
                            gk: f.trackingParams ? g.ex(f.trackingParams) : null,
                            Gf: l && l.trackingParams ? g.ex(l.trackingParams) : null,
                            channelId: g.Q(e.endpoint, g.GR).browseId,
                            customMessage: e.customText ? g.ay(e.customText) : null,
                            profileImageUrl: t3(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.ay(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.ay(e.subscriberCountText) : ""],
                            url: i3({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.Q(e.endpoint, g.GR).canonicalBaseUrl ? g.Q(e.endpoint, g.GR).canonicalBaseUrl : "/channel/" + g.Q(e.endpoint, g.GR).browseId
                            }),
                            onClickCommand: null
                        };
                        r3(a, b)
                    } else {
                        var n;
                        if ((n = b.content) == null ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = (l = b.content) == null ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.K,
                                type: "playlist",
                                teaserText: g.ay(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: s3(a, c, b, e),
                                sponsored: !1,
                                wj: o3(e, f, e.action),
                                aq: e.trackingParams ? g.ex(e.trackingParams) : null,
                                gk: f.trackingParams ? g.ex(f.trackingParams) : null,
                                Gf: l && l.trackingParams ? g.ex(l.trackingParams) : null,
                                AI: t3(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.ay(e.customMessage) : null,
                                playlistVideoCount: g.ay(e.playlistVideoCount),
                                title: e.playlistTitle ? g.ay(e.playlistTitle) : "",
                                metaInfo: [e.channelName ? g.ay(e.channelName) :
                                    "", e.videoCountText ? g.ay(e.videoCountText) : ""
                                ],
                                url: i3({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: ufb(e.action)
                                }),
                                onClickCommand: null
                            };
                            r3(a, b)
                        } else {
                            var p;
                            if ((p = b.content) == null ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = (q = b.content) == null ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.K,
                                    type: "video",
                                    teaserText: g.ay(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: s3(a, c, b, e),
                                    sponsored: !1,
                                    wj: o3(e, f, e.action),
                                    aq: e.trackingParams ? g.ex(e.trackingParams) : null,
                                    gk: f.trackingParams ? g.ex(f.trackingParams) : null,
                                    Gf: l && l.trackingParams ? g.ex(l.trackingParams) : null,
                                    AI: t3(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.ay(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.ay(e.customMessage) : null,
                                    title: e.videoTitle ? g.ay(e.videoTitle) : "",
                                    metaInfo: [e.channelName ? g.ay(e.channelName) :
                                        "", e.viewCountText ? g.ay(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: i3({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: ufb(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                r3(a, b)
                            }
                        }
                    }
                }
            }
            a.K++
        },
        t3 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || a[e].width === 290) return a[e];
                ((a[e].height || 0) < b || (a[e].width || 0) < 290) && (c < 0 || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || (a[e].width || 0) >= 290) && (d < 0 || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[d >= 0 ? d : c]
        },
        s3 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        zfb = function(a, b) {
            if (b = yfb(a, b)) b === a.j && (a.j = null), a.J.removeCueRange(b.Bf.id), g.vh(b.hP), g.Yb(a.cards, b), a.HJ(), u3(a)
        },
        p3 = function(a, b, c) {
            if (!a.C) {
                a.Ya.show();
                a.Ua = new g.Ep(function() {
                    g.Mp(a.context.J.getRootNode(), g.S_.IV_DRAWER_OPEN)
                }, 0);
                a.Ua.start();
                a.Oa.T(a.B, "mousewheel", function(h) {
                    a.Ca.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    h.type == "MozMousePixelScroll" ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = h.wheelDelta % 120 == 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") == 0 ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.B.scrollTop += h
                });
                a.C = !0;
                var d = g.hx();
                d && a.Fa && a.N && g.Lx(d, [a.Fa, a.N]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.w(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.W_ || (f.W_ = !0, Afb(a.context.logger, f.Bf.wj.UZ, b)), d && g.Lx(d, [f.Bf.aq]);
                S2(a.J);
                c && (a.G = new g.Ep(function() {
                    a.Ja = a.Z;
                    a.rb.focus()
                }, 330), a.G.start())
            }
        },
        q3 = function(a) {
            a.C && (a.Ya.hide(), g.ht(a.Oa), g.Op(a.context.J.getRootNode(), g.S_.IV_DRAWER_OPEN), a.C = !1, S2(a.J), a.G && a.G.stop(), a.G = new g.Ep(function() {
                a.Ja && (a.Ja.focus(), a.Ja = null)
            }, 330), a.G.start())
        },
        Bfb = function(a) {
            g.Np(a.Ib(), [g.S_.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.US(a.J, a.D, 5);
            a.tJ();
            a.Z = g.kh("ytp-cards-button", a.J.getRootNode());
            a.rb = g.kh("iv-drawer-close-button", a.D);
            a.isInitialized = !0
        },
        Cfb = function(a) {
            a.oa.push(g.Sv("iv-teaser-shown", a.g5, a));
            a.oa.push(g.Sv("iv-teaser-hidden", a.jaa, a));
            a.oa.push(g.Sv("iv-teaser-clicked", a.f5, a));
            a.Bb = !0
        },
        Dfb = function(a, b) {
            var c;
            return b.onClickCommand && ((c = g.Q(b.onClickCommand, g.qcb)) == null ? void 0 : c.targetId) === "engagement-panel-error-corrections" ? (a.qa = b, !0) : !1
        },
        Efb = function(a, b) {
            a.qa = b;
            var c = a.J.getVideoData();
            if (!c) return !1;
            c = g.JQ(c);
            if (c == null ? 0 : c.markersMap)
                for (var d, e = 0;
                    ((d = c) == null ? void 0 : d.markersMap.length) > e; e++) {
                    var f = void 0,
                        h = (f = c) == null ? void 0 : f.markersMap[e];
                    if (h.key === "ERROR_CORRECTION_MARKERS" && (f = void 0, (h = (f = h.value) == null ? void 0 : f.markers) && h.length > 0)) return d = void 0, b.startMs = ((d = g.Q(h[0], g.Z3a)) == null ? void 0 : d.timeRangeStartMillis) || 0, a.qa = null, !0
                }
            return !1
        },
        r3 = function(a, b) {
            if (!Dfb(a, b) || Efb(a, b)) {
                var c = Ffb(a, b);
                if (c) {
                    var d = {
                        Bf: b,
                        hP: c.element,
                        W_: !1
                    };
                    if (b.onClickCommand) a.J.L("web_infocards_teaser_show_logging_fix") && (a.Bb || Cfb(a), zfb(a, b.id), c = a.findLastIndex(d), g.dc(a.cards, c, 0, d));
                    else {
                        a.isInitialized || Bfb(a);
                        zfb(a, b.id);
                        var e = a.findLastIndex(d);
                        g.dc(a.cards, e, 0, d);
                        c.Ha(a.B, e);
                        a.HJ()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.C || (a.j = d, u3(a), Gfb(a, d), p3(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = a.context.J.getCurrentTime() * 1E3, c < 5E3 && c > b.startMs && Hfb(a, d), a.addCueRange(b.startMs,
                        b.startMs + 1, b.id,
                        function() {
                            Hfb(a, d)
                        }), u3(a))
                }
            }
        },
        Ffb = function(a, b) {
            switch (b.type) {
                case "simple":
                    a = a.Aa;
                    var c = b.displayDomain ? {
                        I: "div",
                        S: "iv-card-image-text",
                        va: b.displayDomain
                    } : void 0;
                    var d = qfb(b);
                    c = {
                        I: "div",
                        La: ["iv-card"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: b.url ? h3(b.url) || "" : ""
                            },
                            V: [k3(b.imageUrl, c), {
                                I: "div",
                                S: "iv-card-content",
                                V: [j3("h2", void 0, b.title), d]
                            }]
                        }]
                    };
                    c = new g.S(c);
                    l3(a, g.jh("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "collaborator":
                    a = a.Aa;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-channel"],
                        V: [{
                            I: "a",
                            La: ["iv-click-target"],
                            X: {
                                href: h3(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            V: [k3(b.profileImageUrl),
                                {
                                    I: "div",
                                    S: "iv-card-content",
                                    V: [ofb(b), {
                                        I: "h2",
                                        S: "iv-card-primary-link",
                                        va: b.title
                                    }, pfb(b)]
                                }
                            ]
                        }]
                    };
                    c = new g.S(c);
                    l3(a, g.jh("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "playlist":
                    a = a.Aa;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-playlist"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: h3(b.url) || ""
                            },
                            V: [k3(b.AI, {
                                I: "div",
                                S: "iv-card-image-overlay",
                                V: [{
                                    I: "span",
                                    S: "iv-card-playlist-video-count",
                                    va: b.playlistVideoCount
                                }]
                            }), {
                                I: "div",
                                S: "iv-card-content",
                                V: [ofb(b), j3("h2", "iv-card-primary-link", b.title), pfb(b)]
                            }]
                        }]
                    };
                    c = new g.S(c);
                    l3(a, g.jh("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "productListing":
                    a = a.Aa;
                    var e = b.offers.length != 0;
                    c = ["iv-card"];
                    d = "";
                    var f = qfb(b);
                    e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({
                        I: "div",
                        S: "iv-card-offer-price",
                        va: f.price
                    }), f.merchant && e.push({
                        I: "div",
                        S: "iv-card-offer-merchant",
                        va: f.merchant
                    }), f = {
                        I: "div",
                        V: e
                    });
                    e = b.url ? h3(b.url) || "" : "";
                    c = {
                        I: "div",
                        La: c,
                        X: {
                            tabindex: "0"
                        },
                        V: [{
                            I: "a",
                            La: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: e,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            I: "div",
                            S: "iv-card-content",
                            V: [b.sponsored ? {
                                I: "div",
                                S: "iv-card-sponsored",
                                V: ["Sponsored", {
                                    I: "div",
                                    S: "iv-ad-info-container",
                                    V: [{
                                        I: "div",
                                        S: "iv-ad-info",
                                        va: "{{adInfo}}"
                                    }, {
                                        I: "div",
                                        S: "iv-ad-info-icon-container",
                                        V: [{
                                            I: "div",
                                            S: "iv-ad-info-icon"
                                        }, {
                                            I: "div",
                                            S: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                I: "a",
                                S: "iv-click-target",
                                X: {
                                    href: e
                                },
                                V: [j3("h2", d, b.title), f]
                            }]
                        }]
                    };
                    c = new g.S(c);
                    d = g.qh("span");
                    g.zh(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    c.Fd(d, "adInfo");
                    l3(a, g.jh("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "video":
                    a = a.Aa;
                    d = b.videoDuration ? {
                        I: "span",
                        S: "iv-card-video-duration",
                        va: b.videoDuration
                    } : void 0;
                    f = b.isLiveNow ? {
                        I: "span",
                        La: ["yt-badge", "yt-badge-live"],
                        va: "LIVE NOW"
                    } : null;
                    e = {
                        I: "div",
                        La: ["iv-card", "iv-card-video"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: ((c = b.url) == null ? void 0 : h3(c)) || ""
                            },
                            V: [k3(b.AI, d), {
                                I: "div",
                                S: "iv-card-content",
                                V: [ofb(b), j3("h2", "iv-card-primary-link", b.title), pfb(b), f]
                            }]
                        }]
                    };
                    c = new g.S(e);
                    l3(a, g.jh("iv-click-target",
                        c.element), b, b.url);
                    b = c;
                    break;
                default:
                    return null
            }
            return b
        },
        Ifb = function(a) {
            if (a.j) return a.j.Bf.type === "productListing";
            if (a.J.L("enable_wn_infocards")) {
                var b;
                return !((b = a.cards) == null || !b.length) && g.Rl(a.cards, function(c) {
                    return c.Bf.type === "productListing"
                })
            }
            return g.Rl(a.cards, function(c) {
                return c.Bf.type === "productListing"
            })
        },
        u3 = function(a) {
            g.Qp(a.J.getRootNode(), "ytp-cards-shopping-active", Ifb(a))
        },
        Hfb = function(a, b) {
            if (!g.Lp(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.hx(),
                        d = a.j ? a.j.Bf.Gf : a.Gf;
                    c && d && g.Mx(c, [d]);
                    a.j = b;
                    u3(a)
                }(c = a.isInitialized && a.Ib().style.display == "none") || (c = a.context.J.getPlayerState(), d = c === 0 && a.context.J.getCurrentTime() === 0, c = !(c === 1 || c === 3 || d));
                c || b.Bf.teaserDurationMs && a.J.JC(!0, {
                    teaserText: b.Bf.teaserText,
                    durationMs: b.Bf.teaserDurationMs,
                    onClickCommand: b.Bf.onClickCommand
                });
                a.ib.isActive() || ((!a.C || !a.Ca.isActive() && a.Ka) && Gfb(a, b), a.ib.start(910 + b.Bf.teaserDurationMs))
            }
        },
        Gfb = function(a, b) {
            a.W.Eb ? (b = new X2([0,
                a.B.scrollTop
            ], [0, b.hP.offsetTop], 600, Oeb), a.context.C.listen(b, "animate", function(c) {
                a.B.scrollTop = c.y
            }), a.context.C.listen(b, "finish", function(c) {
                a.B.scrollTop = c.y
            }), b.play()) : (g.Xx(a.W, !0), a.B.scrollTop = b.hP.offsetTop, g.Xx(a.W, !1))
        },
        v3 = function(a) {
            return a.j && a.j.Bf ? a.j.Bf : a.cards[0] && a.cards[0].Bf ? a.cards[0].Bf : null
        },
        yfb = function(a, b) {
            return g.Ub(a.cards, function(c) {
                return c.Bf.id === b
            })
        },
        w3 = function(a, b, c) {
            m3.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        Jfb = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(Number(b.start_ms), Number(b.end_ms), a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        x3 = function(a, b, c) {
            w3.call(this, a, b, c);
            this.B = null;
            this.N = !1;
            this.C = null;
            this.D = !1;
            this.j = this.K = this.G = null
        },
        Kfb = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d = Feb(b).width;
            g.Mm(b, d);
            c = new Meb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, Neb);
            g.P(a, c);
            a.context.C.listen(c, "begin", function() {
                g.Sm(b, !0)
            });
            c.play()
        },
        Nfb = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-name"],
                        va: b.channel_name
                    }),
                    d = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.NY(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.J, !1), a.j.Ha(d));
                var f = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        I: "div",
                        La: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.Sm(h, !1);
                var l = a.createElement({
                    I: "div",
                    La: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.Fm(l, "right", b.image_width + "px");
                g.sh(a.Ib(), l);
                a.C = new g.Ep(function() {
                    Lfb(a, h, l)
                }, 500);
                g.P(a, a.C);
                a.context.j.listen(a.Ib(), "mouseover", function() {
                    Mfb(a, h, l, f, b.image_height)
                });
                a.context.j.listen(a.Ib(), "mouseout", function() {
                    a.C.start()
                })
            }
        },
        Mfb = function(a, b, c, d, e) {
            a.C.stop();
            if (!a.D) {
                var f = g.Rm(b);
                a.j || (b.style.width = g.Lm(f.width, !0), c.style.width = g.Lm(f.width, !0));
                g.Fm(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.Fm(d, "right", "1px");
                a.D = !0;
                g.Sm(b, !0);
                a.G = new g.Ep(function() {
                    g.Mp(this.Ib(), "iv-branding-active")
                }, 0, a);
                a.G.start()
            }
        },
        Lfb = function(a, b, c) {
            g.Op(a.Ib(), "iv-branding-active");
            a.K = new g.Ep(function() {
                g.Sm(b, !1);
                a.j || (c.style.width = g.Lm(0, !0))
            }, 250);
            a.K.start();
            a.D = !1
        },
        Ofb = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.C = b;
            this.Y = c;
            this.videoData = d;
            this.logger = e;
            this.J = f;
            this.B = h
        },
        Pfb = function(a, b, c) {
            w3.call(this, a, b, c);
            var d = this;
            this.Z = this.isCollapsed = this.W = !1;
            this.K = 5E3;
            this.B = this.C = this.j = this.D = null;
            this.N = this.createElement({
                I: "div",
                La: ["iv-promo-contents"]
            });
            this.G = new g.Ep(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.Sm(d.C, !1);
                g.Sm(d.B, !0)
            }, 700, this);
            g.P(this, this.G)
        },
        Sfb = function(a, b, c) {
            c.stopPropagation();
            Qfb(a);
            Rfb(a, b);
            a.j.focus()
        },
        Tfb = function(a) {
            a.isCollapsed || a.Z || a.D || (g.Mp(a.Ib(), "iv-promo-collapsed"), a.isCollapsed = !0, a.G.start())
        },
        Qfb = function(a) {
            a.G.stop();
            a.isCollapsed && (g.Pp(a.Ib(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.Sm(a.B, !1), g.Sm(a.C, !0))
        },
        Rfb = function(a, b) {
            a.D || (a.D = g.Pi(function() {
                Ufb(this);
                Tfb(this)
            }, b, a))
        },
        Ufb = function(a) {
            a.D && (g.Na.clearTimeout(a.D), a.D = null)
        },
        Vfb = function(a) {
            this.J = a
        },
        Afb = function(a, b, c) {
            b && (c ? y3(a, b.map(function(d) {
                return g.Wo(d, c)
            })) : y3(a, b))
        },
        y3 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.w(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.Av(m, f);
            d && (e++, d !== 0 && a.J.sendVideoStatsEngageEvent(d, f))
        },
        Wfb = function(a) {
            g.hY.call(this, a);
            var b = this;
            this.oa = this.Z = !1;
            this.loadNumber = 0;
            this.K = {};
            this.logger = new Vfb(this.player);
            this.D = new g.jG(this);
            this.G = this.N = null;
            this.events = new g.jG(this);
            this.jh = this.W = this.j = null;
            this.qa = [];
            g.P(this, this.D);
            this.D.T(this.player, "onVideoAreaChange", function() {
                b.publish("onVideoAreaChange")
            });
            this.D.T(this.player, "onHideControls", function() {
                b.publish("onHideControls")
            });
            this.D.T(this.player, "onShowControls", function() {
                b.publish("onShowControls")
            });
            this.D.T(this.player, "resize", function(d) {
                b.publish("resize", d)
            });
            this.D.T(this.player, "presentingplayerstatechange", function(d) {
                b.publish("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.i5, this);
            this.subscribe("resize", this.nM, this);
            this.player.U().Ka.subscribe("vast_info_card_add", this.v1, this);
            g.P(this, this.events);
            this.Aa = this.createElement({
                I: "div",
                S: "video-custom-annotations"
            });
            this.B = new g.S({
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.P(this, this.B);
            g.US(this.player, this.B.element, 4);
            this.B.hide();
            this.C = new g.S({
                I: "div",
                La: ["ytp-iv-video-content"]
            });
            g.P(this, this.C);
            a = this.createElement({
                I: "div",
                S: "video-annotations"
            });
            a.appendChild(this.Aa);
            this.C.element.appendChild(a);
            this.Pv() && this.load();
            var c = this.createElement({
                I: "style"
            });
            (g.hh("HEAD")[0] || document.body).appendChild(c);
            this.addOnDisposeCallback(function() {
                g.vh(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        Xfb = function(a) {
            a = a.createElement({
                I: "div",
                La: ["annotation", "annotation-type-custom"]
            });
            g.Sm(a, !1);
            return a
        },
        Yfb = function(a, b) {
            b = !b.isCued() && !g.U(b, 1024);
            g.Xx(a.B, b);
            g.Xx(a.C, b)
        },
        Zfb = function(a, b, c) {
            a.Z = !0;
            a.G = g.ds(b, c)
        },
        $fb = function(a, b) {
            for (var c = {}, d = g.w(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.Ta(e) && e.nodeType == 1) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if (e.tagName === "data") {
                        e.childNodes.length > 0 && (f = e.childNodes[0].nodeValue, c[e.tagName] = typeof f === "string" ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && e.tagName === "TEXT" ? e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push($fb(a, e))
                }
            return c
        },
        dgb = function(a) {
            var b = a.player.getVideoData();
            if (b.Ta) {
                var c = a.player.U().Ka.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = a.loadNumber;
                            f = b.videoId;
                            a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.Tr(h) && h.responseXML ? h.responseXML : null) && agb(a, h)
                        }
                    };
                    g.It() && (d.onFinish = bgb(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    cgb(d, c);
                    a.Z = !0;
                    g.ds(b.Ta, d)
                }
            }
        },
        cgb = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.MJ && (a.postParams.ic_coll = b.MJ);
            b.iP && (a.postParams.ic_xml = b.iP);
            b.CN && (a.postParams.ic_track = b.CN)
        },
        egb = function(a) {
            var b = new g.S({
                I: "div"
            });
            g.Sm(b.element, !1);
            var c = new vfb(a.player, b.element, z3(a));
            g.P(c, b);
            b.Ha(a.B.element);
            c.jI();
            return c
        },
        ggb = function(a, b) {
            var c, d;
            if (b = (c = b.getWatchNextResponse()) == null ? void 0 : (d = c.cards) == null ? void 0 : d.cardCollectionRenderer) a.oa = !0, fgb(a, b), b.headerText && a.jh && (c = g.ay(b.headerText), a.jh.setAttribute("title", c))
        },
        z3 = function(a) {
            if (!a.W) {
                var b = new Peb(a);
                g.P(a, b);
                var c = new g.Rk(a);
                g.P(a, c);
                a.W = new Ofb(b, c, a.player.U(), a.player.getVideoData(), a.logger, a.player, a.Pj)
            }
            return a.W
        },
        agb = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(d.length < 1) && (d = d[0].getAttribute("itct"))) {
                var e = g.hx();
                if (e) {
                    var f = g.gx();
                    f && g.Dr(g.Bx)(void 0, e, f, [g.ex(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = $fb(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = typeof h === "string" && l != null && h != null && h.match(l) ? h : "";
                        var n = g3(f.type, hgb),
                            p = g3(f.style, igb),
                            q = efb(f.data),
                            r = q.length !== 0 ? JSON.parse(q) : {};
                        var t = f.action;
                        f = kfb;
                        if (t == null) var u = null;
                        else if (g.Sa(t)) {
                            l = [];
                            for (var y = g.w(t), A = y.next(); !A.done; A = y.next()) {
                                var C = f(A.value);
                                C && l.push(C)
                            }
                            u = l
                        } else {
                            var F = f(t);
                            u = F ? [F] : []
                        }
                        e = m && n ? new lfb(m, n, p, u, r) : null
                    } else e = null
                } catch (ca) {}
                if (e)
                    if (e.type === "branding" || e.type === "promotion") {
                        f = a;
                        l = e;
                        var H = Xfb(f),
                            L = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.U().Nd) break;
                                f.B.element.appendChild(H);
                                L = new x3(H, z3(f), l);
                                break;
                            case "promotion":
                                g.US(f.player, H, 4), L = new Pfb(H, z3(f), l)
                        }
                        L && L.jI();
                        if (f = L) g.P(a, f), a.K[e.id] = f
                    } else if (e.type === "card" || e.type === "drawer") {
                    a.j || (a.j = egb(a), g.P(a, a.j));
                    if (e.type === "card") {
                        H = a.j;
                        var N = (c = e) && c.data &&
                            c.data.card_type;
                        e = c.data;
                        if (N) switch (f = e.tracking || {}, f = {
                            UZ: f.impression,
                            click: f.click,
                            close: f.close,
                            t3: f.teaser_impression,
                            xN: f.teaser_click
                        }, l = e.tracking_params || {}, L = null, N) {
                            case "collaborator":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    wj: f,
                                    aq: l.card ? g.ex(l.card) : null,
                                    gk: l.teaser ? g.ex(l.teaser) : null,
                                    Gf: l.icon ? g.ex(l.icon) : null,
                                    channelId: e.channel_id,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    profileImageUrl: e.image_url,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: i3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                r3(H, c);
                                break;
                            case "playlist":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    wj: f,
                                    aq: l.card ? g.ex(l.card) : null,
                                    gk: l.teaser ? g.ex(l.teaser) : null,
                                    Gf: l.icon ? g.ex(l.icon) : null,
                                    AI: e.image_url,
                                    playlistVideoCount: e.playlist_video_count,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: i3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                r3(H, c);
                                break;
                            case "productListing":
                                e.signin_url && (L = i3({
                                    target: "current",
                                    value: e.signin_url
                                }));
                                N = [];
                                for (var X = e.offers || [], V = 0; V < X.length; V++) N.push(new rfb(g.og(X[V].merchant),
                                    g.og(X[V].price)));
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    wj: f,
                                    aq: l.card ? g.ex(l.card) : null,
                                    gk: l.teaser ? g.ex(l.teaser) : null,
                                    Gf: l.icon ? g.ex(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    UE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ?
                                        e.custom_message : null,
                                    url: i3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    wqa: L,
                                    vqa: e.signin_title ? e.signin_title : void 0,
                                    uqa: e.signin_message ? e.signin_message : void 0,
                                    offers: N,
                                    onClickCommand: null
                                };
                                r3(H, c);
                                break;
                            case "simple":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    wj: f,
                                    aq: l.card ? g.ex(l.card) : null,
                                    gk: l.teaser ? g.ex(l.teaser) : null,
                                    Gf: l.icon ? g.ex(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    UE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    url: i3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                r3(H, c);
                                break;
                            case "video":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    wj: f,
                                    aq: l.card ? g.ex(l.card) : null,
                                    gk: l.teaser ? g.ex(l.teaser) : null,
                                    Gf: l.icon ? g.ex(l.icon) : null,
                                    AI: e.image_url,
                                    videoDuration: e.video_duration || null,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    isLiveNow: !!e.is_live_now,
                                    url: i3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                }, r3(H, c)
                        }
                    } else wfb(a.j, e);
                    c = !0
                }
            }
            c &&
                (S2(a.player), a.nM())
        },
        fgb = function(a, b) {
            var c = !1;
            a.j || (a.j = egb(a), g.P(a, a.j));
            for (var d = g.w(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (xfb(a.j, e.cardRenderer), c = !0);
            if (c) {
                var f;
                (f = a.player.getVideoData()) != null && g.NR(f) || (c = a.j, d = b.headerText ? g.ay(b.headerText) : "", g.zh(c.Kb, d), c.Z && c.Z.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Fa = b.trackingParams ? g.ex(b.trackingParams) : null, c.N = b.closeButton.infoCardIconRenderer.trackingParams ? g.ex(b.closeButton.infoCardIconRenderer.trackingParams) :
                    null, c.Gf = b.icon.infoCardIconRenderer.trackingParams ? g.ex(b.icon.infoCardIconRenderer.trackingParams) : null, a.nM());
                S2(a.player)
            }
        },
        jgb = function(a, b, c, d, e) {
            if (!a.player.U().Nd) {
                var f = [];
                b.navigationEndpoint && g.Q(b.navigationEndpoint, g.GR) && g.Q(b.navigationEndpoint, g.GR).browseId && f.push(new hfb("openUrl", "click", new ffb("/channel/" + g.Q(b.navigationEndpoint, g.GR).browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton && g.Q(b.subscribeButton,
                        g.HR)) {
                    d.channel_id = g.Q(b.subscribeButton, g.HR).channelId;
                    var l;
                    b = g.Q(b.subscribeButton, g.HR);
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.ay(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.ay(b.subscriberCountText))) : (b.subscriberCountText && (e = g.ay(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.ay(b.subscriberCountWithSubscribeText)));
                    var m, n = ((m = g.Q((l = b.signInEndpoint) == null ? void 0 : l.commandMetadata, g.L1)) == null ? void 0 : m.url) || "";
                    l = {
                        subscribeText: g.ay(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.ay(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: n
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new lfb(c, "branding", "branding", f, d);
                l = Xfb(a);
                a.B.element.appendChild(l);
                f = new x3(l, z3(a), f);
                f.jI();
                g.P(f, f);
                a.K[c] = f
            }
        },
        bgb = function(a, b) {
            return function() {
                var c = g.Ea.apply(0, arguments);
                a.Ia() || a.qa.push(g.xp.aj(function() {
                    b.apply(null, g.x(c))
                }))
            }
        },
        kgb = function(a) {
            return a === "annotation-editor" || a === "live-dashboard"
        };
    g.qS.prototype.JC = g.da(35, function(a, b) {
        var c = g.vY(this.yb());
        c && c.JC(a, b)
    });
    var U2 = {},
        V2 = null;
    g.bb(X2, g.Rp);
    g.k = X2.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || this.j == 0) this.progress = 0, this.coords = this.B;
        else if (this.isPlaying()) return !1;
        W2(this);
        this.startTime = a = g.Za();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.D = this.startTime;
        this.progress || this.dM();
        this.xo("play");
        this.isPaused() && this.xo("resume");
        this.j = 1;
        var b = g.Wa(this);
        b in U2 || (U2[b] = this);
        Ieb();
        Jeb(this, a);
        return !0
    };
    g.k.stop = function(a) {
        W2(this);
        this.j = 0;
        a && (this.progress = 1);
        Keb(this, this.progress);
        this.onStop();
        this.Ns()
    };
    g.k.pause = function() {
        this.isPlaying() && (W2(this), this.j = -1, this.xo("pause"))
    };
    g.k.xa = function() {
        this.j == 0 || this.stop(!1);
        this.xo("destroy");
        X2.Tf.xa.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.AO = function() {
        this.xo("animate")
    };
    g.k.xo = function(a) {
        this.dispatchEvent(new Leb(a, this))
    };
    g.bb(Leb, g.bi);
    g.bb(Y2, X2);
    Y2.prototype.C = function() {};
    Y2.prototype.AO = function() {
        this.C();
        Y2.Tf.AO.call(this)
    };
    Y2.prototype.Ns = function() {
        this.C();
        Y2.Tf.Ns.call(this)
    };
    Y2.prototype.dM = function() {
        this.C();
        Y2.Tf.dM.call(this)
    };
    g.bb(Meb, Y2);
    Meb.prototype.C = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.z(Peb, g.O);
    g.k = Peb.prototype;
    g.k.listen = function(a, b, c, d) {
        c = (0, g.Xa)(c, d || this.B);
        a = g.at(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.IG = function(a, b, c, d) {
        c = (0, g.Xa)(c, d || this.B);
        a = Geb(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.Mc = function(a) {
        g.bt(a);
        g.Yb(this.j, a)
    };
    g.k.removeAll = function() {
        g.bt(this.j);
        this.j.length = 0
    };
    g.k.xa = function() {
        this.removeAll();
        g.O.prototype.xa.call(this)
    };
    g.z(Seb, g.hY);
    g.k = Seb.prototype;
    g.k.load = function() {
        g.hY.prototype.load.call(this);
        if (!a3(this)) {
            var a = g.kMa(this.player.getVideoData());
            a ? (a = Reb(a, Teb(this)), b3(this, a, !1)) : Ueb(this)
        }
    };
    g.k.unload = function() {
        b3(this, null);
        this.C && (this.C.abort(), this.C = null);
        g.hY.prototype.unload.call(this)
    };
    g.k.gi = function(a, b) {
        return a3(this) ? a === "loadCustomEndscreenRenderer" ? (a = Reb(b, "new"), b3(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return a3(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.kc = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && a.width !== 0 && a.height !== 0) {
                var b = this.player.getPlayerSize();
                if (b && b.width !== 0 && b.height !== 0) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < lgb.length; f++) {
                        var h = Math.abs(b.width - lgb[f]);
                        if (e === -1 || d >= h) e = f, d = h
                    }
                    d = mgb[e];
                    this.B && g.Fm(this.B.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.G[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.Qm(e.element, m, f);
                            g.Mm(e.element, n, p);
                            g.Pp(e.element, ngb);
                            m > 256 || f > 256 ? g.Mp(e.element, "ytp-ce-large-round") : m > 96 || f > 96 ? g.Mp(e.element, "ytp-ce-medium-round") : g.Mp(e.element, "ytp-ce-small-round");
                            g.Pp(e.element, ogb);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.Mp(e.element, m <= .5 && h <= .5 ? "ytp-ce-top-left-quad" : m > .5 && h <= .5 ? "ytp-ce-top-right-quad" :
                                m <= .5 && h > .5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.Pp(e.element, mgb);
                            g.Mp(e.element, d);
                            (e = g.ih(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.Fm(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if (a.getId() === "ytp-ce-in-endscreen") f3(this, this.endscreen.impressionUrls), (a = g.hx()) && this.endscreen.visualElement && g.Kx(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.G[a];
                g.Mp(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.Mp(b, "ytp-ce-shown");
                f3(this, c.impressionUrls);
                (b = g.hx()) && g.Kx(b, c.visualElement);
                this.player.U().N && this.player.eb("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if (a.getId() !== "ytp-ce-in-endscreen") {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.Op(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.Op(b, "ytp-ce-shown");
            this.player.U().N && this.player.eb("endscreenelementhidden", a)
        }
    };
    g.k.sda = function(a) {
        var b = this;
        a.target === window && (new g.Ep(function() {
            for (var c = g.w(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.Pp(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var lgb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        mgb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        ogb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        ngb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var gfb = {
        Nha: "current",
        ska: "new"
    };
    var ifb = {
            CLOSE: "close",
            xka: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        jfb = {
            wha: "click",
            CLOSE: "close",
            Pia: "hidden",
            mla: "rollOut",
            nla: "rollOver",
            zla: "shown"
        };
    lfb.prototype.xe = function() {
        var a = mfb(this, function(b) {
            return b.type === "openUrl" && b.url != null
        });
        return a ? a.url : null
    };
    var igb = {
            Hga: "anchored",
            J4: "branding",
            CHANNEL: "channel",
            Mha: "cta",
            Sia: "highlightText",
            Fja: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            Hla: "speech",
            SUBSCRIBE: "subscribe",
            Sla: "title",
            VIDEO: "video",
            Bma: "website"
        },
        hgb = {
            J4: "branding",
            jha: "card",
            Zha: "drawer",
            Ria: "highlight",
            Wja: "marker",
            Ska: "promotion",
            TEXT: "text",
            dna: "widget"
        };
    g.z(m3, g.O);
    g.k = m3.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.KE(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.Ta.set(a, d);
        e && this.Va.set(a, e);
        this.context.J.qf([a], 1)
    };
    g.k.jI = function() {
        this.context.B.subscribe("resize", this.HJ, this)
    };
    g.k.Ib = function() {
        return this.element
    };
    g.k.VN = function(a, b, c, d, e, f) {
        if (this.kb) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.vh(this.Ib())
    };
    g.k.HJ = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = h3(a);
        if (f) {
            var h = tfb(f, a.target),
                l = function() {
                    a.j && e.context.J.pauseVideo();
                    var m = e.context.videoData.Jf || !1,
                        n = g.Jr(f || "");
                    m && n && (n.v || n.list) ? e.context.J.Ip(n.v, b, n.list, !1) : g.Uz(f || "", h === "current" ? "_top" : void 0, b)
                };
            h === "new" && (l(), l = null);
            y3(this.context.logger, c, l, d);
            sfb(f) || (c = g.hx(), d = b.itct, c && d && g.Nx(c, g.ex(d)))
        }
    };
    g.k.xa = function() {
        this.Ta.clear();
        this.Va.clear();
        g.O.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.S(a);
        g.P(this, a);
        return a.element
    };
    g.z(vfb, m3);
    g.k = vfb.prototype;
    g.k.Gu = function() {
        this.qa && r3(this, this.qa)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.J.getRootNode()) ? (a = g.Rm(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.HJ = function() {
        var a = this.isAvailable();
        g.Sm(this.Ib(), a);
        g.Qp(this.context.J.getRootNode(), g.S_.IV_DRAWER_ENABLED, a);
        S2(this.J)
    };
    g.k.destroy = function() {
        this.J.JC(!1);
        try {
            this.J.getRootNode().removeChild(this.D)
        } catch (a) {}
        g.Tv(this.oa);
        g.ht(this.Oa);
        this.Ua && this.Ua.dispose();
        this.G && this.G.dispose();
        m3.prototype.destroy.call(this)
    };
    g.k.tJ = function() {
        var a = this,
            b = g.kh("iv-drawer-close-button", this.D);
        this.context.j.listen(b, "click", this.g8, this);
        this.context.j.listen(this.B, "touchend", function() {
            a.Ca.start()
        });
        this.context.j.listen(this.B, "scroll", this.E8, this);
        this.context.B.subscribe("onHideControls", function() {
            a.Ka = !0
        });
        this.context.B.subscribe("onShowControls", function() {
            a.Ka = !1
        });
        this.context.B.subscribe("onVideoAreaChange", function() {
            a.Ka = g.Lp(a.J.getRootNode(), "ytp-autohide")
        });
        this.oa.push(g.Sv("iv-button-shown", this.haa, this));
        this.oa.push(g.Sv("iv-button-hidden", this.faa, this));
        Cfb(this)
    };
    g.k.findLastIndex = function(a) {
        if (this.cards.length === 0) return 0;
        var b = g.Vb(this.cards, function(c) {
            return a.Bf.startMs > c.Bf.startMs || a.Bf.startMs === c.Bf.startMs && a.Bf.timestamp >= c.Bf.timestamp ? !0 : !1
        });
        return b === -1 ? 0 : b + 1
    };
    g.k.g8 = function() {
        if (this.C) {
            y3(this.context.logger, v3(this).wj.close);
            var a = g.hx();
            a && this.N && g.Nx(a, this.N);
            q3(this)
        }
    };
    g.k.E8 = function() {
        g.Qp(this.D, "iv-drawer-scrolled", this.B.scrollTop > 0)
    };
    g.k.haa = function() {
        var a = g.hx(),
            b = v3(this);
        b = b ? b.Gf : this.Gf;
        a && b && g.Lx(a, [b])
    };
    g.k.faa = function() {
        var a = g.hx(),
            b = v3(this);
        b = b ? b.Gf : this.Gf;
        a && b && g.Mx(a, [b])
    };
    g.k.g5 = function() {
        var a = v3(this);
        y3(this.context.logger, a.wj.t3);
        var b = g.hx();
        if (b && a)
            if (this.J.L("web_infocards_teaser_show_logging_fix")) {
                var c = [];
                a.gk && c.push(a.gk);
                a.Gf && c.push(a.Gf);
                c.length > 0 && g.Lx(b, c)
            } else g.Lx(b, [a.gk, a.Gf])
    };
    g.k.jaa = function() {
        var a = g.hx(),
            b = v3(this);
        a && b && g.Mx(a, [b.gk])
    };
    g.k.f5 = function(a) {
        var b = v3(this),
            c = g.hx();
        this.j ? a ? (a = this.context.logger, y3(a, b.wj.xN), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.gk && g.Nx(c, b.gk)) : (a = this.context.logger, y3(a, b.wj.xN), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Gf && g.Nx(c, b.Gf)) : (a = this.context.logger, y3(a, b.wj.xN), a.J.sendVideoStatsEngageEvent(4, void 0), c && this.Gf && g.Nx(c, this.Gf))
    };
    g.z(w3, m3);
    w3.prototype.jI = function() {
        m3.prototype.jI.call(this);
        Jfb(this)
    };
    w3.prototype.show = function() {
        m3.prototype.show.call(this);
        var a = g.hx(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.Lx(a, [g.ex(b.itct)])
    };
    w3.prototype.hide = function() {
        m3.prototype.hide.call(this);
        var a = g.hx(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.Mx(a, [g.ex(b.itct)])
    };
    g.z(x3, w3);
    x3.prototype.kz = function() {
        g.Mp(this.Ib(), "iv-branding");
        var a = this.annotation.data;
        this.B = this.createElement({
            I: "img",
            La: ["branding-img", "iv-click-target"],
            X: {
                "aria-label": "Channel watermark",
                src: a.image_url,
                width: a.image_width,
                height: a.image_height
            }
        });
        g.Sm(this.B, !1);
        var b = this.createElement({
            I: "button",
            La: ["branding-img-container", "ytp-button"]
        });
        b.appendChild(this.B);
        this.Ib().appendChild(b);
        var c = this.annotation.xe();
        c && n3(this, b, c, this.annotation.id, a.session_data);
        this.context.J.L("disable_branding_context") || Nfb(this,
            a)
    };
    x3.prototype.show = function() {
        if (!this.isActive && (w3.prototype.show.call(this), this.N || (this.kz(), this.N = !0), g.Sm(this.Ib(), !0), this.isActive = !0, this.B)) {
            try {
                Kfb(this, this.B)
            } catch (a) {}
            g.Mp(this.context.J.getRootNode(), "ytp-branding-shown")
        }
    };
    x3.prototype.hide = function() {
        this.isActive && (w3.prototype.hide.call(this), g.Sm(this.Ib(), !1), this.isActive = !1, g.Op(this.context.J.getRootNode(), "ytp-branding-shown"))
    };
    x3.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        w3.prototype.destroy.call(this)
    };
    g.z(Pfb, w3);
    g.k = Pfb.prototype;
    g.k.kz = function() {
        var a = this,
            b = this.annotation.data;
        if (this.annotation.style === "cta") var c = 6;
        else if (this.annotation.style === "video" || this.annotation.style === "playlist") c = 7;
        this.K = b.collapsedelay_ms || this.K;
        var d = ["iv-promo", "iv-promo-inactive"];
        this.Ib().setAttribute("aria-hidden", "true");
        this.Ib().setAttribute("aria-label", "Promotion");
        this.Ib().tabIndex = 0;
        var e = this.annotation.xe(),
            f = b.image_url;
        if (f) {
            var h = this.createElement({
                I: "div",
                La: ["iv-promo-img", "iv-click-target"]
            });
            f = this.createElement({
                I: "img",
                X: {
                    src: f,
                    "aria-hidden": "true"
                }
            });
            h.appendChild(f);
            b.video_duration && !b.is_live ? (f = this.createElement({
                I: "span",
                S: "iv-promo-video-duration",
                va: b.video_duration
            }), h.appendChild(f)) : b.playlist_length && (f = this.createElement({
                I: "span",
                S: "iv-promo-playlist-length",
                va: b.playlist_length.toString()
            }), h.appendChild(f));
            e && n3(this, h, e, this.annotation.id, b.session_data, void 0, c)
        }
        e ? (f = this.createElement({
            I: "a",
            S: "iv-promo-txt"
        }), g.Xf(f, h3(e)), this.j = f) : this.j = this.createElement({
            I: "div",
            S: "iv-promo-txt"
        });
        switch (this.annotation.style) {
            case "cta":
            case "website":
                var l =
                    this.createElement({
                        I: "p",
                        V: [{
                            I: "strong",
                            va: b.text_line_1
                        }]
                    });
                var m = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        S: "iv-promo-link",
                        va: b.text_line_2
                    }]
                });
                if (f = b.text_line_3) {
                    d.push("iv-promo-website-card-cta-redesign");
                    var n = this.createElement({
                        I: "button",
                        La: ["iv-promo-round-expand-icon", "ytp-button"]
                    });
                    f = this.createElement({
                        I: "button",
                        La: ["iv-button", "iv-promo-button"],
                        V: [{
                            I: "span",
                            S: "iv-button-content",
                            va: f
                        }]
                    });
                    var p = this.createElement({
                        I: "div",
                        S: "iv-promo-button-container"
                    });
                    p.appendChild(f);
                    e && n3(this,
                        this.Ib(), e, this.annotation.id, b.session_data, void 0, c)
                }
                g.Mp(this.j, "iv-click-target");
                e && n3(this, this.j, e, this.annotation.id, b.session_data, void 0, c);
                break;
            case "playlist":
            case "video":
                l = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        va: b.text_line_1
                    }]
                }), m = this.createElement({
                    I: "p",
                    V: [{
                        I: "strong",
                        va: b.text_line_2
                    }]
                }), b.is_live && (l = m, m = this.createElement({
                    I: "span",
                    La: ["yt-badge", "iv-promo-badge-live"],
                    va: "LIVE NOW"
                })), g.Mp(this.j, "iv-click-target"), e && n3(this, this.j, e, this.annotation.id, b.session_data, void 0,
                    c), d.push("iv-promo-video")
        }
        l && this.j.appendChild(l);
        m && this.j.appendChild(m);
        this.N.appendChild(this.j);
        p && this.N.appendChild(p);
        c = this.createElement({
            I: "div",
            S: "iv-promo-actions"
        });
        this.B = this.createElement({
            I: "button",
            La: ["iv-promo-expand", "ytp-button"]
        });
        this.B.title = "Expand";
        this.context.j.listen(this.B, "click", function(q) {
            Sfb(a, 5E3, q)
        });
        c.appendChild(this.B);
        g.Sm(this.B, !1);
        this.context.j.listen(this.Ib(), "mouseover", this.g$, this);
        this.context.j.listen(this.Ib(), "mouseout", this.f$, this);
        this.context.j.listen(this.Ib(), "touchend", function(q) {
            Sfb(a, 5E3, q)
        });
        this.C = this.createElement({
            I: "button",
            La: ["iv-promo-close", "ytp-button"]
        });
        this.C.title = "Close";
        this.context.j.listen(this.C, "click", this.annotation.style === "cta" && b.text_line_3 ? this.b$ : this.a$, this);
        c.appendChild(this.C);
        g.Np(this.Ib(), d);
        h && (g.sh(this.Ib(), h), n && h.appendChild(n));
        g.sh(this.Ib(), this.N);
        g.sh(this.Ib(), c)
    };
    g.k.show = function() {
        this.isActive || (w3.prototype.show.call(this), this.W || (this.kz(), this.W = !0), g.Sm(this.Ib(), !0), g.Pi(function() {
            g.Op(this.Ib(), "iv-promo-inactive")
        }, 100, this), this.Ib().removeAttribute("aria-hidden"), this.isActive = !0, Ufb(this), Qfb(this), Rfb(this, this.K))
    };
    g.k.hide = function() {
        this.isActive && (g.Mp(this.Ib(), "iv-promo-inactive"), this.isActive = !1, this.Ib().setAttribute("aria-hidden", "true"))
    };
    g.k.VN = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : w3.prototype.VN.call(this, a, b, c, d, e, f)
    };
    g.k.g$ = function(a) {
        this.Z = !0;
        Sfb(this, 500, a)
    };
    g.k.f$ = function() {
        this.Z = !1;
        Tfb(this)
    };
    g.k.a$ = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.b$ = function(a) {
        a.stopPropagation();
        Ufb(this);
        this.isCollapsed = !0;
        g.Mp(this.Ib(), "iv-promo-collapsed-no-delay");
        this.G.start()
    };
    g.k.destroy = function() {
        this.G.dispose();
        w3.prototype.destroy.call(this)
    };
    g.z(Wfb, g.hY);
    g.k = Wfb.prototype;
    g.k.gi = function(a, b) {
        if (!kgb(this.player.U().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.n1(b)) && agb(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (zfb(this.j, b), S2(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return kgb(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.Pv = function() {
        var a = this.player.U(),
            b = this.player.getVideoData(),
            c = a.annotationsLoadPolicy || b.annotationsLoadPolicy;
        return g.YR(b) || this.player.isMutedByEmbedsMutedAutoplay() ? !1 : c === 1 && !b.m4 || a.Ka.get(b.videoId) || g.OR(b) || g.lMa(b) ? !0 : !1
    };
    g.k.nM = function() {
        if (this.C) {
            var a = this.player.ob().getVideoContentRect(!0);
            g.Qm(this.C.element, a.width, a.height);
            g.Mm(this.C.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.Io();
            a = this.j;
            b = b.width;
            g.Qp(a.D, "iv-drawer-small", b <= 426);
            g.Qp(a.D, "iv-drawer-big", b >= 1280)
        }
    };
    g.k.i5 = function(a) {
        Yfb(this, a.state);
        g.U(a.state, 2) && (this.El() && this.Xp() && this.player.getPresentingPlayerType() !== 2 && this.KC(!1), this.JC(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.G = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.Tr(h) && h.responseXML ? h.responseXML : null) && (agb(b, h), g.Mp(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.hY.prototype.load.call(this);
        Yfb(this, this.player.getPlayerStateObject());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.It() && (a = bgb(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.G = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.U().Ka.get(d);
        f && cgb(e, f);
        f = f && (f.iP || f.MJ);
        if (!c.zw || f) c.Ta ? Zfb(this, c.Ta, e) : (this.N = function() {
            if (!b.Z) b.onVideoDataChange(e);
            var h = b.player.getVideoData();
            (h == null ? 0 : g.NR(h)) && !b.oa && ggb(b, h)
        }, this.player.addEventListener("videodatachange", this.N));
        g.US(this.player, this.C.element, 4);
        this.nM();
        (f = g.OR(c)) && fgb(this, f);
        (f = g.lMa(c)) && f.featuredChannel && jgb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null);
        this.jh = g.kh("ytp-cards-button", this.player.getRootNode());
        g.NR(c) && ggb(this, c)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.Ta && Zfb(this, b.Ta, a)
    };
    g.k.unload = function() {
        this.player.kf("annotations_module");
        for (var a = g.w(Object.keys(this.K)), b = a.next(); !b.done; b = a.next()) this.K[b.value].destroy();
        this.W = null;
        this.j && (this.j.destroy(), this.j = null, S2(this.player));
        this.Z = !1;
        this.G && (this.G.abort(), this.G = null);
        this.oa = !1;
        this.K = {};
        this.B.hide();
        g.hY.prototype.unload.call(this);
        this.C.detach();
        this.N && (this.player.removeEventListener("videodatachange", this.N), this.N = null)
    };
    g.k.v1 = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? dgb(this) : this.load())
    };
    g.k.El = function() {
        var a;
        return ((a = this.j) == null ? void 0 : a.isAvailable()) || this.oa
    };
    g.k.Xp = function() {
        return !!this.j && this.j.C
    };
    g.k.KC = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        this.El();
        this.j && (a ? c ? p3(this.j, c, b) : p3(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : q3(this.j))
    };
    g.k.JC = function(a, b) {
        this.player.publish(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.xa = function() {
        this.player.U().Ka.unsubscribe("vast_info_card_add", this.v1, this);
        g.Op(this.player.getRootNode(), g.S_.IV_DRAWER_OPEN);
        for (var a = this.qa, b = g.xp, c = 0, d = a.length; c < d; c++) b.wk(a[c]);
        this.qa.length = 0;
        g.hY.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.S(a);
        g.P(this, a);
        return a.element
    };
    g.gY("annotations_module", Wfb);
    g.gY("creatorendscreen", Seb);
})(_yt_player);