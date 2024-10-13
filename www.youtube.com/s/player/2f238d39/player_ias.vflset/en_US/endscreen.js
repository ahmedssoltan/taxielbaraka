(function(g) {
    var window = this;
    'use strict';
    var Rkb = function(a, b) {
            a.eb("onAutonavCoundownStarted", b)
        },
        l5 = function(a, b, c) {
            g.Qp(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.nh(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.HQ && (b.lengthText ? (e = b.lengthText || null, f = b.vy || null) : b.lengthSeconds && (e = g.iz(b.lengthSeconds), f = g.iz(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && g.FQ(d).type === "RD";
            var l = b instanceof g.HQ ? b.isLivePlayback : null,
                m = b instanceof g.HQ ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                t = [];
            n && r.push(n);
            p && (r.push(p), t.push(p));
            q && t.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.XE("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Pl(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: t.join(" \u2022 "),
                autoplayAlternativeHeader: b.St
            };
            b instanceof g.GQ && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        m5 = function(a) {
            var b = a.U(),
                c = b.D;
            g.S.call(this, {
                I: "a",
                S: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.W : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    V: [{
                        I: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        La: ["ytp-autonav-timestamp"],
                        va: "{{duration}}"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-live-stamp"],
                        va: "Live"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-upcoming-stamp"],
                        va: "Upcoming"
                    }, {
                        I: "div",
                        S: "ytp-autonav-list-overlay",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-mix-text",
                            va: "Mix"
                        }, {
                            I: "div",
                            S: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    va: "{{title}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    va: "{{author}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    va: "{{views_and_publish_time}}"
                }]
            });
            this.J = a;
            this.suggestion =
                null;
            this.j = c;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        n5 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g.S.call(this, {
                I: "div",
                S: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.K = b;
            this.cancelCommand = this.G = void 0;
            this.C = 0;
            this.container = new g.S({
                I: "div",
                S: "ytp-autonav-endscreen-countdown-container"
            });
            g.P(this, this.container);
            this.container.Ha(this.element);
            b = a.U();
            var d = b.D;
            this.J = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.S({
                I: "div",
                S: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-header"
                }, {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-alternative-header",
                    va: "{{autoplayAlternativeHeader}}"
                }, {
                    I: "a",
                    S: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.W : ""
                    },
                    V: [{
                        I: "div",
                        S: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        V: [{
                            I: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            La: ["ytp-autonav-timestamp"],
                            va: "{{duration}}"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-live-stamp"],
                            va: "Live"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-upcoming-stamp"],
                            va: "Upcoming"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-autonav-endscreen-video-info",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-title",
                            va: "{{title}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-author",
                            va: "{{author}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-view-and-date",
                            va: "{{views_and_publish_time}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-author-and-view",
                            va: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ha(this.container.element);
            d || this.T(this.j.Da("ytp-autonav-endscreen-link-container"), "click", this.GV);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.j.Da("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.S({
                I: "div",
                S: "ytp-autonav-overlay"
            });
            g.P(this, this.overlay);
            this.overlay.Ha(this.container.element);
            this.B = new g.S({
                I: "div",
                S: "ytp-autonav-endscreen-button-container"
            });
            g.P(this, this.B);
            this.B.Ha(this.container.element);
            this.cancelButton = new g.S({
                I: "button",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.Ha(this.B.element);
            this.cancelButton.listen("click", this.p5, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.S({
                I: "a",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                va: "Play Now"
            });
            g.P(this, this.playButton);
            this.playButton.Ha(this.B.element);
            this.playButton.listen("click", this.GV, this);
            this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && Skb(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
            this.D = new g.Ep(function() {
                    Tkb(c)
                },
                500);
            g.P(this, this.D);
            this.FV();
            this.T(a, "autonavvisibility", this.FV);
            this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.o5), this.T(a, "onAutonavCoundownStarted", this.Xaa))
        },
        o5 = function(a) {
            var b = a.J.Io(!0, a.J.isFullscreen());
            g.Qp(a.container.element, "ytp-autonav-endscreen-small-mode", a.Sg(b));
            g.Qp(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.sN);
            g.Qp(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.Hf());
            g.Qp(a.J.getRootNode(), "countdown-running", a.Wl());
            g.Qp(a.container.element, "ytp-player-content", a.J.Hf());
            g.Fm(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Wl()) {
                a.J.Hf() ? Ukb(a, Math.round(Vkb(a) / 1E3)) : Ukb(a);
                b = !!a.suggestion && !!a.suggestion.St;
                var c = a.J.Hf() || !b;
                g.Qp(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.Qp(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.Xx(a.B, a.J.Hf());
                g.Qp(a.element, "ytp-enable-w2w-color-transitions", Wkb(a))
            }
        },
        Tkb = function(a) {
            var b = Vkb(a),
                c = Math,
                d = c.min;
            var e = a.C ? Date.now() - a.C : 0;
            c = d.call(c, e, b);
            Ukb(a, Math.ceil((b - c) / 1E3));
            b - c <= 500 && a.Wl() ? a.select(!0) : a.Wl() && a.D.start()
        },
        Vkb = function(a) {
            if (a.J.isFullscreen()) {
                var b;
                a = (b = a.J.getVideoData()) == null ? void 0 : b.hE;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.J.uu() >= 0 ? a.J.uu() : g.UD(a.J.U().experiments, "autoplay_time") || 1E4
        },
        Skb = function(a, b) {
            a.J.L("web_player_autonav_next_button_renderer");
            b = b.T4;
            a.G = b == null ? void 0 : b.navigationEndpoint;
            b = b == null ? void 0 : b.trackingParams;
            a.playButton && b && a.J.setTrackingParams(a.playButton.element, b)
        },
        Wkb = function(a) {
            var b;
            return !((b = a.J.getVideoData()) == null || !b.watchToWatchTransitionRenderer)
        },
        Ukb = function(a, b) {
            b = b === void 0 ? -1 : b;
            a = a.j.Da("ytp-autonav-endscreen-upnext-header");
            g.th(a);
            if (b >= 0) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (d >= 0) {
                    a.appendChild(g.rh("Up next in $SECONDS".slice(0, d)));
                    var e = g.qh("span");
                    g.Kp(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.zh(e, b);
                    a.appendChild(e);
                    a.appendChild(g.rh("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.zh(a, "Up next")
        },
        p5 = function(a, b) {
            g.S.call(this, {
                I: "div",
                La: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        q5 = function(a) {
            g.S.call(this, {
                I: "div",
                La: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-upnext-top",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-header",
                        va: "Up Next"
                    }, {
                        I: "span",
                        S: "ytp-upnext-title",
                        va: "{{title}}"
                    }, {
                        I: "span",
                        S: "ytp-upnext-author",
                        va: "{{author}}"
                    }]
                }, {
                    I: "a",
                    S: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
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
                            S: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-autoplay-ring",
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
                            I: "path",
                            S: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    I: "span",
                    S: "ytp-upnext-bottom",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-cancel"
                    }, {
                        I: "span",
                        S: "ytp-upnext-paused",
                        va: "Autoplay is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.G = this.Da("ytp-svg-autoplay-ring");
            this.C = this.notification = this.j = this.suggestion = null;
            this.D = new g.Ep(this.PJ, 5E3, this);
            this.B = 0;
            var b = this.Da("ytp-upnext-cancel");
            this.cancelButton = new g.S({
                I: "button",
                La: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.listen("click", this.q5, this);
            this.cancelButton.Ha(b);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.P(this, this.D);
            this.api.createClientVe(this.element, this, 18788);
            b = this.Da("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.r5);
            this.api.createClientVe(b, this, 115130);
            this.HV();
            this.T(a, "autonavvisibility", this.HV);
            this.T(a, "mdxnowautoplaying", this.Mba);
            this.T(a, "mdxautoplaycanceled", this.Nba);
            g.Qp(this.element, "ytp-upnext-mobile", this.api.U().B)
        },
        Xkb = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = (c = a.api.getVideoData()) == null ? void 0 : c.hE;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.api.uu() >= 0 ? a.api.uu() : g.UD(a.api.U().experiments, "autoplay_time") || 1E4
        },
        Ykb = function(a, b) {
            b = Xkb(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.hu)() - a.B;
            c = d.call(c, e, b);
            b = b === 0 ? 1 : Math.min(c / b, 1);
            a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            b >= 1 && a.Wl() && a.api.getPresentingPlayerType() !== 3 ? a.select(!0) : a.Wl() && a.j.start()
        },
        r5 = function(a) {
            p5.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.S({
                I: "div",
                S: "ytp-suggestion-panel",
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    va: "More videos"
                }]
            });
            this.N = new g.S({
                I: "div",
                S: "ytp-suggestions-container"
            });
            this.videos = [];
            this.C = null;
            this.G = this.K = !1;
            this.B = new n5(this.player);
            g.P(this, this.B);
            this.B.Ha(this.element);
            a.getVideoData().Af ? this.j = this.B : (this.j = new q5(a), g.US(this.player, this.j.element, 4), g.P(this, this.j));
            this.overlay = new g.S({
                I: "div",
                S: "ytp-autonav-overlay-cancelled-state"
            });
            g.P(this, this.overlay);
            this.overlay.Ha(this.element);
            this.D = new g.jG(this);
            g.P(this, this.D);
            g.P(this, this.table);
            this.table.Ha(this.element);
            this.table.show();
            g.P(this, this.N);
            this.N.Ha(this.table.element);
            this.hide()
        },
        s5 = function(a) {
            var b = a.Hf();
            b !== a.G && (a.G = b, a.player.publish("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()))
        },
        t5 = function(a, b) {
            g.S.call(this, {
                I: "button",
                La: ["ytp-watch-on-youtube-button", "ytp-button"],
                va: "{{content}}"
            });
            this.J = a;
            this.buttonType = this.buttonType = b;
            this.S2();
            this.buttonType === 2 && g.Mp(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.S2);
            g.Xx(this, !0)
        },
        u5 = function(a, b) {
            p5.call(this, a, "embeds-lite-endscreen");
            this.J = a;
            this.Se = b;
            this.J.createClientVe(this.element, this, 156943);
            this.watchButton = new t5(a, 2);
            g.P(this, this.watchButton);
            this.watchButton.Ha(this.element);
            this.hide()
        },
        Zkb = function(a) {
            p5.call(this, a, "subscribecard-endscreen");
            this.j = new g.S({
                I: "div",
                S: "ytp-subscribe-card",
                V: [{
                    I: "img",
                    S: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    I: "div",
                    S: "ytp-subscribe-card-right",
                    V: [{
                        I: "div",
                        S: "ytp-author-name",
                        va: "{{author}}"
                    }, {
                        I: "div",
                        S: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ha(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.NY("Subscribe", null, "Unsubscribe", null, !0, !1, b.ym, b.subscribed, "trailer-endscreen", null, a, !1);
            g.P(this, this.subscribeButton);
            this.subscribeButton.Ha(this.j.Da("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Ra);
            this.Ra();
            this.hide()
        },
        v5 = function(a) {
            var b = a.U(),
                c = g.fG || g.JP ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.D,
                e = ["ytp-videowall-still"];
            b.B && e.push("ytp-videowall-show-text");
            g.S.call(this, {
                I: "a",
                La: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.W : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-info-bg",
                        V: [{
                            I: "span",
                            S: "ytp-videowall-still-info-content",
                            X: c,
                            V: [{
                                    I: "span",
                                    S: "ytp-videowall-still-info-title",
                                    va: "{{title}}"
                                },
                                {
                                    I: "span",
                                    S: "ytp-videowall-still-info-author",
                                    va: "{{author_and_views}}"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-live",
                                    va: "Live"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-duration",
                                    va: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        V: [" (", {
                            I: "span",
                            va: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        va: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.B = d;
            this.api = a;
            this.j = new g.jG(this);
            g.P(this, this.j);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        w5 = function(a) {
            p5.call(this, a, "videowall-endscreen");
            var b = this;
            this.J = a;
            this.C = 0;
            this.stills = [];
            this.D = this.videoData = null;
            this.G = this.N = !1;
            this.W = null;
            this.B = new g.jG(this);
            g.P(this, this.B);
            this.K = new g.Ep(function() {
                g.Mp(b.element, "ytp-show-tiles")
            }, 0);
            g.P(this, this.K);
            var c = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                V: [g.dy()]
            });
            g.P(this, c);
            c.Ha(this.element);
            c.listen("click", this.v5, this);
            this.table = new g.Ux({
                I: "div",
                S: "ytp-endscreen-content"
            });
            g.P(this, this.table);
            this.table.Ha(this.element);
            c = new g.S({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                V: [g.ey()]
            });
            g.P(this, c);
            c.Ha(this.element);
            c.listen("click", this.u5, this);
            a.getVideoData().Af ? this.j = new n5(a, !0) : this.j =
                new q5(a);
            g.P(this, this.j);
            g.US(this.player, this.j.element, 4);
            a.createClientVe(this.element, this, 158789);
            this.hide()
        },
        x5 = function(a) {
            return g.VS(a.player) && a.QE() && !a.D
        },
        y5 = function(a) {
            var b = a.Hf();
            b !== a.N && (a.N = b, a.player.publish("autonavvisibility"))
        },
        z5 = function(a) {
            p5.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new t5(a, 1);
            g.P(this, this.watchButton);
            this.watchButton.Ha(this.element);
            g.Q$a(a) && (this.j = new g.p1(a), g.P(this, this.j), this.B = new g.S({
                I: "div",
                La: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                V: [this.j]
            }), g.P(this, this.B), this.j.Ha(this.B.element), this.B.Ha(this.element));
            a.createClientVe(this.element, this, 156914);
            this.hide()
        },
        clb = function(a) {
            g.hY.call(this, a);
            var b = this;
            this.endScreen = null;
            this.B = this.j = this.C = this.D = !1;
            this.listeners = new g.jG(this);
            g.P(this, this.listeners);
            var c = a.U(),
                d = a.getVideoData();
            d = d && d.limitedPlaybackDurationInSeconds !== 0;
            g.Ps(g.UP(c)) && d && !g.uS(a) ? (this.B = !0, this.endScreen = new u5(a, g.iS(a))) : a.fd() ? this.endScreen = new z5(a) : $kb(a) ? (this.D = !0, alb(this), this.j ? this.endScreen = new r5(a) : this.endScreen = new w5(a)) : c.hh ? this.endScreen = new Zkb(a) : this.endScreen = new p5(a);
            g.P(this, this.endScreen);
            g.US(a, this.endScreen.element, 4);
            blb(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.ME("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.NE("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        alb = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.Am && a.C === b.Af) return !1;
            a.j = b.Am;
            a.C = b.Af;
            return !0
        },
        $kb = function(a) {
            a = a.U();
            return a.Ad && !a.hh
        },
        blb = function(a) {
            a.player.kf("endscreen");
            var b = a.player.getVideoData();
            b = new g.KE(Math.max((b.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.KE(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.qf([b, c])
        };
    g.qS.prototype.uu = g.da(14, function() {
        return this.app.uu()
    });
    g.V_.prototype.uu = g.da(13, function() {
        return this.getVideoData().J_
    });
    g.mS.prototype.Zs = g.da(12, function(a) {
        this.Mi().Zs(a)
    });
    g.cZ.prototype.Zs = g.da(11, function(a) {
        this.j !== a && (this.j = a, this.Ra())
    });
    g.k_.prototype.Zs = g.da(10, function(a) {
        this.overflowButton && this.overflowButton.Zs(a)
    });
    g.mS.prototype.gt = g.da(9, function(a) {
        this.Mi().gt(a)
    });
    g.hZ.prototype.gt = g.da(8, function(a) {
        this.j !== a && (this.j = a, this.Ra())
    });
    g.k_.prototype.gt = g.da(7, function(a) {
        this.shareButton && this.shareButton.gt(a)
    });
    g.mS.prototype.NC = g.da(6, function(a) {
        this.Mi().NC(a)
    });
    g.GY.prototype.NC = g.da(5, function(a) {
        this.mT !== a && (this.mT = a, this.Ar())
    });
    g.mS.prototype.MC = g.da(4, function(a) {
        this.Mi().MC(a)
    });
    g.k_.prototype.MC = g.da(3, function(a) {
        this.lT !== a && (this.lT = a, this.zr())
    });
    g.z(m5, g.S);
    m5.prototype.select = function() {
        this.J.Ip(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.wF || void 0) && this.J.logClick(this.element)
    };
    m5.prototype.onClick = function(a) {
        g.kT(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    m5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    g.z(n5, g.S);
    g.k = n5.prototype;
    g.k.XI = function(a) {
        this.suggestion !== a && (this.suggestion = a, l5(this.j, a), this.playButton.updateValue("url", this.suggestion.Pl()), o5(this))
    };
    g.k.Wl = function() {
        return this.C > 0
    };
    g.k.XC = function() {
        this.Wl() || (this.C = Date.now(), Tkb(this), Rkb(this.J, Vkb(this)), g.Qp(this.J.getRootNode(), "countdown-running", this.Wl()))
    };
    g.k.Uy = function() {
        this.rr();
        Tkb(this);
        var a = this.j.Da("ytp-autonav-endscreen-upnext-header");
        a && g.zh(a, "Up next")
    };
    g.k.rr = function() {
        this.Wl() && (this.D.stop(), this.C = 0)
    };
    g.k.select = function(a) {
        this.J.nextVideo(!1, a === void 0 ? !1 : a);
        this.rr()
    };
    g.k.GV = function(a) {
        g.kT(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Da("ytp-autonav-endscreen-link-container") && (a = this.j.Da("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.G ? (this.J.eb("innertubeCommand", this.G), this.rr()) : this.select())
    };
    g.k.p5 = function() {
        this.J.logClick(this.cancelButton.element);
        g.sS(this.J, !0);
        this.cancelCommand && this.J.eb("innertubeCommand", this.cancelCommand)
    };
    g.k.onVideoDataChange = function(a, b) {
        this.J.L("web_player_autonav_next_button_renderer") && Skb(this, b);
        var c;
        this.cancelCommand = (c = b.R4) == null ? void 0 : c.command
    };
    g.k.Xaa = function(a) {
        if (Wkb(this)) {
            var b = this.J.getVideoData().watchToWatchTransitionRenderer,
                c = b == null ? void 0 : b.fromColorPaletteDark;
            b = b == null ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.Qz(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.Qz(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.Qz(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.Qz(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.Qz(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.Qz(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.Qp(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.o5 = function(a) {
        this.J.L("web_autonav_color_transition") && a !== 2 && g.Qp(this.element, "ytp-w2w-animate", !1)
    };
    g.k.FV = function() {
        var a = this.J.Hf();
        this.K && this.Eb !== a && g.Xx(this, a);
        o5(this);
        this.J.logVisibility(this.container.element, a);
        this.J.logVisibility(this.cancelButton.element, a);
        this.J.logVisibility(this.j.Da("ytp-autonav-endscreen-link-container"), a);
        this.J.logVisibility(this.playButton.element, a)
    };
    g.k.Sg = function(a) {
        return a.width < 400 || a.height < 459
    };
    g.z(p5, g.S);
    g.k = p5.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.QE = function() {
        return !1
    };
    g.k.Hf = function() {
        return !1
    };
    g.k.t_ = function() {
        return !1
    };
    g.z(q5, g.S);
    g.k = q5.prototype;
    g.k.PJ = function() {
        this.notification && (this.D.stop(), this.Mc(this.C), this.C = null, this.notification.close(), this.notification = null)
    };
    g.k.XI = function(a) {
        this.suggestion = a;
        l5(this, a, "hqdefault.jpg")
    };
    g.k.HV = function() {
        g.Xx(this, this.api.Hf());
        this.api.logVisibility(this.element, this.api.Hf());
        this.api.logVisibility(this.Da("ytp-upnext-autoplay-icon"), this.api.Hf());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Hf())
    };
    g.k.Vba = function() {
        window.focus();
        this.PJ()
    };
    g.k.XC = function(a) {
        var b = this;
        this.Wl() || (g.Uv("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.hu)(), this.j = new g.Ep(function() {
            Ykb(b, a)
        }, 25), Ykb(this, a), Rkb(this.api, Xkb(this, a)));
        g.Op(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.S.prototype.hide.call(this)
    };
    g.k.Wl = function() {
        return !!this.j
    };
    g.k.Uy = function() {
        this.rr();
        this.B = (0, g.hu)();
        Ykb(this);
        g.Mp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.rr = function() {
        this.Wl() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = a === void 0 ? !1 : a;
        if (this.api.U().L("autonav_notifications") && a && window.Notification && typeof document.hasFocus === "function") {
            var b = Notification.permission;
            b === "default" ? Notification.requestPermission() : b !== "granted" || document.hasFocus() || (this.PJ(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.nh()
            }), this.C = this.T(this.notification, "click", this.Vba), this.D.start())
        }
        this.rr();
        this.api.nextVideo(!1, a)
    };
    g.k.r5 = function(a) {
        !g.wh(this.cancelButton.element, a.target) && g.kT(a, this.api) && (this.api.Hf() && this.api.logClick(this.Da("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.q5 = function() {
        this.api.Hf() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.sS(this.api, !0)
    };
    g.k.Mba = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.XC(a)
    };
    g.k.Nba = function() {
        this.api.getPresentingPlayerType();
        this.rr();
        this.hide()
    };
    g.k.xa = function() {
        this.rr();
        this.PJ();
        g.S.prototype.xa.call(this)
    };
    g.z(r5, p5);
    g.k = r5.prototype;
    g.k.create = function() {
        p5.prototype.create.call(this);
        this.D.T(this.player, "appresize", this.HD);
        this.D.T(this.player, "onVideoAreaChange", this.HD);
        this.D.T(this.player, "videodatachange", this.onVideoDataChange);
        this.D.T(this.player, "autonavchange", this.IV);
        this.D.T(this.player, "onAutonavCancelled", this.s5);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        p5.prototype.show.call(this);
        (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.sS(this.player, !1);
        g.VS(this.player) && this.QE() && !this.C ? (s5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.XC() : this.videoData.autonavState === 3 && this.j.Uy()) : (g.sS(this.player, !0), s5(this));
        this.HD()
    };
    g.k.hide = function() {
        p5.prototype.hide.call(this);
        this.j.Uy();
        s5(this)
    };
    g.k.HD = function() {
        var a = this.player.Io(!0, this.player.isFullscreen());
        s5(this);
        o5(this.B);
        g.Qp(this.element, "ytp-autonav-cancelled-small-mode", this.Sg(a));
        g.Qp(this.element, "ytp-autonav-cancelled-tiny-mode", this.tL(a));
        g.Qp(this.element, "ytp-autonav-cancelled-mini-mode", a.width <= 400 || a.height <= 360);
        this.overlay && g.Fm(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.G)
            for (a = 0; a < this.videos.length; a++) g.Qp(this.videos[a].element, "ytp-suggestion-card-with-margin", a % 2 === 1)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
                var b = g.sR(this.videoData);
                b && (this.j.XI(b), this.j !== this.B && this.B.XI(b))
            }
            if (a && a.length)
                for (b = 0; b < dlb.length; ++b) {
                    var c = dlb[b];
                    if (a && a[c]) {
                        this.videos[b] = new m5(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, l5(d, c));
                        g.P(this, this.videos[b]);
                        this.videos[b].Ha(this.N.element)
                    }
                }
            this.HD()
        }
    };
    g.k.IV = function(a) {
        a === 1 ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.rr(), this.Eb && this.HD()) : (this.K = !0, this.Hf() && (a === 2 ? this.j.XC() : a === 3 && this.j.Uy()))
    };
    g.k.s5 = function(a) {
        a ? this.IV(1) : (this.C = null, this.K = !1)
    };
    g.k.QE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.Sg = function(a) {
        return (a.width < 910 || a.height < 459) && !this.tL(a) && !(a.width <= 400 || a.height <= 360)
    };
    g.k.tL = function(a) {
        return a.width < 800 && !(a.width <= 400 || a.height <= 360)
    };
    g.k.Hf = function() {
        return this.Eb && g.VS(this.player) && this.QE() && !this.C
    };
    var dlb = [1, 3, 2, 4];
    g.z(t5, g.S);
    g.k = t5.prototype;
    g.k.S2 = function() {
        switch (this.buttonType) {
            case 1:
                var a = "Watch again on YouTube";
                var b = 156915;
                break;
            case 2:
                a = "Continue watching on YouTube";
                b = 156942;
                break;
            default:
                a = "Continue watching on YouTube", b = 156942
        }
        this.update({
            content: a
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, b)
    };
    g.k.onClick = function(a) {
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.lT(this.getVideoUrl(), this.J, a);
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.J.getVideoUrl(a, !1, !1, !0);
        var b = this.J.U();
        if (g.LP(b)) {
            var c = {};
            g.LP(b) && g.eS(this.J, "addEmbedsConversionTrackingParams", [c]);
            a = g.gj(a, c)
        }
        return a
    };
    g.k.logVisibility = function() {
        this.J.logVisibility(this.element, this.Eb && this.Z)
    };
    g.k.show = function() {
        g.S.prototype.show.call(this);
        this.logVisibility()
    };
    g.k.hide = function() {
        g.S.prototype.hide.call(this);
        this.logVisibility()
    };
    g.k.Lc = function(a) {
        g.S.prototype.Lc.call(this, a);
        this.logVisibility()
    };
    g.z(u5, p5);
    u5.prototype.show = function() {
        this.player.getPlayerState() !== 3 && (p5.prototype.show.call(this), this.Se.MC(!0), this.Se.gt(!0), this.J.U().le || this.Se.Zs(!0), this.J.logVisibility(this.element, !0), this.watchButton.Lc(!0))
    };
    u5.prototype.hide = function() {
        p5.prototype.hide.call(this);
        this.Se.MC(!1);
        this.Se.gt(!1);
        this.Se.Zs(!1);
        this.J.logVisibility(this.element, !1);
        this.watchButton.Lc(!1)
    };
    g.z(Zkb, p5);
    Zkb.prototype.Ra = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.ym;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.B()
    };
    g.z(v5, g.S);
    v5.prototype.select = function() {
        this.api.Ip(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.wF || void 0) && this.api.logClick(this.element)
    };
    v5.prototype.onClick = function(a) {
        if (g.LP(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var b = this.suggestion.Pl(),
                c = {};
            g.aNa(this.api, c);
            b = g.gj(b, c);
            g.lT(b, this.api, a)
        } else g.kT(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select()
    };
    v5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    v5.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.B = a.Jf ? !1 : b.D
    };
    g.z(w5, p5);
    g.k = w5.prototype;
    g.k.create = function() {
        p5.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.Fr();
        this.B.T(this.player, "appresize", this.Fr);
        this.B.T(this.player, "onVideoAreaChange", this.Fr);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.B.T(this.player, "autonavchange", this.YN);
        this.B.T(this.player, "onAutonavCancelled", this.t5);
        a = this.videoData.autonavState;
        a !== this.W && this.YN(a);
        this.B.T(this.element, "transitionend", this.kda)
    };
    g.k.destroy = function() {
        g.ht(this.B);
        g.wg(this.stills);
        this.stills = [];
        p5.prototype.destroy.call(this);
        g.Op(this.element, "ytp-show-tiles");
        this.K.stop();
        this.W = this.videoData.autonavState
    };
    g.k.QE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.show = function() {
        var a = this.Eb;
        p5.prototype.show.call(this);
        g.Op(this.element, "ytp-show-tiles");
        this.player.U().B ? g.Gp(this.K) : this.K.start();
        (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.sS(this.player, !1);
        x5(this) ? (y5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.XC() : this.videoData.autonavState === 3 && this.j.Uy()) : (g.sS(this.player, !0), y5(this));
        a !== this.Eb && this.player.logVisibility(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.Eb;
        p5.prototype.hide.call(this);
        this.j.Uy();
        y5(this);
        a !== this.Eb && this.player.logVisibility(this.element, !1)
    };
    g.k.kda = function(a) {
        a.target === this.element && this.Fr()
    };
    g.k.Fr = function() {
        var a, b, c, d;
        var e = ((a = this.videoData) == null ? 0 : (b = a.suggestions) == null ? 0 : b.length) ? (c = this.videoData) == null ? void 0 : c.suggestions : [(d = this.videoData) == null ? void 0 : g.sR(d)];
        if (e.length) {
            g.Mp(this.element, "ytp-endscreen-paginate");
            var f = this.J.Io(!0, this.J.isFullscreen());
            if (a = g.iS(this.J)) a = a.Oh() ? 48 : 32, f.width -= a * 2;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = c * 4;
            for (n -= 4; n > 0 && (a < l || b < m);) {
                var p = a / 2,
                    q = b / 2,
                    r = a <= l - 2 && n >=
                    q * 4,
                    t = b <= m - 2 && n >= p * 4;
                if ((p + 1) / q * d / h > h / (p / (q + 1) * d) && t) n -= p * 4, b += 2;
                else if (r) n -= q * 4, a += 2;
                else if (t) n -= p * 4, b += 2;
                else break
            }
            d = !1;
            n >= 12 && c * 4 - n <= 6 && (b >= 4 || a >= 4) && (d = !0);
            n = a * 96;
            l = b * 54;
            h = n / l < h ? f.height / l : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            l = Math.floor(Math.min(f.height, l * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.Qm(f, n, l);
            g.Fm(f, {
                marginLeft: n / -2 + "px",
                marginTop: l / -2 + "px"
            });
            this.j.XI(g.sR(this.videoData));
            this.j instanceof n5 && o5(this.j);
            g.Qp(this.element, "ytp-endscreen-takeover",
                x5(this));
            y5(this);
            n += 4;
            l += 4;
            h = 0;
            f.ariaBusy = "true";
            for (m = 0; m < a; m++)
                for (p = 0; p < b; p++)
                    if (q = h, t = 0, d && m >= a - 2 && p >= b - 2 ? t = 1 : p % 2 === 0 && m % 2 === 0 && (p < 2 && m < 2 ? p === 0 && m === 0 && (t = 2) : t = 2), q = g.Cg(q + this.C, c), t !== 0) {
                        r = this.stills[h];
                        r || (r = new v5(this.player), this.stills[h] = r, f.appendChild(r.element));
                        var u = Math.floor(l * p / b),
                            y = Math.floor(n * m / a),
                            A = Math.floor(l * (p + t) / b) - u - 4,
                            C = Math.floor(n * (m + t) / a) - y - 4;
                        g.Mm(r.element, y, u);
                        g.Qm(r.element, C, A);
                        g.Fm(r.element, "transitionDelay", (p + m) / 20 + "s");
                        g.Qp(r.element, "ytp-videowall-still-mini",
                            t === 1);
                        g.Qp(r.element, "ytp-videowall-still-large", t > 2);
                        t = Math.max(C, A);
                        g.Qp(r.element, "ytp-videowall-still-round-large", t >= 256);
                        g.Qp(r.element, "ytp-videowall-still-round-medium", t > 96 && t < 256);
                        g.Qp(r.element, "ytp-videowall-still-round-small", t <= 96);
                        q = e[q];
                        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), u = g.Lp(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", l5(r, q, u), g.LP(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") && (t = q.Pl(), u = {}, g.eS(r.api, "addEmbedsConversionTrackingParams", [u]), t = g.gj(t, u), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.Qp(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.vh(a.element), g.vg(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData(1);
        this.videoData !== a && (a != null && g.sR(a) ? (this.C = 0, this.videoData = a, this.Fr()) : this.player.ma("missg", {
            vid: (a == null ? void 0 : a.videoId) || "",
            cpn: (a == null ? void 0 : a.clientPlaybackNonce) || ""
        }))
    };
    g.k.u5 = function() {
        this.C += this.stills.length;
        this.Fr()
    };
    g.k.v5 = function() {
        this.C -= this.stills.length;
        this.Fr()
    };
    g.k.t_ = function() {
        return this.j.Wl()
    };
    g.k.YN = function(a) {
        a === 1 ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.rr(), this.Eb && this.Fr()) : (this.G = !0, this.Eb && x5(this) && (a === 2 ? this.j.XC() : a === 3 && this.j.Uy()))
    };
    g.k.t5 = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
            this.YN(1)
        } else this.D = null, this.G = !1;
        this.Fr()
    };
    g.k.Hf = function() {
        return this.Eb && x5(this)
    };
    g.z(z5, p5);
    z5.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            p5.prototype.show.call(this);
            var a = this.B;
            if (a) {
                var b = this.j.suggestionData.length > 0;
                g.Qp(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            (c = g.iS(this.player)) == null || c.NC(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.Lc(!0)
        }
    };
    z5.prototype.hide = function() {
        p5.prototype.hide.call(this);
        var a;
        (a = g.iS(this.player)) == null || a.NC(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.Lc(!1)
    };
    g.z(clb, g.hY);
    g.k = clb.prototype;
    g.k.Pv = function() {
        var a = this.player.getVideoData(),
            b = a.mutedAutoplay;
        if ((this.player.fd() || this.B) && !b) return !0;
        var c;
        var d = !!((a == null ? 0 : g.sR(a)) || (a == null ? 0 : (c = a.suggestions) == null ? 0 : c.length));
        d = !$kb(this.player) || d;
        a = a.Sj;
        c = this.player.JF();
        return d && !a && !c && !b
    };
    g.k.Hf = function() {
        return this.endScreen.Hf()
    };
    g.k.J$ = function() {
        return this.Hf() ? this.endScreen.t_() : !1
    };
    g.k.xa = function() {
        this.player.kf("endscreen");
        g.hY.prototype.xa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.yb().Ke.get("heartbeat"),
                d = g.sR(a);
            !d || b.videoId !== d.videoId || a.fX ? (this.player.Ip(b.videoId, void 0, void 0, !0, !0, b), c && c.CL("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.hY.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.hY.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Pv() && (this.endScreen.created || this.endScreen.create(), a.getId() === "load" && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "load" && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        blb(this);
        this.D && alb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new r5(this.player) : this.endScreen = new w5(this.player), g.P(this, this.endScreen), g.US(this.player, this.endScreen.element, 4))
    };
    g.gY("endscreen", clb);
})(_yt_player);