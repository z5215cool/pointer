(this.webpackJsonppointerpointer = this.webpackJsonppointerpointer || []).push([[0], {
    13 : function(e, t, n) {},
    14 : function(e, t, n) {},
    17 : function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0),
        r = n.n(o),
        a = n(5),
        i = n.n(a),
        c = (n(13), n(7)),
        s = n(1),
        u = (n(14),
        function() {
            return {
                x: document.documentElement.clientWidth,
                y: document.documentElement.clientHeight
            }
        }),
        l = function() {
            var e = Object(o.useState)(u()),
            t = Object(s.a)(e, 2),
            n = t[0],
            r = t[1];
            return Object(o.useEffect)((function() {
                var e = function() {
                    r(u())
                };
                return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }), []),
            n
        },
        d = function(e, t) {
            var n = Object(o.useState)(),
            r = Object(s.a)(n, 2),
            a = r[0],
            i = r[1];
            return Object(o.useEffect)((function() {
                var n = setTimeout((function() {
                    i(e)
                }), t);
                return function() {
                    i(void 0),
                    clearTimeout(n)
                }
            }), [e, t]),
            a
        },
        f = window.matchMedia("(any-hover: hover)").matches,
        v = function(e) {
            var t = e.position,
            n = d(t, 1200);
            return r.a.createElement("div", {
                className: "Loading ".concat(t ? "mod-loader": "")
            },
            r.a.createElement("div", null, t ? n ? "Pointer located. Pointing...": "Finding pointer... Please\xa0hold\xa0still.": f ? "Please move your pointer": "Please tap on the screen"))
        },
        m = function(e) {
            var t = e.position;
            return r.a.createElement("div", {
                style: {
                    zIndex: 2e3,
                    position: "absolute",
                    transform: "translate(".concat(t.x - 3, "px, ").concat(t.y - 4, "px)")
                }
            },
            r.a.createElement("img", {
                src: "cursor.png",
                width: "15",
                alt: "pointer"
            }))
        },
        h = n(3),
        p = n(2),
        g = n.n(p),
        y = function(e, t) {
            var n = e.x,
            o = e.y,
            r = t.x,
            a = t.y;
            return Math.pow(n - r, 2) + Math.pow(o - a, 2)
        },
        b = function(e, t) {
            var n = e.x,
            o = e.y;
            return {
                x: n / t.x,
                y: o / t.y
            }
        },
        x = function(e, t) {
            return {
                x: e.x * t,
                y: e.y * t
            }
        },
        w = function(e, t) {
            var n = e.x,
            o = e.y;
            return {
                x: n * t.x,
                y: o * t.y
            }
        },
        E = function(e, t) {
            var n = e.x,
            o = e.y;
            return {
                x: n + t.x,
                y: o + t.y
            }
        },
        j = function(e, t) {
            var n = e.x,
            o = e.y;
            return {
                x: n - t.x,
                y: o - t.y
            }
        },
        O = function(e, t) {
            var n = e.x,
            o = e.y,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "px";
            return "".concat(t, "(").concat(n).concat(r, ", ").concat(o).concat(r, ")")
        },
        k = n(6),
        L = [],
        S = function(e, t, n) {
            var r = Object(o.useState)(),
            a = Object(s.a)(r, 2),
            i = a[0],
            c = a[1];
            return Object(o.useEffect)((function() {
                if (t && n) {
                    var o = function(e, t) {
                        for (var n = void 0,
                        o = Number.MAX_VALUE,
                        r = 0; r < t.length; r++) {
                            var a = t[r],
                            i = y(a, e);
                            i < o && !L.includes(r) && (o = i, n = r)
                        }
                        return L.unshift(n),
                        L.length = Math.min(L.length, 4),
                        n
                    } (b(t, e), n);
                    c(o)
                } else c(void 0)
            }), [n, t, e]),
            [i, n && void 0 !== i ? n[i] : void 0]
        },
        A = {
            image: void 0,
            status: "loading"
        },
        W = function() {
            return g.a.async((function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.t0 = g.a,
                    e.next = 3,
                    g.a.awrap(fetch("./new-positions.json"));
                case 3:
                    return e.t1 = e.sent.json(),
                    e.next = 6,
                    e.t0.awrap.call(e.t0, e.t1);
                case 6:
                    return e.t2 = function(e) {
                        var t = Object(s.a)(e, 2);
                        return {
                            x: t[0],
                            y: t[1]
                        }
                    },
                    e.abrupt("return", e.sent.map(e.t2));
                case 8:
                case "end":
                    return e.stop()
                }
            }))
        },
        P = function(e) {
            var t = Object(o.useState)(),
            n = Object(s.a)(t, 2),
            r = n[0],
            a = n[1],
            i = l(),
            c = Object(k.useAsync)(W, []).result,
            u = S(i, e, c),
            d = Object(s.a)(u, 2),
            f = d[0],
            v = d[1],
            m = function(e) {
                var t = Object(o.useState)(A),
                n = Object(s.a)(t, 2),
                r = n[0],
                a = r.image,
                i = r.status,
                c = n[1];
                return Object(o.useEffect)((function() {
                    if (e) {
                        var t = document.createElement("img"),
                        n = function() {
                            c({
                                image: t,
                                status: "loaded"
                            })
                        },
                        o = function() {
                            c({
                                image: void 0,
                                status: "failed"
                            })
                        };
                        return t.addEventListener("load", n),
                        t.addEventListener("error", o),
                        t.src = e,
                        function() {
                            t.removeEventListener("load", n),
                            t.removeEventListener("error", o),
                            c(A)
                        }
                    }
                }), [e]),
                [a, i]
            } (void 0 !== f ? "https://pointerpointer.com/images/".concat(f, ".jpg") : void 0)[0];
            return Object(o.useEffect)((function() {
                if (m && e && v) {
                    var t, n = b(e, i),
                    o = x(v, 100),
                    r = function(e, t) {
                        var n = e.x,
                        o = e.y,
                        r = t.x,
                        a = t.y,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        c = o / n,
                        s = a / r,
                        u = (i ? c > s: c < s) ? r / n: a / o;
                        return {
                            x: n * u,
                            y: o * u
                        }
                    } ({
                        x: (t = m).width,
                        y: t.height
                    },
                    i),
                    c = x(w(j(r, i), n), -1),
                    s = w(j(n, v), r);
                    a({
                        width: "".concat(r.x, "px"),
                        height: "".concat(r.y, "px"),
                        transform: c ? "".concat(O(E(c, s), "translate", "px"), " scale(1.2)") : void 0,
                        transformOrigin: "".concat(o.x, "% ").concat(o.y, "%")
                    })
                } else a(void 0)
            }), [i, v, m, e]),
            [m, r]
        },
        N = function() {
            var e = l(),
            t = function() {
                var e = Object(o.useState)(!1),
                t = Object(s.a)(e, 2),
                n = t[0],
                r = t[1],
                a = Object(o.useState)(),
                i = Object(s.a)(a, 2),
                c = i[0],
                u = i[1];
                return Object(o.useEffect)((function() {
                    document.addEventListener("mouseleave", (function() {
                        return r(!0)
                    })),
                    document.addEventListener("mouseenter", (function() {
                        return r(!1)
                    }))
                }), []),
                [(f ? h.b: h.a)((function(e) {
                    var t = Object(s.a)(e.xy, 2),
                    n = t[0],
                    o = t[1];
                    u({
                        x: n,
                        y: o
                    })
                })), d(c, 2e3), n ? void 0 : c]
            } (),
            n = Object(s.a)(t, 3),
            a = n[0],
            i = n[1],
            u = n[2],
            p = P(i),
            g = Object(s.a)(p, 2),
            y = g[0],
            b = g[1];
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", Object.assign({
                className: "Interactions",
                style: {
                    width: e.x,
                    height: e.y
                }
            },
            a())), r.a.createElement("div", {
                className: "App",
                style: {
                    width: e.x,
                    height: e.y
                }
            },
            !f && u ? r.a.createElement(m, {
                position: u
            }) : null, y ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                style: {
                    position: "absolute",
                    transform: "scale(1.1)"
                }
            },
            r.a.createElement("img", {
                style: Object(c.a)({},
                b, {
                    filter: "blur(8px)"
                }),
                alt: "someone pointing at your pointer",
                key: y.src,
                src: y.src
            })), r.a.createElement("div", {
                style: {
                    position: "absolute"
                }
            },
            r.a.createElement("img", {
                style: b,
                alt: "someone pointing at your pointer",
                key: y.src,
                src: y.src
            }))) : r.a.createElement(v, {
                position: u
            })))
        },
        M = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function T(e, t) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var n = e.installing;
                    null != n && (n.onstatechange = function() {
                        "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                    })
                }
            })).
            catch((function(e) {
                console.error("Error during service worker registration:", e)
            }))
        }
        i.a.render(r.a.createElement(N, null), document.getElementById("root")),
        function(e) {
            if ("serviceWorker" in navigator) {
                if (new URL("", window.location.href).origin !== window.location.origin) return;
                window.addEventListener("load", (function() {
                    var t = "".concat("", "/service-worker.js");
                    M ? (!
                    function(e, t) {
                        fetch(e, {
                            headers: {
                                "Service-Worker": "script"
                            }
                        }).then((function(n) {
                            var o = n.headers.get("content-type");
                            404 === n.status || null != o && -1 === o.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }))
                            })) : T(e, t)
                        })).
                        catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }))
                    } (t, e), navigator.serviceWorker.ready.then((function() {
                        console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                    }))) : T(t, e)
                }))
            }
        } ()
    },
    8 : function(e, t, n) {
        e.exports = n(17)
    }
},
[[8, 1, 2]]]);

