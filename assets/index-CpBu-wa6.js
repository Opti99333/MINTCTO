(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const c of a)
            if (c.type === "childList")
                for (const u of c.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(a) {
        const c = {};
        return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const c = o(a);
        fetch(a.href, c)
    }
})();
var sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function By(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var oc = {
        exports: {}
    },
    vi = {},
    ic = {
        exports: {}
    },
    Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cm;

function Mb() {
    if (cm) return Pe;
    cm = 1;
    var e = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function v(w) {
        return w === null || typeof w != "object" ? null : (w = y && w[y] || w["@@iterator"], typeof w == "function" ? w : null)
    }
    var b = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        P = Object.assign,
        C = {};

    function L(w, M, q) {
        this.props = w, this.context = M, this.refs = C, this.updater = q || b
    }
    L.prototype.isReactComponent = {}, L.prototype.setState = function(w, M) {
        if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, M, "setState")
    }, L.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    };

    function $() {}
    $.prototype = L.prototype;

    function _(w, M, q) {
        this.props = w, this.context = M, this.refs = C, this.updater = q || b
    }
    var D = _.prototype = new $;
    D.constructor = _, P(D, L.prototype), D.isPureReactComponent = !0;
    var F = Array.isArray,
        U = Object.prototype.hasOwnProperty,
        Y = {
            current: null
        },
        oe = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function E(w, M, q) {
        var ne, ie = {},
            le = null,
            me = null;
        if (M != null)
            for (ne in M.ref !== void 0 && (me = M.ref), M.key !== void 0 && (le = "" + M.key), M) U.call(M, ne) && !oe.hasOwnProperty(ne) && (ie[ne] = M[ne]);
        var he = arguments.length - 2;
        if (he === 1) ie.children = q;
        else if (1 < he) {
            for (var de = Array(he), Ce = 0; Ce < he; Ce++) de[Ce] = arguments[Ce + 2];
            ie.children = de
        }
        if (w && w.defaultProps)
            for (ne in he = w.defaultProps, he) ie[ne] === void 0 && (ie[ne] = he[ne]);
        return {
            $$typeof: e,
            type: w,
            key: le,
            ref: me,
            props: ie,
            _owner: Y.current
        }
    }

    function J(w, M) {
        return {
            $$typeof: e,
            type: w.type,
            key: M,
            ref: w.ref,
            props: w.props,
            _owner: w._owner
        }
    }

    function se(w) {
        return typeof w == "object" && w !== null && w.$$typeof === e
    }

    function H(w) {
        var M = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(q) {
            return M[q]
        })
    }
    var B = /\/+/g;

    function O(w, M) {
        return typeof w == "object" && w !== null && w.key != null ? H("" + w.key) : M.toString(36)
    }

    function W(w, M, q, ne, ie) {
        var le = typeof w;
        (le === "undefined" || le === "boolean") && (w = null);
        var me = !1;
        if (w === null) me = !0;
        else switch (le) {
            case "string":
            case "number":
                me = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                    case e:
                    case n:
                        me = !0
                }
        }
        if (me) return me = w, ie = ie(me), w = ne === "" ? "." + O(me, 0) : ne, F(ie) ? (q = "", w != null && (q = w.replace(B, "$&/") + "/"), W(ie, M, q, "", function(Ce) {
            return Ce
        })) : ie != null && (se(ie) && (ie = J(ie, q + (!ie.key || me && me.key === ie.key ? "" : ("" + ie.key).replace(B, "$&/") + "/") + w)), M.push(ie)), 1;
        if (me = 0, ne = ne === "" ? "." : ne + ":", F(w))
            for (var he = 0; he < w.length; he++) {
                le = w[he];
                var de = ne + O(le, he);
                me += W(le, M, q, de, ie)
            } else if (de = v(w), typeof de == "function")
                for (w = de.call(w), he = 0; !(le = w.next()).done;) le = le.value, de = ne + O(le, he++), me += W(le, M, q, de, ie);
            else if (le === "object") throw M = String(w), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
        return me
    }

    function z(w, M, q) {
        if (w == null) return w;
        var ne = [],
            ie = 0;
        return W(w, ne, "", "", function(le) {
            return M.call(q, le, ie++)
        }), ne
    }

    function re(w) {
        if (w._status === -1) {
            var M = w._result;
            M = M(), M.then(function(q) {
                (w._status === 0 || w._status === -1) && (w._status = 1, w._result = q)
            }, function(q) {
                (w._status === 0 || w._status === -1) && (w._status = 2, w._result = q)
            }), w._status === -1 && (w._status = 0, w._result = M)
        }
        if (w._status === 1) return w._result.default;
        throw w._result
    }
    var ee = {
            current: null
        },
        I = {
            transition: null
        },
        Q = {
            ReactCurrentDispatcher: ee,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: Y
        };

    function K() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Pe.Children = {
        map: z,
        forEach: function(w, M, q) {
            z(w, function() {
                M.apply(this, arguments)
            }, q)
        },
        count: function(w) {
            var M = 0;
            return z(w, function() {
                M++
            }), M
        },
        toArray: function(w) {
            return z(w, function(M) {
                return M
            }) || []
        },
        only: function(w) {
            if (!se(w)) throw Error("React.Children.only expected to receive a single React element child.");
            return w
        }
    }, Pe.Component = L, Pe.Fragment = o, Pe.Profiler = a, Pe.PureComponent = _, Pe.StrictMode = i, Pe.Suspense = p, Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, Pe.act = K, Pe.cloneElement = function(w, M, q) {
        if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
        var ne = P({}, w.props),
            ie = w.key,
            le = w.ref,
            me = w._owner;
        if (M != null) {
            if (M.ref !== void 0 && (le = M.ref, me = Y.current), M.key !== void 0 && (ie = "" + M.key), w.type && w.type.defaultProps) var he = w.type.defaultProps;
            for (de in M) U.call(M, de) && !oe.hasOwnProperty(de) && (ne[de] = M[de] === void 0 && he !== void 0 ? he[de] : M[de])
        }
        var de = arguments.length - 2;
        if (de === 1) ne.children = q;
        else if (1 < de) {
            he = Array(de);
            for (var Ce = 0; Ce < de; Ce++) he[Ce] = arguments[Ce + 2];
            ne.children = he
        }
        return {
            $$typeof: e,
            type: w.type,
            key: ie,
            ref: le,
            props: ne,
            _owner: me
        }
    }, Pe.createContext = function(w) {
        return w = {
            $$typeof: u,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, w.Provider = {
            $$typeof: c,
            _context: w
        }, w.Consumer = w
    }, Pe.createElement = E, Pe.createFactory = function(w) {
        var M = E.bind(null, w);
        return M.type = w, M
    }, Pe.createRef = function() {
        return {
            current: null
        }
    }, Pe.forwardRef = function(w) {
        return {
            $$typeof: d,
            render: w
        }
    }, Pe.isValidElement = se, Pe.lazy = function(w) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: re
        }
    }, Pe.memo = function(w, M) {
        return {
            $$typeof: h,
            type: w,
            compare: M === void 0 ? null : M
        }
    }, Pe.startTransition = function(w) {
        var M = I.transition;
        I.transition = {};
        try {
            w()
        } finally {
            I.transition = M
        }
    }, Pe.unstable_act = K, Pe.useCallback = function(w, M) {
        return ee.current.useCallback(w, M)
    }, Pe.useContext = function(w) {
        return ee.current.useContext(w)
    }, Pe.useDebugValue = function() {}, Pe.useDeferredValue = function(w) {
        return ee.current.useDeferredValue(w)
    }, Pe.useEffect = function(w, M) {
        return ee.current.useEffect(w, M)
    }, Pe.useId = function() {
        return ee.current.useId()
    }, Pe.useImperativeHandle = function(w, M, q) {
        return ee.current.useImperativeHandle(w, M, q)
    }, Pe.useInsertionEffect = function(w, M) {
        return ee.current.useInsertionEffect(w, M)
    }, Pe.useLayoutEffect = function(w, M) {
        return ee.current.useLayoutEffect(w, M)
    }, Pe.useMemo = function(w, M) {
        return ee.current.useMemo(w, M)
    }, Pe.useReducer = function(w, M, q) {
        return ee.current.useReducer(w, M, q)
    }, Pe.useRef = function(w) {
        return ee.current.useRef(w)
    }, Pe.useState = function(w) {
        return ee.current.useState(w)
    }, Pe.useSyncExternalStore = function(w, M, q) {
        return ee.current.useSyncExternalStore(w, M, q)
    }, Pe.useTransition = function() {
        return ee.current.useTransition()
    }, Pe.version = "18.3.1", Pe
}
var dm;

function yd() {
    return dm || (dm = 1, ic.exports = Mb()), ic.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fm;

function Lb() {
    if (fm) return vi;
    fm = 1;
    var e = yd(),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function u(d, p, h) {
        var g, y = {},
            v = null,
            b = null;
        h !== void 0 && (v = "" + h), p.key !== void 0 && (v = "" + p.key), p.ref !== void 0 && (b = p.ref);
        for (g in p) i.call(p, g) && !c.hasOwnProperty(g) && (y[g] = p[g]);
        if (d && d.defaultProps)
            for (g in p = d.defaultProps, p) y[g] === void 0 && (y[g] = p[g]);
        return {
            $$typeof: n,
            type: d,
            key: v,
            ref: b,
            props: y,
            _owner: a.current
        }
    }
    return vi.Fragment = o, vi.jsx = u, vi.jsxs = u, vi
}
var pm;

function Ab() {
    return pm || (pm = 1, oc.exports = Lb()), oc.exports
}
var R = Ab(),
    S = yd();
const Se = By(S);
var aa = {},
    sc = {
        exports: {}
    },
    wt = {},
    ac = {
        exports: {}
    },
    lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm;

function Rb() {
    return hm || (hm = 1, function(e) {
        function n(I, Q) {
            var K = I.length;
            I.push(Q);
            e: for (; 0 < K;) {
                var w = K - 1 >>> 1,
                    M = I[w];
                if (0 < a(M, Q)) I[w] = Q, I[K] = M, K = w;
                else break e
            }
        }

        function o(I) {
            return I.length === 0 ? null : I[0]
        }

        function i(I) {
            if (I.length === 0) return null;
            var Q = I[0],
                K = I.pop();
            if (K !== Q) {
                I[0] = K;
                e: for (var w = 0, M = I.length, q = M >>> 1; w < q;) {
                    var ne = 2 * (w + 1) - 1,
                        ie = I[ne],
                        le = ne + 1,
                        me = I[le];
                    if (0 > a(ie, K)) le < M && 0 > a(me, ie) ? (I[w] = me, I[le] = K, w = le) : (I[w] = ie, I[ne] = K, w = ne);
                    else if (le < M && 0 > a(me, K)) I[w] = me, I[le] = K, w = le;
                    else break e
                }
            }
            return Q
        }

        function a(I, Q) {
            var K = I.sortIndex - Q.sortIndex;
            return K !== 0 ? K : I.id - Q.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            e.unstable_now = function() {
                return c.now()
            }
        } else {
            var u = Date,
                d = u.now();
            e.unstable_now = function() {
                return u.now() - d
            }
        }
        var p = [],
            h = [],
            g = 1,
            y = null,
            v = 3,
            b = !1,
            P = !1,
            C = !1,
            L = typeof setTimeout == "function" ? setTimeout : null,
            $ = typeof clearTimeout == "function" ? clearTimeout : null,
            _ = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function D(I) {
            for (var Q = o(h); Q !== null;) {
                if (Q.callback === null) i(h);
                else if (Q.startTime <= I) i(h), Q.sortIndex = Q.expirationTime, n(p, Q);
                else break;
                Q = o(h)
            }
        }

        function F(I) {
            if (C = !1, D(I), !P)
                if (o(p) !== null) P = !0, re(U);
                else {
                    var Q = o(h);
                    Q !== null && ee(F, Q.startTime - I)
                }
        }

        function U(I, Q) {
            P = !1, C && (C = !1, $(E), E = -1), b = !0;
            var K = v;
            try {
                for (D(Q), y = o(p); y !== null && (!(y.expirationTime > Q) || I && !H());) {
                    var w = y.callback;
                    if (typeof w == "function") {
                        y.callback = null, v = y.priorityLevel;
                        var M = w(y.expirationTime <= Q);
                        Q = e.unstable_now(), typeof M == "function" ? y.callback = M : y === o(p) && i(p), D(Q)
                    } else i(p);
                    y = o(p)
                }
                if (y !== null) var q = !0;
                else {
                    var ne = o(h);
                    ne !== null && ee(F, ne.startTime - Q), q = !1
                }
                return q
            } finally {
                y = null, v = K, b = !1
            }
        }
        var Y = !1,
            oe = null,
            E = -1,
            J = 5,
            se = -1;

        function H() {
            return !(e.unstable_now() - se < J)
        }

        function B() {
            if (oe !== null) {
                var I = e.unstable_now();
                se = I;
                var Q = !0;
                try {
                    Q = oe(!0, I)
                } finally {
                    Q ? O() : (Y = !1, oe = null)
                }
            } else Y = !1
        }
        var O;
        if (typeof _ == "function") O = function() {
            _(B)
        };
        else if (typeof MessageChannel < "u") {
            var W = new MessageChannel,
                z = W.port2;
            W.port1.onmessage = B, O = function() {
                z.postMessage(null)
            }
        } else O = function() {
            L(B, 0)
        };

        function re(I) {
            oe = I, Y || (Y = !0, O())
        }

        function ee(I, Q) {
            E = L(function() {
                I(e.unstable_now())
            }, Q)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
            I.callback = null
        }, e.unstable_continueExecution = function() {
            P || b || (P = !0, re(U))
        }, e.unstable_forceFrameRate = function(I) {
            0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < I ? Math.floor(1e3 / I) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return v
        }, e.unstable_getFirstCallbackNode = function() {
            return o(p)
        }, e.unstable_next = function(I) {
            switch (v) {
                case 1:
                case 2:
                case 3:
                    var Q = 3;
                    break;
                default:
                    Q = v
            }
            var K = v;
            v = Q;
            try {
                return I()
            } finally {
                v = K
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(I, Q) {
            switch (I) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    I = 3
            }
            var K = v;
            v = I;
            try {
                return Q()
            } finally {
                v = K
            }
        }, e.unstable_scheduleCallback = function(I, Q, K) {
            var w = e.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? w + K : w) : K = w, I) {
                case 1:
                    var M = -1;
                    break;
                case 2:
                    M = 250;
                    break;
                case 5:
                    M = 1073741823;
                    break;
                case 4:
                    M = 1e4;
                    break;
                default:
                    M = 5e3
            }
            return M = K + M, I = {
                id: g++,
                callback: Q,
                priorityLevel: I,
                startTime: K,
                expirationTime: M,
                sortIndex: -1
            }, K > w ? (I.sortIndex = K, n(h, I), o(p) === null && I === o(h) && (C ? ($(E), E = -1) : C = !0, ee(F, K - w))) : (I.sortIndex = M, n(p, I), P || b || (P = !0, re(U))), I
        }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(I) {
            var Q = v;
            return function() {
                var K = v;
                v = Q;
                try {
                    return I.apply(this, arguments)
                } finally {
                    v = K
                }
            }
        }
    }(lc)), lc
}
var mm;

function _b() {
    return mm || (mm = 1, ac.exports = Rb()), ac.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;

function Db() {
    if (gm) return wt;
    gm = 1;
    var e = yd(),
        n = _b();

    function o(t) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function c(t, r) {
        u(t, r), u(t + "Capture", r)
    }

    function u(t, r) {
        for (a[t] = r, t = 0; t < r.length; t++) i.add(r[t])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        p = Object.prototype.hasOwnProperty,
        h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        y = {};

    function v(t) {
        return p.call(y, t) ? !0 : p.call(g, t) ? !1 : h.test(t) ? y[t] = !0 : (g[t] = !0, !1)
    }

    function b(t, r, s, l) {
        if (s !== null && s.type === 0) return !1;
        switch (typeof r) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return l ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
            default:
                return !1
        }
    }

    function P(t, r, s, l) {
        if (r === null || typeof r > "u" || b(t, r, s, l)) return !0;
        if (l) return !1;
        if (s !== null) switch (s.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
        }
        return !1
    }

    function C(t, r, s, l, f, m, x) {
        this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = x
    }
    var L = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        L[t] = new C(t, 0, !1, t, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(t) {
        var r = t[0];
        L[r] = new C(r, 1, !1, t[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        L[t] = new C(t, 2, !1, t.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        L[t] = new C(t, 2, !1, t, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        L[t] = new C(t, 3, !1, t.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        L[t] = new C(t, 3, !0, t, null, !1, !1)
    }), ["capture", "download"].forEach(function(t) {
        L[t] = new C(t, 4, !1, t, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(t) {
        L[t] = new C(t, 6, !1, t, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(t) {
        L[t] = new C(t, 5, !1, t.toLowerCase(), null, !1, !1)
    });
    var $ = /[\-:]([a-z])/g;

    function _(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var r = t.replace($, _);
        L[r] = new C(r, 1, !1, t, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var r = t.replace($, _);
        L[r] = new C(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var r = t.replace($, _);
        L[r] = new C(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
        L[t] = new C(t, 1, !1, t.toLowerCase(), null, !1, !1)
    }), L.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
        L[t] = new C(t, 1, !1, t.toLowerCase(), null, !0, !0)
    });

    function D(t, r, s, l) {
        var f = L.hasOwnProperty(r) ? L[r] : null;
        (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (P(r, s, f, l) && (s = null), l || f === null ? v(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : f.mustUseProperty ? t[f.propertyName] = s === null ? f.type === 3 ? !1 : "" : s : (r = f.attributeName, l = f.attributeNamespace, s === null ? t.removeAttribute(r) : (f = f.type, s = f === 3 || f === 4 && s === !0 ? "" : "" + s, l ? t.setAttributeNS(l, r, s) : t.setAttribute(r, s))))
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        U = Symbol.for("react.element"),
        Y = Symbol.for("react.portal"),
        oe = Symbol.for("react.fragment"),
        E = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        se = Symbol.for("react.provider"),
        H = Symbol.for("react.context"),
        B = Symbol.for("react.forward_ref"),
        O = Symbol.for("react.suspense"),
        W = Symbol.for("react.suspense_list"),
        z = Symbol.for("react.memo"),
        re = Symbol.for("react.lazy"),
        ee = Symbol.for("react.offscreen"),
        I = Symbol.iterator;

    function Q(t) {
        return t === null || typeof t != "object" ? null : (t = I && t[I] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var K = Object.assign,
        w;

    function M(t) {
        if (w === void 0) try {
            throw Error()
        } catch (s) {
            var r = s.stack.trim().match(/\n( *(at )?)/);
            w = r && r[1] || ""
        }
        return `
` + w + t
    }
    var q = !1;

    function ne(t, r) {
        if (!t || q) return "";
        q = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() {
                        throw Error()
                    }, Object.defineProperty(r.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(r, [])
                    } catch (V) {
                        var l = V
                    }
                    Reflect.construct(t, [], r)
                } else {
                    try {
                        r.call()
                    } catch (V) {
                        l = V
                    }
                    t.call(r.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (V) {
                    l = V
                }
                t()
            }
        } catch (V) {
            if (V && l && typeof V.stack == "string") {
                for (var f = V.stack.split(`
`), m = l.stack.split(`
`), x = f.length - 1, T = m.length - 1; 1 <= x && 0 <= T && f[x] !== m[T];) T--;
                for (; 1 <= x && 0 <= T; x--, T--)
                    if (f[x] !== m[T]) {
                        if (x !== 1 || T !== 1)
                            do
                                if (x--, T--, 0 > T || f[x] !== m[T]) {
                                    var k = `
` + f[x].replace(" at new ", " at ");
                                    return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k
                                }
                        while (1 <= x && 0 <= T);
                        break
                    }
            }
        } finally {
            q = !1, Error.prepareStackTrace = s
        }
        return (t = t ? t.displayName || t.name : "") ? M(t) : ""
    }

    function ie(t) {
        switch (t.tag) {
            case 5:
                return M(t.type);
            case 16:
                return M("Lazy");
            case 13:
                return M("Suspense");
            case 19:
                return M("SuspenseList");
            case 0:
            case 2:
            case 15:
                return t = ne(t.type, !1), t;
            case 11:
                return t = ne(t.type.render, !1), t;
            case 1:
                return t = ne(t.type, !0), t;
            default:
                return ""
        }
    }

    function le(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case oe:
                return "Fragment";
            case Y:
                return "Portal";
            case J:
                return "Profiler";
            case E:
                return "StrictMode";
            case O:
                return "Suspense";
            case W:
                return "SuspenseList"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case H:
                return (t.displayName || "Context") + ".Consumer";
            case se:
                return (t._context.displayName || "Context") + ".Provider";
            case B:
                var r = t.render;
                return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case z:
                return r = t.displayName || null, r !== null ? r : le(t.type) || "Memo";
            case re:
                r = t._payload, t = t._init;
                try {
                    return le(t(r))
                } catch {}
        }
        return null
    }

    function me(t) {
        var r = t.type;
        switch (t.tag) {
            case 24:
                return "Cache";
            case 9:
                return (r.displayName || "Context") + ".Consumer";
            case 10:
                return (r._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return r;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return le(r);
            case 8:
                return r === E ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof r == "function") return r.displayName || r.name || null;
                if (typeof r == "string") return r
        }
        return null
    }

    function he(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function de(t) {
        var r = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
    }

    function Ce(t) {
        var r = de(t) ? "checked" : "value",
            s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
            l = "" + t[r];
        if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var f = s.get,
                m = s.set;
            return Object.defineProperty(t, r, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(x) {
                    l = "" + x, m.call(this, x)
                }
            }), Object.defineProperty(t, r, {
                enumerable: s.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(x) {
                    l = "" + x
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[r]
                }
            }
        }
    }

    function kt(t) {
        t._valueTracker || (t._valueTracker = Ce(t))
    }

    function en(t) {
        if (!t) return !1;
        var r = t._valueTracker;
        if (!r) return !0;
        var s = r.getValue(),
            l = "";
        return t && (l = de(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== s ? (r.setValue(t), !0) : !1
    }

    function fn(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }

    function Mn(t, r) {
        var s = r.checked;
        return K({}, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ? ? t._wrapperState.initialChecked
        })
    }

    function lr(t, r) {
        var s = r.defaultValue == null ? "" : r.defaultValue,
            l = r.checked != null ? r.checked : r.defaultChecked;
        s = he(r.value != null ? r.value : s), t._wrapperState = {
            initialChecked: l,
            initialValue: s,
            controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
        }
    }

    function Mt(t, r) {
        r = r.checked, r != null && D(t, "checked", r, !1)
    }

    function Bt(t, r) {
        Mt(t, r);
        var s = he(r.value),
            l = r.type;
        if (s != null) l === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
        else if (l === "submit" || l === "reset") {
            t.removeAttribute("value");
            return
        }
        r.hasOwnProperty("value") ? _o(t, r.type, s) : r.hasOwnProperty("defaultValue") && _o(t, r.type, he(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked)
    }

    function ur(t, r, s) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var l = r.type;
            if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null)) return;
            r = "" + t._wrapperState.initialValue, s || r === t.value || (t.value = r), t.defaultValue = r
        }
        s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s)
    }

    function _o(t, r, s) {
        (r !== "number" || fn(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s))
    }
    var cr = Array.isArray;

    function Ln(t, r, s, l) {
        if (t = t.options, r) {
            r = {};
            for (var f = 0; f < s.length; f++) r["$" + s[f]] = !0;
            for (s = 0; s < t.length; s++) f = r.hasOwnProperty("$" + t[s].value), t[s].selected !== f && (t[s].selected = f), f && l && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + he(s), r = null, f = 0; f < t.length; f++) {
                if (t[f].value === s) {
                    t[f].selected = !0, l && (t[f].defaultSelected = !0);
                    return
                }
                r !== null || t[f].disabled || (r = t[f])
            }
            r !== null && (r.selected = !0)
        }
    }

    function Ut(t, r) {
        if (r.dangerouslySetInnerHTML != null) throw Error(o(91));
        return K({}, r, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function wf(t, r) {
        var s = r.value;
        if (s == null) {
            if (s = r.children, r = r.defaultValue, s != null) {
                if (r != null) throw Error(o(92));
                if (cr(s)) {
                    if (1 < s.length) throw Error(o(93));
                    s = s[0]
                }
                r = s
            }
            r == null && (r = ""), s = r
        }
        t._wrapperState = {
            initialValue: he(s)
        }
    }

    function bf(t, r) {
        var s = he(r.value),
            l = he(r.defaultValue);
        s != null && (s = "" + s, s !== t.value && (t.value = s), r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), l != null && (t.defaultValue = "" + l)
    }

    function Sf(t) {
        var r = t.textContent;
        r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r)
    }

    function Pf(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ml(t, r) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? Pf(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var Zi, Ef = function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, l, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(r, s, l, f)
            })
        } : t
    }(function(t, r) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
        else {
            for (Zi = Zi || document.createElement("div"), Zi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Zi.firstChild; t.firstChild;) t.removeChild(t.firstChild);
            for (; r.firstChild;) t.appendChild(r.firstChild)
        }
    });

    function Do(t, r) {
        if (r) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = r;
                return
            }
        }
        t.textContent = r
    }
    var No = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Dx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(No).forEach(function(t) {
        Dx.forEach(function(r) {
            r = r + t.charAt(0).toUpperCase() + t.substring(1), No[r] = No[t]
        })
    });

    function Tf(t, r, s) {
        return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || No.hasOwnProperty(t) && No[t] ? ("" + r).trim() : r + "px"
    }

    function Cf(t, r) {
        t = t.style;
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var l = s.indexOf("--") === 0,
                    f = Tf(s, r[s], l);
                s === "float" && (s = "cssFloat"), l ? t.setProperty(s, f) : t[s] = f
            }
    }
    var Nx = K({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function gl(t, r) {
        if (r) {
            if (Nx[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(o(137, t));
            if (r.dangerouslySetInnerHTML != null) {
                if (r.children != null) throw Error(o(60));
                if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(o(61))
            }
            if (r.style != null && typeof r.style != "object") throw Error(o(62))
        }
    }

    function yl(t, r) {
        if (t.indexOf("-") === -1) return typeof r.is == "string";
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var vl = null;

    function xl(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var wl = null,
        zr = null,
        Br = null;

    function $f(t) {
        if (t = ri(t)) {
            if (typeof wl != "function") throw Error(o(280));
            var r = t.stateNode;
            r && (r = bs(r), wl(t.stateNode, t.type, r))
        }
    }

    function kf(t) {
        zr ? Br ? Br.push(t) : Br = [t] : zr = t
    }

    function Mf() {
        if (zr) {
            var t = zr,
                r = Br;
            if (Br = zr = null, $f(t), r)
                for (t = 0; t < r.length; t++) $f(r[t])
        }
    }

    function Lf(t, r) {
        return t(r)
    }

    function Af() {}
    var bl = !1;

    function Rf(t, r, s) {
        if (bl) return t(r, s);
        bl = !0;
        try {
            return Lf(t, r, s)
        } finally {
            bl = !1, (zr !== null || Br !== null) && (Af(), Mf())
        }
    }

    function Oo(t, r) {
        var s = t.stateNode;
        if (s === null) return null;
        var l = bs(s);
        if (l === null) return null;
        s = l[r];
        e: switch (r) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
                break e;
            default:
                t = !1
        }
        if (t) return null;
        if (s && typeof s != "function") throw Error(o(231, r, typeof s));
        return s
    }
    var Sl = !1;
    if (d) try {
        var jo = {};
        Object.defineProperty(jo, "passive", {
            get: function() {
                Sl = !0
            }
        }), window.addEventListener("test", jo, jo), window.removeEventListener("test", jo, jo)
    } catch {
        Sl = !1
    }

    function Ox(t, r, s, l, f, m, x, T, k) {
        var V = Array.prototype.slice.call(arguments, 3);
        try {
            r.apply(s, V)
        } catch (X) {
            this.onError(X)
        }
    }
    var Io = !1,
        Ji = null,
        es = !1,
        Pl = null,
        jx = {
            onError: function(t) {
                Io = !0, Ji = t
            }
        };

    function Ix(t, r, s, l, f, m, x, T, k) {
        Io = !1, Ji = null, Ox.apply(jx, arguments)
    }

    function Vx(t, r, s, l, f, m, x, T, k) {
        if (Ix.apply(this, arguments), Io) {
            if (Io) {
                var V = Ji;
                Io = !1, Ji = null
            } else throw Error(o(198));
            es || (es = !0, Pl = V)
        }
    }

    function dr(t) {
        var r = t,
            s = t;
        if (t.alternate)
            for (; r.return;) r = r.return;
        else {
            t = r;
            do r = t, r.flags & 4098 && (s = r.return), t = r.return; while (t)
        }
        return r.tag === 3 ? s : null
    }

    function _f(t) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated
        }
        return null
    }

    function Df(t) {
        if (dr(t) !== t) throw Error(o(188))
    }

    function Fx(t) {
        var r = t.alternate;
        if (!r) {
            if (r = dr(t), r === null) throw Error(o(188));
            return r !== t ? null : t
        }
        for (var s = t, l = r;;) {
            var f = s.return;
            if (f === null) break;
            var m = f.alternate;
            if (m === null) {
                if (l = f.return, l !== null) {
                    s = l;
                    continue
                }
                break
            }
            if (f.child === m.child) {
                for (m = f.child; m;) {
                    if (m === s) return Df(f), t;
                    if (m === l) return Df(f), r;
                    m = m.sibling
                }
                throw Error(o(188))
            }
            if (s.return !== l.return) s = f, l = m;
            else {
                for (var x = !1, T = f.child; T;) {
                    if (T === s) {
                        x = !0, s = f, l = m;
                        break
                    }
                    if (T === l) {
                        x = !0, l = f, s = m;
                        break
                    }
                    T = T.sibling
                }
                if (!x) {
                    for (T = m.child; T;) {
                        if (T === s) {
                            x = !0, s = m, l = f;
                            break
                        }
                        if (T === l) {
                            x = !0, l = m, s = f;
                            break
                        }
                        T = T.sibling
                    }
                    if (!x) throw Error(o(189))
                }
            }
            if (s.alternate !== l) throw Error(o(190))
        }
        if (s.tag !== 3) throw Error(o(188));
        return s.stateNode.current === s ? t : r
    }

    function Nf(t) {
        return t = Fx(t), t !== null ? Of(t) : null
    }

    function Of(t) {
        if (t.tag === 5 || t.tag === 6) return t;
        for (t = t.child; t !== null;) {
            var r = Of(t);
            if (r !== null) return r;
            t = t.sibling
        }
        return null
    }
    var jf = n.unstable_scheduleCallback,
        If = n.unstable_cancelCallback,
        zx = n.unstable_shouldYield,
        Bx = n.unstable_requestPaint,
        He = n.unstable_now,
        Ux = n.unstable_getCurrentPriorityLevel,
        El = n.unstable_ImmediatePriority,
        Vf = n.unstable_UserBlockingPriority,
        ts = n.unstable_NormalPriority,
        Hx = n.unstable_LowPriority,
        Ff = n.unstable_IdlePriority,
        ns = null,
        tn = null;

    function Wx(t) {
        if (tn && typeof tn.onCommitFiberRoot == "function") try {
            tn.onCommitFiberRoot(ns, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
    }
    var Ht = Math.clz32 ? Math.clz32 : Yx,
        Kx = Math.log,
        Gx = Math.LN2;

    function Yx(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Kx(t) / Gx | 0) | 0
    }
    var rs = 64,
        os = 4194304;

    function Vo(t) {
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return t & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return t
        }
    }

    function is(t, r) {
        var s = t.pendingLanes;
        if (s === 0) return 0;
        var l = 0,
            f = t.suspendedLanes,
            m = t.pingedLanes,
            x = s & 268435455;
        if (x !== 0) {
            var T = x & ~f;
            T !== 0 ? l = Vo(T) : (m &= x, m !== 0 && (l = Vo(m)))
        } else x = s & ~f, x !== 0 ? l = Vo(x) : m !== 0 && (l = Vo(m));
        if (l === 0) return 0;
        if (r !== 0 && r !== l && !(r & f) && (f = l & -l, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
        if (l & 4 && (l |= s & 16), r = t.entangledLanes, r !== 0)
            for (t = t.entanglements, r &= l; 0 < r;) s = 31 - Ht(r), f = 1 << s, l |= t[s], r &= ~f;
        return l
    }

    function Xx(t, r) {
        switch (t) {
            case 1:
            case 2:
            case 4:
                return r + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return r + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Qx(t, r) {
        for (var s = t.suspendedLanes, l = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m;) {
            var x = 31 - Ht(m),
                T = 1 << x,
                k = f[x];
            k === -1 ? (!(T & s) || T & l) && (f[x] = Xx(T, r)) : k <= r && (t.expiredLanes |= T), m &= ~T
        }
    }

    function Tl(t) {
        return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }

    function zf() {
        var t = rs;
        return rs <<= 1, !(rs & 4194240) && (rs = 64), t
    }

    function Cl(t) {
        for (var r = [], s = 0; 31 > s; s++) r.push(t);
        return r
    }

    function Fo(t, r, s) {
        t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - Ht(r), t[r] = s
    }

    function qx(t, r) {
        var s = t.pendingLanes & ~r;
        t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
        var l = t.eventTimes;
        for (t = t.expirationTimes; 0 < s;) {
            var f = 31 - Ht(s),
                m = 1 << f;
            r[f] = 0, l[f] = -1, t[f] = -1, s &= ~m
        }
    }

    function $l(t, r) {
        var s = t.entangledLanes |= r;
        for (t = t.entanglements; s;) {
            var l = 31 - Ht(s),
                f = 1 << l;
            f & r | t[l] & r && (t[l] |= r), s &= ~f
        }
    }
    var Me = 0;

    function Bf(t) {
        return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Uf, kl, Hf, Wf, Kf, Ml = !1,
        ss = [],
        An = null,
        Rn = null,
        _n = null,
        zo = new Map,
        Bo = new Map,
        Dn = [],
        Zx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Gf(t, r) {
        switch (t) {
            case "focusin":
            case "focusout":
                An = null;
                break;
            case "dragenter":
            case "dragleave":
                Rn = null;
                break;
            case "mouseover":
            case "mouseout":
                _n = null;
                break;
            case "pointerover":
            case "pointerout":
                zo.delete(r.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Bo.delete(r.pointerId)
        }
    }

    function Uo(t, r, s, l, f, m) {
        return t === null || t.nativeEvent !== m ? (t = {
            blockedOn: r,
            domEventName: s,
            eventSystemFlags: l,
            nativeEvent: m,
            targetContainers: [f]
        }, r !== null && (r = ri(r), r !== null && kl(r)), t) : (t.eventSystemFlags |= l, r = t.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), t)
    }

    function Jx(t, r, s, l, f) {
        switch (r) {
            case "focusin":
                return An = Uo(An, t, r, s, l, f), !0;
            case "dragenter":
                return Rn = Uo(Rn, t, r, s, l, f), !0;
            case "mouseover":
                return _n = Uo(_n, t, r, s, l, f), !0;
            case "pointerover":
                var m = f.pointerId;
                return zo.set(m, Uo(zo.get(m) || null, t, r, s, l, f)), !0;
            case "gotpointercapture":
                return m = f.pointerId, Bo.set(m, Uo(Bo.get(m) || null, t, r, s, l, f)), !0
        }
        return !1
    }

    function Yf(t) {
        var r = fr(t.target);
        if (r !== null) {
            var s = dr(r);
            if (s !== null) {
                if (r = s.tag, r === 13) {
                    if (r = _f(s), r !== null) {
                        t.blockedOn = r, Kf(t.priority, function() {
                            Hf(s)
                        });
                        return
                    }
                } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function as(t) {
        if (t.blockedOn !== null) return !1;
        for (var r = t.targetContainers; 0 < r.length;) {
            var s = Al(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var l = new s.constructor(s.type, s);
                vl = l, s.target.dispatchEvent(l), vl = null
            } else return r = ri(s), r !== null && kl(r), t.blockedOn = s, !1;
            r.shift()
        }
        return !0
    }

    function Xf(t, r, s) {
        as(t) && s.delete(r)
    }

    function ew() {
        Ml = !1, An !== null && as(An) && (An = null), Rn !== null && as(Rn) && (Rn = null), _n !== null && as(_n) && (_n = null), zo.forEach(Xf), Bo.forEach(Xf)
    }

    function Ho(t, r) {
        t.blockedOn === r && (t.blockedOn = null, Ml || (Ml = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, ew)))
    }

    function Wo(t) {
        function r(f) {
            return Ho(f, t)
        }
        if (0 < ss.length) {
            Ho(ss[0], t);
            for (var s = 1; s < ss.length; s++) {
                var l = ss[s];
                l.blockedOn === t && (l.blockedOn = null)
            }
        }
        for (An !== null && Ho(An, t), Rn !== null && Ho(Rn, t), _n !== null && Ho(_n, t), zo.forEach(r), Bo.forEach(r), s = 0; s < Dn.length; s++) l = Dn[s], l.blockedOn === t && (l.blockedOn = null);
        for (; 0 < Dn.length && (s = Dn[0], s.blockedOn === null);) Yf(s), s.blockedOn === null && Dn.shift()
    }
    var Ur = F.ReactCurrentBatchConfig,
        ls = !0;

    function tw(t, r, s, l) {
        var f = Me,
            m = Ur.transition;
        Ur.transition = null;
        try {
            Me = 1, Ll(t, r, s, l)
        } finally {
            Me = f, Ur.transition = m
        }
    }

    function nw(t, r, s, l) {
        var f = Me,
            m = Ur.transition;
        Ur.transition = null;
        try {
            Me = 4, Ll(t, r, s, l)
        } finally {
            Me = f, Ur.transition = m
        }
    }

    function Ll(t, r, s, l) {
        if (ls) {
            var f = Al(t, r, s, l);
            if (f === null) Yl(t, r, l, us, s), Gf(t, l);
            else if (Jx(f, t, r, s, l)) l.stopPropagation();
            else if (Gf(t, l), r & 4 && -1 < Zx.indexOf(t)) {
                for (; f !== null;) {
                    var m = ri(f);
                    if (m !== null && Uf(m), m = Al(t, r, s, l), m === null && Yl(t, r, l, us, s), m === f) break;
                    f = m
                }
                f !== null && l.stopPropagation()
            } else Yl(t, r, l, null, s)
        }
    }
    var us = null;

    function Al(t, r, s, l) {
        if (us = null, t = xl(l), t = fr(t), t !== null)
            if (r = dr(t), r === null) t = null;
            else if (s = r.tag, s === 13) {
            if (t = _f(r), t !== null) return t;
            t = null
        } else if (s === 3) {
            if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
            t = null
        } else r !== t && (t = null);
        return us = t, null
    }

    function Qf(t) {
        switch (t) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Ux()) {
                    case El:
                        return 1;
                    case Vf:
                        return 4;
                    case ts:
                    case Hx:
                        return 16;
                    case Ff:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Nn = null,
        Rl = null,
        cs = null;

    function qf() {
        if (cs) return cs;
        var t, r = Rl,
            s = r.length,
            l, f = "value" in Nn ? Nn.value : Nn.textContent,
            m = f.length;
        for (t = 0; t < s && r[t] === f[t]; t++);
        var x = s - t;
        for (l = 1; l <= x && r[s - l] === f[m - l]; l++);
        return cs = f.slice(t, 1 < l ? 1 - l : void 0)
    }

    function ds(t) {
        var r = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function fs() {
        return !0
    }

    function Zf() {
        return !1
    }

    function bt(t) {
        function r(s, l, f, m, x) {
            this._reactName = s, this._targetInst = f, this.type = l, this.nativeEvent = m, this.target = x, this.currentTarget = null;
            for (var T in t) t.hasOwnProperty(T) && (s = t[T], this[T] = s ? s(m) : m[T]);
            return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? fs : Zf, this.isPropagationStopped = Zf, this
        }
        return K(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = fs)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = fs)
            },
            persist: function() {},
            isPersistent: fs
        }), r
    }
    var Hr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        _l = bt(Hr),
        Ko = K({}, Hr, {
            view: 0,
            detail: 0
        }),
        rw = bt(Ko),
        Dl, Nl, Go, ps = K({}, Ko, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: jl,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Go && (Go && t.type === "mousemove" ? (Dl = t.screenX - Go.screenX, Nl = t.screenY - Go.screenY) : Nl = Dl = 0, Go = t), Dl)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Nl
            }
        }),
        Jf = bt(ps),
        ow = K({}, ps, {
            dataTransfer: 0
        }),
        iw = bt(ow),
        sw = K({}, Ko, {
            relatedTarget: 0
        }),
        Ol = bt(sw),
        aw = K({}, Hr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        lw = bt(aw),
        uw = K({}, Hr, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        cw = bt(uw),
        dw = K({}, Hr, {
            data: 0
        }),
        ep = bt(dw),
        fw = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        pw = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        hw = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function mw(t) {
        var r = this.nativeEvent;
        return r.getModifierState ? r.getModifierState(t) : (t = hw[t]) ? !!r[t] : !1
    }

    function jl() {
        return mw
    }
    var gw = K({}, Ko, {
            key: function(t) {
                if (t.key) {
                    var r = fw[t.key] || t.key;
                    if (r !== "Unidentified") return r
                }
                return t.type === "keypress" ? (t = ds(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? pw[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jl,
            charCode: function(t) {
                return t.type === "keypress" ? ds(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? ds(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        yw = bt(gw),
        vw = K({}, ps, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        tp = bt(vw),
        xw = K({}, Ko, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: jl
        }),
        ww = bt(xw),
        bw = K({}, Hr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Sw = bt(bw),
        Pw = K({}, ps, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Ew = bt(Pw),
        Tw = [9, 13, 27, 32],
        Il = d && "CompositionEvent" in window,
        Yo = null;
    d && "documentMode" in document && (Yo = document.documentMode);
    var Cw = d && "TextEvent" in window && !Yo,
        np = d && (!Il || Yo && 8 < Yo && 11 >= Yo),
        rp = " ",
        op = !1;

    function ip(t, r) {
        switch (t) {
            case "keyup":
                return Tw.indexOf(r.keyCode) !== -1;
            case "keydown":
                return r.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function sp(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Wr = !1;

    function $w(t, r) {
        switch (t) {
            case "compositionend":
                return sp(r);
            case "keypress":
                return r.which !== 32 ? null : (op = !0, rp);
            case "textInput":
                return t = r.data, t === rp && op ? null : t;
            default:
                return null
        }
    }

    function kw(t, r) {
        if (Wr) return t === "compositionend" || !Il && ip(t, r) ? (t = qf(), cs = Rl = Nn = null, Wr = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
                    if (r.char && 1 < r.char.length) return r.char;
                    if (r.which) return String.fromCharCode(r.which)
                }
                return null;
            case "compositionend":
                return np && r.locale !== "ko" ? null : r.data;
            default:
                return null
        }
    }
    var Mw = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function ap(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r === "input" ? !!Mw[t.type] : r === "textarea"
    }

    function lp(t, r, s, l) {
        kf(l), r = vs(r, "onChange"), 0 < r.length && (s = new _l("onChange", "change", null, s, l), t.push({
            event: s,
            listeners: r
        }))
    }
    var Xo = null,
        Qo = null;

    function Lw(t) {
        Cp(t, 0)
    }

    function hs(t) {
        var r = Qr(t);
        if (en(r)) return t
    }

    function Aw(t, r) {
        if (t === "change") return r
    }
    var up = !1;
    if (d) {
        var Vl;
        if (d) {
            var Fl = "oninput" in document;
            if (!Fl) {
                var cp = document.createElement("div");
                cp.setAttribute("oninput", "return;"), Fl = typeof cp.oninput == "function"
            }
            Vl = Fl
        } else Vl = !1;
        up = Vl && (!document.documentMode || 9 < document.documentMode)
    }

    function dp() {
        Xo && (Xo.detachEvent("onpropertychange", fp), Qo = Xo = null)
    }

    function fp(t) {
        if (t.propertyName === "value" && hs(Qo)) {
            var r = [];
            lp(r, Qo, t, xl(t)), Rf(Lw, r)
        }
    }

    function Rw(t, r, s) {
        t === "focusin" ? (dp(), Xo = r, Qo = s, Xo.attachEvent("onpropertychange", fp)) : t === "focusout" && dp()
    }

    function _w(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return hs(Qo)
    }

    function Dw(t, r) {
        if (t === "click") return hs(r)
    }

    function Nw(t, r) {
        if (t === "input" || t === "change") return hs(r)
    }

    function Ow(t, r) {
        return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r
    }
    var Wt = typeof Object.is == "function" ? Object.is : Ow;

    function qo(t, r) {
        if (Wt(t, r)) return !0;
        if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
        var s = Object.keys(t),
            l = Object.keys(r);
        if (s.length !== l.length) return !1;
        for (l = 0; l < s.length; l++) {
            var f = s[l];
            if (!p.call(r, f) || !Wt(t[f], r[f])) return !1
        }
        return !0
    }

    function pp(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function hp(t, r) {
        var s = pp(t);
        t = 0;
        for (var l; s;) {
            if (s.nodeType === 3) {
                if (l = t + s.textContent.length, t <= r && l >= r) return {
                    node: s,
                    offset: r - t
                };
                t = l
            }
            e: {
                for (; s;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = pp(s)
        }
    }

    function mp(t, r) {
        return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? mp(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1
    }

    function gp() {
        for (var t = window, r = fn(); r instanceof t.HTMLIFrameElement;) {
            try {
                var s = typeof r.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s) t = r.contentWindow;
            else break;
            r = fn(t.document)
        }
        return r
    }

    function zl(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true")
    }

    function jw(t) {
        var r = gp(),
            s = t.focusedElem,
            l = t.selectionRange;
        if (r !== s && s && s.ownerDocument && mp(s.ownerDocument.documentElement, s)) {
            if (l !== null && zl(s)) {
                if (r = l.start, t = l.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
                else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
                    t = t.getSelection();
                    var f = s.textContent.length,
                        m = Math.min(l.start, f);
                    l = l.end === void 0 ? m : Math.min(l.end, f), !t.extend && m > l && (f = l, l = m, m = f), f = hp(s, m);
                    var x = hp(s, l);
                    f && x && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== x.node || t.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), t.removeAllRanges(), m > l ? (t.addRange(r), t.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), t.addRange(r)))
                }
            }
            for (r = [], t = s; t = t.parentNode;) t.nodeType === 1 && r.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
        }
    }
    var Iw = d && "documentMode" in document && 11 >= document.documentMode,
        Kr = null,
        Bl = null,
        Zo = null,
        Ul = !1;

    function yp(t, r, s) {
        var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Ul || Kr == null || Kr !== fn(l) || (l = Kr, "selectionStart" in l && zl(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Zo && qo(Zo, l) || (Zo = l, l = vs(Bl, "onSelect"), 0 < l.length && (r = new _l("onSelect", "select", null, r, s), t.push({
            event: r,
            listeners: l
        }), r.target = Kr)))
    }

    function ms(t, r) {
        var s = {};
        return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s
    }
    var Gr = {
            animationend: ms("Animation", "AnimationEnd"),
            animationiteration: ms("Animation", "AnimationIteration"),
            animationstart: ms("Animation", "AnimationStart"),
            transitionend: ms("Transition", "TransitionEnd")
        },
        Hl = {},
        vp = {};
    d && (vp = document.createElement("div").style, "AnimationEvent" in window || (delete Gr.animationend.animation, delete Gr.animationiteration.animation, delete Gr.animationstart.animation), "TransitionEvent" in window || delete Gr.transitionend.transition);

    function gs(t) {
        if (Hl[t]) return Hl[t];
        if (!Gr[t]) return t;
        var r = Gr[t],
            s;
        for (s in r)
            if (r.hasOwnProperty(s) && s in vp) return Hl[t] = r[s];
        return t
    }
    var xp = gs("animationend"),
        wp = gs("animationiteration"),
        bp = gs("animationstart"),
        Sp = gs("transitionend"),
        Pp = new Map,
        Ep = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function On(t, r) {
        Pp.set(t, r), c(r, [t])
    }
    for (var Wl = 0; Wl < Ep.length; Wl++) {
        var Kl = Ep[Wl],
            Vw = Kl.toLowerCase(),
            Fw = Kl[0].toUpperCase() + Kl.slice(1);
        On(Vw, "on" + Fw)
    }
    On(xp, "onAnimationEnd"), On(wp, "onAnimationIteration"), On(bp, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Sp, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        zw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));

    function Tp(t, r, s) {
        var l = t.type || "unknown-event";
        t.currentTarget = s, Vx(l, r, void 0, t), t.currentTarget = null
    }

    function Cp(t, r) {
        r = (r & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var l = t[s],
                f = l.event;
            l = l.listeners;
            e: {
                var m = void 0;
                if (r)
                    for (var x = l.length - 1; 0 <= x; x--) {
                        var T = l[x],
                            k = T.instance,
                            V = T.currentTarget;
                        if (T = T.listener, k !== m && f.isPropagationStopped()) break e;
                        Tp(f, T, V), m = k
                    } else
                        for (x = 0; x < l.length; x++) {
                            if (T = l[x], k = T.instance, V = T.currentTarget, T = T.listener, k !== m && f.isPropagationStopped()) break e;
                            Tp(f, T, V), m = k
                        }
            }
        }
        if (es) throw t = Pl, es = !1, Pl = null, t
    }

    function Re(t, r) {
        var s = r[eu];
        s === void 0 && (s = r[eu] = new Set);
        var l = t + "__bubble";
        s.has(l) || ($p(r, t, 2, !1), s.add(l))
    }

    function Gl(t, r, s) {
        var l = 0;
        r && (l |= 4), $p(s, t, l, r)
    }
    var ys = "_reactListening" + Math.random().toString(36).slice(2);

    function ei(t) {
        if (!t[ys]) {
            t[ys] = !0, i.forEach(function(s) {
                s !== "selectionchange" && (zw.has(s) || Gl(s, !1, t), Gl(s, !0, t))
            });
            var r = t.nodeType === 9 ? t : t.ownerDocument;
            r === null || r[ys] || (r[ys] = !0, Gl("selectionchange", !1, r))
        }
    }

    function $p(t, r, s, l) {
        switch (Qf(r)) {
            case 1:
                var f = tw;
                break;
            case 4:
                f = nw;
                break;
            default:
                f = Ll
        }
        s = f.bind(null, r, s, t), f = void 0, !Sl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), l ? f !== void 0 ? t.addEventListener(r, s, {
            capture: !0,
            passive: f
        }) : t.addEventListener(r, s, !0) : f !== void 0 ? t.addEventListener(r, s, {
            passive: f
        }) : t.addEventListener(r, s, !1)
    }

    function Yl(t, r, s, l, f) {
        var m = l;
        if (!(r & 1) && !(r & 2) && l !== null) e: for (;;) {
            if (l === null) return;
            var x = l.tag;
            if (x === 3 || x === 4) {
                var T = l.stateNode.containerInfo;
                if (T === f || T.nodeType === 8 && T.parentNode === f) break;
                if (x === 4)
                    for (x = l.return; x !== null;) {
                        var k = x.tag;
                        if ((k === 3 || k === 4) && (k = x.stateNode.containerInfo, k === f || k.nodeType === 8 && k.parentNode === f)) return;
                        x = x.return
                    }
                for (; T !== null;) {
                    if (x = fr(T), x === null) return;
                    if (k = x.tag, k === 5 || k === 6) {
                        l = m = x;
                        continue e
                    }
                    T = T.parentNode
                }
            }
            l = l.return
        }
        Rf(function() {
            var V = m,
                X = xl(s),
                Z = [];
            e: {
                var G = Pp.get(t);
                if (G !== void 0) {
                    var ae = _l,
                        ce = t;
                    switch (t) {
                        case "keypress":
                            if (ds(s) === 0) break e;
                        case "keydown":
                        case "keyup":
                            ae = yw;
                            break;
                        case "focusin":
                            ce = "focus", ae = Ol;
                            break;
                        case "focusout":
                            ce = "blur", ae = Ol;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            ae = Ol;
                            break;
                        case "click":
                            if (s.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            ae = Jf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            ae = iw;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            ae = ww;
                            break;
                        case xp:
                        case wp:
                        case bp:
                            ae = lw;
                            break;
                        case Sp:
                            ae = Sw;
                            break;
                        case "scroll":
                            ae = rw;
                            break;
                        case "wheel":
                            ae = Ew;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            ae = cw;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            ae = tp
                    }
                    var fe = (r & 4) !== 0,
                        We = !fe && t === "scroll",
                        N = fe ? G !== null ? G + "Capture" : null : G;
                    fe = [];
                    for (var A = V, j; A !== null;) {
                        j = A;
                        var te = j.stateNode;
                        if (j.tag === 5 && te !== null && (j = te, N !== null && (te = Oo(A, N), te != null && fe.push(ti(A, te, j)))), We) break;
                        A = A.return
                    }
                    0 < fe.length && (G = new ae(G, ce, null, s, X), Z.push({
                        event: G,
                        listeners: fe
                    }))
                }
            }
            if (!(r & 7)) {
                e: {
                    if (G = t === "mouseover" || t === "pointerover", ae = t === "mouseout" || t === "pointerout", G && s !== vl && (ce = s.relatedTarget || s.fromElement) && (fr(ce) || ce[pn])) break e;
                    if ((ae || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, ae ? (ce = s.relatedTarget || s.toElement, ae = V, ce = ce ? fr(ce) : null, ce !== null && (We = dr(ce), ce !== We || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ae = null, ce = V), ae !== ce)) {
                        if (fe = Jf, te = "onMouseLeave", N = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (fe = tp, te = "onPointerLeave", N = "onPointerEnter", A = "pointer"), We = ae == null ? G : Qr(ae), j = ce == null ? G : Qr(ce), G = new fe(te, A + "leave", ae, s, X), G.target = We, G.relatedTarget = j, te = null, fr(X) === V && (fe = new fe(N, A + "enter", ce, s, X), fe.target = j, fe.relatedTarget = We, te = fe), We = te, ae && ce) t: {
                            for (fe = ae, N = ce, A = 0, j = fe; j; j = Yr(j)) A++;
                            for (j = 0, te = N; te; te = Yr(te)) j++;
                            for (; 0 < A - j;) fe = Yr(fe),
                            A--;
                            for (; 0 < j - A;) N = Yr(N),
                            j--;
                            for (; A--;) {
                                if (fe === N || N !== null && fe === N.alternate) break t;
                                fe = Yr(fe), N = Yr(N)
                            }
                            fe = null
                        }
                        else fe = null;
                        ae !== null && kp(Z, G, ae, fe, !1), ce !== null && We !== null && kp(Z, We, ce, fe, !0)
                    }
                }
                e: {
                    if (G = V ? Qr(V) : window, ae = G.nodeName && G.nodeName.toLowerCase(), ae === "select" || ae === "input" && G.type === "file") var pe = Aw;
                    else if (ap(G))
                        if (up) pe = Nw;
                        else {
                            pe = _w;
                            var ge = Rw
                        }
                    else(ae = G.nodeName) && ae.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (pe = Dw);
                    if (pe && (pe = pe(t, V))) {
                        lp(Z, pe, s, X);
                        break e
                    }
                    ge && ge(t, G, V),
                    t === "focusout" && (ge = G._wrapperState) && ge.controlled && G.type === "number" && _o(G, "number", G.value)
                }
                switch (ge = V ? Qr(V) : window, t) {
                    case "focusin":
                        (ap(ge) || ge.contentEditable === "true") && (Kr = ge, Bl = V, Zo = null);
                        break;
                    case "focusout":
                        Zo = Bl = Kr = null;
                        break;
                    case "mousedown":
                        Ul = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ul = !1, yp(Z, s, X);
                        break;
                    case "selectionchange":
                        if (Iw) break;
                    case "keydown":
                    case "keyup":
                        yp(Z, s, X)
                }
                var ye;
                if (Il) e: {
                    switch (t) {
                        case "compositionstart":
                            var we = "onCompositionStart";
                            break e;
                        case "compositionend":
                            we = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            we = "onCompositionUpdate";
                            break e
                    }
                    we = void 0
                }
                else Wr ? ip(t, s) && (we = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (we = "onCompositionStart");we && (np && s.locale !== "ko" && (Wr || we !== "onCompositionStart" ? we === "onCompositionEnd" && Wr && (ye = qf()) : (Nn = X, Rl = "value" in Nn ? Nn.value : Nn.textContent, Wr = !0)), ge = vs(V, we), 0 < ge.length && (we = new ep(we, t, null, s, X), Z.push({
                    event: we,
                    listeners: ge
                }), ye ? we.data = ye : (ye = sp(s), ye !== null && (we.data = ye)))),
                (ye = Cw ? $w(t, s) : kw(t, s)) && (V = vs(V, "onBeforeInput"), 0 < V.length && (X = new ep("onBeforeInput", "beforeinput", null, s, X), Z.push({
                    event: X,
                    listeners: V
                }), X.data = ye))
            }
            Cp(Z, r)
        })
    }

    function ti(t, r, s) {
        return {
            instance: t,
            listener: r,
            currentTarget: s
        }
    }

    function vs(t, r) {
        for (var s = r + "Capture", l = []; t !== null;) {
            var f = t,
                m = f.stateNode;
            f.tag === 5 && m !== null && (f = m, m = Oo(t, s), m != null && l.unshift(ti(t, m, f)), m = Oo(t, r), m != null && l.push(ti(t, m, f))), t = t.return
        }
        return l
    }

    function Yr(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5);
        return t || null
    }

    function kp(t, r, s, l, f) {
        for (var m = r._reactName, x = []; s !== null && s !== l;) {
            var T = s,
                k = T.alternate,
                V = T.stateNode;
            if (k !== null && k === l) break;
            T.tag === 5 && V !== null && (T = V, f ? (k = Oo(s, m), k != null && x.unshift(ti(s, k, T))) : f || (k = Oo(s, m), k != null && x.push(ti(s, k, T)))), s = s.return
        }
        x.length !== 0 && t.push({
            event: r,
            listeners: x
        })
    }
    var Bw = /\r\n?/g,
        Uw = /\u0000|\uFFFD/g;

    function Mp(t) {
        return (typeof t == "string" ? t : "" + t).replace(Bw, `
`).replace(Uw, "")
    }

    function xs(t, r, s) {
        if (r = Mp(r), Mp(t) !== r && s) throw Error(o(425))
    }

    function ws() {}
    var Xl = null,
        Ql = null;

    function ql(t, r) {
        return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
    }
    var Zl = typeof setTimeout == "function" ? setTimeout : void 0,
        Hw = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Lp = typeof Promise == "function" ? Promise : void 0,
        Ww = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lp < "u" ? function(t) {
            return Lp.resolve(null).then(t).catch(Kw)
        } : Zl;

    function Kw(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Jl(t, r) {
        var s = r,
            l = 0;
        do {
            var f = s.nextSibling;
            if (t.removeChild(s), f && f.nodeType === 8)
                if (s = f.data, s === "/$") {
                    if (l === 0) {
                        t.removeChild(f), Wo(r);
                        return
                    }
                    l--
                } else s !== "$" && s !== "$?" && s !== "$!" || l++;
            s = f
        } while (s);
        Wo(r)
    }

    function jn(t) {
        for (; t != null; t = t.nextSibling) {
            var r = t.nodeType;
            if (r === 1 || r === 3) break;
            if (r === 8) {
                if (r = t.data, r === "$" || r === "$!" || r === "$?") break;
                if (r === "/$") return null
            }
        }
        return t
    }

    function Ap(t) {
        t = t.previousSibling;
        for (var r = 0; t;) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (r === 0) return t;
                    r--
                } else s === "/$" && r++
            }
            t = t.previousSibling
        }
        return null
    }
    var Xr = Math.random().toString(36).slice(2),
        nn = "__reactFiber$" + Xr,
        ni = "__reactProps$" + Xr,
        pn = "__reactContainer$" + Xr,
        eu = "__reactEvents$" + Xr,
        Gw = "__reactListeners$" + Xr,
        Yw = "__reactHandles$" + Xr;

    function fr(t) {
        var r = t[nn];
        if (r) return r;
        for (var s = t.parentNode; s;) {
            if (r = s[pn] || s[nn]) {
                if (s = r.alternate, r.child !== null || s !== null && s.child !== null)
                    for (t = Ap(t); t !== null;) {
                        if (s = t[nn]) return s;
                        t = Ap(t)
                    }
                return r
            }
            t = s, s = t.parentNode
        }
        return null
    }

    function ri(t) {
        return t = t[nn] || t[pn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }

    function Qr(t) {
        if (t.tag === 5 || t.tag === 6) return t.stateNode;
        throw Error(o(33))
    }

    function bs(t) {
        return t[ni] || null
    }
    var tu = [],
        qr = -1;

    function In(t) {
        return {
            current: t
        }
    }

    function _e(t) {
        0 > qr || (t.current = tu[qr], tu[qr] = null, qr--)
    }

    function Le(t, r) {
        qr++, tu[qr] = t.current, t.current = r
    }
    var Vn = {},
        at = In(Vn),
        mt = In(!1),
        pr = Vn;

    function Zr(t, r) {
        var s = t.type.contextTypes;
        if (!s) return Vn;
        var l = t.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
        var f = {},
            m;
        for (m in s) f[m] = r[m];
        return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = f), f
    }

    function gt(t) {
        return t = t.childContextTypes, t != null
    }

    function Ss() {
        _e(mt), _e(at)
    }

    function Rp(t, r, s) {
        if (at.current !== Vn) throw Error(o(168));
        Le(at, r), Le(mt, s)
    }

    function _p(t, r, s) {
        var l = t.stateNode;
        if (r = r.childContextTypes, typeof l.getChildContext != "function") return s;
        l = l.getChildContext();
        for (var f in l)
            if (!(f in r)) throw Error(o(108, me(t) || "Unknown", f));
        return K({}, s, l)
    }

    function Ps(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Vn, pr = at.current, Le(at, t), Le(mt, mt.current), !0
    }

    function Dp(t, r, s) {
        var l = t.stateNode;
        if (!l) throw Error(o(169));
        s ? (t = _p(t, r, pr), l.__reactInternalMemoizedMergedChildContext = t, _e(mt), _e(at), Le(at, t)) : _e(mt), Le(mt, s)
    }
    var hn = null,
        Es = !1,
        nu = !1;

    function Np(t) {
        hn === null ? hn = [t] : hn.push(t)
    }

    function Xw(t) {
        Es = !0, Np(t)
    }

    function Fn() {
        if (!nu && hn !== null) {
            nu = !0;
            var t = 0,
                r = Me;
            try {
                var s = hn;
                for (Me = 1; t < s.length; t++) {
                    var l = s[t];
                    do l = l(!0); while (l !== null)
                }
                hn = null, Es = !1
            } catch (f) {
                throw hn !== null && (hn = hn.slice(t + 1)), jf(El, Fn), f
            } finally {
                Me = r, nu = !1
            }
        }
        return null
    }
    var Jr = [],
        eo = 0,
        Ts = null,
        Cs = 0,
        Lt = [],
        At = 0,
        hr = null,
        mn = 1,
        gn = "";

    function mr(t, r) {
        Jr[eo++] = Cs, Jr[eo++] = Ts, Ts = t, Cs = r
    }

    function Op(t, r, s) {
        Lt[At++] = mn, Lt[At++] = gn, Lt[At++] = hr, hr = t;
        var l = mn;
        t = gn;
        var f = 32 - Ht(l) - 1;
        l &= ~(1 << f), s += 1;
        var m = 32 - Ht(r) + f;
        if (30 < m) {
            var x = f - f % 5;
            m = (l & (1 << x) - 1).toString(32), l >>= x, f -= x, mn = 1 << 32 - Ht(r) + f | s << f | l, gn = m + t
        } else mn = 1 << m | s << f | l, gn = t
    }

    function ru(t) {
        t.return !== null && (mr(t, 1), Op(t, 1, 0))
    }

    function ou(t) {
        for (; t === Ts;) Ts = Jr[--eo], Jr[eo] = null, Cs = Jr[--eo], Jr[eo] = null;
        for (; t === hr;) hr = Lt[--At], Lt[At] = null, gn = Lt[--At], Lt[At] = null, mn = Lt[--At], Lt[At] = null
    }
    var St = null,
        Pt = null,
        je = !1,
        Kt = null;

    function jp(t, r) {
        var s = Nt(5, null, null, 0);
        s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s)
    }

    function Ip(t, r) {
        switch (t.tag) {
            case 5:
                var s = t.type;
                return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, St = t, Pt = jn(r.firstChild), !0) : !1;
            case 6:
                return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, St = t, Pt = null, !0) : !1;
            case 13:
                return r = r.nodeType !== 8 ? null : r, r !== null ? (s = hr !== null ? {
                    id: mn,
                    overflow: gn
                } : null, t.memoizedState = {
                    dehydrated: r,
                    treeContext: s,
                    retryLane: 1073741824
                }, s = Nt(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, St = t, Pt = null, !0) : !1;
            default:
                return !1
        }
    }

    function iu(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }

    function su(t) {
        if (je) {
            var r = Pt;
            if (r) {
                var s = r;
                if (!Ip(t, r)) {
                    if (iu(t)) throw Error(o(418));
                    r = jn(s.nextSibling);
                    var l = St;
                    r && Ip(t, r) ? jp(l, s) : (t.flags = t.flags & -4097 | 2, je = !1, St = t)
                }
            } else {
                if (iu(t)) throw Error(o(418));
                t.flags = t.flags & -4097 | 2, je = !1, St = t
            }
        }
    }

    function Vp(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
        St = t
    }

    function $s(t) {
        if (t !== St) return !1;
        if (!je) return Vp(t), je = !0, !1;
        var r;
        if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !ql(t.type, t.memoizedProps)), r && (r = Pt)) {
            if (iu(t)) throw Fp(), Error(o(418));
            for (; r;) jp(t, r), r = jn(r.nextSibling)
        }
        if (Vp(t), t.tag === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            e: {
                for (t = t.nextSibling, r = 0; t;) {
                    if (t.nodeType === 8) {
                        var s = t.data;
                        if (s === "/$") {
                            if (r === 0) {
                                Pt = jn(t.nextSibling);
                                break e
                            }
                            r--
                        } else s !== "$" && s !== "$!" && s !== "$?" || r++
                    }
                    t = t.nextSibling
                }
                Pt = null
            }
        } else Pt = St ? jn(t.stateNode.nextSibling) : null;
        return !0
    }

    function Fp() {
        for (var t = Pt; t;) t = jn(t.nextSibling)
    }

    function to() {
        Pt = St = null, je = !1
    }

    function au(t) {
        Kt === null ? Kt = [t] : Kt.push(t)
    }
    var Qw = F.ReactCurrentBatchConfig;

    function oi(t, r, s) {
        if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
            if (s._owner) {
                if (s = s._owner, s) {
                    if (s.tag !== 1) throw Error(o(309));
                    var l = s.stateNode
                }
                if (!l) throw Error(o(147, t));
                var f = l,
                    m = "" + t;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(x) {
                    var T = f.refs;
                    x === null ? delete T[m] : T[m] = x
                }, r._stringRef = m, r)
            }
            if (typeof t != "string") throw Error(o(284));
            if (!s._owner) throw Error(o(290, t))
        }
        return t
    }

    function ks(t, r) {
        throw t = Object.prototype.toString.call(r), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t))
    }

    function zp(t) {
        var r = t._init;
        return r(t._payload)
    }

    function Bp(t) {
        function r(N, A) {
            if (t) {
                var j = N.deletions;
                j === null ? (N.deletions = [A], N.flags |= 16) : j.push(A)
            }
        }

        function s(N, A) {
            if (!t) return null;
            for (; A !== null;) r(N, A), A = A.sibling;
            return null
        }

        function l(N, A) {
            for (N = new Map; A !== null;) A.key !== null ? N.set(A.key, A) : N.set(A.index, A), A = A.sibling;
            return N
        }

        function f(N, A) {
            return N = Yn(N, A), N.index = 0, N.sibling = null, N
        }

        function m(N, A, j) {
            return N.index = j, t ? (j = N.alternate, j !== null ? (j = j.index, j < A ? (N.flags |= 2, A) : j) : (N.flags |= 2, A)) : (N.flags |= 1048576, A)
        }

        function x(N) {
            return t && N.alternate === null && (N.flags |= 2), N
        }

        function T(N, A, j, te) {
            return A === null || A.tag !== 6 ? (A = Zu(j, N.mode, te), A.return = N, A) : (A = f(A, j), A.return = N, A)
        }

        function k(N, A, j, te) {
            var pe = j.type;
            return pe === oe ? X(N, A, j.props.children, te, j.key) : A !== null && (A.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === re && zp(pe) === A.type) ? (te = f(A, j.props), te.ref = oi(N, A, j), te.return = N, te) : (te = Zs(j.type, j.key, j.props, null, N.mode, te), te.ref = oi(N, A, j), te.return = N, te)
        }

        function V(N, A, j, te) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== j.containerInfo || A.stateNode.implementation !== j.implementation ? (A = Ju(j, N.mode, te), A.return = N, A) : (A = f(A, j.children || []), A.return = N, A)
        }

        function X(N, A, j, te, pe) {
            return A === null || A.tag !== 7 ? (A = Pr(j, N.mode, te, pe), A.return = N, A) : (A = f(A, j), A.return = N, A)
        }

        function Z(N, A, j) {
            if (typeof A == "string" && A !== "" || typeof A == "number") return A = Zu("" + A, N.mode, j), A.return = N, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case U:
                        return j = Zs(A.type, A.key, A.props, null, N.mode, j), j.ref = oi(N, null, A), j.return = N, j;
                    case Y:
                        return A = Ju(A, N.mode, j), A.return = N, A;
                    case re:
                        var te = A._init;
                        return Z(N, te(A._payload), j)
                }
                if (cr(A) || Q(A)) return A = Pr(A, N.mode, j, null), A.return = N, A;
                ks(N, A)
            }
            return null
        }

        function G(N, A, j, te) {
            var pe = A !== null ? A.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number") return pe !== null ? null : T(N, A, "" + j, te);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case U:
                        return j.key === pe ? k(N, A, j, te) : null;
                    case Y:
                        return j.key === pe ? V(N, A, j, te) : null;
                    case re:
                        return pe = j._init, G(N, A, pe(j._payload), te)
                }
                if (cr(j) || Q(j)) return pe !== null ? null : X(N, A, j, te, null);
                ks(N, j)
            }
            return null
        }

        function ae(N, A, j, te, pe) {
            if (typeof te == "string" && te !== "" || typeof te == "number") return N = N.get(j) || null, T(A, N, "" + te, pe);
            if (typeof te == "object" && te !== null) {
                switch (te.$$typeof) {
                    case U:
                        return N = N.get(te.key === null ? j : te.key) || null, k(A, N, te, pe);
                    case Y:
                        return N = N.get(te.key === null ? j : te.key) || null, V(A, N, te, pe);
                    case re:
                        var ge = te._init;
                        return ae(N, A, j, ge(te._payload), pe)
                }
                if (cr(te) || Q(te)) return N = N.get(j) || null, X(A, N, te, pe, null);
                ks(A, te)
            }
            return null
        }

        function ce(N, A, j, te) {
            for (var pe = null, ge = null, ye = A, we = A = 0, nt = null; ye !== null && we < j.length; we++) {
                ye.index > we ? (nt = ye, ye = null) : nt = ye.sibling;
                var $e = G(N, ye, j[we], te);
                if ($e === null) {
                    ye === null && (ye = nt);
                    break
                }
                t && ye && $e.alternate === null && r(N, ye), A = m($e, A, we), ge === null ? pe = $e : ge.sibling = $e, ge = $e, ye = nt
            }
            if (we === j.length) return s(N, ye), je && mr(N, we), pe;
            if (ye === null) {
                for (; we < j.length; we++) ye = Z(N, j[we], te), ye !== null && (A = m(ye, A, we), ge === null ? pe = ye : ge.sibling = ye, ge = ye);
                return je && mr(N, we), pe
            }
            for (ye = l(N, ye); we < j.length; we++) nt = ae(ye, N, we, j[we], te), nt !== null && (t && nt.alternate !== null && ye.delete(nt.key === null ? we : nt.key), A = m(nt, A, we), ge === null ? pe = nt : ge.sibling = nt, ge = nt);
            return t && ye.forEach(function(Xn) {
                return r(N, Xn)
            }), je && mr(N, we), pe
        }

        function fe(N, A, j, te) {
            var pe = Q(j);
            if (typeof pe != "function") throw Error(o(150));
            if (j = pe.call(j), j == null) throw Error(o(151));
            for (var ge = pe = null, ye = A, we = A = 0, nt = null, $e = j.next(); ye !== null && !$e.done; we++, $e = j.next()) {
                ye.index > we ? (nt = ye, ye = null) : nt = ye.sibling;
                var Xn = G(N, ye, $e.value, te);
                if (Xn === null) {
                    ye === null && (ye = nt);
                    break
                }
                t && ye && Xn.alternate === null && r(N, ye), A = m(Xn, A, we), ge === null ? pe = Xn : ge.sibling = Xn, ge = Xn, ye = nt
            }
            if ($e.done) return s(N, ye), je && mr(N, we), pe;
            if (ye === null) {
                for (; !$e.done; we++, $e = j.next()) $e = Z(N, $e.value, te), $e !== null && (A = m($e, A, we), ge === null ? pe = $e : ge.sibling = $e, ge = $e);
                return je && mr(N, we), pe
            }
            for (ye = l(N, ye); !$e.done; we++, $e = j.next()) $e = ae(ye, N, we, $e.value, te), $e !== null && (t && $e.alternate !== null && ye.delete($e.key === null ? we : $e.key), A = m($e, A, we), ge === null ? pe = $e : ge.sibling = $e, ge = $e);
            return t && ye.forEach(function(kb) {
                return r(N, kb)
            }), je && mr(N, we), pe
        }

        function We(N, A, j, te) {
            if (typeof j == "object" && j !== null && j.type === oe && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case U:
                        e: {
                            for (var pe = j.key, ge = A; ge !== null;) {
                                if (ge.key === pe) {
                                    if (pe = j.type, pe === oe) {
                                        if (ge.tag === 7) {
                                            s(N, ge.sibling), A = f(ge, j.props.children), A.return = N, N = A;
                                            break e
                                        }
                                    } else if (ge.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === re && zp(pe) === ge.type) {
                                        s(N, ge.sibling), A = f(ge, j.props), A.ref = oi(N, ge, j), A.return = N, N = A;
                                        break e
                                    }
                                    s(N, ge);
                                    break
                                } else r(N, ge);
                                ge = ge.sibling
                            }
                            j.type === oe ? (A = Pr(j.props.children, N.mode, te, j.key), A.return = N, N = A) : (te = Zs(j.type, j.key, j.props, null, N.mode, te), te.ref = oi(N, A, j), te.return = N, N = te)
                        }
                        return x(N);
                    case Y:
                        e: {
                            for (ge = j.key; A !== null;) {
                                if (A.key === ge)
                                    if (A.tag === 4 && A.stateNode.containerInfo === j.containerInfo && A.stateNode.implementation === j.implementation) {
                                        s(N, A.sibling), A = f(A, j.children || []), A.return = N, N = A;
                                        break e
                                    } else {
                                        s(N, A);
                                        break
                                    }
                                else r(N, A);
                                A = A.sibling
                            }
                            A = Ju(j, N.mode, te),
                            A.return = N,
                            N = A
                        }
                        return x(N);
                    case re:
                        return ge = j._init, We(N, A, ge(j._payload), te)
                }
                if (cr(j)) return ce(N, A, j, te);
                if (Q(j)) return fe(N, A, j, te);
                ks(N, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, A !== null && A.tag === 6 ? (s(N, A.sibling), A = f(A, j), A.return = N, N = A) : (s(N, A), A = Zu(j, N.mode, te), A.return = N, N = A), x(N)) : s(N, A)
        }
        return We
    }
    var no = Bp(!0),
        Up = Bp(!1),
        Ms = In(null),
        Ls = null,
        ro = null,
        lu = null;

    function uu() {
        lu = ro = Ls = null
    }

    function cu(t) {
        var r = Ms.current;
        _e(Ms), t._currentValue = r
    }

    function du(t, r, s) {
        for (; t !== null;) {
            var l = t.alternate;
            if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === s) break;
            t = t.return
        }
    }

    function oo(t, r) {
        Ls = t, lu = ro = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & r && (yt = !0), t.firstContext = null)
    }

    function Rt(t) {
        var r = t._currentValue;
        if (lu !== t)
            if (t = {
                    context: t,
                    memoizedValue: r,
                    next: null
                }, ro === null) {
                if (Ls === null) throw Error(o(308));
                ro = t, Ls.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else ro = ro.next = t;
        return r
    }
    var gr = null;

    function fu(t) {
        gr === null ? gr = [t] : gr.push(t)
    }

    function Hp(t, r, s, l) {
        var f = r.interleaved;
        return f === null ? (s.next = s, fu(r)) : (s.next = f.next, f.next = s), r.interleaved = s, yn(t, l)
    }

    function yn(t, r) {
        t.lanes |= r;
        var s = t.alternate;
        for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null;) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var zn = !1;

    function pu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Wp(t, r) {
        t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }

    function vn(t, r) {
        return {
            eventTime: t,
            lane: r,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Bn(t, r, s) {
        var l = t.updateQueue;
        if (l === null) return null;
        if (l = l.shared, Te & 2) {
            var f = l.pending;
            return f === null ? r.next = r : (r.next = f.next, f.next = r), l.pending = r, yn(t, s)
        }
        return f = l.interleaved, f === null ? (r.next = r, fu(l)) : (r.next = f.next, f.next = r), l.interleaved = r, yn(t, s)
    }

    function As(t, r, s) {
        if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
            var l = r.lanes;
            l &= t.pendingLanes, s |= l, r.lanes = s, $l(t, s)
        }
    }

    function Kp(t, r) {
        var s = t.updateQueue,
            l = t.alternate;
        if (l !== null && (l = l.updateQueue, s === l)) {
            var f = null,
                m = null;
            if (s = s.firstBaseUpdate, s !== null) {
                do {
                    var x = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    m === null ? f = m = x : m = m.next = x, s = s.next
                } while (s !== null);
                m === null ? f = m = r : m = m.next = r
            } else f = m = r;
            s = {
                baseState: l.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: m,
                shared: l.shared,
                effects: l.effects
            }, t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r
    }

    function Rs(t, r, s, l) {
        var f = t.updateQueue;
        zn = !1;
        var m = f.firstBaseUpdate,
            x = f.lastBaseUpdate,
            T = f.shared.pending;
        if (T !== null) {
            f.shared.pending = null;
            var k = T,
                V = k.next;
            k.next = null, x === null ? m = V : x.next = V, x = k;
            var X = t.alternate;
            X !== null && (X = X.updateQueue, T = X.lastBaseUpdate, T !== x && (T === null ? X.firstBaseUpdate = V : T.next = V, X.lastBaseUpdate = k))
        }
        if (m !== null) {
            var Z = f.baseState;
            x = 0, X = V = k = null, T = m;
            do {
                var G = T.lane,
                    ae = T.eventTime;
                if ((l & G) === G) {
                    X !== null && (X = X.next = {
                        eventTime: ae,
                        lane: 0,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    });
                    e: {
                        var ce = t,
                            fe = T;
                        switch (G = r, ae = s, fe.tag) {
                            case 1:
                                if (ce = fe.payload, typeof ce == "function") {
                                    Z = ce.call(ae, Z, G);
                                    break e
                                }
                                Z = ce;
                                break e;
                            case 3:
                                ce.flags = ce.flags & -65537 | 128;
                            case 0:
                                if (ce = fe.payload, G = typeof ce == "function" ? ce.call(ae, Z, G) : ce, G == null) break e;
                                Z = K({}, Z, G);
                                break e;
                            case 2:
                                zn = !0
                        }
                    }
                    T.callback !== null && T.lane !== 0 && (t.flags |= 64, G = f.effects, G === null ? f.effects = [T] : G.push(T))
                } else ae = {
                    eventTime: ae,
                    lane: G,
                    tag: T.tag,
                    payload: T.payload,
                    callback: T.callback,
                    next: null
                }, X === null ? (V = X = ae, k = Z) : X = X.next = ae, x |= G;
                if (T = T.next, T === null) {
                    if (T = f.shared.pending, T === null) break;
                    G = T, T = G.next, G.next = null, f.lastBaseUpdate = G, f.shared.pending = null
                }
            } while (!0);
            if (X === null && (k = Z), f.baseState = k, f.firstBaseUpdate = V, f.lastBaseUpdate = X, r = f.shared.interleaved, r !== null) {
                f = r;
                do x |= f.lane, f = f.next; while (f !== r)
            } else m === null && (f.shared.lanes = 0);
            xr |= x, t.lanes = x, t.memoizedState = Z
        }
    }

    function Gp(t, r, s) {
        if (t = r.effects, r.effects = null, t !== null)
            for (r = 0; r < t.length; r++) {
                var l = t[r],
                    f = l.callback;
                if (f !== null) {
                    if (l.callback = null, l = s, typeof f != "function") throw Error(o(191, f));
                    f.call(l)
                }
            }
    }
    var ii = {},
        rn = In(ii),
        si = In(ii),
        ai = In(ii);

    function yr(t) {
        if (t === ii) throw Error(o(174));
        return t
    }

    function hu(t, r) {
        switch (Le(ai, r), Le(si, t), Le(rn, ii), t = r.nodeType, t) {
            case 9:
            case 11:
                r = (r = r.documentElement) ? r.namespaceURI : ml(null, "");
                break;
            default:
                t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = ml(r, t)
        }
        _e(rn), Le(rn, r)
    }

    function io() {
        _e(rn), _e(si), _e(ai)
    }

    function Yp(t) {
        yr(ai.current);
        var r = yr(rn.current),
            s = ml(r, t.type);
        r !== s && (Le(si, t), Le(rn, s))
    }

    function mu(t) {
        si.current === t && (_e(rn), _e(si))
    }
    var Ie = In(0);

    function _s(t) {
        for (var r = t; r !== null;) {
            if (r.tag === 13) {
                var s = r.memoizedState;
                if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r
            } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
                if (r.flags & 128) return r
            } else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; r.sibling === null;) {
                if (r.return === null || r.return === t) return null;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
        return null
    }
    var gu = [];

    function yu() {
        for (var t = 0; t < gu.length; t++) gu[t]._workInProgressVersionPrimary = null;
        gu.length = 0
    }
    var Ds = F.ReactCurrentDispatcher,
        vu = F.ReactCurrentBatchConfig,
        vr = 0,
        Ve = null,
        qe = null,
        et = null,
        Ns = !1,
        li = !1,
        ui = 0,
        qw = 0;

    function lt() {
        throw Error(o(321))
    }

    function xu(t, r) {
        if (r === null) return !1;
        for (var s = 0; s < r.length && s < t.length; s++)
            if (!Wt(t[s], r[s])) return !1;
        return !0
    }

    function wu(t, r, s, l, f, m) {
        if (vr = m, Ve = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ds.current = t === null || t.memoizedState === null ? tb : nb, t = s(l, f), li) {
            m = 0;
            do {
                if (li = !1, ui = 0, 25 <= m) throw Error(o(301));
                m += 1, et = qe = null, r.updateQueue = null, Ds.current = rb, t = s(l, f)
            } while (li)
        }
        if (Ds.current = Is, r = qe !== null && qe.next !== null, vr = 0, et = qe = Ve = null, Ns = !1, r) throw Error(o(300));
        return t
    }

    function bu() {
        var t = ui !== 0;
        return ui = 0, t
    }

    function on() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return et === null ? Ve.memoizedState = et = t : et = et.next = t, et
    }

    function _t() {
        if (qe === null) {
            var t = Ve.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = qe.next;
        var r = et === null ? Ve.memoizedState : et.next;
        if (r !== null) et = r, qe = t;
        else {
            if (t === null) throw Error(o(310));
            qe = t, t = {
                memoizedState: qe.memoizedState,
                baseState: qe.baseState,
                baseQueue: qe.baseQueue,
                queue: qe.queue,
                next: null
            }, et === null ? Ve.memoizedState = et = t : et = et.next = t
        }
        return et
    }

    function ci(t, r) {
        return typeof r == "function" ? r(t) : r
    }

    function Su(t) {
        var r = _t(),
            s = r.queue;
        if (s === null) throw Error(o(311));
        s.lastRenderedReducer = t;
        var l = qe,
            f = l.baseQueue,
            m = s.pending;
        if (m !== null) {
            if (f !== null) {
                var x = f.next;
                f.next = m.next, m.next = x
            }
            l.baseQueue = f = m, s.pending = null
        }
        if (f !== null) {
            m = f.next, l = l.baseState;
            var T = x = null,
                k = null,
                V = m;
            do {
                var X = V.lane;
                if ((vr & X) === X) k !== null && (k = k.next = {
                    lane: 0,
                    action: V.action,
                    hasEagerState: V.hasEagerState,
                    eagerState: V.eagerState,
                    next: null
                }), l = V.hasEagerState ? V.eagerState : t(l, V.action);
                else {
                    var Z = {
                        lane: X,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    };
                    k === null ? (T = k = Z, x = l) : k = k.next = Z, Ve.lanes |= X, xr |= X
                }
                V = V.next
            } while (V !== null && V !== m);
            k === null ? x = l : k.next = T, Wt(l, r.memoizedState) || (yt = !0), r.memoizedState = l, r.baseState = x, r.baseQueue = k, s.lastRenderedState = l
        }
        if (t = s.interleaved, t !== null) {
            f = t;
            do m = f.lane, Ve.lanes |= m, xr |= m, f = f.next; while (f !== t)
        } else f === null && (s.lanes = 0);
        return [r.memoizedState, s.dispatch]
    }

    function Pu(t) {
        var r = _t(),
            s = r.queue;
        if (s === null) throw Error(o(311));
        s.lastRenderedReducer = t;
        var l = s.dispatch,
            f = s.pending,
            m = r.memoizedState;
        if (f !== null) {
            s.pending = null;
            var x = f = f.next;
            do m = t(m, x.action), x = x.next; while (x !== f);
            Wt(m, r.memoizedState) || (yt = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), s.lastRenderedState = m
        }
        return [m, l]
    }

    function Xp() {}

    function Qp(t, r) {
        var s = Ve,
            l = _t(),
            f = r(),
            m = !Wt(l.memoizedState, f);
        if (m && (l.memoizedState = f, yt = !0), l = l.queue, Eu(Jp.bind(null, s, l, t), [t]), l.getSnapshot !== r || m || et !== null && et.memoizedState.tag & 1) {
            if (s.flags |= 2048, di(9, Zp.bind(null, s, l, f, r), void 0, null), tt === null) throw Error(o(349));
            vr & 30 || qp(s, r, f)
        }
        return f
    }

    function qp(t, r, s) {
        t.flags |= 16384, t = {
            getSnapshot: r,
            value: s
        }, r = Ve.updateQueue, r === null ? (r = {
            lastEffect: null,
            stores: null
        }, Ve.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t))
    }

    function Zp(t, r, s, l) {
        r.value = s, r.getSnapshot = l, eh(r) && th(t)
    }

    function Jp(t, r, s) {
        return s(function() {
            eh(r) && th(t)
        })
    }

    function eh(t) {
        var r = t.getSnapshot;
        t = t.value;
        try {
            var s = r();
            return !Wt(t, s)
        } catch {
            return !0
        }
    }

    function th(t) {
        var r = yn(t, 1);
        r !== null && Qt(r, t, 1, -1)
    }

    function nh(t) {
        var r = on();
        return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ci,
            lastRenderedState: t
        }, r.queue = t, t = t.dispatch = eb.bind(null, Ve, t), [r.memoizedState, t]
    }

    function di(t, r, s, l) {
        return t = {
            tag: t,
            create: r,
            destroy: s,
            deps: l,
            next: null
        }, r = Ve.updateQueue, r === null ? (r = {
            lastEffect: null,
            stores: null
        }, Ve.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, r.lastEffect = t)), t
    }

    function rh() {
        return _t().memoizedState
    }

    function Os(t, r, s, l) {
        var f = on();
        Ve.flags |= t, f.memoizedState = di(1 | r, s, void 0, l === void 0 ? null : l)
    }

    function js(t, r, s, l) {
        var f = _t();
        l = l === void 0 ? null : l;
        var m = void 0;
        if (qe !== null) {
            var x = qe.memoizedState;
            if (m = x.destroy, l !== null && xu(l, x.deps)) {
                f.memoizedState = di(r, s, m, l);
                return
            }
        }
        Ve.flags |= t, f.memoizedState = di(1 | r, s, m, l)
    }

    function oh(t, r) {
        return Os(8390656, 8, t, r)
    }

    function Eu(t, r) {
        return js(2048, 8, t, r)
    }

    function ih(t, r) {
        return js(4, 2, t, r)
    }

    function sh(t, r) {
        return js(4, 4, t, r)
    }

    function ah(t, r) {
        if (typeof r == "function") return t = t(), r(t),
            function() {
                r(null)
            };
        if (r != null) return t = t(), r.current = t,
            function() {
                r.current = null
            }
    }

    function lh(t, r, s) {
        return s = s != null ? s.concat([t]) : null, js(4, 4, ah.bind(null, r, t), s)
    }

    function Tu() {}

    function uh(t, r) {
        var s = _t();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && xu(r, l[1]) ? l[0] : (s.memoizedState = [t, r], t)
    }

    function ch(t, r) {
        var s = _t();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && xu(r, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, r], t)
    }

    function dh(t, r, s) {
        return vr & 21 ? (Wt(s, r) || (s = zf(), Ve.lanes |= s, xr |= s, t.baseState = !0), r) : (t.baseState && (t.baseState = !1, yt = !0), t.memoizedState = s)
    }

    function Zw(t, r) {
        var s = Me;
        Me = s !== 0 && 4 > s ? s : 4, t(!0);
        var l = vu.transition;
        vu.transition = {};
        try {
            t(!1), r()
        } finally {
            Me = s, vu.transition = l
        }
    }

    function fh() {
        return _t().memoizedState
    }

    function Jw(t, r, s) {
        var l = Kn(t);
        if (s = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ph(t)) hh(r, s);
        else if (s = Hp(t, r, s, l), s !== null) {
            var f = ht();
            Qt(s, t, l, f), mh(s, r, l)
        }
    }

    function eb(t, r, s) {
        var l = Kn(t),
            f = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (ph(t)) hh(r, f);
        else {
            var m = t.alternate;
            if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
                var x = r.lastRenderedState,
                    T = m(x, s);
                if (f.hasEagerState = !0, f.eagerState = T, Wt(T, x)) {
                    var k = r.interleaved;
                    k === null ? (f.next = f, fu(r)) : (f.next = k.next, k.next = f), r.interleaved = f;
                    return
                }
            } catch {} finally {}
            s = Hp(t, r, f, l), s !== null && (f = ht(), Qt(s, t, l, f), mh(s, r, l))
        }
    }

    function ph(t) {
        var r = t.alternate;
        return t === Ve || r !== null && r === Ve
    }

    function hh(t, r) {
        li = Ns = !0;
        var s = t.pending;
        s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r
    }

    function mh(t, r, s) {
        if (s & 4194240) {
            var l = r.lanes;
            l &= t.pendingLanes, s |= l, r.lanes = s, $l(t, s)
        }
    }
    var Is = {
            readContext: Rt,
            useCallback: lt,
            useContext: lt,
            useEffect: lt,
            useImperativeHandle: lt,
            useInsertionEffect: lt,
            useLayoutEffect: lt,
            useMemo: lt,
            useReducer: lt,
            useRef: lt,
            useState: lt,
            useDebugValue: lt,
            useDeferredValue: lt,
            useTransition: lt,
            useMutableSource: lt,
            useSyncExternalStore: lt,
            useId: lt,
            unstable_isNewReconciler: !1
        },
        tb = {
            readContext: Rt,
            useCallback: function(t, r) {
                return on().memoizedState = [t, r === void 0 ? null : r], t
            },
            useContext: Rt,
            useEffect: oh,
            useImperativeHandle: function(t, r, s) {
                return s = s != null ? s.concat([t]) : null, Os(4194308, 4, ah.bind(null, r, t), s)
            },
            useLayoutEffect: function(t, r) {
                return Os(4194308, 4, t, r)
            },
            useInsertionEffect: function(t, r) {
                return Os(4, 2, t, r)
            },
            useMemo: function(t, r) {
                var s = on();
                return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t
            },
            useReducer: function(t, r, s) {
                var l = on();
                return r = s !== void 0 ? s(r) : r, l.memoizedState = l.baseState = r, t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: r
                }, l.queue = t, t = t.dispatch = Jw.bind(null, Ve, t), [l.memoizedState, t]
            },
            useRef: function(t) {
                var r = on();
                return t = {
                    current: t
                }, r.memoizedState = t
            },
            useState: nh,
            useDebugValue: Tu,
            useDeferredValue: function(t) {
                return on().memoizedState = t
            },
            useTransition: function() {
                var t = nh(!1),
                    r = t[0];
                return t = Zw.bind(null, t[1]), on().memoizedState = t, [r, t]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(t, r, s) {
                var l = Ve,
                    f = on();
                if (je) {
                    if (s === void 0) throw Error(o(407));
                    s = s()
                } else {
                    if (s = r(), tt === null) throw Error(o(349));
                    vr & 30 || qp(l, r, s)
                }
                f.memoizedState = s;
                var m = {
                    value: s,
                    getSnapshot: r
                };
                return f.queue = m, oh(Jp.bind(null, l, m, t), [t]), l.flags |= 2048, di(9, Zp.bind(null, l, m, s, r), void 0, null), s
            },
            useId: function() {
                var t = on(),
                    r = tt.identifierPrefix;
                if (je) {
                    var s = gn,
                        l = mn;
                    s = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = ui++, 0 < s && (r += "H" + s.toString(32)), r += ":"
                } else s = qw++, r = ":" + r + "r" + s.toString(32) + ":";
                return t.memoizedState = r
            },
            unstable_isNewReconciler: !1
        },
        nb = {
            readContext: Rt,
            useCallback: uh,
            useContext: Rt,
            useEffect: Eu,
            useImperativeHandle: lh,
            useInsertionEffect: ih,
            useLayoutEffect: sh,
            useMemo: ch,
            useReducer: Su,
            useRef: rh,
            useState: function() {
                return Su(ci)
            },
            useDebugValue: Tu,
            useDeferredValue: function(t) {
                var r = _t();
                return dh(r, qe.memoizedState, t)
            },
            useTransition: function() {
                var t = Su(ci)[0],
                    r = _t().memoizedState;
                return [t, r]
            },
            useMutableSource: Xp,
            useSyncExternalStore: Qp,
            useId: fh,
            unstable_isNewReconciler: !1
        },
        rb = {
            readContext: Rt,
            useCallback: uh,
            useContext: Rt,
            useEffect: Eu,
            useImperativeHandle: lh,
            useInsertionEffect: ih,
            useLayoutEffect: sh,
            useMemo: ch,
            useReducer: Pu,
            useRef: rh,
            useState: function() {
                return Pu(ci)
            },
            useDebugValue: Tu,
            useDeferredValue: function(t) {
                var r = _t();
                return qe === null ? r.memoizedState = t : dh(r, qe.memoizedState, t)
            },
            useTransition: function() {
                var t = Pu(ci)[0],
                    r = _t().memoizedState;
                return [t, r]
            },
            useMutableSource: Xp,
            useSyncExternalStore: Qp,
            useId: fh,
            unstable_isNewReconciler: !1
        };

    function Gt(t, r) {
        if (t && t.defaultProps) {
            r = K({}, r), t = t.defaultProps;
            for (var s in t) r[s] === void 0 && (r[s] = t[s]);
            return r
        }
        return r
    }

    function Cu(t, r, s, l) {
        r = t.memoizedState, s = s(l, r), s = s == null ? r : K({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var Vs = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? dr(t) === t : !1
        },
        enqueueSetState: function(t, r, s) {
            t = t._reactInternals;
            var l = ht(),
                f = Kn(t),
                m = vn(l, f);
            m.payload = r, s != null && (m.callback = s), r = Bn(t, m, f), r !== null && (Qt(r, t, f, l), As(r, t, f))
        },
        enqueueReplaceState: function(t, r, s) {
            t = t._reactInternals;
            var l = ht(),
                f = Kn(t),
                m = vn(l, f);
            m.tag = 1, m.payload = r, s != null && (m.callback = s), r = Bn(t, m, f), r !== null && (Qt(r, t, f, l), As(r, t, f))
        },
        enqueueForceUpdate: function(t, r) {
            t = t._reactInternals;
            var s = ht(),
                l = Kn(t),
                f = vn(s, l);
            f.tag = 2, r != null && (f.callback = r), r = Bn(t, f, l), r !== null && (Qt(r, t, l, s), As(r, t, l))
        }
    };

    function gh(t, r, s, l, f, m, x) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, m, x) : r.prototype && r.prototype.isPureReactComponent ? !qo(s, l) || !qo(f, m) : !0
    }

    function yh(t, r, s) {
        var l = !1,
            f = Vn,
            m = r.contextType;
        return typeof m == "object" && m !== null ? m = Rt(m) : (f = gt(r) ? pr : at.current, l = r.contextTypes, m = (l = l != null) ? Zr(t, f) : Vn), r = new r(s, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Vs, t.stateNode = r, r._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = m), r
    }

    function vh(t, r, s, l) {
        t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, l), r.state !== t && Vs.enqueueReplaceState(r, r.state, null)
    }

    function $u(t, r, s, l) {
        var f = t.stateNode;
        f.props = s, f.state = t.memoizedState, f.refs = {}, pu(t);
        var m = r.contextType;
        typeof m == "object" && m !== null ? f.context = Rt(m) : (m = gt(r) ? pr : at.current, f.context = Zr(t, m)), f.state = t.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Cu(t, r, m, s), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Vs.enqueueReplaceState(f, f.state, null), Rs(t, s, f, l), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308)
    }

    function so(t, r) {
        try {
            var s = "",
                l = r;
            do s += ie(l), l = l.return; while (l);
            var f = s
        } catch (m) {
            f = `
Error generating stack: ` + m.message + `
` + m.stack
        }
        return {
            value: t,
            source: r,
            stack: f,
            digest: null
        }
    }

    function ku(t, r, s) {
        return {
            value: t,
            source: null,
            stack: s ? ? null,
            digest: r ? ? null
        }
    }

    function Mu(t, r) {
        try {
            console.error(r.value)
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    var ob = typeof WeakMap == "function" ? WeakMap : Map;

    function xh(t, r, s) {
        s = vn(-1, s), s.tag = 3, s.payload = {
            element: null
        };
        var l = r.value;
        return s.callback = function() {
            Ks || (Ks = !0, Hu = l), Mu(t, r)
        }, s
    }

    function wh(t, r, s) {
        s = vn(-1, s), s.tag = 3;
        var l = t.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var f = r.value;
            s.payload = function() {
                return l(f)
            }, s.callback = function() {
                Mu(t, r)
            }
        }
        var m = t.stateNode;
        return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
            Mu(t, r), typeof l != "function" && (Hn === null ? Hn = new Set([this]) : Hn.add(this));
            var x = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: x !== null ? x : ""
            })
        }), s
    }

    function bh(t, r, s) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new ob;
            var f = new Set;
            l.set(r, f)
        } else f = l.get(r), f === void 0 && (f = new Set, l.set(r, f));
        f.has(s) || (f.add(s), t = vb.bind(null, t, r, s), r.then(t, t))
    }

    function Sh(t) {
        do {
            var r;
            if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
            t = t.return
        } while (t !== null);
        return null
    }

    function Ph(t, r, s, l, f) {
        return t.mode & 1 ? (t.flags |= 65536, t.lanes = f, t) : (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = vn(-1, 1), r.tag = 2, Bn(s, r, 1))), s.lanes |= 1), t)
    }
    var ib = F.ReactCurrentOwner,
        yt = !1;

    function pt(t, r, s, l) {
        r.child = t === null ? Up(r, null, s, l) : no(r, t.child, s, l)
    }

    function Eh(t, r, s, l, f) {
        s = s.render;
        var m = r.ref;
        return oo(r, f), l = wu(t, r, s, l, m, f), s = bu(), t !== null && !yt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, xn(t, r, f)) : (je && s && ru(r), r.flags |= 1, pt(t, r, l, f), r.child)
    }

    function Th(t, r, s, l, f) {
        if (t === null) {
            var m = s.type;
            return typeof m == "function" && !qu(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = m, Ch(t, r, m, l, f)) : (t = Zs(s.type, null, l, r, r.mode, f), t.ref = r.ref, t.return = r, r.child = t)
        }
        if (m = t.child, !(t.lanes & f)) {
            var x = m.memoizedProps;
            if (s = s.compare, s = s !== null ? s : qo, s(x, l) && t.ref === r.ref) return xn(t, r, f)
        }
        return r.flags |= 1, t = Yn(m, l), t.ref = r.ref, t.return = r, r.child = t
    }

    function Ch(t, r, s, l, f) {
        if (t !== null) {
            var m = t.memoizedProps;
            if (qo(m, l) && t.ref === r.ref)
                if (yt = !1, r.pendingProps = l = m, (t.lanes & f) !== 0) t.flags & 131072 && (yt = !0);
                else return r.lanes = t.lanes, xn(t, r, f)
        }
        return Lu(t, r, s, l, f)
    }

    function $h(t, r, s) {
        var l = r.pendingProps,
            f = l.children,
            m = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden")
            if (!(r.mode & 1)) r.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Le(lo, Et), Et |= s;
            else {
                if (!(s & 1073741824)) return t = m !== null ? m.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                }, r.updateQueue = null, Le(lo, Et), Et |= t, null;
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = m !== null ? m.baseLanes : s, Le(lo, Et), Et |= l
            }
        else m !== null ? (l = m.baseLanes | s, r.memoizedState = null) : l = s, Le(lo, Et), Et |= l;
        return pt(t, r, f, s), r.child
    }

    function kh(t, r) {
        var s = r.ref;
        (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152)
    }

    function Lu(t, r, s, l, f) {
        var m = gt(s) ? pr : at.current;
        return m = Zr(r, m), oo(r, f), s = wu(t, r, s, l, m, f), l = bu(), t !== null && !yt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, xn(t, r, f)) : (je && l && ru(r), r.flags |= 1, pt(t, r, s, f), r.child)
    }

    function Mh(t, r, s, l, f) {
        if (gt(s)) {
            var m = !0;
            Ps(r)
        } else m = !1;
        if (oo(r, f), r.stateNode === null) zs(t, r), yh(r, s, l), $u(r, s, l, f), l = !0;
        else if (t === null) {
            var x = r.stateNode,
                T = r.memoizedProps;
            x.props = T;
            var k = x.context,
                V = s.contextType;
            typeof V == "object" && V !== null ? V = Rt(V) : (V = gt(s) ? pr : at.current, V = Zr(r, V));
            var X = s.getDerivedStateFromProps,
                Z = typeof X == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            Z || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (T !== l || k !== V) && vh(r, x, l, V), zn = !1;
            var G = r.memoizedState;
            x.state = G, Rs(r, l, x, f), k = r.memoizedState, T !== l || G !== k || mt.current || zn ? (typeof X == "function" && (Cu(r, s, X, l), k = r.memoizedState), (T = zn || gh(r, s, T, l, G, k, V)) ? (Z || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = k), x.props = l, x.state = k, x.context = V, l = T) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), l = !1)
        } else {
            x = r.stateNode, Wp(t, r), T = r.memoizedProps, V = r.type === r.elementType ? T : Gt(r.type, T), x.props = V, Z = r.pendingProps, G = x.context, k = s.contextType, typeof k == "object" && k !== null ? k = Rt(k) : (k = gt(s) ? pr : at.current, k = Zr(r, k));
            var ae = s.getDerivedStateFromProps;
            (X = typeof ae == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (T !== Z || G !== k) && vh(r, x, l, k), zn = !1, G = r.memoizedState, x.state = G, Rs(r, l, x, f);
            var ce = r.memoizedState;
            T !== Z || G !== ce || mt.current || zn ? (typeof ae == "function" && (Cu(r, s, ae, l), ce = r.memoizedState), (V = zn || gh(r, s, V, l, G, ce, k) || !1) ? (X || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(l, ce, k), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(l, ce, k)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || T === t.memoizedProps && G === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || T === t.memoizedProps && G === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = ce), x.props = l, x.state = ce, x.context = k, l = V) : (typeof x.componentDidUpdate != "function" || T === t.memoizedProps && G === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || T === t.memoizedProps && G === t.memoizedState || (r.flags |= 1024), l = !1)
        }
        return Au(t, r, s, l, m, f)
    }

    function Au(t, r, s, l, f, m) {
        kh(t, r);
        var x = (r.flags & 128) !== 0;
        if (!l && !x) return f && Dp(r, s, !1), xn(t, r, m);
        l = r.stateNode, ib.current = r;
        var T = x && typeof s.getDerivedStateFromError != "function" ? null : l.render();
        return r.flags |= 1, t !== null && x ? (r.child = no(r, t.child, null, m), r.child = no(r, null, T, m)) : pt(t, r, T, m), r.memoizedState = l.state, f && Dp(r, s, !0), r.child
    }

    function Lh(t) {
        var r = t.stateNode;
        r.pendingContext ? Rp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Rp(t, r.context, !1), hu(t, r.containerInfo)
    }

    function Ah(t, r, s, l, f) {
        return to(), au(f), r.flags |= 256, pt(t, r, s, l), r.child
    }
    var Ru = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function _u(t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }

    function Rh(t, r, s) {
        var l = r.pendingProps,
            f = Ie.current,
            m = !1,
            x = (r.flags & 128) !== 0,
            T;
        if ((T = x) || (T = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), T ? (m = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Le(Ie, f & 1), t === null) return su(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (r.mode & 1 ? t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (x = l.children, t = l.fallback, m ? (l = r.mode, m = r.child, x = {
            mode: "hidden",
            children: x
        }, !(l & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = x) : m = Js(x, l, 0, null), t = Pr(t, l, s, null), m.return = r, t.return = r, m.sibling = t, r.child = m, r.child.memoizedState = _u(s), r.memoizedState = Ru, t) : Du(r, x));
        if (f = t.memoizedState, f !== null && (T = f.dehydrated, T !== null)) return sb(t, r, x, l, T, f, s);
        if (m) {
            m = l.fallback, x = r.mode, f = t.child, T = f.sibling;
            var k = {
                mode: "hidden",
                children: l.children
            };
            return !(x & 1) && r.child !== f ? (l = r.child, l.childLanes = 0, l.pendingProps = k, r.deletions = null) : (l = Yn(f, k), l.subtreeFlags = f.subtreeFlags & 14680064), T !== null ? m = Yn(T, m) : (m = Pr(m, x, s, null), m.flags |= 2), m.return = r, l.return = r, l.sibling = m, r.child = l, l = m, m = r.child, x = t.child.memoizedState, x = x === null ? _u(s) : {
                baseLanes: x.baseLanes | s,
                cachePool: null,
                transitions: x.transitions
            }, m.memoizedState = x, m.childLanes = t.childLanes & ~s, r.memoizedState = Ru, l
        }
        return m = t.child, t = m.sibling, l = Yn(m, {
            mode: "visible",
            children: l.children
        }), !(r.mode & 1) && (l.lanes = s), l.return = r, l.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = l, r.memoizedState = null, l
    }

    function Du(t, r) {
        return r = Js({
            mode: "visible",
            children: r
        }, t.mode, 0, null), r.return = t, t.child = r
    }

    function Fs(t, r, s, l) {
        return l !== null && au(l), no(r, t.child, null, s), t = Du(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t
    }

    function sb(t, r, s, l, f, m, x) {
        if (s) return r.flags & 256 ? (r.flags &= -257, l = ku(Error(o(422))), Fs(t, r, x, l)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (m = l.fallback, f = r.mode, l = Js({
            mode: "visible",
            children: l.children
        }, f, 0, null), m = Pr(m, f, x, null), m.flags |= 2, l.return = r, m.return = r, l.sibling = m, r.child = l, r.mode & 1 && no(r, t.child, null, x), r.child.memoizedState = _u(x), r.memoizedState = Ru, m);
        if (!(r.mode & 1)) return Fs(t, r, x, null);
        if (f.data === "$!") {
            if (l = f.nextSibling && f.nextSibling.dataset, l) var T = l.dgst;
            return l = T, m = Error(o(419)), l = ku(m, l, void 0), Fs(t, r, x, l)
        }
        if (T = (x & t.childLanes) !== 0, yt || T) {
            if (l = tt, l !== null) {
                switch (x & -x) {
                    case 4:
                        f = 2;
                        break;
                    case 16:
                        f = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        f = 32;
                        break;
                    case 536870912:
                        f = 268435456;
                        break;
                    default:
                        f = 0
                }
                f = f & (l.suspendedLanes | x) ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, yn(t, f), Qt(l, t, f, -1))
            }
            return Qu(), l = ku(Error(o(421))), Fs(t, r, x, l)
        }
        return f.data === "$?" ? (r.flags |= 128, r.child = t.child, r = xb.bind(null, t), f._reactRetry = r, null) : (t = m.treeContext, Pt = jn(f.nextSibling), St = r, je = !0, Kt = null, t !== null && (Lt[At++] = mn, Lt[At++] = gn, Lt[At++] = hr, mn = t.id, gn = t.overflow, hr = r), r = Du(r, l.children), r.flags |= 4096, r)
    }

    function _h(t, r, s) {
        t.lanes |= r;
        var l = t.alternate;
        l !== null && (l.lanes |= r), du(t.return, r, s)
    }

    function Nu(t, r, s, l, f) {
        var m = t.memoizedState;
        m === null ? t.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: s,
            tailMode: f
        } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = s, m.tailMode = f)
    }

    function Dh(t, r, s) {
        var l = r.pendingProps,
            f = l.revealOrder,
            m = l.tail;
        if (pt(t, r, l.children, s), l = Ie.current, l & 2) l = l & 1 | 2, r.flags |= 128;
        else {
            if (t !== null && t.flags & 128) e: for (t = r.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && _h(t, s, r);
                else if (t.tag === 19) _h(t, s, r);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === r) break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === r) break e;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            l &= 1
        }
        if (Le(Ie, l), !(r.mode & 1)) r.memoizedState = null;
        else switch (f) {
            case "forwards":
                for (s = r.child, f = null; s !== null;) t = s.alternate, t !== null && _s(t) === null && (f = s), s = s.sibling;
                s = f, s === null ? (f = r.child, r.child = null) : (f = s.sibling, s.sibling = null), Nu(r, !1, f, s, m);
                break;
            case "backwards":
                for (s = null, f = r.child, r.child = null; f !== null;) {
                    if (t = f.alternate, t !== null && _s(t) === null) {
                        r.child = f;
                        break
                    }
                    t = f.sibling, f.sibling = s, s = f, f = t
                }
                Nu(r, !0, s, null, m);
                break;
            case "together":
                Nu(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
        }
        return r.child
    }

    function zs(t, r) {
        !(r.mode & 1) && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2)
    }

    function xn(t, r, s) {
        if (t !== null && (r.dependencies = t.dependencies), xr |= r.lanes, !(s & r.childLanes)) return null;
        if (t !== null && r.child !== t.child) throw Error(o(153));
        if (r.child !== null) {
            for (t = r.child, s = Yn(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null;) t = t.sibling, s = s.sibling = Yn(t, t.pendingProps), s.return = r;
            s.sibling = null
        }
        return r.child
    }

    function ab(t, r, s) {
        switch (r.tag) {
            case 3:
                Lh(r), to();
                break;
            case 5:
                Yp(r);
                break;
            case 1:
                gt(r.type) && Ps(r);
                break;
            case 4:
                hu(r, r.stateNode.containerInfo);
                break;
            case 10:
                var l = r.type._context,
                    f = r.memoizedProps.value;
                Le(Ms, l._currentValue), l._currentValue = f;
                break;
            case 13:
                if (l = r.memoizedState, l !== null) return l.dehydrated !== null ? (Le(Ie, Ie.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Rh(t, r, s) : (Le(Ie, Ie.current & 1), t = xn(t, r, s), t !== null ? t.sibling : null);
                Le(Ie, Ie.current & 1);
                break;
            case 19:
                if (l = (s & r.childLanes) !== 0, t.flags & 128) {
                    if (l) return Dh(t, r, s);
                    r.flags |= 128
                }
                if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Le(Ie, Ie.current), l) break;
                return null;
            case 22:
            case 23:
                return r.lanes = 0, $h(t, r, s)
        }
        return xn(t, r, s)
    }
    var Nh, Ou, Oh, jh;
    Nh = function(t, r) {
        for (var s = r.child; s !== null;) {
            if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === r) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === r) return;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
    }, Ou = function() {}, Oh = function(t, r, s, l) {
        var f = t.memoizedProps;
        if (f !== l) {
            t = r.stateNode, yr(rn.current);
            var m = null;
            switch (s) {
                case "input":
                    f = Mn(t, f), l = Mn(t, l), m = [];
                    break;
                case "select":
                    f = K({}, f, {
                        value: void 0
                    }), l = K({}, l, {
                        value: void 0
                    }), m = [];
                    break;
                case "textarea":
                    f = Ut(t, f), l = Ut(t, l), m = [];
                    break;
                default:
                    typeof f.onClick != "function" && typeof l.onClick == "function" && (t.onclick = ws)
            }
            gl(s, l);
            var x;
            s = null;
            for (V in f)
                if (!l.hasOwnProperty(V) && f.hasOwnProperty(V) && f[V] != null)
                    if (V === "style") {
                        var T = f[V];
                        for (x in T) T.hasOwnProperty(x) && (s || (s = {}), s[x] = "")
                    } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (a.hasOwnProperty(V) ? m || (m = []) : (m = m || []).push(V, null));
            for (V in l) {
                var k = l[V];
                if (T = f != null ? f[V] : void 0, l.hasOwnProperty(V) && k !== T && (k != null || T != null))
                    if (V === "style")
                        if (T) {
                            for (x in T) !T.hasOwnProperty(x) || k && k.hasOwnProperty(x) || (s || (s = {}), s[x] = "");
                            for (x in k) k.hasOwnProperty(x) && T[x] !== k[x] && (s || (s = {}), s[x] = k[x])
                        } else s || (m || (m = []), m.push(V, s)), s = k;
                else V === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, T = T ? T.__html : void 0, k != null && T !== k && (m = m || []).push(V, k)) : V === "children" ? typeof k != "string" && typeof k != "number" || (m = m || []).push(V, "" + k) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (a.hasOwnProperty(V) ? (k != null && V === "onScroll" && Re("scroll", t), m || T === k || (m = [])) : (m = m || []).push(V, k))
            }
            s && (m = m || []).push("style", s);
            var V = m;
            (r.updateQueue = V) && (r.flags |= 4)
        }
    }, jh = function(t, r, s, l) {
        s !== l && (r.flags |= 4)
    };

    function fi(t, r) {
        if (!je) switch (t.tailMode) {
            case "hidden":
                r = t.tail;
                for (var s = null; r !== null;) r.alternate !== null && (s = r), r = r.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var l = null; s !== null;) s.alternate !== null && (l = s), s = s.sibling;
                l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
        }
    }

    function ut(t) {
        var r = t.alternate !== null && t.alternate.child === t.child,
            s = 0,
            l = 0;
        if (r)
            for (var f = t.child; f !== null;) s |= f.lanes | f.childLanes, l |= f.subtreeFlags & 14680064, l |= f.flags & 14680064, f.return = t, f = f.sibling;
        else
            for (f = t.child; f !== null;) s |= f.lanes | f.childLanes, l |= f.subtreeFlags, l |= f.flags, f.return = t, f = f.sibling;
        return t.subtreeFlags |= l, t.childLanes = s, r
    }

    function lb(t, r, s) {
        var l = r.pendingProps;
        switch (ou(r), r.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return ut(r), null;
            case 1:
                return gt(r.type) && Ss(), ut(r), null;
            case 3:
                return l = r.stateNode, io(), _e(mt), _e(at), yu(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && ($s(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Kt !== null && (Gu(Kt), Kt = null))), Ou(t, r), ut(r), null;
            case 5:
                mu(r);
                var f = yr(ai.current);
                if (s = r.type, t !== null && r.stateNode != null) Oh(t, r, s, l, f), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
                else {
                    if (!l) {
                        if (r.stateNode === null) throw Error(o(166));
                        return ut(r), null
                    }
                    if (t = yr(rn.current), $s(r)) {
                        l = r.stateNode, s = r.type;
                        var m = r.memoizedProps;
                        switch (l[nn] = r, l[ni] = m, t = (r.mode & 1) !== 0, s) {
                            case "dialog":
                                Re("cancel", l), Re("close", l);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Re("load", l);
                                break;
                            case "video":
                            case "audio":
                                for (f = 0; f < Jo.length; f++) Re(Jo[f], l);
                                break;
                            case "source":
                                Re("error", l);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Re("error", l), Re("load", l);
                                break;
                            case "details":
                                Re("toggle", l);
                                break;
                            case "input":
                                lr(l, m), Re("invalid", l);
                                break;
                            case "select":
                                l._wrapperState = {
                                    wasMultiple: !!m.multiple
                                }, Re("invalid", l);
                                break;
                            case "textarea":
                                wf(l, m), Re("invalid", l)
                        }
                        gl(s, m), f = null;
                        for (var x in m)
                            if (m.hasOwnProperty(x)) {
                                var T = m[x];
                                x === "children" ? typeof T == "string" ? l.textContent !== T && (m.suppressHydrationWarning !== !0 && xs(l.textContent, T, t), f = ["children", T]) : typeof T == "number" && l.textContent !== "" + T && (m.suppressHydrationWarning !== !0 && xs(l.textContent, T, t), f = ["children", "" + T]) : a.hasOwnProperty(x) && T != null && x === "onScroll" && Re("scroll", l)
                            }
                        switch (s) {
                            case "input":
                                kt(l), ur(l, m, !0);
                                break;
                            case "textarea":
                                kt(l), Sf(l);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof m.onClick == "function" && (l.onclick = ws)
                        }
                        l = f, r.updateQueue = l, l !== null && (r.flags |= 4)
                    } else {
                        x = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Pf(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = x.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = x.createElement(s, {
                            is: l.is
                        }) : (t = x.createElement(s), s === "select" && (x = t, l.multiple ? x.multiple = !0 : l.size && (x.size = l.size))) : t = x.createElementNS(t, s), t[nn] = r, t[ni] = l, Nh(t, r, !1, !1), r.stateNode = t;
                        e: {
                            switch (x = yl(s, l), s) {
                                case "dialog":
                                    Re("cancel", t), Re("close", t), f = l;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Re("load", t), f = l;
                                    break;
                                case "video":
                                case "audio":
                                    for (f = 0; f < Jo.length; f++) Re(Jo[f], t);
                                    f = l;
                                    break;
                                case "source":
                                    Re("error", t), f = l;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Re("error", t), Re("load", t), f = l;
                                    break;
                                case "details":
                                    Re("toggle", t), f = l;
                                    break;
                                case "input":
                                    lr(t, l), f = Mn(t, l), Re("invalid", t);
                                    break;
                                case "option":
                                    f = l;
                                    break;
                                case "select":
                                    t._wrapperState = {
                                        wasMultiple: !!l.multiple
                                    }, f = K({}, l, {
                                        value: void 0
                                    }), Re("invalid", t);
                                    break;
                                case "textarea":
                                    wf(t, l), f = Ut(t, l), Re("invalid", t);
                                    break;
                                default:
                                    f = l
                            }
                            gl(s, f),
                            T = f;
                            for (m in T)
                                if (T.hasOwnProperty(m)) {
                                    var k = T[m];
                                    m === "style" ? Cf(t, k) : m === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && Ef(t, k)) : m === "children" ? typeof k == "string" ? (s !== "textarea" || k !== "") && Do(t, k) : typeof k == "number" && Do(t, "" + k) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? k != null && m === "onScroll" && Re("scroll", t) : k != null && D(t, m, k, x))
                                }
                            switch (s) {
                                case "input":
                                    kt(t), ur(t, l, !1);
                                    break;
                                case "textarea":
                                    kt(t), Sf(t);
                                    break;
                                case "option":
                                    l.value != null && t.setAttribute("value", "" + he(l.value));
                                    break;
                                case "select":
                                    t.multiple = !!l.multiple, m = l.value, m != null ? Ln(t, !!l.multiple, m, !1) : l.defaultValue != null && Ln(t, !!l.multiple, l.defaultValue, !0);
                                    break;
                                default:
                                    typeof f.onClick == "function" && (t.onclick = ws)
                            }
                            switch (s) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!l.autoFocus;
                                    break e;
                                case "img":
                                    l = !0;
                                    break e;
                                default:
                                    l = !1
                            }
                        }
                        l && (r.flags |= 4)
                    }
                    r.ref !== null && (r.flags |= 512, r.flags |= 2097152)
                }
                return ut(r), null;
            case 6:
                if (t && r.stateNode != null) jh(t, r, t.memoizedProps, l);
                else {
                    if (typeof l != "string" && r.stateNode === null) throw Error(o(166));
                    if (s = yr(ai.current), yr(rn.current), $s(r)) {
                        if (l = r.stateNode, s = r.memoizedProps, l[nn] = r, (m = l.nodeValue !== s) && (t = St, t !== null)) switch (t.tag) {
                            case 3:
                                xs(l.nodeValue, s, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 && xs(l.nodeValue, s, (t.mode & 1) !== 0)
                        }
                        m && (r.flags |= 4)
                    } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[nn] = r, r.stateNode = l
                }
                return ut(r), null;
            case 13:
                if (_e(Ie), l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (je && Pt !== null && r.mode & 1 && !(r.flags & 128)) Fp(), to(), r.flags |= 98560, m = !1;
                    else if (m = $s(r), l !== null && l.dehydrated !== null) {
                        if (t === null) {
                            if (!m) throw Error(o(318));
                            if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(o(317));
                            m[nn] = r
                        } else to(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
                        ut(r), m = !1
                    } else Kt !== null && (Gu(Kt), Kt = null), m = !0;
                    if (!m) return r.flags & 65536 ? r : null
                }
                return r.flags & 128 ? (r.lanes = s, r) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192, r.mode & 1 && (t === null || Ie.current & 1 ? Ze === 0 && (Ze = 3) : Qu())), r.updateQueue !== null && (r.flags |= 4), ut(r), null);
            case 4:
                return io(), Ou(t, r), t === null && ei(r.stateNode.containerInfo), ut(r), null;
            case 10:
                return cu(r.type._context), ut(r), null;
            case 17:
                return gt(r.type) && Ss(), ut(r), null;
            case 19:
                if (_e(Ie), m = r.memoizedState, m === null) return ut(r), null;
                if (l = (r.flags & 128) !== 0, x = m.rendering, x === null)
                    if (l) fi(m, !1);
                    else {
                        if (Ze !== 0 || t !== null && t.flags & 128)
                            for (t = r.child; t !== null;) {
                                if (x = _s(t), x !== null) {
                                    for (r.flags |= 128, fi(m, !1), l = x.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = s, s = r.child; s !== null;) m = s, t = l, m.flags &= 14680066, x = m.alternate, x === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = x.childLanes, m.lanes = x.lanes, m.child = x.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = x.memoizedProps, m.memoizedState = x.memoizedState, m.updateQueue = x.updateQueue, m.type = x.type, t = x.dependencies, m.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }), s = s.sibling;
                                    return Le(Ie, Ie.current & 1 | 2), r.child
                                }
                                t = t.sibling
                            }
                        m.tail !== null && He() > uo && (r.flags |= 128, l = !0, fi(m, !1), r.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (t = _s(x), t !== null) {
                            if (r.flags |= 128, l = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), fi(m, !0), m.tail === null && m.tailMode === "hidden" && !x.alternate && !je) return ut(r), null
                        } else 2 * He() - m.renderingStartTime > uo && s !== 1073741824 && (r.flags |= 128, l = !0, fi(m, !1), r.lanes = 4194304);
                    m.isBackwards ? (x.sibling = r.child, r.child = x) : (s = m.last, s !== null ? s.sibling = x : r.child = x, m.last = x)
                }
                return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = He(), r.sibling = null, s = Ie.current, Le(Ie, l ? s & 1 | 2 : s & 1), r) : (ut(r), null);
            case 22:
            case 23:
                return Xu(), l = r.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (r.flags |= 8192), l && r.mode & 1 ? Et & 1073741824 && (ut(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ut(r), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(o(156, r.tag))
    }

    function ub(t, r) {
        switch (ou(r), r.tag) {
            case 1:
                return gt(r.type) && Ss(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
            case 3:
                return io(), _e(mt), _e(at), yu(), t = r.flags, t & 65536 && !(t & 128) ? (r.flags = t & -65537 | 128, r) : null;
            case 5:
                return mu(r), null;
            case 13:
                if (_e(Ie), t = r.memoizedState, t !== null && t.dehydrated !== null) {
                    if (r.alternate === null) throw Error(o(340));
                    to()
                }
                return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
            case 19:
                return _e(Ie), null;
            case 4:
                return io(), null;
            case 10:
                return cu(r.type._context), null;
            case 22:
            case 23:
                return Xu(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Bs = !1,
        ct = !1,
        cb = typeof WeakSet == "function" ? WeakSet : Set,
        ue = null;

    function ao(t, r) {
        var s = t.ref;
        if (s !== null)
            if (typeof s == "function") try {
                s(null)
            } catch (l) {
                ze(t, r, l)
            } else s.current = null
    }

    function ju(t, r, s) {
        try {
            s()
        } catch (l) {
            ze(t, r, l)
        }
    }
    var Ih = !1;

    function db(t, r) {
        if (Xl = ls, t = gp(), zl(t)) {
            if ("selectionStart" in t) var s = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else e: {
                s = (s = t.ownerDocument) && s.defaultView || window;
                var l = s.getSelection && s.getSelection();
                if (l && l.rangeCount !== 0) {
                    s = l.anchorNode;
                    var f = l.anchorOffset,
                        m = l.focusNode;
                    l = l.focusOffset;
                    try {
                        s.nodeType, m.nodeType
                    } catch {
                        s = null;
                        break e
                    }
                    var x = 0,
                        T = -1,
                        k = -1,
                        V = 0,
                        X = 0,
                        Z = t,
                        G = null;
                    t: for (;;) {
                        for (var ae; Z !== s || f !== 0 && Z.nodeType !== 3 || (T = x + f), Z !== m || l !== 0 && Z.nodeType !== 3 || (k = x + l), Z.nodeType === 3 && (x += Z.nodeValue.length), (ae = Z.firstChild) !== null;) G = Z, Z = ae;
                        for (;;) {
                            if (Z === t) break t;
                            if (G === s && ++V === f && (T = x), G === m && ++X === l && (k = x), (ae = Z.nextSibling) !== null) break;
                            Z = G, G = Z.parentNode
                        }
                        Z = ae
                    }
                    s = T === -1 || k === -1 ? null : {
                        start: T,
                        end: k
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (Ql = {
                focusedElem: t,
                selectionRange: s
            }, ls = !1, ue = r; ue !== null;)
            if (r = ue, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, ue = t;
            else
                for (; ue !== null;) {
                    r = ue;
                    try {
                        var ce = r.alternate;
                        if (r.flags & 1024) switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ce !== null) {
                                    var fe = ce.memoizedProps,
                                        We = ce.memoizedState,
                                        N = r.stateNode,
                                        A = N.getSnapshotBeforeUpdate(r.elementType === r.type ? fe : Gt(r.type, fe), We);
                                    N.__reactInternalSnapshotBeforeUpdate = A
                                }
                                break;
                            case 3:
                                var j = r.stateNode.containerInfo;
                                j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(o(163))
                        }
                    } catch (te) {
                        ze(r, r.return, te)
                    }
                    if (t = r.sibling, t !== null) {
                        t.return = r.return, ue = t;
                        break
                    }
                    ue = r.return
                }
        return ce = Ih, Ih = !1, ce
    }

    function pi(t, r, s) {
        var l = r.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
            var f = l = l.next;
            do {
                if ((f.tag & t) === t) {
                    var m = f.destroy;
                    f.destroy = void 0, m !== void 0 && ju(r, s, m)
                }
                f = f.next
            } while (f !== l)
        }
    }

    function Us(t, r) {
        if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
            var s = r = r.next;
            do {
                if ((s.tag & t) === t) {
                    var l = s.create;
                    s.destroy = l()
                }
                s = s.next
            } while (s !== r)
        }
    }

    function Iu(t) {
        var r = t.ref;
        if (r !== null) {
            var s = t.stateNode;
            switch (t.tag) {
                case 5:
                    t = s;
                    break;
                default:
                    t = s
            }
            typeof r == "function" ? r(t) : r.current = t
        }
    }

    function Vh(t) {
        var r = t.alternate;
        r !== null && (t.alternate = null, Vh(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[nn], delete r[ni], delete r[eu], delete r[Gw], delete r[Yw])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }

    function Fh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }

    function zh(t) {
        e: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Fh(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Vu(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = ws));
        else if (l !== 4 && (t = t.child, t !== null))
            for (Vu(t, r, s), t = t.sibling; t !== null;) Vu(t, r, s), t = t.sibling
    }

    function Fu(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
        else if (l !== 4 && (t = t.child, t !== null))
            for (Fu(t, r, s), t = t.sibling; t !== null;) Fu(t, r, s), t = t.sibling
    }
    var ot = null,
        Yt = !1;

    function Un(t, r, s) {
        for (s = s.child; s !== null;) Bh(t, r, s), s = s.sibling
    }

    function Bh(t, r, s) {
        if (tn && typeof tn.onCommitFiberUnmount == "function") try {
            tn.onCommitFiberUnmount(ns, s)
        } catch {}
        switch (s.tag) {
            case 5:
                ct || ao(s, r);
            case 6:
                var l = ot,
                    f = Yt;
                ot = null, Un(t, r, s), ot = l, Yt = f, ot !== null && (Yt ? (t = ot, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : ot.removeChild(s.stateNode));
                break;
            case 18:
                ot !== null && (Yt ? (t = ot, s = s.stateNode, t.nodeType === 8 ? Jl(t.parentNode, s) : t.nodeType === 1 && Jl(t, s), Wo(t)) : Jl(ot, s.stateNode));
                break;
            case 4:
                l = ot, f = Yt, ot = s.stateNode.containerInfo, Yt = !0, Un(t, r, s), ot = l, Yt = f;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ct && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                    f = l = l.next;
                    do {
                        var m = f,
                            x = m.destroy;
                        m = m.tag, x !== void 0 && (m & 2 || m & 4) && ju(s, r, x), f = f.next
                    } while (f !== l)
                }
                Un(t, r, s);
                break;
            case 1:
                if (!ct && (ao(s, r), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
                    l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount()
                } catch (T) {
                    ze(s, r, T)
                }
                Un(t, r, s);
                break;
            case 21:
                Un(t, r, s);
                break;
            case 22:
                s.mode & 1 ? (ct = (l = ct) || s.memoizedState !== null, Un(t, r, s), ct = l) : Un(t, r, s);
                break;
            default:
                Un(t, r, s)
        }
    }

    function Uh(t) {
        var r = t.updateQueue;
        if (r !== null) {
            t.updateQueue = null;
            var s = t.stateNode;
            s === null && (s = t.stateNode = new cb), r.forEach(function(l) {
                var f = wb.bind(null, t, l);
                s.has(l) || (s.add(l), l.then(f, f))
            })
        }
    }

    function Xt(t, r) {
        var s = r.deletions;
        if (s !== null)
            for (var l = 0; l < s.length; l++) {
                var f = s[l];
                try {
                    var m = t,
                        x = r,
                        T = x;
                    e: for (; T !== null;) {
                        switch (T.tag) {
                            case 5:
                                ot = T.stateNode, Yt = !1;
                                break e;
                            case 3:
                                ot = T.stateNode.containerInfo, Yt = !0;
                                break e;
                            case 4:
                                ot = T.stateNode.containerInfo, Yt = !0;
                                break e
                        }
                        T = T.return
                    }
                    if (ot === null) throw Error(o(160));
                    Bh(m, x, f), ot = null, Yt = !1;
                    var k = f.alternate;
                    k !== null && (k.return = null), f.return = null
                } catch (V) {
                    ze(f, r, V)
                }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null;) Hh(r, t), r = r.sibling
    }

    function Hh(t, r) {
        var s = t.alternate,
            l = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Xt(r, t), sn(t), l & 4) {
                    try {
                        pi(3, t, t.return), Us(3, t)
                    } catch (fe) {
                        ze(t, t.return, fe)
                    }
                    try {
                        pi(5, t, t.return)
                    } catch (fe) {
                        ze(t, t.return, fe)
                    }
                }
                break;
            case 1:
                Xt(r, t), sn(t), l & 512 && s !== null && ao(s, s.return);
                break;
            case 5:
                if (Xt(r, t), sn(t), l & 512 && s !== null && ao(s, s.return), t.flags & 32) {
                    var f = t.stateNode;
                    try {
                        Do(f, "")
                    } catch (fe) {
                        ze(t, t.return, fe)
                    }
                }
                if (l & 4 && (f = t.stateNode, f != null)) {
                    var m = t.memoizedProps,
                        x = s !== null ? s.memoizedProps : m,
                        T = t.type,
                        k = t.updateQueue;
                    if (t.updateQueue = null, k !== null) try {
                        T === "input" && m.type === "radio" && m.name != null && Mt(f, m), yl(T, x);
                        var V = yl(T, m);
                        for (x = 0; x < k.length; x += 2) {
                            var X = k[x],
                                Z = k[x + 1];
                            X === "style" ? Cf(f, Z) : X === "dangerouslySetInnerHTML" ? Ef(f, Z) : X === "children" ? Do(f, Z) : D(f, X, Z, V)
                        }
                        switch (T) {
                            case "input":
                                Bt(f, m);
                                break;
                            case "textarea":
                                bf(f, m);
                                break;
                            case "select":
                                var G = f._wrapperState.wasMultiple;
                                f._wrapperState.wasMultiple = !!m.multiple;
                                var ae = m.value;
                                ae != null ? Ln(f, !!m.multiple, ae, !1) : G !== !!m.multiple && (m.defaultValue != null ? Ln(f, !!m.multiple, m.defaultValue, !0) : Ln(f, !!m.multiple, m.multiple ? [] : "", !1))
                        }
                        f[ni] = m
                    } catch (fe) {
                        ze(t, t.return, fe)
                    }
                }
                break;
            case 6:
                if (Xt(r, t), sn(t), l & 4) {
                    if (t.stateNode === null) throw Error(o(162));
                    f = t.stateNode, m = t.memoizedProps;
                    try {
                        f.nodeValue = m
                    } catch (fe) {
                        ze(t, t.return, fe)
                    }
                }
                break;
            case 3:
                if (Xt(r, t), sn(t), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
                    Wo(r.containerInfo)
                } catch (fe) {
                    ze(t, t.return, fe)
                }
                break;
            case 4:
                Xt(r, t), sn(t);
                break;
            case 13:
                Xt(r, t), sn(t), f = t.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (Uu = He())), l & 4 && Uh(t);
                break;
            case 22:
                if (X = s !== null && s.memoizedState !== null, t.mode & 1 ? (ct = (V = ct) || X, Xt(r, t), ct = V) : Xt(r, t), sn(t), l & 8192) {
                    if (V = t.memoizedState !== null, (t.stateNode.isHidden = V) && !X && t.mode & 1)
                        for (ue = t, X = t.child; X !== null;) {
                            for (Z = ue = X; ue !== null;) {
                                switch (G = ue, ae = G.child, G.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        pi(4, G, G.return);
                                        break;
                                    case 1:
                                        ao(G, G.return);
                                        var ce = G.stateNode;
                                        if (typeof ce.componentWillUnmount == "function") {
                                            l = G, s = G.return;
                                            try {
                                                r = l, ce.props = r.memoizedProps, ce.state = r.memoizedState, ce.componentWillUnmount()
                                            } catch (fe) {
                                                ze(l, s, fe)
                                            }
                                        }
                                        break;
                                    case 5:
                                        ao(G, G.return);
                                        break;
                                    case 22:
                                        if (G.memoizedState !== null) {
                                            Gh(Z);
                                            continue
                                        }
                                }
                                ae !== null ? (ae.return = G, ue = ae) : Gh(Z)
                            }
                            X = X.sibling
                        }
                    e: for (X = null, Z = t;;) {
                        if (Z.tag === 5) {
                            if (X === null) {
                                X = Z;
                                try {
                                    f = Z.stateNode, V ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (T = Z.stateNode, k = Z.memoizedProps.style, x = k != null && k.hasOwnProperty("display") ? k.display : null, T.style.display = Tf("display", x))
                                } catch (fe) {
                                    ze(t, t.return, fe)
                                }
                            }
                        } else if (Z.tag === 6) {
                            if (X === null) try {
                                Z.stateNode.nodeValue = V ? "" : Z.memoizedProps
                            } catch (fe) {
                                ze(t, t.return, fe)
                            }
                        } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === t) && Z.child !== null) {
                            Z.child.return = Z, Z = Z.child;
                            continue
                        }
                        if (Z === t) break e;
                        for (; Z.sibling === null;) {
                            if (Z.return === null || Z.return === t) break e;
                            X === Z && (X = null), Z = Z.return
                        }
                        X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling
                    }
                }
                break;
            case 19:
                Xt(r, t), sn(t), l & 4 && Uh(t);
                break;
            case 21:
                break;
            default:
                Xt(r, t), sn(t)
        }
    }

    function sn(t) {
        var r = t.flags;
        if (r & 2) {
            try {
                e: {
                    for (var s = t.return; s !== null;) {
                        if (Fh(s)) {
                            var l = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(o(160))
                }
                switch (l.tag) {
                    case 5:
                        var f = l.stateNode;
                        l.flags & 32 && (Do(f, ""), l.flags &= -33);
                        var m = zh(t);
                        Fu(t, m, f);
                        break;
                    case 3:
                    case 4:
                        var x = l.stateNode.containerInfo,
                            T = zh(t);
                        Vu(t, T, x);
                        break;
                    default:
                        throw Error(o(161))
                }
            }
            catch (k) {
                ze(t, t.return, k)
            }
            t.flags &= -3
        }
        r & 4096 && (t.flags &= -4097)
    }

    function fb(t, r, s) {
        ue = t, Wh(t)
    }

    function Wh(t, r, s) {
        for (var l = (t.mode & 1) !== 0; ue !== null;) {
            var f = ue,
                m = f.child;
            if (f.tag === 22 && l) {
                var x = f.memoizedState !== null || Bs;
                if (!x) {
                    var T = f.alternate,
                        k = T !== null && T.memoizedState !== null || ct;
                    T = Bs;
                    var V = ct;
                    if (Bs = x, (ct = k) && !V)
                        for (ue = f; ue !== null;) x = ue, k = x.child, x.tag === 22 && x.memoizedState !== null ? Yh(f) : k !== null ? (k.return = x, ue = k) : Yh(f);
                    for (; m !== null;) ue = m, Wh(m), m = m.sibling;
                    ue = f, Bs = T, ct = V
                }
                Kh(t)
            } else f.subtreeFlags & 8772 && m !== null ? (m.return = f, ue = m) : Kh(t)
        }
    }

    function Kh(t) {
        for (; ue !== null;) {
            var r = ue;
            if (r.flags & 8772) {
                var s = r.alternate;
                try {
                    if (r.flags & 8772) switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ct || Us(5, r);
                            break;
                        case 1:
                            var l = r.stateNode;
                            if (r.flags & 4 && !ct)
                                if (s === null) l.componentDidMount();
                                else {
                                    var f = r.elementType === r.type ? s.memoizedProps : Gt(r.type, s.memoizedProps);
                                    l.componentDidUpdate(f, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var m = r.updateQueue;
                            m !== null && Gp(r, m, l);
                            break;
                        case 3:
                            var x = r.updateQueue;
                            if (x !== null) {
                                if (s = null, r.child !== null) switch (r.child.tag) {
                                    case 5:
                                        s = r.child.stateNode;
                                        break;
                                    case 1:
                                        s = r.child.stateNode
                                }
                                Gp(r, x, s)
                            }
                            break;
                        case 5:
                            var T = r.stateNode;
                            if (s === null && r.flags & 4) {
                                s = T;
                                var k = r.memoizedProps;
                                switch (r.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        k.autoFocus && s.focus();
                                        break;
                                    case "img":
                                        k.src && (s.src = k.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) {
                                var V = r.alternate;
                                if (V !== null) {
                                    var X = V.memoizedState;
                                    if (X !== null) {
                                        var Z = X.dehydrated;
                                        Z !== null && Wo(Z)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(o(163))
                    }
                    ct || r.flags & 512 && Iu(r)
                } catch (G) {
                    ze(r, r.return, G)
                }
            }
            if (r === t) {
                ue = null;
                break
            }
            if (s = r.sibling, s !== null) {
                s.return = r.return, ue = s;
                break
            }
            ue = r.return
        }
    }

    function Gh(t) {
        for (; ue !== null;) {
            var r = ue;
            if (r === t) {
                ue = null;
                break
            }
            var s = r.sibling;
            if (s !== null) {
                s.return = r.return, ue = s;
                break
            }
            ue = r.return
        }
    }

    function Yh(t) {
        for (; ue !== null;) {
            var r = ue;
            try {
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var s = r.return;
                        try {
                            Us(4, r)
                        } catch (k) {
                            ze(r, s, k)
                        }
                        break;
                    case 1:
                        var l = r.stateNode;
                        if (typeof l.componentDidMount == "function") {
                            var f = r.return;
                            try {
                                l.componentDidMount()
                            } catch (k) {
                                ze(r, f, k)
                            }
                        }
                        var m = r.return;
                        try {
                            Iu(r)
                        } catch (k) {
                            ze(r, m, k)
                        }
                        break;
                    case 5:
                        var x = r.return;
                        try {
                            Iu(r)
                        } catch (k) {
                            ze(r, x, k)
                        }
                }
            } catch (k) {
                ze(r, r.return, k)
            }
            if (r === t) {
                ue = null;
                break
            }
            var T = r.sibling;
            if (T !== null) {
                T.return = r.return, ue = T;
                break
            }
            ue = r.return
        }
    }
    var pb = Math.ceil,
        Hs = F.ReactCurrentDispatcher,
        zu = F.ReactCurrentOwner,
        Dt = F.ReactCurrentBatchConfig,
        Te = 0,
        tt = null,
        Xe = null,
        it = 0,
        Et = 0,
        lo = In(0),
        Ze = 0,
        hi = null,
        xr = 0,
        Ws = 0,
        Bu = 0,
        mi = null,
        vt = null,
        Uu = 0,
        uo = 1 / 0,
        wn = null,
        Ks = !1,
        Hu = null,
        Hn = null,
        Gs = !1,
        Wn = null,
        Ys = 0,
        gi = 0,
        Wu = null,
        Xs = -1,
        Qs = 0;

    function ht() {
        return Te & 6 ? He() : Xs !== -1 ? Xs : Xs = He()
    }

    function Kn(t) {
        return t.mode & 1 ? Te & 2 && it !== 0 ? it & -it : Qw.transition !== null ? (Qs === 0 && (Qs = zf()), Qs) : (t = Me, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Qf(t.type)), t) : 1
    }

    function Qt(t, r, s, l) {
        if (50 < gi) throw gi = 0, Wu = null, Error(o(185));
        Fo(t, s, l), (!(Te & 2) || t !== tt) && (t === tt && (!(Te & 2) && (Ws |= s), Ze === 4 && Gn(t, it)), xt(t, l), s === 1 && Te === 0 && !(r.mode & 1) && (uo = He() + 500, Es && Fn()))
    }

    function xt(t, r) {
        var s = t.callbackNode;
        Qx(t, r);
        var l = is(t, t === tt ? it : 0);
        if (l === 0) s !== null && If(s), t.callbackNode = null, t.callbackPriority = 0;
        else if (r = l & -l, t.callbackPriority !== r) {
            if (s != null && If(s), r === 1) t.tag === 0 ? Xw(Qh.bind(null, t)) : Np(Qh.bind(null, t)), Ww(function() {
                !(Te & 6) && Fn()
            }), s = null;
            else {
                switch (Bf(l)) {
                    case 1:
                        s = El;
                        break;
                    case 4:
                        s = Vf;
                        break;
                    case 16:
                        s = ts;
                        break;
                    case 536870912:
                        s = Ff;
                        break;
                    default:
                        s = ts
                }
                s = om(s, Xh.bind(null, t))
            }
            t.callbackPriority = r, t.callbackNode = s
        }
    }

    function Xh(t, r) {
        if (Xs = -1, Qs = 0, Te & 6) throw Error(o(327));
        var s = t.callbackNode;
        if (co() && t.callbackNode !== s) return null;
        var l = is(t, t === tt ? it : 0);
        if (l === 0) return null;
        if (l & 30 || l & t.expiredLanes || r) r = qs(t, l);
        else {
            r = l;
            var f = Te;
            Te |= 2;
            var m = Zh();
            (tt !== t || it !== r) && (wn = null, uo = He() + 500, br(t, r));
            do try {
                gb();
                break
            } catch (T) {
                qh(t, T)
            }
            while (!0);
            uu(), Hs.current = m, Te = f, Xe !== null ? r = 0 : (tt = null, it = 0, r = Ze)
        }
        if (r !== 0) {
            if (r === 2 && (f = Tl(t), f !== 0 && (l = f, r = Ku(t, f))), r === 1) throw s = hi, br(t, 0), Gn(t, l), xt(t, He()), s;
            if (r === 6) Gn(t, l);
            else {
                if (f = t.current.alternate, !(l & 30) && !hb(f) && (r = qs(t, l), r === 2 && (m = Tl(t), m !== 0 && (l = m, r = Ku(t, m))), r === 1)) throw s = hi, br(t, 0), Gn(t, l), xt(t, He()), s;
                switch (t.finishedWork = f, t.finishedLanes = l, r) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 2:
                        Sr(t, vt, wn);
                        break;
                    case 3:
                        if (Gn(t, l), (l & 130023424) === l && (r = Uu + 500 - He(), 10 < r)) {
                            if (is(t, 0) !== 0) break;
                            if (f = t.suspendedLanes, (f & l) !== l) {
                                ht(), t.pingedLanes |= t.suspendedLanes & f;
                                break
                            }
                            t.timeoutHandle = Zl(Sr.bind(null, t, vt, wn), r);
                            break
                        }
                        Sr(t, vt, wn);
                        break;
                    case 4:
                        if (Gn(t, l), (l & 4194240) === l) break;
                        for (r = t.eventTimes, f = -1; 0 < l;) {
                            var x = 31 - Ht(l);
                            m = 1 << x, x = r[x], x > f && (f = x), l &= ~m
                        }
                        if (l = f, l = He() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * pb(l / 1960)) - l, 10 < l) {
                            t.timeoutHandle = Zl(Sr.bind(null, t, vt, wn), l);
                            break
                        }
                        Sr(t, vt, wn);
                        break;
                    case 5:
                        Sr(t, vt, wn);
                        break;
                    default:
                        throw Error(o(329))
                }
            }
        }
        return xt(t, He()), t.callbackNode === s ? Xh.bind(null, t) : null
    }

    function Ku(t, r) {
        var s = mi;
        return t.current.memoizedState.isDehydrated && (br(t, r).flags |= 256), t = qs(t, r), t !== 2 && (r = vt, vt = s, r !== null && Gu(r)), t
    }

    function Gu(t) {
        vt === null ? vt = t : vt.push.apply(vt, t)
    }

    function hb(t) {
        for (var r = t;;) {
            if (r.flags & 16384) {
                var s = r.updateQueue;
                if (s !== null && (s = s.stores, s !== null))
                    for (var l = 0; l < s.length; l++) {
                        var f = s[l],
                            m = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!Wt(m(), f)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
            else {
                if (r === t) break;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === t) return !0;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
        }
        return !0
    }

    function Gn(t, r) {
        for (r &= ~Bu, r &= ~Ws, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r;) {
            var s = 31 - Ht(r),
                l = 1 << s;
            t[s] = -1, r &= ~l
        }
    }

    function Qh(t) {
        if (Te & 6) throw Error(o(327));
        co();
        var r = is(t, 0);
        if (!(r & 1)) return xt(t, He()), null;
        var s = qs(t, r);
        if (t.tag !== 0 && s === 2) {
            var l = Tl(t);
            l !== 0 && (r = l, s = Ku(t, l))
        }
        if (s === 1) throw s = hi, br(t, 0), Gn(t, r), xt(t, He()), s;
        if (s === 6) throw Error(o(345));
        return t.finishedWork = t.current.alternate, t.finishedLanes = r, Sr(t, vt, wn), xt(t, He()), null
    }

    function Yu(t, r) {
        var s = Te;
        Te |= 1;
        try {
            return t(r)
        } finally {
            Te = s, Te === 0 && (uo = He() + 500, Es && Fn())
        }
    }

    function wr(t) {
        Wn !== null && Wn.tag === 0 && !(Te & 6) && co();
        var r = Te;
        Te |= 1;
        var s = Dt.transition,
            l = Me;
        try {
            if (Dt.transition = null, Me = 1, t) return t()
        } finally {
            Me = l, Dt.transition = s, Te = r, !(Te & 6) && Fn()
        }
    }

    function Xu() {
        Et = lo.current, _e(lo)
    }

    function br(t, r) {
        t.finishedWork = null, t.finishedLanes = 0;
        var s = t.timeoutHandle;
        if (s !== -1 && (t.timeoutHandle = -1, Hw(s)), Xe !== null)
            for (s = Xe.return; s !== null;) {
                var l = s;
                switch (ou(l), l.tag) {
                    case 1:
                        l = l.type.childContextTypes, l != null && Ss();
                        break;
                    case 3:
                        io(), _e(mt), _e(at), yu();
                        break;
                    case 5:
                        mu(l);
                        break;
                    case 4:
                        io();
                        break;
                    case 13:
                        _e(Ie);
                        break;
                    case 19:
                        _e(Ie);
                        break;
                    case 10:
                        cu(l.type._context);
                        break;
                    case 22:
                    case 23:
                        Xu()
                }
                s = s.return
            }
        if (tt = t, Xe = t = Yn(t.current, null), it = Et = r, Ze = 0, hi = null, Bu = Ws = xr = 0, vt = mi = null, gr !== null) {
            for (r = 0; r < gr.length; r++)
                if (s = gr[r], l = s.interleaved, l !== null) {
                    s.interleaved = null;
                    var f = l.next,
                        m = s.pending;
                    if (m !== null) {
                        var x = m.next;
                        m.next = f, l.next = x
                    }
                    s.pending = l
                }
            gr = null
        }
        return t
    }

    function qh(t, r) {
        do {
            var s = Xe;
            try {
                if (uu(), Ds.current = Is, Ns) {
                    for (var l = Ve.memoizedState; l !== null;) {
                        var f = l.queue;
                        f !== null && (f.pending = null), l = l.next
                    }
                    Ns = !1
                }
                if (vr = 0, et = qe = Ve = null, li = !1, ui = 0, zu.current = null, s === null || s.return === null) {
                    Ze = 1, hi = r, Xe = null;
                    break
                }
                e: {
                    var m = t,
                        x = s.return,
                        T = s,
                        k = r;
                    if (r = it, T.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
                        var V = k,
                            X = T,
                            Z = X.tag;
                        if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
                            var G = X.alternate;
                            G ? (X.updateQueue = G.updateQueue, X.memoizedState = G.memoizedState, X.lanes = G.lanes) : (X.updateQueue = null, X.memoizedState = null)
                        }
                        var ae = Sh(x);
                        if (ae !== null) {
                            ae.flags &= -257, Ph(ae, x, T, m, r), ae.mode & 1 && bh(m, V, r), r = ae, k = V;
                            var ce = r.updateQueue;
                            if (ce === null) {
                                var fe = new Set;
                                fe.add(k), r.updateQueue = fe
                            } else ce.add(k);
                            break e
                        } else {
                            if (!(r & 1)) {
                                bh(m, V, r), Qu();
                                break e
                            }
                            k = Error(o(426))
                        }
                    } else if (je && T.mode & 1) {
                        var We = Sh(x);
                        if (We !== null) {
                            !(We.flags & 65536) && (We.flags |= 256), Ph(We, x, T, m, r), au(so(k, T));
                            break e
                        }
                    }
                    m = k = so(k, T),
                    Ze !== 4 && (Ze = 2),
                    mi === null ? mi = [m] : mi.push(m),
                    m = x;do {
                        switch (m.tag) {
                            case 3:
                                m.flags |= 65536, r &= -r, m.lanes |= r;
                                var N = xh(m, k, r);
                                Kp(m, N);
                                break e;
                            case 1:
                                T = k;
                                var A = m.type,
                                    j = m.stateNode;
                                if (!(m.flags & 128) && (typeof A.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Hn === null || !Hn.has(j)))) {
                                    m.flags |= 65536, r &= -r, m.lanes |= r;
                                    var te = wh(m, T, r);
                                    Kp(m, te);
                                    break e
                                }
                        }
                        m = m.return
                    } while (m !== null)
                }
                em(s)
            } catch (pe) {
                r = pe, Xe === s && s !== null && (Xe = s = s.return);
                continue
            }
            break
        } while (!0)
    }

    function Zh() {
        var t = Hs.current;
        return Hs.current = Is, t === null ? Is : t
    }

    function Qu() {
        (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), tt === null || !(xr & 268435455) && !(Ws & 268435455) || Gn(tt, it)
    }

    function qs(t, r) {
        var s = Te;
        Te |= 2;
        var l = Zh();
        (tt !== t || it !== r) && (wn = null, br(t, r));
        do try {
            mb();
            break
        } catch (f) {
            qh(t, f)
        }
        while (!0);
        if (uu(), Te = s, Hs.current = l, Xe !== null) throw Error(o(261));
        return tt = null, it = 0, Ze
    }

    function mb() {
        for (; Xe !== null;) Jh(Xe)
    }

    function gb() {
        for (; Xe !== null && !zx();) Jh(Xe)
    }

    function Jh(t) {
        var r = rm(t.alternate, t, Et);
        t.memoizedProps = t.pendingProps, r === null ? em(t) : Xe = r, zu.current = null
    }

    function em(t) {
        var r = t;
        do {
            var s = r.alternate;
            if (t = r.return, r.flags & 32768) {
                if (s = ub(s, r), s !== null) {
                    s.flags &= 32767, Xe = s;
                    return
                }
                if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
                else {
                    Ze = 6, Xe = null;
                    return
                }
            } else if (s = lb(s, r, Et), s !== null) {
                Xe = s;
                return
            }
            if (r = r.sibling, r !== null) {
                Xe = r;
                return
            }
            Xe = r = t
        } while (r !== null);
        Ze === 0 && (Ze = 5)
    }

    function Sr(t, r, s) {
        var l = Me,
            f = Dt.transition;
        try {
            Dt.transition = null, Me = 1, yb(t, r, s, l)
        } finally {
            Dt.transition = f, Me = l
        }
        return null
    }

    function yb(t, r, s, l) {
        do co(); while (Wn !== null);
        if (Te & 6) throw Error(o(327));
        s = t.finishedWork;
        var f = t.finishedLanes;
        if (s === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(o(177));
        t.callbackNode = null, t.callbackPriority = 0;
        var m = s.lanes | s.childLanes;
        if (qx(t, m), t === tt && (Xe = tt = null, it = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || Gs || (Gs = !0, om(ts, function() {
                return co(), null
            })), m = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || m) {
            m = Dt.transition, Dt.transition = null;
            var x = Me;
            Me = 1;
            var T = Te;
            Te |= 4, zu.current = null, db(t, s), Hh(s, t), jw(Ql), ls = !!Xl, Ql = Xl = null, t.current = s, fb(s), Bx(), Te = T, Me = x, Dt.transition = m
        } else t.current = s;
        if (Gs && (Gs = !1, Wn = t, Ys = f), m = t.pendingLanes, m === 0 && (Hn = null), Wx(s.stateNode), xt(t, He()), r !== null)
            for (l = t.onRecoverableError, s = 0; s < r.length; s++) f = r[s], l(f.value, {
                componentStack: f.stack,
                digest: f.digest
            });
        if (Ks) throw Ks = !1, t = Hu, Hu = null, t;
        return Ys & 1 && t.tag !== 0 && co(), m = t.pendingLanes, m & 1 ? t === Wu ? gi++ : (gi = 0, Wu = t) : gi = 0, Fn(), null
    }

    function co() {
        if (Wn !== null) {
            var t = Bf(Ys),
                r = Dt.transition,
                s = Me;
            try {
                if (Dt.transition = null, Me = 16 > t ? 16 : t, Wn === null) var l = !1;
                else {
                    if (t = Wn, Wn = null, Ys = 0, Te & 6) throw Error(o(331));
                    var f = Te;
                    for (Te |= 4, ue = t.current; ue !== null;) {
                        var m = ue,
                            x = m.child;
                        if (ue.flags & 16) {
                            var T = m.deletions;
                            if (T !== null) {
                                for (var k = 0; k < T.length; k++) {
                                    var V = T[k];
                                    for (ue = V; ue !== null;) {
                                        var X = ue;
                                        switch (X.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                pi(8, X, m)
                                        }
                                        var Z = X.child;
                                        if (Z !== null) Z.return = X, ue = Z;
                                        else
                                            for (; ue !== null;) {
                                                X = ue;
                                                var G = X.sibling,
                                                    ae = X.return;
                                                if (Vh(X), X === V) {
                                                    ue = null;
                                                    break
                                                }
                                                if (G !== null) {
                                                    G.return = ae, ue = G;
                                                    break
                                                }
                                                ue = ae
                                            }
                                    }
                                }
                                var ce = m.alternate;
                                if (ce !== null) {
                                    var fe = ce.child;
                                    if (fe !== null) {
                                        ce.child = null;
                                        do {
                                            var We = fe.sibling;
                                            fe.sibling = null, fe = We
                                        } while (fe !== null)
                                    }
                                }
                                ue = m
                            }
                        }
                        if (m.subtreeFlags & 2064 && x !== null) x.return = m, ue = x;
                        else e: for (; ue !== null;) {
                            if (m = ue, m.flags & 2048) switch (m.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    pi(9, m, m.return)
                            }
                            var N = m.sibling;
                            if (N !== null) {
                                N.return = m.return, ue = N;
                                break e
                            }
                            ue = m.return
                        }
                    }
                    var A = t.current;
                    for (ue = A; ue !== null;) {
                        x = ue;
                        var j = x.child;
                        if (x.subtreeFlags & 2064 && j !== null) j.return = x, ue = j;
                        else e: for (x = A; ue !== null;) {
                            if (T = ue, T.flags & 2048) try {
                                switch (T.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Us(9, T)
                                }
                            } catch (pe) {
                                ze(T, T.return, pe)
                            }
                            if (T === x) {
                                ue = null;
                                break e
                            }
                            var te = T.sibling;
                            if (te !== null) {
                                te.return = T.return, ue = te;
                                break e
                            }
                            ue = T.return
                        }
                    }
                    if (Te = f, Fn(), tn && typeof tn.onPostCommitFiberRoot == "function") try {
                        tn.onPostCommitFiberRoot(ns, t)
                    } catch {}
                    l = !0
                }
                return l
            } finally {
                Me = s, Dt.transition = r
            }
        }
        return !1
    }

    function tm(t, r, s) {
        r = so(s, r), r = xh(t, r, 1), t = Bn(t, r, 1), r = ht(), t !== null && (Fo(t, 1, r), xt(t, r))
    }

    function ze(t, r, s) {
        if (t.tag === 3) tm(t, t, s);
        else
            for (; r !== null;) {
                if (r.tag === 3) {
                    tm(r, t, s);
                    break
                } else if (r.tag === 1) {
                    var l = r.stateNode;
                    if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hn === null || !Hn.has(l))) {
                        t = so(s, t), t = wh(r, t, 1), r = Bn(r, t, 1), t = ht(), r !== null && (Fo(r, 1, t), xt(r, t));
                        break
                    }
                }
                r = r.return
            }
    }

    function vb(t, r, s) {
        var l = t.pingCache;
        l !== null && l.delete(r), r = ht(), t.pingedLanes |= t.suspendedLanes & s, tt === t && (it & s) === s && (Ze === 4 || Ze === 3 && (it & 130023424) === it && 500 > He() - Uu ? br(t, 0) : Bu |= s), xt(t, r)
    }

    function nm(t, r) {
        r === 0 && (t.mode & 1 ? (r = os, os <<= 1, !(os & 130023424) && (os = 4194304)) : r = 1);
        var s = ht();
        t = yn(t, r), t !== null && (Fo(t, r, s), xt(t, s))
    }

    function xb(t) {
        var r = t.memoizedState,
            s = 0;
        r !== null && (s = r.retryLane), nm(t, s)
    }

    function wb(t, r) {
        var s = 0;
        switch (t.tag) {
            case 13:
                var l = t.stateNode,
                    f = t.memoizedState;
                f !== null && (s = f.retryLane);
                break;
            case 19:
                l = t.stateNode;
                break;
            default:
                throw Error(o(314))
        }
        l !== null && l.delete(r), nm(t, s)
    }
    var rm;
    rm = function(t, r, s) {
        if (t !== null)
            if (t.memoizedProps !== r.pendingProps || mt.current) yt = !0;
            else {
                if (!(t.lanes & s) && !(r.flags & 128)) return yt = !1, ab(t, r, s);
                yt = !!(t.flags & 131072)
            }
        else yt = !1, je && r.flags & 1048576 && Op(r, Cs, r.index);
        switch (r.lanes = 0, r.tag) {
            case 2:
                var l = r.type;
                zs(t, r), t = r.pendingProps;
                var f = Zr(r, at.current);
                oo(r, s), f = wu(null, r, l, t, f, s);
                var m = bu();
                return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, gt(l) ? (m = !0, Ps(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, pu(r), f.updater = Vs, r.stateNode = f, f._reactInternals = r, $u(r, l, t, s), r = Au(null, r, l, !0, m, s)) : (r.tag = 0, je && m && ru(r), pt(null, r, f, s), r = r.child), r;
            case 16:
                l = r.elementType;
                e: {
                    switch (zs(t, r), t = r.pendingProps, f = l._init, l = f(l._payload), r.type = l, f = r.tag = Sb(l), t = Gt(l, t), f) {
                        case 0:
                            r = Lu(null, r, l, t, s);
                            break e;
                        case 1:
                            r = Mh(null, r, l, t, s);
                            break e;
                        case 11:
                            r = Eh(null, r, l, t, s);
                            break e;
                        case 14:
                            r = Th(null, r, l, Gt(l.type, t), s);
                            break e
                    }
                    throw Error(o(306, l, ""))
                }
                return r;
            case 0:
                return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : Gt(l, f), Lu(t, r, l, f, s);
            case 1:
                return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : Gt(l, f), Mh(t, r, l, f, s);
            case 3:
                e: {
                    if (Lh(r), t === null) throw Error(o(387));l = r.pendingProps,
                    m = r.memoizedState,
                    f = m.element,
                    Wp(t, r),
                    Rs(r, l, null, s);
                    var x = r.memoizedState;
                    if (l = x.element, m.isDehydrated)
                        if (m = {
                                element: l,
                                isDehydrated: !1,
                                cache: x.cache,
                                pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                                transitions: x.transitions
                            }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
                            f = so(Error(o(423)), r), r = Ah(t, r, l, s, f);
                            break e
                        } else if (l !== f) {
                        f = so(Error(o(424)), r), r = Ah(t, r, l, s, f);
                        break e
                    } else
                        for (Pt = jn(r.stateNode.containerInfo.firstChild), St = r, je = !0, Kt = null, s = Up(r, null, l, s), r.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                    else {
                        if (to(), l === f) {
                            r = xn(t, r, s);
                            break e
                        }
                        pt(t, r, l, s)
                    }
                    r = r.child
                }
                return r;
            case 5:
                return Yp(r), t === null && su(r), l = r.type, f = r.pendingProps, m = t !== null ? t.memoizedProps : null, x = f.children, ql(l, f) ? x = null : m !== null && ql(l, m) && (r.flags |= 32), kh(t, r), pt(t, r, x, s), r.child;
            case 6:
                return t === null && su(r), null;
            case 13:
                return Rh(t, r, s);
            case 4:
                return hu(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = no(r, null, l, s) : pt(t, r, l, s), r.child;
            case 11:
                return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : Gt(l, f), Eh(t, r, l, f, s);
            case 7:
                return pt(t, r, r.pendingProps, s), r.child;
            case 8:
                return pt(t, r, r.pendingProps.children, s), r.child;
            case 12:
                return pt(t, r, r.pendingProps.children, s), r.child;
            case 10:
                e: {
                    if (l = r.type._context, f = r.pendingProps, m = r.memoizedProps, x = f.value, Le(Ms, l._currentValue), l._currentValue = x, m !== null)
                        if (Wt(m.value, x)) {
                            if (m.children === f.children && !mt.current) {
                                r = xn(t, r, s);
                                break e
                            }
                        } else
                            for (m = r.child, m !== null && (m.return = r); m !== null;) {
                                var T = m.dependencies;
                                if (T !== null) {
                                    x = m.child;
                                    for (var k = T.firstContext; k !== null;) {
                                        if (k.context === l) {
                                            if (m.tag === 1) {
                                                k = vn(-1, s & -s), k.tag = 2;
                                                var V = m.updateQueue;
                                                if (V !== null) {
                                                    V = V.shared;
                                                    var X = V.pending;
                                                    X === null ? k.next = k : (k.next = X.next, X.next = k), V.pending = k
                                                }
                                            }
                                            m.lanes |= s, k = m.alternate, k !== null && (k.lanes |= s), du(m.return, s, r), T.lanes |= s;
                                            break
                                        }
                                        k = k.next
                                    }
                                } else if (m.tag === 10) x = m.type === r.type ? null : m.child;
                                else if (m.tag === 18) {
                                    if (x = m.return, x === null) throw Error(o(341));
                                    x.lanes |= s, T = x.alternate, T !== null && (T.lanes |= s), du(x, s, r), x = m.sibling
                                } else x = m.child;
                                if (x !== null) x.return = m;
                                else
                                    for (x = m; x !== null;) {
                                        if (x === r) {
                                            x = null;
                                            break
                                        }
                                        if (m = x.sibling, m !== null) {
                                            m.return = x.return, x = m;
                                            break
                                        }
                                        x = x.return
                                    }
                                m = x
                            }
                    pt(t, r, f.children, s),
                    r = r.child
                }
                return r;
            case 9:
                return f = r.type, l = r.pendingProps.children, oo(r, s), f = Rt(f), l = l(f), r.flags |= 1, pt(t, r, l, s), r.child;
            case 14:
                return l = r.type, f = Gt(l, r.pendingProps), f = Gt(l.type, f), Th(t, r, l, f, s);
            case 15:
                return Ch(t, r, r.type, r.pendingProps, s);
            case 17:
                return l = r.type, f = r.pendingProps, f = r.elementType === l ? f : Gt(l, f), zs(t, r), r.tag = 1, gt(l) ? (t = !0, Ps(r)) : t = !1, oo(r, s), yh(r, l, f), $u(r, l, f, s), Au(null, r, l, !0, t, s);
            case 19:
                return Dh(t, r, s);
            case 22:
                return $h(t, r, s)
        }
        throw Error(o(156, r.tag))
    };

    function om(t, r) {
        return jf(t, r)
    }

    function bb(t, r, s, l) {
        this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Nt(t, r, s, l) {
        return new bb(t, r, s, l)
    }

    function qu(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Sb(t) {
        if (typeof t == "function") return qu(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof, t === B) return 11;
            if (t === z) return 14
        }
        return 2
    }

    function Yn(t, r) {
        var s = t.alternate;
        return s === null ? (s = Nt(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s
    }

    function Zs(t, r, s, l, f, m) {
        var x = 2;
        if (l = t, typeof t == "function") qu(t) && (x = 1);
        else if (typeof t == "string") x = 5;
        else e: switch (t) {
            case oe:
                return Pr(s.children, f, m, r);
            case E:
                x = 8, f |= 8;
                break;
            case J:
                return t = Nt(12, s, r, f | 2), t.elementType = J, t.lanes = m, t;
            case O:
                return t = Nt(13, s, r, f), t.elementType = O, t.lanes = m, t;
            case W:
                return t = Nt(19, s, r, f), t.elementType = W, t.lanes = m, t;
            case ee:
                return Js(s, f, m, r);
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case se:
                        x = 10;
                        break e;
                    case H:
                        x = 9;
                        break e;
                    case B:
                        x = 11;
                        break e;
                    case z:
                        x = 14;
                        break e;
                    case re:
                        x = 16, l = null;
                        break e
                }
                throw Error(o(130, t == null ? t : typeof t, ""))
        }
        return r = Nt(x, s, r, f), r.elementType = t, r.type = l, r.lanes = m, r
    }

    function Pr(t, r, s, l) {
        return t = Nt(7, t, l, r), t.lanes = s, t
    }

    function Js(t, r, s, l) {
        return t = Nt(22, t, l, r), t.elementType = ee, t.lanes = s, t.stateNode = {
            isHidden: !1
        }, t
    }

    function Zu(t, r, s) {
        return t = Nt(6, t, null, r), t.lanes = s, t
    }

    function Ju(t, r, s) {
        return r = Nt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, r
    }

    function Pb(t, r, s, l, f) {
        this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = l, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null
    }

    function ec(t, r, s, l, f, m, x, T, k) {
        return t = new Pb(t, r, s, T, k), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Nt(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = {
            element: l,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, pu(m), t
    }

    function Eb(t, r, s) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Y,
            key: l == null ? null : "" + l,
            children: t,
            containerInfo: r,
            implementation: s
        }
    }

    function im(t) {
        if (!t) return Vn;
        t = t._reactInternals;
        e: {
            if (dr(t) !== t || t.tag !== 1) throw Error(o(170));
            var r = t;do {
                switch (r.tag) {
                    case 3:
                        r = r.stateNode.context;
                        break e;
                    case 1:
                        if (gt(r.type)) {
                            r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                r = r.return
            } while (r !== null);
            throw Error(o(171))
        }
        if (t.tag === 1) {
            var s = t.type;
            if (gt(s)) return _p(t, s, r)
        }
        return r
    }

    function sm(t, r, s, l, f, m, x, T, k) {
        return t = ec(s, l, !0, t, f, m, x, T, k), t.context = im(null), s = t.current, l = ht(), f = Kn(s), m = vn(l, f), m.callback = r ? ? null, Bn(s, m, f), t.current.lanes = f, Fo(t, f, l), xt(t, l), t
    }

    function ea(t, r, s, l) {
        var f = r.current,
            m = ht(),
            x = Kn(f);
        return s = im(s), r.context === null ? r.context = s : r.pendingContext = s, r = vn(m, x), r.payload = {
            element: t
        }, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = Bn(f, r, x), t !== null && (Qt(t, f, x, m), As(t, f, x)), x
    }

    function ta(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
            case 5:
                return t.child.stateNode;
            default:
                return t.child.stateNode
        }
    }

    function am(t, r) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < r ? s : r
        }
    }

    function tc(t, r) {
        am(t, r), (t = t.alternate) && am(t, r)
    }
    var lm = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    };

    function nc(t) {
        this._internalRoot = t
    }
    na.prototype.render = nc.prototype.render = function(t) {
        var r = this._internalRoot;
        if (r === null) throw Error(o(409));
        ea(t, r, null, null)
    }, na.prototype.unmount = nc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var r = t.containerInfo;
            wr(function() {
                ea(null, t, null, null)
            }), r[pn] = null
        }
    };

    function na(t) {
        this._internalRoot = t
    }
    na.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var r = Wf();
            t = {
                blockedOn: null,
                target: t,
                priority: r
            };
            for (var s = 0; s < Dn.length && r !== 0 && r < Dn[s].priority; s++);
            Dn.splice(s, 0, t), s === 0 && Yf(t)
        }
    };

    function rc(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function ra(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }

    function um() {}

    function Tb(t, r, s, l, f) {
        if (f) {
            if (typeof l == "function") {
                var m = l;
                l = function() {
                    var V = ta(x);
                    m.call(V)
                }
            }
            var x = sm(r, l, t, 0, null, !1, !1, "", um);
            return t._reactRootContainer = x, t[pn] = x.current, ei(t.nodeType === 8 ? t.parentNode : t), wr(), x
        }
        for (; f = t.lastChild;) t.removeChild(f);
        if (typeof l == "function") {
            var T = l;
            l = function() {
                var V = ta(k);
                T.call(V)
            }
        }
        var k = ec(t, 0, !1, null, null, !1, !1, "", um);
        return t._reactRootContainer = k, t[pn] = k.current, ei(t.nodeType === 8 ? t.parentNode : t), wr(function() {
            ea(r, k, s, l)
        }), k
    }

    function oa(t, r, s, l, f) {
        var m = s._reactRootContainer;
        if (m) {
            var x = m;
            if (typeof f == "function") {
                var T = f;
                f = function() {
                    var k = ta(x);
                    T.call(k)
                }
            }
            ea(r, x, t, f)
        } else x = Tb(s, r, t, f, l);
        return ta(x)
    }
    Uf = function(t) {
        switch (t.tag) {
            case 3:
                var r = t.stateNode;
                if (r.current.memoizedState.isDehydrated) {
                    var s = Vo(r.pendingLanes);
                    s !== 0 && ($l(r, s | 1), xt(r, He()), !(Te & 6) && (uo = He() + 500, Fn()))
                }
                break;
            case 13:
                wr(function() {
                    var l = yn(t, 1);
                    if (l !== null) {
                        var f = ht();
                        Qt(l, t, 1, f)
                    }
                }), tc(t, 1)
        }
    }, kl = function(t) {
        if (t.tag === 13) {
            var r = yn(t, 134217728);
            if (r !== null) {
                var s = ht();
                Qt(r, t, 134217728, s)
            }
            tc(t, 134217728)
        }
    }, Hf = function(t) {
        if (t.tag === 13) {
            var r = Kn(t),
                s = yn(t, r);
            if (s !== null) {
                var l = ht();
                Qt(s, t, r, l)
            }
            tc(t, r)
        }
    }, Wf = function() {
        return Me
    }, Kf = function(t, r) {
        var s = Me;
        try {
            return Me = t, r()
        } finally {
            Me = s
        }
    }, wl = function(t, r, s) {
        switch (r) {
            case "input":
                if (Bt(t, s), r = s.name, s.type === "radio" && r != null) {
                    for (s = t; s.parentNode;) s = s.parentNode;
                    for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
                        var l = s[r];
                        if (l !== t && l.form === t.form) {
                            var f = bs(l);
                            if (!f) throw Error(o(90));
                            en(l), Bt(l, f)
                        }
                    }
                }
                break;
            case "textarea":
                bf(t, s);
                break;
            case "select":
                r = s.value, r != null && Ln(t, !!s.multiple, r, !1)
        }
    }, Lf = Yu, Af = wr;
    var Cb = {
            usingClientEntryPoint: !1,
            Events: [ri, Qr, bs, kf, Mf, Yu]
        },
        yi = {
            findFiberByHostInstance: fr,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        $b = {
            bundleType: yi.bundleType,
            version: yi.version,
            rendererPackageName: yi.rendererPackageName,
            rendererConfig: yi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: F.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(t) {
                return t = Nf(t), t === null ? null : t.stateNode
            },
            findFiberByHostInstance: yi.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ia.isDisabled && ia.supportsFiber) try {
            ns = ia.inject($b), tn = ia
        } catch {}
    }
    return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cb, wt.createPortal = function(t, r) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!rc(r)) throw Error(o(200));
        return Eb(t, r, null, s)
    }, wt.createRoot = function(t, r) {
        if (!rc(t)) throw Error(o(299));
        var s = !1,
            l = "",
            f = lm;
        return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = ec(t, 1, !1, null, null, s, !1, l, f), t[pn] = r.current, ei(t.nodeType === 8 ? t.parentNode : t), new nc(r)
    }, wt.findDOMNode = function(t) {
        if (t == null) return null;
        if (t.nodeType === 1) return t;
        var r = t._reactInternals;
        if (r === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = Nf(r), t = t === null ? null : t.stateNode, t
    }, wt.flushSync = function(t) {
        return wr(t)
    }, wt.hydrate = function(t, r, s) {
        if (!ra(r)) throw Error(o(200));
        return oa(null, t, r, !0, s)
    }, wt.hydrateRoot = function(t, r, s) {
        if (!rc(t)) throw Error(o(405));
        var l = s != null && s.hydratedSources || null,
            f = !1,
            m = "",
            x = lm;
        if (s != null && (s.unstable_strictMode === !0 && (f = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), r = sm(r, null, t, 1, s ? ? null, f, !1, m, x), t[pn] = r.current, ei(t), l)
            for (t = 0; t < l.length; t++) s = l[t], f = s._getVersion, f = f(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, f] : r.mutableSourceEagerHydrationData.push(s, f);
        return new na(r)
    }, wt.render = function(t, r, s) {
        if (!ra(r)) throw Error(o(200));
        return oa(null, t, r, !1, s)
    }, wt.unmountComponentAtNode = function(t) {
        if (!ra(t)) throw Error(o(40));
        return t._reactRootContainer ? (wr(function() {
            oa(null, null, t, !1, function() {
                t._reactRootContainer = null, t[pn] = null
            })
        }), !0) : !1
    }, wt.unstable_batchedUpdates = Yu, wt.unstable_renderSubtreeIntoContainer = function(t, r, s, l) {
        if (!ra(s)) throw Error(o(200));
        if (t == null || t._reactInternals === void 0) throw Error(o(38));
        return oa(t, r, s, !1, l)
    }, wt.version = "18.3.1-next-f1338f8080-20240426", wt
}
var ym;

function Uy() {
    if (ym) return sc.exports;
    ym = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (n) {
            console.error(n)
        }
    }
    return e(), sc.exports = Db(), sc.exports
}
var vm;

function Nb() {
    if (vm) return aa;
    vm = 1;
    var e = Uy();
    return aa.createRoot = e.createRoot, aa.hydrateRoot = e.hydrateRoot, aa
}
var Ob = Nb();

function vd(e = {}) {
    const {
        strict: n = !0,
        errorMessage: o = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
        name: i
    } = e, a = S.createContext(void 0);
    a.displayName = i;

    function c() {
        var u;
        const d = S.useContext(a);
        if (!d && n) {
            const p = new Error(o);
            throw p.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, p, c), p
        }
        return d
    }
    return [a.Provider, c, a]
}

function jb(e) {
    return {
        UNSAFE_getDOMNode() {
            return e.current
        }
    }
}

function Mo(e) {
    const n = S.useRef(null);
    return S.useImperativeHandle(e, () => n.current), n
}

function Ib(e) {
    return typeof e == "function"
}
var Je = e => e ? "true" : void 0;

function Hy(e) {
    var n, o, i = "";
    if (typeof e == "string" || typeof e == "number") i += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (n = 0; n < e.length; n++) e[n] && (o = Hy(e[n])) && (i && (i += " "), i += o);
        else
            for (n in e) e[n] && (i && (i += " "), i += n);
    return i
}

function Nr(...e) {
    for (var n = 0, o, i, a = ""; n < e.length;)(o = e[n++]) && (i = Hy(o)) && (a && (a += " "), a += i);
    return a
}
var xm = {};

function xd(e, n, ...o) {
    const a = `[Next UI]${n?` [${n}]`:" "}: ${e}`;
    typeof console > "u" || xm[a] || (xm[a] = !0)
}
var Vb = Object.create,
    Wy = Object.defineProperty,
    Fb = Object.getOwnPropertyDescriptor,
    Ky = Object.getOwnPropertyNames,
    zb = Object.getPrototypeOf,
    Bb = Object.prototype.hasOwnProperty,
    Gy = (e, n) => function() {
        return n || (0, e[Ky(e)[0]])((n = {
            exports: {}
        }).exports, n), n.exports
    },
    Ub = (e, n, o, i) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let a of Ky(n)) !Bb.call(e, a) && a !== o && Wy(e, a, {
                get: () => n[a],
                enumerable: !(i = Fb(n, a)) || i.enumerable
            });
        return e
    },
    Hb = (e, n, o) => (o = e != null ? Vb(zb(e)) : {}, Ub(!e || !e.__esModule ? Wy(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e)),
    Wb = Gy({
        "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js" (e) {
            var n = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                i = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                c = Symbol.for("react.profiler"),
                u = Symbol.for("react.provider"),
                d = Symbol.for("react.context"),
                p = Symbol.for("react.forward_ref"),
                h = Symbol.for("react.suspense"),
                g = Symbol.for("react.memo"),
                y = Symbol.for("react.lazy"),
                v = Symbol.iterator;

            function b(w) {
                return w === null || typeof w != "object" ? null : (w = v && w[v] || w["@@iterator"], typeof w == "function" ? w : null)
            }
            var P = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                C = Object.assign,
                L = {};

            function $(w, M, q) {
                this.props = w, this.context = M, this.refs = L, this.updater = q || P
            }
            $.prototype.isReactComponent = {}, $.prototype.setState = function(w, M) {
                if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, w, M, "setState")
            }, $.prototype.forceUpdate = function(w) {
                this.updater.enqueueForceUpdate(this, w, "forceUpdate")
            };

            function _() {}
            _.prototype = $.prototype;

            function D(w, M, q) {
                this.props = w, this.context = M, this.refs = L, this.updater = q || P
            }
            var F = D.prototype = new _;
            F.constructor = D, C(F, $.prototype), F.isPureReactComponent = !0;
            var U = Array.isArray,
                Y = Object.prototype.hasOwnProperty,
                oe = {
                    current: null
                },
                E = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function J(w, M, q) {
                var ne, ie = {},
                    le = null,
                    me = null;
                if (M != null)
                    for (ne in M.ref !== void 0 && (me = M.ref), M.key !== void 0 && (le = "" + M.key), M) Y.call(M, ne) && !E.hasOwnProperty(ne) && (ie[ne] = M[ne]);
                var he = arguments.length - 2;
                if (he === 1) ie.children = q;
                else if (1 < he) {
                    for (var de = Array(he), Ce = 0; Ce < he; Ce++) de[Ce] = arguments[Ce + 2];
                    ie.children = de
                }
                if (w && w.defaultProps)
                    for (ne in he = w.defaultProps, he) ie[ne] === void 0 && (ie[ne] = he[ne]);
                return {
                    $$typeof: n,
                    type: w,
                    key: le,
                    ref: me,
                    props: ie,
                    _owner: oe.current
                }
            }

            function se(w, M) {
                return {
                    $$typeof: n,
                    type: w.type,
                    key: M,
                    ref: w.ref,
                    props: w.props,
                    _owner: w._owner
                }
            }

            function H(w) {
                return typeof w == "object" && w !== null && w.$$typeof === n
            }

            function B(w) {
                var M = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + w.replace(/[=:]/g, function(q) {
                    return M[q]
                })
            }
            var O = /\/+/g;

            function W(w, M) {
                return typeof w == "object" && w !== null && w.key != null ? B("" + w.key) : M.toString(36)
            }

            function z(w, M, q, ne, ie) {
                var le = typeof w;
                (le === "undefined" || le === "boolean") && (w = null);
                var me = !1;
                if (w === null) me = !0;
                else switch (le) {
                    case "string":
                    case "number":
                        me = !0;
                        break;
                    case "object":
                        switch (w.$$typeof) {
                            case n:
                            case o:
                                me = !0
                        }
                }
                if (me) return me = w, ie = ie(me), w = ne === "" ? "." + W(me, 0) : ne, U(ie) ? (q = "", w != null && (q = w.replace(O, "$&/") + "/"), z(ie, M, q, "", function(Ce) {
                    return Ce
                })) : ie != null && (H(ie) && (ie = se(ie, q + (!ie.key || me && me.key === ie.key ? "" : ("" + ie.key).replace(O, "$&/") + "/") + w)), M.push(ie)), 1;
                if (me = 0, ne = ne === "" ? "." : ne + ":", U(w))
                    for (var he = 0; he < w.length; he++) {
                        le = w[he];
                        var de = ne + W(le, he);
                        me += z(le, M, q, de, ie)
                    } else if (de = b(w), typeof de == "function")
                        for (w = de.call(w), he = 0; !(le = w.next()).done;) le = le.value, de = ne + W(le, he++), me += z(le, M, q, de, ie);
                    else if (le === "object") throw M = String(w), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
                return me
            }

            function re(w, M, q) {
                if (w == null) return w;
                var ne = [],
                    ie = 0;
                return z(w, ne, "", "", function(le) {
                    return M.call(q, le, ie++)
                }), ne
            }

            function ee(w) {
                if (w._status === -1) {
                    var M = w._result;
                    M = M(), M.then(function(q) {
                        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = q)
                    }, function(q) {
                        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = q)
                    }), w._status === -1 && (w._status = 0, w._result = M)
                }
                if (w._status === 1) return w._result.default;
                throw w._result
            }
            var I = {
                    current: null
                },
                Q = {
                    transition: null
                },
                K = {
                    ReactCurrentDispatcher: I,
                    ReactCurrentBatchConfig: Q,
                    ReactCurrentOwner: oe
                };
            e.Children = {
                map: re,
                forEach: function(w, M, q) {
                    re(w, function() {
                        M.apply(this, arguments)
                    }, q)
                },
                count: function(w) {
                    var M = 0;
                    return re(w, function() {
                        M++
                    }), M
                },
                toArray: function(w) {
                    return re(w, function(M) {
                        return M
                    }) || []
                },
                only: function(w) {
                    if (!H(w)) throw Error("React.Children.only expected to receive a single React element child.");
                    return w
                }
            }, e.Component = $, e.Fragment = i, e.Profiler = c, e.PureComponent = D, e.StrictMode = a, e.Suspense = h, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, e.cloneElement = function(w, M, q) {
                if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
                var ne = C({}, w.props),
                    ie = w.key,
                    le = w.ref,
                    me = w._owner;
                if (M != null) {
                    if (M.ref !== void 0 && (le = M.ref, me = oe.current), M.key !== void 0 && (ie = "" + M.key), w.type && w.type.defaultProps) var he = w.type.defaultProps;
                    for (de in M) Y.call(M, de) && !E.hasOwnProperty(de) && (ne[de] = M[de] === void 0 && he !== void 0 ? he[de] : M[de])
                }
                var de = arguments.length - 2;
                if (de === 1) ne.children = q;
                else if (1 < de) {
                    he = Array(de);
                    for (var Ce = 0; Ce < de; Ce++) he[Ce] = arguments[Ce + 2];
                    ne.children = he
                }
                return {
                    $$typeof: n,
                    type: w.type,
                    key: ie,
                    ref: le,
                    props: ne,
                    _owner: me
                }
            }, e.createContext = function(w) {
                return w = {
                    $$typeof: d,
                    _currentValue: w,
                    _currentValue2: w,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }, w.Provider = {
                    $$typeof: u,
                    _context: w
                }, w.Consumer = w
            }, e.createElement = J, e.createFactory = function(w) {
                var M = J.bind(null, w);
                return M.type = w, M
            }, e.createRef = function() {
                return {
                    current: null
                }
            }, e.forwardRef = function(w) {
                return {
                    $$typeof: p,
                    render: w
                }
            }, e.isValidElement = H, e.lazy = function(w) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: w
                    },
                    _init: ee
                }
            }, e.memo = function(w, M) {
                return {
                    $$typeof: g,
                    type: w,
                    compare: M === void 0 ? null : M
                }
            }, e.startTransition = function(w) {
                var M = Q.transition;
                Q.transition = {};
                try {
                    w()
                } finally {
                    Q.transition = M
                }
            }, e.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, e.useCallback = function(w, M) {
                return I.current.useCallback(w, M)
            }, e.useContext = function(w) {
                return I.current.useContext(w)
            }, e.useDebugValue = function() {}, e.useDeferredValue = function(w) {
                return I.current.useDeferredValue(w)
            }, e.useEffect = function(w, M) {
                return I.current.useEffect(w, M)
            }, e.useId = function() {
                return I.current.useId()
            }, e.useImperativeHandle = function(w, M, q) {
                return I.current.useImperativeHandle(w, M, q)
            }, e.useInsertionEffect = function(w, M) {
                return I.current.useInsertionEffect(w, M)
            }, e.useLayoutEffect = function(w, M) {
                return I.current.useLayoutEffect(w, M)
            }, e.useMemo = function(w, M) {
                return I.current.useMemo(w, M)
            }, e.useReducer = function(w, M, q) {
                return I.current.useReducer(w, M, q)
            }, e.useRef = function(w) {
                return I.current.useRef(w)
            }, e.useState = function(w) {
                return I.current.useState(w)
            }, e.useSyncExternalStore = function(w, M, q) {
                return I.current.useSyncExternalStore(w, M, q)
            }, e.useTransition = function() {
                return I.current.useTransition()
            }, e.version = "18.2.0"
        }
    }),
    Kb = Gy({
        "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js" (e, n) {
            n.exports = Wb()
        }
    });
Hb(Kb());

function Gb(e) {
    return `${e}-${Math.floor(Math.random()*1e6)}`
}

function Xa(e) {
    if (!e || typeof e != "object") return "";
    try {
        return JSON.stringify(e)
    } catch {
        return ""
    }
}
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Yb(e, n, o) {
    return Math.min(Math.max(e, n), o)
}

function Xb(e, n) {
    if (e != null) {
        if (Ib(e)) {
            e(n);
            return
        }
        try {
            e.current = n
        } catch {
            throw new Error(`Cannot assign value '${n}' to ref '${e}'`)
        }
    }
}

function Qb(...e) {
    return n => {
        e.forEach(o => Xb(o, n))
    }
}
var qb = new Set(["id", "type", "style", "title", "role", "tabIndex", "htmlFor", "width", "height", "abbr", "accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "challenge", "charset", "checked", "cite", "class", "className", "cols", "colSpan", "command", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "dropzone", "encType", "enterKeyHint", "for", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "hidden", "high", "href", "hrefLang", "httpEquiv", "icon", "inputMode", "isMap", "itemId", "itemProp", "itemRef", "itemScope", "itemType", "kind", "label", "lang", "list", "loop", "manifest", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radioGroup", "referrerPolicy", "readOnly", "rel", "required", "rows", "rowSpan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "slot", "sortable", "span", "spellCheck", "src", "srcDoc", "srcSet", "start", "step", "target", "translate", "typeMustMatch", "useMap", "value", "wmode", "wrap"]),
    Zb = new Set(["onCopy", "onCut", "onPaste", "onLoad", "onError", "onWheel", "onScroll", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerUp", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"]),
    wm = /^(data-.*)$/,
    Jb = /^(aria-.*)$/,
    la = /^(on[A-Z].*)$/;

function bm(e, n = {}) {
    let {
        labelable: o = !0,
        enabled: i = !0,
        propNames: a,
        omitPropNames: c,
        omitEventNames: u,
        omitDataProps: d,
        omitEventProps: p
    } = n, h = {};
    if (!i) return e;
    for (const g in e) c != null && c.has(g) || u != null && u.has(g) && la.test(g) || la.test(g) && !Zb.has(g) || d && wm.test(g) || p && la.test(g) || (Object.prototype.hasOwnProperty.call(e, g) && (qb.has(g) || o && Jb.test(g) || a != null && a.has(g) || wm.test(g)) || la.test(g)) && (h[g] = e[g]);
    return h
}
var [eS, Qa] = vd({
    name: "ProviderContext",
    strict: !1
});
const tS = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    nS = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

function Yy(e) {
    if (Intl.Locale) {
        let o = new Intl.Locale(e).maximize(),
            i = typeof o.getTextInfo == "function" ? o.getTextInfo() : o.textInfo;
        if (i) return i.direction === "rtl";
        if (o.script) return tS.has(o.script)
    }
    let n = e.split("-")[0];
    return nS.has(n)
}
const wd = {
        prefix: String(Math.round(Math.random() * 1e10)),
        current: 0
    },
    Xy = Se.createContext(wd),
    rS = Se.createContext(!1);
let oS = !!(typeof window < "u" && window.document && window.document.createElement),
    uc = new WeakMap;

function iS(e = !1) {
    let n = S.useContext(Xy),
        o = S.useRef(null);
    if (o.current === null && !e) {
        var i, a;
        let c = (a = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (i = a.ReactCurrentOwner) === null || i === void 0 ? void 0 : i.current;
        if (c) {
            let u = uc.get(c);
            u == null ? uc.set(c, {
                id: n.current,
                state: c.memoizedState
            }) : c.memoizedState !== u.state && (n.current = u.id, uc.delete(c))
        }
        o.current = ++n.current
    }
    return o.current
}

function sS(e) {
    let n = S.useContext(Xy);
    n === wd && !oS && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let o = iS(!!e),
        i = `react-aria${n.prefix}`;
    return e || `${i}-${o}`
}

function aS(e) {
    let n = Se.useId(),
        [o] = S.useState(Ui()),
        i = o ? "react-aria" : `react-aria${wd.prefix}`;
    return e || `${i}-${n}`
}
const lS = typeof Se.useId == "function" ? aS : sS;

function uS() {
    return !1
}

function cS() {
    return !0
}

function dS(e) {
    return () => {}
}

function Ui() {
    return typeof Se.useSyncExternalStore == "function" ? Se.useSyncExternalStore(dS, uS, cS) : S.useContext(rS)
}
const fS = Symbol.for("react-aria.i18n.locale");

function Qy() {
    let e = typeof window < "u" && window[fS] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e])
    } catch {
        e = "en-US"
    }
    return {
        locale: e,
        direction: Yy(e) ? "rtl" : "ltr"
    }
}
let Ac = Qy(),
    Ci = new Set;

function Sm() {
    Ac = Qy();
    for (let e of Ci) e(Ac)
}

function qy() {
    let e = Ui(),
        [n, o] = S.useState(Ac);
    return S.useEffect(() => (Ci.size === 0 && window.addEventListener("languagechange", Sm), Ci.add(o), () => {
        Ci.delete(o), Ci.size === 0 && window.removeEventListener("languagechange", Sm)
    }), []), e ? {
        locale: "en-US",
        direction: "ltr"
    } : n
}
const Zy = Se.createContext(null);

function pS(e) {
    let {
        locale: n,
        children: o
    } = e, i = qy(), a = Se.useMemo(() => n ? {
        locale: n,
        direction: Yy(n) ? "rtl" : "ltr"
    } : i, [i, n]);
    return Se.createElement(Zy.Provider, {
        value: a
    }, o)
}

function Jy() {
    let e = qy();
    return S.useContext(Zy) || e
}
const hS = Symbol.for("react-aria.i18n.locale"),
    mS = Symbol.for("react-aria.i18n.strings");
let fo;
class qa {
    getStringForLocale(n, o) {
        let a = this.getStringsForLocale(o)[n];
        if (!a) throw new Error(`Could not find intl message ${n} in ${o} locale`);
        return a
    }
    getStringsForLocale(n) {
        let o = this.strings[n];
        return o || (o = gS(n, this.strings, this.defaultLocale), this.strings[n] = o), o
    }
    static getGlobalDictionaryForPackage(n) {
        if (typeof window > "u") return null;
        let o = window[hS];
        if (fo === void 0) {
            let a = window[mS];
            if (!a) return null;
            fo = {};
            for (let c in a) fo[c] = new qa({
                [o]: a[c]
            }, o)
        }
        let i = fo == null ? void 0 : fo[n];
        if (!i) throw new Error(`Strings for package "${n}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return i
    }
    constructor(n, o = "en-US") {
        this.strings = Object.fromEntries(Object.entries(n).filter(([, i]) => i)), this.defaultLocale = o
    }
}

function gS(e, n, o = "en-US") {
    if (n[e]) return n[e];
    let i = yS(e);
    if (n[i]) return n[i];
    for (let a in n)
        if (a.startsWith(i + "-")) return n[a];
    return n[o]
}

function yS(e) {
    return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
}
const Pm = new Map,
    Em = new Map;
class vS {
    format(n, o) {
        let i = this.strings.getStringForLocale(n, this.locale);
        return typeof i == "function" ? i(o, this) : i
    }
    plural(n, o, i = "cardinal") {
        let a = o["=" + n];
        if (a) return typeof a == "function" ? a() : a;
        let c = this.locale + ":" + i,
            u = Pm.get(c);
        u || (u = new Intl.PluralRules(this.locale, {
            type: i
        }), Pm.set(c, u));
        let d = u.select(n);
        return a = o[d] || o.other, typeof a == "function" ? a() : a
    }
    number(n) {
        let o = Em.get(this.locale);
        return o || (o = new Intl.NumberFormat(this.locale), Em.set(this.locale, o)), o.format(n)
    }
    select(n, o) {
        let i = n[o] || n.other;
        return typeof i == "function" ? i() : i
    }
    constructor(n, o) {
        this.locale = n, this.strings = o
    }
}
const Tm = new WeakMap;

function xS(e) {
    let n = Tm.get(e);
    return n || (n = new qa(e), Tm.set(e, n)), n
}

function wS(e, n) {
    return n && qa.getGlobalDictionaryForPackage(n) || xS(e)
}

function bS(e, n) {
    let {
        locale: o
    } = Jy(), i = wS(e, n);
    return S.useMemo(() => new vS(o, i), [o, i])
}

function SS(e, n) {
    if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
}

function PS(e, n, o) {
    SS(e, n), n.set(e, o)
}
const Ye = typeof document < "u" ? Se.useLayoutEffect : () => {};

function an(e) {
    const n = S.useRef(null);
    return Ye(() => {
        n.current = e
    }, [e]), S.useCallback((...o) => {
        const i = n.current;
        return i == null ? void 0 : i(...o)
    }, [])
}

function ES(e) {
    let [n, o] = S.useState(e), i = S.useRef(null), a = an(() => {
        if (!i.current) return;
        let u = i.current.next();
        if (u.done) {
            i.current = null;
            return
        }
        n === u.value ? a() : o(u.value)
    });
    Ye(() => {
        i.current && a()
    });
    let c = an(u => {
        i.current = u(n), a()
    });
    return [n, c]
}
let TS = !!(typeof window < "u" && window.document && window.document.createElement),
    Jn = new Map;

function bd(e) {
    let [n, o] = S.useState(e), i = S.useRef(null), a = lS(n), c = S.useCallback(u => {
        i.current = u
    }, []);
    return TS && (Jn.has(a) && !Jn.get(a).includes(c) ? Jn.set(a, [...Jn.get(a), c]) : Jn.set(a, [c])), Ye(() => {
        let u = a;
        return () => {
            Jn.delete(u)
        }
    }, [a]), S.useEffect(() => {
        let u = i.current;
        u && (i.current = null, o(u))
    }), a
}

function CS(e, n) {
    if (e === n) return e;
    let o = Jn.get(e);
    if (o) return o.forEach(a => a(n)), n;
    let i = Jn.get(n);
    return i ? (i.forEach(a => a(e)), e) : n
}

function $S(e = []) {
    let n = bd(),
        [o, i] = ES(n),
        a = S.useCallback(() => {
            i(function*() {
                yield n, yield document.getElementById(n) ? n : void 0
            })
        }, [n, i]);
    return Ye(a, [n, a, ...e]), o
}

function nr(...e) {
    return (...n) => {
        for (let o of e) typeof o == "function" && o(...n)
    }
}
const Ne = e => {
        var n;
        return (n = e == null ? void 0 : e.ownerDocument) !== null && n !== void 0 ? n : document
    },
    Jt = e => e && "window" in e && e.window === e ? e : Ne(e).defaultView || window;

function ev(e) {
    var n, o, i = "";
    if (typeof e == "string" || typeof e == "number") i += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++) e[n] && (o = ev(e[n])) && (i && (i += " "), i += o)
        } else
            for (o in e) e[o] && (i && (i += " "), i += o);
    return i
}

function kS() {
    for (var e, n, o = 0, i = "", a = arguments.length; o < a; o++)(e = arguments[o]) && (n = ev(e)) && (i && (i += " "), i += n);
    return i
}

function Ue(...e) {
    let n = { ...e[0]
    };
    for (let o = 1; o < e.length; o++) {
        let i = e[o];
        for (let a in i) {
            let c = n[a],
                u = i[a];
            typeof c == "function" && typeof u == "function" && a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= 65 && a.charCodeAt(2) <= 90 ? n[a] = nr(c, u) : (a === "className" || a === "UNSAFE_className") && typeof c == "string" && typeof u == "string" ? n[a] = kS(c, u) : a === "id" && c && u ? n.id = CS(c, u) : n[a] = u !== void 0 ? u : c
        }
    }
    return n
}

function MS(...e) {
    return e.length === 1 && e[0] ? e[0] : n => {
        for (let o of e) typeof o == "function" ? o(n) : o != null && (o.current = n)
    }
}
const LS = new Set(["id"]),
    AS = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    RS = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    _S = /^(data-.*)$/;

function Za(e, n = {}) {
    let {
        labelable: o,
        isLink: i,
        propNames: a
    } = n, c = {};
    for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (LS.has(u) || o && AS.has(u) || i && RS.has(u) || a != null && a.has(u) || _S.test(u)) && (c[u] = e[u]);
    return c
}

function Lr(e) {
    if (DS()) e.focus({
        preventScroll: !0
    });
    else {
        let n = NS(e);
        e.focus(), OS(n)
    }
}
let ua = null;

function DS() {
    if (ua == null) {
        ua = !1;
        try {
            document.createElement("div").focus({
                get preventScroll() {
                    return ua = !0, !0
                }
            })
        } catch {}
    }
    return ua
}

function NS(e) {
    let n = e.parentNode,
        o = [],
        i = document.scrollingElement || document.documentElement;
    for (; n instanceof HTMLElement && n !== i;)(n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && o.push({
        element: n,
        scrollTop: n.scrollTop,
        scrollLeft: n.scrollLeft
    }), n = n.parentNode;
    return i instanceof HTMLElement && o.push({
        element: i,
        scrollTop: i.scrollTop,
        scrollLeft: i.scrollLeft
    }), o
}

function OS(e) {
    for (let {
            element: n,
            scrollTop: o,
            scrollLeft: i
        } of e) n.scrollTop = o, n.scrollLeft = i
}

function Ja(e) {
    var n;
    return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.brands.some(o => e.test(o.brand))) || e.test(window.navigator.userAgent)
}

function Sd(e) {
    var n;
    return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1
}

function ir(e) {
    let n = null;
    return () => (n == null && (n = e()), n)
}
const Oi = ir(function() {
        return Sd(/^Mac/i)
    }),
    jS = ir(function() {
        return Sd(/^iPhone/i)
    }),
    tv = ir(function() {
        return Sd(/^iPad/i) || Oi() && navigator.maxTouchPoints > 1
    }),
    Hi = ir(function() {
        return jS() || tv()
    }),
    nv = ir(function() {
        return Ja(/AppleWebKit/i) && !IS()
    }),
    IS = ir(function() {
        return Ja(/Chrome/i)
    }),
    el = ir(function() {
        return Ja(/Android/i)
    }),
    VS = ir(function() {
        return Ja(/Firefox/i)
    }),
    rv = S.createContext({
        isNative: !0,
        open: zS,
        useHref: e => e
    });

function FS(e) {
    let {
        children: n,
        navigate: o,
        useHref: i
    } = e, a = S.useMemo(() => ({
        isNative: !1,
        open: (c, u, d, p) => {
            sv(c, h => {
                iv(h, u) ? o(d, p) : Or(h, u)
            })
        },
        useHref: i || (c => c)
    }), [o, i]);
    return Se.createElement(rv.Provider, {
        value: a
    }, n)
}

function ov() {
    return S.useContext(rv)
}

function iv(e, n) {
    let o = e.getAttribute("target");
    return (!o || o === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !n.metaKey && !n.ctrlKey && !n.altKey && !n.shiftKey
}

function Or(e, n, o = !0) {
    var i, a;
    let {
        metaKey: c,
        ctrlKey: u,
        altKey: d,
        shiftKey: p
    } = n;
    VS() && (!((a = window.event) === null || a === void 0 || (i = a.type) === null || i === void 0) && i.startsWith("key")) && e.target === "_blank" && (Oi() ? c = !0 : u = !0);
    let h = nv() && Oi() && !tv() ? new KeyboardEvent("keydown", {
        keyIdentifier: "Enter",
        metaKey: c,
        ctrlKey: u,
        altKey: d,
        shiftKey: p
    }) : new MouseEvent("click", {
        metaKey: c,
        ctrlKey: u,
        altKey: d,
        shiftKey: p,
        bubbles: !0,
        cancelable: !0
    });
    Or.isOpening = o, Lr(e), e.dispatchEvent(h), Or.isOpening = !1
}
Or.isOpening = !1;

function sv(e, n) {
    if (e instanceof HTMLAnchorElement) n(e);
    else if (e.hasAttribute("data-href")) {
        let o = document.createElement("a");
        o.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (o.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (o.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (o.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (o.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (o.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(o), n(o), e.removeChild(o)
    }
}

function zS(e, n) {
    sv(e, o => Or(o, n))
}

function BS(e) {
    let n = ov();
    var o;
    const i = n.useHref((o = e == null ? void 0 : e.href) !== null && o !== void 0 ? o : "");
    return {
        href: e != null && e.href ? i : void 0,
        target: e == null ? void 0 : e.target,
        rel: e == null ? void 0 : e.rel,
        download: e == null ? void 0 : e.download,
        ping: e == null ? void 0 : e.ping,
        referrerPolicy: e == null ? void 0 : e.referrerPolicy
    }
}
let mo = new Map,
    Rc = new Set;

function Cm() {
    if (typeof window > "u") return;

    function e(i) {
        return "propertyName" in i
    }
    let n = i => {
            if (!e(i) || !i.target) return;
            let a = mo.get(i.target);
            a || (a = new Set, mo.set(i.target, a), i.target.addEventListener("transitioncancel", o, {
                once: !0
            })), a.add(i.propertyName)
        },
        o = i => {
            if (!e(i) || !i.target) return;
            let a = mo.get(i.target);
            if (a && (a.delete(i.propertyName), a.size === 0 && (i.target.removeEventListener("transitioncancel", o), mo.delete(i.target)), mo.size === 0)) {
                for (let c of Rc) c();
                Rc.clear()
            }
        };
    document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", o)
}
typeof document < "u" && (document.readyState !== "loading" ? Cm() : document.addEventListener("DOMContentLoaded", Cm));

function av(e) {
    requestAnimationFrame(() => {
        mo.size === 0 ? e() : Rc.add(e)
    })
}

function US() {
    let e = S.useRef(new Map),
        n = S.useCallback((a, c, u, d) => {
            let p = d != null && d.once ? (...h) => {
                e.current.delete(u), u(...h)
            } : u;
            e.current.set(u, {
                type: c,
                eventTarget: a,
                fn: p,
                options: d
            }), a.addEventListener(c, u, d)
        }, []),
        o = S.useCallback((a, c, u, d) => {
            var p;
            let h = ((p = e.current.get(u)) === null || p === void 0 ? void 0 : p.fn) || u;
            a.removeEventListener(c, h, d), e.current.delete(u)
        }, []),
        i = S.useCallback(() => {
            e.current.forEach((a, c) => {
                o(a.eventTarget, a.type, c, a.options)
            })
        }, [o]);
    return S.useEffect(() => i, [i]), {
        addGlobalListener: n,
        removeGlobalListener: o,
        removeAllGlobalListeners: i
    }
}

function HS(e, n) {
    let {
        id: o,
        "aria-label": i,
        "aria-labelledby": a
    } = e;
    return o = bd(o), a && i ? a = [...new Set([o, ...a.trim().split(/\s+/)])].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !i && !a && n && (i = n), {
        id: o,
        "aria-label": i,
        "aria-labelledby": a
    }
}

function WS() {
    return typeof window.ResizeObserver < "u"
}

function $m(e) {
    const {
        ref: n,
        box: o,
        onResize: i
    } = e;
    S.useEffect(() => {
        let a = n == null ? void 0 : n.current;
        if (a)
            if (WS()) {
                const c = new window.ResizeObserver(u => {
                    u.length && i()
                });
                return c.observe(a, {
                    box: o
                }), () => {
                    a && c.unobserve(a)
                }
            } else return window.addEventListener("resize", i, !1), () => {
                window.removeEventListener("resize", i, !1)
            }
    }, [i, n, o])
}

function lv(e, n) {
    Ye(() => {
        if (e && e.ref && n) return e.ref.current = n.current, () => {
            e.ref && (e.ref.current = null)
        }
    })
}

function km(e, n) {
    if (!e) return !1;
    let o = window.getComputedStyle(e),
        i = /(auto|scroll)/.test(o.overflow + o.overflowX + o.overflowY);
    return i && n && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i
}

function uv(e, n) {
    let o = e;
    for (km(o, n) && (o = o.parentElement); o && !km(o, n);) o = o.parentElement;
    return o || document.scrollingElement || document.documentElement
}
let Vt = typeof document < "u" && window.visualViewport;

function KS() {
    let e = Ui(),
        [n, o] = S.useState(() => e ? {
            width: 0,
            height: 0
        } : Mm());
    return S.useEffect(() => {
        let i = () => {
            o(a => {
                let c = Mm();
                return c.width === a.width && c.height === a.height ? a : c
            })
        };
        return Vt ? Vt.addEventListener("resize", i) : window.addEventListener("resize", i), () => {
            Vt ? Vt.removeEventListener("resize", i) : window.removeEventListener("resize", i)
        }
    }, []), n
}

function Mm() {
    return {
        width: Vt && (Vt == null ? void 0 : Vt.width) || window.innerWidth,
        height: Vt && (Vt == null ? void 0 : Vt.height) || window.innerHeight
    }
}

function _c(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : el() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function GS(e) {
    return !el() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse"
}

function cv(e, n, o) {
    let [i, a] = S.useState(e || n), c = S.useRef(e !== void 0), u = e !== void 0;
    S.useEffect(() => {
        let h = c.current;
        h !== u && console.warn(`WARN: A component changed from ${h?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}.`), c.current = u
    }, [u]);
    let d = u ? e : i,
        p = S.useCallback((h, ...g) => {
            let y = (v, ...b) => {
                o && (Object.is(d, v) || o(v, ...b)), u || (d = v)
            };
            typeof h == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((b, ...P) => {
                let C = h(u ? d : b, ...P);
                return y(C, ...g), u ? b : C
            })) : (u || a(h), y(h, ...g))
        }, [u, d, o]);
    return [d, p]
}

function Dc(e, n = -1 / 0, o = 1 / 0) {
    return Math.min(Math.max(e, n), o)
}
const ln = {
        top: "top",
        bottom: "top",
        left: "left",
        right: "left"
    },
    La = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    },
    YS = {
        top: "left",
        left: "top"
    },
    Nc = {
        top: "height",
        left: "width"
    },
    dv = {
        width: "totalWidth",
        height: "totalHeight"
    },
    ca = {};
let rt = typeof document < "u" ? window.visualViewport : null;

function Lm(e) {
    let n = 0,
        o = 0,
        i = 0,
        a = 0,
        c = 0,
        u = 0,
        d = {};
    var p;
    let h = ((p = rt == null ? void 0 : rt.scale) !== null && p !== void 0 ? p : 1) > 1;
    if (e.tagName === "BODY") {
        let P = document.documentElement;
        i = P.clientWidth, a = P.clientHeight;
        var g;
        n = (g = rt == null ? void 0 : rt.width) !== null && g !== void 0 ? g : i;
        var y;
        o = (y = rt == null ? void 0 : rt.height) !== null && y !== void 0 ? y : a, d.top = P.scrollTop || e.scrollTop, d.left = P.scrollLeft || e.scrollLeft, rt && (c = rt.offsetTop, u = rt.offsetLeft)
    } else({
        width: n,
        height: o,
        top: c,
        left: u
    } = Eo(e)), d.top = e.scrollTop, d.left = e.scrollLeft, i = n, a = o;
    if (nv() && (e.tagName === "BODY" || e.tagName === "HTML") && h) {
        d.top = 0, d.left = 0;
        var v;
        c = (v = rt == null ? void 0 : rt.pageTop) !== null && v !== void 0 ? v : 0;
        var b;
        u = (b = rt == null ? void 0 : rt.pageLeft) !== null && b !== void 0 ? b : 0
    }
    return {
        width: n,
        height: o,
        totalWidth: i,
        totalHeight: a,
        scroll: d,
        top: c,
        left: u
    }
}

function XS(e) {
    return {
        top: e.scrollTop,
        left: e.scrollLeft,
        width: e.scrollWidth,
        height: e.scrollHeight
    }
}

function Am(e, n, o, i, a, c, u) {
    var d;
    let p = (d = a.scroll[e]) !== null && d !== void 0 ? d : 0,
        h = i[Nc[e]],
        g = i.scroll[ln[e]] + c,
        y = h + i.scroll[ln[e]] - c,
        v = n - p + u[e] - i[ln[e]],
        b = n - p + o + u[e] - i[ln[e]];
    return v < g ? g - v : b > y ? Math.max(y - b, g - v) : 0
}

function QS(e) {
    let n = window.getComputedStyle(e);
    return {
        top: parseInt(n.marginTop, 10) || 0,
        bottom: parseInt(n.marginBottom, 10) || 0,
        left: parseInt(n.marginLeft, 10) || 0,
        right: parseInt(n.marginRight, 10) || 0
    }
}

function Rm(e) {
    if (ca[e]) return ca[e];
    let [n, o] = e.split(" "), i = ln[n] || "right", a = YS[i];
    ln[o] || (o = "center");
    let c = Nc[i],
        u = Nc[a];
    return ca[e] = {
        placement: n,
        crossPlacement: o,
        axis: i,
        crossAxis: a,
        size: c,
        crossSize: u
    }, ca[e]
}

function cc(e, n, o, i, a, c, u, d, p, h) {
    let {
        placement: g,
        crossPlacement: y,
        axis: v,
        crossAxis: b,
        size: P,
        crossSize: C
    } = i, L = {};
    var $;
    L[b] = ($ = e[b]) !== null && $ !== void 0 ? $ : 0;
    var _, D, F, U;
    y === "center" ? L[b] += (((_ = e[C]) !== null && _ !== void 0 ? _ : 0) - ((D = o[C]) !== null && D !== void 0 ? D : 0)) / 2 : y !== b && (L[b] += ((F = e[C]) !== null && F !== void 0 ? F : 0) - ((U = o[C]) !== null && U !== void 0 ? U : 0)), L[b] += c;
    const Y = e[b] - o[C] + p + h,
        oe = e[b] + e[C] - p - h;
    if (L[b] = Dc(L[b], Y, oe), g === v) {
        const E = d ? u[P] : n[dv[P]];
        L[La[v]] = Math.floor(E - e[v] + a)
    } else L[v] = Math.floor(e[v] + e[P] + a);
    return L
}

function qS(e, n, o, i, a, c, u, d) {
    const p = i ? o.height : n[dv.height];
    var h;
    let g = e.top != null ? o.top + e.top : o.top + (p - ((h = e.bottom) !== null && h !== void 0 ? h : 0) - u);
    var y, v, b, P, C, L;
    let $ = d !== "top" ? Math.max(0, n.height + n.top + ((y = n.scroll.top) !== null && y !== void 0 ? y : 0) - g - (((v = a.top) !== null && v !== void 0 ? v : 0) + ((b = a.bottom) !== null && b !== void 0 ? b : 0) + c)) : Math.max(0, g + u - (n.top + ((P = n.scroll.top) !== null && P !== void 0 ? P : 0)) - (((C = a.top) !== null && C !== void 0 ? C : 0) + ((L = a.bottom) !== null && L !== void 0 ? L : 0) + c));
    return Math.min(n.height - c * 2, $)
}

function _m(e, n, o, i, a, c) {
    let {
        placement: u,
        axis: d,
        size: p
    } = c;
    var h, g;
    if (u === d) return Math.max(0, o[d] - e[d] - ((h = e.scroll[d]) !== null && h !== void 0 ? h : 0) + n[d] - ((g = i[d]) !== null && g !== void 0 ? g : 0) - i[La[d]] - a);
    var y;
    return Math.max(0, e[p] + e[d] + e.scroll[d] - n[d] - o[d] - o[p] - ((y = i[d]) !== null && y !== void 0 ? y : 0) - i[La[d]] - a)
}

function ZS(e, n, o, i, a, c, u, d, p, h, g, y, v, b, P, C) {
    let L = Rm(e),
        {
            size: $,
            crossAxis: _,
            crossSize: D,
            placement: F,
            crossPlacement: U
        } = L,
        Y = cc(n, d, o, L, g, y, h, v, P, C),
        oe = g,
        E = _m(d, h, n, a, c + g, L);
    if (u && i[$] > E) {
        let ne = Rm(`${La[F]} ${U}`),
            ie = cc(n, d, o, ne, g, y, h, v, P, C);
        _m(d, h, n, a, c + g, ne) > E && (L = ne, Y = ie, oe = g)
    }
    let J = "bottom";
    L.axis === "top" ? L.placement === "top" ? J = "top" : L.placement === "bottom" && (J = "bottom") : L.crossAxis === "top" && (L.crossPlacement === "top" ? J = "bottom" : L.crossPlacement === "bottom" && (J = "top"));
    let se = Am(_, Y[_], o[D], d, p, c, h);
    Y[_] += se;
    let H = qS(Y, d, h, v, a, c, o.height, J);
    b && b < H && (H = b), o.height = Math.min(o.height, H), Y = cc(n, d, o, L, oe, y, h, v, P, C), se = Am(_, Y[_], o[D], d, p, c, h), Y[_] += se;
    let B = {},
        O = n[_] + .5 * n[D] - Y[_] - a[ln[_]];
    const W = P / 2 + C;
    var z, re, ee, I;
    const Q = ln[_] === "left" ? ((z = a.left) !== null && z !== void 0 ? z : 0) + ((re = a.right) !== null && re !== void 0 ? re : 0) : ((ee = a.top) !== null && ee !== void 0 ? ee : 0) + ((I = a.bottom) !== null && I !== void 0 ? I : 0),
        K = o[D] - Q - P / 2 - C,
        w = n[_] + P / 2 - (Y[_] + a[ln[_]]),
        M = n[_] + n[D] - P / 2 - (Y[_] + a[ln[_]]),
        q = Dc(O, w, M);
    return B[_] = Dc(q, W, K), {
        position: Y,
        maxHeight: H,
        arrowOffsetLeft: B.left,
        arrowOffsetTop: B.top,
        placement: L.placement
    }
}

function JS(e) {
    let {
        placement: n,
        targetNode: o,
        overlayNode: i,
        scrollNode: a,
        padding: c,
        shouldFlip: u,
        boundaryElement: d,
        offset: p,
        crossOffset: h,
        maxHeight: g,
        arrowSize: y = 0,
        arrowBoundaryOffset: v = 0
    } = e, b = i instanceof HTMLElement ? eP(i) : document.documentElement, P = b === document.documentElement;
    const C = window.getComputedStyle(b).position;
    let L = !!C && C !== "static",
        $ = P ? Eo(o) : Dm(o, b);
    if (!P) {
        let {
            marginTop: B,
            marginLeft: O
        } = window.getComputedStyle(o);
        $.top += parseInt(B, 10) || 0, $.left += parseInt(O, 10) || 0
    }
    let _ = Eo(i),
        D = QS(i);
    var F, U;
    _.width += ((F = D.left) !== null && F !== void 0 ? F : 0) + ((U = D.right) !== null && U !== void 0 ? U : 0);
    var Y, oe;
    _.height += ((Y = D.top) !== null && Y !== void 0 ? Y : 0) + ((oe = D.bottom) !== null && oe !== void 0 ? oe : 0);
    let E = XS(a),
        J = Lm(d),
        se = Lm(b),
        H = d.tagName === "BODY" ? Eo(b) : Dm(b, d);
    return b.tagName === "HTML" && d.tagName === "BODY" && (se.scroll.top = 0, se.scroll.left = 0), ZS(n, $, _, E, D, c, u, J, se, H, p, h, L, g, y, v)
}

function Eo(e) {
    let {
        top: n,
        left: o,
        width: i,
        height: a
    } = e.getBoundingClientRect(), {
        scrollTop: c,
        scrollLeft: u,
        clientTop: d,
        clientLeft: p
    } = document.documentElement;
    return {
        top: n + c - d,
        left: o + u - p,
        width: i,
        height: a
    }
}

function Dm(e, n) {
    let o = window.getComputedStyle(e),
        i;
    if (o.position === "fixed") {
        let {
            top: a,
            left: c,
            width: u,
            height: d
        } = e.getBoundingClientRect();
        i = {
            top: a,
            left: c,
            width: u,
            height: d
        }
    } else {
        i = Eo(e);
        let a = Eo(n),
            c = window.getComputedStyle(n);
        a.top += (parseInt(c.borderTopWidth, 10) || 0) - n.scrollTop, a.left += (parseInt(c.borderLeftWidth, 10) || 0) - n.scrollLeft, i.top -= a.top, i.left -= a.left
    }
    return i.top -= parseInt(o.marginTop, 10) || 0, i.left -= parseInt(o.marginLeft, 10) || 0, i
}

function eP(e) {
    let n = e.offsetParent;
    if (n && n === document.body && window.getComputedStyle(n).position === "static" && !Nm(n) && (n = document.documentElement), n == null)
        for (n = e.parentElement; n && !Nm(n);) n = n.parentElement;
    return n || document.documentElement
}

function Nm(e) {
    let n = window.getComputedStyle(e);
    return n.transform !== "none" || /transform|perspective/.test(n.willChange) || n.filter !== "none" || n.contain === "paint" || "backdropFilter" in n && n.backdropFilter !== "none" || "WebkitBackdropFilter" in n && n.WebkitBackdropFilter !== "none"
}
const tP = new WeakMap;

function nP(e) {
    let {
        triggerRef: n,
        isOpen: o,
        onClose: i
    } = e;
    S.useEffect(() => {
        if (!o || i === null) return;
        let a = c => {
            let u = c.target;
            if (!n.current || u instanceof Node && !u.contains(n.current) || c.target instanceof HTMLInputElement || c.target instanceof HTMLTextAreaElement) return;
            let d = i || tP.get(n.current);
            d && d()
        };
        return window.addEventListener("scroll", a, !0), () => {
            window.removeEventListener("scroll", a, !0)
        }
    }, [o, i, n])
}
let Ke = typeof document < "u" ? window.visualViewport : null;

function rP(e) {
    let {
        direction: n
    } = Jy(), {
        arrowSize: o = 0,
        targetRef: i,
        overlayRef: a,
        scrollRef: c = a,
        placement: u = "bottom",
        containerPadding: d = 12,
        shouldFlip: p = !0,
        boundaryElement: h = typeof document < "u" ? document.body : null,
        offset: g = 0,
        crossOffset: y = 0,
        shouldUpdatePosition: v = !0,
        isOpen: b = !0,
        onClose: P,
        maxHeight: C,
        arrowBoundaryOffset: L = 0
    } = e, [$, _] = S.useState(null), D = [v, u, a.current, i.current, c.current, d, p, h, g, y, b, n, C, L, o], F = S.useRef(Ke == null ? void 0 : Ke.scale);
    S.useEffect(() => {
        b && (F.current = Ke == null ? void 0 : Ke.scale)
    }, [b]);
    let U = S.useCallback(() => {
        if (v === !1 || !b || !a.current || !i.current || !h || (Ke == null ? void 0 : Ke.scale) !== F.current) return;
        let se = null;
        if (c.current && c.current.contains(document.activeElement)) {
            var H;
            let I = (H = document.activeElement) === null || H === void 0 ? void 0 : H.getBoundingClientRect(),
                Q = c.current.getBoundingClientRect();
            var B;
            if (se = {
                    type: "top",
                    offset: ((B = I == null ? void 0 : I.top) !== null && B !== void 0 ? B : 0) - Q.top
                }, se.offset > Q.height / 2) {
                se.type = "bottom";
                var O;
                se.offset = ((O = I == null ? void 0 : I.bottom) !== null && O !== void 0 ? O : 0) - Q.bottom
            }
        }
        let W = a.current;
        if (!C && a.current) {
            var z;
            W.style.top = "0px", W.style.bottom = "";
            var re;
            W.style.maxHeight = ((re = (z = window.visualViewport) === null || z === void 0 ? void 0 : z.height) !== null && re !== void 0 ? re : window.innerHeight) + "px"
        }
        let ee = JS({
            placement: iP(u, n),
            overlayNode: a.current,
            targetNode: i.current,
            scrollNode: c.current || a.current,
            padding: d,
            shouldFlip: p,
            boundaryElement: h,
            offset: g,
            crossOffset: y,
            maxHeight: C,
            arrowSize: o,
            arrowBoundaryOffset: L
        });
        if (ee.position) {
            if (W.style.top = "", W.style.bottom = "", W.style.left = "", W.style.right = "", Object.keys(ee.position).forEach(I => W.style[I] = ee.position[I] + "px"), W.style.maxHeight = ee.maxHeight != null ? ee.maxHeight + "px" : "", se && document.activeElement && c.current) {
                let I = document.activeElement.getBoundingClientRect(),
                    Q = c.current.getBoundingClientRect(),
                    K = I[se.type] - Q[se.type];
                c.current.scrollTop += K - se.offset
            }
            _(ee)
        }
    }, D);
    Ye(U, D), oP(U), $m({
        ref: a,
        onResize: U
    }), $m({
        ref: i,
        onResize: U
    });
    let Y = S.useRef(!1);
    Ye(() => {
        let se, H = () => {
                Y.current = !0, clearTimeout(se), se = setTimeout(() => {
                    Y.current = !1
                }, 500), U()
            },
            B = () => {
                Y.current && H()
            };
        return Ke == null || Ke.addEventListener("resize", H), Ke == null || Ke.addEventListener("scroll", B), () => {
            Ke == null || Ke.removeEventListener("resize", H), Ke == null || Ke.removeEventListener("scroll", B)
        }
    }, [U]);
    let oe = S.useCallback(() => {
        Y.current || P == null || P()
    }, [P, Y]);
    nP({
        triggerRef: i,
        isOpen: b,
        onClose: P && oe
    });
    var E, J;
    return {
        overlayProps: {
            style: {
                position: "absolute",
                zIndex: 1e5,
                ...$ == null ? void 0 : $.position,
                maxHeight: (E = $ == null ? void 0 : $.maxHeight) !== null && E !== void 0 ? E : "100vh"
            }
        },
        placement: (J = $ == null ? void 0 : $.placement) !== null && J !== void 0 ? J : null,
        arrowProps: {
            "aria-hidden": "true",
            role: "presentation",
            style: {
                left: $ == null ? void 0 : $.arrowOffsetLeft,
                top: $ == null ? void 0 : $.arrowOffsetTop
            }
        },
        updatePosition: U
    }
}

function oP(e) {
    Ye(() => (window.addEventListener("resize", e, !1), () => {
        window.removeEventListener("resize", e, !1)
    }), [e])
}

function iP(e, n) {
    return n === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
}
let go = "default",
    Oc = "",
    Ta = new WeakMap;

function Om(e) {
    if (Hi()) {
        if (go === "default") {
            const n = Ne(e);
            Oc = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
        }
        go = "disabled"
    } else(e instanceof HTMLElement || e instanceof SVGElement) && (Ta.set(e, e.style.userSelect), e.style.userSelect = "none")
}

function da(e) {
    if (Hi()) {
        if (go !== "disabled") return;
        go = "restoring", setTimeout(() => {
            av(() => {
                if (go === "restoring") {
                    const n = Ne(e);
                    n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = Oc || ""), Oc = "", go = "default"
                }
            })
        }, 300)
    } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ta.has(e)) {
        let n = Ta.get(e);
        e.style.userSelect === "none" && (e.style.userSelect = n), e.getAttribute("style") === "" && e.removeAttribute("style"), Ta.delete(e)
    }
}
const Pd = Se.createContext({
    register: () => {}
});
Pd.displayName = "PressResponderContext";

function sP(e, n) {
    return n.get ? n.get.call(e) : n.value
}

function fv(e, n, o) {
    if (!n.has(e)) throw new TypeError("attempted to " + o + " private field on non-instance");
    return n.get(e)
}

function aP(e, n) {
    var o = fv(e, n, "get");
    return sP(e, o)
}

function lP(e, n, o) {
    if (n.set) n.set.call(e, o);
    else {
        if (!n.writable) throw new TypeError("attempted to set read only private field");
        n.value = o
    }
}

function jm(e, n, o) {
    var i = fv(e, n, "set");
    return lP(e, i, o), o
}

function uP(e) {
    let n = S.useContext(Pd);
    if (n) {
        let {
            register: o,
            ...i
        } = n;
        e = Ue(i, e), o()
    }
    return lv(n, e.ref), e
}
var fa = new WeakMap;
class pa {
    continuePropagation() {
        jm(this, fa, !1)
    }
    get shouldStopPropagation() {
        return aP(this, fa)
    }
    constructor(n, o, i, a) {
        PS(this, fa, {
            writable: !0,
            value: void 0
        }), jm(this, fa, !0);
        var c;
        let u = (c = a == null ? void 0 : a.target) !== null && c !== void 0 ? c : i.currentTarget;
        const d = u == null ? void 0 : u.getBoundingClientRect();
        let p, h = 0,
            g, y = null;
        i.clientX != null && i.clientY != null && (g = i.clientX, y = i.clientY), d && (g != null && y != null ? (p = g - d.left, h = y - d.top) : (p = d.width / 2, h = d.height / 2)), this.type = n, this.pointerType = o, this.target = i.currentTarget, this.shiftKey = i.shiftKey, this.metaKey = i.metaKey, this.ctrlKey = i.ctrlKey, this.altKey = i.altKey, this.x = p, this.y = h
    }
}
const Im = Symbol("linkClicked");

function pv(e) {
    let {
        onPress: n,
        onPressChange: o,
        onPressStart: i,
        onPressEnd: a,
        onPressUp: c,
        isDisabled: u,
        isPressed: d,
        preventFocusOnPress: p,
        shouldCancelOnPointerExit: h,
        allowTextSelectionOnPress: g,
        ref: y,
        ...v
    } = uP(e), [b, P] = S.useState(!1), C = S.useRef({
        isPressed: !1,
        ignoreEmulatedMouseEvents: !1,
        ignoreClickAfterPress: !1,
        didFirePressStart: !1,
        isTriggeringEvent: !1,
        activePointerId: null,
        target: null,
        isOverTarget: !1,
        pointerType: null
    }), {
        addGlobalListener: L,
        removeAllGlobalListeners: $
    } = US(), _ = an((E, J) => {
        let se = C.current;
        if (u || se.didFirePressStart) return !1;
        let H = !0;
        if (se.isTriggeringEvent = !0, i) {
            let B = new pa("pressstart", J, E);
            i(B), H = B.shouldStopPropagation
        }
        return o && o(!0), se.isTriggeringEvent = !1, se.didFirePressStart = !0, P(!0), H
    }), D = an((E, J, se = !0) => {
        let H = C.current;
        if (!H.didFirePressStart) return !1;
        H.ignoreClickAfterPress = !0, H.didFirePressStart = !1, H.isTriggeringEvent = !0;
        let B = !0;
        if (a) {
            let O = new pa("pressend", J, E);
            a(O), B = O.shouldStopPropagation
        }
        if (o && o(!1), P(!1), n && se && !u) {
            let O = new pa("press", J, E);
            n(O), B && (B = O.shouldStopPropagation)
        }
        return H.isTriggeringEvent = !1, B
    }), F = an((E, J) => {
        let se = C.current;
        if (u) return !1;
        if (c) {
            se.isTriggeringEvent = !0;
            let H = new pa("pressup", J, E);
            return c(H), se.isTriggeringEvent = !1, H.shouldStopPropagation
        }
        return !0
    }), U = an(E => {
        let J = C.current;
        J.isPressed && J.target && (J.isOverTarget && J.pointerType != null && D(bn(J.target, E), J.pointerType, !1), J.isPressed = !1, J.isOverTarget = !1, J.activePointerId = null, J.pointerType = null, $(), g || da(J.target))
    }), Y = an(E => {
        h && U(E)
    }), oe = S.useMemo(() => {
        let E = C.current,
            J = {
                onKeyDown(H) {
                    if (dc(H.nativeEvent, H.currentTarget) && H.currentTarget.contains(H.target)) {
                        var B;
                        Fm(H.target, H.key) && H.preventDefault();
                        let O = !0;
                        if (!E.isPressed && !H.repeat) {
                            E.target = H.currentTarget, E.isPressed = !0, O = _(H, "keyboard");
                            let W = H.currentTarget,
                                z = re => {
                                    dc(re, W) && !re.repeat && W.contains(re.target) && E.target && F(bn(E.target, re), "keyboard")
                                };
                            L(Ne(H.currentTarget), "keyup", nr(z, se), !0)
                        }
                        O && H.stopPropagation(), H.metaKey && Oi() && ((B = E.metaKeyEvents) === null || B === void 0 || B.set(H.key, H.nativeEvent))
                    } else H.key === "Meta" && (E.metaKeyEvents = new Map)
                },
                onClick(H) {
                    if (!(H && !H.currentTarget.contains(H.target)) && H && H.button === 0 && !E.isTriggeringEvent && !Or.isOpening) {
                        let B = !0;
                        if (u && H.preventDefault(), !E.ignoreClickAfterPress && !E.ignoreEmulatedMouseEvents && !E.isPressed && (E.pointerType === "virtual" || _c(H.nativeEvent))) {
                            !u && !p && Lr(H.currentTarget);
                            let O = _(H, "virtual"),
                                W = F(H, "virtual"),
                                z = D(H, "virtual");
                            B = O && W && z
                        }
                        E.ignoreEmulatedMouseEvents = !1, E.ignoreClickAfterPress = !1, B && H.stopPropagation()
                    }
                }
            },
            se = H => {
                var B;
                if (E.isPressed && E.target && dc(H, E.target)) {
                    var O;
                    Fm(H.target, H.key) && H.preventDefault();
                    let z = H.target;
                    D(bn(E.target, H), "keyboard", E.target.contains(z)), $(), H.key !== "Enter" && Ed(E.target) && E.target.contains(z) && !H[Im] && (H[Im] = !0, Or(E.target, H, !1)), E.isPressed = !1, (O = E.metaKeyEvents) === null || O === void 0 || O.delete(H.key)
                } else if (H.key === "Meta" && (!((B = E.metaKeyEvents) === null || B === void 0) && B.size)) {
                    var W;
                    let z = E.metaKeyEvents;
                    E.metaKeyEvents = void 0;
                    for (let re of z.values())(W = E.target) === null || W === void 0 || W.dispatchEvent(new KeyboardEvent("keyup", re))
                }
            };
        if (typeof PointerEvent < "u") {
            J.onPointerDown = z => {
                if (z.button !== 0 || !z.currentTarget.contains(z.target)) return;
                if (GS(z.nativeEvent)) {
                    E.pointerType = "virtual";
                    return
                }
                fc(z.currentTarget) && z.preventDefault(), E.pointerType = z.pointerType;
                let re = !0;
                E.isPressed || (E.isPressed = !0, E.isOverTarget = !0, E.activePointerId = z.pointerId, E.target = z.currentTarget, !u && !p && Lr(z.currentTarget), g || Om(E.target), re = _(z, E.pointerType), L(Ne(z.currentTarget), "pointermove", H, !1), L(Ne(z.currentTarget), "pointerup", B, !1), L(Ne(z.currentTarget), "pointercancel", W, !1)), re && z.stopPropagation()
            }, J.onMouseDown = z => {
                z.currentTarget.contains(z.target) && z.button === 0 && (fc(z.currentTarget) && z.preventDefault(), z.stopPropagation())
            }, J.onPointerUp = z => {
                !z.currentTarget.contains(z.target) || E.pointerType === "virtual" || z.button === 0 && po(z, z.currentTarget) && F(z, E.pointerType || z.pointerType)
            };
            let H = z => {
                    z.pointerId === E.activePointerId && (E.target && po(z, E.target) ? !E.isOverTarget && E.pointerType != null && (E.isOverTarget = !0, _(bn(E.target, z), E.pointerType)) : E.target && E.isOverTarget && E.pointerType != null && (E.isOverTarget = !1, D(bn(E.target, z), E.pointerType, !1), Y(z)))
                },
                B = z => {
                    z.pointerId === E.activePointerId && E.isPressed && z.button === 0 && E.target && (po(z, E.target) && E.pointerType != null ? D(bn(E.target, z), E.pointerType) : E.isOverTarget && E.pointerType != null && D(bn(E.target, z), E.pointerType, !1), E.isPressed = !1, E.isOverTarget = !1, E.activePointerId = null, E.pointerType = null, $(), g || da(E.target), "ontouchend" in E.target && z.pointerType !== "mouse" && L(E.target, "touchend", O, {
                        once: !0
                    }))
                },
                O = z => {
                    hv(z.currentTarget) && z.preventDefault()
                },
                W = z => {
                    U(z)
                };
            J.onDragStart = z => {
                z.currentTarget.contains(z.target) && U(z)
            }
        } else {
            J.onMouseDown = O => {
                if (O.button !== 0 || !O.currentTarget.contains(O.target)) return;
                if (fc(O.currentTarget) && O.preventDefault(), E.ignoreEmulatedMouseEvents) {
                    O.stopPropagation();
                    return
                }
                E.isPressed = !0, E.isOverTarget = !0, E.target = O.currentTarget, E.pointerType = _c(O.nativeEvent) ? "virtual" : "mouse", !u && !p && Lr(O.currentTarget), _(O, E.pointerType) && O.stopPropagation(), L(Ne(O.currentTarget), "mouseup", H, !1)
            }, J.onMouseEnter = O => {
                if (!O.currentTarget.contains(O.target)) return;
                let W = !0;
                E.isPressed && !E.ignoreEmulatedMouseEvents && E.pointerType != null && (E.isOverTarget = !0, W = _(O, E.pointerType)), W && O.stopPropagation()
            }, J.onMouseLeave = O => {
                if (!O.currentTarget.contains(O.target)) return;
                let W = !0;
                E.isPressed && !E.ignoreEmulatedMouseEvents && E.pointerType != null && (E.isOverTarget = !1, W = D(O, E.pointerType, !1), Y(O)), W && O.stopPropagation()
            }, J.onMouseUp = O => {
                O.currentTarget.contains(O.target) && !E.ignoreEmulatedMouseEvents && O.button === 0 && F(O, E.pointerType || "mouse")
            };
            let H = O => {
                if (O.button === 0) {
                    if (E.isPressed = !1, $(), E.ignoreEmulatedMouseEvents) {
                        E.ignoreEmulatedMouseEvents = !1;
                        return
                    }
                    E.target && po(O, E.target) && E.pointerType != null ? D(bn(E.target, O), E.pointerType) : E.target && E.isOverTarget && E.pointerType != null && D(bn(E.target, O), E.pointerType, !1), E.isOverTarget = !1
                }
            };
            J.onTouchStart = O => {
                if (!O.currentTarget.contains(O.target)) return;
                let W = cP(O.nativeEvent);
                if (!W) return;
                E.activePointerId = W.identifier, E.ignoreEmulatedMouseEvents = !0, E.isOverTarget = !0, E.isPressed = !0, E.target = O.currentTarget, E.pointerType = "touch", !u && !p && Lr(O.currentTarget), g || Om(E.target), _(Qn(E.target, O), E.pointerType) && O.stopPropagation(), L(Jt(O.currentTarget), "scroll", B, !0)
            }, J.onTouchMove = O => {
                if (!O.currentTarget.contains(O.target)) return;
                if (!E.isPressed) {
                    O.stopPropagation();
                    return
                }
                let W = Vm(O.nativeEvent, E.activePointerId),
                    z = !0;
                W && po(W, O.currentTarget) ? !E.isOverTarget && E.pointerType != null && (E.isOverTarget = !0, z = _(Qn(E.target, O), E.pointerType)) : E.isOverTarget && E.pointerType != null && (E.isOverTarget = !1, z = D(Qn(E.target, O), E.pointerType, !1), Y(Qn(E.target, O))), z && O.stopPropagation()
            }, J.onTouchEnd = O => {
                if (!O.currentTarget.contains(O.target)) return;
                if (!E.isPressed) {
                    O.stopPropagation();
                    return
                }
                let W = Vm(O.nativeEvent, E.activePointerId),
                    z = !0;
                W && po(W, O.currentTarget) && E.pointerType != null ? (F(Qn(E.target, O), E.pointerType), z = D(Qn(E.target, O), E.pointerType)) : E.isOverTarget && E.pointerType != null && (z = D(Qn(E.target, O), E.pointerType, !1)), z && O.stopPropagation(), E.isPressed = !1, E.activePointerId = null, E.isOverTarget = !1, E.ignoreEmulatedMouseEvents = !0, E.target && !g && da(E.target), $()
            }, J.onTouchCancel = O => {
                O.currentTarget.contains(O.target) && (O.stopPropagation(), E.isPressed && U(Qn(E.target, O)))
            };
            let B = O => {
                E.isPressed && O.target.contains(E.target) && U({
                    currentTarget: E.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1
                })
            };
            J.onDragStart = O => {
                O.currentTarget.contains(O.target) && U(O)
            }
        }
        return J
    }, [L, u, p, $, g, U, Y, D, _, F]);
    return S.useEffect(() => () => {
        var E;
        g || da((E = C.current.target) !== null && E !== void 0 ? E : void 0)
    }, [g]), {
        isPressed: d || b,
        pressProps: Ue(v, oe)
    }
}

function Ed(e) {
    return e.tagName === "A" && e.hasAttribute("href")
}

function dc(e, n) {
    const {
        key: o,
        code: i
    } = e, a = n, c = a.getAttribute("role");
    return (o === "Enter" || o === " " || o === "Spacebar" || i === "Space") && !(a instanceof Jt(a).HTMLInputElement && !mv(a, o) || a instanceof Jt(a).HTMLTextAreaElement || a.isContentEditable) && !((c === "link" || !c && Ed(a)) && o !== "Enter")
}

function cP(e) {
    const {
        targetTouches: n
    } = e;
    return n.length > 0 ? n[0] : null
}

function Vm(e, n) {
    const o = e.changedTouches;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        if (a.identifier === n) return a
    }
    return null
}

function Qn(e, n) {
    let o = 0,
        i = 0;
    return n.targetTouches && n.targetTouches.length === 1 && (o = n.targetTouches[0].clientX, i = n.targetTouches[0].clientY), {
        currentTarget: e,
        shiftKey: n.shiftKey,
        ctrlKey: n.ctrlKey,
        metaKey: n.metaKey,
        altKey: n.altKey,
        clientX: o,
        clientY: i
    }
}

function bn(e, n) {
    let o = n.clientX,
        i = n.clientY;
    return {
        currentTarget: e,
        shiftKey: n.shiftKey,
        ctrlKey: n.ctrlKey,
        metaKey: n.metaKey,
        altKey: n.altKey,
        clientX: o,
        clientY: i
    }
}

function dP(e) {
    let n = 0,
        o = 0;
    return e.width !== void 0 ? n = e.width / 2 : e.radiusX !== void 0 && (n = e.radiusX), e.height !== void 0 ? o = e.height / 2 : e.radiusY !== void 0 && (o = e.radiusY), {
        top: e.clientY - o,
        right: e.clientX + n,
        bottom: e.clientY + o,
        left: e.clientX - n
    }
}

function fP(e, n) {
    return !(e.left > n.right || n.left > e.right || e.top > n.bottom || n.top > e.bottom)
}

function po(e, n) {
    let o = n.getBoundingClientRect(),
        i = dP(e);
    return fP(o, i)
}

function fc(e) {
    return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
}

function hv(e) {
    return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Ed(e)
}

function Fm(e, n) {
    return e instanceof HTMLInputElement ? !mv(e, n) : hv(e)
}
const pP = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function mv(e, n) {
    return e.type === "checkbox" || e.type === "radio" ? n === " " : pP.has(e.type)
}

function hP({
    children: e
}) {
    let n = S.useMemo(() => ({
        register: () => {}
    }), []);
    return Se.createElement(Pd.Provider, {
        value: n
    }, e)
}
class mP {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented
    }
    preventDefault() {
        this.defaultPrevented = !0, this.nativeEvent.preventDefault()
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
    }
    isPropagationStopped() {
        return !1
    }
    persist() {}
    constructor(n, o) {
        this.nativeEvent = o, this.target = o.target, this.currentTarget = o.currentTarget, this.relatedTarget = o.relatedTarget, this.bubbles = o.bubbles, this.cancelable = o.cancelable, this.defaultPrevented = o.defaultPrevented, this.eventPhase = o.eventPhase, this.isTrusted = o.isTrusted, this.timeStamp = o.timeStamp, this.type = n
    }
}

function gv(e) {
    let n = S.useRef({
        isFocused: !1,
        observer: null
    });
    Ye(() => {
        const i = n.current;
        return () => {
            i.observer && (i.observer.disconnect(), i.observer = null)
        }
    }, []);
    let o = an(i => {
        e == null || e(i)
    });
    return S.useCallback(i => {
        if (i.target instanceof HTMLButtonElement || i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement || i.target instanceof HTMLSelectElement) {
            n.current.isFocused = !0;
            let a = i.target,
                c = u => {
                    n.current.isFocused = !1, a.disabled && o(new mP("blur", u)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
                };
            a.addEventListener("focusout", c, {
                once: !0
            }), n.current.observer = new MutationObserver(() => {
                if (n.current.isFocused && a.disabled) {
                    var u;
                    (u = n.current.observer) === null || u === void 0 || u.disconnect();
                    let d = a === document.activeElement ? null : document.activeElement;
                    a.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: d
                    })), a.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: !0,
                        relatedTarget: d
                    }))
                }
            }), n.current.observer.observe(a, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }
    }, [o])
}

function yv(e) {
    let {
        isDisabled: n,
        onFocus: o,
        onBlur: i,
        onFocusChange: a
    } = e;
    const c = S.useCallback(p => {
            if (p.target === p.currentTarget) return i && i(p), a && a(!1), !0
        }, [i, a]),
        u = gv(c),
        d = S.useCallback(p => {
            const h = Ne(p.target);
            p.target === p.currentTarget && h.activeElement === p.target && (o && o(p), a && a(!0), u(p))
        }, [a, o, u]);
    return {
        focusProps: {
            onFocus: !n && (o || a || i) ? d : void 0,
            onBlur: !n && (i || a) ? c : void 0
        }
    }
}
let Lo = null,
    jc = new Set,
    Ai = new Map,
    jr = !1,
    Ic = !1;
const gP = {
    Tab: !0,
    Escape: !0
};

function Td(e, n) {
    for (let o of jc) o(e, n)
}

function yP(e) {
    return !(e.metaKey || !Oi() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}

function Aa(e) {
    jr = !0, yP(e) && (Lo = "keyboard", Td("keyboard", e))
}

function Ft(e) {
    Lo = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (jr = !0, Td("pointer", e))
}

function vv(e) {
    _c(e) && (jr = !0, Lo = "virtual")
}

function xv(e) {
    e.target === window || e.target === document || (!jr && !Ic && (Lo = "virtual", Td("virtual", e)), jr = !1, Ic = !1)
}

function wv() {
    jr = !1, Ic = !0
}

function Vc(e) {
    if (typeof window > "u" || Ai.get(Jt(e))) return;
    const n = Jt(e),
        o = Ne(e);
    let i = n.HTMLElement.prototype.focus;
    n.HTMLElement.prototype.focus = function() {
        jr = !0, i.apply(this, arguments)
    }, o.addEventListener("keydown", Aa, !0), o.addEventListener("keyup", Aa, !0), o.addEventListener("click", vv, !0), n.addEventListener("focus", xv, !0), n.addEventListener("blur", wv, !1), typeof PointerEvent < "u" ? (o.addEventListener("pointerdown", Ft, !0), o.addEventListener("pointermove", Ft, !0), o.addEventListener("pointerup", Ft, !0)) : (o.addEventListener("mousedown", Ft, !0), o.addEventListener("mousemove", Ft, !0), o.addEventListener("mouseup", Ft, !0)), n.addEventListener("beforeunload", () => {
        bv(e)
    }, {
        once: !0
    }), Ai.set(n, {
        focus: i
    })
}
const bv = (e, n) => {
    const o = Jt(e),
        i = Ne(e);
    n && i.removeEventListener("DOMContentLoaded", n), Ai.has(o) && (o.HTMLElement.prototype.focus = Ai.get(o).focus, i.removeEventListener("keydown", Aa, !0), i.removeEventListener("keyup", Aa, !0), i.removeEventListener("click", vv, !0), o.removeEventListener("focus", xv, !0), o.removeEventListener("blur", wv, !1), typeof PointerEvent < "u" ? (i.removeEventListener("pointerdown", Ft, !0), i.removeEventListener("pointermove", Ft, !0), i.removeEventListener("pointerup", Ft, !0)) : (i.removeEventListener("mousedown", Ft, !0), i.removeEventListener("mousemove", Ft, !0), i.removeEventListener("mouseup", Ft, !0)), Ai.delete(o))
};

function vP(e) {
    const n = Ne(e);
    let o;
    return n.readyState !== "loading" ? Vc(e) : (o = () => {
        Vc(e)
    }, n.addEventListener("DOMContentLoaded", o)), () => bv(e, o)
}
typeof document < "u" && vP();

function Cd() {
    return Lo !== "pointer"
}

function Sv() {
    return Lo
}
const xP = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function wP(e, n, o) {
    var i;
    const a = typeof window < "u" ? Jt(o == null ? void 0 : o.target).HTMLInputElement : HTMLInputElement,
        c = typeof window < "u" ? Jt(o == null ? void 0 : o.target).HTMLTextAreaElement : HTMLTextAreaElement,
        u = typeof window < "u" ? Jt(o == null ? void 0 : o.target).HTMLElement : HTMLElement,
        d = typeof window < "u" ? Jt(o == null ? void 0 : o.target).KeyboardEvent : KeyboardEvent;
    return e = e || (o == null ? void 0 : o.target) instanceof a && !xP.has(o == null || (i = o.target) === null || i === void 0 ? void 0 : i.type) || (o == null ? void 0 : o.target) instanceof c || (o == null ? void 0 : o.target) instanceof u && (o == null ? void 0 : o.target.isContentEditable), !(e && n === "keyboard" && o instanceof d && !gP[o.key])
}

function bP(e, n, o) {
    Vc(), S.useEffect(() => {
        let i = (a, c) => {
            wP(!!(o != null && o.isTextInput), a, c) && e(Cd())
        };
        return jc.add(i), () => {
            jc.delete(i)
        }
    }, n)
}

function $d(e) {
    let {
        isDisabled: n,
        onBlurWithin: o,
        onFocusWithin: i,
        onFocusWithinChange: a
    } = e, c = S.useRef({
        isFocusWithin: !1
    }), u = S.useCallback(h => {
        c.current.isFocusWithin && !h.currentTarget.contains(h.relatedTarget) && (c.current.isFocusWithin = !1, o && o(h), a && a(!1))
    }, [o, a, c]), d = gv(u), p = S.useCallback(h => {
        !c.current.isFocusWithin && document.activeElement === h.target && (i && i(h), a && a(!0), c.current.isFocusWithin = !0, d(h))
    }, [i, a, d]);
    return n ? {
        focusWithinProps: {
            onFocus: void 0,
            onBlur: void 0
        }
    } : {
        focusWithinProps: {
            onFocus: p,
            onBlur: u
        }
    }
}
let Ra = !1,
    pc = 0;

function Fc() {
    Ra = !0, setTimeout(() => {
        Ra = !1
    }, 50)
}

function zm(e) {
    e.pointerType === "touch" && Fc()
}

function SP() {
    if (!(typeof document > "u")) return typeof PointerEvent < "u" ? document.addEventListener("pointerup", zm) : document.addEventListener("touchend", Fc), pc++, () => {
        pc--, !(pc > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", zm) : document.removeEventListener("touchend", Fc))
    }
}

function kd(e) {
    let {
        onHoverStart: n,
        onHoverChange: o,
        onHoverEnd: i,
        isDisabled: a
    } = e, [c, u] = S.useState(!1), d = S.useRef({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
    }).current;
    S.useEffect(SP, []);
    let {
        hoverProps: p,
        triggerHoverEnd: h
    } = S.useMemo(() => {
        let g = (b, P) => {
                if (d.pointerType = P, a || P === "touch" || d.isHovered || !b.currentTarget.contains(b.target)) return;
                d.isHovered = !0;
                let C = b.currentTarget;
                d.target = C, n && n({
                    type: "hoverstart",
                    target: C,
                    pointerType: P
                }), o && o(!0), u(!0)
            },
            y = (b, P) => {
                if (d.pointerType = "", d.target = null, P === "touch" || !d.isHovered) return;
                d.isHovered = !1;
                let C = b.currentTarget;
                i && i({
                    type: "hoverend",
                    target: C,
                    pointerType: P
                }), o && o(!1), u(!1)
            },
            v = {};
        return typeof PointerEvent < "u" ? (v.onPointerEnter = b => {
            Ra && b.pointerType === "mouse" || g(b, b.pointerType)
        }, v.onPointerLeave = b => {
            !a && b.currentTarget.contains(b.target) && y(b, b.pointerType)
        }) : (v.onTouchStart = () => {
            d.ignoreEmulatedMouseEvents = !0
        }, v.onMouseEnter = b => {
            !d.ignoreEmulatedMouseEvents && !Ra && g(b, "mouse"), d.ignoreEmulatedMouseEvents = !1
        }, v.onMouseLeave = b => {
            !a && b.currentTarget.contains(b.target) && y(b, "mouse")
        }), {
            hoverProps: v,
            triggerHoverEnd: y
        }
    }, [n, o, i, a, d]);
    return S.useEffect(() => {
        a && h({
            currentTarget: d.target
        }, d.pointerType)
    }, [a]), {
        hoverProps: p,
        isHovered: c
    }
}

function PP(e) {
    let {
        ref: n,
        onInteractOutside: o,
        isDisabled: i,
        onInteractOutsideStart: a
    } = e, c = S.useRef({
        isPointerDown: !1,
        ignoreEmulatedMouseEvents: !1
    }), u = an(p => {
        o && ha(p, n) && (a && a(p), c.current.isPointerDown = !0)
    }), d = an(p => {
        o && o(p)
    });
    S.useEffect(() => {
        let p = c.current;
        if (i) return;
        const h = n.current,
            g = Ne(h);
        if (typeof PointerEvent < "u") {
            let y = v => {
                p.isPointerDown && ha(v, n) && d(v), p.isPointerDown = !1
            };
            return g.addEventListener("pointerdown", u, !0), g.addEventListener("pointerup", y, !0), () => {
                g.removeEventListener("pointerdown", u, !0), g.removeEventListener("pointerup", y, !0)
            }
        } else {
            let y = b => {
                    p.ignoreEmulatedMouseEvents ? p.ignoreEmulatedMouseEvents = !1 : p.isPointerDown && ha(b, n) && d(b), p.isPointerDown = !1
                },
                v = b => {
                    p.ignoreEmulatedMouseEvents = !0, p.isPointerDown && ha(b, n) && d(b), p.isPointerDown = !1
                };
            return g.addEventListener("mousedown", u, !0), g.addEventListener("mouseup", y, !0), g.addEventListener("touchstart", u, !0), g.addEventListener("touchend", v, !0), () => {
                g.removeEventListener("mousedown", u, !0), g.removeEventListener("mouseup", y, !0), g.removeEventListener("touchstart", u, !0), g.removeEventListener("touchend", v, !0)
            }
        }
    }, [n, i, u, d])
}

function ha(e, n) {
    if (e.button > 0) return !1;
    if (e.target) {
        const o = e.target.ownerDocument;
        if (!o || !o.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
    }
    return n.current && !n.current.contains(e.target)
}

function Bm(e) {
    if (!e) return;
    let n = !0;
    return o => {
        let i = { ...o,
            preventDefault() {
                o.preventDefault()
            },
            isDefaultPrevented() {
                return o.isDefaultPrevented()
            },
            stopPropagation() {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
                n = !1
            }
        };
        e(i), n && o.stopPropagation()
    }
}

function EP(e) {
    return {
        keyboardProps: e.isDisabled ? {} : {
            onKeyDown: Bm(e.onKeyDown),
            onKeyUp: Bm(e.onKeyUp)
        }
    }
}

function _a(e) {
    const n = Ne(e);
    if (Sv() === "virtual") {
        let o = n.activeElement;
        av(() => {
            n.activeElement === o && e.isConnected && Lr(e)
        })
    } else Lr(e)
}

function TP(e) {
    const n = Jt(e);
    if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement)) return !1;
    let {
        display: o,
        visibility: i
    } = e.style, a = o !== "none" && i !== "hidden" && i !== "collapse";
    if (a) {
        const {
            getComputedStyle: c
        } = e.ownerDocument.defaultView;
        let {
            display: u,
            visibility: d
        } = c(e);
        a = u !== "none" && d !== "hidden" && d !== "collapse"
    }
    return a
}

function CP(e, n) {
    return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0)
}

function Pv(e, n) {
    return e.nodeName !== "#comment" && TP(e) && CP(e, n) && (!e.parentElement || Pv(e.parentElement, e))
}
const Um = Se.createContext(null),
    zc = "react-aria-focus-scope-restore";
let Ae = null;

function $P(e) {
    let {
        children: n,
        contain: o,
        restoreFocus: i,
        autoFocus: a
    } = e, c = S.useRef(null), u = S.useRef(null), d = S.useRef([]), {
        parentNode: p
    } = S.useContext(Um) || {}, h = S.useMemo(() => new Uc({
        scopeRef: d
    }), [d]);
    Ye(() => {
        let v = p || Qe.root;
        if (Qe.getTreeNode(v.scopeRef) && Ae && !Da(Ae, v.scopeRef)) {
            let b = Qe.getTreeNode(Ae);
            b && (v = b)
        }
        v.addChild(h), Qe.addNode(h)
    }, [h, p]), Ye(() => {
        let v = Qe.getTreeNode(d);
        v && (v.contain = !!o)
    }, [o]), Ye(() => {
        var v;
        let b = (v = c.current) === null || v === void 0 ? void 0 : v.nextSibling,
            P = [],
            C = L => L.stopPropagation();
        for (; b && b !== u.current;) P.push(b), b.addEventListener(zc, C), b = b.nextSibling;
        return d.current = P, () => {
            for (let L of P) L.removeEventListener(zc, C)
        }
    }, [n]), DP(d, i, o), AP(d, o), NP(d, i, o), _P(d, a), S.useEffect(() => {
        const v = Ne(d.current ? d.current[0] : void 0).activeElement;
        let b = null;
        if (zt(v, d.current)) {
            for (let P of Qe.traverse()) P.scopeRef && zt(v, P.scopeRef.current) && (b = P);
            b === Qe.getTreeNode(d) && (Ae = b.scopeRef)
        }
    }, [d]), Ye(() => () => {
        var v, b, P;
        let C = (P = (b = Qe.getTreeNode(d)) === null || b === void 0 || (v = b.parent) === null || v === void 0 ? void 0 : v.scopeRef) !== null && P !== void 0 ? P : null;
        (d === Ae || Da(d, Ae)) && (!C || Qe.getTreeNode(C)) && (Ae = C), Qe.removeTreeNode(d)
    }, [d]);
    let g = S.useMemo(() => kP(d), []),
        y = S.useMemo(() => ({
            focusManager: g,
            parentNode: h
        }), [h, g]);
    return Se.createElement(Um.Provider, {
        value: y
    }, Se.createElement("span", {
        "data-focus-scope-start": !0,
        hidden: !0,
        ref: c
    }), n, Se.createElement("span", {
        "data-focus-scope-end": !0,
        hidden: !0,
        ref: u
    }))
}

function kP(e) {
    return {
        focusNext(n = {}) {
            let o = e.current,
                {
                    from: i,
                    tabbable: a,
                    wrap: c,
                    accept: u
                } = n,
                d = i || Ne(o[0]).activeElement,
                p = o[0].previousElementSibling,
                h = Ar(o),
                g = tr(h, {
                    tabbable: a,
                    accept: u
                }, o);
            g.currentNode = zt(d, o) ? d : p;
            let y = g.nextNode();
            return !y && c && (g.currentNode = p, y = g.nextNode()), y && Tn(y, !0), y
        },
        focusPrevious(n = {}) {
            let o = e.current,
                {
                    from: i,
                    tabbable: a,
                    wrap: c,
                    accept: u
                } = n,
                d = i || Ne(o[0]).activeElement,
                p = o[o.length - 1].nextElementSibling,
                h = Ar(o),
                g = tr(h, {
                    tabbable: a,
                    accept: u
                }, o);
            g.currentNode = zt(d, o) ? d : p;
            let y = g.previousNode();
            return !y && c && (g.currentNode = p, y = g.previousNode()), y && Tn(y, !0), y
        },
        focusFirst(n = {}) {
            let o = e.current,
                {
                    tabbable: i,
                    accept: a
                } = n,
                c = Ar(o),
                u = tr(c, {
                    tabbable: i,
                    accept: a
                }, o);
            u.currentNode = o[0].previousElementSibling;
            let d = u.nextNode();
            return d && Tn(d, !0), d
        },
        focusLast(n = {}) {
            let o = e.current,
                {
                    tabbable: i,
                    accept: a
                } = n,
                c = Ar(o),
                u = tr(c, {
                    tabbable: i,
                    accept: a
                }, o);
            u.currentNode = o[o.length - 1].nextElementSibling;
            let d = u.previousNode();
            return d && Tn(d, !0), d
        }
    }
}
const Md = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
    MP = Md.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Md.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const LP = Md.join(':not([hidden]):not([tabindex="-1"]),');

function Ar(e) {
    return e[0].parentElement
}

function $i(e) {
    let n = Qe.getTreeNode(Ae);
    for (; n && n.scopeRef !== e;) {
        if (n.contain) return !1;
        n = n.parent
    }
    return !0
}

function AP(e, n) {
    let o = S.useRef(void 0),
        i = S.useRef(void 0);
    Ye(() => {
        let a = e.current;
        if (!n) {
            i.current && (cancelAnimationFrame(i.current), i.current = void 0);
            return
        }
        const c = Ne(a ? a[0] : void 0);
        let u = h => {
                if (h.key !== "Tab" || h.altKey || h.ctrlKey || h.metaKey || !$i(e) || h.isComposing) return;
                let g = c.activeElement,
                    y = e.current;
                if (!y || !zt(g, y)) return;
                let v = Ar(y),
                    b = tr(v, {
                        tabbable: !0
                    }, y);
                if (!g) return;
                b.currentNode = g;
                let P = h.shiftKey ? b.previousNode() : b.nextNode();
                P || (b.currentNode = h.shiftKey ? y[y.length - 1].nextElementSibling : y[0].previousElementSibling, P = h.shiftKey ? b.previousNode() : b.nextNode()), h.preventDefault(), P && Tn(P, !0)
            },
            d = h => {
                (!Ae || Da(Ae, e)) && zt(h.target, e.current) ? (Ae = e, o.current = h.target) : $i(e) && !er(h.target, e) ? o.current ? o.current.focus() : Ae && Ae.current && Bc(Ae.current) : $i(e) && (o.current = h.target)
            },
            p = h => {
                i.current && cancelAnimationFrame(i.current), i.current = requestAnimationFrame(() => {
                    if (c.activeElement && $i(e) && !er(c.activeElement, e))
                        if (Ae = e, c.body.contains(h.target)) {
                            var g;
                            o.current = h.target, (g = o.current) === null || g === void 0 || g.focus()
                        } else Ae.current && Bc(Ae.current)
                })
            };
        return c.addEventListener("keydown", u, !1), c.addEventListener("focusin", d, !1), a == null || a.forEach(h => h.addEventListener("focusin", d, !1)), a == null || a.forEach(h => h.addEventListener("focusout", p, !1)), () => {
            c.removeEventListener("keydown", u, !1), c.removeEventListener("focusin", d, !1), a == null || a.forEach(h => h.removeEventListener("focusin", d, !1)), a == null || a.forEach(h => h.removeEventListener("focusout", p, !1))
        }
    }, [e, n]), Ye(() => () => {
        i.current && cancelAnimationFrame(i.current)
    }, [i])
}

function Ev(e) {
    return er(e)
}

function zt(e, n) {
    return !e || !n ? !1 : n.some(o => o.contains(e))
}

function er(e, n = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let {
            scopeRef: o
        } of Qe.traverse(Qe.getTreeNode(n)))
        if (o && zt(e, o.current)) return !0;
    return !1
}

function RP(e) {
    return er(e, Ae)
}

function Da(e, n) {
    var o;
    let i = (o = Qe.getTreeNode(n)) === null || o === void 0 ? void 0 : o.parent;
    for (; i;) {
        if (i.scopeRef === e) return !0;
        i = i.parent
    }
    return !1
}

function Tn(e, n = !1) {
    if (e != null && !n) try {
        _a(e)
    } catch {} else if (e != null) try {
        e.focus()
    } catch {}
}

function Tv(e, n = !0) {
    let o = e[0].previousElementSibling,
        i = Ar(e),
        a = tr(i, {
            tabbable: n
        }, e);
    a.currentNode = o;
    let c = a.nextNode();
    return n && !c && (i = Ar(e), a = tr(i, {
        tabbable: !1
    }, e), a.currentNode = o, c = a.nextNode()), c
}

function Bc(e, n = !0) {
    Tn(Tv(e, n))
}

function _P(e, n) {
    const o = Se.useRef(n);
    S.useEffect(() => {
        if (o.current) {
            Ae = e;
            const i = Ne(e.current ? e.current[0] : void 0);
            !zt(i.activeElement, Ae.current) && e.current && Bc(e.current)
        }
        o.current = !1
    }, [e])
}

function DP(e, n, o) {
    Ye(() => {
        if (n || o) return;
        let i = e.current;
        const a = Ne(i ? i[0] : void 0);
        let c = u => {
            let d = u.target;
            zt(d, e.current) ? Ae = e : Ev(d) || (Ae = null)
        };
        return a.addEventListener("focusin", c, !1), i == null || i.forEach(u => u.addEventListener("focusin", c, !1)), () => {
            a.removeEventListener("focusin", c, !1), i == null || i.forEach(u => u.removeEventListener("focusin", c, !1))
        }
    }, [e, n, o])
}

function Hm(e) {
    let n = Qe.getTreeNode(Ae);
    for (; n && n.scopeRef !== e;) {
        if (n.nodeToRestore) return !1;
        n = n.parent
    }
    return (n == null ? void 0 : n.scopeRef) === e
}

function NP(e, n, o) {
    const i = S.useRef(typeof document < "u" ? Ne(e.current ? e.current[0] : void 0).activeElement : null);
    Ye(() => {
        let a = e.current;
        const c = Ne(a ? a[0] : void 0);
        if (!n || o) return;
        let u = () => {
            (!Ae || Da(Ae, e)) && zt(c.activeElement, e.current) && (Ae = e)
        };
        return c.addEventListener("focusin", u, !1), a == null || a.forEach(d => d.addEventListener("focusin", u, !1)), () => {
            c.removeEventListener("focusin", u, !1), a == null || a.forEach(d => d.removeEventListener("focusin", u, !1))
        }
    }, [e, o]), Ye(() => {
        const a = Ne(e.current ? e.current[0] : void 0);
        if (!n) return;
        let c = u => {
            if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !$i(e) || u.isComposing) return;
            let d = a.activeElement;
            if (!er(d, e) || !Hm(e)) return;
            let p = Qe.getTreeNode(e);
            if (!p) return;
            let h = p.nodeToRestore,
                g = tr(a.body, {
                    tabbable: !0
                });
            g.currentNode = d;
            let y = u.shiftKey ? g.previousNode() : g.nextNode();
            if ((!h || !a.body.contains(h) || h === a.body) && (h = void 0, p.nodeToRestore = void 0), (!y || !er(y, e)) && h) {
                g.currentNode = h;
                do y = u.shiftKey ? g.previousNode() : g.nextNode(); while (er(y, e));
                u.preventDefault(), u.stopPropagation(), y ? Tn(y, !0) : Ev(h) ? Tn(h, !0) : d.blur()
            }
        };
        return o || a.addEventListener("keydown", c, !0), () => {
            o || a.removeEventListener("keydown", c, !0)
        }
    }, [e, n, o]), Ye(() => {
        const a = Ne(e.current ? e.current[0] : void 0);
        if (!n) return;
        let c = Qe.getTreeNode(e);
        if (c) {
            var u;
            return c.nodeToRestore = (u = i.current) !== null && u !== void 0 ? u : void 0, () => {
                let d = Qe.getTreeNode(e);
                if (!d) return;
                let p = d.nodeToRestore;
                if (n && p && (a.activeElement && er(a.activeElement, e) || a.activeElement === a.body && Hm(e))) {
                    let h = Qe.clone();
                    requestAnimationFrame(() => {
                        if (a.activeElement === a.body) {
                            let g = h.getTreeNode(e);
                            for (; g;) {
                                if (g.nodeToRestore && g.nodeToRestore.isConnected) {
                                    Wm(g.nodeToRestore);
                                    return
                                }
                                g = g.parent
                            }
                            for (g = h.getTreeNode(e); g;) {
                                if (g.scopeRef && g.scopeRef.current && Qe.getTreeNode(g.scopeRef)) {
                                    let y = Tv(g.scopeRef.current, !0);
                                    Wm(y);
                                    return
                                }
                                g = g.parent
                            }
                        }
                    })
                }
            }
        }
    }, [e, n])
}

function Wm(e) {
    e.dispatchEvent(new CustomEvent(zc, {
        bubbles: !0,
        cancelable: !0
    })) && Tn(e)
}

function tr(e, n, o) {
    let i = n != null && n.tabbable ? LP : MP,
        a = Ne(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(c) {
                var u;
                return !(n == null || (u = n.from) === null || u === void 0) && u.contains(c) ? NodeFilter.FILTER_REJECT : c.matches(i) && Pv(c) && (!o || zt(c, o)) && (!(n != null && n.accept) || n.accept(c)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    return n != null && n.from && (a.currentNode = n.from), a
}
class Ld {
    get size() {
        return this.fastMap.size
    }
    getTreeNode(n) {
        return this.fastMap.get(n)
    }
    addTreeNode(n, o, i) {
        let a = this.fastMap.get(o ? ? null);
        if (!a) return;
        let c = new Uc({
            scopeRef: n
        });
        a.addChild(c), c.parent = a, this.fastMap.set(n, c), i && (c.nodeToRestore = i)
    }
    addNode(n) {
        this.fastMap.set(n.scopeRef, n)
    }
    removeTreeNode(n) {
        if (n === null) return;
        let o = this.fastMap.get(n);
        if (!o) return;
        let i = o.parent;
        for (let c of this.traverse()) c !== o && o.nodeToRestore && c.nodeToRestore && o.scopeRef && o.scopeRef.current && zt(c.nodeToRestore, o.scopeRef.current) && (c.nodeToRestore = o.nodeToRestore);
        let a = o.children;
        i && (i.removeChild(o), a.size > 0 && a.forEach(c => i && i.addChild(c))), this.fastMap.delete(o.scopeRef)
    }* traverse(n = this.root) {
        if (n.scopeRef != null && (yield n), n.children.size > 0)
            for (let o of n.children) yield* this.traverse(o)
    }
    clone() {
        var n;
        let o = new Ld;
        var i;
        for (let a of this.traverse()) o.addTreeNode(a.scopeRef, (i = (n = a.parent) === null || n === void 0 ? void 0 : n.scopeRef) !== null && i !== void 0 ? i : null, a.nodeToRestore);
        return o
    }
    constructor() {
        this.fastMap = new Map, this.root = new Uc({
            scopeRef: null
        }), this.fastMap.set(null, this.root)
    }
}
class Uc {
    addChild(n) {
        this.children.add(n), n.parent = this
    }
    removeChild(n) {
        this.children.delete(n), n.parent = void 0
    }
    constructor(n) {
        this.children = new Set, this.contain = !1, this.scopeRef = n.scopeRef
    }
}
let Qe = new Ld;

function Ad(e = {}) {
    let {
        autoFocus: n = !1,
        isTextInput: o,
        within: i
    } = e, a = S.useRef({
        isFocused: !1,
        isFocusVisible: n || Cd()
    }), [c, u] = S.useState(!1), [d, p] = S.useState(() => a.current.isFocused && a.current.isFocusVisible), h = S.useCallback(() => p(a.current.isFocused && a.current.isFocusVisible), []), g = S.useCallback(b => {
        a.current.isFocused = b, u(b), h()
    }, [h]);
    bP(b => {
        a.current.isFocusVisible = b, h()
    }, [], {
        isTextInput: o
    });
    let {
        focusProps: y
    } = yv({
        isDisabled: i,
        onFocusChange: g
    }), {
        focusWithinProps: v
    } = $d({
        isDisabled: !i,
        onFocusWithinChange: g
    });
    return {
        isFocused: c,
        isFocusVisible: d,
        focusProps: i ? v : y
    }
}
let OP = Se.createContext(null);

function jP(e) {
    let n = S.useContext(OP) || {};
    lv(n, e);
    let {
        ref: o,
        ...i
    } = n;
    return i
}

function Rd(e, n) {
    let {
        focusProps: o
    } = yv(e), {
        keyboardProps: i
    } = EP(e), a = Ue(o, i), c = jP(n), u = e.isDisabled ? {} : c, d = S.useRef(e.autoFocus);
    return S.useEffect(() => {
        d.current && n.current && _a(n.current), d.current = !1
    }, [n]), {
        focusableProps: Ue({ ...a,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
        }, u)
    }
}
const Sn = [];

function Cv(e, n) {
    let {
        onClose: o,
        shouldCloseOnBlur: i,
        isOpen: a,
        isDismissable: c = !1,
        isKeyboardDismissDisabled: u = !1,
        shouldCloseOnInteractOutside: d
    } = e;
    S.useEffect(() => (a && Sn.push(n), () => {
        let P = Sn.indexOf(n);
        P >= 0 && Sn.splice(P, 1)
    }), [a, n]);
    let p = () => {
            Sn[Sn.length - 1] === n && o && o()
        },
        h = P => {
            (!d || d(P.target)) && Sn[Sn.length - 1] === n && (P.stopPropagation(), P.preventDefault())
        },
        g = P => {
            (!d || d(P.target)) && (Sn[Sn.length - 1] === n && (P.stopPropagation(), P.preventDefault()), p())
        },
        y = P => {
            P.key === "Escape" && !u && !P.nativeEvent.isComposing && (P.stopPropagation(), P.preventDefault(), p())
        };
    PP({
        ref: n,
        onInteractOutside: c && a ? g : void 0,
        onInteractOutsideStart: h
    });
    let {
        focusWithinProps: v
    } = $d({
        isDisabled: !i,
        onBlurWithin: P => {
            !P.relatedTarget || RP(P.relatedTarget) || (!d || d(P.relatedTarget)) && (o == null || o())
        }
    }), b = P => {
        P.target === P.currentTarget && P.preventDefault()
    };
    return {
        overlayProps: {
            onKeyDown: y,
            ...v
        },
        underlayProps: {
            onPointerDown: b
        }
    }
}
const hc = typeof document < "u" && window.visualViewport,
    IP = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
let ma = 0,
    mc;

function VP(e = {}) {
    let {
        isDisabled: n
    } = e;
    Ye(() => {
        if (!n) return ma++, ma === 1 && (Hi() ? mc = zP() : mc = FP()), () => {
            ma--, ma === 0 && mc()
        }
    }, [n])
}

function FP() {
    return nr(yo(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), yo(document.documentElement, "overflow", "hidden"))
}

function zP() {
    let e, n, o = h => {
            e = uv(h.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (n = yo(e, "overscrollBehavior", "contain"))
        },
        i = h => {
            if (!e || e === document.documentElement || e === document.body) {
                h.preventDefault();
                return
            }
            e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && h.preventDefault()
        },
        a = h => {
            let g = h.target;
            Gm(g) && g !== document.activeElement && (h.preventDefault(), d(), g.style.transform = "translateY(-2000px)", g.focus(), requestAnimationFrame(() => {
                g.style.transform = ""
            })), n && n()
        },
        c = h => {
            let g = h.target;
            Gm(g) && (d(), g.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                g.style.transform = "", hc && (hc.height < window.innerHeight ? requestAnimationFrame(() => {
                    Km(g)
                }) : hc.addEventListener("resize", () => Km(g), {
                    once: !0
                }))
            }))
        },
        u = null,
        d = () => {
            if (u) return;
            let h = () => {
                    window.scrollTo(0, 0)
                },
                g = window.pageXOffset,
                y = window.pageYOffset;
            u = nr(xi(window, "scroll", h), yo(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), yo(document.documentElement, "overflow", "hidden"), yo(document.body, "marginTop", `-${y}px`), () => {
                window.scrollTo(g, y)
            }), window.scrollTo(0, 0)
        },
        p = nr(xi(document, "touchstart", o, {
            passive: !1,
            capture: !0
        }), xi(document, "touchmove", i, {
            passive: !1,
            capture: !0
        }), xi(document, "touchend", a, {
            passive: !1,
            capture: !0
        }), xi(document, "focus", c, !0));
    return () => {
        n == null || n(), u == null || u(), p()
    }
}

function yo(e, n, o) {
    let i = e.style[n];
    return e.style[n] = o, () => {
        e.style[n] = i
    }
}

function xi(e, n, o, i) {
    return e.addEventListener(n, o, i), () => {
        e.removeEventListener(n, o, i)
    }
}

function Km(e) {
    let n = document.scrollingElement || document.documentElement,
        o = e;
    for (; o && o !== n;) {
        let i = uv(o);
        if (i !== document.documentElement && i !== document.body && i !== o) {
            let a = i.getBoundingClientRect().top,
                c = o.getBoundingClientRect().top;
            c > a + o.clientHeight && (i.scrollTop += c - a)
        }
        o = i.parentElement
    }
}

function Gm(e) {
    return e instanceof HTMLInputElement && !IP.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}
var BP = Uy();
const $v = By(BP),
    Hc = Se.createContext(null);

function UP(e) {
    let {
        children: n
    } = e, o = S.useContext(Hc), [i, a] = S.useState(0), c = S.useMemo(() => ({
        parent: o,
        modalCount: i,
        addModal() {
            a(u => u + 1), o && o.addModal()
        },
        removeModal() {
            a(u => u - 1), o && o.removeModal()
        }
    }), [o, i]);
    return Se.createElement(Hc.Provider, {
        value: c
    }, n)
}

function HP() {
    let e = S.useContext(Hc);
    return {
        modalProviderProps: {
            "aria-hidden": e && e.modalCount > 0 ? !0 : void 0
        }
    }
}

function WP(e) {
    let {
        modalProviderProps: n
    } = HP();
    return Se.createElement("div", {
        "data-overlay-container": !0,
        ...e,
        ...n
    })
}

function kv(e) {
    return Se.createElement(UP, null, Se.createElement(WP, e))
}

function Ym(e) {
    let n = Ui(),
        {
            portalContainer: o = n ? null : document.body,
            ...i
        } = e;
    if (Se.useEffect(() => {
            if (o != null && o.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
        }, [o]), !o) return null;
    let a = Se.createElement(kv, i);
    return $v.createPortal(a, o)
}
var Mv = {};
Mv = {
    dismiss: "تجاهل"
};
var Lv = {};
Lv = {
    dismiss: "Отхвърляне"
};
var Av = {};
Av = {
    dismiss: "Odstranit"
};
var Rv = {};
Rv = {
    dismiss: "Luk"
};
var _v = {};
_v = {
    dismiss: "Schließen"
};
var Dv = {};
Dv = {
    dismiss: "Απόρριψη"
};
var Nv = {};
Nv = {
    dismiss: "Dismiss"
};
var Ov = {};
Ov = {
    dismiss: "Descartar"
};
var jv = {};
jv = {
    dismiss: "Lõpeta"
};
var Iv = {};
Iv = {
    dismiss: "Hylkää"
};
var Vv = {};
Vv = {
    dismiss: "Rejeter"
};
var Fv = {};
Fv = {
    dismiss: "התעלם"
};
var zv = {};
zv = {
    dismiss: "Odbaci"
};
var Bv = {};
Bv = {
    dismiss: "Elutasítás"
};
var Uv = {};
Uv = {
    dismiss: "Ignora"
};
var Hv = {};
Hv = {
    dismiss: "閉じる"
};
var Wv = {};
Wv = {
    dismiss: "무시"
};
var Kv = {};
Kv = {
    dismiss: "Atmesti"
};
var Gv = {};
Gv = {
    dismiss: "Nerādīt"
};
var Yv = {};
Yv = {
    dismiss: "Lukk"
};
var Xv = {};
Xv = {
    dismiss: "Negeren"
};
var Qv = {};
Qv = {
    dismiss: "Zignoruj"
};
var qv = {};
qv = {
    dismiss: "Descartar"
};
var Zv = {};
Zv = {
    dismiss: "Dispensar"
};
var Jv = {};
Jv = {
    dismiss: "Revocare"
};
var e0 = {};
e0 = {
    dismiss: "Пропустить"
};
var t0 = {};
t0 = {
    dismiss: "Zrušiť"
};
var n0 = {};
n0 = {
    dismiss: "Opusti"
};
var r0 = {};
r0 = {
    dismiss: "Odbaci"
};
var o0 = {};
o0 = {
    dismiss: "Avvisa"
};
var i0 = {};
i0 = {
    dismiss: "Kapat"
};
var s0 = {};
s0 = {
    dismiss: "Скасувати"
};
var a0 = {};
a0 = {
    dismiss: "取消"
};
var l0 = {};
l0 = {
    dismiss: "關閉"
};
var u0 = {};
u0 = {
    "ar-AE": Mv,
    "bg-BG": Lv,
    "cs-CZ": Av,
    "da-DK": Rv,
    "de-DE": _v,
    "el-GR": Dv,
    "en-US": Nv,
    "es-ES": Ov,
    "et-EE": jv,
    "fi-FI": Iv,
    "fr-FR": Vv,
    "he-IL": Fv,
    "hr-HR": zv,
    "hu-HU": Bv,
    "it-IT": Uv,
    "ja-JP": Hv,
    "ko-KR": Wv,
    "lt-LT": Kv,
    "lv-LV": Gv,
    "nb-NO": Yv,
    "nl-NL": Xv,
    "pl-PL": Qv,
    "pt-BR": qv,
    "pt-PT": Zv,
    "ro-RO": Jv,
    "ru-RU": e0,
    "sk-SK": t0,
    "sl-SI": n0,
    "sr-SP": r0,
    "sv-SE": o0,
    "tr-TR": i0,
    "uk-UA": s0,
    "zh-CN": a0,
    "zh-TW": l0
};
const Xm = {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap"
};

function KP(e = {}) {
    let {
        style: n,
        isFocusable: o
    } = e, [i, a] = S.useState(!1), {
        focusWithinProps: c
    } = $d({
        isDisabled: !o,
        onFocusWithinChange: d => a(d)
    }), u = S.useMemo(() => i ? n : n ? { ...Xm,
        ...n
    } : Xm, [i]);
    return {
        visuallyHiddenProps: { ...c,
            style: u
        }
    }
}

function GP(e) {
    let {
        children: n,
        elementType: o = "div",
        isFocusable: i,
        style: a,
        ...c
    } = e, {
        visuallyHiddenProps: u
    } = KP(e);
    return Se.createElement(o, Ue(c, u), n)
}

function YP(e) {
    return e && e.__esModule ? e.default : e
}

function Qm(e) {
    let {
        onDismiss: n,
        ...o
    } = e, i = bS(YP(u0), "@react-aria/overlays"), a = HS(o, i.format("dismiss")), c = () => {
        n && n()
    };
    return Se.createElement(GP, null, Se.createElement("button", { ...a,
        tabIndex: -1,
        onClick: c,
        style: {
            width: 1,
            height: 1
        }
    }))
}
let wi = new WeakMap,
    Ot = [];

function XP(e, n = document.body) {
    let o = new Set(e),
        i = new Set,
        a = p => {
            for (let v of p.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) o.add(v);
            let h = v => {
                    if (o.has(v) || v.parentElement && i.has(v.parentElement) && v.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
                    for (let b of o)
                        if (v.contains(b)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT
                },
                g = document.createTreeWalker(p, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: h
                }),
                y = h(p);
            if (y === NodeFilter.FILTER_ACCEPT && c(p), y !== NodeFilter.FILTER_REJECT) {
                let v = g.nextNode();
                for (; v != null;) c(v), v = g.nextNode()
            }
        },
        c = p => {
            var h;
            let g = (h = wi.get(p)) !== null && h !== void 0 ? h : 0;
            p.getAttribute("aria-hidden") === "true" && g === 0 || (g === 0 && p.setAttribute("aria-hidden", "true"), i.add(p), wi.set(p, g + 1))
        };
    Ot.length && Ot[Ot.length - 1].disconnect(), a(n);
    let u = new MutationObserver(p => {
        for (let h of p)
            if (!(h.type !== "childList" || h.addedNodes.length === 0) && ![...o, ...i].some(g => g.contains(h.target))) {
                for (let g of h.removedNodes) g instanceof Element && (o.delete(g), i.delete(g));
                for (let g of h.addedNodes)(g instanceof HTMLElement || g instanceof SVGElement) && (g.dataset.liveAnnouncer === "true" || g.dataset.reactAriaTopLayer === "true") ? o.add(g) : g instanceof Element && a(g)
            }
    });
    u.observe(n, {
        childList: !0,
        subtree: !0
    });
    let d = {
        observe() {
            u.observe(n, {
                childList: !0,
                subtree: !0
            })
        },
        disconnect() {
            u.disconnect()
        }
    };
    return Ot.push(d), () => {
        u.disconnect();
        for (let p of i) {
            let h = wi.get(p);
            h != null && (h === 1 ? (p.removeAttribute("aria-hidden"), wi.delete(p)) : wi.set(p, h - 1))
        }
        d === Ot[Ot.length - 1] ? (Ot.pop(), Ot.length && Ot[Ot.length - 1].observe()) : Ot.splice(Ot.indexOf(d), 1)
    }
}
const QP = S.createContext({});

function qP() {
    var e;
    return (e = S.useContext(QP)) !== null && e !== void 0 ? e : {}
}
const c0 = Se.createContext(null);

function ZP(e) {
    let n = Ui(),
        {
            portalContainer: o = n ? null : document.body,
            isExiting: i
        } = e,
        [a, c] = S.useState(!1),
        u = S.useMemo(() => ({
            contain: a,
            setContain: c
        }), [a, c]),
        {
            getContainer: d
        } = qP();
    if (!e.portalContainer && d && (o = d()), !o) return null;
    let p = e.children;
    return e.disableFocusManagement || (p = Se.createElement($P, {
        restoreFocus: !0,
        contain: a && !i
    }, p)), p = Se.createElement(c0.Provider, {
        value: u
    }, Se.createElement(hP, null, p)), $v.createPortal(p, o)
}

function d0() {
    let e = S.useContext(c0),
        n = e == null ? void 0 : e.setContain;
    Ye(() => {
        n == null || n(!0)
    }, [n])
}
const _d = S.createContext(null);

function tl(e) {
    const n = S.useRef(null);
    return n.current === null && (n.current = e()), n.current
}
const ji = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
let JP = class extends S.Component {
    getSnapshotBeforeUpdate(n) {
        const o = this.props.childRef.current;
        if (o && n.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = o.offsetHeight || 0, i.width = o.offsetWidth || 0, i.top = o.offsetTop, i.left = o.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
};

function eE({
    children: e,
    isPresent: n
}) {
    const o = S.useId(),
        i = S.useRef(null),
        a = S.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: c
        } = S.useContext(ji);
    return S.useInsertionEffect(() => {
        const {
            width: u,
            height: d,
            top: p,
            left: h
        } = a.current;
        if (n || !i.current || !u || !d) return;
        i.current.dataset.motionPopId = o;
        const g = document.createElement("style");
        return c && (g.nonce = c), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [n]), R.jsx(JP, {
        isPresent: n,
        childRef: i,
        sizeRef: a,
        children: S.cloneElement(e, {
            ref: i
        })
    })
}
const tE = ({
    children: e,
    initial: n,
    isPresent: o,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: c,
    mode: u
}) => {
    const d = tl(nE),
        p = S.useId(),
        h = S.useCallback(y => {
            d.set(y, !0);
            for (const v of d.values())
                if (!v) return;
            i && i()
        }, [d, i]),
        g = S.useMemo(() => ({
            id: p,
            initial: n,
            isPresent: o,
            custom: a,
            onExitComplete: h,
            register: y => (d.set(y, !1), () => d.delete(y))
        }), c ? [Math.random(), h] : [o, h]);
    return S.useMemo(() => {
        d.forEach((y, v) => d.set(v, !1))
    }, [o]), S.useEffect(() => {
        !o && !d.size && i && i()
    }, [o]), u === "popLayout" && (e = R.jsx(eE, {
        isPresent: o,
        children: e
    })), R.jsx(_d.Provider, {
        value: g,
        children: e
    })
};

function nE() {
    return new Map
}
const f0 = S.createContext({}),
    rE = e => e,
    ga = e => e.key || "";

function qm(e) {
    const n = [];
    return S.Children.forEach(e, o => {
        S.isValidElement(o) && n.push(o)
    }), n
}
const p0 = typeof window < "u",
    h0 = p0 ? S.useLayoutEffect : S.useEffect,
    Dd = ({
        children: e,
        exitBeforeEnter: n,
        custom: o,
        initial: i = !0,
        onExitComplete: a,
        presenceAffectsLayout: c = !0,
        mode: u = "sync"
    }) => {
        const d = S.useMemo(() => qm(e), [e]),
            p = d.map(ga),
            h = S.useRef(!0),
            g = S.useRef(d),
            y = tl(() => new Map),
            [v, b] = S.useState(d),
            [P, C] = S.useState(d);
        h0(() => {
            h.current = !1, g.current = d;
            for (let _ = 0; _ < P.length; _++) {
                const D = ga(P[_]);
                p.includes(D) ? y.delete(D) : y.get(D) !== !0 && y.set(D, !1)
            }
        }, [P, p.length, p.join("-")]);
        const L = [];
        if (d !== v) {
            let _ = [...d];
            for (let D = 0; D < P.length; D++) {
                const F = P[D],
                    U = ga(F);
                p.includes(U) || (_.splice(D, 0, F), L.push(F))
            }
            u === "wait" && L.length && (_ = L), C(qm(_)), b(d);
            return
        }
        const {
            forceRender: $
        } = S.useContext(f0);
        return R.jsx(R.Fragment, {
            children: P.map(_ => {
                const D = ga(_),
                    F = d === P || p.includes(D),
                    U = () => {
                        if (y.has(D)) y.set(D, !0);
                        else return;
                        let Y = !0;
                        y.forEach(oe => {
                            oe || (Y = !1)
                        }), Y && ($ == null || $(), C(g.current), a && a())
                    };
                return R.jsx(tE, {
                    isPresent: F,
                    initial: !h.current || i ? void 0 : !1,
                    custom: F ? void 0 : o,
                    presenceAffectsLayout: c,
                    mode: u,
                    onExitComplete: F ? void 0 : U,
                    children: _
                }, D)
            })
        })
    },
    oE = {
        skipAnimations: !1,
        useManualTiming: !1
    };

function iE(e) {
    let n = new Set,
        o = new Set,
        i = !1,
        a = !1;
    const c = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function d(h) {
        c.has(h) && (p.schedule(h), e()), h(u)
    }
    const p = {
        schedule: (h, g = !1, y = !1) => {
            const b = y && i ? n : o;
            return g && c.add(h), b.has(h) || b.add(h), h
        },
        cancel: h => {
            o.delete(h), c.delete(h)
        },
        process: h => {
            if (u = h, i) {
                a = !0;
                return
            }
            i = !0, [n, o] = [o, n], n.forEach(d), n.clear(), i = !1, a && (a = !1, p.process(h))
        }
    };
    return p
}
const ya = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    sE = 40;

function m0(e, n) {
    let o = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => o = !0,
        u = ya.reduce(($, _) => ($[_] = iE(c), $), {}),
        {
            read: d,
            resolveKeyframes: p,
            update: h,
            preRender: g,
            render: y,
            postRender: v
        } = u,
        b = () => {
            const $ = performance.now();
            o = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min($ - a.timestamp, sE), 1), a.timestamp = $, a.isProcessing = !0, d.process(a), p.process(a), h.process(a), g.process(a), y.process(a), v.process(a), a.isProcessing = !1, o && n && (i = !1, e(b))
        },
        P = () => {
            o = !0, i = !0, a.isProcessing || e(b)
        };
    return {
        schedule: ya.reduce(($, _) => {
            const D = u[_];
            return $[_] = (F, U = !1, Y = !1) => (o || P(), D.schedule(F, U, Y)), $
        }, {}),
        cancel: $ => {
            for (let _ = 0; _ < ya.length; _++) u[ya[_]].cancel($)
        },
        state: a,
        steps: u
    }
}
const {
    schedule: Zm,
    cancel: J4,
    state: e5,
    steps: t5
} = m0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rE, !0), Nd = S.createContext({
    strict: !1
}), Jm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, Na = {};
for (const e in Jm) Na[e] = {
    isEnabled: n => Jm[e].some(o => !!n[o])
};

function Wc(e) {
    for (const n in e) Na[n] = { ...Na[n],
        ...e[n]
    }
}

function Oa({
    children: e,
    features: n,
    strict: o = !1
}) {
    const [, i] = S.useState(!gc(n)), a = S.useRef(void 0);
    if (!gc(n)) {
        const {
            renderer: c,
            ...u
        } = n;
        a.current = c, Wc(u)
    }
    return S.useEffect(() => {
        gc(n) && n().then(({
            renderer: c,
            ...u
        }) => {
            Wc(u), a.current = c, i(!0)
        })
    }, []), R.jsx(Nd.Provider, {
        value: {
            renderer: a.current,
            strict: o
        },
        children: e
    })
}

function gc(e) {
    return typeof e == "function"
}
const aE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ja(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || aE.has(e)
}
let g0 = e => !ja(e);

function y0(e) {
    e && (g0 = n => n.startsWith("on") ? !ja(n) : e(n))
}
try {
    y0(require("@emotion/is-prop-valid").default)
} catch {}

function lE(e, n, o) {
    const i = {};
    for (const a in e) a === "values" && typeof e.values == "object" || (g0(a) || o === !0 && ja(a) || !n && !ja(a) || e.draggable && a.startsWith("onDrag")) && (i[a] = e[a]);
    return i
}

function uE({
    children: e,
    isValidProp: n,
    ...o
}) {
    n && y0(n), o = { ...S.useContext(ji),
        ...o
    }, o.isStatic = tl(() => o.isStatic);
    const i = S.useMemo(() => o, [JSON.stringify(o.transition), o.transformPagePoint, o.reducedMotion]);
    return R.jsx(ji.Provider, {
        value: i,
        children: e
    })
}

function cE(e) {
    if (typeof Proxy > "u") return e;
    const n = new Map,
        o = (...i) => e(...i);
    return new Proxy(o, {
        get: (i, a) => a === "create" ? e : (n.has(a) || n.set(a, e(a)), n.get(a))
    })
}
const nl = S.createContext({});

function Kc(e) {
    return typeof e == "string" || Array.isArray(e)
}

function v0(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const dE = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    fE = ["initial", ...dE];

function Od(e) {
    return v0(e.animate) || fE.some(n => Kc(e[n]))
}

function pE(e) {
    return !!(Od(e) || e.variants)
}

function hE(e, n) {
    if (Od(e)) {
        const {
            initial: o,
            animate: i
        } = e;
        return {
            initial: o === !1 || Kc(o) ? o : void 0,
            animate: Kc(i) ? i : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}

function mE(e) {
    const {
        initial: n,
        animate: o
    } = hE(e, S.useContext(nl));
    return S.useMemo(() => ({
        initial: n,
        animate: o
    }), [eg(n), eg(o)])
}

function eg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const gE = Symbol.for("motionComponentSymbol");

function x0(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function yE(e, n, o) {
    return S.useCallback(i => {
        i && e.mount && e.mount(i), n && (i ? n.mount(i) : n.unmount()), o && (typeof o == "function" ? o(i) : x0(o) && (o.current = i))
    }, [n])
}
const w0 = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    vE = "framerAppearId",
    xE = "data-" + w0(vE),
    {
        schedule: wE,
        cancel: n5
    } = m0(queueMicrotask, !1),
    bE = S.createContext({});

function SE(e, n, o, i, a) {
    var c, u;
    const {
        visualElement: d
    } = S.useContext(nl), p = S.useContext(Nd), h = S.useContext(_d), g = S.useContext(ji).reducedMotion, y = S.useRef(null);
    i = i || p.renderer, !y.current && i && (y.current = i(e, {
        visualState: n,
        parent: d,
        props: o,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const v = y.current,
        b = S.useContext(bE);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && PE(y.current, o, a, b);
    const P = S.useRef(!1);
    S.useInsertionEffect(() => {
        v && P.current && v.update(o, h)
    });
    const C = o[xE],
        L = S.useRef(!!C && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, C)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, C)));
    return h0(() => {
        v && (P.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), wE.render(v.render), L.current && v.animationState && v.animationState.animateChanges())
    }), S.useEffect(() => {
        v && (!L.current && v.animationState && v.animationState.animateChanges(), L.current && (queueMicrotask(() => {
            var $;
            ($ = window.MotionHandoffMarkAsComplete) === null || $ === void 0 || $.call(window, C)
        }), L.current = !1))
    }), v
}

function PE(e, n, o, i) {
    const {
        layoutId: a,
        layout: c,
        drag: u,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: h
    } = n;
    e.projection = new o(e.latestValues, n["data-framer-portal-id"] ? void 0 : b0(e.parent)), e.projection.setOptions({
        layoutId: a,
        layout: c,
        alwaysMeasureLayout: !!u || d && x0(d),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: p,
        layoutRoot: h
    })
}

function b0(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : b0(e.parent)
}

function EE({
    preloadedFeatures: e,
    createVisualElement: n,
    useRender: o,
    useVisualState: i,
    Component: a
}) {
    var c, u;
    e && Wc(e);

    function d(h, g) {
        let y;
        const v = { ...S.useContext(ji),
                ...h,
                layoutId: TE(h)
            },
            {
                isStatic: b
            } = v,
            P = mE(h),
            C = i(h, b);
        if (!b && p0) {
            CE();
            const L = $E(v);
            y = L.MeasureLayout, P.visualElement = SE(a, C, v, n, L.ProjectionNode)
        }
        return R.jsxs(nl.Provider, {
            value: P,
            children: [y && P.visualElement ? R.jsx(y, {
                visualElement: P.visualElement,
                ...v
            }) : null, o(a, h, yE(C, P.visualElement, g), C, b, P.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a=="string"?a:`create(${(u=(c=a.displayName)!==null&&c!==void 0?c:a.name)!==null&&u!==void 0?u:""})`}`;
    const p = S.forwardRef(d);
    return p[gE] = a, p
}

function TE({
    layoutId: e
}) {
    const n = S.useContext(f0).id;
    return n && e !== void 0 ? n + "-" + e : e
}

function CE(e, n) {
    S.useContext(Nd).strict
}

function $E(e) {
    const {
        drag: n,
        layout: o
    } = Na;
    if (!n && !o) return {};
    const i = { ...n,
        ...o
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || o != null && o.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const kE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function S0(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(kE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function ME(e, {
    style: n,
    vars: o
}, i, a) {
    Object.assign(e.style, n, a && a.getProjectionStyles(i));
    for (const c in o) e.style.setProperty(c, o[c])
}
const LE = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function AE(e, n, o, i) {
    ME(e, n, void 0, i);
    for (const a in n.attrs) e.setAttribute(LE.has(a) ? a : w0(a), n.attrs[a])
}
const Ir = e => !!(e && e.getVelocity),
    RE = {},
    rl = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    P0 = new Set(rl);

function E0(e, {
    layout: n,
    layoutId: o
}) {
    return P0.has(e) || e.startsWith("origin") || (n || o !== void 0) && (!!RE[e] || e === "opacity")
}

function T0(e, n, o) {
    var i;
    const {
        style: a
    } = e, c = {};
    for (const u in a)(Ir(a[u]) || n.style && Ir(n.style[u]) || E0(u, e) || ((i = o == null ? void 0 : o.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (c[u] = a[u]);
    return c
}

function _E(e, n, o) {
    const i = T0(e, n, o);
    for (const a in e)
        if (Ir(e[a]) || Ir(n[a])) {
            const c = rl.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[c] = e[a]
        }
    return i
}

function tg(e) {
    const n = [{}, {}];
    return e == null || e.values.forEach((o, i) => {
        n[0][i] = o.get(), n[1][i] = o.getVelocity()
    }), n
}

function DE(e, n, o, i) {
    if (typeof n == "function") {
        const [a, c] = tg(i);
        n = n(o !== void 0 ? o : e.custom, a, c)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
        const [a, c] = tg(i);
        n = n(o !== void 0 ? o : e.custom, a, c)
    }
    return n
}
const NE = e => Array.isArray(e),
    OE = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    r5 = e => NE(e) ? e[e.length - 1] || 0 : e;

function jE(e) {
    const n = Ir(e) ? e.get() : e;
    return OE(n) ? n.toValue() : n
}

function IE({
    scrapeMotionValuesFromProps: e,
    createRenderState: n,
    onMount: o
}, i, a, c) {
    const u = {
        latestValues: VE(i, a, c, e),
        renderState: n()
    };
    return o && (u.mount = d => o(i, d, u)), u
}
const C0 = e => (n, o) => {
    const i = S.useContext(nl),
        a = S.useContext(_d),
        c = () => IE(e, n, i, a);
    return o ? c() : tl(c)
};

function VE(e, n, o, i) {
    const a = {},
        c = i(e, {});
    for (const v in c) a[v] = jE(c[v]);
    let {
        initial: u,
        animate: d
    } = e;
    const p = Od(e),
        h = pE(e);
    n && h && !p && e.inherit !== !1 && (u === void 0 && (u = n.initial), d === void 0 && (d = n.animate));
    let g = o ? o.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !v0(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let b = 0; b < v.length; b++) {
            const P = DE(e, v[b]);
            if (P) {
                const {
                    transitionEnd: C,
                    transition: L,
                    ...$
                } = P;
                for (const _ in $) {
                    let D = $[_];
                    if (Array.isArray(D)) {
                        const F = g ? D.length - 1 : 0;
                        D = D[F]
                    }
                    D !== null && (a[_] = D)
                }
                for (const _ in C) a[_] = C[_]
            }
        }
    }
    return a
}
const jd = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    $0 = () => ({ ...jd(),
        attrs: {}
    }),
    k0 = (e, n) => n && typeof e == "number" ? n.transform(e) : e,
    FE = (e, n, o) => o > n ? n : o < e ? e : o,
    Id = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Gc = { ...Id,
        transform: e => FE(0, 1, e)
    },
    va = { ...Id,
        default: 1
    },
    Wi = e => ({
        test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
        parse: parseFloat,
        transform: n => `${n}${e}`
    }),
    Er = Wi("deg"),
    yc = Wi("%"),
    be = Wi("px"),
    o5 = Wi("vh"),
    i5 = Wi("vw"),
    ng = { ...yc,
        parse: e => yc.parse(e) / 100,
        transform: e => yc.transform(e * 100)
    },
    zE = {
        borderWidth: be,
        borderTopWidth: be,
        borderRightWidth: be,
        borderBottomWidth: be,
        borderLeftWidth: be,
        borderRadius: be,
        radius: be,
        borderTopLeftRadius: be,
        borderTopRightRadius: be,
        borderBottomRightRadius: be,
        borderBottomLeftRadius: be,
        width: be,
        maxWidth: be,
        height: be,
        maxHeight: be,
        top: be,
        right: be,
        bottom: be,
        left: be,
        padding: be,
        paddingTop: be,
        paddingRight: be,
        paddingBottom: be,
        paddingLeft: be,
        margin: be,
        marginTop: be,
        marginRight: be,
        marginBottom: be,
        marginLeft: be,
        backgroundPositionX: be,
        backgroundPositionY: be
    },
    BE = {
        rotate: Er,
        rotateX: Er,
        rotateY: Er,
        rotateZ: Er,
        scale: va,
        scaleX: va,
        scaleY: va,
        scaleZ: va,
        skew: Er,
        skewX: Er,
        skewY: Er,
        distance: be,
        translateX: be,
        translateY: be,
        translateZ: be,
        x: be,
        y: be,
        z: be,
        perspective: be,
        transformPerspective: be,
        opacity: Gc,
        originX: ng,
        originY: ng,
        originZ: be
    },
    rg = { ...Id,
        transform: Math.round
    },
    M0 = { ...zE,
        ...BE,
        zIndex: rg,
        size: be,
        fillOpacity: Gc,
        strokeOpacity: Gc,
        numOctaves: rg
    },
    UE = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    HE = rl.length;

function WE(e, n, o) {
    let i = "",
        a = !0;
    for (let c = 0; c < HE; c++) {
        const u = rl[c],
            d = e[u];
        if (d === void 0) continue;
        let p = !0;
        if (typeof d == "number" ? p = d === (u.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || o) {
            const h = k0(d, M0[u]);
            if (!p) {
                a = !1;
                const g = UE[u] || u;
                i += `${g}(${h}) `
            }
            o && (n[u] = h)
        }
    }
    return i = i.trim(), o ? i = o(n, a ? "" : i) : a && (i = "none"), i
}
const L0 = e => n => typeof n == "string" && n.startsWith(e),
    KE = L0("--"),
    GE = L0("var(--"),
    s5 = e => GE(e) ? YE.test(e.split("/*")[0].trim()) : !1,
    YE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function A0(e, n, o) {
    const {
        style: i,
        vars: a,
        transformOrigin: c
    } = e;
    let u = !1,
        d = !1;
    for (const p in n) {
        const h = n[p];
        if (P0.has(p)) {
            u = !0;
            continue
        } else if (KE(p)) {
            a[p] = h;
            continue
        } else {
            const g = k0(h, M0[p]);
            p.startsWith("origin") ? (d = !0, c[p] = g) : i[p] = g
        }
    }
    if (n.transform || (u || o ? i.transform = WE(n, e.transform, o) : i.transform && (i.transform = "none")), d) {
        const {
            originX: p = "50%",
            originY: h = "50%",
            originZ: g = 0
        } = c;
        i.transformOrigin = `${p} ${h} ${g}`
    }
}

function og(e, n, o) {
    return typeof e == "string" ? e : be.transform(n + o * e)
}

function XE(e, n, o) {
    const i = og(n, e.x, e.width),
        a = og(o, e.y, e.height);
    return `${i} ${a}`
}
const QE = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    qE = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function ZE(e, n, o = 1, i = 0, a = !0) {
    e.pathLength = 1;
    const c = a ? QE : qE;
    e[c.offset] = be.transform(-i);
    const u = be.transform(n),
        d = be.transform(o);
    e[c.array] = `${u} ${d}`
}

function R0(e, {
    attrX: n,
    attrY: o,
    attrScale: i,
    originX: a,
    originY: c,
    pathLength: u,
    pathSpacing: d = 1,
    pathOffset: p = 0,
    ...h
}, g, y) {
    if (A0(e, h, y), g) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: v,
        style: b,
        dimensions: P
    } = e;
    v.transform && (P && (b.transform = v.transform), delete v.transform), P && (a !== void 0 || c !== void 0 || b.transform) && (b.transformOrigin = XE(P, a !== void 0 ? a : .5, c !== void 0 ? c : .5)), n !== void 0 && (v.x = n), o !== void 0 && (v.y = o), i !== void 0 && (v.scale = i), u !== void 0 && ZE(v, u, d, p, !1)
}
const _0 = e => typeof e == "string" && e.toLowerCase() === "svg",
    JE = {
        useVisualState: C0({
            scrapeMotionValuesFromProps: _E,
            createRenderState: $0,
            onMount: (e, n, {
                renderState: o,
                latestValues: i
            }) => {
                Zm.read(() => {
                    try {
                        o.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect()
                    } catch {
                        o.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), Zm.render(() => {
                    R0(o, i, _0(n.tagName), e.transformTemplate), AE(n, o)
                })
            }
        })
    },
    eT = {
        useVisualState: C0({
            scrapeMotionValuesFromProps: T0,
            createRenderState: jd
        })
    };

function D0(e, n, o) {
    for (const i in n) !Ir(n[i]) && !E0(i, o) && (e[i] = n[i])
}

function tT({
    transformTemplate: e
}, n) {
    return S.useMemo(() => {
        const o = jd();
        return A0(o, n, e), Object.assign({}, o.vars, o.style)
    }, [n])
}

function nT(e, n) {
    const o = e.style || {},
        i = {};
    return D0(i, o, e), Object.assign(i, tT(e, n)), i
}

function rT(e, n) {
    const o = {},
        i = nT(e, n);
    return e.drag && e.dragListener !== !1 && (o.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = i, o
}

function oT(e, n, o, i) {
    const a = S.useMemo(() => {
        const c = $0();
        return R0(c, n, _0(i), e.transformTemplate), { ...c.attrs,
            style: { ...c.style
            }
        }
    }, [n]);
    if (e.style) {
        const c = {};
        D0(c, e.style, e), a.style = { ...c,
            ...a.style
        }
    }
    return a
}

function iT(e = !1) {
    return (o, i, a, {
        latestValues: c
    }, u) => {
        const p = (S0(o) ? oT : rT)(i, c, u, o),
            h = lE(i, typeof o == "string", e),
            g = o !== S.Fragment ? { ...h,
                ...p,
                ref: a
            } : {},
            {
                children: y
            } = i,
            v = S.useMemo(() => Ir(y) ? y.get() : y, [y]);
        return S.createElement(o, { ...g,
            children: v
        })
    }
}

function sT(e, n) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const u = { ...S0(i) ? JE : eT,
            preloadedFeatures: e,
            useRender: iT(a),
            createVisualElement: n,
            Component: i
        };
        return EE(u)
    }
}
const aT = sT(),
    Ia = cE(aT);
var lT = ({
    children: e,
    navigate: n,
    disableAnimation: o,
    useHref: i,
    disableRipple: a = !1,
    skipFramerMotionAnimations: c = o,
    reducedMotion: u = "never",
    validationBehavior: d,
    locale: p = "en-US",
    defaultDates: h,
    createCalendar: g,
    ...y
}) => {
    let v = e;
    n && (v = R.jsx(FS, {
        navigate: n,
        useHref: i,
        children: v
    }));
    const b = S.useMemo(() => (o && c && (oE.skipAnimations = !0), {
        createCalendar: g,
        defaultDates: h,
        disableAnimation: o,
        disableRipple: a,
        validationBehavior: d
    }), [g, h == null ? void 0 : h.maxDate, h == null ? void 0 : h.minDate, o, a, d]);
    return R.jsx(eS, {
        value: b,
        children: R.jsx(pS, {
            locale: p,
            children: R.jsx(uE, {
                reducedMotion: u,
                children: R.jsx(kv, { ...y,
                    children: v
                })
            })
        })
    })
};

function sr(e) {
    return S.forwardRef(e)
}
var ol = (e, n, o = !0) => {
        if (!n) return [e, {}];
        const i = n.reduce((a, c) => c in e ? { ...a,
            [c]: e[c]
        } : a, {});
        return o ? [Object.keys(e).filter(c => !n.includes(c)).reduce((c, u) => ({ ...c,
            [u]: e[u]
        }), {}), i] : [e, i]
    },
    xa = ["small", "medium", "large"],
    ig = {
        theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: xa,
            borderRadius: xa
        },
        classGroups: {
            shadow: [{
                shadow: xa
            }],
            "font-size": [{
                text: ["tiny", ...xa]
            }],
            "bg-image": ["bg-stripe-gradient-default", "bg-stripe-gradient-primary", "bg-stripe-gradient-secondary", "bg-stripe-gradient-success", "bg-stripe-gradient-warning", "bg-stripe-gradient-danger"]
        }
    },
    sg = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Tt = e => !e || typeof e != "object" || Object.keys(e).length === 0,
    uT = (e, n) => JSON.stringify(e) === JSON.stringify(n);

function N0(e, n) {
    e.forEach(function(o) {
        Array.isArray(o) ? N0(o, n) : n.push(o)
    })
}

function O0(e) {
    let n = [];
    return N0(e, n), n
}
var j0 = (...e) => O0(e).filter(Boolean),
    I0 = (e, n) => {
        let o = {},
            i = Object.keys(e),
            a = Object.keys(n);
        for (let c of i)
            if (a.includes(c)) {
                let u = e[c],
                    d = n[c];
                typeof u == "object" && typeof d == "object" ? o[c] = I0(u, d) : Array.isArray(u) || Array.isArray(d) ? o[c] = j0(d, u) : o[c] = d + " " + u
            } else o[c] = e[c];
        for (let c of a) i.includes(c) || (o[c] = n[c]);
        return o
    },
    ag = e => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();

function cT() {
    for (var e = 0, n, o, i = ""; e < arguments.length;)(n = arguments[e++]) && (o = V0(n)) && (i && (i += " "), i += o);
    return i
}

function V0(e) {
    if (typeof e == "string") return e;
    for (var n, o = "", i = 0; i < e.length; i++) e[i] && (n = V0(e[i])) && (o && (o += " "), o += n);
    return o
}
var Vd = "-";

function dT(e) {
    var n = pT(e),
        o = e.conflictingClassGroups,
        i = e.conflictingClassGroupModifiers,
        a = i === void 0 ? {} : i;

    function c(d) {
        var p = d.split(Vd);
        return p[0] === "" && p.length !== 1 && p.shift(), F0(p, n) || fT(d)
    }

    function u(d, p) {
        var h = o[d] || [];
        return p && a[d] ? [].concat(h, a[d]) : h
    }
    return {
        getClassGroupId: c,
        getConflictingClassGroupIds: u
    }
}

function F0(e, n) {
    var u;
    if (e.length === 0) return n.classGroupId;
    var o = e[0],
        i = n.nextPart.get(o),
        a = i ? F0(e.slice(1), i) : void 0;
    if (a) return a;
    if (n.validators.length !== 0) {
        var c = e.join(Vd);
        return (u = n.validators.find(function(d) {
            var p = d.validator;
            return p(c)
        })) == null ? void 0 : u.classGroupId
    }
}
var lg = /^\[(.+)\]$/;

function fT(e) {
    if (lg.test(e)) {
        var n = lg.exec(e)[1],
            o = n == null ? void 0 : n.substring(0, n.indexOf(":"));
        if (o) return "arbitrary.." + o
    }
}

function pT(e) {
    var n = e.theme,
        o = e.prefix,
        i = {
            nextPart: new Map,
            validators: []
        },
        a = mT(Object.entries(e.classGroups), o);
    return a.forEach(function(c) {
        var u = c[0],
            d = c[1];
        Yc(d, i, u, n)
    }), i
}

function Yc(e, n, o, i) {
    e.forEach(function(a) {
        if (typeof a == "string") {
            var c = a === "" ? n : ug(n, a);
            c.classGroupId = o;
            return
        }
        if (typeof a == "function") {
            if (hT(a)) {
                Yc(a(i), n, o, i);
                return
            }
            n.validators.push({
                validator: a,
                classGroupId: o
            });
            return
        }
        Object.entries(a).forEach(function(u) {
            var d = u[0],
                p = u[1];
            Yc(p, ug(n, d), o, i)
        })
    })
}

function ug(e, n) {
    var o = e;
    return n.split(Vd).forEach(function(i) {
        o.nextPart.has(i) || o.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }), o = o.nextPart.get(i)
    }), o
}

function hT(e) {
    return e.isThemeGetter
}

function mT(e, n) {
    return n ? e.map(function(o) {
        var i = o[0],
            a = o[1],
            c = a.map(function(u) {
                return typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(function(d) {
                    var p = d[0],
                        h = d[1];
                    return [n + p, h]
                })) : u
            });
        return [i, c]
    }) : e
}

function gT(e) {
    if (e < 1) return {
        get: function() {},
        set: function() {}
    };
    var n = 0,
        o = new Map,
        i = new Map;

    function a(c, u) {
        o.set(c, u), n++, n > e && (n = 0, i = o, o = new Map)
    }
    return {
        get: function(u) {
            var d = o.get(u);
            if (d !== void 0) return d;
            if ((d = i.get(u)) !== void 0) return a(u, d), d
        },
        set: function(u, d) {
            o.has(u) ? o.set(u, d) : a(u, d)
        }
    }
}
var z0 = "!";

function yT(e) {
    var n = e.separator || ":",
        o = n.length === 1,
        i = n[0],
        a = n.length;
    return function(u) {
        for (var d = [], p = 0, h = 0, g, y = 0; y < u.length; y++) {
            var v = u[y];
            if (p === 0) {
                if (v === i && (o || u.slice(y, y + a) === n)) {
                    d.push(u.slice(h, y)), h = y + a;
                    continue
                }
                if (v === "/") {
                    g = y;
                    continue
                }
            }
            v === "[" ? p++ : v === "]" && p--
        }
        var b = d.length === 0 ? u : u.substring(h),
            P = b.startsWith(z0),
            C = P ? b.substring(1) : b,
            L = g && g > h ? g - h : void 0;
        return {
            modifiers: d,
            hasImportantModifier: P,
            baseClassName: C,
            maybePostfixModifierPosition: L
        }
    }
}

function vT(e) {
    if (e.length <= 1) return e;
    var n = [],
        o = [];
    return e.forEach(function(i) {
        var a = i[0] === "[";
        a ? (n.push.apply(n, o.sort().concat([i])), o = []) : o.push(i)
    }), n.push.apply(n, o.sort()), n
}

function xT(e) {
    return {
        cache: gT(e.cacheSize),
        splitModifiers: yT(e),
        ...dT(e)
    }
}
var wT = /\s+/;

function bT(e, n) {
    var o = n.splitModifiers,
        i = n.getClassGroupId,
        a = n.getConflictingClassGroupIds,
        c = new Set;
    return e.trim().split(wT).map(function(u) {
        var d = o(u),
            p = d.modifiers,
            h = d.hasImportantModifier,
            g = d.baseClassName,
            y = d.maybePostfixModifierPosition,
            v = i(y ? g.substring(0, y) : g),
            b = !!y;
        if (!v) {
            if (!y) return {
                isTailwindClass: !1,
                originalClassName: u
            };
            if (v = i(g), !v) return {
                isTailwindClass: !1,
                originalClassName: u
            };
            b = !1
        }
        var P = vT(p).join(":"),
            C = h ? P + z0 : P;
        return {
            isTailwindClass: !0,
            modifierId: C,
            classGroupId: v,
            originalClassName: u,
            hasPostfixModifier: b
        }
    }).reverse().filter(function(u) {
        if (!u.isTailwindClass) return !0;
        var d = u.modifierId,
            p = u.classGroupId,
            h = u.hasPostfixModifier,
            g = d + p;
        return c.has(g) ? !1 : (c.add(g), a(p, h).forEach(function(y) {
            return c.add(d + y)
        }), !0)
    }).reverse().map(function(u) {
        return u.originalClassName
    }).join(" ")
}

function Xc() {
    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
    var i, a, c, u = d;

    function d(h) {
        var g = n[0],
            y = n.slice(1),
            v = y.reduce(function(b, P) {
                return P(b)
            }, g());
        return i = xT(v), a = i.cache.get, c = i.cache.set, u = p, p(h)
    }

    function p(h) {
        var g = a(h);
        if (g) return g;
        var y = bT(h, i);
        return c(h, y), y
    }
    return function() {
        return u(cT.apply(null, arguments))
    }
}

function De(e) {
    var n = function(i) {
        return i[e] || []
    };
    return n.isThemeGetter = !0, n
}
var B0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    ST = /^\d+\/\d+$/,
    PT = new Set(["px", "full", "screen"]),
    ET = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    TT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    CT = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

function qt(e) {
    return Rr(e) || PT.has(e) || ST.test(e) || Qc(e)
}

function Qc(e) {
    return Vr(e, "length", RT)
}

function $T(e) {
    return Vr(e, "size", U0)
}

function kT(e) {
    return Vr(e, "position", U0)
}

function MT(e) {
    return Vr(e, "url", _T)
}

function wa(e) {
    return Vr(e, "number", Rr)
}

function Rr(e) {
    return !Number.isNaN(Number(e))
}

function LT(e) {
    return e.endsWith("%") && Rr(e.slice(0, -1))
}

function bi(e) {
    return cg(e) || Vr(e, "number", cg)
}

function Ee(e) {
    return B0.test(e)
}

function Si() {
    return !0
}

function qn(e) {
    return ET.test(e)
}

function AT(e) {
    return Vr(e, "", DT)
}

function Vr(e, n, o) {
    var i = B0.exec(e);
    return i ? i[1] ? i[1] === n : o(i[2]) : !1
}

function RT(e) {
    return TT.test(e)
}

function U0() {
    return !1
}

function _T(e) {
    return e.startsWith("url(")
}

function cg(e) {
    return Number.isInteger(Number(e))
}

function DT(e) {
    return CT.test(e)
}

function qc() {
    var e = De("colors"),
        n = De("spacing"),
        o = De("blur"),
        i = De("brightness"),
        a = De("borderColor"),
        c = De("borderRadius"),
        u = De("borderSpacing"),
        d = De("borderWidth"),
        p = De("contrast"),
        h = De("grayscale"),
        g = De("hueRotate"),
        y = De("invert"),
        v = De("gap"),
        b = De("gradientColorStops"),
        P = De("gradientColorStopPositions"),
        C = De("inset"),
        L = De("margin"),
        $ = De("opacity"),
        _ = De("padding"),
        D = De("saturate"),
        F = De("scale"),
        U = De("sepia"),
        Y = De("skew"),
        oe = De("space"),
        E = De("translate"),
        J = function() {
            return ["auto", "contain", "none"]
        },
        se = function() {
            return ["auto", "hidden", "clip", "visible", "scroll"]
        },
        H = function() {
            return ["auto", Ee, n]
        },
        B = function() {
            return [Ee, n]
        },
        O = function() {
            return ["", qt]
        },
        W = function() {
            return ["auto", Rr, Ee]
        },
        z = function() {
            return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
        },
        re = function() {
            return ["solid", "dashed", "dotted", "double", "none"]
        },
        ee = function() {
            return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
        },
        I = function() {
            return ["start", "end", "center", "between", "around", "evenly", "stretch"]
        },
        Q = function() {
            return ["", "0", Ee]
        },
        K = function() {
            return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
        },
        w = function() {
            return [Rr, wa]
        },
        M = function() {
            return [Rr, Ee]
        };
    return {
        cacheSize: 500,
        theme: {
            colors: [Si],
            spacing: [qt],
            blur: ["none", "", qn, Ee],
            brightness: w(),
            borderColor: [e],
            borderRadius: ["none", "", "full", qn, Ee],
            borderSpacing: B(),
            borderWidth: O(),
            contrast: w(),
            grayscale: Q(),
            hueRotate: M(),
            invert: Q(),
            gap: B(),
            gradientColorStops: [e],
            gradientColorStopPositions: [LT, Qc],
            inset: H(),
            margin: H(),
            opacity: w(),
            padding: B(),
            saturate: w(),
            scale: w(),
            sepia: Q(),
            skew: M(),
            space: B(),
            translate: B()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Ee]
            }],
            container: ["container"],
            columns: [{
                columns: [qn]
            }],
            "break-after": [{
                "break-after": K()
            }],
            "break-before": [{
                "break-before": K()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(z(), [Ee])
            }],
            overflow: [{
                overflow: se()
            }],
            "overflow-x": [{
                "overflow-x": se()
            }],
            "overflow-y": [{
                "overflow-y": se()
            }],
            overscroll: [{
                overscroll: J()
            }],
            "overscroll-x": [{
                "overscroll-x": J()
            }],
            "overscroll-y": [{
                "overscroll-y": J()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [C]
            }],
            "inset-x": [{
                "inset-x": [C]
            }],
            "inset-y": [{
                "inset-y": [C]
            }],
            start: [{
                start: [C]
            }],
            end: [{
                end: [C]
            }],
            top: [{
                top: [C]
            }],
            right: [{
                right: [C]
            }],
            bottom: [{
                bottom: [C]
            }],
            left: [{
                left: [C]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", bi]
            }],
            basis: [{
                basis: H()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Ee]
            }],
            grow: [{
                grow: Q()
            }],
            shrink: [{
                shrink: Q()
            }],
            order: [{
                order: ["first", "last", "none", bi]
            }],
            "grid-cols": [{
                "grid-cols": [Si]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", bi]
                }, Ee]
            }],
            "col-start": [{
                "col-start": W()
            }],
            "col-end": [{
                "col-end": W()
            }],
            "grid-rows": [{
                "grid-rows": [Si]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [bi]
                }, Ee]
            }],
            "row-start": [{
                "row-start": W()
            }],
            "row-end": [{
                "row-end": W()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Ee]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Ee]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal"].concat(I())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(I(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(I(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [_]
            }],
            px: [{
                px: [_]
            }],
            py: [{
                py: [_]
            }],
            ps: [{
                ps: [_]
            }],
            pe: [{
                pe: [_]
            }],
            pt: [{
                pt: [_]
            }],
            pr: [{
                pr: [_]
            }],
            pb: [{
                pb: [_]
            }],
            pl: [{
                pl: [_]
            }],
            m: [{
                m: [L]
            }],
            mx: [{
                mx: [L]
            }],
            my: [{
                my: [L]
            }],
            ms: [{
                ms: [L]
            }],
            me: [{
                me: [L]
            }],
            mt: [{
                mt: [L]
            }],
            mr: [{
                mr: [L]
            }],
            mb: [{
                mb: [L]
            }],
            ml: [{
                ml: [L]
            }],
            "space-x": [{
                "space-x": [oe]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [oe]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", Ee, n]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", Ee, qt]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [qn]
                }, qn, Ee]
            }],
            h: [{
                h: [Ee, n, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", Ee, qt]
            }],
            "max-h": [{
                "max-h": [Ee, n, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", qn, Qc]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wa]
            }],
            "font-family": [{
                font: [Si]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ee]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Rr, wa]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ee, qt]
            }],
            "list-image": [{
                "list-image": ["none", Ee]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Ee]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [$]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [$]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(re(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", qt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Ee, qt]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: B()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ee]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Ee]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [$]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(z(), [kT])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", $T]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, MT]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [P]
            }],
            "gradient-via-pos": [{
                via: [P]
            }],
            "gradient-to-pos": [{
                to: [P]
            }],
            "gradient-from": [{
                from: [b]
            }],
            "gradient-via": [{
                via: [b]
            }],
            "gradient-to": [{
                to: [b]
            }],
            rounded: [{
                rounded: [c]
            }],
            "rounded-s": [{
                "rounded-s": [c]
            }],
            "rounded-e": [{
                "rounded-e": [c]
            }],
            "rounded-t": [{
                "rounded-t": [c]
            }],
            "rounded-r": [{
                "rounded-r": [c]
            }],
            "rounded-b": [{
                "rounded-b": [c]
            }],
            "rounded-l": [{
                "rounded-l": [c]
            }],
            "rounded-ss": [{
                "rounded-ss": [c]
            }],
            "rounded-se": [{
                "rounded-se": [c]
            }],
            "rounded-ee": [{
                "rounded-ee": [c]
            }],
            "rounded-es": [{
                "rounded-es": [c]
            }],
            "rounded-tl": [{
                "rounded-tl": [c]
            }],
            "rounded-tr": [{
                "rounded-tr": [c]
            }],
            "rounded-br": [{
                "rounded-br": [c]
            }],
            "rounded-bl": [{
                "rounded-bl": [c]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [$]
            }],
            "border-style": [{
                border: [].concat(re(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [$]
            }],
            "divide-style": [{
                divide: re()
            }],
            "border-color": [{
                border: [a]
            }],
            "border-color-x": [{
                "border-x": [a]
            }],
            "border-color-y": [{
                "border-y": [a]
            }],
            "border-color-t": [{
                "border-t": [a]
            }],
            "border-color-r": [{
                "border-r": [a]
            }],
            "border-color-b": [{
                "border-b": [a]
            }],
            "border-color-l": [{
                "border-l": [a]
            }],
            "divide-color": [{
                divide: [a]
            }],
            "outline-style": [{
                outline: [""].concat(re())
            }],
            "outline-offset": [{
                "outline-offset": [Ee, qt]
            }],
            "outline-w": [{
                outline: [qt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: O()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [$]
            }],
            "ring-offset-w": [{
                "ring-offset": [qt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", qn, AT]
            }],
            "shadow-color": [{
                shadow: [Si]
            }],
            opacity: [{
                opacity: [$]
            }],
            "mix-blend": [{
                "mix-blend": ee()
            }],
            "bg-blend": [{
                "bg-blend": ee()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [o]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [p]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", qn, Ee]
            }],
            grayscale: [{
                grayscale: [h]
            }],
            "hue-rotate": [{
                "hue-rotate": [g]
            }],
            invert: [{
                invert: [y]
            }],
            saturate: [{
                saturate: [D]
            }],
            sepia: [{
                sepia: [U]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [o]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [p]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [h]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [g]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [$]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [D]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [U]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [u]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [u]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [u]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ee]
            }],
            duration: [{
                duration: M()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Ee]
            }],
            delay: [{
                delay: M()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Ee]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [F]
            }],
            "scale-x": [{
                "scale-x": [F]
            }],
            "scale-y": [{
                "scale-y": [F]
            }],
            rotate: [{
                rotate: [bi, Ee]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [Y]
            }],
            "skew-y": [{
                "skew-y": [Y]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ee]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ee]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": B()
            }],
            "scroll-mx": [{
                "scroll-mx": B()
            }],
            "scroll-my": [{
                "scroll-my": B()
            }],
            "scroll-ms": [{
                "scroll-ms": B()
            }],
            "scroll-me": [{
                "scroll-me": B()
            }],
            "scroll-mt": [{
                "scroll-mt": B()
            }],
            "scroll-mr": [{
                "scroll-mr": B()
            }],
            "scroll-mb": [{
                "scroll-mb": B()
            }],
            "scroll-ml": [{
                "scroll-ml": B()
            }],
            "scroll-p": [{
                "scroll-p": B()
            }],
            "scroll-px": [{
                "scroll-px": B()
            }],
            "scroll-py": [{
                "scroll-py": B()
            }],
            "scroll-ps": [{
                "scroll-ps": B()
            }],
            "scroll-pe": [{
                "scroll-pe": B()
            }],
            "scroll-pt": [{
                "scroll-pt": B()
            }],
            "scroll-pr": [{
                "scroll-pr": B()
            }],
            "scroll-pb": [{
                "scroll-pb": B()
            }],
            "scroll-pl": [{
                "scroll-pl": B()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Ee]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [qt, wa]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}

function NT(e, n) {
    for (var o in n) H0(e, o, n[o]);
    return e
}
var OT = Object.prototype.hasOwnProperty,
    jT = new Set(["string", "number", "boolean"]);

function H0(e, n, o) {
    if (!OT.call(e, n) || jT.has(typeof o) || o === null) {
        e[n] = o;
        return
    }
    if (Array.isArray(o) && Array.isArray(e[n])) {
        e[n] = e[n].concat(o);
        return
    }
    if (typeof o == "object" && typeof e[n] == "object") {
        if (e[n] === null) {
            e[n] = o;
            return
        }
        for (var i in o) H0(e[n], i, o[i])
    }
}

function IT(e) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
    return typeof e == "function" ? Xc.apply(void 0, [qc, e].concat(o)) : Xc.apply(void 0, [function() {
        return NT(qc(), e)
    }].concat(o))
}
var VT = Xc(qc),
    FT = {
        twMerge: !0,
        twMergeConfig: {},
        responsiveVariants: !1
    },
    W0 = e => e || void 0,
    Ii = (...e) => W0(O0(e).filter(Boolean).join(" ")),
    vc = null,
    Va = {},
    Zc = !1,
    Pi = (...e) => n => n.twMerge ? ((!vc || Zc) && (Zc = !1, vc = Tt(Va) ? VT : IT(Va)), W0(vc(Ii(e)))) : Ii(e),
    dg = (e, n) => {
        for (let o in n) e.hasOwnProperty(o) ? e[o] = Ii(e[o], n[o]) : e[o] = n[o];
        return e
    },
    zT = (e, n) => {
        let {
            extend: o = null,
            slots: i = {},
            variants: a = {},
            compoundVariants: c = [],
            compoundSlots: u = [],
            defaultVariants: d = {}
        } = e, p = { ...FT,
            ...n
        }, h = o != null && o.base ? Ii(o.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, g = o != null && o.variants && !Tt(o.variants) ? I0(a, o.variants) : a, y = o != null && o.defaultVariants && !Tt(o.defaultVariants) ? { ...o.defaultVariants,
            ...d
        } : d;
        !Tt(p.twMergeConfig) && !uT(p.twMergeConfig, Va) && (Zc = !0, Va = p.twMergeConfig);
        let v = Tt(o == null ? void 0 : o.slots),
            b = Tt(i) ? {} : {
                base: Ii(e == null ? void 0 : e.base, v && (o == null ? void 0 : o.base)),
                ...i
            },
            P = v ? b : dg({ ...o == null ? void 0 : o.slots
            }, Tt(b) ? {
                base: e == null ? void 0 : e.base
            } : b),
            C = $ => {
                if (Tt(g) && Tt(i) && v) return Pi(h, $ == null ? void 0 : $.class, $ == null ? void 0 : $.className)(p);
                if (c && !Array.isArray(c)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof c}`);
                if (u && !Array.isArray(u)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
                let _ = (B, O, W = [], z) => {
                        let re = W;
                        if (typeof O == "string") re = re.concat(ag(O).split(" ").map(ee => `${B}:${ee}`));
                        else if (Array.isArray(O)) re = re.concat(O.reduce((ee, I) => ee.concat(`${B}:${I}`), []));
                        else if (typeof O == "object" && typeof z == "string") {
                            for (let ee in O)
                                if (O.hasOwnProperty(ee) && ee === z) {
                                    let I = O[ee];
                                    if (I && typeof I == "string") {
                                        let Q = ag(I);
                                        re[z] ? re[z] = re[z].concat(Q.split(" ").map(K => `${B}:${K}`)) : re[z] = Q.split(" ").map(K => `${B}:${K}`)
                                    } else Array.isArray(I) && I.length > 0 && (re[z] = I.reduce((Q, K) => Q.concat(`${B}:${K}`), []))
                                }
                        }
                        return re
                    },
                    D = (B, O = g, W = null, z = null) => {
                        var re;
                        let ee = O[B];
                        if (!ee || Tt(ee)) return null;
                        let I = (re = z == null ? void 0 : z[B]) != null ? re : $ == null ? void 0 : $[B];
                        if (I === null) return null;
                        let Q = sg(I),
                            K = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0,
                            w = y == null ? void 0 : y[B],
                            M = [];
                        if (typeof Q == "object" && K)
                            for (let [ne, ie] of Object.entries(Q)) {
                                let le = ee[ie];
                                if (ne === "initial") {
                                    w = ie;
                                    continue
                                }
                                Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(ne) || (M = _(ne, le, M, W))
                            }
                        let q = ee[Q] || ee[sg(w)];
                        return typeof M == "object" && typeof W == "string" && M[W] ? dg(M, q) : M.length > 0 ? (M.push(q), M) : q
                    },
                    F = () => g ? Object.keys(g).map(B => D(B, g)) : null,
                    U = (B, O) => {
                        if (!g || typeof g != "object") return null;
                        let W = new Array;
                        for (let z in g) {
                            let re = D(z, g, B, O),
                                ee = B === "base" && typeof re == "string" ? re : re && re[B];
                            ee && (W[W.length] = ee)
                        }
                        return W
                    },
                    Y = {};
                for (let B in $) $[B] !== void 0 && (Y[B] = $[B]);
                let oe = (B, O) => {
                        var W;
                        let z = typeof($ == null ? void 0 : $[B]) == "object" ? {
                            [B]: (W = $[B]) == null ? void 0 : W.initial
                        } : {};
                        return { ...y,
                            ...Y,
                            ...z,
                            ...O
                        }
                    },
                    E = (B = [], O) => {
                        let W = [];
                        for (let {
                                class: z,
                                className: re,
                                ...ee
                            } of B) {
                            let I = !0;
                            for (let [Q, K] of Object.entries(ee)) {
                                let w = oe(Q, O);
                                if (Array.isArray(K)) {
                                    if (!K.includes(w[Q])) {
                                        I = !1;
                                        break
                                    }
                                } else if (w[Q] !== K) {
                                    I = !1;
                                    break
                                }
                            }
                            I && (z && W.push(z), re && W.push(re))
                        }
                        return W
                    },
                    J = B => {
                        let O = E(c, B),
                            W = E(o == null ? void 0 : o.compoundVariants, B);
                        return j0(W, O)
                    },
                    se = B => {
                        let O = J(B);
                        if (!Array.isArray(O)) return O;
                        let W = {};
                        for (let z of O)
                            if (typeof z == "string" && (W.base = Pi(W.base, z)(p)), typeof z == "object")
                                for (let [re, ee] of Object.entries(z)) W[re] = Pi(W[re], ee)(p);
                        return W
                    },
                    H = B => {
                        if (u.length < 1) return null;
                        let O = {};
                        for (let {
                                slots: W = [],
                                class: z,
                                className: re,
                                ...ee
                            } of u) {
                            if (!Tt(ee)) {
                                let I = !0;
                                for (let Q of Object.keys(ee)) {
                                    let K = oe(Q, B)[Q];
                                    if (K === void 0 || (Array.isArray(ee[Q]) ? !ee[Q].includes(K) : ee[Q] !== K)) {
                                        I = !1;
                                        break
                                    }
                                }
                                if (!I) continue
                            }
                            for (let I of W) O[I] = O[I] || [], O[I].push([z, re])
                        }
                        return O
                    };
                if (!Tt(i) || !v) {
                    let B = {};
                    if (typeof P == "object" && !Tt(P))
                        for (let O of Object.keys(P)) B[O] = W => {
                            var z, re;
                            return Pi(P[O], U(O, W), ((z = se(W)) != null ? z : [])[O], ((re = H(W)) != null ? re : [])[O], W == null ? void 0 : W.class, W == null ? void 0 : W.className)(p)
                        };
                    return B
                }
                return Pi(h, F(), J(), $ == null ? void 0 : $.class, $ == null ? void 0 : $.className)(p)
            },
            L = () => {
                if (!(!g || typeof g != "object")) return Object.keys(g)
            };
        return C.variantKeys = L(), C.extend = o, C.base = h, C.slots = P, C.variants = g, C.defaultVariants = y, C.compoundSlots = u, C.compoundVariants = c, C
    },
    Ao = (e, n) => {
        var o, i, a;
        return zT(e, { ...n,
            twMerge: (o = void 0) != null ? o : !0,
            twMergeConfig: {
                theme: { ...(i = void 0) == null ? void 0 : i.theme,
                    ...ig.theme
                },
                classGroups: { ...(a = void 0) == null ? void 0 : a.classGroups,
                    ...ig.classGroups
                }
            }
        })
    },
    fg = Ao({
        slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            circle1: ["absolute", "w-full", "h-full", "rounded-full", "animate-spinner-ease-spin", "border-2", "border-solid", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
            circle2: ["absolute", "w-full", "h-full", "rounded-full", "opacity-75", "animate-spinner-linear-spin", "border-2", "border-dotted", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
            label: "text-foreground dark:text-foreground-dark font-regular"
        },
        variants: {
            size: {
                sm: {
                    wrapper: "w-5 h-5",
                    circle1: "border-2",
                    circle2: "border-2",
                    label: "text-small"
                },
                md: {
                    wrapper: "w-8 h-8",
                    circle1: "border-3",
                    circle2: "border-3",
                    label: "text-medium"
                },
                lg: {
                    wrapper: "w-10 h-10",
                    circle1: "border-3",
                    circle2: "border-3",
                    label: "text-large"
                }
            },
            color: {
                current: {
                    circle1: "border-b-current",
                    circle2: "border-b-current"
                },
                white: {
                    circle1: "border-b-white",
                    circle2: "border-b-white"
                },
                default: {
                    circle1: "border-b-default",
                    circle2: "border-b-default"
                },
                primary: {
                    circle1: "border-b-primary",
                    circle2: "border-b-primary"
                },
                secondary: {
                    circle1: "border-b-secondary",
                    circle2: "border-b-secondary"
                },
                success: {
                    circle1: "border-b-success",
                    circle2: "border-b-success"
                },
                warning: {
                    circle1: "border-b-warning",
                    circle2: "border-b-warning"
                },
                danger: {
                    circle1: "border-b-danger",
                    circle2: "border-b-danger"
                }
            },
            labelColor: {
                foreground: {
                    label: "text-foreground"
                },
                primary: {
                    label: "text-primary"
                },
                secondary: {
                    label: "text-secondary"
                },
                success: {
                    label: "text-success"
                },
                warning: {
                    label: "text-warning"
                },
                danger: {
                    label: "text-danger"
                }
            }
        },
        defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground"
        }
    }),
    il = ["outline-none", "data-[focus-visible=true]:z-10", "data-[focus-visible=true]:outline-2", "data-[focus-visible=true]:outline-focus", "data-[focus-visible=true]:outline-offset-2"],
    ho = {
        default: ["[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]"],
        primary: ["[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
        secondary: ["[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
        success: ["[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]"],
        warning: ["[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]"],
        danger: ["[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]"]
    },
    BT = {
        default: "bg-default text-default-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
        foreground: "bg-foreground text-background"
    },
    UT = {
        default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
        primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
        secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
        success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
        warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
        danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
        foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
    },
    HT = {
        default: "bg-transparent border-default text-foreground",
        primary: "bg-transparent border-primary text-primary",
        secondary: "bg-transparent border-secondary text-secondary",
        success: "bg-transparent border-success text-success",
        warning: "bg-transparent border-warning text-warning",
        danger: "bg-transparent border-danger text-danger",
        foreground: "bg-transparent border-foreground text-foreground"
    },
    WT = {
        default: "bg-default/40 text-default-700",
        primary: "bg-primary/20 text-primary-600",
        secondary: "bg-secondary/20 text-secondary-600",
        success: "bg-success/20 text-success-700 dark:text-success",
        warning: "bg-warning/20 text-warning-700 dark:text-warning",
        danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
        foreground: "bg-foreground/10 text-foreground"
    },
    KT = {
        default: "border-default bg-default-100 text-default-foreground",
        primary: "border-default bg-default-100 text-primary",
        secondary: "border-default bg-default-100 text-secondary",
        success: "border-default bg-default-100 text-success",
        warning: "border-default bg-default-100 text-warning",
        danger: "border-default bg-default-100 text-danger",
        foreground: "border-default bg-default-100 text-foreground"
    },
    GT = {
        default: "bg-transparent text-default-foreground",
        primary: "bg-transparent text-primary",
        secondary: "bg-transparent text-secondary",
        success: "bg-transparent text-success",
        warning: "bg-transparent text-warning",
        danger: "bg-transparent text-danger",
        foreground: "bg-transparent text-foreground"
    },
    YT = {
        default: "border-default text-default-foreground",
        primary: "border-primary text-primary",
        secondary: "border-secondary text-secondary",
        success: "border-success text-success",
        warning: "border-warning text-warning",
        danger: "border-danger text-danger",
        foreground: "border-foreground text-foreground hover:!bg-foreground"
    },
    xe = {
        solid: BT,
        shadow: UT,
        bordered: HT,
        flat: WT,
        faded: KT,
        light: GT,
        ghost: YT
    },
    pg = Ao({
        slots: {
            base: ["z-0", "relative", "bg-transparent", "before:content-['']", "before:hidden", "before:z-[-1]", "before:absolute", "before:rotate-45", "before:w-2.5", "before:h-2.5", "before:rounded-sm", "data-[arrow=true]:before:block", "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top]:before:left-1/2", "data-[placement=top]:before:-translate-x-1/2", "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top-start]:before:left-3", "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top-end]:before:right-3", "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom]:before:left-1/2", "data-[placement=bottom]:before:-translate-x-1/2", "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom-start]:before:left-3", "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom-end]:before:right-3", "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]", "data-[placement=left]:before:top-1/2", "data-[placement=left]:before:-translate-y-1/2", "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=left-start]:before:top-1/4", "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=left-end]:before:bottom-1/4", "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]", "data-[placement=right]:before:top-1/2", "data-[placement=right]:before:-translate-y-1/2", "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=right-start]:before:top-1/4", "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=right-end]:before:bottom-1/4", ...il],
            content: ["z-10", "px-2.5", "py-1", "w-full", "inline-flex", "flex-col", "items-center", "justify-center", "box-border", "subpixel-antialiased", "outline-none", "box-border"],
            trigger: ["z-10"],
            backdrop: ["hidden"],
            arrow: []
        },
        variants: {
            size: {
                sm: {
                    content: "text-tiny"
                },
                md: {
                    content: "text-small"
                },
                lg: {
                    content: "text-medium"
                }
            },
            color: {
                default: {
                    base: "before:bg-content1 before:shadow-small",
                    content: "bg-content1"
                },
                foreground: {
                    base: "before:bg-foreground",
                    content: xe.solid.foreground
                },
                primary: {
                    base: "before:bg-primary",
                    content: xe.solid.primary
                },
                secondary: {
                    base: "before:bg-secondary",
                    content: xe.solid.secondary
                },
                success: {
                    base: "before:bg-success",
                    content: xe.solid.success
                },
                warning: {
                    base: "before:bg-warning",
                    content: xe.solid.warning
                },
                danger: {
                    base: "before:bg-danger",
                    content: xe.solid.danger
                }
            },
            radius: {
                none: {
                    content: "rounded-none"
                },
                sm: {
                    content: "rounded-small"
                },
                md: {
                    content: "rounded-medium"
                },
                lg: {
                    content: "rounded-large"
                },
                full: {
                    content: "rounded-full"
                }
            },
            shadow: {
                sm: {
                    content: "shadow-small"
                },
                md: {
                    content: "shadow-medium"
                },
                lg: {
                    content: "shadow-large"
                }
            },
            backdrop: {
                transparent: {},
                opaque: {
                    backdrop: "bg-overlay/50 backdrop-opacity-disabled"
                },
                blur: {
                    backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
                }
            },
            triggerScaleOnOpen: {
                true: {
                    trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
                },
                false: {}
            },
            disableAnimation: {
                true: {
                    base: "animate-none"
                }
            },
            isTriggerDisabled: {
                true: {
                    trigger: "opacity-disabled pointer-events-none"
                },
                false: {}
            }
        },
        defaultVariants: {
            color: "default",
            radius: "lg",
            size: "md",
            shadow: "md",
            backdrop: "transparent",
            triggerScaleOnOpen: !0
        },
        compoundVariants: [{
            backdrop: ["opaque", "blur"],
            class: {
                backdrop: "block w-full h-full fixed inset-0 -z-30"
            }
        }]
    }),
    hg = Ao({
        base: ["relative inline-flex items-center outline-none tap-highlight-transparent", ...il],
        variants: {
            size: {
                sm: "text-small",
                md: "text-medium",
                lg: "text-large"
            },
            color: {
                foreground: "text-foreground",
                primary: "text-primary",
                secondary: "text-secondary",
                success: "text-success",
                warning: "text-warning",
                danger: "text-danger"
            },
            underline: {
                none: "no-underline",
                hover: "hover:underline",
                always: "underline",
                active: "active:underline",
                focus: "focus:underline"
            },
            isBlock: {
                true: ["px-2", "py-1", "hover:after:opacity-100", "after:content-['']", "after:inset-0", "after:opacity-0", "after:w-full", "after:h-full", "after:rounded-xl", "after:transition-background", "after:absolute"],
                false: "hover:opacity-80 active:opacity-disabled transition-opacity"
            },
            isDisabled: {
                true: "opacity-disabled cursor-default pointer-events-none"
            },
            disableAnimation: {
                true: "after:transition-none transition-none"
            }
        },
        compoundVariants: [{
            isBlock: !0,
            color: "foreground",
            class: "hover:after:bg-foreground/10"
        }, {
            isBlock: !0,
            color: "primary",
            class: "hover:after:bg-primary/20"
        }, {
            isBlock: !0,
            color: "secondary",
            class: "hover:after:bg-secondary/20"
        }, {
            isBlock: !0,
            color: "success",
            class: "hover:after:bg-success/20"
        }, {
            isBlock: !0,
            color: "warning",
            class: "hover:after:bg-warning/20"
        }, {
            isBlock: !0,
            color: "danger",
            class: "hover:after:bg-danger/20"
        }, {
            underline: ["hover", "always", "active", "focus"],
            class: "underline-offset-4"
        }],
        defaultVariants: {
            color: "primary",
            size: "md",
            isBlock: !1,
            underline: "none",
            isDisabled: !1
        }
    }),
    XT = "flex mx-1 text-current self-center",
    mg = Ao({
        slots: {
            wrapper: ["flex", "w-screen", "h-[100dvh]", "fixed", "inset-0", "z-50", "overflow-x-auto", "justify-center", "h-[--visual-viewport-height]"],
            base: ["flex", "flex-col", "relative", "bg-white", "z-50", "w-full", "box-border", "bg-content1", "outline-none", "mx-1", "my-1", "sm:mx-6", "sm:my-16"],
            backdrop: "z-50",
            header: "flex py-4 px-6 flex-initial text-large font-semibold",
            body: "flex flex-1 flex-col gap-3 px-6 py-2",
            footer: "flex flex-row gap-2 px-6 py-4 justify-end",
            closeButton: ["absolute", "appearance-none", "outline-none", "select-none", "top-1", "end-1", "p-2", "text-foreground-500", "rounded-full", "hover:bg-default-100", "active:bg-default-200", "tap-highlight-transparent", ...il]
        },
        variants: {
            size: {
                xs: {
                    base: "max-w-xs"
                },
                sm: {
                    base: "max-w-sm"
                },
                md: {
                    base: "max-w-md"
                },
                lg: {
                    base: "max-w-lg"
                },
                xl: {
                    base: "max-w-xl"
                },
                "2xl": {
                    base: "max-w-2xl"
                },
                "3xl": {
                    base: "max-w-3xl"
                },
                "4xl": {
                    base: "max-w-4xl"
                },
                "5xl": {
                    base: "max-w-5xl"
                },
                full: {
                    base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] min-h-[100dvh] !rounded-none"
                }
            },
            radius: {
                none: {
                    base: "rounded-none"
                },
                sm: {
                    base: "rounded-small"
                },
                md: {
                    base: "rounded-medium"
                },
                lg: {
                    base: "rounded-large"
                }
            },
            placement: {
                auto: {
                    wrapper: "items-end sm:items-center"
                },
                center: {
                    wrapper: "items-center sm:items-center"
                },
                top: {
                    wrapper: "items-start sm:items-start"
                },
                "top-center": {
                    wrapper: "items-start sm:items-center"
                },
                bottom: {
                    wrapper: "items-end sm:items-end"
                },
                "bottom-center": {
                    wrapper: "items-end sm:items-center"
                }
            },
            shadow: {
                sm: {
                    base: "shadow-small"
                },
                md: {
                    base: "shadow-medium"
                },
                lg: {
                    base: "shadow-large"
                }
            },
            backdrop: {
                transparent: {
                    backdrop: "hidden"
                },
                opaque: {
                    backdrop: "bg-overlay/50 backdrop-opacity-disabled"
                },
                blur: {
                    backdrop: "backdrop-blur-md backdrop-saturate-150 bg-overlay/30"
                }
            },
            scrollBehavior: {
                normal: {
                    base: "overflow-y-hidden"
                },
                inside: {
                    base: "max-h-[calc(100%_-_8rem)]",
                    body: "overflow-y-auto"
                },
                outside: {
                    wrapper: "items-start sm:items-start overflow-y-auto",
                    base: "my-16"
                }
            },
            disableAnimation: {
                false: {
                    wrapper: ["[--scale-enter:100%]", "[--scale-exit:100%]", "[--slide-enter:0px]", "[--slide-exit:80px]", "sm:[--scale-enter:100%]", "sm:[--scale-exit:103%]", "sm:[--slide-enter:0px]", "sm:[--slide-exit:0px]"]
                }
            }
        },
        defaultVariants: {
            size: "md",
            radius: "lg",
            shadow: "sm",
            placement: "auto",
            backdrop: "opaque",
            scrollBehavior: "normal"
        },
        compoundVariants: [{
            backdrop: ["opaque", "blur"],
            class: {
                backdrop: "w-screen h-screen fixed inset-0"
            }
        }]
    }),
    QT = Ao({
        base: ["z-0", "group", "relative", "inline-flex", "items-center", "justify-center", "box-border", "appearance-none", "outline-none", "select-none", "whitespace-nowrap", "min-w-max", "font-normal", "subpixel-antialiased", "overflow-hidden", "tap-highlight-transparent", "data-[pressed=true]:scale-[0.97]", ...il],
        variants: {
            variant: {
                solid: "",
                bordered: "border-medium bg-transparent",
                light: "bg-transparent",
                flat: "",
                faded: "border-medium",
                shadow: "",
                ghost: "border-medium bg-transparent"
            },
            size: {
                sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
                md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
                lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
            },
            color: {
                default: "",
                primary: "",
                secondary: "",
                success: "",
                warning: "",
                danger: ""
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-small",
                md: "rounded-medium",
                lg: "rounded-large",
                full: "rounded-full"
            },
            fullWidth: {
                true: "w-full"
            },
            isDisabled: {
                true: "opacity-disabled pointer-events-none"
            },
            isInGroup: {
                true: "[&:not(:first-child):not(:last-child)]:rounded-none"
            },
            isIconOnly: {
                true: "px-0 !gap-0",
                false: "[&>svg]:max-w-[theme(spacing.8)]"
            },
            disableAnimation: {
                true: "!transition-none data-[pressed=true]:scale-100",
                false: "transition-transform-colors-opacity motion-reduce:transition-none"
            }
        },
        defaultVariants: {
            size: "md",
            variant: "solid",
            color: "default",
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1
        },
        compoundVariants: [{
            variant: "solid",
            color: "default",
            class: xe.solid.default
        }, {
            variant: "solid",
            color: "primary",
            class: xe.solid.primary
        }, {
            variant: "solid",
            color: "secondary",
            class: xe.solid.secondary
        }, {
            variant: "solid",
            color: "success",
            class: xe.solid.success
        }, {
            variant: "solid",
            color: "warning",
            class: xe.solid.warning
        }, {
            variant: "solid",
            color: "danger",
            class: xe.solid.danger
        }, {
            variant: "shadow",
            color: "default",
            class: xe.shadow.default
        }, {
            variant: "shadow",
            color: "primary",
            class: xe.shadow.primary
        }, {
            variant: "shadow",
            color: "secondary",
            class: xe.shadow.secondary
        }, {
            variant: "shadow",
            color: "success",
            class: xe.shadow.success
        }, {
            variant: "shadow",
            color: "warning",
            class: xe.shadow.warning
        }, {
            variant: "shadow",
            color: "danger",
            class: xe.shadow.danger
        }, {
            variant: "bordered",
            color: "default",
            class: xe.bordered.default
        }, {
            variant: "bordered",
            color: "primary",
            class: xe.bordered.primary
        }, {
            variant: "bordered",
            color: "secondary",
            class: xe.bordered.secondary
        }, {
            variant: "bordered",
            color: "success",
            class: xe.bordered.success
        }, {
            variant: "bordered",
            color: "warning",
            class: xe.bordered.warning
        }, {
            variant: "bordered",
            color: "danger",
            class: xe.bordered.danger
        }, {
            variant: "flat",
            color: "default",
            class: xe.flat.default
        }, {
            variant: "flat",
            color: "primary",
            class: xe.flat.primary
        }, {
            variant: "flat",
            color: "secondary",
            class: xe.flat.secondary
        }, {
            variant: "flat",
            color: "success",
            class: xe.flat.success
        }, {
            variant: "flat",
            color: "warning",
            class: xe.flat.warning
        }, {
            variant: "flat",
            color: "danger",
            class: xe.flat.danger
        }, {
            variant: "faded",
            color: "default",
            class: xe.faded.default
        }, {
            variant: "faded",
            color: "primary",
            class: xe.faded.primary
        }, {
            variant: "faded",
            color: "secondary",
            class: xe.faded.secondary
        }, {
            variant: "faded",
            color: "success",
            class: xe.faded.success
        }, {
            variant: "faded",
            color: "warning",
            class: xe.faded.warning
        }, {
            variant: "faded",
            color: "danger",
            class: xe.faded.danger
        }, {
            variant: "light",
            color: "default",
            class: [xe.light.default, "data-[hover=true]:bg-default/40"]
        }, {
            variant: "light",
            color: "primary",
            class: [xe.light.primary, "data-[hover=true]:bg-primary/20"]
        }, {
            variant: "light",
            color: "secondary",
            class: [xe.light.secondary, "data-[hover=true]:bg-secondary/20"]
        }, {
            variant: "light",
            color: "success",
            class: [xe.light.success, "data-[hover=true]:bg-success/20"]
        }, {
            variant: "light",
            color: "warning",
            class: [xe.light.warning, "data-[hover=true]:bg-warning/20"]
        }, {
            variant: "light",
            color: "danger",
            class: [xe.light.danger, "data-[hover=true]:bg-danger/20"]
        }, {
            variant: "ghost",
            color: "default",
            class: [xe.ghost.default, "data-[hover=true]:!bg-default"]
        }, {
            variant: "ghost",
            color: "primary",
            class: [xe.ghost.primary, "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"]
        }, {
            variant: "ghost",
            color: "secondary",
            class: [xe.ghost.secondary, "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"]
        }, {
            variant: "ghost",
            color: "success",
            class: [xe.ghost.success, "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"]
        }, {
            variant: "ghost",
            color: "warning",
            class: [xe.ghost.warning, "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"]
        }, {
            variant: "ghost",
            color: "danger",
            class: [xe.ghost.danger, "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"]
        }, {
            isInGroup: !0,
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        }, {
            isInGroup: !0,
            size: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        }, {
            isInGroup: !0,
            size: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        }, {
            isInGroup: !0,
            size: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        }, {
            isInGroup: !0,
            isRounded: !0,
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        }, {
            isInGroup: !0,
            radius: "none",
            class: "rounded-none first:rounded-s-none last:rounded-e-none"
        }, {
            isInGroup: !0,
            radius: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        }, {
            isInGroup: !0,
            radius: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        }, {
            isInGroup: !0,
            radius: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        }, {
            isInGroup: !0,
            radius: "full",
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "default",
            className: ho.default
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "primary",
            className: ho.primary
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "secondary",
            className: ho.secondary
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "success",
            className: ho.success
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "warning",
            className: ho.warning
        }, {
            isInGroup: !0,
            variant: ["ghost", "bordered"],
            color: "danger",
            className: ho.danger
        }, {
            isIconOnly: !0,
            size: "sm",
            class: "min-w-8 w-8 h-8"
        }, {
            isIconOnly: !0,
            size: "md",
            class: "min-w-10 w-10 h-10"
        }, {
            isIconOnly: !0,
            size: "lg",
            class: "min-w-12 w-12 h-12"
        }, {
            variant: ["solid", "faded", "flat", "bordered", "shadow"],
            class: "data-[hover=true]:opacity-hover"
        }]
    });
Ao({
    base: "inline-flex items-center justify-center h-auto",
    variants: {
        fullWidth: {
            true: "w-full"
        }
    },
    defaultVariants: {
        fullWidth: !1
    }
});
const qT = "modulepreload",
    ZT = function(e) {
        return "/" + e
    },
    gg = {},
    Fd = function(n, o, i) {
        let a = Promise.resolve();
        if (o && o.length > 0) {
            document.getElementsByTagName("link");
            const u = document.querySelector("meta[property=csp-nonce]"),
                d = (u == null ? void 0 : u.nonce) || (u == null ? void 0 : u.getAttribute("nonce"));
            a = Promise.allSettled(o.map(p => {
                if (p = ZT(p), p in gg) return;
                gg[p] = !0;
                const h = p.endsWith(".css"),
                    g = h ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${p}"]${g}`)) return;
                const y = document.createElement("link");
                if (y.rel = h ? "stylesheet" : qT, h || (y.as = "script"), y.crossOrigin = "", y.href = p, d && y.setAttribute("nonce", d), document.head.appendChild(y), h) return new Promise((v, b) => {
                    y.addEventListener("load", v), y.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${p}`)))
                })
            }))
        }

        function c(u) {
            const d = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (d.payload = u, window.dispatchEvent(d), !d.defaultPrevented) throw u
        }
        return a.then(u => {
            for (const d of u || []) d.status === "rejected" && c(d.reason);
            return n().catch(c)
        })
    };
var JT = e => R.jsxs("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        width: "1em",
        ...e,
        children: [R.jsx("path", {
            d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
        }), R.jsx("path", {
            d: "M15 3h6v6"
        }), R.jsx("path", {
            d: "M10 14L21 3"
        })]
    }),
    e2 = e => {
        const {
            isSelected: n,
            isIndeterminate: o,
            disableAnimation: i,
            ...a
        } = e;
        return R.jsx("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            role: "presentation",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            viewBox: "0 0 24 24",
            width: "1em",
            ...a,
            children: R.jsx("path", {
                d: "M18 6L6 18M6 6l12 12"
            })
        })
    },
    En = {
        ease: [.36, .66, .4, 1],
        easeIn: [.4, 0, 1, 1],
        easeOut: [0, 0, .2, 1],
        easeInOut: [.4, 0, .2, 1],
        spring: [.155, 1.105, .295, 1.12],
        springOut: [.57, -.15, .62, .07],
        softSpring: [.16, 1.11, .3, 1.02]
    },
    K0 = {
        scaleSpring: {
            enter: {
                transform: "scale(1)",
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: .2
                }
            },
            exit: {
                transform: "scale(0.85)",
                opacity: 0,
                transition: {
                    type: "easeOut",
                    duration: .15
                }
            }
        },
        scaleSpringOpacity: {
            initial: {
                opacity: 0,
                transform: "scale(0.8)"
            },
            enter: {
                opacity: 1,
                transform: "scale(1)",
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: .3
                }
            },
            exit: {
                opacity: 0,
                transform: "scale(0.96)",
                transition: {
                    type: "easeOut",
                    bounce: 0,
                    duration: .15
                }
            }
        },
        scale: {
            enter: {
                scale: 1
            },
            exit: {
                scale: .95
            }
        },
        scaleFadeIn: {
            enter: {
                transform: "scale(1)",
                opacity: 1,
                transition: {
                    duration: .25,
                    ease: En.easeIn
                }
            },
            exit: {
                transform: "scale(0.95)",
                opacity: 0,
                transition: {
                    duration: .2,
                    ease: En.easeOut
                }
            }
        },
        scaleInOut: {
            enter: {
                transform: "scale(1)",
                opacity: 1,
                transition: {
                    duration: .4,
                    ease: En.ease
                }
            },
            exit: {
                transform: "scale(1.03)",
                opacity: 0,
                transition: {
                    duration: .3,
                    ease: En.ease
                }
            }
        },
        fade: {
            enter: {
                opacity: 1,
                transition: {
                    duration: .4,
                    ease: En.ease
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: .3,
                    ease: En.ease
                }
            }
        },
        collapse: {
            enter: {
                opacity: 1,
                height: "auto",
                transition: {
                    height: {
                        type: "spring",
                        bounce: 0,
                        duration: .3
                    },
                    opacity: {
                        easings: "ease",
                        duration: .4
                    }
                }
            },
            exit: {
                opacity: 0,
                height: 0,
                transition: {
                    easings: "ease",
                    duration: .3
                }
            }
        }
    },
    t2 = e => {
        const n = {
            top: {
                originY: 1
            },
            bottom: {
                originY: 0
            },
            left: {
                originX: 1
            },
            right: {
                originX: 0
            },
            "top-start": {
                originX: 0,
                originY: 1
            },
            "top-end": {
                originX: 1,
                originY: 1
            },
            "bottom-start": {
                originX: 0,
                originY: 0
            },
            "bottom-end": {
                originX: 1,
                originY: 0
            },
            "right-start": {
                originX: 0,
                originY: 0
            },
            "right-end": {
                originX: 0,
                originY: 1
            },
            "left-start": {
                originX: 1,
                originY: 0
            },
            "left-end": {
                originX: 1,
                originY: 1
            }
        };
        return (n == null ? void 0 : n[e]) || {}
    },
    n2 = e => ({
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
        "top-start": "top start",
        "top-end": "top end",
        "bottom-start": "bottom start",
        "bottom-end": "bottom end",
        "left-start": "left top",
        "left-end": "left bottom",
        "right-start": "right top",
        "right-end": "right bottom"
    })[e],
    yg = (e, n) => {
        if (n.includes("-")) {
            const [, o] = n.split("-");
            return `${e}-${o}`
        }
        return e
    },
    G0 = globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
    [a5, r2] = vd({
        name: "ButtonGroupContext",
        strict: !1
    });

function Y0(e, n) {
    let {
        elementType: o = "button",
        isDisabled: i,
        onPress: a,
        onPressStart: c,
        onPressEnd: u,
        onPressChange: d,
        preventFocusOnPress: p,
        allowFocusWhenDisabled: h,
        onClick: g,
        href: y,
        target: v,
        rel: b,
        type: P = "button",
        allowTextSelectionOnPress: C
    } = e, L;
    o === "button" ? L = {
        type: P,
        disabled: i
    } : L = {
        role: "button",
        tabIndex: i ? void 0 : 0,
        href: o === "a" && !i ? y : void 0,
        target: o === "a" ? v : void 0,
        type: o === "input" ? P : void 0,
        disabled: o === "input" ? i : void 0,
        "aria-disabled": !i || o === "input" ? void 0 : i,
        rel: o === "a" ? b : void 0
    };
    let $ = Hi() || el();
    g && typeof g == "function" && xd("onClick is deprecated, please use onPress instead. See: https://github.com/nextui-org/nextui/issues/4292", "useButton");
    const _ = oe => {
        $ && (g == null || g(oe)), a == null || a(oe)
    };
    let {
        pressProps: D,
        isPressed: F
    } = pv({
        onPressStart: c,
        onPressEnd: u,
        onPressChange: d,
        onPress: _,
        isDisabled: i,
        preventFocusOnPress: p,
        allowTextSelectionOnPress: C,
        ref: n
    }), {
        focusableProps: U
    } = Rd(e, n);
    h && (U.tabIndex = i ? -1 : U.tabIndex);
    let Y = Ue(U, D, Za(e, {
        labelable: !0
    }));
    return {
        isPressed: F,
        buttonProps: Ue(L, Y, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: oe => {
                P === "button" && $ || g == null || g(oe)
            }
        })
    }
}
var o2 = () => Fd(() =>
        import ("./index-BkeSzixM.js"), []).then(e => e.default),
    X0 = e => {
        const {
            ripples: n = [],
            motionProps: o,
            color: i = "currentColor",
            style: a,
            onClear: c
        } = e;
        return R.jsx(R.Fragment, {
            children: n.map(u => {
                const d = Yb(.01 * u.size, .2, u.size > 100 ? .75 : .5);
                return R.jsx(Oa, {
                    features: o2,
                    children: R.jsx(Dd, {
                        mode: "popLayout",
                        children: R.jsx(Ia.span, {
                            animate: {
                                transform: "scale(2)",
                                opacity: 0
                            },
                            className: "nextui-ripple",
                            exit: {
                                opacity: 0
                            },
                            initial: {
                                transform: "scale(0)",
                                opacity: .35
                            },
                            style: {
                                position: "absolute",
                                backgroundColor: i,
                                borderRadius: "100%",
                                transformOrigin: "center",
                                pointerEvents: "none",
                                overflow: "hidden",
                                inset: 0,
                                zIndex: 0,
                                top: u.y,
                                left: u.x,
                                width: `${u.size}px`,
                                height: `${u.size}px`,
                                ...a
                            },
                            transition: {
                                duration: d
                            },
                            onAnimationComplete: () => {
                                c(u.key)
                            },
                            ...o
                        })
                    })
                }, u.key)
            })
        })
    };
X0.displayName = "NextUI.Ripple";
var i2 = X0;

function s2(e = {}) {
    const [n, o] = S.useState([]), i = S.useCallback(c => {
        const u = c.target,
            d = Math.max(u.clientWidth, u.clientHeight);
        o(p => [...p, {
            key: Gb(p.length.toString()),
            size: d,
            x: c.x - d / 2,
            y: c.y - d / 2
        }])
    }, []), a = S.useCallback(c => {
        o(u => u.filter(d => d.key !== c))
    }, []);
    return {
        ripples: n,
        onClear: a,
        onPress: i,
        ...e
    }
}

function a2(e) {
    var n, o, i, a, c, u, d, p, h;
    const g = r2(),
        y = Qa(),
        v = !!g,
        {
            ref: b,
            as: P,
            children: C,
            startContent: L,
            endContent: $,
            autoFocus: _,
            className: D,
            spinner: F,
            isLoading: U = !1,
            disableRipple: Y = !1,
            fullWidth: oe = (n = g == null ? void 0 : g.fullWidth) != null ? n : !1,
            radius: E = g == null ? void 0 : g.radius,
            size: J = (o = g == null ? void 0 : g.size) != null ? o : "md",
            color: se = (i = g == null ? void 0 : g.color) != null ? i : "default",
            variant: H = (a = g == null ? void 0 : g.variant) != null ? a : "solid",
            disableAnimation: B = (u = (c = g == null ? void 0 : g.disableAnimation) != null ? c : y == null ? void 0 : y.disableAnimation) != null ? u : !1,
            isDisabled: O = (d = g == null ? void 0 : g.isDisabled) != null ? d : !1,
            isIconOnly: W = (p = g == null ? void 0 : g.isIconOnly) != null ? p : !1,
            spinnerPlacement: z = "start",
            onPress: re,
            onClick: ee,
            ...I
        } = e,
        Q = P || "button",
        K = typeof Q == "string",
        w = Mo(b),
        M = (h = Y || (y == null ? void 0 : y.disableRipple)) != null ? h : B,
        {
            isFocusVisible: q,
            isFocused: ne,
            focusProps: ie
        } = Ad({
            autoFocus: _
        }),
        le = O || U,
        me = S.useMemo(() => QT({
            size: J,
            color: se,
            variant: H,
            radius: E,
            fullWidth: oe,
            isDisabled: le,
            isInGroup: v,
            disableAnimation: B,
            isIconOnly: W,
            className: D
        }), [J, se, H, E, oe, le, v, W, B, D]),
        {
            onPress: he,
            onClear: de,
            ripples: Ce
        } = s2(),
        kt = S.useCallback(Ut => {
            M || le || B || w.current && he(Ut)
        }, [M, le, B, w, he]),
        {
            buttonProps: en,
            isPressed: fn
        } = Y0({
            elementType: P,
            isDisabled: le,
            onPress: nr(re, kt),
            onClick: ee,
            ...I
        }, w),
        {
            isHovered: Mn,
            hoverProps: lr
        } = kd({
            isDisabled: le
        }),
        Mt = S.useCallback((Ut = {}) => ({
            "data-disabled": Je(le),
            "data-focus": Je(ne),
            "data-pressed": Je(fn),
            "data-focus-visible": Je(q),
            "data-hover": Je(Mn),
            "data-loading": Je(U),
            ...Ue(en, ie, lr, bm(I, {
                enabled: K
            }), bm(Ut))
        }), [U, le, ne, fn, K, q, Mn, en, ie, lr, I]),
        Bt = Ut => S.isValidElement(Ut) ? S.cloneElement(Ut, {
            "aria-hidden": !0,
            focusable: !1,
            tabIndex: -1
        }) : null,
        ur = Bt(L),
        _o = Bt($),
        cr = S.useMemo(() => ({
            sm: "sm",
            md: "sm",
            lg: "md"
        })[J], [J]),
        Ln = S.useCallback(() => ({
            ripples: Ce,
            onClear: de
        }), [Ce, de]);
    return {
        Component: Q,
        children: C,
        domRef: w,
        spinner: F,
        styles: me,
        startContent: ur,
        endContent: _o,
        isLoading: U,
        spinnerPlacement: z,
        spinnerSize: cr,
        disableRipple: M,
        getButtonProps: Mt,
        getRippleProps: Ln,
        isIconOnly: W
    }
}

function l2(e) {
    const [n, o] = ol(e, fg.variantKeys), {
        children: i,
        className: a,
        classNames: c,
        label: u,
        ...d
    } = n, p = S.useMemo(() => fg({ ...o
    }), [Xa(o)]), h = Nr(c == null ? void 0 : c.base, a), g = u || i, y = S.useMemo(() => g && typeof g == "string" ? g : d["aria-label"] ? "" : "Loading", [i, g, d["aria-label"]]), v = S.useCallback(() => ({
        "aria-label": y,
        className: p.base({
            class: h
        }),
        ...d
    }), [y, p, h, d]);
    return {
        label: g,
        slots: p,
        classNames: c,
        getSpinnerProps: v
    }
}
var Q0 = sr((e, n) => {
    const {
        slots: o,
        classNames: i,
        label: a,
        getSpinnerProps: c
    } = l2({ ...e
    });
    return R.jsxs("div", {
        ref: n,
        ...c(),
        children: [R.jsxs("div", {
            className: o.wrapper({
                class: i == null ? void 0 : i.wrapper
            }),
            children: [R.jsx("i", {
                className: o.circle1({
                    class: i == null ? void 0 : i.circle1
                })
            }), R.jsx("i", {
                className: o.circle2({
                    class: i == null ? void 0 : i.circle2
                })
            })]
        }), a && R.jsx("span", {
            className: o.label({
                class: i == null ? void 0 : i.label
            }),
            children: a
        })]
    })
});
Q0.displayName = "NextUI.Spinner";
var u2 = Q0,
    q0 = sr((e, n) => {
        const {
            Component: o,
            domRef: i,
            children: a,
            styles: c,
            spinnerSize: u,
            spinner: d = R.jsx(u2, {
                color: "current",
                size: u
            }),
            spinnerPlacement: p,
            startContent: h,
            endContent: g,
            isLoading: y,
            disableRipple: v,
            getButtonProps: b,
            getRippleProps: P,
            isIconOnly: C
        } = a2({ ...e,
            ref: n
        });
        return R.jsxs(o, {
            ref: i,
            className: c,
            ...b(),
            children: [h, y && p === "start" && d, y && C ? null : a, y && p === "end" && d, g, !v && R.jsx(i2, { ...P()
            })]
        })
    });
q0.displayName = "NextUI.Button";
var vg = q0;

function xg(e, n = []) {
    const o = S.useRef(e);
    return G0(() => {
        o.current = e
    }), S.useCallback((...i) => {
        var a;
        return (a = o.current) == null ? void 0 : a.call(o, ...i)
    }, n)
}

function c2(e, n) {
    let {
        elementType: o = "a",
        onPress: i,
        onPressStart: a,
        onPressEnd: c,
        onClick: u,
        role: d,
        isDisabled: p,
        ...h
    } = e, g = {};
    o !== "a" && (g = {
        role: "link",
        tabIndex: p ? void 0 : 0
    });
    let y = Hi() || el();
    u && typeof u == "function" && d !== "button" && xd("onClick is deprecated, please use onPress instead. See: https://github.com/nextui-org/nextui/issues/4292", "useLink");
    const v = F => {
        y && (u == null || u(F)), i == null || i(F)
    };
    let {
        focusableProps: b
    } = Rd(e, n), {
        pressProps: P,
        isPressed: C
    } = pv({
        onPress: v,
        onPressStart: a,
        onPressEnd: c,
        isDisabled: p,
        ref: n
    }), L = Za(h, {
        labelable: !0,
        isLink: o === "a"
    }), $ = Ue(b, P), _ = ov(), D = BS(e);
    return {
        isPressed: C,
        linkProps: Ue(L, D, { ...$,
            ...g,
            "aria-disabled": p || void 0,
            "aria-current": e["aria-current"],
            onClick: F => {
                var U;
                (U = P.onClick) == null || U.call(P, F), !y && u && u(F), !_.isNative && F.currentTarget instanceof HTMLAnchorElement && F.currentTarget.href && !F.isDefaultPrevented() && iv(F.currentTarget, F) && e.href && (F.preventDefault(), _.open(F.currentTarget, F, e.href, e.routerOptions))
            }
        })
    }
}

function d2(e) {
    var n, o, i, a;
    const c = Qa(),
        [u, d] = ol(e, hg.variantKeys),
        {
            ref: p,
            as: h,
            children: g,
            anchorIcon: y,
            isExternal: v = !1,
            showAnchorIcon: b = !1,
            autoFocus: P = !1,
            className: C,
            onPress: L,
            onPressStart: $,
            onPressEnd: _,
            onClick: D,
            ...F
        } = u,
        U = h || "a",
        Y = Mo(p),
        oe = (o = (n = e == null ? void 0 : e.disableAnimation) != null ? n : c == null ? void 0 : c.disableAnimation) != null ? o : !1,
        {
            linkProps: E
        } = c2({ ...F,
            onPress: L,
            onPressStart: $,
            onPressEnd: _,
            onClick: D,
            isDisabled: e.isDisabled,
            elementType: `${h}`
        }, Y),
        {
            isFocused: J,
            isFocusVisible: se,
            focusProps: H
        } = Ad({
            autoFocus: P
        });
    v && (F.rel = (i = F.rel) != null ? i : "noopener noreferrer", F.target = (a = F.target) != null ? a : "_blank");
    const B = S.useMemo(() => hg({ ...d,
            disableAnimation: oe,
            className: C
        }), [Xa(d), oe, C]),
        O = S.useCallback(() => ({
            ref: Y,
            className: B,
            "data-focus": Je(J),
            "data-disabled": Je(e.isDisabled),
            "data-focus-visible": Je(se),
            ...Ue(H, E, F)
        }), [B, J, se, H, E, F]);
    return {
        Component: U,
        children: g,
        anchorIcon: y,
        showAnchorIcon: b,
        getLinkProps: O
    }
}
var Z0 = sr((e, n) => {
    const {
        Component: o,
        children: i,
        showAnchorIcon: a,
        anchorIcon: c = R.jsx(JT, {
            className: XT
        }),
        getLinkProps: u
    } = d2({
        ref: n,
        ...e
    });
    return R.jsx(o, { ...u(),
        children: R.jsxs(R.Fragment, {
            children: [i, a && c]
        })
    })
});
Z0.displayName = "NextUI.Link";
var vo = Z0;

function J0(e) {
    let [n, o] = cv(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
    const i = S.useCallback(() => {
            o(!0)
        }, [o]),
        a = S.useCallback(() => {
            o(!1)
        }, [o]),
        c = S.useCallback(() => {
            o(!n)
        }, [o, n]);
    return {
        isOpen: n,
        setOpen: o,
        open: i,
        close: a,
        toggle: c
    }
}
const f2 = 1500,
    wg = 500;
let Tr = {},
    p2 = 0,
    Ei = !1,
    Pn = null,
    Cr = null;

function h2(e = {}) {
    let {
        delay: n = f2,
        closeDelay: o = wg
    } = e, {
        isOpen: i,
        open: a,
        close: c
    } = J0(e), u = S.useMemo(() => `${++p2}`, []), d = S.useRef(null), p = S.useRef(c), h = () => {
        Tr[u] = v
    }, g = () => {
        for (let P in Tr) P !== u && (Tr[P](!0), delete Tr[P])
    }, y = () => {
        d.current && clearTimeout(d.current), d.current = null, g(), h(), Ei = !0, a(), Pn && (clearTimeout(Pn), Pn = null), Cr && (clearTimeout(Cr), Cr = null)
    }, v = P => {
        P || o <= 0 ? (d.current && clearTimeout(d.current), d.current = null, p.current()) : d.current || (d.current = setTimeout(() => {
            d.current = null, p.current()
        }, o)), Pn && (clearTimeout(Pn), Pn = null), Ei && (Cr && clearTimeout(Cr), Cr = setTimeout(() => {
            delete Tr[u], Cr = null, Ei = !1
        }, Math.max(wg, o)))
    }, b = () => {
        g(), h(), !i && !Pn && !Ei ? Pn = setTimeout(() => {
            Pn = null, Ei = !0, y()
        }, n) : i || y()
    };
    return S.useEffect(() => {
        p.current = c
    }, [c]), S.useEffect(() => () => {
        d.current && clearTimeout(d.current), Tr[u] && delete Tr[u]
    }, [u]), {
        isOpen: i,
        open: P => {
            !P && n > 0 && !d.current ? b() : y()
        },
        close: v
    }
}

function m2(e, n) {
    let o = Za(e, {
            labelable: !0
        }),
        {
            hoverProps: i
        } = kd({
            onHoverStart: () => n == null ? void 0 : n.open(!0),
            onHoverEnd: () => n == null ? void 0 : n.close()
        });
    return {
        tooltipProps: Ue(o, i, {
            role: "tooltip"
        })
    }
}

function g2(e, n, o) {
    let {
        isDisabled: i,
        trigger: a
    } = e, c = bd(), u = S.useRef(!1), d = S.useRef(!1), p = () => {
        (u.current || d.current) && n.open(d.current)
    }, h = $ => {
        !u.current && !d.current && n.close($)
    };
    S.useEffect(() => {
        let $ = _ => {
            o && o.current && _.key === "Escape" && (_.stopPropagation(), n.close(!0))
        };
        if (n.isOpen) return document.addEventListener("keydown", $, !0), () => {
            document.removeEventListener("keydown", $, !0)
        }
    }, [o, n]);
    let g = () => {
            a !== "focus" && (Sv() === "pointer" ? u.current = !0 : u.current = !1, p())
        },
        y = () => {
            a !== "focus" && (d.current = !1, u.current = !1, h())
        },
        v = () => {
            d.current = !1, u.current = !1, h(!0)
        },
        b = () => {
            Cd() && (d.current = !0, p())
        },
        P = () => {
            d.current = !1, u.current = !1, h(!0)
        },
        {
            hoverProps: C
        } = kd({
            isDisabled: i,
            onHoverStart: g,
            onHoverEnd: y
        }),
        {
            focusableProps: L
        } = Rd({
            isDisabled: i,
            onFocus: b,
            onBlur: P
        }, o);
    return {
        triggerProps: {
            "aria-describedby": n.isOpen ? c : void 0,
            ...Ue(L, C, {
                onPointerDown: v,
                onKeyDown: v
            })
        },
        tooltipProps: {
            id: c
        }
    }
}

function y2(e) {
    var n, o;
    const i = Qa(),
        [a, c] = ol(e, pg.variantKeys),
        {
            ref: u,
            as: d,
            isOpen: p,
            content: h,
            children: g,
            defaultOpen: y,
            onOpenChange: v,
            isDisabled: b,
            trigger: P,
            shouldFlip: C = !0,
            containerPadding: L = 12,
            placement: $ = "top",
            delay: _ = 0,
            closeDelay: D = 500,
            showArrow: F = !1,
            offset: U = 7,
            crossOffset: Y = 0,
            isDismissable: oe,
            shouldCloseOnBlur: E = !0,
            portalContainer: J,
            isKeyboardDismissDisabled: se = !1,
            updatePositionDeps: H = [],
            shouldCloseOnInteractOutside: B,
            className: O,
            onClose: W,
            motionProps: z,
            classNames: re,
            ...ee
        } = a,
        I = d || "div",
        Q = (o = (n = e == null ? void 0 : e.disableAnimation) != null ? n : i == null ? void 0 : i.disableAnimation) != null ? o : !1,
        K = h2({
            delay: _,
            closeDelay: D,
            isDisabled: b,
            defaultOpen: y,
            isOpen: p,
            onOpenChange: Mt => {
                v == null || v(Mt), Mt || W == null || W()
            }
        }),
        w = S.useRef(null),
        M = S.useRef(null),
        q = S.useId(),
        ne = K.isOpen && !b;
    S.useImperativeHandle(u, () => jb(M));
    const {
        triggerProps: ie,
        tooltipProps: le
    } = g2({
        isDisabled: b,
        trigger: P
    }, K, w), {
        tooltipProps: me
    } = m2({
        isOpen: ne,
        ...Ue(a, le)
    }, K), {
        overlayProps: he,
        placement: de,
        updatePosition: Ce
    } = rP({
        isOpen: ne,
        targetRef: w,
        placement: n2($),
        overlayRef: M,
        offset: F ? U + 3 : U,
        crossOffset: Y,
        shouldFlip: C,
        containerPadding: L
    });
    G0(() => {
        H.length && Ce()
    }, H);
    const {
        overlayProps: kt
    } = Cv({
        isOpen: ne,
        onClose: K.close,
        isDismissable: oe,
        shouldCloseOnBlur: E,
        isKeyboardDismissDisabled: se,
        shouldCloseOnInteractOutside: B
    }, M), en = S.useMemo(() => {
        var Mt, Bt, ur;
        return pg({ ...c,
            disableAnimation: Q,
            radius: (Mt = e == null ? void 0 : e.radius) != null ? Mt : "md",
            size: (Bt = e == null ? void 0 : e.size) != null ? Bt : "md",
            shadow: (ur = e == null ? void 0 : e.shadow) != null ? ur : "sm"
        })
    }, [Xa(c), Q, e == null ? void 0 : e.radius, e == null ? void 0 : e.size, e == null ? void 0 : e.shadow]), fn = S.useCallback((Mt = {}, Bt = null) => ({ ...Ue(ie, Mt),
        ref: Qb(Bt, w),
        "aria-describedby": ne ? q : void 0
    }), [ie, ne, q, K]), Mn = S.useCallback(() => ({
        ref: M,
        "data-slot": "base",
        "data-open": Je(ne),
        "data-arrow": Je(F),
        "data-disabled": Je(b),
        "data-placement": yg(de || "top", $),
        ...Ue(me, kt, ee),
        style: Ue(he.style, ee.style, a.style),
        className: en.base({
            class: re == null ? void 0 : re.base
        }),
        id: q
    }), [en, ne, F, b, de, $, me, kt, ee, he, a, q]), lr = S.useCallback(() => ({
        "data-slot": "content",
        "data-open": Je(ne),
        "data-arrow": Je(F),
        "data-disabled": Je(b),
        "data-placement": yg(de || "top", $),
        className: en.content({
            class: Nr(re == null ? void 0 : re.content, O)
        })
    }), [en, ne, F, b, de, $, re]);
    return {
        Component: I,
        content: h,
        children: g,
        isOpen: ne,
        triggerRef: w,
        showArrow: F,
        portalContainer: J,
        placement: $,
        disableAnimation: Q,
        isDisabled: b,
        motionProps: z,
        getTooltipContentProps: lr,
        getTriggerProps: fn,
        getTooltipProps: Mn
    }
}
var v2 = () => Fd(() =>
        import ("./index-BkeSzixM.js"), []).then(e => e.default),
    e1 = sr((e, n) => {
        const {
            Component: o,
            children: i,
            content: a,
            isOpen: c,
            portalContainer: u,
            placement: d,
            disableAnimation: p,
            motionProps: h,
            getTriggerProps: g,
            getTooltipProps: y,
            getTooltipContentProps: v
        } = y2({ ...e,
            ref: n
        });
        let b;
        try {
            if (S.Children.count(i) !== 1) throw new Error;
            if (!S.isValidElement(i)) b = R.jsx("p", { ...g(),
                children: i
            });
            else {
                const F = i;
                b = S.cloneElement(F, g(F.props, F.ref))
            }
        } catch {
            b = R.jsx("span", {}), xd("Tooltip must have only one child node. Please, check your code.")
        }
        const {
            ref: P,
            id: C,
            style: L,
            ...$
        } = y(), _ = R.jsx("div", {
            ref: P,
            id: C,
            style: L,
            children: R.jsx(Oa, {
                features: v2,
                children: R.jsx(Ia.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    variants: K0.scaleSpring,
                    ...Ue(h, $),
                    style: { ...t2(d)
                    },
                    children: R.jsx(o, { ...v(),
                        children: a
                    })
                })
            })
        });
        return R.jsxs(R.Fragment, {
            children: [b, p && c ? R.jsx(Ym, {
                portalContainer: u,
                children: R.jsx("div", {
                    ref: P,
                    id: C,
                    style: L,
                    ...$,
                    children: R.jsx(o, { ...v(),
                        children: a
                    })
                })
            }) : R.jsx(Dd, {
                children: c ? R.jsx(Ym, {
                    portalContainer: u,
                    children: _
                }) : null
            })]
        })
    });
e1.displayName = "NextUI.Tooltip";
var bg = e1;

function x2(e, n) {
    let {
        role: o = "dialog"
    } = e, i = $S();
    i = e["aria-label"] ? void 0 : i;
    let a = S.useRef(!1);
    return S.useEffect(() => {
        if (n.current && !n.current.contains(document.activeElement)) {
            _a(n.current);
            let c = setTimeout(() => {
                document.activeElement === n.current && (a.current = !0, n.current && (n.current.blur(), _a(n.current)), a.current = !1)
            }, 500);
            return () => {
                clearTimeout(c)
            }
        }
    }, [n]), d0(), {
        dialogProps: { ...Za(e, {
                labelable: !0
            }),
            role: o,
            tabIndex: -1,
            "aria-labelledby": e["aria-labelledby"] || i,
            onBlur: c => {
                a.current && c.stopPropagation()
            }
        },
        titleProps: {
            id: i
        }
    }
}
var [w2, sl] = vd({
    name: "ModalContext",
    errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"
}), t1 = sr((e, n) => {
    const {
        as: o,
        children: i,
        className: a,
        ...c
    } = e, {
        slots: u,
        classNames: d,
        bodyId: p,
        setBodyMounted: h
    } = sl(), g = Mo(n), y = o || "div";
    return S.useEffect(() => (h(!0), () => h(!1)), [h]), R.jsx(y, {
        ref: g,
        className: u.body({
            class: Nr(d == null ? void 0 : d.body, a)
        }),
        id: p,
        ...c,
        children: i
    })
});
t1.displayName = "NextUI.ModalBody";
var b2 = t1,
    S2 = {
        enter: {
            scale: "var(--scale-enter)",
            y: "var(--slide-enter)",
            opacity: 1,
            willChange: "auto",
            transition: {
                scale: {
                    duration: .4,
                    ease: En.ease
                },
                opacity: {
                    duration: .4,
                    ease: En.ease
                },
                y: {
                    type: "spring",
                    bounce: 0,
                    duration: .6
                }
            }
        },
        exit: {
            scale: "var(--scale-exit)",
            y: "var(--slide-exit)",
            opacity: 0,
            willChange: "transform",
            transition: {
                duration: .3,
                ease: En.ease
            }
        }
    },
    Sg = () => Fd(() =>
        import ("./index-BkeSzixM.js"), []).then(e => e.default),
    n1 = e => {
        const {
            as: n,
            children: o,
            role: i = "dialog",
            ...a
        } = e, {
            Component: c,
            domRef: u,
            slots: d,
            classNames: p,
            motionProps: h,
            backdrop: g,
            closeButton: y,
            hideCloseButton: v,
            disableAnimation: b,
            getDialogProps: P,
            getBackdropProps: C,
            getCloseButtonProps: L,
            onClose: $
        } = sl(), _ = n || c || "div", D = KS(), {
            dialogProps: F
        } = x2({
            role: i
        }, u), U = S.isValidElement(y) ? S.cloneElement(y, L()) : R.jsx("button", { ...L(),
            children: R.jsx(e2, {})
        }), Y = S.useCallback(B => {
            B.key === "Tab" && B.nativeEvent.isComposing && (B.stopPropagation(), B.preventDefault())
        }, []), oe = P(Ue(F, a)), E = R.jsxs(_, { ...oe,
            onKeyDown: nr(oe.onKeyDown, Y),
            children: [R.jsx(Qm, {
                onDismiss: $
            }), !v && U, typeof o == "function" ? o($) : o, R.jsx(Qm, {
                onDismiss: $
            })]
        }), J = S.useMemo(() => g === "transparent" ? null : b ? R.jsx("div", { ...C()
        }) : R.jsx(Oa, {
            features: Sg,
            children: R.jsx(Ia.div, {
                animate: "enter",
                exit: "exit",
                initial: "exit",
                variants: K0.fade,
                ...C()
            })
        }), [g, b, C]), se = {
            "--visual-viewport-height": D.height + "px"
        }, H = b ? R.jsx("div", {
            className: d.wrapper({
                class: p == null ? void 0 : p.wrapper
            }),
            "data-slot": "wrapper",
            style: se,
            children: E
        }) : R.jsx(Oa, {
            features: Sg,
            children: R.jsx(Ia.div, {
                animate: "enter",
                className: d.wrapper({
                    class: p == null ? void 0 : p.wrapper
                }),
                "data-slot": "wrapper",
                exit: "exit",
                initial: "exit",
                variants: S2,
                ...h,
                style: se,
                children: E
            })
        });
        return R.jsxs("div", {
            tabIndex: -1,
            children: [J, H]
        })
    };
n1.displayName = "NextUI.ModalContent";
var P2 = n1,
    r1 = sr((e, n) => {
        const {
            as: o,
            children: i,
            className: a,
            ...c
        } = e, {
            slots: u,
            classNames: d
        } = sl(), p = Mo(n), h = o || "footer";
        return R.jsx(h, {
            ref: p,
            className: u.footer({
                class: Nr(d == null ? void 0 : d.footer, a)
            }),
            ...c,
            children: i
        })
    });
r1.displayName = "NextUI.ModalFooter";
var E2 = r1,
    o1 = sr((e, n) => {
        const {
            as: o,
            children: i,
            className: a,
            ...c
        } = e, {
            slots: u,
            classNames: d,
            headerId: p,
            setHeaderMounted: h
        } = sl(), g = Mo(n), y = o || "header";
        return S.useEffect(() => (h(!0), () => h(!1)), [h]), R.jsx(y, {
            ref: g,
            className: u.header({
                class: Nr(d == null ? void 0 : d.header, a)
            }),
            id: p,
            ...c,
            children: i
        })
    });
o1.displayName = "NextUI.ModalHeader";
var T2 = o1;

function C2(e = {
    shouldBlockScroll: !0
}, n, o) {
    let {
        overlayProps: i,
        underlayProps: a
    } = Cv({ ...e,
        isOpen: n.isOpen,
        onClose: n.close
    }, o);
    return VP({
        isDisabled: !n.isOpen || !e.shouldBlockScroll
    }), d0(), S.useEffect(() => {
        if (n.isOpen && o.current) return XP([o.current])
    }, [n.isOpen, o]), {
        modalProps: Ue(i),
        underlayProps: a
    }
}

function $2(e) {
    var n, o, i;
    const a = Qa(),
        [c, u] = ol(e, mg.variantKeys),
        {
            ref: d,
            as: p,
            className: h,
            classNames: g,
            isOpen: y,
            defaultOpen: v,
            onOpenChange: b,
            motionProps: P,
            closeButton: C,
            isDismissable: L = !0,
            hideCloseButton: $ = !1,
            shouldBlockScroll: _ = !0,
            portalContainer: D,
            isKeyboardDismissDisabled: F = !1,
            onClose: U,
            ...Y
        } = c,
        oe = p || "section",
        E = Mo(d),
        J = S.useRef(null),
        [se, H] = S.useState(!1),
        [B, O] = S.useState(!1),
        W = (o = (n = e.disableAnimation) != null ? n : a == null ? void 0 : a.disableAnimation) != null ? o : !1,
        z = S.useId(),
        re = S.useId(),
        ee = S.useId(),
        I = J0({
            isOpen: y,
            defaultOpen: v,
            onOpenChange: de => {
                b == null || b(de), de || U == null || U()
            }
        }),
        {
            modalProps: Q,
            underlayProps: K
        } = C2({
            isDismissable: L,
            shouldBlockScroll: _,
            isKeyboardDismissDisabled: F
        }, I, E),
        {
            buttonProps: w
        } = Y0({
            onPress: I.close
        }, J),
        {
            isFocusVisible: M,
            focusProps: q
        } = Ad(),
        ne = Nr(g == null ? void 0 : g.base, h),
        ie = S.useMemo(() => mg({ ...u,
            disableAnimation: W
        }), [Xa(u), W]),
        le = (de = {}, Ce = null) => {
            var kt;
            return {
                ref: MS(Ce, E),
                ...Ue(Q, Y, de),
                className: ie.base({
                    class: Nr(ne, de.className)
                }),
                id: z,
                "data-open": Je(I.isOpen),
                "data-dismissable": Je(L),
                "aria-modal": Je(!0),
                "data-placement": (kt = e == null ? void 0 : e.placement) != null ? kt : "right",
                "aria-labelledby": se ? re : void 0,
                "aria-describedby": B ? ee : void 0
            }
        },
        me = S.useCallback((de = {}) => ({
            className: ie.backdrop({
                class: g == null ? void 0 : g.backdrop
            }),
            onClick: () => I.close(),
            ...K,
            ...de
        }), [ie, g, K]),
        he = () => ({
            role: "button",
            tabIndex: 0,
            "aria-label": "Close",
            "data-focus-visible": Je(M),
            className: ie.closeButton({
                class: g == null ? void 0 : g.closeButton
            }),
            ...Ue(w, q)
        });
    return {
        Component: oe,
        slots: ie,
        domRef: E,
        headerId: re,
        bodyId: ee,
        motionProps: P,
        classNames: g,
        isDismissable: L,
        closeButton: C,
        hideCloseButton: $,
        portalContainer: D,
        shouldBlockScroll: _,
        backdrop: (i = e.backdrop) != null ? i : "opaque",
        isOpen: I.isOpen,
        onClose: I.close,
        disableAnimation: W,
        setBodyMounted: O,
        setHeaderMounted: H,
        getDialogProps: le,
        getBackdropProps: me,
        getCloseButtonProps: he
    }
}
var i1 = sr((e, n) => {
    const {
        children: o,
        ...i
    } = e, a = $2({ ...i,
        ref: n
    }), c = R.jsx(ZP, {
        portalContainer: a.portalContainer,
        children: o
    });
    return R.jsx(w2, {
        value: a,
        children: a.disableAnimation && a.isOpen ? c : R.jsx(Dd, {
            children: a.isOpen ? c : null
        })
    })
});
i1.displayName = "NextUI.Modal";
var k2 = i1;

function M2(e = {}) {
    const {
        id: n,
        defaultOpen: o,
        isOpen: i,
        onClose: a,
        onOpen: c,
        onChange: u = () => {}
    } = e, d = xg(c), p = xg(a), [h, g] = cv(i, o || !1, u), y = S.useId(), v = n || y, b = i !== void 0, P = S.useCallback(() => {
        b || g(!1), p == null || p()
    }, [b, p]), C = S.useCallback(() => {
        b || g(!0), d == null || d()
    }, [b, d]), L = S.useCallback(() => {
        (h ? P : C)()
    }, [h, C, P]);
    return {
        isOpen: !!h,
        onOpen: C,
        onClose: P,
        onOpenChange: L,
        isControlled: b,
        getButtonProps: ($ = {}) => ({ ...$,
            "aria-expanded": h,
            "aria-controls": v,
            onClick: nr($.onClick, L)
        }),
        getDisclosureProps: ($ = {}) => ({ ...$,
            hidden: !h,
            id: v
        })
    }
}
const al = S.createContext(null);

function ll(e) {
    const n = S.useRef(null);
    return n.current === null && (n.current = e()), n.current
}
const ul = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class L2 extends S.Component {
    getSnapshotBeforeUpdate(n) {
        const o = this.props.childRef.current;
        if (o && n.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = o.offsetHeight || 0, i.width = o.offsetWidth || 0, i.top = o.offsetTop, i.left = o.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function A2({
    children: e,
    isPresent: n
}) {
    const o = S.useId(),
        i = S.useRef(null),
        a = S.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: c
        } = S.useContext(ul);
    return S.useInsertionEffect(() => {
        const {
            width: u,
            height: d,
            top: p,
            left: h
        } = a.current;
        if (n || !i.current || !u || !d) return;
        i.current.dataset.motionPopId = o;
        const g = document.createElement("style");
        return c && (g.nonce = c), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [n]), R.jsx(L2, {
        isPresent: n,
        childRef: i,
        sizeRef: a,
        children: S.cloneElement(e, {
            ref: i
        })
    })
}
const R2 = ({
    children: e,
    initial: n,
    isPresent: o,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: c,
    mode: u
}) => {
    const d = ll(_2),
        p = S.useId(),
        h = S.useCallback(y => {
            d.set(y, !0);
            for (const v of d.values())
                if (!v) return;
            i && i()
        }, [d, i]),
        g = S.useMemo(() => ({
            id: p,
            initial: n,
            isPresent: o,
            custom: a,
            onExitComplete: h,
            register: y => (d.set(y, !1), () => d.delete(y))
        }), c ? [Math.random(), h] : [o, h]);
    return S.useMemo(() => {
        d.forEach((y, v) => d.set(v, !1))
    }, [o]), S.useEffect(() => {
        !o && !d.size && i && i()
    }, [o]), u === "popLayout" && (e = R.jsx(A2, {
        isPresent: o,
        children: e
    })), R.jsx(al.Provider, {
        value: g,
        children: e
    })
};

function _2() {
    return new Map
}
const zd = S.createContext({}),
    Ct = e => e;
let Jc = Ct;
const ba = e => e.key || "";

function Pg(e) {
    const n = [];
    return S.Children.forEach(e, o => {
        S.isValidElement(o) && n.push(o)
    }), n
}
const Bd = typeof window < "u",
    s1 = Bd ? S.useLayoutEffect : S.useEffect,
    ed = ({
        children: e,
        exitBeforeEnter: n,
        custom: o,
        initial: i = !0,
        onExitComplete: a,
        presenceAffectsLayout: c = !0,
        mode: u = "sync"
    }) => {
        const d = S.useMemo(() => Pg(e), [e]),
            p = d.map(ba),
            h = S.useRef(!0),
            g = S.useRef(d),
            y = ll(() => new Map),
            [v, b] = S.useState(d),
            [P, C] = S.useState(d);
        s1(() => {
            h.current = !1, g.current = d;
            for (let _ = 0; _ < P.length; _++) {
                const D = ba(P[_]);
                p.includes(D) ? y.delete(D) : y.get(D) !== !0 && y.set(D, !1)
            }
        }, [P, p.length, p.join("-")]);
        const L = [];
        if (d !== v) {
            let _ = [...d];
            for (let D = 0; D < P.length; D++) {
                const F = P[D],
                    U = ba(F);
                p.includes(U) || (_.splice(D, 0, F), L.push(F))
            }
            u === "wait" && L.length && (_ = L), C(Pg(_)), b(d);
            return
        }
        const {
            forceRender: $
        } = S.useContext(zd);
        return R.jsx(R.Fragment, {
            children: P.map(_ => {
                const D = ba(_),
                    F = d === P || p.includes(D),
                    U = () => {
                        if (y.has(D)) y.set(D, !0);
                        else return;
                        let Y = !0;
                        y.forEach(oe => {
                            oe || (Y = !1)
                        }), Y && ($ == null || $(), C(g.current), a && a())
                    };
                return R.jsx(R2, {
                    isPresent: F,
                    initial: !h.current || i ? void 0 : !1,
                    custom: F ? void 0 : o,
                    presenceAffectsLayout: c,
                    mode: u,
                    onExitComplete: F ? void 0 : U,
                    children: _
                }, D)
            })
        })
    },
    D2 = {
        skipAnimations: !1,
        useManualTiming: !1
    };

function N2(e) {
    let n = new Set,
        o = new Set,
        i = !1,
        a = !1;
    const c = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function d(h) {
        c.has(h) && (p.schedule(h), e()), h(u)
    }
    const p = {
        schedule: (h, g = !1, y = !1) => {
            const b = y && i ? n : o;
            return g && c.add(h), b.has(h) || b.add(h), h
        },
        cancel: h => {
            o.delete(h), c.delete(h)
        },
        process: h => {
            if (u = h, i) {
                a = !0;
                return
            }
            i = !0, [n, o] = [o, n], n.forEach(d), n.clear(), i = !1, a && (a = !1, p.process(h))
        }
    };
    return p
}
const Sa = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    O2 = 40;

function a1(e, n) {
    let o = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => o = !0,
        u = Sa.reduce(($, _) => ($[_] = N2(c), $), {}),
        {
            read: d,
            resolveKeyframes: p,
            update: h,
            preRender: g,
            render: y,
            postRender: v
        } = u,
        b = () => {
            const $ = performance.now();
            o = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min($ - a.timestamp, O2), 1), a.timestamp = $, a.isProcessing = !0, d.process(a), p.process(a), h.process(a), g.process(a), y.process(a), v.process(a), a.isProcessing = !1, o && n && (i = !1, e(b))
        },
        P = () => {
            o = !0, i = !0, a.isProcessing || e(b)
        };
    return {
        schedule: Sa.reduce(($, _) => {
            const D = u[_];
            return $[_] = (F, U = !1, Y = !1) => (o || P(), D.schedule(F, U, Y)), $
        }, {}),
        cancel: $ => {
            for (let _ = 0; _ < Sa.length; _++) u[Sa[_]].cancel($)
        },
        state: a,
        steps: u
    }
}
const {
    schedule: Oe,
    cancel: rr,
    state: st,
    steps: xc
} = a1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0), l1 = S.createContext({
    strict: !1
}), Eg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, To = {};
for (const e in Eg) To[e] = {
    isEnabled: n => Eg[e].some(o => !!n[o])
};

function j2(e) {
    for (const n in e) To[n] = { ...To[n],
        ...e[n]
    }
}
const I2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Fa(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || I2.has(e)
}
let u1 = e => !Fa(e);

function V2(e) {
    e && (u1 = n => n.startsWith("on") ? !Fa(n) : e(n))
}
try {
    V2(require("@emotion/is-prop-valid").default)
} catch {}

function F2(e, n, o) {
    const i = {};
    for (const a in e) a === "values" && typeof e.values == "object" || (u1(a) || o === !0 && Fa(a) || !n && !Fa(a) || e.draggable && a.startsWith("onDrag")) && (i[a] = e[a]);
    return i
}

function z2(e) {
    if (typeof Proxy > "u") return e;
    const n = new Map,
        o = (...i) => e(...i);
    return new Proxy(o, {
        get: (i, a) => a === "create" ? e : (n.has(a) || n.set(a, e(a)), n.get(a))
    })
}
const cl = S.createContext({});

function Vi(e) {
    return typeof e == "string" || Array.isArray(e)
}

function dl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ud = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Hd = ["initial", ...Ud];

function fl(e) {
    return dl(e.animate) || Hd.some(n => Vi(e[n]))
}

function c1(e) {
    return !!(fl(e) || e.variants)
}

function B2(e, n) {
    if (fl(e)) {
        const {
            initial: o,
            animate: i
        } = e;
        return {
            initial: o === !1 || Vi(o) ? o : void 0,
            animate: Vi(i) ? i : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}

function U2(e) {
    const {
        initial: n,
        animate: o
    } = B2(e, S.useContext(cl));
    return S.useMemo(() => ({
        initial: n,
        animate: o
    }), [Tg(n), Tg(o)])
}

function Tg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const H2 = Symbol.for("motionComponentSymbol");

function xo(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function W2(e, n, o) {
    return S.useCallback(i => {
        i && e.mount && e.mount(i), n && (i ? n.mount(i) : n.unmount()), o && (typeof o == "function" ? o(i) : xo(o) && (o.current = i))
    }, [n])
}
const Wd = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    K2 = "framerAppearId",
    d1 = "data-" + Wd(K2),
    {
        schedule: Kd,
        cancel: l5
    } = a1(queueMicrotask, !1),
    f1 = S.createContext({});

function G2(e, n, o, i, a) {
    var c, u;
    const {
        visualElement: d
    } = S.useContext(cl), p = S.useContext(l1), h = S.useContext(al), g = S.useContext(ul).reducedMotion, y = S.useRef(null);
    i = i || p.renderer, !y.current && i && (y.current = i(e, {
        visualState: n,
        parent: d,
        props: o,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const v = y.current,
        b = S.useContext(f1);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && Y2(y.current, o, a, b);
    const P = S.useRef(!1);
    S.useInsertionEffect(() => {
        v && P.current && v.update(o, h)
    });
    const C = o[d1],
        L = S.useRef(!!C && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, C)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, C)));
    return s1(() => {
        v && (P.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), Kd.render(v.render), L.current && v.animationState && v.animationState.animateChanges())
    }), S.useEffect(() => {
        v && (!L.current && v.animationState && v.animationState.animateChanges(), L.current && (queueMicrotask(() => {
            var $;
            ($ = window.MotionHandoffMarkAsComplete) === null || $ === void 0 || $.call(window, C)
        }), L.current = !1))
    }), v
}

function Y2(e, n, o, i) {
    const {
        layoutId: a,
        layout: c,
        drag: u,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: h
    } = n;
    e.projection = new o(e.latestValues, n["data-framer-portal-id"] ? void 0 : p1(e.parent)), e.projection.setOptions({
        layoutId: a,
        layout: c,
        alwaysMeasureLayout: !!u || d && xo(d),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: p,
        layoutRoot: h
    })
}

function p1(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : p1(e.parent)
}

function X2({
    preloadedFeatures: e,
    createVisualElement: n,
    useRender: o,
    useVisualState: i,
    Component: a
}) {
    var c, u;
    e && j2(e);

    function d(h, g) {
        let y;
        const v = { ...S.useContext(ul),
                ...h,
                layoutId: Q2(h)
            },
            {
                isStatic: b
            } = v,
            P = U2(h),
            C = i(h, b);
        if (!b && Bd) {
            q2();
            const L = Z2(v);
            y = L.MeasureLayout, P.visualElement = G2(a, C, v, n, L.ProjectionNode)
        }
        return R.jsxs(cl.Provider, {
            value: P,
            children: [y && P.visualElement ? R.jsx(y, {
                visualElement: P.visualElement,
                ...v
            }) : null, o(a, h, W2(C, P.visualElement, g), C, b, P.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a=="string"?a:`create(${(u=(c=a.displayName)!==null&&c!==void 0?c:a.name)!==null&&u!==void 0?u:""})`}`;
    const p = S.forwardRef(d);
    return p[H2] = a, p
}

function Q2({
    layoutId: e
}) {
    const n = S.useContext(zd).id;
    return n && e !== void 0 ? n + "-" + e : e
}

function q2(e, n) {
    S.useContext(l1).strict
}

function Z2(e) {
    const {
        drag: n,
        layout: o
    } = To;
    if (!n && !o) return {};
    const i = { ...n,
        ...o
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || o != null && o.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const J2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Gd(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(J2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function h1(e, {
    style: n,
    vars: o
}, i, a) {
    Object.assign(e.style, n, a && a.getProjectionStyles(i));
    for (const c in o) e.style.setProperty(c, o[c])
}
const m1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function g1(e, n, o, i) {
    h1(e, n, void 0, i);
    for (const a in n.attrs) e.setAttribute(m1.has(a) ? a : Wd(a), n.attrs[a])
}
const ft = e => !!(e && e.getVelocity),
    za = {};

function eC(e) {
    Object.assign(za, e)
}
const Ki = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Fr = new Set(Ki);

function y1(e, {
    layout: n,
    layoutId: o
}) {
    return Fr.has(e) || e.startsWith("origin") || (n || o !== void 0) && (!!za[e] || e === "opacity")
}

function Yd(e, n, o) {
    var i;
    const {
        style: a
    } = e, c = {};
    for (const u in a)(ft(a[u]) || n.style && ft(n.style[u]) || y1(u, e) || ((i = o == null ? void 0 : o.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (c[u] = a[u]);
    return c
}

function v1(e, n, o) {
    const i = Yd(e, n, o);
    for (const a in e)
        if (ft(e[a]) || ft(n[a])) {
            const c = Ki.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[c] = e[a]
        }
    return i
}

function Cg(e) {
    const n = [{}, {}];
    return e == null || e.values.forEach((o, i) => {
        n[0][i] = o.get(), n[1][i] = o.getVelocity()
    }), n
}

function Xd(e, n, o, i) {
    if (typeof n == "function") {
        const [a, c] = Cg(i);
        n = n(o !== void 0 ? o : e.custom, a, c)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
        const [a, c] = Cg(i);
        n = n(o !== void 0 ? o : e.custom, a, c)
    }
    return n
}
const td = e => Array.isArray(e),
    tC = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    nC = e => td(e) ? e[e.length - 1] || 0 : e;

function Ca(e) {
    const n = ft(e) ? e.get() : e;
    return tC(n) ? n.toValue() : n
}

function rC({
    scrapeMotionValuesFromProps: e,
    createRenderState: n,
    onMount: o
}, i, a, c) {
    const u = {
        latestValues: oC(i, a, c, e),
        renderState: n()
    };
    return o && (u.mount = d => o(i, d, u)), u
}
const x1 = e => (n, o) => {
    const i = S.useContext(cl),
        a = S.useContext(al),
        c = () => rC(e, n, i, a);
    return o ? c() : ll(c)
};

function oC(e, n, o, i) {
    const a = {},
        c = i(e, {});
    for (const v in c) a[v] = Ca(c[v]);
    let {
        initial: u,
        animate: d
    } = e;
    const p = fl(e),
        h = c1(e);
    n && h && !p && e.inherit !== !1 && (u === void 0 && (u = n.initial), d === void 0 && (d = n.animate));
    let g = o ? o.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !dl(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let b = 0; b < v.length; b++) {
            const P = Xd(e, v[b]);
            if (P) {
                const {
                    transitionEnd: C,
                    transition: L,
                    ...$
                } = P;
                for (const _ in $) {
                    let D = $[_];
                    if (Array.isArray(D)) {
                        const F = g ? D.length - 1 : 0;
                        D = D[F]
                    }
                    D !== null && (a[_] = D)
                }
                for (const _ in C) a[_] = C[_]
            }
        }
    }
    return a
}
const Qd = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    w1 = () => ({ ...Qd(),
        attrs: {}
    }),
    b1 = (e, n) => n && typeof e == "number" ? n.transform(e) : e,
    kn = (e, n, o) => o > n ? n : o < e ? e : o,
    Ro = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Fi = { ...Ro,
        transform: e => kn(0, 1, e)
    },
    Pa = { ...Ro,
        default: 1
    },
    Gi = e => ({
        test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
        parse: parseFloat,
        transform: n => `${n}${e}`
    }),
    Zn = Gi("deg"),
    un = Gi("%"),
    ve = Gi("px"),
    iC = Gi("vh"),
    sC = Gi("vw"),
    $g = { ...un,
        parse: e => un.parse(e) / 100,
        transform: e => un.transform(e * 100)
    },
    aC = {
        borderWidth: ve,
        borderTopWidth: ve,
        borderRightWidth: ve,
        borderBottomWidth: ve,
        borderLeftWidth: ve,
        borderRadius: ve,
        radius: ve,
        borderTopLeftRadius: ve,
        borderTopRightRadius: ve,
        borderBottomRightRadius: ve,
        borderBottomLeftRadius: ve,
        width: ve,
        maxWidth: ve,
        height: ve,
        maxHeight: ve,
        top: ve,
        right: ve,
        bottom: ve,
        left: ve,
        padding: ve,
        paddingTop: ve,
        paddingRight: ve,
        paddingBottom: ve,
        paddingLeft: ve,
        margin: ve,
        marginTop: ve,
        marginRight: ve,
        marginBottom: ve,
        marginLeft: ve,
        backgroundPositionX: ve,
        backgroundPositionY: ve
    },
    lC = {
        rotate: Zn,
        rotateX: Zn,
        rotateY: Zn,
        rotateZ: Zn,
        scale: Pa,
        scaleX: Pa,
        scaleY: Pa,
        scaleZ: Pa,
        skew: Zn,
        skewX: Zn,
        skewY: Zn,
        distance: ve,
        translateX: ve,
        translateY: ve,
        translateZ: ve,
        x: ve,
        y: ve,
        z: ve,
        perspective: ve,
        transformPerspective: ve,
        opacity: Fi,
        originX: $g,
        originY: $g,
        originZ: ve
    },
    kg = { ...Ro,
        transform: Math.round
    },
    qd = { ...aC,
        ...lC,
        zIndex: kg,
        size: ve,
        fillOpacity: Fi,
        strokeOpacity: Fi,
        numOctaves: kg
    },
    uC = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    cC = Ki.length;

function dC(e, n, o) {
    let i = "",
        a = !0;
    for (let c = 0; c < cC; c++) {
        const u = Ki[c],
            d = e[u];
        if (d === void 0) continue;
        let p = !0;
        if (typeof d == "number" ? p = d === (u.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || o) {
            const h = b1(d, qd[u]);
            if (!p) {
                a = !1;
                const g = uC[u] || u;
                i += `${g}(${h}) `
            }
            o && (n[u] = h)
        }
    }
    return i = i.trim(), o ? i = o(n, a ? "" : i) : a && (i = "none"), i
}
const S1 = e => n => typeof n == "string" && n.startsWith(e),
    P1 = S1("--"),
    fC = S1("var(--"),
    Zd = e => fC(e) ? pC.test(e.split("/*")[0].trim()) : !1,
    pC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Jd(e, n, o) {
    const {
        style: i,
        vars: a,
        transformOrigin: c
    } = e;
    let u = !1,
        d = !1;
    for (const p in n) {
        const h = n[p];
        if (Fr.has(p)) {
            u = !0;
            continue
        } else if (P1(p)) {
            a[p] = h;
            continue
        } else {
            const g = b1(h, qd[p]);
            p.startsWith("origin") ? (d = !0, c[p] = g) : i[p] = g
        }
    }
    if (n.transform || (u || o ? i.transform = dC(n, e.transform, o) : i.transform && (i.transform = "none")), d) {
        const {
            originX: p = "50%",
            originY: h = "50%",
            originZ: g = 0
        } = c;
        i.transformOrigin = `${p} ${h} ${g}`
    }
}

function Mg(e, n, o) {
    return typeof e == "string" ? e : ve.transform(n + o * e)
}

function hC(e, n, o) {
    const i = Mg(n, e.x, e.width),
        a = Mg(o, e.y, e.height);
    return `${i} ${a}`
}
const mC = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    gC = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function yC(e, n, o = 1, i = 0, a = !0) {
    e.pathLength = 1;
    const c = a ? mC : gC;
    e[c.offset] = ve.transform(-i);
    const u = ve.transform(n),
        d = ve.transform(o);
    e[c.array] = `${u} ${d}`
}

function ef(e, {
    attrX: n,
    attrY: o,
    attrScale: i,
    originX: a,
    originY: c,
    pathLength: u,
    pathSpacing: d = 1,
    pathOffset: p = 0,
    ...h
}, g, y) {
    if (Jd(e, h, y), g) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: v,
        style: b,
        dimensions: P
    } = e;
    v.transform && (P && (b.transform = v.transform), delete v.transform), P && (a !== void 0 || c !== void 0 || b.transform) && (b.transformOrigin = hC(P, a !== void 0 ? a : .5, c !== void 0 ? c : .5)), n !== void 0 && (v.x = n), o !== void 0 && (v.y = o), i !== void 0 && (v.scale = i), u !== void 0 && yC(v, u, d, p, !1)
}
const tf = e => typeof e == "string" && e.toLowerCase() === "svg",
    vC = {
        useVisualState: x1({
            scrapeMotionValuesFromProps: v1,
            createRenderState: w1,
            onMount: (e, n, {
                renderState: o,
                latestValues: i
            }) => {
                Oe.read(() => {
                    try {
                        o.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect()
                    } catch {
                        o.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), Oe.render(() => {
                    ef(o, i, tf(n.tagName), e.transformTemplate), g1(n, o)
                })
            }
        })
    },
    xC = {
        useVisualState: x1({
            scrapeMotionValuesFromProps: Yd,
            createRenderState: Qd
        })
    };

function E1(e, n, o) {
    for (const i in n) !ft(n[i]) && !y1(i, o) && (e[i] = n[i])
}

function wC({
    transformTemplate: e
}, n) {
    return S.useMemo(() => {
        const o = Qd();
        return Jd(o, n, e), Object.assign({}, o.vars, o.style)
    }, [n])
}

function bC(e, n) {
    const o = e.style || {},
        i = {};
    return E1(i, o, e), Object.assign(i, wC(e, n)), i
}

function SC(e, n) {
    const o = {},
        i = bC(e, n);
    return e.drag && e.dragListener !== !1 && (o.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = i, o
}

function PC(e, n, o, i) {
    const a = S.useMemo(() => {
        const c = w1();
        return ef(c, n, tf(i), e.transformTemplate), { ...c.attrs,
            style: { ...c.style
            }
        }
    }, [n]);
    if (e.style) {
        const c = {};
        E1(c, e.style, e), a.style = { ...c,
            ...a.style
        }
    }
    return a
}

function EC(e = !1) {
    return (o, i, a, {
        latestValues: c
    }, u) => {
        const p = (Gd(o) ? PC : SC)(i, c, u, o),
            h = F2(i, typeof o == "string", e),
            g = o !== S.Fragment ? { ...h,
                ...p,
                ref: a
            } : {},
            {
                children: y
            } = i,
            v = S.useMemo(() => ft(y) ? y.get() : y, [y]);
        return S.createElement(o, { ...g,
            children: v
        })
    }
}

function TC(e, n) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const u = { ...Gd(i) ? vC : xC,
            preloadedFeatures: e,
            useRender: EC(a),
            createVisualElement: n,
            Component: i
        };
        return X2(u)
    }
}

function T1(e, n) {
    if (!Array.isArray(n)) return !1;
    const o = n.length;
    if (o !== e.length) return !1;
    for (let i = 0; i < o; i++)
        if (n[i] !== e[i]) return !1;
    return !0
}

function pl(e, n, o) {
    const i = e.getProps();
    return Xd(i, n, o !== void 0 ? o : i.custom, e)
}

function nf(e, n) {
    return e ? e[n] || e.default || e : void 0
}
let $a;

function CC() {
    $a = void 0
}
const cn = {
    now: () => ($a === void 0 && cn.set(st.isProcessing || D2.useManualTiming ? st.timestamp : performance.now()), $a),
    set: e => {
        $a = e, queueMicrotask(CC)
    }
};

function rf(e, n) {
    e.indexOf(n) === -1 && e.push(n)
}

function of (e, n) {
    const o = e.indexOf(n);
    o > -1 && e.splice(o, 1)
}
class sf {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return rf(this.subscriptions, n), () => of (this.subscriptions, n)
    }
    notify(n, o, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](n, o, i);
            else
                for (let c = 0; c < a; c++) {
                    const u = this.subscriptions[c];
                    u && u(n, o, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function C1(e, n) {
    return n ? e * (1e3 / n) : 0
}
const Lg = 30,
    $C = e => !isNaN(parseFloat(e));
class kC {
    constructor(n, o = {}) {
        this.version = "11.16.4", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
            const c = cn.now();
            this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(n), this.owner = o.owner
    }
    setCurrent(n) {
        this.current = n, this.updatedAt = cn.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = $C(this.current))
    }
    setPrevFrameValue(n = this.current) {
        this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, o) {
        this.events[n] || (this.events[n] = new sf);
        const i = this.events[n].add(o);
        return n === "change" ? () => {
            i(), Oe.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const n in this.events) this.events[n].clear()
    }
    attach(n, o) {
        this.passiveEffect = n, this.stopPassiveEffect = o
    }
    set(n, o = !0) {
        !o || !this.passiveEffect ? this.updateAndNotify(n, o) : this.passiveEffect(n, this.updateAndNotify)
    }
    setWithVelocity(n, o, i) {
        this.set(o), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(n, o = !0) {
        this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = cn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > Lg) return 0;
        const o = Math.min(this.updatedAt - this.prevUpdatedAt, Lg);
        return C1(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
    }
    start(n) {
        return this.stop(), new Promise(o => {
            this.hasAnimated = !0, this.animation = n(o), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Co(e, n) {
    return new kC(e, n)
}

function MC(e, n, o) {
    e.hasValue(n) ? e.getValue(n).set(o) : e.addValue(n, Co(o))
}

function LC(e, n) {
    const o = pl(e, n);
    let {
        transitionEnd: i = {},
        transition: a = {},
        ...c
    } = o || {};
    c = { ...c,
        ...i
    };
    for (const u in c) {
        const d = nC(c[u]);
        MC(e, u, d)
    }
}

function AC(e) {
    return !!(ft(e) && e.add)
}

function nd(e, n) {
    const o = e.getValue("willChange");
    if (AC(o)) return o.add(n)
}

function $1(e) {
    return e.props[d1]
}

function af(e) {
    let n;
    return () => (n === void 0 && (n = e()), n)
}
const RC = af(() => window.ScrollTimeline !== void 0);
class _C {
    constructor(n) {
        this.stop = () => this.runAll("stop"), this.animations = n.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(n => "finished" in n ? n.finished : n))
    }
    getAll(n) {
        return this.animations[0][n]
    }
    setAll(n, o) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][n] = o
    }
    attachTimeline(n, o) {
        const i = this.animations.map(a => {
            if (RC() && a.attachTimeline) return a.attachTimeline(n);
            if (typeof o == "function") return o(a)
        });
        return () => {
            i.forEach((a, c) => {
                a && a(), this.animations[c].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(n) {
        this.setAll("time", n)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(n) {
        this.setAll("speed", n)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let n = 0;
        for (let o = 0; o < this.animations.length; o++) n = Math.max(n, this.animations[o].duration);
        return n
    }
    runAll(n) {
        this.animations.forEach(o => o[n]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class DC extends _C {
    then(n, o) {
        return Promise.all(this.animations).then(n).catch(o)
    }
}
const Cn = e => e * 1e3,
    $n = e => e / 1e3;

function lf(e) {
    return typeof e == "function"
}

function Ag(e, n) {
    e.timeline = n, e.onfinish = null
}
const uf = e => Array.isArray(e) && typeof e[0] == "number",
    NC = {
        linearEasing: void 0
    };

function OC(e, n) {
    const o = af(e);
    return () => {
        var i;
        return (i = NC[n]) !== null && i !== void 0 ? i : o()
    }
}
const Ba = OC(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    $o = (e, n, o) => {
        const i = n - e;
        return i === 0 ? 1 : (o - e) / i
    },
    k1 = (e, n, o = 10) => {
        let i = "";
        const a = Math.max(Math.round(n / o), 2);
        for (let c = 0; c < a; c++) i += e($o(0, a - 1, c)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function M1(e) {
    return !!(typeof e == "function" && Ba() || !e || typeof e == "string" && (e in rd || Ba()) || uf(e) || Array.isArray(e) && e.every(M1))
}
const ki = ([e, n, o, i]) => `cubic-bezier(${e}, ${n}, ${o}, ${i})`,
    rd = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ki([0, .65, .55, 1]),
        circOut: ki([.55, 0, 1, .45]),
        backIn: ki([.31, .01, .66, -.59]),
        backOut: ki([.33, 1.53, .69, .99])
    };

function L1(e, n) {
    if (e) return typeof e == "function" && Ba() ? k1(e, n) : uf(e) ? ki(e) : Array.isArray(e) ? e.map(o => L1(o, n) || rd.easeOut) : rd[e]
}
const A1 = (e, n, o) => (((1 - 3 * o + 3 * n) * e + (3 * o - 6 * n)) * e + 3 * n) * e,
    jC = 1e-7,
    IC = 12;

function VC(e, n, o, i, a) {
    let c, u, d = 0;
    do u = n + (o - n) / 2, c = A1(u, i, a) - e, c > 0 ? o = u : n = u; while (Math.abs(c) > jC && ++d < IC);
    return u
}

function Yi(e, n, o, i) {
    if (e === n && o === i) return Ct;
    const a = c => VC(c, 0, 1, e, o);
    return c => c === 0 || c === 1 ? c : A1(a(c), n, i)
}
const R1 = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
    _1 = e => n => 1 - e(1 - n),
    D1 = Yi(.33, 1.53, .69, .99),
    cf = _1(D1),
    N1 = R1(cf),
    O1 = e => (e *= 2) < 1 ? .5 * cf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    df = e => 1 - Math.sin(Math.acos(e)),
    j1 = _1(df),
    I1 = R1(df),
    V1 = e => /^0[^.\s]+$/u.test(e);

function FC(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || V1(e) : !0
}
const F1 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    zC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function BC(e) {
    const n = zC.exec(e);
    if (!n) return [, ];
    const [, o, i, a] = n;
    return [`--${o??i}`, a]
}

function z1(e, n, o = 1) {
    const [i, a] = BC(e);
    if (!i) return;
    const c = window.getComputedStyle(n).getPropertyValue(i);
    if (c) {
        const u = c.trim();
        return F1(u) ? parseFloat(u) : u
    }
    return Zd(a) ? z1(a, n, o + 1) : a
}
const UC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Rg = e => e === Ro || e === ve,
    _g = (e, n) => parseFloat(e.split(", ")[n]),
    Dg = (e, n) => (o, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return _g(a[1], n); {
            const c = i.match(/^matrix\((.+)\)$/u);
            return c ? _g(c[1], e) : 0
        }
    },
    HC = new Set(["x", "y", "z"]),
    WC = Ki.filter(e => !HC.has(e));

function KC(e) {
    const n = [];
    return WC.forEach(o => {
        const i = e.getValue(o);
        i !== void 0 && (n.push([o, i.get()]), i.set(o.startsWith("scale") ? 1 : 0))
    }), n
}
const ko = {
    width: ({
        x: e
    }, {
        paddingLeft: n = "0",
        paddingRight: o = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(o),
    height: ({
        y: e
    }, {
        paddingTop: n = "0",
        paddingBottom: o = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(o),
    top: (e, {
        top: n
    }) => parseFloat(n),
    left: (e, {
        left: n
    }) => parseFloat(n),
    bottom: ({
        y: e
    }, {
        top: n
    }) => parseFloat(n) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: n
    }) => parseFloat(n) + (e.max - e.min),
    x: Dg(4, 13),
    y: Dg(5, 14)
};
ko.translateX = ko.x;
ko.translateY = ko.y;
const B1 = e => n => n.test(e),
    GC = {
        test: e => e === "auto",
        parse: e => e
    },
    U1 = [Ro, ve, un, Zn, sC, iC, GC],
    Ng = e => U1.find(B1(e)),
    Dr = new Set;
let od = !1,
    id = !1;

function H1() {
    if (id) {
        const e = Array.from(Dr).filter(i => i.needsMeasurement),
            n = new Set(e.map(i => i.element)),
            o = new Map;
        n.forEach(i => {
            const a = KC(i);
            a.length && (o.set(i, a), i.render())
        }), e.forEach(i => i.measureInitialState()), n.forEach(i => {
            i.render();
            const a = o.get(i);
            a && a.forEach(([c, u]) => {
                var d;
                (d = i.getValue(c)) === null || d === void 0 || d.set(u)
            })
        }), e.forEach(i => i.measureEndState()), e.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    id = !1, od = !1, Dr.forEach(e => e.complete()), Dr.clear()
}

function W1() {
    Dr.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (id = !0)
    })
}

function YC() {
    W1(), H1()
}
class ff {
    constructor(n, o, i, a, c, u = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...n], this.onComplete = o, this.name = i, this.motionValue = a, this.element = c, this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Dr.add(this), od || (od = !0, Oe.read(W1), Oe.resolveKeyframes(H1))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: o,
            element: i,
            motionValue: a
        } = this;
        for (let c = 0; c < n.length; c++)
            if (n[c] === null)
                if (c === 0) {
                    const u = a == null ? void 0 : a.get(),
                        d = n[n.length - 1];
                    if (u !== void 0) n[0] = u;
                    else if (i && o) {
                        const p = i.readValue(o, d);
                        p != null && (n[0] = p)
                    }
                    n[0] === void 0 && (n[0] = d), a && u === void 0 && a.set(n[0])
                } else n[c] = n[c - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Dr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Dr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ri = e => Math.round(e * 1e5) / 1e5,
    pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function XC(e) {
    return e == null
}
const QC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    hf = (e, n) => o => !!(typeof o == "string" && QC.test(o) && o.startsWith(e) || n && !XC(o) && Object.prototype.hasOwnProperty.call(o, n)),
    K1 = (e, n, o) => i => {
        if (typeof i != "string") return i;
        const [a, c, u, d] = i.match(pf);
        return {
            [e]: parseFloat(a),
            [n]: parseFloat(c),
            [o]: parseFloat(u),
            alpha: d !== void 0 ? parseFloat(d) : 1
        }
    },
    qC = e => kn(0, 255, e),
    wc = { ...Ro,
        transform: e => Math.round(qC(e))
    },
    _r = {
        test: hf("rgb", "red"),
        parse: K1("red", "green", "blue"),
        transform: ({
            red: e,
            green: n,
            blue: o,
            alpha: i = 1
        }) => "rgba(" + wc.transform(e) + ", " + wc.transform(n) + ", " + wc.transform(o) + ", " + Ri(Fi.transform(i)) + ")"
    };

function ZC(e) {
    let n = "",
        o = "",
        i = "",
        a = "";
    return e.length > 5 ? (n = e.substring(1, 3), o = e.substring(3, 5), i = e.substring(5, 7), a = e.substring(7, 9)) : (n = e.substring(1, 2), o = e.substring(2, 3), i = e.substring(3, 4), a = e.substring(4, 5), n += n, o += o, i += i, a += a), {
        red: parseInt(n, 16),
        green: parseInt(o, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const sd = {
        test: hf("#"),
        parse: ZC,
        transform: _r.transform
    },
    wo = {
        test: hf("hsl", "hue"),
        parse: K1("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: n,
            lightness: o,
            alpha: i = 1
        }) => "hsla(" + Math.round(e) + ", " + un.transform(Ri(n)) + ", " + un.transform(Ri(o)) + ", " + Ri(Fi.transform(i)) + ")"
    },
    dt = {
        test: e => _r.test(e) || sd.test(e) || wo.test(e),
        parse: e => _r.test(e) ? _r.parse(e) : wo.test(e) ? wo.parse(e) : sd.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? _r.transform(e) : wo.transform(e)
    },
    JC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function e$(e) {
    var n, o;
    return isNaN(e) && typeof e == "string" && (((n = e.match(pf)) === null || n === void 0 ? void 0 : n.length) || 0) + (((o = e.match(JC)) === null || o === void 0 ? void 0 : o.length) || 0) > 0
}
const G1 = "number",
    Y1 = "color",
    t$ = "var",
    n$ = "var(",
    Og = "${}",
    r$ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function zi(e) {
    const n = e.toString(),
        o = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let c = 0;
    const d = n.replace(r$, p => (dt.test(p) ? (i.color.push(c), a.push(Y1), o.push(dt.parse(p))) : p.startsWith(n$) ? (i.var.push(c), a.push(t$), o.push(p)) : (i.number.push(c), a.push(G1), o.push(parseFloat(p))), ++c, Og)).split(Og);
    return {
        values: o,
        split: d,
        indexes: i,
        types: a
    }
}

function X1(e) {
    return zi(e).values
}

function Q1(e) {
    const {
        split: n,
        types: o
    } = zi(e), i = n.length;
    return a => {
        let c = "";
        for (let u = 0; u < i; u++)
            if (c += n[u], a[u] !== void 0) {
                const d = o[u];
                d === G1 ? c += Ri(a[u]) : d === Y1 ? c += dt.transform(a[u]) : c += a[u]
            }
        return c
    }
}
const o$ = e => typeof e == "number" ? 0 : e;

function i$(e) {
    const n = X1(e);
    return Q1(e)(n.map(o$))
}
const or = {
        test: e$,
        parse: X1,
        createTransformer: Q1,
        getAnimatableNone: i$
    },
    s$ = new Set(["brightness", "contrast", "saturate", "opacity"]);

function a$(e) {
    const [n, o] = e.slice(0, -1).split("(");
    if (n === "drop-shadow") return e;
    const [i] = o.match(pf) || [];
    if (!i) return e;
    const a = o.replace(i, "");
    let c = s$.has(n) ? 1 : 0;
    return i !== o && (c *= 100), n + "(" + c + a + ")"
}
const l$ = /\b([a-z-]*)\(.*?\)/gu,
    ad = { ...or,
        getAnimatableNone: e => {
            const n = e.match(l$);
            return n ? n.map(a$).join(" ") : e
        }
    },
    u$ = { ...qd,
        color: dt,
        backgroundColor: dt,
        outlineColor: dt,
        fill: dt,
        stroke: dt,
        borderColor: dt,
        borderTopColor: dt,
        borderRightColor: dt,
        borderBottomColor: dt,
        borderLeftColor: dt,
        filter: ad,
        WebkitFilter: ad
    },
    mf = e => u$[e];

function q1(e, n) {
    let o = mf(e);
    return o !== ad && (o = or), o.getAnimatableNone ? o.getAnimatableNone(n) : void 0
}
const c$ = new Set(["auto", "none", "0"]);

function d$(e, n, o) {
    let i = 0,
        a;
    for (; i < e.length && !a;) {
        const c = e[i];
        typeof c == "string" && !c$.has(c) && zi(c).values.length && (a = e[i]), i++
    }
    if (a && o)
        for (const c of n) e[c] = q1(o, a)
}
class Z1 extends ff {
    constructor(n, o, i, a, c) {
        super(n, o, i, a, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            element: o,
            name: i
        } = this;
        if (!o || !o.current) return;
        super.readKeyframes();
        for (let p = 0; p < n.length; p++) {
            let h = n[p];
            if (typeof h == "string" && (h = h.trim(), Zd(h))) {
                const g = z1(h, o.current);
                g !== void 0 && (n[p] = g), p === n.length - 1 && (this.finalKeyframe = h)
            }
        }
        if (this.resolveNoneKeyframes(), !UC.has(i) || n.length !== 2) return;
        const [a, c] = n, u = Ng(a), d = Ng(c);
        if (u !== d)
            if (Rg(u) && Rg(d))
                for (let p = 0; p < n.length; p++) {
                    const h = n[p];
                    typeof h == "string" && (n[p] = parseFloat(h))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: o
        } = this, i = [];
        for (let a = 0; a < n.length; a++) FC(n[a]) && i.push(a);
        i.length && d$(n, i, o)
    }
    measureInitialState() {
        const {
            element: n,
            unresolvedKeyframes: o,
            name: i
        } = this;
        if (!n || !n.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ko[i](n.measureViewportBox(), window.getComputedStyle(n.current)), o[0] = this.measuredOrigin;
        const a = o[o.length - 1];
        a !== void 0 && n.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var n;
        const {
            element: o,
            name: i,
            unresolvedKeyframes: a
        } = this;
        if (!o || !o.current) return;
        const c = o.getValue(i);
        c && c.jump(this.measuredOrigin, !1);
        const u = a.length - 1,
            d = a[u];
        a[u] = ko[i](o.measureViewportBox(), window.getComputedStyle(o.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), !((n = this.removedTransforms) === null || n === void 0) && n.length && this.removedTransforms.forEach(([p, h]) => {
            o.getValue(p).set(h)
        }), this.resolveNoneKeyframes()
    }
}
const jg = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (or.test(e) || e === "0") && !e.startsWith("url("));

function f$(e) {
    const n = e[0];
    if (e.length === 1) return !0;
    for (let o = 0; o < e.length; o++)
        if (e[o] !== n) return !0
}

function p$(e, n, o, i) {
    const a = e[0];
    if (a === null) return !1;
    if (n === "display" || n === "visibility") return !0;
    const c = e[e.length - 1],
        u = jg(a, n),
        d = jg(c, n);
    return !u || !d ? !1 : f$(e) || (o === "spring" || lf(o)) && i
}
const h$ = e => e !== null;

function hl(e, {
    repeat: n,
    repeatType: o = "loop"
}, i) {
    const a = e.filter(h$),
        c = n && o !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
    return !c || i === void 0 ? a[c] : i
}
const m$ = 40;
class J1 {
    constructor({
        autoplay: n = !0,
        delay: o = 0,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: c = 0,
        repeatType: u = "loop",
        ...d
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = cn.now(), this.options = {
            autoplay: n,
            delay: o,
            type: i,
            repeat: a,
            repeatDelay: c,
            repeatType: u,
            ...d
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > m$ ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && YC(), this._resolved
    }
    onKeyframesResolved(n, o) {
        this.resolvedAt = cn.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: a,
            velocity: c,
            delay: u,
            onComplete: d,
            onUpdate: p,
            isGenerator: h
        } = this.options;
        if (!h && !p$(n, i, a, c))
            if (u) this.options.duration = 0;
            else {
                p == null || p(hl(n, this.options, o)), d == null || d(), this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(n, o);
        g !== !1 && (this._resolved = {
            keyframes: n,
            finalKeyframe: o,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(n, o) {
        return this.currentFinishedPromise.then(n, o)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(n => {
            this.resolveFinishedPromise = n
        })
    }
}
const ld = 2e4;

function ex(e) {
    let n = 0;
    const o = 50;
    let i = e.next(n);
    for (; !i.done && n < ld;) n += o, i = e.next(n);
    return n >= ld ? 1 / 0 : n
}
const Fe = (e, n, o) => e + (n - e) * o;

function bc(e, n, o) {
    return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + (n - e) * 6 * o : o < 1 / 2 ? n : o < 2 / 3 ? e + (n - e) * (2 / 3 - o) * 6 : e
}

function g$({
    hue: e,
    saturation: n,
    lightness: o,
    alpha: i
}) {
    e /= 360, n /= 100, o /= 100;
    let a = 0,
        c = 0,
        u = 0;
    if (!n) a = c = u = o;
    else {
        const d = o < .5 ? o * (1 + n) : o + n - o * n,
            p = 2 * o - d;
        a = bc(p, d, e + 1 / 3), c = bc(p, d, e), u = bc(p, d, e - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(c * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}

function Ua(e, n) {
    return o => o > 0 ? n : e
}
const Sc = (e, n, o) => {
        const i = e * e,
            a = o * (n * n - i) + i;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    y$ = [sd, _r, wo],
    v$ = e => y$.find(n => n.test(e));

function Ig(e) {
    const n = v$(e);
    if (!n) return !1;
    let o = n.parse(e);
    return n === wo && (o = g$(o)), o
}
const Vg = (e, n) => {
        const o = Ig(e),
            i = Ig(n);
        if (!o || !i) return Ua(e, n);
        const a = { ...o
        };
        return c => (a.red = Sc(o.red, i.red, c), a.green = Sc(o.green, i.green, c), a.blue = Sc(o.blue, i.blue, c), a.alpha = Fe(o.alpha, i.alpha, c), _r.transform(a))
    },
    x$ = (e, n) => o => n(e(o)),
    Xi = (...e) => e.reduce(x$),
    ud = new Set(["none", "hidden"]);

function w$(e, n) {
    return ud.has(e) ? o => o <= 0 ? e : n : o => o >= 1 ? n : e
}

function b$(e, n) {
    return o => Fe(e, n, o)
}

function gf(e) {
    return typeof e == "number" ? b$ : typeof e == "string" ? Zd(e) ? Ua : dt.test(e) ? Vg : E$ : Array.isArray(e) ? tx : typeof e == "object" ? dt.test(e) ? Vg : S$ : Ua
}

function tx(e, n) {
    const o = [...e],
        i = o.length,
        a = e.map((c, u) => gf(c)(c, n[u]));
    return c => {
        for (let u = 0; u < i; u++) o[u] = a[u](c);
        return o
    }
}

function S$(e, n) {
    const o = { ...e,
            ...n
        },
        i = {};
    for (const a in o) e[a] !== void 0 && n[a] !== void 0 && (i[a] = gf(e[a])(e[a], n[a]));
    return a => {
        for (const c in i) o[c] = i[c](a);
        return o
    }
}

function P$(e, n) {
    var o;
    const i = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let c = 0; c < n.values.length; c++) {
        const u = n.types[c],
            d = e.indexes[u][a[u]],
            p = (o = e.values[d]) !== null && o !== void 0 ? o : 0;
        i[c] = p, a[u]++
    }
    return i
}
const E$ = (e, n) => {
    const o = or.createTransformer(n),
        i = zi(e),
        a = zi(n);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? ud.has(e) && !a.values.length || ud.has(n) && !i.values.length ? w$(e, n) : Xi(tx(P$(i, a), a.values), o) : Ua(e, n)
};

function nx(e, n, o) {
    return typeof e == "number" && typeof n == "number" && typeof o == "number" ? Fe(e, n, o) : gf(e)(e, n)
}
const T$ = 5;

function rx(e, n, o) {
    const i = Math.max(n - T$, 0);
    return C1(o - e(i), n - i)
}
const Be = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Fg = .001;

function C$({
    duration: e = Be.duration,
    bounce: n = Be.bounce,
    velocity: o = Be.velocity,
    mass: i = Be.mass
}) {
    let a, c, u = 1 - n;
    u = kn(Be.minDamping, Be.maxDamping, u), e = kn(Be.minDuration, Be.maxDuration, $n(e)), u < 1 ? (a = h => {
        const g = h * u,
            y = g * e,
            v = g - o,
            b = cd(h, u),
            P = Math.exp(-y);
        return Fg - v / b * P
    }, c = h => {
        const y = h * u * e,
            v = y * o + o,
            b = Math.pow(u, 2) * Math.pow(h, 2) * e,
            P = Math.exp(-y),
            C = cd(Math.pow(h, 2), u);
        return (-a(h) + Fg > 0 ? -1 : 1) * ((v - b) * P) / C
    }) : (a = h => {
        const g = Math.exp(-h * e),
            y = (h - o) * e + 1;
        return -.001 + g * y
    }, c = h => {
        const g = Math.exp(-h * e),
            y = (o - h) * (e * e);
        return g * y
    });
    const d = 5 / e,
        p = k$(a, c, d);
    if (e = Cn(e), isNaN(p)) return {
        stiffness: Be.stiffness,
        damping: Be.damping,
        duration: e
    }; {
        const h = Math.pow(p, 2) * i;
        return {
            stiffness: h,
            damping: u * 2 * Math.sqrt(i * h),
            duration: e
        }
    }
}
const $$ = 12;

function k$(e, n, o) {
    let i = o;
    for (let a = 1; a < $$; a++) i = i - e(i) / n(i);
    return i
}

function cd(e, n) {
    return e * Math.sqrt(1 - n * n)
}
const M$ = ["duration", "bounce"],
    L$ = ["stiffness", "damping", "mass"];

function zg(e, n) {
    return n.some(o => e[o] !== void 0)
}

function A$(e) {
    let n = {
        velocity: Be.velocity,
        stiffness: Be.stiffness,
        damping: Be.damping,
        mass: Be.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!zg(e, L$) && zg(e, M$))
        if (e.visualDuration) {
            const o = e.visualDuration,
                i = 2 * Math.PI / (o * 1.2),
                a = i * i,
                c = 2 * kn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
            n = { ...n,
                mass: Be.mass,
                stiffness: a,
                damping: c
            }
        } else {
            const o = C$(e);
            n = { ...n,
                ...o,
                mass: Be.mass
            }, n.isResolvedFromDuration = !0
        }
    return n
}

function ox(e = Be.visualDuration, n = Be.bounce) {
    const o = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
    } : e;
    let {
        restSpeed: i,
        restDelta: a
    } = o;
    const c = o.keyframes[0],
        u = o.keyframes[o.keyframes.length - 1],
        d = {
            done: !1,
            value: c
        },
        {
            stiffness: p,
            damping: h,
            mass: g,
            duration: y,
            velocity: v,
            isResolvedFromDuration: b
        } = A$({ ...o,
            velocity: -$n(o.velocity || 0)
        }),
        P = v || 0,
        C = h / (2 * Math.sqrt(p * g)),
        L = u - c,
        $ = $n(Math.sqrt(p / g)),
        _ = Math.abs(L) < 5;
    i || (i = _ ? Be.restSpeed.granular : Be.restSpeed.default), a || (a = _ ? Be.restDelta.granular : Be.restDelta.default);
    let D;
    if (C < 1) {
        const U = cd($, C);
        D = Y => {
            const oe = Math.exp(-C * $ * Y);
            return u - oe * ((P + C * $ * L) / U * Math.sin(U * Y) + L * Math.cos(U * Y))
        }
    } else if (C === 1) D = U => u - Math.exp(-$ * U) * (L + (P + $ * L) * U);
    else {
        const U = $ * Math.sqrt(C * C - 1);
        D = Y => {
            const oe = Math.exp(-C * $ * Y),
                E = Math.min(U * Y, 300);
            return u - oe * ((P + C * $ * L) * Math.sinh(E) + U * L * Math.cosh(E)) / U
        }
    }
    const F = {
        calculatedDuration: b && y || null,
        next: U => {
            const Y = D(U);
            if (b) d.done = U >= y;
            else {
                let oe = 0;
                C < 1 && (oe = U === 0 ? Cn(P) : rx(D, U, Y));
                const E = Math.abs(oe) <= i,
                    J = Math.abs(u - Y) <= a;
                d.done = E && J
            }
            return d.value = d.done ? u : Y, d
        },
        toString: () => {
            const U = Math.min(ex(F), ld),
                Y = k1(oe => F.next(U * oe).value, U, 30);
            return U + "ms " + Y
        }
    };
    return F
}

function Bg({
    keyframes: e,
    velocity: n = 0,
    power: o = .8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: c = 500,
    modifyTarget: u,
    min: d,
    max: p,
    restDelta: h = .5,
    restSpeed: g
}) {
    const y = e[0],
        v = {
            done: !1,
            value: y
        },
        b = E => d !== void 0 && E < d || p !== void 0 && E > p,
        P = E => d === void 0 ? p : p === void 0 || Math.abs(d - E) < Math.abs(p - E) ? d : p;
    let C = o * n;
    const L = y + C,
        $ = u === void 0 ? L : u(L);
    $ !== L && (C = $ - y);
    const _ = E => -C * Math.exp(-E / i),
        D = E => $ + _(E),
        F = E => {
            const J = _(E),
                se = D(E);
            v.done = Math.abs(J) <= h, v.value = v.done ? $ : se
        };
    let U, Y;
    const oe = E => {
        b(v.value) && (U = E, Y = ox({
            keyframes: [v.value, P(v.value)],
            velocity: rx(D, E, v.value),
            damping: a,
            stiffness: c,
            restDelta: h,
            restSpeed: g
        }))
    };
    return oe(0), {
        calculatedDuration: null,
        next: E => {
            let J = !1;
            return !Y && U === void 0 && (J = !0, F(E), oe(E)), U !== void 0 && E >= U ? Y.next(E - U) : (!J && F(E), v)
        }
    }
}
const R$ = Yi(.42, 0, 1, 1),
    _$ = Yi(0, 0, .58, 1),
    ix = Yi(.42, 0, .58, 1),
    D$ = e => Array.isArray(e) && typeof e[0] != "number",
    Ug = {
        linear: Ct,
        easeIn: R$,
        easeInOut: ix,
        easeOut: _$,
        circIn: df,
        circInOut: I1,
        circOut: j1,
        backIn: cf,
        backInOut: N1,
        backOut: D1,
        anticipate: O1
    },
    Hg = e => {
        if (uf(e)) {
            Jc(e.length === 4);
            const [n, o, i, a] = e;
            return Yi(n, o, i, a)
        } else if (typeof e == "string") return Jc(Ug[e] !== void 0), Ug[e];
        return e
    };

function N$(e, n, o) {
    const i = [],
        a = o || nx,
        c = e.length - 1;
    for (let u = 0; u < c; u++) {
        let d = a(e[u], e[u + 1]);
        if (n) {
            const p = Array.isArray(n) ? n[u] || Ct : n;
            d = Xi(p, d)
        }
        i.push(d)
    }
    return i
}

function O$(e, n, {
    clamp: o = !0,
    ease: i,
    mixer: a
} = {}) {
    const c = e.length;
    if (Jc(c === n.length), c === 1) return () => n[0];
    if (c === 2 && e[0] === e[1]) return () => n[1];
    e[0] > e[c - 1] && (e = [...e].reverse(), n = [...n].reverse());
    const u = N$(n, i, a),
        d = u.length,
        p = h => {
            let g = 0;
            if (d > 1)
                for (; g < e.length - 2 && !(h < e[g + 1]); g++);
            const y = $o(e[g], e[g + 1], h);
            return u[g](y)
        };
    return o ? h => p(kn(e[0], e[c - 1], h)) : p
}

function j$(e, n) {
    const o = e[e.length - 1];
    for (let i = 1; i <= n; i++) {
        const a = $o(0, n, i);
        e.push(Fe(o, 1, a))
    }
}

function I$(e) {
    const n = [0];
    return j$(n, e.length - 1), n
}

function V$(e, n) {
    return e.map(o => o * n)
}

function F$(e, n) {
    return e.map(() => n || ix).splice(0, e.length - 1)
}

function Ha({
    duration: e = 300,
    keyframes: n,
    times: o,
    ease: i = "easeInOut"
}) {
    const a = D$(i) ? i.map(Hg) : Hg(i),
        c = {
            done: !1,
            value: n[0]
        },
        u = V$(o && o.length === n.length ? o : I$(n), e),
        d = O$(u, n, {
            ease: Array.isArray(a) ? a : F$(n, a)
        });
    return {
        calculatedDuration: e,
        next: p => (c.value = d(p), c.done = p >= e, c)
    }
}
const z$ = e => {
        const n = ({
            timestamp: o
        }) => e(o);
        return {
            start: () => Oe.update(n, !0),
            stop: () => rr(n),
            now: () => st.isProcessing ? st.timestamp : cn.now()
        }
    },
    B$ = {
        decay: Bg,
        inertia: Bg,
        tween: Ha,
        keyframes: Ha,
        spring: ox
    },
    U$ = e => e / 100;
class yf extends J1 {
    constructor(n) {
        super(n), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: p
            } = this.options;
            p && p()
        };
        const {
            name: o,
            motionValue: i,
            element: a,
            keyframes: c
        } = this.options, u = (a == null ? void 0 : a.KeyframeResolver) || ff, d = (p, h) => this.onKeyframesResolved(p, h);
        this.resolver = new u(c, d, o, i, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(n) {
        const {
            type: o = "keyframes",
            repeat: i = 0,
            repeatDelay: a = 0,
            repeatType: c,
            velocity: u = 0
        } = this.options, d = lf(o) ? o : B$[o] || Ha;
        let p, h;
        d !== Ha && typeof n[0] != "number" && (p = Xi(U$, nx(n[0], n[1])), n = [0, 100]);
        const g = d({ ...this.options,
            keyframes: n
        });
        c === "mirror" && (h = d({ ...this.options,
            keyframes: [...n].reverse(),
            velocity: -u
        })), g.calculatedDuration === null && (g.calculatedDuration = ex(g));
        const {
            calculatedDuration: y
        } = g, v = y + a, b = v * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: h,
            mapPercentToKeyframes: p,
            calculatedDuration: y,
            resolvedDuration: v,
            totalDuration: b
        }
    }
    onPostResolved() {
        const {
            autoplay: n = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !n ? this.pause() : this.state = this.pendingPlayState
    }
    tick(n, o = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: E
            } = this.options;
            return {
                done: !0,
                value: E[E.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: d,
            keyframes: p,
            calculatedDuration: h,
            totalDuration: g,
            resolvedDuration: y
        } = i;
        if (this.startTime === null) return c.next(0);
        const {
            delay: v,
            repeat: b,
            repeatType: P,
            repeatDelay: C,
            onUpdate: L
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - g / this.speed, this.startTime)), o ? this.currentTime = n : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(n - this.startTime) * this.speed;
        const $ = this.currentTime - v * (this.speed >= 0 ? 1 : -1),
            _ = this.speed >= 0 ? $ < 0 : $ > g;
        this.currentTime = Math.max($, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let D = this.currentTime,
            F = c;
        if (b) {
            const E = Math.min(this.currentTime, g) / y;
            let J = Math.floor(E),
                se = E % 1;
            !se && E >= 1 && (se = 1), se === 1 && J--, J = Math.min(J, b + 1), !!(J % 2) && (P === "reverse" ? (se = 1 - se, C && (se -= C / y)) : P === "mirror" && (F = u)), D = kn(0, 1, se) * y
        }
        const U = _ ? {
            done: !1,
            value: p[0]
        } : F.next(D);
        d && (U.value = d(U.value));
        let {
            done: Y
        } = U;
        !_ && h !== null && (Y = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const oe = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
        return oe && a !== void 0 && (U.value = hl(p, this.options, a)), L && L(U.value), oe && this.finish(), U
    }
    get duration() {
        const {
            resolved: n
        } = this;
        return n ? $n(n.calculatedDuration) : 0
    }
    get time() {
        return $n(this.currentTime)
    }
    set time(n) {
        n = Cn(n), this.currentTime = n, this.holdTime !== null || this.speed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        const o = this.playbackSpeed !== n;
        this.playbackSpeed = n, o && (this.time = $n(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: n = z$,
            onPlay: o,
            startTime: i
        } = this.options;
        this.driver || (this.driver = n(c => this.tick(c))), o && o();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var n;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (n = this.currentTime) !== null && n !== void 0 ? n : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: n
        } = this.options;
        n && n()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0, this.tick(n, !0)
    }
}
const H$ = new Set(["opacity", "clipPath", "filter", "transform"]);

function W$(e, n, o, {
    delay: i = 0,
    duration: a = 300,
    repeat: c = 0,
    repeatType: u = "loop",
    ease: d = "easeInOut",
    times: p
} = {}) {
    const h = {
        [n]: o
    };
    p && (h.offset = p);
    const g = L1(d, a);
    return Array.isArray(g) && (h.easing = g), e.animate(h, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: c + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const K$ = af(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Wa = 10,
    G$ = 2e4;

function Y$(e) {
    return lf(e.type) || e.type === "spring" || !M1(e.ease)
}

function X$(e, n) {
    const o = new yf({ ...n,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: e[0]
    };
    const a = [];
    let c = 0;
    for (; !i.done && c < G$;) i = o.sample(c), a.push(i.value), c += Wa;
    return {
        times: void 0,
        keyframes: a,
        duration: c - Wa,
        ease: "linear"
    }
}
const sx = {
    anticipate: O1,
    backInOut: N1,
    circInOut: I1
};

function Q$(e) {
    return e in sx
}
class Wg extends J1 {
    constructor(n) {
        super(n);
        const {
            name: o,
            motionValue: i,
            element: a,
            keyframes: c
        } = this.options;
        this.resolver = new Z1(c, (u, d) => this.onKeyframesResolved(u, d), o, i, a), this.resolver.scheduleResolve()
    }
    initPlayback(n, o) {
        var i;
        let {
            duration: a = 300,
            times: c,
            ease: u,
            type: d,
            motionValue: p,
            name: h,
            startTime: g
        } = this.options;
        if (!(!((i = p.owner) === null || i === void 0) && i.current)) return !1;
        if (typeof u == "string" && Ba() && Q$(u) && (u = sx[u]), Y$(this.options)) {
            const {
                onComplete: v,
                onUpdate: b,
                motionValue: P,
                element: C,
                ...L
            } = this.options, $ = X$(n, L);
            n = $.keyframes, n.length === 1 && (n[1] = n[0]), a = $.duration, c = $.times, u = $.ease, d = "keyframes"
        }
        const y = W$(p.owner.current, h, n, { ...this.options,
            duration: a,
            times: c,
            ease: u
        });
        return y.startTime = g ? ? this.calcStartTime(), this.pendingTimeline ? (Ag(y, this.pendingTimeline), this.pendingTimeline = void 0) : y.onfinish = () => {
            const {
                onComplete: v
            } = this.options;
            p.set(hl(n, this.options, o)), v && v(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: y,
            duration: a,
            times: c,
            type: d,
            ease: u,
            keyframes: n
        }
    }
    get duration() {
        const {
            resolved: n
        } = this;
        if (!n) return 0;
        const {
            duration: o
        } = n;
        return $n(o)
    }
    get time() {
        const {
            resolved: n
        } = this;
        if (!n) return 0;
        const {
            animation: o
        } = n;
        return $n(o.currentTime || 0)
    }
    set time(n) {
        const {
            resolved: o
        } = this;
        if (!o) return;
        const {
            animation: i
        } = o;
        i.currentTime = Cn(n)
    }
    get speed() {
        const {
            resolved: n
        } = this;
        if (!n) return 1;
        const {
            animation: o
        } = n;
        return o.playbackRate
    }
    set speed(n) {
        const {
            resolved: o
        } = this;
        if (!o) return;
        const {
            animation: i
        } = o;
        i.playbackRate = n
    }
    get state() {
        const {
            resolved: n
        } = this;
        if (!n) return "idle";
        const {
            animation: o
        } = n;
        return o.playState
    }
    get startTime() {
        const {
            resolved: n
        } = this;
        if (!n) return null;
        const {
            animation: o
        } = n;
        return o.startTime
    }
    attachTimeline(n) {
        if (!this._resolved) this.pendingTimeline = n;
        else {
            const {
                resolved: o
            } = this;
            if (!o) return Ct;
            const {
                animation: i
            } = o;
            Ag(i, n)
        }
        return Ct
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: o
        } = n;
        o.playState === "finished" && this.updateFinishedPromise(), o.play()
    }
    pause() {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: o
        } = n;
        o.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: o,
            keyframes: i,
            duration: a,
            type: c,
            ease: u,
            times: d
        } = n;
        if (o.playState === "idle" || o.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: h,
                onUpdate: g,
                onComplete: y,
                element: v,
                ...b
            } = this.options, P = new yf({ ...b,
                keyframes: i,
                duration: a,
                type: c,
                ease: u,
                times: d,
                isGenerator: !0
            }), C = Cn(this.time);
            h.setWithVelocity(P.sample(C - Wa).value, P.sample(C).value, Wa)
        }
        const {
            onStop: p
        } = this.options;
        p && p(), this.cancel()
    }
    complete() {
        const {
            resolved: n
        } = this;
        n && n.animation.finish()
    }
    cancel() {
        const {
            resolved: n
        } = this;
        n && n.animation.cancel()
    }
    static supports(n) {
        const {
            motionValue: o,
            name: i,
            repeatDelay: a,
            repeatType: c,
            damping: u,
            type: d
        } = n;
        return K$() && i && H$.has(i) && o && o.owner && o.owner.current instanceof HTMLElement && !o.owner.getProps().onUpdate && !a && c !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const q$ = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Z$ = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    J$ = {
        type: "keyframes",
        duration: .8
    },
    ek = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    tk = (e, {
        keyframes: n
    }) => n.length > 2 ? J$ : Fr.has(e) ? e.startsWith("scale") ? Z$(n[1]) : q$ : ek;

function nk({
    when: e,
    delay: n,
    delayChildren: o,
    staggerChildren: i,
    staggerDirection: a,
    repeat: c,
    repeatType: u,
    repeatDelay: d,
    from: p,
    elapsed: h,
    ...g
}) {
    return !!Object.keys(g).length
}
const vf = (e, n, o, i = {}, a, c) => u => {
    const d = nf(i, e) || {},
        p = d.delay || i.delay || 0;
    let {
        elapsed: h = 0
    } = i;
    h = h - Cn(p);
    let g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: n.getVelocity(),
        ...d,
        delay: -h,
        onUpdate: v => {
            n.set(v), d.onUpdate && d.onUpdate(v)
        },
        onComplete: () => {
            u(), d.onComplete && d.onComplete()
        },
        name: e,
        motionValue: n,
        element: c ? void 0 : a
    };
    nk(d) || (g = { ...g,
        ...tk(e, g)
    }), g.duration && (g.duration = Cn(g.duration)), g.repeatDelay && (g.repeatDelay = Cn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !c && n.get() !== void 0) {
        const v = hl(g.keyframes, d);
        if (v !== void 0) return Oe.update(() => {
            g.onUpdate(v), g.onComplete()
        }), new DC([])
    }
    return !c && Wg.supports(g) ? new Wg(g) : new yf(g)
};

function rk({
    protectedKeys: e,
    needsAnimating: n
}, o) {
    const i = e.hasOwnProperty(o) && n[o] !== !0;
    return n[o] = !1, i
}

function ax(e, n, {
    delay: o = 0,
    transitionOverride: i,
    type: a
} = {}) {
    var c;
    let {
        transition: u = e.getDefaultTransition(),
        transitionEnd: d,
        ...p
    } = n;
    i && (u = i);
    const h = [],
        g = a && e.animationState && e.animationState.getState()[a];
    for (const y in p) {
        const v = e.getValue(y, (c = e.latestValues[y]) !== null && c !== void 0 ? c : null),
            b = p[y];
        if (b === void 0 || g && rk(g, y)) continue;
        const P = {
            delay: o,
            ...nf(u || {}, y)
        };
        let C = !1;
        if (window.MotionHandoffAnimation) {
            const $ = $1(e);
            if ($) {
                const _ = window.MotionHandoffAnimation($, y, Oe);
                _ !== null && (P.startTime = _, C = !0)
            }
        }
        nd(e, y), v.start(vf(y, v, b, e.shouldReduceMotion && Fr.has(y) ? {
            type: !1
        } : P, e, C));
        const L = v.animation;
        L && h.push(L)
    }
    return d && Promise.all(h).then(() => {
        Oe.update(() => {
            d && LC(e, d)
        })
    }), h
}

function dd(e, n, o = {}) {
    var i;
    const a = pl(e, n, o.type === "exit" ? (i = e.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: c = e.getDefaultTransition() || {}
    } = a || {};
    o.transitionOverride && (c = o.transitionOverride);
    const u = a ? () => Promise.all(ax(e, a, o)) : () => Promise.resolve(),
        d = e.variantChildren && e.variantChildren.size ? (h = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: y,
                staggerDirection: v
            } = c;
            return ok(e, n, g + h, y, v, o)
        } : () => Promise.resolve(),
        {
            when: p
        } = c;
    if (p) {
        const [h, g] = p === "beforeChildren" ? [u, d] : [d, u];
        return h().then(() => g())
    } else return Promise.all([u(), d(o.delay)])
}

function ok(e, n, o = 0, i = 0, a = 1, c) {
    const u = [],
        d = (e.variantChildren.size - 1) * i,
        p = a === 1 ? (h = 0) => h * i : (h = 0) => d - h * i;
    return Array.from(e.variantChildren).sort(ik).forEach((h, g) => {
        h.notify("AnimationStart", n), u.push(dd(h, n, { ...c,
            delay: o + p(g)
        }).then(() => h.notify("AnimationComplete", n)))
    }), Promise.all(u)
}

function ik(e, n) {
    return e.sortNodePosition(n)
}

function sk(e, n, o = {}) {
    e.notify("AnimationStart", n);
    let i;
    if (Array.isArray(n)) {
        const a = n.map(c => dd(e, c, o));
        i = Promise.all(a)
    } else if (typeof n == "string") i = dd(e, n, o);
    else {
        const a = typeof n == "function" ? pl(e, n, o.custom) : n;
        i = Promise.all(ax(e, a, o))
    }
    return i.then(() => {
        e.notify("AnimationComplete", n)
    })
}
const ak = Hd.length;

function lx(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const o = e.parent ? lx(e.parent) || {} : {};
        return e.props.initial !== void 0 && (o.initial = e.props.initial), o
    }
    const n = {};
    for (let o = 0; o < ak; o++) {
        const i = Hd[o],
            a = e.props[i];
        (Vi(a) || a === !1) && (n[i] = a)
    }
    return n
}
const lk = [...Ud].reverse(),
    uk = Ud.length;

function ck(e) {
    return n => Promise.all(n.map(({
        animation: o,
        options: i
    }) => sk(e, o, i)))
}

function dk(e) {
    let n = ck(e),
        o = Kg(),
        i = !0;
    const a = p => (h, g) => {
        var y;
        const v = pl(e, g, p === "exit" ? (y = e.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (v) {
            const {
                transition: b,
                transitionEnd: P,
                ...C
            } = v;
            h = { ...h,
                ...C,
                ...P
            }
        }
        return h
    };

    function c(p) {
        n = p(e)
    }

    function u(p) {
        const {
            props: h
        } = e, g = lx(e.parent) || {}, y = [], v = new Set;
        let b = {},
            P = 1 / 0;
        for (let L = 0; L < uk; L++) {
            const $ = lk[L],
                _ = o[$],
                D = h[$] !== void 0 ? h[$] : g[$],
                F = Vi(D),
                U = $ === p ? _.isActive : null;
            U === !1 && (P = L);
            let Y = D === g[$] && D !== h[$] && F;
            if (Y && i && e.manuallyAnimateOnMount && (Y = !1), _.protectedKeys = { ...b
                }, !_.isActive && U === null || !D && !_.prevProp || dl(D) || typeof D == "boolean") continue;
            const oe = fk(_.prevProp, D);
            let E = oe || $ === p && _.isActive && !Y && F || L > P && F,
                J = !1;
            const se = Array.isArray(D) ? D : [D];
            let H = se.reduce(a($), {});
            U === !1 && (H = {});
            const {
                prevResolvedValues: B = {}
            } = _, O = { ...B,
                ...H
            }, W = ee => {
                E = !0, v.has(ee) && (J = !0, v.delete(ee)), _.needsAnimating[ee] = !0;
                const I = e.getValue(ee);
                I && (I.liveStyle = !1)
            };
            for (const ee in O) {
                const I = H[ee],
                    Q = B[ee];
                if (b.hasOwnProperty(ee)) continue;
                let K = !1;
                td(I) && td(Q) ? K = !T1(I, Q) : K = I !== Q, K ? I != null ? W(ee) : v.add(ee) : I !== void 0 && v.has(ee) ? W(ee) : _.protectedKeys[ee] = !0
            }
            _.prevProp = D, _.prevResolvedValues = H, _.isActive && (b = { ...b,
                ...H
            }), i && e.blockInitialAnimation && (E = !1), E && (!(Y && oe) || J) && y.push(...se.map(ee => ({
                animation: ee,
                options: {
                    type: $
                }
            })))
        }
        if (v.size) {
            const L = {};
            v.forEach($ => {
                const _ = e.getBaseTarget($),
                    D = e.getValue($);
                D && (D.liveStyle = !0), L[$] = _ ? ? null
            }), y.push({
                animation: L
            })
        }
        let C = !!y.length;
        return i && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (C = !1), i = !1, C ? n(y) : Promise.resolve()
    }

    function d(p, h) {
        var g;
        if (o[p].isActive === h) return Promise.resolve();
        (g = e.variantChildren) === null || g === void 0 || g.forEach(v => {
            var b;
            return (b = v.animationState) === null || b === void 0 ? void 0 : b.setActive(p, h)
        }), o[p].isActive = h;
        const y = u(p);
        for (const v in o) o[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: c,
        getState: () => o,
        reset: () => {
            o = Kg(), i = !0
        }
    }
}

function fk(e, n) {
    return typeof n == "string" ? n !== e : Array.isArray(n) ? !T1(n, e) : !1
}

function $r(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Kg() {
    return {
        animate: $r(!0),
        whileInView: $r(),
        whileHover: $r(),
        whileTap: $r(),
        whileDrag: $r(),
        whileFocus: $r(),
        exit: $r()
    }
}
class ar {
    constructor(n) {
        this.isMounted = !1, this.node = n
    }
    update() {}
}
class pk extends ar {
    constructor(n) {
        super(n), n.animationState || (n.animationState = dk(n))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: n
        } = this.node.getProps();
        dl(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: n
        } = this.node.getProps(), {
            animate: o
        } = this.node.prevProps || {};
        n !== o && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var n;
        this.node.animationState.reset(), (n = this.unmountControls) === null || n === void 0 || n.call(this)
    }
}
let hk = 0;
class mk extends ar {
    constructor() {
        super(...arguments), this.id = hk++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: n,
            onExitComplete: o
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === i) return;
        const a = this.node.animationState.setActive("exit", !n);
        o && !n && a.then(() => o(this.id))
    }
    mount() {
        const {
            register: n
        } = this.node.presenceContext || {};
        n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const gk = {
        animation: {
            Feature: pk
        },
        exit: {
            Feature: mk
        }
    },
    Zt = {
        x: !1,
        y: !1
    };

function ux() {
    return Zt.x || Zt.y
}

function yk(e) {
    return e === "x" || e === "y" ? Zt[e] ? null : (Zt[e] = !0, () => {
        Zt[e] = !1
    }) : Zt.x || Zt.y ? null : (Zt.x = Zt.y = !0, () => {
        Zt.x = Zt.y = !1
    })
}
const xf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Bi(e, n, o, i = {
    passive: !0
}) {
    return e.addEventListener(n, o, i), () => e.removeEventListener(n, o)
}

function Qi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const vk = e => n => xf(n) && e(n, Qi(n));

function _i(e, n, o, i) {
    return Bi(e, n, vk(o), i)
}
const Gg = (e, n) => Math.abs(e - n);

function xk(e, n) {
    const o = Gg(e.x, n.x),
        i = Gg(e.y, n.y);
    return Math.sqrt(o ** 2 + i ** 2)
}
class cx {
    constructor(n, o, {
        transformPagePoint: i,
        contextWindow: a,
        dragSnapToOrigin: c = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = Ec(this.lastMoveEventInfo, this.history),
                    v = this.startEvent !== null,
                    b = xk(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!v && !b) return;
                const {
                    point: P
                } = y, {
                    timestamp: C
                } = st;
                this.history.push({ ...P,
                    timestamp: C
                });
                const {
                    onStart: L,
                    onMove: $
                } = this.handlers;
                v || (L && L(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), $ && $(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, v) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = Pc(v, this.transformPagePoint), Oe.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, v) => {
                this.end();
                const {
                    onEnd: b,
                    onSessionEnd: P,
                    resumeAnimation: C
                } = this.handlers;
                if (this.dragSnapToOrigin && C && C(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const L = Ec(y.type === "pointercancel" ? this.lastMoveEventInfo : Pc(v, this.transformPagePoint), this.history);
                this.startEvent && b && b(y, L), P && P(y, L)
            }, !xf(n)) return;
        this.dragSnapToOrigin = c, this.handlers = o, this.transformPagePoint = i, this.contextWindow = a || window;
        const u = Qi(n),
            d = Pc(u, this.transformPagePoint),
            {
                point: p
            } = d,
            {
                timestamp: h
            } = st;
        this.history = [{ ...p,
            timestamp: h
        }];
        const {
            onSessionStart: g
        } = o;
        g && g(n, Ec(d, this.history)), this.removeListeners = Xi(_i(this.contextWindow, "pointermove", this.handlePointerMove), _i(this.contextWindow, "pointerup", this.handlePointerUp), _i(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(), rr(this.updatePoint)
    }
}

function Pc(e, n) {
    return n ? {
        point: n(e.point)
    } : e
}

function Yg(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}

function Ec({
    point: e
}, n) {
    return {
        point: e,
        delta: Yg(e, dx(n)),
        offset: Yg(e, wk(n)),
        velocity: bk(n, .1)
    }
}

function wk(e) {
    return e[0]
}

function dx(e) {
    return e[e.length - 1]
}

function bk(e, n) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let o = e.length - 1,
        i = null;
    const a = dx(e);
    for (; o >= 0 && (i = e[o], !(a.timestamp - i.timestamp > Cn(n)));) o--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const c = $n(a.timestamp - i.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const u = {
        x: (a.x - i.x) / c,
        y: (a.y - i.y) / c
    };
    return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u
}
const fx = 1e-4,
    Sk = 1 - fx,
    Pk = 1 + fx,
    px = .01,
    Ek = 0 - px,
    Tk = 0 + px;

function $t(e) {
    return e.max - e.min
}

function Ck(e, n, o) {
    return Math.abs(e - n) <= o
}

function Xg(e, n, o, i = .5) {
    e.origin = i, e.originPoint = Fe(n.min, n.max, e.origin), e.scale = $t(o) / $t(n), e.translate = Fe(o.min, o.max, e.origin) - e.originPoint, (e.scale >= Sk && e.scale <= Pk || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ek && e.translate <= Tk || isNaN(e.translate)) && (e.translate = 0)
}

function Di(e, n, o, i) {
    Xg(e.x, n.x, o.x, i ? i.originX : void 0), Xg(e.y, n.y, o.y, i ? i.originY : void 0)
}

function Qg(e, n, o) {
    e.min = o.min + n.min, e.max = e.min + $t(n)
}

function $k(e, n, o) {
    Qg(e.x, n.x, o.x), Qg(e.y, n.y, o.y)
}

function qg(e, n, o) {
    e.min = n.min - o.min, e.max = e.min + $t(n)
}

function Ni(e, n, o) {
    qg(e.x, n.x, o.x), qg(e.y, n.y, o.y)
}

function kk(e, {
    min: n,
    max: o
}, i) {
    return n !== void 0 && e < n ? e = i ? Fe(n, e, i.min) : Math.max(e, n) : o !== void 0 && e > o && (e = i ? Fe(o, e, i.max) : Math.min(e, o)), e
}

function Zg(e, n, o) {
    return {
        min: n !== void 0 ? e.min + n : void 0,
        max: o !== void 0 ? e.max + o - (e.max - e.min) : void 0
    }
}

function Mk(e, {
    top: n,
    left: o,
    bottom: i,
    right: a
}) {
    return {
        x: Zg(e.x, o, a),
        y: Zg(e.y, n, i)
    }
}

function Jg(e, n) {
    let o = n.min - e.min,
        i = n.max - e.max;
    return n.max - n.min < e.max - e.min && ([o, i] = [i, o]), {
        min: o,
        max: i
    }
}

function Lk(e, n) {
    return {
        x: Jg(e.x, n.x),
        y: Jg(e.y, n.y)
    }
}

function Ak(e, n) {
    let o = .5;
    const i = $t(e),
        a = $t(n);
    return a > i ? o = $o(n.min, n.max - i, e.min) : i > a && (o = $o(e.min, e.max - a, n.min)), kn(0, 1, o)
}

function Rk(e, n) {
    const o = {};
    return n.min !== void 0 && (o.min = n.min - e.min), n.max !== void 0 && (o.max = n.max - e.min), o
}
const fd = .35;

function _k(e = fd) {
    return e === !1 ? e = 0 : e === !0 && (e = fd), {
        x: ey(e, "left", "right"),
        y: ey(e, "top", "bottom")
    }
}

function ey(e, n, o) {
    return {
        min: ty(e, n),
        max: ty(e, o)
    }
}

function ty(e, n) {
    return typeof e == "number" ? e : e[n] || 0
}
const ny = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    bo = () => ({
        x: ny(),
        y: ny()
    }),
    ry = () => ({
        min: 0,
        max: 0
    }),
    Ge = () => ({
        x: ry(),
        y: ry()
    });

function It(e) {
    return [e("x"), e("y")]
}

function hx({
    top: e,
    left: n,
    right: o,
    bottom: i
}) {
    return {
        x: {
            min: n,
            max: o
        },
        y: {
            min: e,
            max: i
        }
    }
}

function Dk({
    x: e,
    y: n
}) {
    return {
        top: n.min,
        right: e.max,
        bottom: n.max,
        left: e.min
    }
}

function Nk(e, n) {
    if (!n) return e;
    const o = n({
            x: e.left,
            y: e.top
        }),
        i = n({
            x: e.right,
            y: e.bottom
        });
    return {
        top: o.y,
        left: o.x,
        bottom: i.y,
        right: i.x
    }
}

function Tc(e) {
    return e === void 0 || e === 1
}

function pd({
    scale: e,
    scaleX: n,
    scaleY: o
}) {
    return !Tc(e) || !Tc(n) || !Tc(o)
}

function kr(e) {
    return pd(e) || mx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function mx(e) {
    return oy(e.x) || oy(e.y)
}

function oy(e) {
    return e && e !== "0%"
}

function Ka(e, n, o) {
    const i = e - o,
        a = n * i;
    return o + a
}

function iy(e, n, o, i, a) {
    return a !== void 0 && (e = Ka(e, a, i)), Ka(e, o, i) + n
}

function hd(e, n = 0, o = 1, i, a) {
    e.min = iy(e.min, n, o, i, a), e.max = iy(e.max, n, o, i, a)
}

function gx(e, {
    x: n,
    y: o
}) {
    hd(e.x, n.translate, n.scale, n.originPoint), hd(e.y, o.translate, o.scale, o.originPoint)
}
const sy = .999999999999,
    ay = 1.0000000000001;

function Ok(e, n, o, i = !1) {
    const a = o.length;
    if (!a) return;
    n.x = n.y = 1;
    let c, u;
    for (let d = 0; d < a; d++) {
        c = o[d], u = c.projectionDelta;
        const {
            visualElement: p
        } = c.options;
        p && p.props.style && p.props.style.display === "contents" || (i && c.options.layoutScroll && c.scroll && c !== c.root && Po(e, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
        }), u && (n.x *= u.x.scale, n.y *= u.y.scale, gx(e, u)), i && kr(c.latestValues) && Po(e, c.latestValues))
    }
    n.x < ay && n.x > sy && (n.x = 1), n.y < ay && n.y > sy && (n.y = 1)
}

function So(e, n) {
    e.min = e.min + n, e.max = e.max + n
}

function ly(e, n, o, i, a = .5) {
    const c = Fe(e.min, e.max, a);
    hd(e, n, o, c, i)
}

function Po(e, n) {
    ly(e.x, n.x, n.scaleX, n.scale, n.originX), ly(e.y, n.y, n.scaleY, n.scale, n.originY)
}

function yx(e, n) {
    return hx(Nk(e.getBoundingClientRect(), n))
}

function jk(e, n, o) {
    const i = yx(e, o),
        {
            scroll: a
        } = n;
    return a && (So(i.x, a.offset.x), So(i.y, a.offset.y)), i
}
const vx = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    Ik = new WeakMap;
class Vk {
    constructor(n) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ge(), this.visualElement = n
    }
    start(n, {
        snapToCursor: o = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), o && this.snapToCursor(Qi(g).point)
            },
            c = (g, y) => {
                const {
                    drag: v,
                    dragPropagation: b,
                    onDragStart: P
                } = this.getProps();
                if (v && !b && (this.openDragLock && this.openDragLock(), this.openDragLock = yk(v), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), It(L => {
                    let $ = this.getAxisMotionValue(L).get() || 0;
                    if (un.test($)) {
                        const {
                            projection: _
                        } = this.visualElement;
                        if (_ && _.layout) {
                            const D = _.layout.layoutBox[L];
                            D && ($ = $t(D) * (parseFloat($) / 100))
                        }
                    }
                    this.originPoint[L] = $
                }), P && Oe.postRender(() => P(g, y)), nd(this.visualElement, "transform");
                const {
                    animationState: C
                } = this.visualElement;
                C && C.setActive("whileDrag", !0)
            },
            u = (g, y) => {
                const {
                    dragPropagation: v,
                    dragDirectionLock: b,
                    onDirectionLock: P,
                    onDrag: C
                } = this.getProps();
                if (!v && !this.openDragLock) return;
                const {
                    offset: L
                } = y;
                if (b && this.currentDirection === null) {
                    this.currentDirection = Fk(L), this.currentDirection !== null && P && P(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, L), this.updateAxis("y", y.point, L), this.visualElement.render(), C && C(g, y)
            },
            d = (g, y) => this.stop(g, y),
            p = () => It(g => {
                var y;
                return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: h
            } = this.getProps();
        this.panSession = new cx(n, {
            onSessionStart: a,
            onStart: c,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            contextWindow: vx(this.visualElement)
        })
    }
    stop(n, o) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: a
        } = o;
        this.startAnimation(a);
        const {
            onDragEnd: c
        } = this.getProps();
        c && Oe.postRender(() => c(n, o))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: n,
            animationState: o
        } = this.visualElement;
        n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1)
    }
    updateAxis(n, o, i) {
        const {
            drag: a
        } = this.getProps();
        if (!i || !Ea(n, a, this.currentDirection)) return;
        const c = this.getAxisMotionValue(n);
        let u = this.originPoint[n] + i[n];
        this.constraints && this.constraints[n] && (u = kk(u, this.constraints[n], this.elastic[n])), c.set(u)
    }
    resolveConstraints() {
        var n;
        const {
            dragConstraints: o,
            dragElastic: i
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout, c = this.constraints;
        o && xo(o) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : o && a ? this.constraints = Mk(a.layoutBox, o) : this.constraints = !1, this.elastic = _k(i), c !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && It(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = Rk(a.layoutBox[u], this.constraints[u]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: n,
            onMeasureDragConstraints: o
        } = this.getProps();
        if (!n || !xo(n)) return !1;
        const i = n.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const c = jk(i, a.root, this.visualElement.getTransformPagePoint());
        let u = Lk(a.layout.layoutBox, c);
        if (o) {
            const d = o(Dk(u));
            this.hasMutatedConstraints = !!d, d && (u = hx(d))
        }
        return u
    }
    startAnimation(n) {
        const {
            drag: o,
            dragMomentum: i,
            dragElastic: a,
            dragTransition: c,
            dragSnapToOrigin: u,
            onDragTransitionEnd: d
        } = this.getProps(), p = this.constraints || {}, h = It(g => {
            if (!Ea(g, o, this.currentDirection)) return;
            let y = p[g] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const v = a ? 200 : 1e6,
                b = a ? 40 : 1e7,
                P = {
                    type: "inertia",
                    velocity: i ? n[g] : 0,
                    bounceStiffness: v,
                    bounceDamping: b,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...y
                };
            return this.startAxisValueAnimation(g, P)
        });
        return Promise.all(h).then(d)
    }
    startAxisValueAnimation(n, o) {
        const i = this.getAxisMotionValue(n);
        return nd(this.visualElement, n), i.start(vf(n, i, 0, o, this.visualElement, !1))
    }
    stopAnimation() {
        It(n => this.getAxisMotionValue(n).stop())
    }
    pauseAnimation() {
        It(n => {
            var o;
            return (o = this.getAxisMotionValue(n).animation) === null || o === void 0 ? void 0 : o.pause()
        })
    }
    getAnimationState(n) {
        var o;
        return (o = this.getAxisMotionValue(n).animation) === null || o === void 0 ? void 0 : o.state
    }
    getAxisMotionValue(n) {
        const o = `_drag${n.toUpperCase()}`,
            i = this.visualElement.getProps(),
            a = i[o];
        return a || this.visualElement.getValue(n, (i.initial ? i.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        It(o => {
            const {
                drag: i
            } = this.getProps();
            if (!Ea(o, i, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, c = this.getAxisMotionValue(o);
            if (a && a.layout) {
                const {
                    min: u,
                    max: d
                } = a.layout.layoutBox[o];
                c.set(n[o] - Fe(u, d, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: n,
            dragConstraints: o
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!xo(o) || !i || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        It(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const p = d.get();
                a[u] = Ak({
                    min: p,
                    max: p
                }, this.constraints[u])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), It(u => {
            if (!Ea(u, n, null)) return;
            const d = this.getAxisMotionValue(u),
                {
                    min: p,
                    max: h
                } = this.constraints[u];
            d.set(Fe(p, h, a[u]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Ik.set(this.visualElement, this);
        const n = this.visualElement.current,
            o = _i(n, "pointerdown", p => {
                const {
                    drag: h,
                    dragListener: g = !0
                } = this.getProps();
                h && g && this.start(p)
            }),
            i = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                xo(p) && p.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            c = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Oe.read(i);
        const u = Bi(window, "resize", () => this.scalePositionWithinConstraints()),
            d = a.addEventListener("didUpdate", ({
                delta: p,
                hasLayoutChanged: h
            }) => {
                this.isDragging && h && (It(g => {
                    const y = this.getAxisMotionValue(g);
                    y && (this.originPoint[g] += p[g].translate, y.set(y.get() + p[g].translate))
                }), this.visualElement.render())
            });
        return () => {
            u(), o(), c(), d && d()
        }
    }
    getProps() {
        const n = this.visualElement.getProps(),
            {
                drag: o = !1,
                dragDirectionLock: i = !1,
                dragPropagation: a = !1,
                dragConstraints: c = !1,
                dragElastic: u = fd,
                dragMomentum: d = !0
            } = n;
        return { ...n,
            drag: o,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: c,
            dragElastic: u,
            dragMomentum: d
        }
    }
}

function Ea(e, n, o) {
    return (n === !0 || n === e) && (o === null || o === e)
}

function Fk(e, n = 10) {
    let o = null;
    return Math.abs(e.y) > n ? o = "y" : Math.abs(e.x) > n && (o = "x"), o
}
class zk extends ar {
    constructor(n) {
        super(n), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new Vk(n)
    }
    mount() {
        const {
            dragControls: n
        } = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const uy = e => (n, o) => {
    e && Oe.postRender(() => e(n, o))
};
class Bk extends ar {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ct
    }
    onPointerDown(n) {
        this.session = new cx(n, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: vx(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: n,
            onPanStart: o,
            onPan: i,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: uy(n),
            onStart: uy(o),
            onMove: i,
            onEnd: (c, u) => {
                delete this.session, a && Oe.postRender(() => a(c, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = _i(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function Uk() {
    const e = S.useContext(al);
    if (e === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: o,
        register: i
    } = e, a = S.useId();
    S.useEffect(() => i(a), []);
    const c = S.useCallback(() => o && o(a), [a, o]);
    return !n && o ? [!1, c] : [!0]
}
const ka = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function cy(e, n) {
    return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const Ti = {
        correct: (e, n) => {
            if (!n.target) return e;
            if (typeof e == "string")
                if (ve.test(e)) e = parseFloat(e);
                else return e;
            const o = cy(e, n.target.x),
                i = cy(e, n.target.y);
            return `${o}% ${i}%`
        }
    },
    Hk = {
        correct: (e, {
            treeScale: n,
            projectionDelta: o
        }) => {
            const i = e,
                a = or.parse(e);
            if (a.length > 5) return i;
            const c = or.createTransformer(e),
                u = typeof a[0] != "number" ? 1 : 0,
                d = o.x.scale * n.x,
                p = o.y.scale * n.y;
            a[0 + u] /= d, a[1 + u] /= p;
            const h = Fe(d, p, .5);
            return typeof a[2 + u] == "number" && (a[2 + u] /= h), typeof a[3 + u] == "number" && (a[3 + u] /= h), c(a)
        }
    };
class Wk extends S.Component {
    componentDidMount() {
        const {
            visualElement: n,
            layoutGroup: o,
            switchLayoutGroup: i,
            layoutId: a
        } = this.props, {
            projection: c
        } = n;
        eC(Kk), c && (o.group && o.group.add(c), i && i.register && a && i.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({ ...c.options,
            onExitComplete: () => this.safeToRemove()
        })), ka.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {
            layoutDependency: o,
            visualElement: i,
            drag: a,
            isPresent: c
        } = this.props, u = i.projection;
        return u && (u.isPresent = c, a || n.layoutDependency !== o || o === void 0 ? u.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? u.promote() : u.relegate() || Oe.postRender(() => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: n
        } = this.props.visualElement;
        n && (n.root.didUpdate(), Kd.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: n,
            layoutGroup: o,
            switchLayoutGroup: i
        } = this.props, {
            projection: a
        } = n;
        a && (a.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(a), i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: n
        } = this.props;
        n && n()
    }
    render() {
        return null
    }
}

function xx(e) {
    const [n, o] = Uk(), i = S.useContext(zd);
    return R.jsx(Wk, { ...e,
        layoutGroup: i,
        switchLayoutGroup: S.useContext(f1),
        isPresent: n,
        safeToRemove: o
    })
}
const Kk = {
    borderRadius: { ...Ti,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ti,
    borderTopRightRadius: Ti,
    borderBottomLeftRadius: Ti,
    borderBottomRightRadius: Ti,
    boxShadow: Hk
};

function Gk(e, n, o) {
    const i = ft(e) ? e : Co(e);
    return i.start(vf("", i, n, o)), i.animation
}

function Yk(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const Xk = (e, n) => e.depth - n.depth;
class Qk {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(n) {
        rf(this.children, n), this.isDirty = !0
    }
    remove(n) { of (this.children, n), this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(Xk), this.isDirty = !1, this.children.forEach(n)
    }
}

function qk(e, n) {
    const o = cn.now(),
        i = ({
            timestamp: a
        }) => {
            const c = a - o;
            c >= n && (rr(i), e(c - n))
        };
    return Oe.read(i, !0), () => rr(i)
}
const wx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Zk = wx.length,
    dy = e => typeof e == "string" ? parseFloat(e) : e,
    fy = e => typeof e == "number" || ve.test(e);

function Jk(e, n, o, i, a, c) {
    a ? (e.opacity = Fe(0, o.opacity !== void 0 ? o.opacity : 1, e3(i)), e.opacityExit = Fe(n.opacity !== void 0 ? n.opacity : 1, 0, t3(i))) : c && (e.opacity = Fe(n.opacity !== void 0 ? n.opacity : 1, o.opacity !== void 0 ? o.opacity : 1, i));
    for (let u = 0; u < Zk; u++) {
        const d = `border${wx[u]}Radius`;
        let p = py(n, d),
            h = py(o, d);
        if (p === void 0 && h === void 0) continue;
        p || (p = 0), h || (h = 0), p === 0 || h === 0 || fy(p) === fy(h) ? (e[d] = Math.max(Fe(dy(p), dy(h), i), 0), (un.test(h) || un.test(p)) && (e[d] += "%")) : e[d] = h
    }(n.rotate || o.rotate) && (e.rotate = Fe(n.rotate || 0, o.rotate || 0, i))
}

function py(e, n) {
    return e[n] !== void 0 ? e[n] : e.borderRadius
}
const e3 = bx(0, .5, j1),
    t3 = bx(.5, .95, Ct);

function bx(e, n, o) {
    return i => i < e ? 0 : i > n ? 1 : o($o(e, n, i))
}

function hy(e, n) {
    e.min = n.min, e.max = n.max
}

function jt(e, n) {
    hy(e.x, n.x), hy(e.y, n.y)
}

function my(e, n) {
    e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin
}

function gy(e, n, o, i, a) {
    return e -= n, e = Ka(e, 1 / o, i), a !== void 0 && (e = Ka(e, 1 / a, i)), e
}

function n3(e, n = 0, o = 1, i = .5, a, c = e, u = e) {
    if (un.test(n) && (n = parseFloat(n), n = Fe(u.min, u.max, n / 100) - u.min), typeof n != "number") return;
    let d = Fe(c.min, c.max, i);
    e === c && (d -= n), e.min = gy(e.min, n, o, d, a), e.max = gy(e.max, n, o, d, a)
}

function yy(e, n, [o, i, a], c, u) {
    n3(e, n[o], n[i], n[a], n.scale, c, u)
}
const r3 = ["x", "scaleX", "originX"],
    o3 = ["y", "scaleY", "originY"];

function vy(e, n, o, i) {
    yy(e.x, n, r3, o ? o.x : void 0, i ? i.x : void 0), yy(e.y, n, o3, o ? o.y : void 0, i ? i.y : void 0)
}

function xy(e) {
    return e.translate === 0 && e.scale === 1
}

function Sx(e) {
    return xy(e.x) && xy(e.y)
}

function wy(e, n) {
    return e.min === n.min && e.max === n.max
}

function i3(e, n) {
    return wy(e.x, n.x) && wy(e.y, n.y)
}

function by(e, n) {
    return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}

function Px(e, n) {
    return by(e.x, n.x) && by(e.y, n.y)
}

function Sy(e) {
    return $t(e.x) / $t(e.y)
}

function Py(e, n) {
    return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}
class s3 {
    constructor() {
        this.members = []
    }
    add(n) {
        rf(this.members, n), n.scheduleRender()
    }
    remove(n) {
        if ( of (this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
            const o = this.members[this.members.length - 1];
            o && this.promote(o)
        }
    }
    relegate(n) {
        const o = this.members.findIndex(a => n === a);
        if (o === 0) return !1;
        let i;
        for (let a = o; a >= 0; a--) {
            const c = this.members[a];
            if (c.isPresent !== !1) {
                i = c;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(n, o) {
        const i = this.lead;
        if (n !== i && (this.prevLead = i, this.lead = n, n.show(), i)) {
            i.instance && i.scheduleRender(), n.scheduleRender(), n.resumeFrom = i, o && (n.resumeFrom.preserveOpacity = !0), i.snapshot && (n.snapshot = i.snapshot, n.snapshot.latestValues = i.animationValues || i.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
            const {
                crossfade: a
            } = n.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            const {
                options: o,
                resumingFrom: i
            } = n;
            o.onExitComplete && o.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(n => {
            n.instance && n.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function a3(e, n, o) {
    let i = "";
    const a = e.x.translate / n.x,
        c = e.y.translate / n.y,
        u = (o == null ? void 0 : o.z) || 0;
    if ((a || c || u) && (i = `translate3d(${a}px, ${c}px, ${u}px) `), (n.x !== 1 || n.y !== 1) && (i += `scale(${1/n.x}, ${1/n.y}) `), o) {
        const {
            transformPerspective: h,
            rotate: g,
            rotateX: y,
            rotateY: v,
            skewX: b,
            skewY: P
        } = o;
        h && (i = `perspective(${h}px) ${i}`), g && (i += `rotate(${g}deg) `), y && (i += `rotateX(${y}deg) `), v && (i += `rotateY(${v}deg) `), b && (i += `skewX(${b}deg) `), P && (i += `skewY(${P}deg) `)
    }
    const d = e.x.scale * n.x,
        p = e.y.scale * n.y;
    return (d !== 1 || p !== 1) && (i += `scale(${d}, ${p})`), i || "none"
}
const Mr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Mi = typeof window < "u" && window.MotionDebug !== void 0,
    Cc = ["", "X", "Y", "Z"],
    l3 = {
        visibility: "hidden"
    },
    Ey = 1e3;
let u3 = 0;

function $c(e, n, o, i) {
    const {
        latestValues: a
    } = n;
    a[e] && (o[e] = a[e], n.setStaticValue(e, 0), i && (i[e] = 0))
}

function Ex(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: n
    } = e.options;
    if (!n) return;
    const o = $1(n);
    if (window.MotionHasOptimisedAnimation(o, "transform")) {
        const {
            layout: a,
            layoutId: c
        } = e.options;
        window.MotionCancelOptimisedAnimation(o, "transform", Oe, !(a || c))
    }
    const {
        parent: i
    } = e;
    i && !i.hasCheckedOptimisedAppear && Ex(i)
}

function Tx({
    attachResizeListener: e,
    defaultParent: n,
    measureScroll: o,
    checkIsScrollRoot: i,
    resetTransform: a
}) {
    return class {
        constructor(u = {}, d = n == null ? void 0 : n()) {
            this.id = u3++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Mi && (Mr.totalNodes = Mr.resolvedTargetDeltas = Mr.recalculatedProjection = 0), this.nodes.forEach(f3), this.nodes.forEach(y3), this.nodes.forEach(v3), this.nodes.forEach(p3), Mi && window.MotionDebug.record(Mr)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = u, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Qk)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new sf), this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const p = this.eventHandlers.get(u);
            p && p.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Yk(u), this.instance = u;
            const {
                layoutId: p,
                layout: h,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), d && (h || p) && (this.isLayoutDirty = !0), e) {
                let y;
                const v = () => this.root.updateBlockedByResize = !1;
                e(u, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = qk(v, 250), ka.hasAnimatedSinceResize && (ka.hasAnimatedSinceResize = !1, this.nodes.forEach(Cy))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && g && (p || h) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: v,
                hasRelativeTargetChanged: b,
                layout: P
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const C = this.options.transition || g.getDefaultTransition() || P3,
                    {
                        onLayoutAnimationStart: L,
                        onLayoutAnimationComplete: $
                    } = g.getProps(),
                    _ = !this.targetLayout || !Px(this.targetLayout, P) || b,
                    D = !v && b;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || D || v && (_ || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, D);
                    const F = { ...nf(C, "layout"),
                        onPlay: L,
                        onComplete: $
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (F.delay = 0, F.type = !1), this.startAnimation(F)
                } else v || Cy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = P
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, rr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(x3), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: u
            } = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ex(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: d,
                layout: p
            } = this.options;
            if (d === void 0 && !p) return;
            const h = this.getTransformTemplate();
            this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ty);
                return
            }
            this.isUpdating || this.nodes.forEach(m3), this.isUpdating = !1, this.nodes.forEach(g3), this.nodes.forEach(c3), this.nodes.forEach(d3), this.clearAllSnapshots();
            const d = cn.now();
            st.delta = kn(0, 1e3 / 60, d - st.timestamp), st.timestamp = d, st.isProcessing = !0, xc.update.process(st), xc.preRender.process(st), xc.render.process(st), st.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Kd.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(h3), this.sharedNodes.forEach(w3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Oe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Oe.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ge(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: d
            } = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u = "measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1), d) {
                const p = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: p,
                    offset: o(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                d = this.projectionDelta && !Sx(this.projectionDelta),
                p = this.getTransformTemplate(),
                h = p ? p(this.latestValues, "") : void 0,
                g = h !== this.prevTransformTemplateValue;
            u && (d || kr(this.latestValues) || g) && (a(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(u = !0) {
            const d = this.measurePageBox();
            let p = this.removeElementScroll(d);
            return u && (p = this.removeTransform(p)), E3(p), {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: d
            } = this.options;
            if (!d) return Ge();
            const p = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(T3))) {
                const {
                    scroll: g
                } = this.root;
                g && (So(p.x, g.offset.x), So(p.y, g.offset.y))
            }
            return p
        }
        removeElementScroll(u) {
            var d;
            const p = Ge();
            if (jt(p, u), !((d = this.scroll) === null || d === void 0) && d.wasRoot) return p;
            for (let h = 0; h < this.path.length; h++) {
                const g = this.path[h],
                    {
                        scroll: y,
                        options: v
                    } = g;
                g !== this.root && y && v.layoutScroll && (y.wasRoot && jt(p, u), So(p.x, y.offset.x), So(p.y, y.offset.y))
            }
            return p
        }
        applyTransform(u, d = !1) {
            const p = Ge();
            jt(p, u);
            for (let h = 0; h < this.path.length; h++) {
                const g = this.path[h];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Po(p, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), kr(g.latestValues) && Po(p, g.latestValues)
            }
            return kr(this.latestValues) && Po(p, this.latestValues), p
        }
        removeTransform(u) {
            const d = Ge();
            jt(d, u);
            for (let p = 0; p < this.path.length; p++) {
                const h = this.path[p];
                if (!h.instance || !kr(h.latestValues)) continue;
                pd(h.latestValues) && h.updateSnapshot();
                const g = Ge(),
                    y = h.measurePageBox();
                jt(g, y), vy(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g)
            }
            return kr(this.latestValues) && vy(d, this.latestValues), d
        }
        setTargetDelta(u) {
            this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = { ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== st.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u = !1) {
            var d;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const h = !!this.resumingFrom || this !== p;
            if (!(u || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: v
            } = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = st.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const b = this.getClosestProjectingParent();
                    b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ge(), this.relativeTargetOrigin = Ge(), Ni(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ge(), this.targetWithTransforms = Ge()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), $k(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : jt(this.target, this.layout.layoutBox), gx(this.target, this.targetDelta)) : jt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const b = this.getClosestProjectingParent();
                        b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ge(), this.relativeTargetOrigin = Ge(), Ni(this.relativeTargetOrigin, this.target, b.target), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Mi && Mr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || pd(this.parent.latestValues) || mx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead(),
                p = !!this.resumingFrom || this !== d;
            let h = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (h = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === st.timestamp && (h = !1), h) return;
            const {
                layout: g,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
            jt(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x,
                b = this.treeScale.y;
            Ok(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Ge());
            const {
                target: P
            } = d;
            if (!P) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (my(this.prevProjectionDelta.x, this.projectionDelta.x), my(this.prevProjectionDelta.y, this.projectionDelta.y)), Di(this.projectionDelta, this.layoutCorrected, P, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !Py(this.projectionDelta.x, this.prevProjectionDelta.x) || !Py(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", P)), Mi && Mr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u = !0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(), u) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = bo(), this.projectionDelta = bo(), this.projectionDeltaWithTransform = bo()
        }
        setAnimationOrigin(u, d = !1) {
            const p = this.snapshot,
                h = p ? p.latestValues : {},
                g = { ...this.latestValues
                },
                y = bo();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
            const v = Ge(),
                b = p ? p.source : void 0,
                P = this.layout ? this.layout.source : void 0,
                C = b !== P,
                L = this.getStack(),
                $ = !L || L.members.length <= 1,
                _ = !!(C && !$ && this.options.crossfade === !0 && !this.path.some(S3));
            this.animationProgress = 0;
            let D;
            this.mixTargetDelta = F => {
                const U = F / 1e3;
                $y(y.x, u.x, U), $y(y.y, u.y, U), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ni(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), b3(this.relativeTarget, this.relativeTargetOrigin, v, U), D && i3(this.relativeTarget, D) && (this.isProjectionDirty = !1), D || (D = Ge()), jt(D, this.relativeTarget)), C && (this.animationValues = g, Jk(g, h, this.latestValues, U, _, $)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = U
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (rr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Oe.update(() => {
                ka.hasAnimatedSinceResize = !0, this.currentAnimation = Gk(0, Ey, { ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d), u.onUpdate && u.onUpdate(d)
                    },
                    onComplete: () => {
                        u.onComplete && u.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ey), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {
                targetWithTransforms: d,
                target: p,
                layout: h,
                latestValues: g
            } = u;
            if (!(!d || !p || !h)) {
                if (this !== u && this.layout && h && Cx(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
                    p = this.target || Ge();
                    const y = $t(this.layout.layoutBox.x);
                    p.x.min = u.target.x.min, p.x.max = p.x.min + y;
                    const v = $t(this.layout.layoutBox.y);
                    p.y.min = u.target.y.min, p.y.max = p.y.min + v
                }
                jt(d, p), Po(d, g), Di(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new s3), this.sharedNodes.get(u).add(d);
            const h = d.options.initialPromotionConfig;
            d.promote({
                transition: h ? h.transition : void 0,
                preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {
                layoutId: d
            } = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {
                layoutId: d
            } = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: u
            } = this.options;
            if (u) return this.root.sharedNodes.get(u)
        }
        promote({
            needsReset: u,
            transition: d,
            preserveFollowOpacity: p
        } = {}) {
            const h = this.getStack();
            h && h.promote(this, p), u && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: u
            } = this.options;
            if (!u) return;
            let d = !1;
            const {
                latestValues: p
            } = u;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0), !d) return;
            const h = {};
            p.z && $c("z", u, h, this.animationValues);
            for (let g = 0; g < Cc.length; g++) $c(`rotate${Cc[g]}`, u, h, this.animationValues), $c(`skew${Cc[g]}`, u, h, this.animationValues);
            u.render();
            for (const g in h) u.setStaticValue(g, h[g]), this.animationValues && (this.animationValues[g] = h[g]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, p;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return l3;
            const h = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, h.opacity = "", h.pointerEvents = Ca(u == null ? void 0 : u.pointerEvents) || "", h.transform = g ? g(this.latestValues, "") : "none", h;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const C = {};
                return this.options.layoutId && (C.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, C.pointerEvents = Ca(u == null ? void 0 : u.pointerEvents) || ""), this.hasProjected && !kr(this.latestValues) && (C.transform = g ? g({}, "") : "none", this.hasProjected = !1), C
            }
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), h.transform = a3(this.projectionDeltaWithTransform, this.treeScale, v), g && (h.transform = g(v, h.transform));
            const {
                x: b,
                y: P
            } = this.projectionDelta;
            h.transformOrigin = `${b.origin*100}% ${P.origin*100}% 0`, y.animationValues ? h.opacity = y === this ? (p = (d = v.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const C in za) {
                if (v[C] === void 0) continue;
                const {
                    correct: L,
                    applyTo: $
                } = za[C], _ = h.transform === "none" ? v[C] : L(v[C], y);
                if ($) {
                    const D = $.length;
                    for (let F = 0; F < D; F++) h[$[F]] = _
                } else h[C] = _
            }
            return this.options.layoutId && (h.pointerEvents = y === this ? Ca(u == null ? void 0 : u.pointerEvents) || "" : "none"), h
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }), this.root.nodes.forEach(Ty), this.root.sharedNodes.clear()
        }
    }
}

function c3(e) {
    e.updateLayout()
}

function d3(e) {
    var n;
    const o = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: a
        } = e.layout, {
            animationType: c
        } = e.options, u = o.source !== e.layout.source;
        c === "size" ? It(y => {
            const v = u ? o.measuredBox[y] : o.layoutBox[y],
                b = $t(v);
            v.min = i[y].min, v.max = v.min + b
        }) : Cx(c, o.layoutBox, i) && It(y => {
            const v = u ? o.measuredBox[y] : o.layoutBox[y],
                b = $t(i[y]);
            v.max = v.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + b)
        });
        const d = bo();
        Di(d, i, o.layoutBox);
        const p = bo();
        u ? Di(p, e.applyTransform(a, !0), o.measuredBox) : Di(p, i, o.layoutBox);
        const h = !Sx(d);
        let g = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: v,
                    layout: b
                } = y;
                if (v && b) {
                    const P = Ge();
                    Ni(P, o.layoutBox, v.layoutBox);
                    const C = Ge();
                    Ni(C, i, b.layoutBox), Px(P, C) || (g = !0), y.options.layoutRoot && (e.relativeTarget = C, e.relativeTargetOrigin = P, e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: o,
            delta: p,
            layoutDelta: d,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: g
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: i
        } = e.options;
        i && i()
    }
    e.options.transition = void 0
}

function f3(e) {
    Mi && Mr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function p3(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function h3(e) {
    e.clearSnapshot()
}

function Ty(e) {
    e.clearMeasurements()
}

function m3(e) {
    e.isLayoutDirty = !1
}

function g3(e) {
    const {
        visualElement: n
    } = e.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Cy(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function y3(e) {
    e.resolveTargetDelta()
}

function v3(e) {
    e.calcProjection()
}

function x3(e) {
    e.resetSkewAndRotation()
}

function w3(e) {
    e.removeLeadSnapshot()
}

function $y(e, n, o) {
    e.translate = Fe(n.translate, 0, o), e.scale = Fe(n.scale, 1, o), e.origin = n.origin, e.originPoint = n.originPoint
}

function ky(e, n, o, i) {
    e.min = Fe(n.min, o.min, i), e.max = Fe(n.max, o.max, i)
}

function b3(e, n, o, i) {
    ky(e.x, n.x, o.x, i), ky(e.y, n.y, o.y, i)
}

function S3(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const P3 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    My = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Ly = My("applewebkit/") && !My("chrome/") ? Math.round : Ct;

function Ay(e) {
    e.min = Ly(e.min), e.max = Ly(e.max)
}

function E3(e) {
    Ay(e.x), Ay(e.y)
}

function Cx(e, n, o) {
    return e === "position" || e === "preserve-aspect" && !Ck(Sy(n), Sy(o), .2)
}

function T3(e) {
    var n;
    return e !== e.root && ((n = e.scroll) === null || n === void 0 ? void 0 : n.wasRoot)
}
const C3 = Tx({
        attachResizeListener: (e, n) => Bi(e, "resize", n),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    kc = {
        current: void 0
    },
    $x = Tx({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!kc.current) {
                const e = new C3({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), kc.current = e
            }
            return kc.current
        },
        resetTransform: (e, n) => {
            e.style.transform = n !== void 0 ? n : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    $3 = {
        pan: {
            Feature: Bk
        },
        drag: {
            Feature: zk,
            ProjectionNode: $x,
            MeasureLayout: xx
        }
    };

function k3(e, n, o) {
    var i;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let a = document;
        const c = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(e);
        return c ? Array.from(c) : []
    }
    return Array.from(e)
}

function kx(e, n) {
    const o = k3(e),
        i = new AbortController,
        a = {
            passive: !0,
            ...n,
            signal: i.signal
        };
    return [o, a, () => i.abort()]
}

function Ry(e) {
    return n => {
        n.pointerType === "touch" || ux() || e(n)
    }
}

function M3(e, n, o = {}) {
    const [i, a, c] = kx(e, o), u = Ry(d => {
        const {
            target: p
        } = d, h = n(d);
        if (typeof h != "function" || !p) return;
        const g = Ry(y => {
            h(y), p.removeEventListener("pointerleave", g)
        });
        p.addEventListener("pointerleave", g, a)
    });
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, a)
    }), c
}

function _y(e, n, o) {
    const {
        props: i
    } = e;
    e.animationState && i.whileHover && e.animationState.setActive("whileHover", o === "Start");
    const a = "onHover" + o,
        c = i[a];
    c && Oe.postRender(() => c(n, Qi(n)))
}
class L3 extends ar {
    mount() {
        const {
            current: n
        } = this.node;
        n && (this.unmount = M3(n, o => (_y(this.node, o, "Start"), i => _y(this.node, i, "End"))))
    }
    unmount() {}
}
class A3 extends ar {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }!n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Xi(Bi(this.node.current, "focus", () => this.onFocus()), Bi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Mx = (e, n) => n ? e === n ? !0 : Mx(e, n.parentElement) : !1,
    R3 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function _3(e) {
    return R3.has(e.tagName) || e.tabIndex !== -1
}
const Li = new WeakSet;

function Dy(e) {
    return n => {
        n.key === "Enter" && e(n)
    }
}

function Mc(e, n) {
    e.dispatchEvent(new PointerEvent("pointer" + n, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const D3 = (e, n) => {
    const o = e.currentTarget;
    if (!o) return;
    const i = Dy(() => {
        if (Li.has(o)) return;
        Mc(o, "down");
        const a = Dy(() => {
                Mc(o, "up")
            }),
            c = () => Mc(o, "cancel");
        o.addEventListener("keyup", a, n), o.addEventListener("blur", c, n)
    });
    o.addEventListener("keydown", i, n), o.addEventListener("blur", () => o.removeEventListener("keydown", i), n)
};

function Ny(e) {
    return xf(e) && !ux()
}

function N3(e, n, o = {}) {
    const [i, a, c] = kx(e, o), u = d => {
        const p = d.currentTarget;
        if (!Ny(d) || Li.has(p)) return;
        Li.add(p);
        const h = n(d),
            g = (b, P) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", v), !(!Ny(b) || !Li.has(p)) && (Li.delete(p), typeof h == "function" && h(b, {
                    success: P
                }))
            },
            y = b => {
                g(b, o.useGlobalTarget || Mx(p, b.target))
            },
            v = b => {
                g(b, !1)
            };
        window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", v, a)
    };
    return i.forEach(d => {
        !_3(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0), (o.useGlobalTarget ? window : d).addEventListener("pointerdown", u, a), d.addEventListener("focus", h => D3(h, a), a)
    }), c
}

function Oy(e, n, o) {
    const {
        props: i
    } = e;
    e.animationState && i.whileTap && e.animationState.setActive("whileTap", o === "Start");
    const a = "onTap" + (o === "End" ? "" : o),
        c = i[a];
    c && Oe.postRender(() => c(n, Qi(n)))
}
class O3 extends ar {
    mount() {
        const {
            current: n
        } = this.node;
        n && (this.unmount = N3(n, o => (Oy(this.node, o, "Start"), (i, {
            success: a
        }) => Oy(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const md = new WeakMap,
    Lc = new WeakMap,
    j3 = e => {
        const n = md.get(e.target);
        n && n(e)
    },
    I3 = e => {
        e.forEach(j3)
    };

function V3({
    root: e,
    ...n
}) {
    const o = e || document;
    Lc.has(o) || Lc.set(o, {});
    const i = Lc.get(o),
        a = JSON.stringify(n);
    return i[a] || (i[a] = new IntersectionObserver(I3, {
        root: e,
        ...n
    })), i[a]
}

function F3(e, n, o) {
    const i = V3(n);
    return md.set(e, o), i.observe(e), () => {
        md.delete(e), i.unobserve(e)
    }
}
const z3 = {
    some: 0,
    all: 1
};
class B3 extends ar {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: n = {}
        } = this.node.getProps(), {
            root: o,
            margin: i,
            amount: a = "some",
            once: c
        } = n, u = {
            root: o ? o.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : z3[a]
        }, d = p => {
            const {
                isIntersecting: h
            } = p;
            if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView)) return;
            h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
            const {
                onViewportEnter: g,
                onViewportLeave: y
            } = this.node.getProps(), v = h ? g : y;
            v && v(p)
        };
        return F3(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: n,
            prevProps: o
        } = this.node;
        ["amount", "margin", "root"].some(U3(n, o)) && this.startObserver()
    }
    unmount() {}
}

function U3({
    viewport: e = {}
}, {
    viewport: n = {}
} = {}) {
    return o => e[o] !== n[o]
}
const H3 = {
        inView: {
            Feature: B3
        },
        tap: {
            Feature: O3
        },
        focus: {
            Feature: A3
        },
        hover: {
            Feature: L3
        }
    },
    W3 = {
        layout: {
            ProjectionNode: $x,
            MeasureLayout: xx
        }
    },
    gd = {
        current: null
    },
    Lx = {
        current: !1
    };

function K3() {
    if (Lx.current = !0, !!Bd)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                n = () => gd.current = e.matches;
            e.addListener(n), n()
        } else gd.current = !1
}

function G3(e, n, o) {
    for (const i in n) {
        const a = n[i],
            c = o[i];
        if (ft(a)) e.addValue(i, a);
        else if (ft(c)) e.addValue(i, Co(a, {
            owner: e
        }));
        else if (c !== a)
            if (e.hasValue(i)) {
                const u = e.getValue(i);
                u.liveStyle === !0 ? u.jump(a) : u.hasAnimated || u.set(a)
            } else {
                const u = e.getStaticValue(i);
                e.addValue(i, Co(u !== void 0 ? u : a, {
                    owner: e
                }))
            }
    }
    for (const i in o) n[i] === void 0 && e.removeValue(i);
    return n
}
const jy = new WeakMap,
    Y3 = [...U1, dt, or],
    X3 = e => Y3.find(B1(e)),
    Iy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Q3 {
    scrapeMotionValuesFromProps(n, o, i) {
        return {}
    }
    constructor({
        parent: n,
        props: o,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: c,
        visualState: u
    }, d = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = ff, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const v = cn.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v, Oe.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: h
        } = u;
        this.latestValues = p, this.baseTarget = { ...p
        }, this.initialValues = o.initial ? { ...p
        } : {}, this.renderState = h, this.parent = n, this.props = o, this.presenceContext = i, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!c, this.isControllingVariants = fl(o), this.isVariantNode = c1(o), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(n && n.current);
        const {
            willChange: g,
            ...y
        } = this.scrapeMotionValuesFromProps(o, {}, this);
        for (const v in y) {
            const b = y[v];
            p[v] !== void 0 && ft(b) && b.set(p[v], !1)
        }
    }
    mount(n) {
        this.current = n, jy.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, i) => this.bindToMotionValue(i, o)), Lx.current || K3(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gd.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        jy.delete(this.current), this.projection && this.projection.unmount(), rr(this.notifyUpdate), rr(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const o = this.features[n];
            o && (o.unmount(), o.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(n, o) {
        this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
        const i = Fr.has(n),
            a = o.on("change", d => {
                this.latestValues[n] = d, this.props.onUpdate && Oe.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            c = o.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, n, o)), this.valueSubscriptions.set(n, () => {
            a(), c(), u && u(), o.owner && o.stop()
        })
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in To) {
            const o = To[n];
            if (!o) continue;
            const {
                isEnabled: i,
                Feature: a
            } = o;
            if (!this.features[n] && a && i(this.props) && (this.features[n] = new a(this)), this.features[n]) {
                const c = this.features[n];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ge()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, o) {
        this.latestValues[n] = o
    }
    update(n, o) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
        for (let i = 0; i < Iy.length; i++) {
            const a = Iy[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const c = "on" + a,
                u = n[c];
            u && (this.propEventSubscriptions[a] = this.on(a, u))
        }
        this.prevMotionValues = G3(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const o = this.getClosestVariantNode();
        if (o) return o.variantChildren && o.variantChildren.add(n), () => o.variantChildren.delete(n)
    }
    addValue(n, o) {
        const i = this.values.get(n);
        o !== i && (i && this.removeValue(n), this.bindToMotionValue(n, o), this.values.set(n, o), this.latestValues[n] = o.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const o = this.valueSubscriptions.get(n);
        o && (o(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, o) {
        if (this.props.values && this.props.values[n]) return this.props.values[n];
        let i = this.values.get(n);
        return i === void 0 && o !== void 0 && (i = Co(o === null ? void 0 : o, {
            owner: this
        }), this.addValue(n, i)), i
    }
    readValue(n, o) {
        var i;
        let a = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (i = this.getBaseTargetFromProps(this.props, n)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, n, this.options);
        return a != null && (typeof a == "string" && (F1(a) || V1(a)) ? a = parseFloat(a) : !X3(a) && or.test(o) && (a = q1(n, o)), this.setBaseTarget(n, ft(a) ? a.get() : a)), ft(a) ? a.get() : a
    }
    setBaseTarget(n, o) {
        this.baseTarget[n] = o
    }
    getBaseTarget(n) {
        var o;
        const {
            initial: i
        } = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const u = Xd(this.props, i, (o = this.presenceContext) === null || o === void 0 ? void 0 : o.custom);
            u && (a = u[n])
        }
        if (i && a !== void 0) return a;
        const c = this.getBaseTargetFromProps(this.props, n);
        return c !== void 0 && !ft(c) ? c : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, o) {
        return this.events[n] || (this.events[n] = new sf), this.events[n].add(o)
    }
    notify(n, ...o) {
        this.events[n] && this.events[n].notify(...o)
    }
}
class Ax extends Q3 {
    constructor() {
        super(...arguments), this.KeyframeResolver = Z1
    }
    sortInstanceNodePosition(n, o) {
        return n.compareDocumentPosition(o) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, o) {
        return n.style ? n.style[o] : void 0
    }
    removeValueFromRenderState(n, {
        vars: o,
        style: i
    }) {
        delete o[n], delete i[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: n
        } = this.props;
        ft(n) && (this.childSubscription = n.on("change", o => {
            this.current && (this.current.textContent = `${o}`)
        }))
    }
}

function q3(e) {
    return window.getComputedStyle(e)
}
class Z3 extends Ax {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = h1
    }
    readValueFromInstance(n, o) {
        if (Fr.has(o)) {
            const i = mf(o);
            return i && i.default || 0
        } else {
            const i = q3(n),
                a = (P1(o) ? i.getPropertyValue(o) : i[o]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(n, {
        transformPagePoint: o
    }) {
        return yx(n, o)
    }
    build(n, o, i) {
        Jd(n, o, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, o, i) {
        return Yd(n, o, i)
    }
}
class J3 extends Ax {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ge
    }
    getBaseTargetFromProps(n, o) {
        return n[o]
    }
    readValueFromInstance(n, o) {
        if (Fr.has(o)) {
            const i = mf(o);
            return i && i.default || 0
        }
        return o = m1.has(o) ? o : Wd(o), n.getAttribute(o)
    }
    scrapeMotionValuesFromProps(n, o, i) {
        return v1(n, o, i)
    }
    build(n, o, i) {
        ef(n, o, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(n, o, i, a) {
        g1(n, o, i, a)
    }
    mount(n) {
        this.isSVGTag = tf(n.tagName), super.mount(n)
    }
}
const e4 = (e, n) => Gd(e) ? new J3(n) : new Z3(n, {
        allowProjection: e !== S.Fragment
    }),
    t4 = TC({ ...gk,
        ...H3,
        ...$3,
        ...W3
    }, e4),
    ke = z2(t4);

function n4(e) {
    const n = ll(() => Co(e)),
        {
            isStatic: o
        } = S.useContext(ul);
    if (o) {
        const [, i] = S.useState(e);
        S.useEffect(() => n.on("change", i), [])
    }
    return n
}
const r4 = "/assets/mintMini01-BVbyeVI-.webp",
    o4 = "/assets/MintLogo-BPW6HPkX.webp",
    i4 = "/assets/BackgroundSpace-NBMzrWT4.webp",
    s4 = "/assets/MintSpace-Cd0joq4r.webp",
    a4 = "/assets/bgAbout01-DypRaDTt.webp",
    l4 = "/assets/bgAbout02-CduMfvZv.webp",
    u4 = "/assets/bgAbout03-CpN0bpNr.webp",
    c4 = "/assets/bgAbout04-CL_nX110.webp",
    d4 = "/assets/bgAbout05-DehuFB-n.webp",
    qi = S.createContext(),
    f4 = ({
        children: e
    }) => R.jsx(qi.Provider, {
        value: {
            CAvalue: "D4opppLUmw5xKceSxhsJUxLAqJTM4VC2K5yZ7huMpump",
            TwitterLink: "https://x.com/MintBeCool",
            TelegramLink: "https://t.me/Mintbecool"
        },
        children: e
    });

function p4({
    motionKey: e
}) {
    const {
        CAvalue: n
    } = S.useContext(qi), o = () => {
        navigator.clipboard.writeText(n)
    }, i = () => R.jsx("div", {
        className: "absolute bottom-0 w-full h-full z-0",
        children: R.jsxs(ke.div, {
            className: "flex relative w-full h-full",
            animate: {
                y: [15, 0, 15],
                transition: {
                    delay: 2.6,
                    repeat: 1 / 0,
                    type: "keyframes",
                    duration: 5
                }
            },
            children: [R.jsx(ke.img, {
                src: a4,
                initial: {
                    opacity: 0,
                    scale: 0,
                    rotate: "-6deg"
                },
                animate: {
                    opacity: .1,
                    scale: 1,
                    transition: {
                        delay: 1
                    }
                },
                whileHover: {
                    opacity: .3,
                    scale: 1.1
                },
                className: "absolute sm:top-[130px] sm:left-[100px] w-[140px]"
            }), R.jsx(ke.img, {
                src: l4,
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: .1,
                    scale: 1,
                    transition: {
                        delay: 1.3
                    }
                },
                whileHover: {
                    opacity: .3
                },
                className: "absolute top-[30px] right-[-60px] sm:right-[10px] w-[240px]"
            }), R.jsx(ke.img, {
                src: d4,
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: .1,
                    scale: 1,
                    transition: {
                        delay: 1.8
                    }
                },
                whileHover: {
                    opacity: .3,
                    scale: 1.1
                },
                className: "absolute top-[50%] sm:top-[20%] right-[2%] sm:right-[34%] w-[180px] sm:w-[240px]"
            }), R.jsx(ke.img, {
                src: u4,
                initial: {
                    opacity: 0,
                    scale: 0,
                    y: 50
                },
                animate: {
                    opacity: .1,
                    scale: 1,
                    transition: {
                        delay: 2.1
                    }
                },
                whileHover: {
                    opacity: .3,
                    y: 10
                },
                className: "absolute bottom-[0%] right-[40%] w-[240px]"
            }), R.jsx(ke.img, {
                src: c4,
                initial: {
                    opacity: 0,
                    scale: 0,
                    rotate: "12deg"
                },
                animate: {
                    opacity: .1,
                    scale: 1,
                    transition: {
                        delay: 2.4
                    }
                },
                whileHover: {
                    opacity: .3,
                    scale: 1.2
                },
                className: "absolute hidden sm:flex -bottom-[5%] -left-[2%] w-[280px]"
            })]
        })
    });
    return R.jsxs(ke.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "flex flex-col sm:flex-row relative w-full h-full items-center",
        children: [R.jsxs("div", {
            className: "flex flex-col h-full justify-end sm:h-fit sm:justify-normal w-full sm:w-2/5 sm:mx-[10%] items-center z-10",
            children: [R.jsxs("div", {
                className: "flex flex-col items-center sm:items-start gap-3",
                children: [R.jsx(ke.h2, {
                    className: "text-5xl sm:text-8xl",
                    initial: {
                        x: -400
                    },
                    animate: {
                        x: 0
                    },
                    transition: {
                        type: "spring"
                    },
                    children: "Who's Mint?"
                }), R.jsx(ke.p, {
                    className: "text-[22px] sm:text-2xl leading-tight w-[90%]  tracking-tight font-secondary text-justify text-default-500",
                    initial: {
                        x: -400
                    },
                    animate: {
                        x: 0
                    },
                    transition: {
                        type: "spring"
                    },
                    children: "Mint was created by two friends who love art - an art based project that aims to empower creators, celebrate digital art, and join the art coin hall of fame."
                })]
            }), R.jsxs(ke.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1,
                    transition: {
                        delay: 1
                    }
                },
                className: "flex w-[90%] mt-3 py-2 items-center rounded-md sm:self-start gap-3",
                children: [R.jsx("div", {
                    className: "flex flex-1 py-[5px] px-2 overflow-hidden border-2 border-neutral-950 rounded-sm",
                    children: R.jsxs("p", {
                        className: "truncate font-secondary tracking-wide font-black text-default-600",
                        children: ["CA:", " ", R.jsx("span", {
                            className: "font-semibold text-default-500",
                            children: n
                        })]
                    })
                }), R.jsx(ke.div, {
                    className: "px-5 py-2 items-center justify-center bg-[#de3e31] rounded-sm cursor-pointer",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .95
                    },
                    onClick: () => o(),
                    children: R.jsx("p", {
                        className: "textstroke text-sm",
                        "data-text": "COPY",
                        children: "COPY"
                    })
                })]
            })]
        }), R.jsx("div", {
            className: "h-fit self-end flex flex-1 items-end justify-end z-10",
            children: R.jsx(ke.div, {
                children: R.jsx(ke.img, {
                    src: r4,
                    className: "object-contain w-[30vh] sm:w-full h-fit pointer-events-none",
                    alt: "",
                    initial: {
                        y: 200,
                        transition: {
                            delay: .5,
                            duration: 20
                        }
                    },
                    animate: {
                        y: 10
                    }
                })
            })
        }), R.jsx(i, {})]
    }, e)
}
var Ma = {
        exports: {}
    },
    h4 = Ma.exports,
    Vy;

function m4() {
    return Vy || (Vy = 1, function(e, n) {
        (function(o, i) {
            i()
        })(h4, function() {
            function o(h, g) {
                return typeof g > "u" ? g = {
                    autoBom: !1
                } : typeof g != "object" && (console.warn("Deprecated: Expected third argument to be a object"), g = {
                    autoBom: !g
                }), g.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type) ? new Blob(["\uFEFF", h], {
                    type: h.type
                }) : h
            }

            function i(h, g, y) {
                var v = new XMLHttpRequest;
                v.open("GET", h), v.responseType = "blob", v.onload = function() {
                    p(v.response, g, y)
                }, v.onerror = function() {
                    console.error("could not download file")
                }, v.send()
            }

            function a(h) {
                var g = new XMLHttpRequest;
                g.open("HEAD", h, !1);
                try {
                    g.send()
                } catch {}
                return 200 <= g.status && 299 >= g.status
            }

            function c(h) {
                try {
                    h.dispatchEvent(new MouseEvent("click"))
                } catch {
                    var g = document.createEvent("MouseEvents");
                    g.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), h.dispatchEvent(g)
                }
            }
            var u = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof sa == "object" && sa.global === sa ? sa : void 0,
                d = u.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
                p = u.saveAs || (typeof window != "object" || window !== u ? function() {} : "download" in HTMLAnchorElement.prototype && !d ? function(h, g, y) {
                    var v = u.URL || u.webkitURL,
                        b = document.createElement("a");
                    g = g || h.name || "download", b.download = g, b.rel = "noopener", typeof h == "string" ? (b.href = h, b.origin === location.origin ? c(b) : a(b.href) ? i(h, g, y) : c(b, b.target = "_blank")) : (b.href = v.createObjectURL(h), setTimeout(function() {
                        v.revokeObjectURL(b.href)
                    }, 4e4), setTimeout(function() {
                        c(b)
                    }, 0))
                } : "msSaveOrOpenBlob" in navigator ? function(h, g, y) {
                    if (g = g || h.name || "download", typeof h != "string") navigator.msSaveOrOpenBlob(o(h, y), g);
                    else if (a(h)) i(h, g, y);
                    else {
                        var v = document.createElement("a");
                        v.href = h, v.target = "_blank", setTimeout(function() {
                            c(v)
                        })
                    }
                } : function(h, g, y, v) {
                    if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof h == "string") return i(h, g, y);
                    var b = h.type === "application/octet-stream",
                        P = /constructor/i.test(u.HTMLElement) || u.safari,
                        C = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((C || b && P || d) && typeof FileReader < "u") {
                        var L = new FileReader;
                        L.onloadend = function() {
                            var D = L.result;
                            D = C ? D : D.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = D : location = D, v = null
                        }, L.readAsDataURL(h)
                    } else {
                        var $ = u.URL || u.webkitURL,
                            _ = $.createObjectURL(h);
                        v ? v.location = _ : location.href = _, v = null, setTimeout(function() {
                            $.revokeObjectURL(_)
                        }, 4e4)
                    }
                });
            u.saveAs = p.saveAs = p, e.exports = p
        })
    }(Ma)), Ma.exports
}
var g4 = m4();
const y4 = "/assets/art01-DL1eGRla.webp",
    v4 = "/assets/art02-n0ZJcupx.webp",
    x4 = "/assets/art03-6SZufcjp.webp",
    w4 = "/assets/art04-qaJJrAOT.webp",
    b4 = "/assets/art05-DsDpBgIw.webp",
    S4 = "/assets/art06-B4jM5oL-.webp",
    P4 = "/assets/art07-BqrzipK-.webp",
    E4 = "/assets/art08-DTL-qglE.webp",
    T4 = "/assets/art09-B_jvEf2u.webp",
    C4 = "/assets/art10-s5lktysl.webp",
    $4 = [{
        name: "Mint Wanderer",
        image: y4,
        id: 1
    }, {
        name: "Protest Mint",
        image: v4,
        id: 2
    }, {
        name: "Akira",
        image: x4,
        id: 3
    }, {
        name: "Mint Death",
        image: w4,
        id: 4
    }, {
        name: "Mint Rebirth",
        image: b4,
        id: 5
    }, {
        name: "Mint Sanchez",
        image: S4,
        id: 6
    }, {
        name: "Eat Mint",
        image: P4,
        id: 7
    }, {
        name: "Space",
        image: E4,
        id: 8
    }, {
        name: "Mushroom Mint",
        image: T4,
        id: 9
    }, {
        name: "Smells Like Mint Spirit",
        image: C4,
        id: 10
    }];
var Rx = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Fy = Se.createContext && Se.createContext(Rx),
    k4 = ["attr", "size", "title"];

function M4(e, n) {
    if (e == null) return {};
    var o = L4(e, n),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (a = 0; a < c.length; a++) i = c[a], !(n.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i])
    }
    return o
}

function L4(e, n) {
    if (e == null) return {};
    var o = {};
    for (var i in e)
        if (Object.prototype.hasOwnProperty.call(e, i)) {
            if (n.indexOf(i) >= 0) continue;
            o[i] = e[i]
        }
    return o
}

function Ga() {
    return Ga = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
        }
        return e
    }, Ga.apply(this, arguments)
}

function zy(e, n) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), o.push.apply(o, i)
    }
    return o
}

function Ya(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n] != null ? arguments[n] : {};
        n % 2 ? zy(Object(o), !0).forEach(function(i) {
            A4(e, i, o[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : zy(Object(o)).forEach(function(i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i))
        })
    }
    return e
}

function A4(e, n, o) {
    return n = R4(n), n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e
}

function R4(e) {
    var n = _4(e, "string");
    return typeof n == "symbol" ? n : n + ""
}

function _4(e, n) {
    if (typeof e != "object" || !e) return e;
    var o = e[Symbol.toPrimitive];
    if (o !== void 0) {
        var i = o.call(e, n || "default");
        if (typeof i != "object") return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(e)
}

function _x(e) {
    return e && e.map((n, o) => Se.createElement(n.tag, Ya({
        key: o
    }, n.attr), _x(n.child)))
}

function dn(e) {
    return n => Se.createElement(D4, Ga({
        attr: Ya({}, e.attr)
    }, n), _x(e.child))
}

function D4(e) {
    var n = o => {
        var {
            attr: i,
            size: a,
            title: c
        } = e, u = M4(e, k4), d = a || o.size || "1em", p;
        return o.className && (p = o.className), e.className && (p = (p ? p + " " : "") + e.className), Se.createElement("svg", Ga({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, o.attr, i, u, {
            className: p,
            style: Ya(Ya({
                color: e.color || o.color
            }, o.style), e.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg"
        }), c && Se.createElement("title", null, c), e.children)
    };
    return Fy !== void 0 ? Se.createElement(Fy.Consumer, null, o => n(o)) : n(Rx)
}

function N4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M368 368 144 144m224 0L144 368"
            },
            child: []
        }]
    })(e)
}

function O4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "m176 272 80 80 80-80M256 48v288"
            },
            child: []
        }]
    })(e)
}

function j4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
            },
            child: []
        }]
    })(e)
}

function I4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"
            },
            child: []
        }]
    })(e)
}

function V4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "32",
                d: "M80 160h352M80 256h352M80 352h352"
            },
            child: []
        }]
    })(e)
}

function F4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"
            },
            child: []
        }]
    })(e)
}

function z4({
    motionKey: e
}) {
    const {
        TwitterLink: n
    } = S.useContext(qi);
    return R.jsxs(ke.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "flex flex-col w-full h-full items-center gap-10 pt-[120px] pb-[40px] justify-center",
        children: [R.jsx(B4, {}), R.jsxs(ke.div, {
            className: "flex gap-3 items-center",
            children: [R.jsx("p", {
                className: "text-xl font-secondary text-default-500",
                children: "Check out more Mint content on X."
            }), R.jsx(vo, {
                isExternal: !0,
                href: n,
                children: R.jsx(I4, {
                    size: 20,
                    fill: "",
                    strokeWidth: 16,
                    stroke: "#0d64f8"
                })
            })]
        })]
    }, e)
}
const B4 = () => {
        const e = S.useRef(null),
            n = n4(0);
        return R.jsx("div", {
            className: "flex w-full h-fit items-center overflow-hidden select-none",
            ref: e,
            children: R.jsx(ke.div, {
                className: "flex gap-4 select-none",
                drag: "x",
                style: {
                    x: n
                },
                dragConstraints: e,
                dragElastic: .3,
                children: $4.map(o => R.jsx(U4, {
                    card: o
                }, o.id))
            })
        })
    },
    U4 = ({
        card: e
    }) => {
        const {
            isOpen: n,
            onOpen: o,
            onOpenChange: i
        } = M2(), [a, c] = S.useState("closed"), u = ({
            card: p
        }) => {
            g4.saveAs(`${p.image}`, `${p.name}.jpg`)
        }, d = {
            open: {
                y: 0,
                opacity: 1,
                transition: {
                    y: {
                        stiffness: 1e3,
                        velocity: -100
                    }
                }
            },
            closed: {
                y: 50,
                opacity: 0,
                transition: {
                    y: {
                        stiffness: 1e3
                    }
                }
            }
        };
        return R.jsxs("div", {
            className: "group relative max-h-[500px] sm:max-h-[550px] w-[300px] sm:w-[460px] overflow-hidden rounded-md select-none grayscale hover:grayscale-0 duration-500 ease transition cursor-grab",
            onMouseEnter: () => c("open"),
            onMouseLeave: () => c("closed"),
            children: [R.jsx("img", {
                src: e.image,
                className: "w-full h-full object-cover pointer-events-none z-10",
                alt: ""
            }), a && R.jsx(ke.div, {
                className: "flex z-20 absolute bottom-2 right-2 items-center gap-1",
                animate: a,
                variants: d,
                children: R.jsx(vg, {
                    onPress: o,
                    isIconOnly: !0,
                    className: "text-xl bg-transparent shadow-sm",
                    startContent: R.jsx(F4, {
                        className: "text-red-500"
                    })
                })
            }), R.jsx(k2, {
                backdrop: "blur",
                isOpen: n,
                size: "4xl",
                onOpenChange: i,
                className: "bg-neutral-950 rounded-md relative",
                classNames: {
                    wrapper: "overflow-hidden py-3",
                    base: "p-0 m-0 h-full w-fit",
                    body: "p-0",
                    closeButton: "text-white hover:text-black"
                },
                children: R.jsx(P2, {
                    children: p => R.jsxs(R.Fragment, {
                        children: [R.jsx(T2, {
                            className: "flex flex-col gap-1 absolute top-0 p-3 items-center justify-center",
                            children: R.jsx("p", {
                                className: "textstroke text-sm uppercase",
                                "data-text": e.name,
                                children: e.name
                            })
                        }), R.jsx(b2, {
                            className: "w-full h-full",
                            children: R.jsx("img", {
                                src: e.image,
                                className: "object-cover h-full w-full"
                            })
                        }), R.jsx(E2, {
                            className: "flex gap-2 absolute bottom-0 right-0",
                            children: R.jsx(vg, {
                                variant: "shadow",
                                className: "rounded-md bg-neutral-950 shadow-black/50 text-default-600 font-secondary uppercase text-xs font-semibold gap-1 hover:text-red-500",
                                onPress: () => u({
                                    card: e
                                }),
                                startContent: R.jsx(O4, {
                                    className: "text-sm"
                                }),
                                children: "Download"
                            })
                        })]
                    })
                })
            })]
        }, e.id)
    };

function H4({
    motionKey: e
}) {
    return R.jsxs(ke.div, {
        initial: {
            opacity: .1
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "flex w-full h-full items-center justify-center relative selectDisable",
        children: [R.jsx(ke.img, {
            src: i4,
            className: "absolute object-cover w-full h-full -z-0 opacity-90 selectDisable pointer-events-none ",
            animate: {
                scale: [1, 1.2, 1]
            },
            transition: {
                duration: 30,
                repeat: 1 / 0
            }
        }), R.jsx("div", {
            className: "flex h-full w-full absolute  shadow-[inset_0px_0px_185px_69px_#000000]"
        }), R.jsx("div", {
            className: "flex max-w-fit -ml-[220px] sm:max-w-full sm:-ml-0 sm:w-full h-full ",
            children: R.jsx(ke.img, {
                src: s4,
                className: "z-10 h-full object-cover sm:object-contain w-full selectDisable pointer-events-none  sm:-ml-32",
                animate: {
                    y: [0, -50, 0],
                    transition: {
                        duration: 10,
                        repeat: 1 / 0
                    }
                }
            })
        })]
    }, e)
}

function W4({
    motionKey: e
}) {
    const {
        CAvalue: n,
        TwitterLink: o,
        TelegramLink: i
    } = S.useContext(qi);
    return R.jsxs("div", {
        className: "flex flex-col sm:gap-10 w-full h-full items-center justify-center py-20",
        children: [R.jsxs("div", {
            className: "flex flex-1 flex-col sm:flex-row sm:gap-10 w-full items-center justify-evenly",
            children: [R.jsx(vo, {
                href: o,
                isExternal: !0,
                children: R.jsx(ke.div, {
                    className: "flex flex-col gap-2 items-center hover:drop-shadow-[0.2em_0.3em_2em_#8199ffcc] transition-all duration-700",
                    children: R.jsx("h2", {
                        className: "text-5xl font-secondary font-semibold text-default-400 hover:text-default-700 transition-all duration-700",
                        children: "twitter"
                    })
                })
            }), R.jsx(vo, {
                href: i,
                isExternal: !0,
                children: R.jsx(ke.div, {
                    className: "flex flex-col gap-2 items-center hover:drop-shadow-[0.2em_0.3em_2em_#85e3f5bd] transition-all duration-700",
                    children: R.jsx("h2", {
                        className: "text-5xl font-secondary font-semibold text-default-400 hover:text-default-700 transition-all duration-700",
                        children: "telegram"
                    })
                })
            }), R.jsx(vo, {
                href: `https://dexscreener.com/solana/${n}`,
                isExternal: !0,
                children: R.jsx(ke.div, {
                    className: "flex flex-col gap-2 items-center hover:drop-shadow-[0.2em_0.3em_2em_#f8feffbd] transition-all duration-700",
                    children: R.jsx("h2", {
                        className: "text-5xl font-secondary font-semibold text-default-400 hover:text-default-700 transition-all duration-700",
                        children: "dexscreener"
                    })
                })
            }), R.jsx(vo, {
                href: `https://pump.fun/coin/${n}`,
                isExternal: !0,
                children: R.jsx(ke.div, {
                    className: "flex flex-col gap-2 items-center hover:drop-shadow-[0.2em_0.3em_2em_#f58597bd] transition-all duration-700",
                    children: R.jsx("h2", {
                        className: "text-5xl font-secondary font-semibold text-default-400 hover:text-default-700 transition-all duration-700",
                        children: "buy mint"
                    })
                })
            })]
        }), R.jsx("div", {
            className: "flex items-center w-full justify-center text-center",
            children: R.jsx("h2", {
                className: "text-xl sm:text-3xl font-secondary font-black text-default-400",
                children: "the freshest mint on solana."
            })
        })]
    })
}

function K4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
            },
            child: []
        }, {
            tag: "circle",
            attr: {
                cx: "10",
                cy: "8",
                r: "2"
            },
            child: []
        }]
    })(e)
}

function G4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M14 6.5v10"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M10 7.5v10"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
            },
            child: []
        }]
    })(e)
}

function Y4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m8.5 8.5 7 7"
            },
            child: []
        }]
    })(e)
}

function X4(e) {
    return dn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            },
            child: []
        }, {
            tag: "circle",
            attr: {
                cx: "9",
                cy: "7",
                r: "4"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M22 21v-2a4 4 0 0 0-3-3.87"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            },
            child: []
        }]
    })(e)
}

function Q4({
    currentSection: e,
    changeSection: n
}) {
    const [o, i] = S.useState(!1), {
        CAvalue: a
    } = S.useContext(qi), c = [{
        label: "Home",
        key: "landing",
        icon: R.jsx(j4, {})
    }, {
        label: "About",
        key: "about",
        icon: R.jsx(G4, {})
    }, {
        label: "Gallery",
        key: "gallery",
        icon: R.jsx(K4, {})
    }, {
        label: "Socials",
        key: "socials",
        icon: R.jsx(X4, {})
    }], u = () => R.jsxs(ke.div, {
        className: "absolute flex flex-col gap-4 top-20 right-0 px-4 sm:px-10 w-[130px] rounded-md justify-end items-end",
        initial: {
            x: 300
        },
        animate: {
            x: 0
        },
        exit: {
            x: 300
        },
        children: [c.map((h, g) => R.jsx(bg, {
            content: h.label,
            placement: "left",
            className: "text-xs uppercase text-default-100 rounded-md bg-neutral-950",
            closeDelay: 0,
            children: R.jsx(ke.div, {
                className: "navitem",
                onClick: () => n(h.key),
                children: h.icon
            })
        }, g)), R.jsx(bg, {
            content: "Buy",
            placement: "left",
            className: "text-xs uppercase text-default-100 rounded-md bg-neutral-950",
            closeDelay: 0,
            children: R.jsx(vo, {
                isExternal: !0,
                href: `https://pump.fun/coin/${a}`,
                children: R.jsx(ke.div, {
                    className: "navitem",
                    children: R.jsx(Y4, {})
                })
            })
        })]
    }), d = () => {
        const h = c.find(g => g.key === e);
        return R.jsx(ed, {
            mode: "wait",
            children: R.jsxs(ke.div, {
                className: "flex gap-2 items-center text-[16px] text-red-500 ",
                initial: {
                    x: 300
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: 300
                },
                children: [h.icon, R.jsx("p", {
                    className: "textstroke uppercase text-sm text-default-600",
                    "data-text": `${h.label}`,
                    children: h.label
                })]
            }, h.key)
        })
    }, p = ({
        toggle: h
    }) => R.jsx("button", {
        className: "outline-none border-none select-none cursor-pointer w-[40px] h-[40px] p-0 rounded-full bg-neutral-950 items-center justify-center flex",
        onClick: h,
        children: o ? R.jsx(R.Fragment, {
            children: R.jsx(N4, {})
        }) : R.jsx(R.Fragment, {
            children: R.jsx(V4, {})
        })
    });
    return R.jsxs("header", {
        className: "flex w-full items-center justify-between h-[80px] fixed z-20 px-4 sm:px-10",
        children: [R.jsxs("div", {
            className: "flex items-center gap-2 cursor-pointer hover:drop-shadow-[0.2em_0.3em_2em_#f58597bd] transition duration-400",
            onClick: () => n("landing"),
            children: [R.jsx("img", {
                src: o4,
                className: "object-contain w-full h-[30px] sm:h-[40px] rounded-full ring-2 ring-[#5f5f5f]"
            }), R.jsx(ke.div, {
                children: R.jsx(ke.p, {
                    className: "text-2xl sm:text-3xl tracking-wide text-white textstroke hover:text-[#Cde3e32] duration-1000 transition",
                    "data-text": "Mint.",
                    transition: {
                        duration: 30,
                        repeat: 1 / 0
                    },
                    children: "Mint."
                })
            })]
        }), R.jsxs("div", {
            className: "flex gap-5",
            children: [R.jsx("div", {
                className: "flex gap-3",
                children: d()
            }), R.jsx(p, {
                toggle: () => i(!o)
            })]
        }), R.jsx(ed, {
            mode: "wait",
            children: o && u()
        })]
    })
}

function q4() {
    const e = [{
            key: 1,
            option: "landing",
            component: H4
        }, {
            key: 2,
            option: "about",
            component: p4
        }, {
            key: 3,
            option: "gallery",
            component: z4
        }, {
            key: 4,
            option: "socials",
            component: W4
        }],
        [n, o] = S.useState("landing"),
        [i, a] = S.useState(0),
        c = 100,
        u = p => {
            if (a(h => h + p.deltaY), Math.abs(i) >= c) {
                const h = e.findIndex(g => g.option === n);
                i > 0 ? h < e.length - 1 && o(e[h + 1].option) : h > 0 && o(e[h - 1].option), a(0)
            }
        },
        d = () => {
            const p = e.find(h => h.option === n);
            return p ? R.jsx(p.component, {}, n) : null
        };
    return R.jsx(R.Fragment, {
        children: R.jsx(lT, {
            children: R.jsx(f4, {
                children: R.jsxs("div", {
                    className: "flex flex-col h-screen !overflow-hidden",
                    children: [R.jsx(Q4, {
                        currentSection: n,
                        changeSection: o
                    }), R.jsx("div", {
                        className: "flex w-full h-full",
                        onWheel: u,
                        children: R.jsx(ed, {
                            mode: "wait",
                            children: d()
                        })
                    })]
                })
            })
        })
    })
}
Ob.createRoot(document.getElementById("root")).render(R.jsx(S.StrictMode, {
    children: R.jsx("main", {
        className: "dark bg-background text-foreground",
        children: R.jsx(q4, {})
    })
}));
export {
    Od as A, pE as B, Na as C, ME as D, KE as E, A0 as F, T0 as G, LE as H, w0 as I, _E as J, R0 as K, AE as L, oE as M, _0 as N, S0 as O, S as P, Zm as a, r5 as b, s5 as c, Id as d, yc as e, e5 as f, Er as g, o5 as h, Ir as i, Gc as j, FE as k, M0 as l, J4 as m, rE as n, xE as o, be as p, P0 as q, DE as r, Kc as s, rl as t, fE as u, i5 as v, v0 as w, NE as x, dE as y, p0 as z
};