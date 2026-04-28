/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        a = n.slice,
        s = n.concat,
        o = n.push,
        l = n.indexOf,
        u = {},
        d = u.toString,
        c = u.hasOwnProperty,
        p = c.toString,
        h = p.call(Object),
        f = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function(e) {
            return null != e && e === e.window
        },
        g = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, a, s = (n = n || i).createElement("script");
        if (s.text = e, t)
            for (r in g)(a = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, a);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[d.call(e)] || "object" : typeof e
    }
    var w = "3.4.1",
        x = function(e, t) {
            return new x.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !m(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || m(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], a = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {}, r = !1, s[t] = x.extend(u, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== d.call(e)) && (!(t = r(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && p.call(n) === h)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (C(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, a = 0,
                o = [];
            if (C(e))
                for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r);
            else
                for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
            return s.apply([], o)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }));
    var E =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        function(e) {
            var t, n, i, r, a, s, o, l, u, d, c, p, h, f, m, v, g, y, b, w = "sizzle" + 1 * new Date,
                x = e.document,
                T = 0,
                C = 0,
                E = le(),
                S = le(),
                k = le(),
                A = le(),
                $ = function(e, t) {
                    return e === t && (c = !0), 0
                },
                M = {}.hasOwnProperty,
                D = [],
                z = D.pop,
                L = D.push,
                P = D.push,
                _ = D.slice,
                O = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                N = "\\[" + F + "*(" + I + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + F + "*\\]",
                R = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                q = new RegExp(F + "+", "g"),
                H = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                X = new RegExp("^" + F + "*," + F + "*"),
                Y = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                B = new RegExp(F + "|>"),
                W = new RegExp(R),
                G = new RegExp("^" + I + "$"),
                V = {
                    ID: new RegExp("^#(" + I + ")"),
                    CLASS: new RegExp("^\\.(" + I + ")"),
                    TAG: new RegExp("^(" + I + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + j + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                },
                U = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ae = function() {
                    p()
                },
                se = we((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                P.apply(D = _.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
            } catch (e) {
                P = {
                    apply: D.length ? function(e, t) {
                        L.apply(e, _.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, i, r) {
                var a, o, u, d, c, f, g, y = t && t.ownerDocument,
                    T = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;
                if (!r && ((t ? t.ownerDocument || t : x) !== h && p(t), t = t || h, m)) {
                    if (11 !== T && (c = J.exec(e)))
                        if (a = c[1]) {
                            if (9 === T) {
                                if (!(u = t.getElementById(a))) return i;
                                if (u.id === a) return i.push(u), i
                            } else if (y && (u = y.getElementById(a)) && b(t, u) && u.id === a) return i.push(u), i
                        } else {
                            if (c[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                            if ((a = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(a)), i
                        }
                    if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                        if (g = e, y = t, 1 === T && B.test(e)) {
                            for ((d = t.getAttribute("id")) ? d = d.replace(ie, re) : t.setAttribute("id", d = w), o = (f = s(e)).length; o--;) f[o] = "#" + d + " " + be(f[o]);
                            g = f.join(","), y = ee.test(e) && ge(t.parentNode) || t
                        }
                        try {
                            return P.apply(i, y.querySelectorAll(g)), i
                        } catch (t) {
                            A(e, !0)
                        } finally {
                            d === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(H, "$1"), t, i, r)
            }

            function le() {
                var e = [];
                return function t(n, r) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
            }

            function ue(e) {
                return e[w] = !0, e
            }

            function de(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
            }

            function pe(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function he(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function fe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ve(e) {
                return ue((function(t) {
                    return t = +t, ue((function(n, i) {
                        for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                    }))
                }))
            }

            function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = oe.support = {}, a = oe.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !U.test(t || n && n.nodeName || "HTML")
                }, p = oe.setDocument = function(e) {
                    var t, r, s = e ? e.ownerDocument || e : x;
                    return s !== h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, m = !a(h), x !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ae, !1) : r.attachEvent && r.attachEvent("onunload", ae)), n.attributes = de((function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    })), n.getElementsByTagName = de((function(e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                    })), n.getElementsByClassName = Z.test(h.getElementsByClassName), n.getById = de((function(e) {
                        return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                    })), n.getById ? (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n, i, r, a = t.getElementById(e);
                            if (a) {
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                    if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                    }, g = [], v = [], (n.qsa = Z.test(h.querySelectorAll)) && (de((function(e) {
                        f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + F + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
                    })), de((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                    }))), (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function(e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", R)
                    })), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = Z.test(f.compareDocumentPosition), b = t || Z.test(f.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, $ = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === x && b(x, e) ? -1 : t === h || t.ownerDocument === x && b(x, t) ? 1 : d ? O(d, e) - O(d, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            a = t.parentNode,
                            s = [e],
                            o = [t];
                        if (!r || !a) return e === h ? -1 : t === h ? 1 : r ? -1 : a ? 1 : d ? O(d, e) - O(d, t) : 0;
                        if (r === a) return pe(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) o.unshift(n);
                        for (; s[i] === o[i];) i++;
                        return i ? pe(s[i], o[i]) : s[i] === x ? -1 : o[i] === x ? 1 : 0
                    }, h) : h
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== h && p(e), n.matchesSelector && m && !A[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
                        var i = y.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {
                        A(t, !0)
                    }
                    return oe(t, h, null, [e]).length > 0
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== h && p(e), b(e, t)
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== h && p(e);
                    var r = i.attrHandle[t.toLowerCase()],
                        a = r && M.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                    return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                }, oe.escape = function(e) {
                    return (e + "").replace(ie, re)
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function(e) {
                    var t, i = [],
                        r = 0,
                        a = 0;
                    if (c = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort($), c) {
                        for (; t = e[a++];) t === e[a] && (r = i.push(a));
                        for (; r--;) e.splice(i[r], 1)
                    }
                    return d = null, e
                }, r = oe.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                        } else if (3 === a || 4 === a) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += r(t);
                    return n
                }, i = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && E(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var r = oe.attr(i, e);
                                return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var a = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                o = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, d, c, p, h, f, m = a !== s ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    g = o && t.nodeName.toLowerCase(),
                                    y = !l && !o,
                                    b = !1;
                                if (v) {
                                    if (a) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (b = (h = (u = (d = (c = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                            if (1 === p.nodeType && ++b && p === t) {
                                                d[e] = [T, h, b];
                                                break
                                            }
                                    } else if (y && (b = h = (u = (d = (c = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === b)
                                        for (;
                                            (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((d = (c = p[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
                                    return (b -= r) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                for (var i, a = r(e, t), s = a.length; s--;) e[i = O(e, a[s])] = !(n[i] = a[s])
                            })) : function(e) {
                                return r(e, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: ue((function(e) {
                            var t = [],
                                n = [],
                                i = o(e.replace(H, "$1"));
                            return i[w] ? ue((function(e, t, n, r) {
                                for (var a, s = i(e, null, r, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                            })) : function(e, r, a) {
                                return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                            }
                        })),
                        has: ue((function(e) {
                            return function(t) {
                                return oe(e, t).length > 0
                            }
                        })),
                        contains: ue((function(e) {
                            return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || r(t)).indexOf(e) > -1
                                }
                        })),
                        lang: ue((function(e) {
                            return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === f
                        },
                        focus: function(e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Q.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ve((function() {
                            return [0]
                        })),
                        last: ve((function(e, t) {
                            return [t - 1]
                        })),
                        eq: ve((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        })),
                        even: ve((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })),
                        odd: ve((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })),
                        lt: ve((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                            return e
                        })),
                        gt: ve((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        }))
                    }
                }, i.pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = he(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = fe(t);

            function ye() {}

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function we(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    a = r || i,
                    s = n && "parentNode" === a,
                    o = C++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, r);
                    return !1
                } : function(t, n, l) {
                    var u, d, c, p = [T, o];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s)
                                if (d = (c = t[w] || (t[w] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((u = d[a]) && u[0] === T && u[1] === o) return p[2] = u[2];
                                    if (d[a] = p, p[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function xe(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function Te(e, t, n, i, r) {
                for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), u && t.push(o)));
                return s
            }

            function Ce(e, t, n, i, r, a) {
                return i && !i[w] && (i = Ce(i)), r && !r[w] && (r = Ce(r, a)), ue((function(a, s, o, l) {
                    var u, d, c, p = [],
                        h = [],
                        f = s.length,
                        m = a || function(e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                            return n
                        }(t || "*", o.nodeType ? [o] : o, []),
                        v = !e || !a && t ? m : Te(m, p, e, o, l),
                        g = n ? r || (a ? e : f || i) ? [] : s : v;
                    if (n && n(v, g, o, l), i)
                        for (u = Te(g, h), i(u, [], o, l), d = u.length; d--;)(c = u[d]) && (g[h[d]] = !(v[h[d]] = c));
                    if (a) {
                        if (r || e) {
                            if (r) {
                                for (u = [], d = g.length; d--;)(c = g[d]) && u.push(v[d] = c);
                                r(null, g = [], u, l)
                            }
                            for (d = g.length; d--;)(c = g[d]) && (u = r ? O(a, c) : p[d]) > -1 && (a[u] = !(s[u] = c))
                        }
                    } else g = Te(g === s ? g.splice(f, g.length) : g), r ? r(null, s, g, l) : P.apply(s, g)
                }))
            }

            function Ee(e) {
                for (var t, n, r, a = e.length, s = i.relative[e[0].type], o = s || i.relative[" "], l = s ? 1 : 0, d = we((function(e) {
                        return e === t
                    }), o, !0), c = we((function(e) {
                        return O(t, e) > -1
                    }), o, !0), p = [function(e, n, i) {
                        var r = !s && (i || n !== u) || ((t = n).nodeType ? d(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; l < a; l++)
                    if (n = i.relative[e[l].type]) p = [we(xe(p), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (r = ++l; r < a && !i.relative[e[r].type]; r++);
                            return Ce(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(H, "$1"), n, l < r && Ee(e.slice(l, r)), r < a && Ee(e = e.slice(r)), r < a && be(e))
                        }
                        p.push(n)
                    }
                return xe(p)
            }
            return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = oe.tokenize = function(e, t) {
                var n, r, a, s, o, l, u, d = S[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (o = e, l = [], u = i.preFilter; o;) {
                    for (s in n && !(r = X.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), n = !1, (r = Y.exec(o)) && (n = r.shift(), a.push({
                            value: n,
                            type: r[0].replace(H, " ")
                        }), o = o.slice(n.length)), i.filter) !(r = V[s].exec(o)) || u[s] && !(r = u[s](r)) || (n = r.shift(), a.push({
                        value: n,
                        type: s,
                        matches: r
                    }), o = o.slice(n.length));
                    if (!n) break
                }
                return t ? o.length : o ? oe.error(e) : S(e, l).slice(0)
            }, o = oe.compile = function(e, t) {
                var n, r = [],
                    a = [],
                    o = k[e + " "];
                if (!o) {
                    for (t || (t = s(e)), n = t.length; n--;)(o = Ee(t[n]))[w] ? r.push(o) : a.push(o);
                    o = k(e, function(e, t) {
                        var n = t.length > 0,
                            r = e.length > 0,
                            a = function(a, s, o, l, d) {
                                var c, f, v, g = 0,
                                    y = "0",
                                    b = a && [],
                                    w = [],
                                    x = u,
                                    C = a || r && i.find.TAG("*", d),
                                    E = T += null == x ? 1 : Math.random() || .1,
                                    S = C.length;
                                for (d && (u = s === h || s || d); y !== S && null != (c = C[y]); y++) {
                                    if (r && c) {
                                        for (f = 0, s || c.ownerDocument === h || (p(c), o = !m); v = e[f++];)
                                            if (v(c, s || h, o)) {
                                                l.push(c);
                                                break
                                            }
                                        d && (T = E)
                                    }
                                    n && ((c = !v && c) && g--, a && b.push(c))
                                }
                                if (g += y, n && y !== g) {
                                    for (f = 0; v = t[f++];) v(b, w, s, o);
                                    if (a) {
                                        if (g > 0)
                                            for (; y--;) b[y] || w[y] || (w[y] = z.call(l));
                                        w = Te(w)
                                    }
                                    P.apply(l, w), d && !a && w.length > 0 && g + t.length > 1 && oe.uniqueSort(l)
                                }
                                return d && (T = E, u = x), b
                            };
                        return n ? ue(a) : a
                    }(a, r)), o.selector = e
                }
                return o
            }, l = oe.select = function(e, t, n, r) {
                var a, l, u, d, c, p = "function" == typeof e && e,
                    h = !r && s(e = p.selector || e);
                if (n = n || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (a = V.needsContext.test(e) ? 0 : l.length; a-- && (u = l[a], !i.relative[d = u.type]);)
                        if ((c = i.find[d]) && (r = c(u.matches[0].replace(te, ne), ee.test(l[0].type) && ge(t.parentNode) || t))) {
                            if (l.splice(a, 1), !(e = r.length && be(l))) return P.apply(n, r), n;
                            break
                        }
                }
                return (p || o(e, h))(r, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t), n
            }, n.sortStable = w.split("").sort($).join("") === w, n.detectDuplicates = !!c, p(), n.sortDetached = de((function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            })), de((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ce("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && de((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ce("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), de((function(e) {
                return null == e.getAttribute("disabled")
            })) || ce(j, (function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), oe
        }(e);
    x.find = E, x.expr = E.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = E.uniqueSort, x.text = E.getText, x.isXMLDoc = E.isXML, x.contains = E.contains, x.escapeSelector = E.escape;
    var S = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && x(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = x.expr.match.needsContext;

    function $(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return m(t) ? x.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function(e) {
            return l.call(t, e) > -1 !== n
        })) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                for (t = 0; t < i; t++)
                    if (x.contains(r[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, r[t], n);
            return i > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && A.test(e) ? x(e) : e || [], !1).length
        }
    });
    var z, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var r, a;
        if (!e) return this;
        if (n = n || z, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), M.test(r[1]) && x.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (a = i.getElementById(r[2])) && (this[0] = a, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, z = x(i);
    var P = /^(?:parents|prev(?:Until|All))/,
        _ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && x(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(a.length > 1 ? x.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : ($(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, i) {
            var r = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (_[e] || x.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var j = /[^\x20\t\r\n\f]+/g;

    function F(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function N(e, t, n, i) {
        var r;
        try {
            e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return x.each(e.match(j) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : x.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            o = -1,
            l = function() {
                for (r = r || e.once, i = t = !0; s.length; o = -1)
                    for (n = s.shift(); ++o < a.length;) !1 === a[o].apply(n[0], n[1]) && e.stopOnFalse && (o = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !t && (o = a.length - 1, s.push(n)), function t(n) {
                        x.each(n, (function(n, i) {
                            m(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var n;
                            (n = x.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= o && o--
                    })), this
                },
                has: function(e) {
                    return e ? x.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], n || t || (a = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(t) {
                            x.each(n, (function(n, i) {
                                var r = m(e[i[4]]) && e[i[4]];
                                a[i[1]]((function() {
                                    var e = r && r.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, i, r) {
                        var a = 0;

                        function s(t, n, i, r) {
                            return function() {
                                var o = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < a)) {
                                            if ((e = i.apply(o, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, m(u) ? r ? u.call(e, s(a, n, F, r), s(a, n, I, r)) : (a++, u.call(e, s(a, n, F, r), s(a, n, I, r), s(a, n, F, n.notifyWith))) : (i !== F && (o = void 0, l = [e]), (r || n.resolveWith)(o, l))
                                        }
                                    },
                                    d = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (i !== I && (o = void 0, l = [e]), n.rejectWith(o, l))
                                        }
                                    };
                                t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return x.Deferred((function(e) {
                            n[0][3].add(s(0, e, m(r) ? r : F, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : F)), n[2][3].add(s(0, e, m(i) ? i : I))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                a = {};
            return x.each(n, (function(e, t) {
                var s = t[2],
                    o = t[5];
                r[t[1]] = s.add, o && s.add((function() {
                    i = o
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = s.fireWith
            })), r.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = a.call(arguments),
                s = x.Deferred(),
                o = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (N(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();
            for (; n--;) N(r[n], o(n), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var q = x.Deferred();

    function H() {
        i.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), x.ready()
    }
    x.fn.ready = function(e) {
        return q.then(e).catch((function(e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || q.resolveWith(i, [x]))
        }
    }), x.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var X = function(e, t, n, i, r, a, s) {
            var o = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (o in r = !0, n) X(e, t, o, n[o], !0, a, s);
            else if (void 0 !== i && (r = !0, m(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(x(e), n)
                })), t))
                for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
        },
        Y = /^-ms-/,
        B = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(Y, "ms-").replace(B, W)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function U() {
        this.expando = x.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = n;
            else
                for (i in t) r[G(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(j) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var K = new U,
        Q = new U,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0],
                s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), ee(a, i, r[i]));
                    K.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : X(this, (function(t) {
                var n;
                if (a && void 0 === t) return void 0 !== (n = Q.get(a, e)) || void 0 !== (n = ee(a, e)) ? n : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = x._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, (function() {
                x.dequeue(e, t)
            }), a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    K.remove(e, [t + "queue", n])
                }))
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = x.Deferred(),
                a = this,
                s = this.length,
                o = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = i.documentElement,
        ae = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    re.getRootNode && (ae = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === x.css(e, "display")
        },
        le = function(e, t, n, i) {
            var r, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            for (a in r = n.apply(e, i || []), t) e.style[a] = s[a];
            return r
        };

    function ue(e, t, n, i) {
        var r, a, s = 20,
            o = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = o(),
            u = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (x.cssNumber[t] || "px" !== u && +l) && ne.exec(x.css(e, t));
        if (d && d[3] !== u) {
            for (l /= 2, u = u || d[3], d = +l || 1; s--;) x.style(e, t, d + u), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), d /= a;
            d *= 2, x.style(e, t, d + u), n = n || []
        }
        return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = d, i.end = r)), r
    }
    var de = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = de[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = x.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
    }

    function pe(e, t) {
        for (var n, i, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = K.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && oe(i) && (r[a] = ce(i))) : "none" !== n && (r[a] = "none", K.set(i, "display", n)));
        for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
        return e
    }
    x.fn.extend({
        show: function() {
            return pe(this, !0)
        },
        hide: function() {
            return pe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                oe(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i,
        ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? x.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
    var be, we, xe = /<|&#?\w+;/;

    function Te(e, t, n, i, r) {
        for (var a, s, o, l, u, d, c = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === b(a)) x.merge(p, a.nodeType ? [a] : a);
                else if (xe.test(a)) {
            for (s = s || c.appendChild(t.createElement("div")), o = (fe.exec(a) || ["", ""])[1].toLowerCase(), l = ve[o] || ve._default, s.innerHTML = l[1] + x.htmlPrefilter(a) + l[2], d = l[0]; d--;) s = s.lastChild;
            x.merge(p, s.childNodes), (s = c.firstChild).textContent = ""
        } else p.push(t.createTextNode(a));
        for (c.textContent = "", h = 0; a = p[h++];)
            if (i && x.inArray(a, i) > -1) r && r.push(a);
            else if (u = ae(a), s = ge(c.appendChild(a), "script"), u && ye(s), n)
            for (d = 0; a = s[d++];) me.test(a.type || "") && n.push(a);
        return c
    }
    be = i.createDocumentFragment().appendChild(i.createElement("div")), (we = i.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), be.appendChild(we), f.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Ae() {
        return !1
    }

    function $e(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Me(e, t, n, i, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (i = i || n, n = void 0), t) Me(e, o, n, i, t[o], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ae;
        else if (!r) return e;
        return 1 === a && (s = r, r = function(e) {
            return x().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = x.guid++)), e.each((function() {
            x.event.add(this, t, r, i, n)
        }))
    }

    function De(e, t, n) {
        n ? (K.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = a.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else s.length && (K.set(this, t, {
                    value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, t) && x.event.add(e, t, ke)
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, s, o, l, u, d, c, p, h, f, m, v = K.get(e);
            if (v)
                for (n.handler && (n = (a = n).handler, r = a.selector), r && x.find.matchesSelector(re, r), n.guid || (n.guid = x.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(j) || [""]).length; u--;) h = m = (o = Se.exec(t[u]) || [])[1], f = (o[2] || "").split(".").sort(), h && (c = x.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = x.event.special[h] || {}, d = x.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && x.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, a), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), x.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, u, d, c, p, h, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;)
                    if (h = m = (o = Se.exec(t[u]) || [])[1], f = (o[2] || "").split(".").sort(), h) {
                        for (c = x.event.special[h] || {}, p = l[h = (i ? c.delegateType : c.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) d = p[a], !r && m !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(a, 1), d.selector && p.delegateCount--, c.remove && c.remove.call(e, d));
                        s && !p.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || x.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) x.event.remove(e, h + t[u], n, i, !0);
                x.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, a, s, o = x.event.fix(e),
                l = new Array(arguments.length),
                u = (K.get(this, "events") || {})[o.type] || [],
                d = x.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
                for (s = x.event.handlers.call(this, o, u), t = 0;
                    (r = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== a.namespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((x.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s, o = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length), s[r] && a.push(i);
                        a.length && o.push({
                            elem: u,
                            handlers: a
                        })
                    }
            return u = this, l < t.length && o.push({
                elem: u,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && $(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && $(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && $(t, "input") && K.get(t, "click") || $(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ae,
        isPropagationStopped: Ae,
        isImmediatePropagationStopped: Ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return De(this, e, $e), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), x.fn.extend({
        on: function(e, t, n, i) {
            return Me(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Me(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function() {
                x.event.remove(this, e, n, t)
            }))
        }
    });
    var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Fe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        var n, i, r, a, s, o, l, u;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e), s = K.set(t, a), u = a.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) x.event.add(t, r, u[r][n]);
            Q.hasData(e) && (o = Q.access(e), l = x.extend({}, o), Q.set(t, l))
        }
    }

    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, i) {
        t = s.apply([], t);
        var r, a, o, l, u, d, c = 0,
            p = e.length,
            h = p - 1,
            v = t[0],
            g = m(v);
        if (g || p > 1 && "string" == typeof v && !f.checkClone && Pe.test(v)) return e.each((function(r) {
            var a = e.eq(r);
            g && (t[0] = v.call(this, r, a.html())), Re(a, t, n, i)
        }));
        if (p && (a = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (o = x.map(ge(r, "script"), je)).length; c < p; c++) u = r, c !== h && (u = x.clone(u, !0, !0), l && x.merge(o, ge(u, "script"))), n.call(e[c], u, c);
            if (l)
                for (d = o[o.length - 1].ownerDocument, x.map(o, Fe), c = 0; c < l; c++) u = o[c], me.test(u.type || "") && !K.access(u, "globalEval") && x.contains(d, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && !u.noModule && x._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : y(u.textContent.replace(_e, ""), u, d))
        }
        return e
    }

    function qe(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || x.cleanData(ge(i)), i.parentNode && (n && ae(i) && ye(ge(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, a, s, o = e.cloneNode(!0),
                l = ae(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = ge(o), i = 0, r = (a = ge(e)).length; i < r; i++) Ne(a[i], s[i]);
            if (t)
                if (n)
                    for (a = a || ge(e), s = s || ge(o), i = 0, r = a.length; i < r; i++) Ie(a[i], s[i]);
                else Ie(e, o);
            return (s = ge(o, "script")).length > 0 && ye(s, !l && ge(e, "script")), o
        },
        cleanData: function(e) {
            for (var t, n, i, r = x.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (V(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return X(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Re(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Re(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return x.clone(this, e, t)
            }))
        },
        html: function(e) {
            return X(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !ve[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], r = x(e), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), x(r[s])[t](n), o.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Xe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ye = new RegExp(ie.join("|"), "i");

    function Be(e, t, n) {
        var i, r, a, s, o = e.style;
        return (n = n || Xe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = x.style(e, t)), !f.pixelBoxStyles() && He.test(s) && Ye.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function We(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (d) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(d);
                var t = e.getComputedStyle(d);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", o = 36 === n(t.right), a = 36 === n(t.width), d.style.position = "absolute", s = 12 === n(d.offsetWidth / 3), re.removeChild(u), d = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, a, s, o, l, u = i.createElement("div"),
            d = i.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function() {
                return t(), a
            },
            pixelBoxStyles: function() {
                return t(), o
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var Ge = ["Webkit", "Moz", "ms"],
        Ve = i.createElement("div").style,
        Ue = {};

    function Ke(e) {
        var t = x.cssProps[e] || Ue[e];
        return t || (e in Ve ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                if ((e = Ge[n] + t) in Ve) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function tt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function nt(e, t, n, i, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= x.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= x.css(e, "border" + ie[s] + "Width", !0, r))) : (l += x.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += x.css(e, "border" + ie[s] + "Width", !0, r) : o += x.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0), l
    }

    function it(e, t, n) {
        var i = Xe(e),
            r = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
            a = r,
            s = Be(e, t, i),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === x.css(e, "boxSizing", !1, i), (a = o in e) && (s = e[o])), (s = parseFloat(s) || 0) + nt(e, t, n || (r ? "border" : "content"), a, i, s) + "px"
    }

    function rt(e, t, n, i, r) {
        return new rt.prototype.init(e, t, n, i, r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = G(t),
                    l = Ze.test(t),
                    u = e.style;
                if (l || (t = Ke(o)), s = x.cssHooks[t] || x.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" === (a = typeof n) && (r = ne.exec(n)) && r[1] && (n = ue(e, t, r), a = "number"), null != n && n == n && ("number" !== a || l || (n += r && r[3] || (x.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, a, s, o = G(t);
            return Ze.test(t) || (t = Ke(o)), (s = x.cssHooks[t] || x.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
        }
    }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : le(e, Je, (function() {
                    return it(e, t, i)
                }))
            },
            set: function(e, n, i) {
                var r, a = Xe(e),
                    s = !f.scrollboxSize() && "absolute" === a.position,
                    o = (s || i) && "border-box" === x.css(e, "boxSizing", !1, a),
                    l = i ? nt(e, t, i, o, a) : 0;
                return o && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - nt(e, t, "border", !1, a) - .5)), l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = x.css(e, t)), tt(0, n, l)
            }
        }
    })), x.cssHooks.marginLeft = We(f.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = tt)
    })), x.fn.extend({
        css: function(e, t) {
            return X(this, (function(e, t, n) {
                var i, r, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Xe(e), r = t.length; s < r; s++) a[t[s]] = x.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), x.Tween = rt, rt.prototype = {
        constructor: rt,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rt.propHooks[this.prop];
            return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
        }
    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = rt.prototype.init, x.fx.step = {};
    var at, st, ot = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
        st && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ut) : e.setTimeout(ut, x.fx.interval), x.fx.tick())
    }

    function dt() {
        return e.setTimeout((function() {
            at = void 0
        })), at = Date.now()
    }

    function ct(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function pt(e, t, n) {
        for (var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function ht(e, t, n) {
        var i, r, a = 0,
            s = ht.prefilters.length,
            o = x.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (r) return !1;
                for (var t = at || dt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), a = 0, s = u.tweens.length; a < s; a++) u.tweens[a].run(i);
                return o.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
            },
            u = o.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: at || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                }
            }),
            d = u.props;
        for (! function(e, t) {
                var n, i, r, a, s;
                for (n in e)
                    if (r = t[i = G(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                        for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
                    else t[i] = r
            }(d, u.opts.specialEasing); a < s; a++)
            if (i = ht.prefilters[a].call(u, e, d, u.opts)) return m(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(d, pt, u), m(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    x.Animation = x.extend(ht, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ne.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                m(e) ? (t = e, e = ["*"]) : e = e.match(j);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, a, s, o, l, u, d, c = "width" in t || "height" in t,
                    p = this,
                    h = {},
                    f = e.style,
                    m = e.nodeType && oe(e),
                    v = K.get(e, "fxshow");
                for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || o()
                    }), s.unqueued++, p.always((function() {
                        p.always((function() {
                            s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                        }))
                    }))), t)
                    if (r = t[i], ot.test(r)) {
                        if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i]) continue;
                            m = !0
                        }
                        h[i] = v && v[i] || x.style(e, i)
                    }
                if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                    for (i in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = v && v.display) && (u = K.get(e, "display")), "none" === (d = x.css(e, "display")) && (u ? d = u : (pe([e], !0), u = e.style.display || u, d = x.css(e, "display"), pe([e]))), ("inline" === d || "inline-block" === d && null != u) && "none" === x.css(e, "float") && (l || (p.done((function() {
                            f.display = u
                        })), null == u && (d = f.display, u = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        }))), l = !1, h) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(e, "fxshow", {
                        display: u
                    }), a && (v.hidden = !m), m && pe([e], !0), p.done((function() {
                        for (i in m || pe([e]), K.remove(e, "fxshow"), h) x.style(e, i, h[i])
                    }))), l = pt(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
            }
        }), x.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? x.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                m(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
            }, i
        }, x.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = x.isEmptyObject(e),
                    a = x.speed(t, n, i),
                    s = function() {
                        var t = ht(this, x.extend({}, e), a);
                        (r || K.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = x.timers,
                        s = K.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || x.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = K.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = x.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), x.each(["toggle", "show", "hide"], (function(e, t) {
            var n = x.fn[t];
            x.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, r)
            }
        })), x.each({
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            x.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), x.timers = [], x.fx.tick = function() {
            var e, t = 0,
                n = x.timers;
            for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || x.fx.stop(), at = void 0
        }, x.fx.timer = function(e) {
            x.timers.push(e), x.fx.start()
        }, x.fx.interval = 13, x.fx.start = function() {
            st || (st = !0, ut())
        }, x.fx.stop = function() {
            st = null
        }, x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, x.fn.delay = function(t, n) {
            return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            }))
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var ft, mt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return X(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === a && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && $(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(j);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = mt[t] || x.find.attr;
        mt[t] = function(e, t, i) {
            var r, a, s = t.toLowerCase();
            return i || (a = mt[s], mt[s] = r, r = null != n(e, t, i) ? s : null, mt[s] = a), r
        }
    }));
    var vt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(j) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return X(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, s, o, l = 0;
            if (m(e)) return this.each((function(t) {
                x(this).addClass(e.call(this, t, bt(this)))
            }));
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; a = t[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        r !== (o = yt(i)) && n.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, s, o, l = 0;
            if (m(e)) return this.each((function(t) {
                x(this).removeClass(e.call(this, t, bt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; a = t[s++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        r !== (o = yt(i)) && n.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, bt(this), t), t)
            })) : this.each((function() {
                var t, r, a, s;
                if (i)
                    for (r = 0, a = x(this), s = wt(e); t = s[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = m(e), this.each((function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }))) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : yt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        o = s ? null : [],
                        l = s ? a + 1 : r.length;
                    for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                        if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = x.makeArray(t), s = r.length; s--;)((i = r[s]).selected = x.inArray(x.valHooks.option.get(i), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, n, r, a) {
            var s, o, l, u, d, p, h, f, g = [r || i],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), d = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), h = x.event.special[y] || {}, a || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!a && !h.noBubble && !v(r)) {
                    for (u = h.delegateType || y, Tt.test(u + y) || (o = o.parentNode); o; o = o.parentNode) g.push(o), l = o;
                    l === (r.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (o = g[s++]) && !t.isPropagationStopped();) f = o, t.type = s > 1 ? u : h.bindType || y, (p = (K.get(o, "events") || {})[t.type] && K.get(o, "handle")) && p.apply(o, n), (p = d && o[d]) && p.apply && V(o) && (t.result = p.apply(o, n), !1 === t.result && t.preventDefault());
                return t.type = y, a || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !V(r) || d && m(r[y]) && !v(r) && ((l = r[d]) && (r[d] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, Ct), r[y](), t.isPropagationStopped() && f.removeEventListener(y, Ct), x.event.triggered = void 0, l && (r[d] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t);
                r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t) - 1;
                r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    }));
    var Et = e.location,
        St = Date.now(),
        kt = /\?/;
    x.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        $t = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function zt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) x.each(t, (function(t, r) {
            n || At.test(e) ? i(e, r) : zt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) zt(e + "[" + r + "]", t[r], n, i)
    }
    x.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = m(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
            r(this.name, this.value)
        }));
        else
            for (n in e) zt(n, e[n], t, r);
        return i.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && Dt.test(this.nodeName) && !Mt.test(e) && (this.checked || !he.test(e))
            })).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace($t, "\r\n")
                }
            })).get()
        }
    });
    var Lt = /%20/g,
        Pt = /#.*$/,
        _t = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        It = {},
        Nt = {},
        Rt = "*/".concat("*"),
        qt = i.createElement("a");

    function Ht(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                a = t.toLowerCase().match(j) || [];
            if (m(n))
                for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Xt(e, t, n, i) {
        var r = {},
            a = e === Nt;

        function s(o) {
            var l;
            return r[o] = !0, x.each(e[o] || [], (function(e, o) {
                var u = o(t, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Yt(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    qt.href = Et.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Yt(Yt(e, x.ajaxSettings), t) : Yt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(It),
        ajaxTransport: Ht(Nt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, a, s, o, l, u, d, c, p, h, f = x.ajaxSetup({}, n),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? x(m) : x.event,
                g = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!o)
                                for (o = {}; t = Ot.exec(s);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return d ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == d && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == d && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (d) E.always(e[E.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (g.promise(E), f.url = ((t || f.url || Et.href) + "").replace(Ft, Et.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), Xt(It, f, n, E), d) return E;
            for (p in (c = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), a = f.url.replace(Pt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (h = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (kt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(_t, "$1"), h = (kt.test(a) ? "&" : "?") + "_=" + St++ + h), f.url = a + h), f.ifModified && (x.lastModified[a] && E.setRequestHeader("If-Modified-Since", x.lastModified[a]), x.etag[a] && E.setRequestHeader("If-None-Match", x.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) E.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, E, f) || d)) return E.abort();
            if (C = "abort", y.add(f.complete), E.done(f.success), E.fail(f.error), r = Xt(Nt, f, n, E)) {
                if (E.readyState = 1, c && v.trigger("ajaxSend", [E, f]), d) return E;
                f.async && f.timeout > 0 && (l = e.setTimeout((function() {
                    E.abort("timeout")
                }), f.timeout));
                try {
                    d = !1, r.send(w, S)
                } catch (e) {
                    if (d) throw e;
                    S(-1, e)
                }
            } else S(-1, "No Transport");

            function S(t, n, i, o) {
                var u, p, h, w, T, C = n;
                d || (d = !0, l && e.clearTimeout(l), r = void 0, s = o || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, r, a, s, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in o)
                            if (o[r] && o[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) a = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a]
                }(f, E, i)), w = function(e, t, n, i) {
                    var r, a, s, o, l, u = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (a = d.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = u[l + " " + a] || u["* " + a]))
                            for (r in u)
                                if ((o = r.split(" "))[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (a = o[0], d.unshift(o[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, E, u), u ? (f.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (x.lastModified[a] = T), (T = E.getResponseHeader("etag")) && (x.etag[a] = T)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, u = !(h = w.error))) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", u ? g.resolveWith(m, [p, C, E]) : g.rejectWith(m, [E, C, h]), E.statusCode(b), b = void 0, c && v.trigger(u ? "ajaxSuccess" : "ajaxError", [E, f, u ? p : h]), y.fireWith(m, [E, C]), c && (v.trigger("ajaxComplete", [E, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, i, r) {
            return m(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    })), x._evalUrl = function(e, t) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return m(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = m(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Wt = x.ajaxSettings.xhr();
    f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((function(t) {
        var n, i;
        if (f.cors || Wt && !t.crossDomain) return {
            send: function(r, a) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) o[s] = t.xhrFields[s];
                for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = n(), i = o.onerror = o.ontimeout = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, a) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Gt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || x.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var r, a, s, o = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Vt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || x.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            s = arguments
        }, i.always((function() {
            void 0 === a ? x(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Gt.push(r)), s && m(a) && a(s[0]), s = a = void 0
        })), "script"
    })), f.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (a = M.exec(e)) ? [t.createElement(a[1])] : (a = Te([e], t, s), s && s.length && x(s).remove(), x.merge([], a.childNodes)));
        var r, a, s
    }, x.fn.load = function(e, t, n) {
        var i, r, a, s = this,
            o = e.indexOf(" ");
        return o > -1 && (i = yt(e.slice(o)), e = e.slice(0, o)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            a = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        })).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, a || [e.responseText, t, e])
            }))
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o, l, u = x.css(e, "position"),
                d = x(e),
                c = {};
            "static" === u && (e.style.position = "relative"), o = d.offset(), a = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, n, x.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : d.css(c)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(i, "marginTop", !0),
                    left: t.left - r.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || re
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
            return X(this, (function(e, i, r) {
                var a;
                if (v(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
                a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
            }), e, i, arguments.length)
        }
    })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = We(f.pixelPosition, (function(e, n) {
            if (n) return n = Be(e, t), He.test(n) ? x(e).position()[t] + "px" : n
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            x.fn[i] = function(r, a) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (!0 === r || !0 === a ? "margin" : "border");
                return X(this, (function(t, n, r) {
                    var a;
                    return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? x.css(t, n, o) : x.style(t, n, r, o)
                }), t, s ? r : void 0, s)
            }
        }))
    })), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), x.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = a.call(arguments, 2), r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }, r.guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = $, x.isFunction = m, x.isWindow = v, x.camelCase = G, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }));
    var Ut = e.jQuery,
        Kt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Kt), t && e.jQuery === x && (e.jQuery = Ut), x
    }, t || (e.jQuery = e.$ = x), x
})),
function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function r(e) {
        return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
            return t + n.toUpperCase()
        })).replace(/^-/, "")
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : y ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s(e, n, i, r) {
        var s, o, l, u, d = "modernizr",
            c = a("div"),
            p = function() {
                var e = t.body;
                return e || ((e = a(y ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(i, 10))
            for (; i--;)(l = a("div")).id = r ? r[i] : d + (i + 1), c.appendChild(l);
        return (s = a("style")).type = "text/css", s.id = "s" + d, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = g.style.overflow, g.style.overflow = "hidden", g.appendChild(p)), o = n(c, e), p.fake ? (p.parentNode.removeChild(p), g.style.overflow = u, g.offsetHeight) : c.parentNode.removeChild(c), !!o
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function u(e) {
        return e.replace(/([A-Z])/g, (function(e, t) {
            return "-" + t.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function d(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(u(t[r]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; r--;) a.push("(" + u(t[r]) + ":" + i + ")");
            return s("@supports (" + (a = a.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                return "absolute" == getComputedStyle(e, null).position
            }))
        }
        return n
    }

    function c(e, t, s, l) {
        function u() {
            p && (delete k.style, delete k.modElem)
        }
        if (l = !i(l, "undefined") && l, !i(s, "undefined")) {
            var c = d(e, s);
            if (!i(c, "undefined")) return c
        }
        for (var p, h, f, m, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) p = !0, k.modElem = a(g.shift()), k.style = k.modElem.style;
        for (f = e.length, h = 0; f > h; h++)
            if (m = e[h], v = k.style[m], o(m, "-") && (m = r(m)), k.style[m] !== n) {
                if (l || i(s, "undefined")) return u(), "pfx" != t || m;
                try {
                    k.style[m] = s
                } catch (e) {}
                if (k.style[m] != v) return u(), "pfx" != t || m
            }
        return u(), !1
    }

    function p(e, t, n, r, a) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + T.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? c(o, t, r, a) : function(e, t, n) {
            var r;
            for (var a in e)
                if (e[a] in t) return !1 === n ? e[a] : i(r = t[e[a]], "function") ? l(r, n || t) : r;
            return !1
        }(o = (e + " " + E.join(s + " ") + s).split(" "), t, n)
    }
    var h = [],
        f = [],
        m = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout((function() {
                    t(n[e])
                }), 0)
            },
            addTest: function(e, t, n) {
                f.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                f.push({
                    name: null,
                    fn: e
                })
            }
        },
        v = function() {};
    v.prototype = m, v = new v;
    var g = t.documentElement,
        y = "svg" === g.nodeName.toLowerCase(),
        b = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    m._prefixes = b;
    var w = m.testStyles = s;
    v.addTest("touchevents", (function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var i = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            w(i, (function(e) {
                n = 9 === e.offsetTop
            }))
        }
        return n
    }));
    var x = "Moz O ms Webkit",
        T = m._config.usePrefixes ? x.split(" ") : [];
    m._cssomPrefixes = T;
    var C = function(t) {
        var i, r = b.length,
            a = e.CSSRule;
        if (void 0 === a) return n;
        if (!t) return !1;
        if ((i = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in a) return "@" + t;
        for (var s = 0; r > s; s++) {
            var o = b[s];
            if (o.toUpperCase() + "_" + i in a) return "@-" + o.toLowerCase() + "-" + t
        }
        return !1
    };
    m.atRule = C;
    var E = m._config.usePrefixes ? x.toLowerCase().split(" ") : [];
    m._domPrefixes = E;
    var S = {
        elem: a("modernizr")
    };
    v._q.push((function() {
        delete S.elem
    }));
    var k = {
        style: S.elem.style
    };
    v._q.unshift((function() {
        delete k.style
    })), m.testAllProps = p;
    var A = m.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? C(e) : (-1 != e.indexOf("-") && (e = r(e)), t ? p(e, t, n) : p(e, "pfx"))
    };
    v.addTest("backgroundblendmode", A("backgroundBlendMode", "text")), v.addTest("objectfit", !!A("objectFit"), {
            aliases: ["object-fit"]
        }),
        function() {
            var e, t, n, r, a, s;
            for (var o in f)
                if (f.hasOwnProperty(o)) {
                    if (e = [], (t = f[o]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (r = i(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) 1 === (s = e[a].split(".")).length ? v[s[0]] = r : (!v[s[0]] || v[s[0]] instanceof Boolean || (v[s[0]] = new Boolean(v[s[0]])), v[s[0]][s[1]] = r), h.push((r ? "" : "no-") + s.join("-"))
                }
        }(),
        function(e) {
            var t = g.className,
                n = v._config.classPrefix || "";
            if (y && (t = t.baseVal), v._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            v._config.enableClasses && (t += " " + n + e.join(" " + n), y ? g.className.baseVal = t : g.className = t)
        }(h), delete m.addTest, delete m.addAsyncTest;
    for (var $ = 0; $ < v._q.length; $++) v._q[$]();
    e.Modernizr = v
}(window, document),
function(e, t) {
    "function" == typeof define && define.amd ? define([], (function() {
        return e.svg4everybody = t()
    })) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, (function() {
    function e(e, t, n) {
        if (n) {
            var i = document.createDocumentFragment(),
                r = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            r && t.setAttribute("viewBox", r);
            for (var a = n.cloneNode(!0); a.childNodes.length;) i.appendChild(a.firstChild);
            e.appendChild(i)
        }
    }

    function t(t) {
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || ((n = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map((function(i) {
                    var r = t._cachedTarget[i.id];
                    r || (r = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, r)
                }))
            }
        }, t.onreadystatechange()
    }

    function n(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return function(i) {
        var r, a = Object(i),
            s = window.top !== window.self;
        r = "polyfill" in a ? a.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && s;
        var o = {},
            l = window.requestAnimationFrame || setTimeout,
            u = document.getElementsByTagName("use"),
            d = 0;
        r && function i() {
            for (var s = 0; s < u.length;) {
                var c = u[s],
                    p = c.parentNode,
                    h = n(p),
                    f = c.getAttribute("xlink:href") || c.getAttribute("href");
                if (!f && a.attributeName && (f = c.getAttribute(a.attributeName)), h && f) {
                    if (r)
                        if (!a.validate || a.validate(f, h, c)) {
                            p.removeChild(c);
                            var m = f.split("#"),
                                v = m.shift(),
                                g = m.join("#");
                            if (v.length) {
                                var y = o[v];
                                y || ((y = o[v] = new XMLHttpRequest).open("GET", v), y.send(), y._embeds = []), y._embeds.push({
                                    parent: p,
                                    svg: h,
                                    id: g
                                }), t(y)
                            } else e(p, h, document.getElementById(g))
                        } else ++s, ++d
                } else ++s
            }(!u.length || u.length - d > 0) && l(i, 67)
        }()
    }
})),
/*!
 * Bootstrap util.js v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = e || self).Util = t(e.jQuery)
}(this, (function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t = "transitionend";

    function n(t) {
        var n = this,
            r = !1;
        return e(this).one(i.TRANSITION_END, (function() {
            r = !0
        })), setTimeout((function() {
            r || i.triggerTransitionEnd(n)
        }), t), this
    }
    var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                r = parseFloat(n),
                a = parseFloat(i);
            return r || a ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(n) {
            e(n).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var a = n[r],
                        s = t[r],
                        o = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(a).test(o)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + o + '" but expected type "' + a + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? i.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    return i.jQueryDetection(), e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    }, i
}));
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t) {
    var n = "BackgroundVideo";
    "function" == typeof define && define.amd ? define([], t(n)) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t(n) : e[n] = t(n)
}(window || module || {}, (function(e) {
    var t = {
            parallax: {
                effect: 1.5
            },
            pauseVideoOnViewLoss: !1,
            preventContextMenu: !1,
            minimumVideoWidth: 400,
            onBeforeReady: function() {},
            onReady: function() {}
        },
        n = function(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        };
    return function() {
        function e(n, i) {
            _classCallCheck(this, e), this.element = document.querySelectorAll(n), this.options = _extends({}, t, i), this.options.browserPrexix = this.detectBrowser(), this.shimRequestAnimationFrame(), this.options.has3d = this.detect3d();
            for (var r = 0; r < this.element.length; r++) this.init(this.element[r], r)
        }
        return _createClass(e, [{
            key: "init",
            value: function(e, t) {
                this.el = e, this.playEvent = this.videoReadyCallback.bind(this), this.setVideoWrap(t), this.setVideoProperties(), this.insertVideos(), this.options && this.options.onBeforeReady() && this.options.onBeforeReady(), this.el.readyState > 3 ? this.videoReadyCallback() : (this.el.addEventListener("canplaythrough", this.playEvent, !1), this.el.addEventListener("canplay", this.playEvent, !1)), this.options.preventContextMenu && this.el.addEventListener("contextmenu", (function() {
                    return !1
                }))
            }
        }, {
            key: "videoReadyCallback",
            value: function() {
                this.el.removeEventListener("canplaythrough", this.playEvent, !1), this.el.removeEventListener("canplay", this.playEvent, !1), this.options.originalVideoW = this.el.videoWidth, this.options.originalVideoH = this.el.videoHeight, this.bindEvents(), this.requestTick(), this.options && this.options.onReady() && this.options.onReady()
            }
        }, {
            key: "bindEvents",
            value: function() {
                this.ticking = !1, this.options.parallax && window.addEventListener("scroll", this.requestTick.bind(this)), window.addEventListener("resize", this.requestTick.bind(this))
            }
        }, {
            key: "requestTick",
            value: function() {
                this.ticking || (this.ticking = !0, window.requestAnimationFrame(this.positionObject.bind(this))), this.ticking = !1
            }
        }, {
            key: "positionObject",
            value: function() {
                var e = window.pageYOffset,
                    t = this.scaleObject(),
                    n = t.xPos,
                    i = t.yPos;
                i = this.options.parallax ? e >= 0 ? this.calculateYPos(i, e) : this.calculateYPos(i, 0) : -i;
                var r = this.options.has3d ? "translate3d(" + n + "px, " + i + "px, 0)" : "translate(" + n + "px, " + i + "px)";
                this.el.style["" + this.options.browserPrexix] = r, this.el.style.transform = r
            }
        }, {
            key: "scaleObject",
            value: function() {
                var e = window.innerWidth,
                    t = window.innerHeight,
                    n = e / this.options.originalVideoW,
                    i = t / this.options.originalVideoH,
                    r = void 0;
                this.options.bvVideoWrap.style.width = e + "px", this.options.bvVideoWrap.style.height = t + "px", (r = n > i ? n : i) * this.options.originalVideoW < this.options.minimumVideoWidth && (r = this.options.minimumVideoWidth / this.options.originalVideoW);
                var a = r * this.options.originalVideoW,
                    s = r * this.options.originalVideoH;
                return this.el.style.width = a + "px", this.el.style.height = s + "px", {
                    xPos: -parseInt((a - e) / 2),
                    yPos: parseInt(s - t) / 2
                }
            }
        }, {
            key: "calculateYPos",
            value: function(e, t) {
                return e = -((parseInt(this.options.bvVideoWrap.offsetTop) - t) / this.options.parallax.effect + e)
            }
        }, {
            key: "setVideoWrap",
            value: function(e) {
                var t = document.createElement("div");
                this.options.bvVideoWrapClass = this.el.className + "-wrap-" + e, n(t, "bv-video-wrap"), n(t, this.options.bvVideoWrapClass), t.style.position = "relative", t.style.overflow = "hidden", t.style.zIndex = "10", this.el.parentNode.insertBefore(t, this.el), t.appendChild(this.el), this.options.bvVideoWrap = document.querySelector("." + this.options.bvVideoWrapClass)
            }
        }, {
            key: "setVideoProperties",
            value: function() {
                this.el.setAttribute("preload", "metadata"), this.el.setAttribute("loop", "true"), this.el.setAttribute("autoplay", "true"), this.el.style.position = "absolute", this.el.style.zIndex = "1"
            }
        }, {
            key: "insertVideos",
            value: function() {
                for (var e = 0; e < this.options.src.length; e++) {
                    var t = this.options.src[e].split("."),
                        n = t[t.length - 1];
                    this.addSourceToVideo(this.options.src[e], "video/" + n)
                }
            }
        }, {
            key: "addSourceToVideo",
            value: function(e, t) {
                var n = document.createElement("source");
                n.src = e, n.type = t, this.el.appendChild(n)
            }
        }, {
            key: "detectBrowser",
            value: function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = void 0;
                return e.indexOf("chrome") > -1 || e.indexOf("safari") > -1 ? t = "webkitTransform" : e.indexOf("firefox") > -1 ? t = "MozTransform" : -1 !== e.indexOf("MSIE") || e.indexOf("Trident/") > 0 ? t = "msTransform" : e.indexOf("Opera") > -1 && (t = "OTransform"), t
            }
        }, {
            key: "shimRequestAnimationFrame",
            value: function() {
                for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                    var i = (new Date).getTime(),
                        r = Math.max(0, 16 - (i - e)),
                        a = window.setTimeout((function() {
                            t(i + r)
                        }), r);
                    return e = i + r, a
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                })
            }
        }, {
            key: "detect3d",
            value: function() {
                var e, t, n = document.createElement("p"),
                    i = {
                        WebkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        MSTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                for (e in document.body.insertBefore(n, document.body.lastChild), i) void 0 !== n.style[e] && (n.style[e] = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", t = window.getComputedStyle(n).getPropertyValue(i[e]));
                return n.parentNode.removeChild(n), void 0 !== t && "none" !== t
            }
        }]), e
    }()
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (this.length) {
                var n = e.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", (function(t) {
                    n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                })), this.on("submit.validate", (function(t) {
                    function i() {
                        var i, r;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r)
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                }))), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each((function() {
                (t = n.element(this) && t) || (i = i.concat(n.errorList))
            })), n.errorList = i), t
        },
        rules: function(t, n) {
            var i, r, a, s, o, l, u = this[0],
                d = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != u && (!u.form && d && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
                if (t) switch (i = e.data(u.form, "validator").settings, r = i.rules, a = e.validator.staticRules(u), t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(n)), delete a.messages, r[u.name] = a, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, e.each(n.split(/\s/), (function(e, t) {
                            l[t] = a[t], delete a[t]
                        })), l) : (delete r[u.name], a)
                }
                return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (o = s.required, delete s.required, s = e.extend({
                    required: o
                }, s)), s.remote && (o = s.remote, delete s.remote, s = e.extend(s, {
                    remote: o
                })), s
            }
        }
    });
    var t = function(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(n) {
            return !t("" + e(n).val())
        },
        filled: function(n) {
            var i = e(n).val();
            return null !== i && !!t("" + i)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (void 0 === n || (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, (function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), (function() {
                return n
            }))
        }))), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, n) {
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    if (!this.form && n && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), i === this.form) {
                        var r = e.data(this.form, "validator"),
                            a = "on" + t.type.replace(/^validate/, ""),
                            s = r.settings;
                        s[a] && !e(this).is(s.ignore) && s[a].call(r, this, t)
                    }
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.currentForm,
                    r = this.groups = {};
                e.each(this.settings.groups, (function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, (function(e, n) {
                        r[n] = t
                    }))
                })), n = this.settings.rules, e.each(n, (function(t, i) {
                    n[t] = e.validator.normalizeRule(i)
                })), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var n, i, r = this.clean(t),
                    a = this.validationTargetFor(r),
                    s = this,
                    o = !0;
                return void 0 === a ? delete this.invalid[r.name] : (this.prepareElement(a), this.currentElements = e(a), (i = this.groups[a.name]) && e.each(this.groups, (function(e, t) {
                    t === i && e !== a.name && ((r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r), o = s.check(r) && o))
                })), n = !1 !== this.check(a), o = o && n, this.invalid[a.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), o
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, (function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    })), this.successList = e.grep(this.successList, (function(e) {
                        return !(e.name in t)
                    }))
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, (function(e) {
                    return e.element.name === t.name
                })).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                    var i = this.name || e(this).attr("name"),
                        r = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = e(this).closest("form")[0], this.name = i), !(this.form !== t.currentForm || i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0))
                }))
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n, i, r = e(t),
                    a = t.type,
                    s = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = s ? r.text() : r.val(), "file" === a ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, a, s = e(t).rules(),
                    o = e.map(s, (function(e, t) {
                        return t
                    })).length,
                    l = !1,
                    u = this.elementValue(t);
                for (i in "function" == typeof s.normalizer ? a = s.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a && (u = a.call(t, u), delete s.normalizer), s) {
                    r = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, u, t, r.parameters)) && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                    }
                }
                if (!l) return this.objectLength(s) && this.successList.push(t), !0
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map((function() {
                    return this.element
                }))
            },
            showLabel: function(t, n) {
                var i, r, a, s, o = this.errorsFor(t),
                    l = this.idOrName(t),
                    u = e(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(n)) : (i = o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = o.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (u += " " + a) : u = a, e(t).attr("aria-describedby", u), (r = this.groups[t.name]) && (s = this, e.each(s.groups, (function(t, n) {
                    n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                }))))), !n && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var n = this.escapeCssMeta(this.idOrName(t)),
                    i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, n) {
                return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), (function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            })), n
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(t) {
            var n, i, r = {},
                a = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = a.attr(n), this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(t) {
            var n, i, r = {},
                a = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) "" === (i = a.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(r, s, n, i);
            return r
        },
        staticRules: function(t) {
            var n = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, (function(i, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var a = !0;
                        switch (typeof r.depends) {
                            case "string":
                                a = !!e(r.depends, n.form).length;
                                break;
                            case "function":
                                a = r.depends.call(n, n)
                        }
                        a ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
                    }
                } else delete t[i]
            })), e.each(t, (function(e, i) {
                t[e] = "function" == typeof i && "normalizer" !== e ? i(n) : i
            })), e.each(["minlength", "maxlength"], (function() {
                t[this] && (t[this] = Number(t[this]))
            })), e.each(["rangelength", "range"], (function() {
                var e;
                t[this] && (Array.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (e = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(e[0]), Number(e[1])]))
            })), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), (function() {
                    n[this] = !0
                })), t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : null != t && t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function() {
                var e = !1;
                return function(t, n) {
                    return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(t).toString())
                }
            }(),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n
            },
            maxlength: function(e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n
            },
            rangelength: function(e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n[0] && i <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(t, n, i) {
                var r, a = e(n).attr("type"),
                    s = "Step attribute on input type " + a + " is not supported.",
                    o = new RegExp("\\b" + a + "\\b"),
                    l = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    },
                    u = function(e) {
                        return Math.round(e * Math.pow(10, r))
                    },
                    d = !0;
                if (a && !o.test(["text", "number", "range"].join())) throw new Error(s);
                return r = l(i), (l(t) > r || u(t) % u(i) != 0) && (d = !1), this.optional(n) || d
            },
            equalTo: function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                    e(n).valid()
                })), t === r.val()
            },
            remote: function(t, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var a, s, o, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
                    url: i
                } || i, o = e.param(e.extend({
                    data: t
                }, i.data)), l.old === o ? l.valid : (l.old = o, a = this, this.startRequest(n), (s = {})[n.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: a.currentForm,
                    success: function(e) {
                        var i, s, o, u = !0 === e || "true" === e;
                        a.settings.messages[n.name][r] = l.originalMessage, u ? (o = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(n), a.formSubmitted = o, a.successList.push(n), a.invalid[n.name] = !1, a.showErrors()) : (i = {}, s = e || a.defaultMessage(n, {
                            method: r,
                            parameters: t
                        }), i[n.name] = l.message = s, a.invalid[n.name] = !0, a.showErrors(i)), l.valid = u, a.stopRequest(n, u)
                    }
                }, i)), "pending")
            }
        }
    });
    var n, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter((function(e, t, n) {
        var r = e.port;
        "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
    })) : (n = e.ajax, e.ajax = function(t) {
        var r = ("mode" in t ? t : e.ajaxSettings).mode,
            a = ("port" in t ? t : e.ajaxSettings).port;
        return "abort" === r ? (i[a] && i[a].abort(), i[a] = n.apply(this, arguments), i[a]) : n.apply(this, arguments)
    }), e
})),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = e()
    }
}((function() {
    return function e(t, n, i) {
        function r(s, o) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!o && l) return l(s, !0);
                    if (a) return a(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var d = n[s] = {
                    exports: {}
                };
                t[s][0].call(d.exports, (function(e) {
                    var n = t[s][1][e];
                    return r(n || e)
                }), d, d.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var a = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
        return r
    }({
        1: [function(e, t, n) {
            /*
                        object-assign
                        (c) Sindre Sorhus
                        @license MIT
                        */
            "use strict";
            var i = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;
            t.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var i = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        i[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, t) {
                for (var n, s, o = function(e) {
                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), l = 1; l < arguments.length; l++) {
                    for (var u in n = Object(arguments[l])) r.call(n, u) && (o[u] = n[u]);
                    if (i) {
                        s = i(n);
                        for (var d = 0; d < s.length; d++) a.call(n, s[d]) && (o[s[d]] = n[s[d]])
                    }
                }
                return o
            }
        }, {}],
        2: [function(e, t, n) {
            (function(e) {
                (function() {
                    var n, i, r, a, s, o;
                    "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                        return performance.now()
                    } : null != e && e.hrtime ? (t.exports = function() {
                        return (n() - s) / 1e6
                    }, i = e.hrtime, a = (n = function() {
                        var e;
                        return 1e9 * (e = i())[0] + e[1]
                    })(), o = 1e9 * e.uptime(), s = a - o) : Date.now ? (t.exports = function() {
                        return Date.now() - r
                    }, r = Date.now()) : (t.exports = function() {
                        return (new Date).getTime() - r
                    }, r = (new Date).getTime())
                }).call(this)
            }).call(this, e("_process"))
        }, {
            _process: 3
        }],
        3: [function(e, t, n) {
            var i, r, a = t.exports = {};

            function s() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function l(e) {
                if (i === setTimeout) return setTimeout(e, 0);
                if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
                try {
                    return i(e, 0)
                } catch (t) {
                    try {
                        return i.call(null, e, 0)
                    } catch (t) {
                        return i.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    i = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    i = s
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    r = o
                }
            }();
            var u, d = [],
                c = !1,
                p = -1;

            function h() {
                c && u && (c = !1, u.length ? d = u.concat(d) : p = -1, d.length && f())
            }

            function f() {
                if (!c) {
                    var e = l(h);
                    c = !0;
                    for (var t = d.length; t;) {
                        for (u = d, d = []; ++p < t;) u && u[p].run();
                        p = -1, t = d.length
                    }
                    u = null, c = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                return r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function v() {}
            a.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                d.push(new m(e, t)), 1 !== d.length || c || l(f)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = v, a.addListener = v, a.once = v, a.off = v, a.removeListener = v, a.removeAllListeners = v, a.emit = v, a.prependListener = v, a.prependOnceListener = v, a.listeners = function(e) {
                return []
            }, a.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function() {
                return "/"
            }, a.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function() {
                return 0
            }
        }, {}],
        4: [function(e, t, n) {
            (function(n) {
                for (var i = e("performance-now"), r = "undefined" == typeof window ? n : window, a = ["moz", "webkit"], s = "AnimationFrame", o = r["request" + s], l = r["cancel" + s] || r["cancelRequest" + s], u = 0; !o && u < a.length; u++) o = r[a[u] + "Request" + s], l = r[a[u] + "Cancel" + s] || r[a[u] + "CancelRequest" + s];
                if (!o || !l) {
                    var d = 0,
                        c = 0,
                        p = [];
                    o = function(e) {
                        if (0 === p.length) {
                            var t = i(),
                                n = Math.max(0, 16.666666666666668 - (t - d));
                            d = n + t, setTimeout((function() {
                                var e = p.slice(0);
                                p.length = 0;
                                for (var t = 0; t < e.length; t++)
                                    if (!e[t].cancelled) try {
                                        e[t].callback(d)
                                    } catch (e) {
                                        setTimeout((function() {
                                            throw e
                                        }), 0)
                                    }
                            }), Math.round(n))
                        }
                        return p.push({
                            handle: ++c,
                            callback: e,
                            cancelled: !1
                        }), c
                    }, l = function(e) {
                        for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                    }
                }
                t.exports = function(e) {
                    return o.call(r, e)
                }, t.exports.cancel = function() {
                    l.apply(r, arguments)
                }, t.exports.polyfill = function() {
                    r.requestAnimationFrame = o, r.cancelAnimationFrame = l
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "performance-now": 2
        }],
        5: [function(e, t, n) {
            "use strict";
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
            var r = e("raf"),
                a = e("object-assign"),
                s = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function(e, t, n) {
                        return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e
                    },
                    data: function(e, t) {
                        return s.deserialize(e.getAttribute("data-" + t))
                    },
                    deserialize: function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
                    },
                    camelCase: function(e) {
                        return e.replace(/-+(.)?/g, (function(e, t) {
                            return t ? t.toUpperCase() : ""
                        }))
                    },
                    accelerate: function(e) {
                        s.css(e, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), s.css(e, "transform-style", "preserve-3d"), s.css(e, "backface-visibility", "hidden")
                    },
                    transformSupport: function(e) {
                        for (var t = document.createElement("div"), n = !1, i = null, r = !1, a = null, o = null, l = 0, u = s.vendors.length; l < u; l++)
                            if (null !== s.vendors[l] ? (a = s.vendors[l][0] + "transform", o = s.vendors[l][1] + "Transform") : (a = "transform", o = "transform"), void 0 !== t.style[o]) {
                                n = !0;
                                break
                            }
                        switch (e) {
                            case "2D":
                                r = n;
                                break;
                            case "3D":
                                if (n) {
                                    var d = document.body || document.createElement("body"),
                                        c = document.documentElement,
                                        p = c.style.overflow,
                                        h = !1;
                                    document.body || (h = !0, c.style.overflow = "hidden", c.appendChild(d), d.style.overflow = "hidden", d.style.background = ""), d.appendChild(t), t.style[o] = "translate3d(1px,1px,1px)", r = void 0 !== (i = window.getComputedStyle(t).getPropertyValue(a)) && i.length > 0 && "none" !== i, c.style.overflow = p, d.removeChild(t), h && (d.removeAttribute("style"), d.parentNode.removeChild(d))
                                }
                        }
                        return r
                    },
                    css: function(e, t, n) {
                        var i = s.propertyCache[t];
                        if (!i)
                            for (var r = 0, a = s.vendors.length; r < a; r++)
                                if (i = null !== s.vendors[r] ? s.camelCase(s.vendors[r][1] + "-" + t) : t, void 0 !== e.style[i]) {
                                    s.propertyCache[t] = i;
                                    break
                                }
                        e.style[i] = n
                    }
                },
                o = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                },
                l = function() {
                    function e(t, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.element = t;
                        var i = {
                            calibrateX: s.data(this.element, "calibrate-x"),
                            calibrateY: s.data(this.element, "calibrate-y"),
                            invertX: s.data(this.element, "invert-x"),
                            invertY: s.data(this.element, "invert-y"),
                            limitX: s.data(this.element, "limit-x"),
                            limitY: s.data(this.element, "limit-y"),
                            scalarX: s.data(this.element, "scalar-x"),
                            scalarY: s.data(this.element, "scalar-y"),
                            frictionX: s.data(this.element, "friction-x"),
                            frictionY: s.data(this.element, "friction-y"),
                            originX: s.data(this.element, "origin-x"),
                            originY: s.data(this.element, "origin-y"),
                            pointerEvents: s.data(this.element, "pointer-events"),
                            precision: s.data(this.element, "precision"),
                            relativeInput: s.data(this.element, "relative-input"),
                            clipRelativeInput: s.data(this.element, "clip-relative-input"),
                            hoverOnly: s.data(this.element, "hover-only"),
                            inputElement: document.querySelector(s.data(this.element, "input-element")),
                            selector: s.data(this.element, "selector")
                        };
                        for (var r in i) null === i[r] && delete i[r];
                        a(this, o, i, n), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return i(e, [{
                        key: "initialise",
                        value: function() {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = s.transformSupport("2D"), this.transform3DSupport = s.transformSupport("3D")), this.transform3DSupport && s.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function() {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function() {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var e = 0; e < this.layers.length; e++) {
                                var t = this.layers[e];
                                this.transform3DSupport && s.accelerate(t), t.style.position = e ? "absolute" : "relative", t.style.display = "block", t.style.left = 0, t.style.top = 0;
                                var n = s.data(t, "depth") || 0;
                                this.depthsX.push(s.data(t, "depth-x") || n), this.depthsY.push(s.data(t, "depth-y") || n)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function() {
                            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function(e) {
                            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = r(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), r.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function(e, t) {
                            this.calibrateX = void 0 === e ? this.calibrateX : e, this.calibrateY = void 0 === t ? this.calibrateY : t
                        }
                    }, {
                        key: "invert",
                        value: function(e, t) {
                            this.invertX = void 0 === e ? this.invertX : e, this.invertY = void 0 === t ? this.invertY : t
                        }
                    }, {
                        key: "friction",
                        value: function(e, t) {
                            this.frictionX = void 0 === e ? this.frictionX : e, this.frictionY = void 0 === t ? this.frictionY : t
                        }
                    }, {
                        key: "scalar",
                        value: function(e, t) {
                            this.scalarX = void 0 === e ? this.scalarX : e, this.scalarY = void 0 === t ? this.scalarY : t
                        }
                    }, {
                        key: "limit",
                        value: function(e, t) {
                            this.limitX = void 0 === e ? this.limitX : e, this.limitY = void 0 === t ? this.limitY : t
                        }
                    }, {
                        key: "origin",
                        value: function(e, t) {
                            this.originX = void 0 === e ? this.originX : e, this.originY = void 0 === t ? this.originY : t
                        }
                    }, {
                        key: "setInputElement",
                        value: function(e) {
                            this.inputElement = e, this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function(e, t, n) {
                            t = t.toFixed(this.precision) + "px", n = n.toFixed(this.precision) + "px", this.transform3DSupport ? s.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? s.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t, e.style.top = n)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function() {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function() {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function() {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function() {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var e = this.inputX - this.calibrationX,
                                t = this.inputY - this.calibrationY;
                            (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? t : this.inputY, this.motionY = this.calibrateY ? e : this.inputX) : (this.motionX = this.calibrateX ? e : this.inputX, this.motionY = this.calibrateY ? t : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = s.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = s.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var n = 0; n < this.layers.length; n++) {
                                var i = this.layers[n],
                                    a = this.depthsX[n],
                                    o = this.depthsY[n],
                                    l = this.velocityX * (a * (this.invertX ? -1 : 1)),
                                    u = this.velocityY * (o * (this.invertY ? -1 : 1));
                                this.setPosition(i, l, u)
                            }
                            this.raf = r(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(e, t) {
                            var n = (e || 0) / 30,
                                i = (t || 0) / 30,
                                r = this.windowHeight > this.windowWidth;
                            this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = n, this.calibrationY = i), this.inputX = n, this.inputY = i
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(e) {
                            var t = e.beta,
                                n = e.gamma;
                            null !== t && null !== n && (this.orientationStatus = 1, this.rotate(t, n))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(e) {
                            var t = e.rotationRate.beta,
                                n = e.rotationRate.gamma;
                            null !== t && null !== n && (this.motionStatus = 1, this.rotate(t, n))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(e) {
                            var t = e.clientX,
                                n = e.clientY;
                            if (this.hoverOnly && (t < this.elementPositionX || t > this.elementPositionX + this.elementWidth || n < this.elementPositionY || n > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.elementPositionX), t = Math.min(t, this.elementPositionX + this.elementWidth), n = Math.max(n, this.elementPositionY), n = Math.min(n, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (t - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (n - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (t - this.windowCenterX) / this.windowRadiusX, this.inputY = (n - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var e = 0; e < this.layers.length; e++) this.layers[e].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function() {
                            return "3.1.0"
                        }
                    }]), e
                }();
            t.exports = l
        }, {
            "object-assign": 1,
            raf: 4
        }]
    }, {}, [5])(5)
})),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
}("undefined" != typeof window ? window : global, (function() {
    var e = function(t, n) {
        "use strict";
        var i = Object.create(e.prototype),
            r = 0,
            a = 0,
            s = 0,
            o = 0,
            l = [],
            u = !0,
            d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            },
            c = null,
            p = !1;
        try {
            var h = Object.defineProperty({}, "passive", {
                get: function() {
                    p = !0
                }
            });
            window.addEventListener("testPassive", null, h), window.removeEventListener("testPassive", null, h)
        } catch (e) {}
        var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
            m = window.transformProp || function() {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t = ["Webkit", "Moz", "ms"];
                    for (var n in t)
                        if (void 0 !== e.style[t[n] + "Transform"]) return t[n] + "Transform"
                }
                return "transform"
            }();
        i.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        }, n && Object.keys(n).forEach((function(e) {
            i.options[e] = n[e]
        })), n && n.breakpoints && function() {
            if (3 === i.options.breakpoints.length && Array.isArray(i.options.breakpoints)) {
                var e, t = !0,
                    n = !0;
                if (i.options.breakpoints.forEach((function(i) {
                        "number" != typeof i && (n = !1), null !== e && i < e && (t = !1), e = i
                    })), t && n) return
            }
            i.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
        }(), t || (t = ".rellax");
        var v = "string" == typeof t ? document.querySelectorAll(t) : [t];
        if (v.length > 0) {
            if (i.elems = v, i.options.wrapper && !i.options.wrapper.nodeType) {
                var g = document.querySelector(i.options.wrapper);
                if (!g) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                i.options.wrapper = g
            }
            var y, b = function() {
                    for (var e = 0; e < l.length; e++) i.elems[e].style.cssText = l[e].style;
                    var t, n;
                    l = [], a = window.innerHeight, o = window.innerWidth, t = o, n = i.options.breakpoints, y = t < n[0] ? "xs" : t >= n[0] && t < n[1] ? "sm" : t >= n[1] && t < n[2] ? "md" : "lg", x(),
                        function() {
                            for (var e = 0; e < i.elems.length; e++) {
                                var t = w(i.elems[e]);
                                l.push(t)
                            }
                        }(), S(), u && (window.addEventListener("resize", b), u = !1, E())
                },
                w = function(e) {
                    var t, n = e.getAttribute("data-rellax-percentage"),
                        r = e.getAttribute("data-rellax-speed"),
                        s = e.getAttribute("data-rellax-xs-speed"),
                        l = e.getAttribute("data-rellax-mobile-speed"),
                        u = e.getAttribute("data-rellax-tablet-speed"),
                        d = e.getAttribute("data-rellax-desktop-speed"),
                        c = e.getAttribute("data-rellax-vertical-speed"),
                        p = e.getAttribute("data-rellax-horizontal-speed"),
                        h = e.getAttribute("data-rellax-vertical-scroll-axis"),
                        f = e.getAttribute("data-rellax-horizontal-scroll-axis"),
                        m = e.getAttribute("data-rellax-zindex") || 0,
                        v = e.getAttribute("data-rellax-min"),
                        g = e.getAttribute("data-rellax-max"),
                        b = e.getAttribute("data-rellax-min-x"),
                        w = e.getAttribute("data-rellax-max-x"),
                        x = e.getAttribute("data-rellax-min-y"),
                        C = e.getAttribute("data-rellax-max-y"),
                        E = !0;
                    s || l || u || d ? t = {
                        xs: s,
                        sm: l,
                        md: u,
                        lg: d
                    } : E = !1;
                    var S = i.options.wrapper ? i.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    i.options.relativeToWrapper && (S = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - i.options.wrapper.offsetTop);
                    var k = i.options.vertical && (n || i.options.center) ? S : 0,
                        A = i.options.horizontal && (n || i.options.center) ? i.options.wrapper ? i.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                        $ = k + e.getBoundingClientRect().top,
                        M = e.clientHeight || e.offsetHeight || e.scrollHeight,
                        D = A + e.getBoundingClientRect().left,
                        z = e.clientWidth || e.offsetWidth || e.scrollWidth,
                        L = n || (k - $ + a) / (M + a),
                        P = n || (A - D + o) / (z + o);
                    i.options.center && (P = .5, L = .5);
                    var _ = E && null !== t[y] ? Number(t[y]) : r || i.options.speed,
                        O = c || i.options.verticalSpeed,
                        j = p || i.options.horizontalSpeed,
                        F = h || i.options.verticalScrollAxis,
                        I = f || i.options.horizontalScrollAxis,
                        N = T(P, L, _, O, j),
                        R = e.style.cssText,
                        q = "",
                        H = /transform\s*:/i.exec(R);
                    if (H) {
                        var X = H.index,
                            Y = R.slice(X),
                            B = Y.indexOf(";");
                        q = B ? " " + Y.slice(11, B).replace(/\s/g, "") : " " + Y.slice(11).replace(/\s/g, "")
                    }
                    return {
                        baseX: N.x,
                        baseY: N.y,
                        top: $,
                        left: D,
                        height: M,
                        width: z,
                        speed: _,
                        verticalSpeed: O,
                        horizontalSpeed: j,
                        verticalScrollAxis: F,
                        horizontalScrollAxis: I,
                        style: R,
                        transform: q,
                        zindex: m,
                        min: v,
                        max: g,
                        minX: b,
                        maxX: w,
                        minY: x,
                        maxY: C
                    }
                },
                x = function() {
                    var e = r,
                        t = s;
                    if (r = i.options.wrapper ? i.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, s = i.options.wrapper ? i.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, i.options.relativeToWrapper) {
                        var n = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                        r = n - i.options.wrapper.offsetTop
                    }
                    return !(e == r || !i.options.vertical) || !(t == s || !i.options.horizontal)
                },
                T = function(e, t, n, r, a) {
                    var s = {},
                        o = (a || n) * (100 * (1 - e)),
                        l = (r || n) * (100 * (1 - t));
                    return s.x = i.options.round ? Math.round(o) : Math.round(100 * o) / 100, s.y = i.options.round ? Math.round(l) : Math.round(100 * l) / 100, s
                },
                C = function() {
                    window.removeEventListener("resize", C), window.removeEventListener("orientationchange", C), (i.options.wrapper ? i.options.wrapper : window).removeEventListener("scroll", C), (i.options.wrapper ? i.options.wrapper : document).removeEventListener("touchmove", C), c = d(E)
                },
                E = function() {
                    x() && !1 === u ? (S(), c = d(E)) : (c = null, window.addEventListener("resize", C), window.addEventListener("orientationchange", C), (i.options.wrapper ? i.options.wrapper : window).addEventListener("scroll", C, !!p && {
                        passive: !0
                    }), (i.options.wrapper ? i.options.wrapper : document).addEventListener("touchmove", C, !!p && {
                        passive: !0
                    }))
                },
                S = function() {
                    for (var e, t = 0; t < i.elems.length; t++) {
                        var n = l[t].verticalScrollAxis.toLowerCase(),
                            u = l[t].horizontalScrollAxis.toLowerCase(),
                            d = -1 != n.indexOf("x") ? r : 0,
                            c = -1 != n.indexOf("y") ? r : 0,
                            p = -1 != u.indexOf("x") ? s : 0,
                            h = (c + (-1 != u.indexOf("y") ? s : 0) - l[t].top + a) / (l[t].height + a),
                            f = (d + p - l[t].left + o) / (l[t].width + o),
                            v = (e = T(f, h, l[t].speed, l[t].verticalSpeed, l[t].horizontalSpeed)).y - l[t].baseY,
                            g = e.x - l[t].baseX;
                        null !== l[t].min && (i.options.vertical && !i.options.horizontal && (v = v <= l[t].min ? l[t].min : v), i.options.horizontal && !i.options.vertical && (g = g <= l[t].min ? l[t].min : g)), null != l[t].minY && (v = v <= l[t].minY ? l[t].minY : v), null != l[t].minX && (g = g <= l[t].minX ? l[t].minX : g), null !== l[t].max && (i.options.vertical && !i.options.horizontal && (v = v >= l[t].max ? l[t].max : v), i.options.horizontal && !i.options.vertical && (g = g >= l[t].max ? l[t].max : g)), null != l[t].maxY && (v = v >= l[t].maxY ? l[t].maxY : v), null != l[t].maxX && (g = g >= l[t].maxX ? l[t].maxX : g);
                        var y = l[t].zindex,
                            b = "translate3d(" + (i.options.horizontal ? g : "0") + "px," + (i.options.vertical ? v : "0") + "px," + y + "px) " + l[t].transform;
                        i.elems[t].style[m] = b
                    }
                    i.options.callback(e)
                };
            return i.destroy = function() {
                for (var e = 0; e < i.elems.length; e++) i.elems[e].style.cssText = l[e].style;
                u || (window.removeEventListener("resize", b), u = !0), f(c), c = null
            }, b(), i.refresh = b, i
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    };
    return e
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Splitting = t()
}(this, (function() {
    "use strict";
    var e = document,
        t = e.createTextNode.bind(e);

    function n(e, t, n) {
        e.style.setProperty(t, n)
    }

    function i(e, t) {
        return e.appendChild(t)
    }

    function r(t, n, r, a) {
        var s = e.createElement("span");
        return n && (s.className = n), r && (!a && s.setAttribute("data-" + n, r), s.textContent = r), t && i(t, s) || s
    }

    function a(e, t) {
        return e.getAttribute("data-" + t)
    }

    function s(t, n) {
        return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (n || e).querySelectorAll(t)) : []
    }

    function o(e) {
        for (var t = []; e--;) t[e] = [];
        return t
    }

    function l(e, t) {
        e && e.some(t)
    }

    function u(e) {
        return function(t) {
            return e[t]
        }
    }
    var d = {};

    function c(e, t, n) {
        var i = n.indexOf(e);
        if (-1 == i) n.unshift(e), l(d[e].depends, (function(t) {
            c(t, e, n)
        }));
        else {
            var r = n.indexOf(t);
            n.splice(i, 1), n.splice(r, 0, e)
        }
        return n
    }

    function p(e, t, n, i) {
        return {
            by: e,
            depends: t,
            key: n,
            split: i
        }
    }

    function h(e) {
        return c(e, 0, []).map(u(d))
    }

    function f(e) {
        d[e.by] = e
    }

    function m(e, n, a, o, u) {
        e.normalize();
        var d = [],
            c = document.createDocumentFragment();
        o && d.push(e.previousSibling);
        var p = [];
        return s(e.childNodes).some((function(e) {
            if (!e.tagName || e.hasChildNodes()) {
                if (e.childNodes && e.childNodes.length) return p.push(e), void d.push.apply(d, m(e, n, a, o, u));
                var i = e.wholeText || "",
                    s = i.trim();
                s.length && (" " === i[0] && p.push(t(" ")), l(s.split(a), (function(e, t) {
                    t && u && p.push(r(c, "whitespace", " ", u));
                    var i = r(c, n, e);
                    d.push(i), p.push(i)
                })), " " === i[i.length - 1] && p.push(t(" ")))
            } else p.push(e)
        })), l(p, (function(e) {
            i(c, e)
        })), e.innerHTML = "", i(e, c), d
    }
    var v = "words",
        g = p(v, 0, "word", (function(e) {
            return m(e, "word", /\s+/, 0, 1)
        })),
        y = "chars",
        b = p(y, [v], "char", (function(e, t, n) {
            var i = [];
            return l(n[v], (function(e, n) {
                i.push.apply(i, m(e, "char", "", t.whitespace && n))
            })), i
        }));

    function w(e) {
        var t = (e = e || {}).key;
        return s(e.target || "[data-splitting]").map((function(i) {
            var r = i["🍌"];
            if (!e.force && r) return r;
            r = i["🍌"] = {
                el: i
            };
            var s = h(e.by || a(i, "splitting") || y),
                o = function(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }({}, e);
            return l(s, (function(e) {
                if (e.split) {
                    var a = e.by,
                        s = (t ? "-" + t : "") + e.key,
                        u = e.split(i, o, r);
                    s && function(e, t, i) {
                        var r = "--" + t,
                            a = r + "-index";
                        l(i, (function(e, t) {
                            Array.isArray(e) ? l(e, (function(e) {
                                n(e, a, t)
                            })) : n(e, a, t)
                        })), n(e, r + "-total", i.length)
                    }(i, s, u), r[a] = u, i.classList.add(a)
                }
            })), i.classList.add("splitting"), r
        }))
    }

    function x(e, t, n) {
        var i = s(t.matching || e.children, e),
            r = {};
        return l(i, (function(e) {
            var t = Math.round(e[n]);
            (r[t] || (r[t] = [])).push(e)
        })), Object.keys(r).map(Number).sort(T).map(u(r))
    }

    function T(e, t) {
        return e - t
    }
    w.html = function(e) {
        var t = (e = e || {}).target = r();
        return t.innerHTML = e.content, w(e), t.outerHTML
    }, w.add = f;
    var C = p("lines", [v], "line", (function(e, t, n) {
            return x(e, {
                matching: n[v]
            }, "offsetTop")
        })),
        E = p("items", 0, "item", (function(e, t) {
            return s(t.matching || e.children, e)
        })),
        S = p("rows", 0, "row", (function(e, t) {
            return x(e, t, "offsetTop")
        })),
        k = p("cols", 0, "col", (function(e, t) {
            return x(e, t, "offsetLeft")
        })),
        A = p("grid", ["rows", "cols"]),
        $ = "layout",
        M = p($, 0, 0, (function(e, t) {
            var o = t.rows = +(t.rows || a(e, "rows") || 1),
                l = t.columns = +(t.columns || a(e, "columns") || 1);
            if (t.image = t.image || a(e, "image") || e.currentSrc || e.src, t.image) {
                var u = s("img", e)[0];
                t.image = u && (u.currentSrc || u.src)
            }
            t.image && n(e, "background-image", "url(" + t.image + ")");
            for (var d = o * l, c = [], p = r(0, "cell-grid"); d--;) {
                var h = r(p, "cell");
                r(h, "cell-inner"), c.push(h)
            }
            return i(e, p), c
        })),
        D = p("cellRows", [$], "row", (function(e, t, n) {
            var i = t.rows,
                r = o(i);
            return l(n[$], (function(e, t, n) {
                r[Math.floor(t / (n.length / i))].push(e)
            })), r
        })),
        z = p("cellColumns", [$], "col", (function(e, t, n) {
            var i = t.columns,
                r = o(i);
            return l(n[$], (function(e, t) {
                r[t % i].push(e)
            })), r
        })),
        L = p("cells", ["cellRows", "cellColumns"], "cell", (function(e, t, n) {
            return n[$]
        }));
    return f(g), f(b), f(C), f(E), f(S), f(k), f(A), f(M), f(D), f(z), f(L), w
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.SpriteSpin = {})
}(this, (function(e) {
    "use strict";
    var t = function(e) {
        this.data = e
    };

    function n(e) {
        var n = t.prototype;
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                if (n[i]) throw new Error("API method is already defined: " + i);
                n[i] = e[i]
            }
        return n
    }
    var i, r = window.jQuery || window.$;

    function a(e) {
        var t = e.touches,
            n = e;
        return void 0 === e.touches && void 0 !== e.originalEvent && (t = e.originalEvent.touches), void 0 !== t && t.length > 0 && (n = t[0]), {
            x: n.clientX || 0,
            y: n.clientY || 0
        }
    }

    function s(e, t, n) {
        if (!detectionContext()) return !1;
        if (t * n <= 1048576) return !1;
        canvas.width = canvas.height = 1, context.fillStyle = "#FF00FF", context.fillRect(0, 0, 1, 1), context.drawImage(e, 1 - t, 0);
        try {
            var i = context.getImageData(0, 0, 1, 1).data;
            return 255 === i[0] && 0 === i[1] && 255 === i[2]
        } catch (e) {
            return !1
        }
    }

    function o(e) {
        var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
            n = Math.floor(e.height || e.frameHeight || e.target.innerHeight());
        return {
            aspect: t / n,
            height: n,
            width: t
        }
    }

    function l(e) {
        var t = o(e);
        if ("function" != typeof window.getComputedStyle) return t;
        var n = window.getComputedStyle(e.target[0]);
        return n.width ? (t.width = Math.floor(Number(n.width.replace("px", ""))), t.height = Math.floor(t.width / t.aspect), t) : t
    }

    function u(e) {
        var t = Math.floor(e.frameWidth || e.width || e.target.innerWidth()),
            n = Math.floor(e.frameHeight || e.height || e.target.innerHeight());
        return {
            aspect: t / n,
            height: n,
            width: t
        }
    }

    function d(e, t, n) {
        var i = "fit" === e,
            r = "fill" === e,
            a = {
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                overflow: "hidden"
            };
        if (!e || "stretch" === e) return a;
        var s = t.aspect >= n.aspect,
            o = t.width,
            l = t.height;
        return (i && s || r && !s) && (o = n.width, l = n.width / t.aspect), (r && s || i && !s) && (l = n.height, o = n.height * t.aspect), o = Math.floor(o), l = Math.floor(l), a.width = o, a.height = l, a.top = Math.floor((n.height - l) / 2), a.left = Math.floor((n.width - o) / 2), a.right = a.left, a.bottom = a.top, a
    }

    function c(e) {
        return e.naturalWidth ? {
            height: e.naturalHeight,
            width: e.naturalWidth
        } : ((i = i || new Image).crossOrigin = e.crossOrigin, i.src = e.src, {
            height: i.height,
            width: i.width
        })
    }

    function p(e, t) {
        return 1 === e.length ? [h(e[0], t)] : t.framesX && t.framesY ? function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var r = h(e[i], {
                    frames: void 0,
                    framesX: t.framesX,
                    framesY: t.framesY,
                    detectSubsampling: t.detectSubsampling
                });
                r.id = i, n.push(r)
            }
            return n
        }(e, t) : function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var r = h(e[i], {
                    frames: 1,
                    framesX: 1,
                    detectSubsampling: t.detectSubsampling
                });
                r.id = i, n.push(r)
            }
            return n
        }(e, t)
    }

    function h(e, t) {
        var n = {
            id: 0,
            sprites: []
        };
        ! function(e, t, n) {
            var i = c(e);
            n.isSubsampled = t.detectSubsampling && s(e, i.width, i.height), n.width = i.width, n.height = i.height, n.sampledWidth = i.width / (n.isSubsampled ? 2 : 1), n.sampledHeight = i.height / (n.isSubsampled ? 2 : 1)
        }(e, t, n);
        for (var i = t.frames, r = Number(t.framesX) || i, a = Math.ceil(i / r), o = Math.floor(n.width / r), l = Math.floor(n.height / a), u = n.isSubsampled ? 2 : 1, d = 0; d < i; d++) {
            var p = d % r * o,
                h = Math.floor(d / r) * l;
            n.sprites.push({
                id: d,
                x: p,
                y: h,
                width: o,
                height: l,
                sampledX: p / u,
                sampledY: h / u,
                sampledWidth: o / u,
                sampledHeight: l / u
            })
        }
        return n
    }

    function f(e, t, n, i) {
        for (var r = i * t + n, a = 0, s = null, o = null; o = e[a];) {
            if (!(r >= o.sprites.length)) {
                s = o.sprites[r];
                break
            }
            r -= o.sprites.length, a++
        }
        return {
            sprite: s,
            sheet: o
        }
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e) return n
    }

    function v() {}

    function g(e) {
        var t, n = e.source;
        t = "string" == typeof n ? [n] : n;
        for (var i = [], r = e.preloadCount || t.length, a = e.initiated || v, s = e.progress || v, o = e.complete || v, l = 0, u = !1, d = !1, c = function() {
                l += 1, s({
                    index: m(this, i),
                    loaded: l,
                    total: t.length,
                    percent: Math.round(l / t.length * 100)
                }), (d = d || this === i[0]) && !u && l >= r && (u = !0, o(i))
            }, p = 0, h = t; p < h.length; p++) {
            var f = h[p],
                g = new Image;
            i.push(g), g.crossOrigin = e.crossOrigin, g.onload = g.onabort = g.onerror = c, g.src = f
        }
        a(i)
    }

    function y(e, t, n) {
        for (var i = String(e); i.length < t;) i = String(n) + i;
        return i
    }

    function b(e, t) {
        var n = t.digits || 2,
            i = t.lanePlacer || "{lane}",
            r = t.framePlacer || "{frame}",
            a = 0,
            s = 0;
        t.frame && (a = t.frame[0], s = t.frame[1]);
        var o = 0,
            l = 0;
        t.lane && (o = t.lane[0], l = t.lane[1]);
        for (var u = [], d = o; d <= l; d += 1)
            for (var c = a; c <= s; c += 1) u.push(e.replace(i, y(d, n, "0")).replace(r, y(c, n, "0")));
        return u
    }
    var w = "spritespin",
        x = ["mousedown", "mousemove", "mouseup", "mouseenter", "mouseover", "mouseleave", "mousewheel", "wheel", "click", "dblclick", "touchstart", "touchmove", "touchend", "touchcancel", "selectstart", "gesturestart", "gesturechange", "gestureend"],
        T = ["onInit", "onProgress", "onLoad", "onFrameChanged", "onFrame", "onDraw", "onComplete", "onDestroy"],
        C = ["dragstart"],
        E = {
            source: void 0,
            width: void 0,
            height: void 0,
            frames: void 0,
            framesX: void 0,
            lanes: 1,
            sizeMode: void 0,
            renderer: "canvas",
            lane: 0,
            frame: 0,
            frameTime: 40,
            animate: !0,
            retainAnimate: !1,
            reverse: !1,
            loop: !0,
            stopFrame: 0,
            wrap: !0,
            wrapLane: !1,
            sense: 1,
            senseLane: void 0,
            orientation: "horizontal",
            detectSubsampling: !0,
            preloadCount: void 0,
            touchScrollTimer: [200, 1500],
            responsive: void 0,
            plugins: void 0
        };

    function S() {}

    function k(e) {
        return console && console[e] ? function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return console.log.apply(console, e)
        } : S
    }
    var A = k("log"),
        M = k("warn"),
        D = k("error");

    function z(e) {
        return Array.isArray(e) ? e : [e]
    }

    function L(e, t, n) {
        return e > n ? n : e < t ? t : e
    }

    function P(e, t, n, i) {
        for (; e > n;) e -= i;
        for (; e < t;) e += i;
        return e
    }

    function _(e) {
        return e.preventDefault(), !1
    }

    function O(e, t, n) {
        n && e.bind(t + "." + w, (function(t) {
            n.apply(e, [t, e.spritespin("data")])
        }))
    }

    function j(e) {
        e.unbind("." + w)
    }

    function F(e) {
        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
    }

    function I(e) {
        e.target.attr("unselectable", "on").css({
            width: "",
            height: "",
            "-ms-user-select": "none",
            "-moz-user-select": "none",
            "-khtml-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none"
        });
        var t = e.responsive ? l(e) : o(e),
            n = d(e.sizeMode, u(e), t);
        e.target.css({
            width: t.width,
            height: t.height,
            position: "relative",
            overflow: "hidden"
        }), e.stage.css(n).hide(), e.canvas && (e.canvas.css(n).hide(), e.canvasRatio = e.canvasRatio || F(e.context), "number" == typeof n.width && "number" == typeof n.height ? (e.canvas[0].width = n.width * e.canvasRatio || t.width, e.canvas[0].height = n.height * e.canvasRatio || t.height) : (e.canvas[0].width = t.width * e.canvasRatio, e.canvas[0].height = t.height * e.canvasRatio), e.context.scale(e.canvasRatio, e.canvasRatio))
    }

    function N(e, t) {
        return e.state = e.state || {}, e.state[t] = e.state[t] || {}, e.state[t]
    }

    function R(e, t) {
        var n = N(e, "plugin");
        return n[t] = n[t] || {}, n[t]
    }

    function q(e, t) {
        return !!N(e, "flags")[t]
    }

    function H(e, t, n) {
        N(e, "flags")[t] = !!n
    }

    function X(e) {
        return N(e, "playback")
    }

    function Y(e) {
        X(e).handler && (B(e), function(e) {
            e.frame += e.reverse ? -1 : 1, e.frame = P(e.frame, 0, e.frames - 1, e.frames), e.loop || e.frame !== e.stopFrame || V(e)
        }(e), W(e))
    }

    function B(e) {
        var t = X(e);
        t.lastFrame = e.frame, t.lastLane = e.lane
    }

    function W(e) {
        var t = X(e);
        t.lastFrame === e.frame && t.lastLane === e.lane || e.target.trigger("onFrameChanged." + w, e), e.target.trigger("onFrame." + w, e), e.target.trigger("onDraw." + w, e)
    }

    function G(e, t, n) {
        B(e), null != t && function(e, t) {
            e.frame = Number(t), e.frame = e.wrap ? P(e.frame, 0, e.frames - 1, e.frames) : L(e.frame, 0, e.frames - 1)
        }(e, t), null != n && function(e, t) {
            e.lane = e.wrapLane ? P(t, 0, e.lanes - 1, e.lanes) : L(t, 0, e.lanes - 1)
        }(e, n), W(e)
    }

    function V(e) {
        e.animate = !1;
        var t = X(e);
        null != t.handler && (window.clearInterval(t.handler), t.handler = null)
    }

    function U(e) {
        var t = X(e);
        !t.handler || e.animate && t.frameTime === e.frameTime || V(e), e.animate && !t.handler && (t.frameTime = e.frameTime, t.handler = window.setInterval((function() {
            return Y(e)
        }), t.frameTime))
    }

    function K(e) {
        e.animate = !0, U(e)
    }
    var Q = {};

    function Z(e, t) {
        if (!Q[e]) return t = t || {}, Q[e] = t, t;
        D('Plugin name "' + e + '" is already taken')
    }

    function J(e) {
        return Q[e]
    }

    function ee(e) {
        ! function(e) {
            e.mods && (M('"mods" option is deprecated, use "plugins" instead'), e.plugins = e.mods, delete e.mods);
            e.behavior && (M('"behavior" option is deprecated, use "plugins" instead'), e.plugins.push(e.behavior), delete e.behavior);
            e.module && (M('"module" option is deprecated, use "plugins" instead'), e.plugins.push(e.module), delete e.module)
        }(e);
        for (var t = 0; t < e.plugins.length; t += 1) {
            var n = e.plugins[t];
            if ("string" == typeof n) {
                var i = J(n);
                i ? e.plugins[t] = i : D("No plugin found with name " + n)
            }
        }
    }
    var te = r,
        ne = 0,
        ie = {};

    function re(e) {
        for (var t in ie) ie.hasOwnProperty(t) && e(ie[t])
    }
    var ae = function() {
        function e() {
            re((function(e) {
                e.responsive && oe(e)
            }))
        }
        ae = function() {};
        for (var t = function(e) {
                te(window.document).bind(e + "." + w, (function(t) {
                    ! function(e, t) {
                        re((function(n) {
                            for (var i = 0, r = n.plugins; i < r.length; i++) {
                                var a = r[i];
                                "function" == typeof a[e] && a[e].apply(n.target, [t, n])
                            }
                        }))
                    }("document" + e, t)
                }))
            }, n = 0, i = x; n < i.length; n++) {
            t(i[n])
        }
        var r = null;
        te(window).on("resize", (function() {
            window.clearTimeout(r), r = window.setTimeout(e, 100)
        }))
    };

    function se(e) {
        var t = e.target;
        j(t);
        for (var n = 0, i = C; n < i.length; n++) {
            O(t, h = i[n], _)
        }
        for (var r = 0, a = e.plugins; r < a.length; r++) {
            for (var s = a[r], o = 0, l = x; o < l.length; o++) {
                O(t, h = l[o], s[h])
            }
            for (var u = 0, d = T; u < d.length; u++) {
                O(t, h = d[u], s[h])
            }
        }
        O(t, "onLoad", (function(e, t) {
            U(t)
        }));
        for (var c = 0, p = T; c < p.length; c++) {
            var h;
            O(t, h = p[c], e[h])
        }
    }

    function oe(e) {
        ee(e), se(e), I(e), e.source = z(e.source), e.loading = !0, e.target.addClass("loading").trigger("onInit." + w, e), g({
            source: e.source,
            crossOrigin: e.crossOrigin,
            preloadCount: e.preloadCount,
            progress: function(t) {
                e.progress = t, e.target.trigger("onProgress." + w, e)
            },
            complete: function(t) {
                e.images = t, e.loading = !1, e.frames = e.frames || t.length,
                    function(e) {
                        e.images || (e.metrics = []), e.metrics = p(e.images, e);
                        var t = f(e.metrics, e.frames, 0, 0);
                        t.sprite && (e.frameWidth = t.sprite.width, e.frameHeight = t.sprite.height)
                    }(e), I(e), e.stage.show(), e.target.removeClass("loading").trigger("onLoad." + w, e).trigger("onFrame." + w, e).trigger("onDraw." + w, e).trigger("onComplete." + w, e)
            }
        })
    }

    function le(e) {
        var t = this,
            n = e.target,
            i = te.extend(!0, {}, E, e);
        if (i.source = i.source || [], i.plugins = i.plugins || ["360", "drag"], n.find("img").each((function() {
                Array.isArray(i.source) || (i.source = []), i.source.push(te(t).attr("src"))
            })), n.empty().addClass("spritespin-instance").append("<div class='spritespin-stage'></div>"), "canvas" === i.renderer) {
            var r = document.createElement("canvas");
            r.getContext && r.getContext("2d") ? (i.canvas = te(r).addClass("spritespin-canvas"), i.context = r.getContext("2d"), n.append(i.canvas), n.addClass("with-canvas")) : i.renderer = "image"
        }
        return i.target = n, i.stage = n.find(".spritespin-stage"), n.data(w, i),
            function(e) {
                ne += 1, e.id = String(ne), ie[e.id] = e
            }(i), i
    }

    function ue(e) {
        ae();
        var t = e.target.data(w);
        return t ? te.extend(t, e) : t = le(e), oe(t), t
    }

    function de(e) {
        ! function(e) {
            delete ie[e.id]
        }(e), V(e), e.target.trigger("onDestroy", e).html(null).attr("style", null).attr("unselectable", null).removeClass(["spritespin-instance", "with-canvas"]), j(e.target), e.target.removeData(w)
    }

    function ce(e) {
        return N(e, "input")
    }

    function pe(e, t) {
        var n = a(e),
            i = ce(t);
        i.oldX = i.currentX, i.oldY = i.currentY, i.currentX = n.x, i.currentY = n.y, void 0 !== i.oldX && void 0 !== i.oldY || (i.oldX = i.currentX, i.oldY = i.currentY), void 0 !== i.startX && void 0 !== i.startY || (i.startX = i.currentX, i.startY = i.currentY, i.clickframe = t.frame, i.clicklane = t.lane), i.dX = i.currentX - i.startX, i.dY = i.currentY - i.startY, i.ddX = i.currentX - i.oldX, i.ddY = i.currentY - i.oldY, i.ndX = i.dX / t.target.innerWidth(), i.ndY = i.dY / t.target.innerHeight(), i.nddX = i.ddX / t.target.innerWidth(), i.nddY = i.ddY / t.target.innerHeight()
    }

    function he(e) {
        var t = ce(e);
        t.startX = t.startY = void 0, t.currentX = t.currentY = void 0, t.oldX = t.oldY = void 0, t.dX = t.dY = 0, t.ddX = t.ddY = 0, t.ndX = t.ndY = 0, t.nddX = t.nddY = 0
    }

    function fe(e, t) {
        for (var n = 0, i = t; n < i.length; n++) {
            var r = i[n];
            if (e[r] || r in e) return r
        }
        return t[0]
    }
    r.fn[w] = function(e, n) {
        var i, a = r(this);
        if ("data" === e) return a.data(w);
        if ("api" === e) {
            var s = a.data(w);
            return s.api = s.api || new t(s), s.api
        }
        if ("destroy" === e) return a.each((function() {
            var e = a.data(w);
            e && de(e)
        }));
        if (2 === arguments.length && "string" == typeof e && ((i = {})[e] = n, e = i), "object" == typeof e) return ue(r.extend(!0, {
            target: a
        }, e)).target;
        throw new Error("Invalid call to spritespin")
    }, n({
        isPlaying: function() {
            return null != X(this.data).handler
        },
        isLooping: function() {
            return this.data.loop
        },
        toggleAnimation: function() {
            this.isPlaying() ? this.stopAnimation() : this.startAnimation()
        },
        stopAnimation: function() {
            this.data.animate = !1, V(this.data)
        },
        startAnimation: function() {
            this.data.animate = !0, U(this.data)
        },
        loop: function(e) {
            return this.data.loop = e, U(this.data), this
        },
        currentFrame: function() {
            return this.data.frame
        },
        updateFrame: function(e) {
            return G(this.data, e), this
        },
        skipFrames: function(e) {
            var t = this.data;
            return G(t, t.frame + (t.reverse ? -e : +e)), this
        },
        nextFrame: function() {
            return this.skipFrames(1)
        },
        prevFrame: function() {
            return this.skipFrames(-1)
        },
        playTo: function(e, t) {
            var n = this.data;
            if ((t = t || {}).force || n.frame !== e) {
                if (t.nearest) {
                    var i = e - n.frame,
                        r = e > n.frame ? i - n.frames : i + n.frames,
                        a = Math.abs(i) < Math.abs(r) ? i : r;
                    n.reverse = a < 0
                }
                return n.animate = !0, n.loop = !1, n.stopFrame = e, U(n), this
            }
        }
    });
    var me = {
            requestFullscreen: fe(document.documentElement, ["requestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"]),
            exitFullscreen: fe(document, ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"]),
            fullscreenElement: fe(document, ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"]),
            fullscreenEnabled: fe(document, ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"]),
            fullscreenchange: fe(document, ["onfullscreenchange", "onwebkitfullscreenchange", "onmozfullscreenchange", "onMSFullscreenChange"]).replace(/^on/, ""),
            fullscreenerror: fe(document, ["onfullscreenerror", "onwebkitfullscreenerror", "onmozfullscreenerror", "onMSFullscreenError"]).replace(/^on/, "")
        },
        ve = me.fullscreenchange + "." + w + "-fullscreen";

    function ge() {
        r(document).unbind(ve)
    }
    var ye, be = "orientationchange." + w + "-fullscreen";

    function we() {
        r(window).unbind(be)
    }

    function xe() {
        return document[me.fullscreenElement]
    }

    function Te() {
        return !!xe()
    }

    function Ce(e, t) {
        t = t || {};
        var n, i = e.width,
            a = e.height,
            s = e.source,
            o = e.sizeMode,
            l = e.responsive,
            u = function() {
                e.width = window.screen.width, e.height = window.screen.height, e.source = t.source || s, e.sizeMode = t.sizeMode || "fit", e.responsive = !1, oe(e)
            };
        n = function() {
            var t;
            Te() ? (u(), t = u, we(), r(window).bind(be, t)) : (ge(), we(), e.width = i, e.height = a, e.source = s, e.sizeMode = o, e.responsive = l, oe(e))
        }, ge(), r(document).bind(ve, n), (e.target[0] || document.documentElement)[me.requestFullscreen]()
    }
    n({
            fullscreenEnabled: function() {
                return document[me.fullscreenEnabled]
            },
            fullscreenElement: xe,
            exitFullscreen: function() {
                return document[me.exitFullscreen]()
            },
            toggleFullscreen: function(e) {
                ! function(e, t) {
                    Te() ? this.apiRequestFullscreen(t) : this.exitFullscreen()
                }(this.data, e)
            },
            requestFullscreen: function(e) {
                Ce(this.data, e)
            }
        }),
        function() {
            var e = "click";

            function t(e, t) {
                if (!t.loading && t.stage.is(":visible")) {
                    pe(e, t);
                    var n, i, r = ce(t),
                        a = t.target,
                        s = a.offset();
                    "horizontal" === t.orientation ? (n = a.innerWidth() / 2, i = r.currentX - s.left) : (n = a.innerHeight() / 2, i = r.currentY - s.top), G(t, t.frame + (i > n ? 1 : -1))
                }
            }
            Z(e, {
                name: e,
                mouseup: t,
                touchend: t
            })
        }(),
        function() {
            var e = "drag";

            function t(t) {
                return R(t, e)
            }

            function n(e, n) {
                var i = t(n),
                    r = [200, 1500],
                    a = n.touchScrollTimer || r;
                i.minTime = a[0] || r[0], i.maxTime = a[1] || r[1]
            }

            function i(e, n) {
                var i = t(n);
                if (!(n.loading || q(n, "dragging") || n.zoomPinFrame && !n.stage.is(":visible"))) {
                    var r = (new Date).getTime();
                    i.endAt && r - i.endAt > i.maxTime && (i.startAt = null, i.endAt = null), i.startAt && r - i.startAt > i.minTime && e.preventDefault(), i.startAt = r, i.wasPlaying = !!X(n).handler, i.frame = n.frame || 0, i.lane = n.lane || 0, H(n, "dragging", !0), pe(e, n)
                }
            }

            function r(e, n) {
                q(n, "dragging") && (t(n).endAt = (new Date).getTime(), H(n, "dragging", !1), he(n), n.retainAnimate && t(n).wasPlaying && K(n))
            }

            function a(e, n) {
                var i = t(n),
                    r = ce(n);
                if (q(n, "dragging")) {
                    pe(e, n);
                    var a = function(e) {
                            return "number" == typeof e.orientation ? e.orientation * Math.PI / 180 : "horizontal" === e.orientation ? 0 : Math.PI / 2
                        }(n),
                        s = Math.sin(a),
                        o = Math.cos(a),
                        l = (r.nddX * o - r.nddY * s) * n.sense || 0,
                        u = (r.nddX * s + r.nddY * o) * (n.senseLane || n.sense) || 0;
                    i.frame += n.frames * l, i.lane += n.lanes * u;
                    n.frame, n.lane;
                    G(n, Math.floor(i.frame), Math.floor(i.lane)), V(n)
                }
            }
            Z("drag", {
                name: "drag",
                onInit: n,
                mousedown: i,
                mousemove: a,
                mouseup: r,
                documentmousemove: a,
                documentmouseup: r,
                touchstart: i,
                touchmove: a,
                touchend: r,
                touchcancel: r
            }), Z("move", {
                name: "move",
                onInit: n,
                mousemove: function(e, t) {
                    i(e, t), a(e, t)
                },
                mouseleave: r,
                touchstart: i,
                touchmove: a,
                touchend: r,
                touchcancel: r
            })
        }(),
        function() {
            var e = "hold";

            function t(t) {
                return R(t, e)
            }

            function n(e, n) {
                q(n, "loading") || q(n, "dragging") || !n.stage.is(":visible") || (! function(e) {
                    var n = t(e);
                    n.frameTime = e.frameTime, n.animate = e.animate, n.reverse = e.reverse
                }(n), pe(e, n), H(n, "dragging", !0), n.animate = !0, U(n))
            }

            function i(e, n) {
                H(n, "dragging", !1), he(n), V(n),
                    function(e) {
                        var n = t(e);
                        e.frameTime = n.frameTime, e.animate = n.animate, e.reverse = n.reverse
                    }(n), U(n)
            }

            function r(e, t) {
                if (q(t, "dragging")) {
                    pe(e, t);
                    var n, i, r = ce(t),
                        a = t.target,
                        s = a.offset();
                    "horizontal" === t.orientation ? (n = a.innerWidth() / 2, i = (r.currentX - s.left - n) / n) : (n = t.height / 2, i = (r.currentY - s.top - n) / n), t.reverse = i < 0, i = i < 0 ? -i : i, t.frameTime = 80 * (1 - i) + 20, ("horizontal" === t.orientation && r.dX < r.dY || "vertical" === t.orientation && r.dX < r.dY) && e.preventDefault()
                }
            }
            Z(e, {
                name: e,
                mousedown: n,
                mousemove: r,
                mouseup: i,
                mouseleave: i,
                touchstart: n,
                touchmove: r,
                touchend: i,
                touchcancel: i,
                onFrame: function(e, t) {
                    t.animate = !0, U(t)
                }
            })
        }(),
        function() {
            var e = "swipe";

            function t(t) {
                return R(t, e)
            }

            function n(e, t, n) {
                return e[t] || n
            }

            function i(e, t) {
                t.loading || q(t, "dragging") || (pe(e, t), H(t, "dragging", !0))
            }

            function r(e, t) {
                q(t, "dragging") && (pe(e, t), G(t, t.frame, t.lane))
            }

            function a(e, n) {
                if (q(n, "dragging")) {
                    H(n, "dragging", !1);
                    var i, r, a = t(n),
                        s = ce(n),
                        o = n.frame,
                        l = n.lane,
                        u = a.snap,
                        d = a.fling;
                    "horizontal" === n.orientation ? (i = s.ndX, r = s.ddX) : (i = s.ndY, r = s.ddY), i >= u || r >= d ? o = n.frame - 1 : (i <= -u || r <= -d) && (o = n.frame + 1), he(n), G(n, o, l), V(n)
                }
            }
            Z(e, {
                name: e,
                onLoad: function(e, i) {
                    var r = t(i);
                    r.fling = n(i, "swipeFling", 10), r.snap = n(i, "swipeSnap", .5)
                },
                mousedown: i,
                mousemove: r,
                mouseup: a,
                mouseleave: a,
                touchstart: i,
                touchmove: r,
                touchend: a,
                touchcancel: a
            })
        }(), Z(ye = "wheel", {
            name: ye,
            wheel: function(e, t) {
                if (!t.loading && t.stage.is(":visible")) {
                    e.preventDefault();
                    var n = e.originalEvent,
                        i = 0 === n.deltaX ? 0 : n.deltaX > 0 ? 1 : -1,
                        r = 0 === n.deltaY ? 0 : n.deltaY > 0 ? 1 : -1;
                    G(t, t.frame + r, t.lane + i)
                }
            }
        }),
        function() {
            function e(e) {
                return R(e, t)
            }
            var t = "progress";
            Z(t, {
                name: t,
                onInit: function(t, n) {
                    var i = e(n);
                    i.stage || (i.stage = r("\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n"), i.stage.appendTo(n.target)), i.stage.find(".spritespin-progress-label").text("0%").css({
                        "text-align": "center"
                    }), i.stage.find(".spritespin-progress-bar").css({
                        width: "0%"
                    }), i.stage.hide().fadeIn()
                },
                onProgress: function(t, n) {
                    var i = e(n);
                    i.stage.find(".spritespin-progress-label").text(n.progress.percent + "%").css({
                        "text-align": "center"
                    }), i.stage.find(".spritespin-progress-bar").css({
                        width: n.progress.percent + "%"
                    })
                },
                onLoad: function(t, n) {
                    r(e(n).stage).fadeOut()
                },
                onDestroy: function(t, n) {
                    r(e(n).stage).remove()
                }
            })
        }(), Z("360", {
            name: "360",
            onLoad: function(e, t) {
                t.stage.find(".spritespin-frames").detach(), "image" === t.renderer && $(t.images).addClass("spritespin-frames").appendTo(t.stage)
            },
            onDraw: function(e, t) {
                var n = f(t.metrics, t.frames, t.frame, t.lane),
                    i = n.sheet,
                    r = n.sprite;
                if (i && r) {
                    var a = t.source[i.id],
                        s = t.images[i.id];
                    if ("canvas" === t.renderer) {
                        t.canvas.show();
                        var o = t.canvas[0].width / t.canvasRatio,
                            l = t.canvas[0].height / t.canvasRatio;
                        return t.context.clearRect(0, 0, o, l), void t.context.drawImage(s, r.sampledX, r.sampledY, r.sampledWidth, r.sampledHeight, 0, 0, o, l)
                    }
                    var u = t.stage.innerWidth() / r.sampledWidth,
                        d = t.stage.innerHeight() / r.sampledHeight,
                        c = Math.floor(-r.sampledY * d),
                        p = Math.floor(-r.sampledX * u),
                        h = Math.floor(i.sampledWidth * u),
                        m = Math.floor(i.sampledHeight * d);
                    "background" !== t.renderer ? ($(t.images).hide(), $(s).show().css({
                        position: "absolute",
                        top: c,
                        left: p,
                        "max-width": "initial",
                        width: h,
                        height: m
                    })) : t.stage.css({
                        "background-image": "url('" + a + "')",
                        "background-position": p + "px " + c + "px",
                        "background-repeat": "no-repeat",
                        "-webkit-background-size": h + "px " + m + "px",
                        "-moz-background-size": h + "px " + m + "px",
                        "-o-background-size": h + "px " + m + "px",
                        "background-size": h + "px " + m + "px"
                    })
                }
            }
        }),
        function() {
            var e = "blur";

            function t(t) {
                return R(t, e)
            }

            function n(e, t, n) {
                return e[t] || n
            }
            var i = [];

            function a(e) {
                var n = t(e);
                n.timeout = window.setTimeout((function() {
                    ! function(e) {
                        var n = t(e);
                        if (function(e) {
                                var n = t(e);
                                window.clearTimeout(n.timeout), n.timeout = null
                            }(e), !n.context) return;
                        var r = 0;
                        (function(e, t) {
                            t.canvas.show();
                            t.canvas[0].width, e.canvasRatio, t.canvas[0].height, e.canvasRatio
                        })(e, n), n.context.clearRect(0, 0, e.width, e.height);
                        for (var o = 0, l = n.steps; o < l.length; o++) {
                            var u = l[o];
                            u.live = Math.max(u.live - u.step, 0), u.alpha = Math.max(u.live - .25, 0), s(e, n, u), r += u.alpha + u.d
                        }
                        n.cssBlur && function(e, t) {
                            var n = Math.min(Math.max(t / 2 - 4, 0), 2.5),
                                i = "blur(" + n + "px)";
                            e.css({
                                "-webkit-filter": i,
                                filter: i
                            })
                        }(n.canvas, r);
                        (function(e) {
                            i.length = 0;
                            for (var t = 0; t < e.length; t += 1) e[t].alpha <= 0 && i.push(t);
                            for (var n = 0, r = i; n < r.length; n++) {
                                var a = r[n];
                                e.splice(a, 1)
                            }
                        })(n.steps), n.steps.length && a(e)
                    }(e)
                }), n.frameTime)
            }

            function s(e, t, n) {
                if (!(n.alpha <= 0)) {
                    var i = f(e.metrics, e.frames, n.frame, n.lane),
                        r = i.sheet,
                        a = i.sprite;
                    if (r && a) {
                        e.source[r.id];
                        var s = e.images[r.id];
                        if (!1 !== s.complete) {
                            t.canvas.show();
                            var o = t.canvas[0].width / e.canvasRatio,
                                l = t.canvas[0].height / e.canvasRatio;
                            t.context.globalAlpha = n.alpha, t.context.drawImage(s, a.sampledX, a.sampledY, a.sampledWidth, a.sampledHeight, 0, 0, o, l)
                        }
                    }
                }
            }
            Z(e, {
                name: e,
                onLoad: function(e, i) {
                    var a = t(i);
                    a.canvas = a.canvas || r("<canvas class='blur-layer'></canvas>"), a.context = a.context || a.canvas[0].getContext("2d"), a.steps = a.steps || [], a.fadeTime = Math.max(n(i, "blurFadeTime", 200), 1), a.frameTime = Math.max(n(i, "blurFrameTime", i.frameTime), 16), a.trackTime = null, a.cssBlur = !!n(i, "blurCss", !1);
                    var s = u(i),
                        c = i.responsive ? l(i) : o(i),
                        p = d(i.sizeMode, s, c);
                    a.canvas[0].width = i.width * i.canvasRatio, a.canvas[0].height = i.height * i.canvasRatio, a.canvas.css(p).show(), a.context.scale(i.canvasRatio, i.canvasRatio), i.target.append(a.canvas)
                },
                onFrameChanged: function(e, n) {
                    var i = t(n);
                    ! function(e) {
                        var n = t(e),
                            i = X(e),
                            r = Math.abs(e.frame - i.lastFrame);
                        r = r >= e.frames / 2 ? e.frames - r : r, n.steps.unshift({
                            frame: e.frame,
                            lane: e.lane,
                            live: 1,
                            step: n.frameTime / n.fadeTime,
                            d: r,
                            alpha: 0
                        })
                    }(n), null == i.timeout && a(n)
                }
            })
        }(),
        function() {
            var e = Math.max,
                t = Math.min,
                n = "ease";

            function i(e) {
                return R(e, n)
            }

            function r(e, t, n) {
                return e[t] || n
            }

            function a(e, t) {
                q(t, "dragging") && (o(t), function(e) {
                    var t = i(e);
                    t.samples.push({
                        time: (new Date).getTime(),
                        frame: e.frame,
                        lane: e.lane
                    });
                    for (; t.samples.length > t.maxSamples;) t.samples.shift()
                }(t))
            }

            function s(e, t) {
                for (var n, r = i(t), a = r.samples, s = 0, u = 0, d = 0, c = 0, p = a; c < p.length; c++) {
                    var h = p[c];
                    if (n) {
                        var f = h.time - n.time;
                        if (f > r.abortTime) return s = u = d = 0, o(t);
                        u += h.frame - n.frame, s += h.lane - n.lane, d += f, n = h
                    } else n = h
                }
                a.length = 0, d && (r.lane = t.lane, r.lanes = 0, r.laneStep = s / d * r.updateTime, r.frame = t.frame, r.frames = 0, r.frameStep = u / d * r.updateTime, l(t))
            }

            function o(e) {
                var t = i(e);
                null != t.handler && (window.clearTimeout(t.handler), t.handler = null)
            }

            function l(e) {
                var t = i(e);
                t.handler = window.setTimeout((function() {
                    ! function(e) {
                        var t = i(e);
                        t.lanes += t.laneStep, t.frames += t.frameStep, t.laneStep *= t.damping, t.frameStep *= t.damping;
                        var n = Math.floor(t.frame + t.frames),
                            r = Math.floor(t.lane + t.lanes);
                        G(e, n, r), q(e, "dragging") ? o(e) : Math.abs(t.frameStep) > .005 || Math.abs(t.laneStep) > .005 ? l(e) : o(e)
                    }(e)
                }), t.updateTime)
            }
            Z(n, {
                name: n,
                onLoad: function(n, a) {
                    var s = i(a);
                    s.maxSamples = e(r(a, "easeMaxSamples", 5), 0), s.damping = e(t(r(a, "easeDamping", .9), .999), 0), s.abortTime = e(r(a, "easeAbortTime", 250), 16), s.updateTime = e(r(a, "easeUpdateTime", a.frameTime), 16), s.samples = [], s.steps = []
                },
                mousemove: a,
                mouseup: s,
                mouseleave: s,
                touchmove: a,
                touchend: s,
                touchcancel: s
            })
        }(),
        function() {
            var e = "gallery";

            function t(t) {
                return R(t, e)
            }

            function n(e, t, n) {
                return e[t] || n
            }
            Z(e, {
                name: e,
                onLoad: function(e, i) {
                    var a = t(i);
                    a.images = [], a.offsets = [], a.frame = i.frame, a.speed = n(i, "gallerySpeed", 500), a.opacity = n(i, "galleryOpacity", .25), a.stage = n(i, "galleryStage", r("<div></div>")), a.stage.empty().addClass("gallery-stage").prependTo(i.stage);
                    for (var s = 0, p = 0, h = i.images; p < h.length; p++) {
                        var f = h[p],
                            m = c(f),
                            v = i.height / m.height,
                            g = r(f);
                        a.stage.append(g), a.images.push(g), a.offsets.push(-s + (i.width - f.width * v) / 2), s += i.width, g.css({
                            "max-width": "initial",
                            opacity: a.opacity,
                            width: i.width,
                            height: i.height
                        })
                    }
                    var y = u(i),
                        b = i.responsive ? l(i) : o(i),
                        w = d(i.sizeMode, y, b);
                    a.stage.css(w).css({
                        width: s,
                        left: a.offsets[a.frame]
                    }), a.images[a.frame].animate({
                        opacity: 1
                    }, {
                        duration: a.speed
                    })
                },
                onDraw: function(e, n) {
                    var i = t(n),
                        r = ce(n),
                        a = q(n, "dragging");
                    i.frame === n.frame || a ? (a || i.dX !== r.dX) && (i.dX = r.dX, i.ddX = r.ddX, i.stage.stop(!0, !0).css({
                        left: i.offsets[i.frame] + i.dX
                    })) : (i.stage.stop(!0, !1).animate({
                        left: i.offsets[n.frame]
                    }, {
                        duration: i.speed
                    }), i.images[i.frame].animate({
                        opacity: i.opacity
                    }, {
                        duration: i.speed
                    }), i.frame = n.frame, i.images[i.frame].animate({
                        opacity: 1
                    }, {
                        duration: i.speed
                    }), i.stage.animate({
                        left: i.offsets[i.frame]
                    }))
                }
            })
        }(),
        function() {
            var e = "panorama";

            function t(t) {
                return R(t, e)
            }
            Z(e, {
                name: e,
                onLoad: function(e, n) {
                    var i = t(n),
                        r = n.metrics[0];
                    if (r) {
                        "horizontal" === n.orientation ? (i.scale = n.target.innerHeight() / r.sampledHeight, n.frames = r.sampledWidth) : (i.scale = n.target.innerWidth() / r.sampledWidth, n.frames = r.sampledHeight);
                        var a = Math.floor(r.sampledWidth * i.scale),
                            s = Math.floor(r.sampledHeight * i.scale);
                        n.stage.css({
                            "background-image": "url(" + n.source[r.id] + ")",
                            "background-repeat": "repeat-both",
                            "-webkit-background-size": a + "px " + s + "px",
                            "-moz-background-size": a + "px " + s + "px",
                            "-o-background-size": a + "px " + s + "px",
                            "background-size": a + "px " + s + "px"
                        })
                    }
                },
                onDraw: function(e, n) {
                    var i = t(n),
                        r = "horizontal" === n.orientation ? 1 : 0,
                        a = r ? 0 : 1,
                        s = n.frame % n.frames,
                        o = Math.round(r * s * i.scale),
                        l = Math.round(a * s * i.scale);
                    n.stage.css({
                        "background-position": o + "px " + l + "px"
                    })
                }
            })
        }(),
        function() {
            var e = "zoom";

            function t(t) {
                return R(t, e)
            }

            function i(e, t, n) {
                return t in e ? e[t] : n
            }

            function s(e, n) {
                var i = t(n);
                if (i.stage.is(":visible")) {
                    e.preventDefault(), i.pinFrame && H(n, "dragging", !1);
                    var r = a(e),
                        s = r.x / n.width,
                        o = r.y / n.height;
                    null == i.oldX && (i.oldX = s, i.oldY = o), null == i.currentX && (i.currentX = s, i.currentY = o);
                    var l = s - i.oldX,
                        u = o - i.oldY;
                    i.oldX = s, i.oldY = o, e.type.match(/touch/) && (l = -l, u = -u), i.currentX = L(i.currentX + l, 0, 1), i.currentY = L(i.currentY + u, 0, 1), G(n, n.frame, n.lane)
                }
            }

            function o(e, n) {
                var i = t(n);
                if (i.useClick) {
                    e.preventDefault();
                    var r = (new Date).getTime();
                    if (i.clickTime) r - i.clickTime > i.doubleClickTime ? i.clickTime = r : (i.clickTime = void 0, u(n) && s(e, n));
                    else i.clickTime = r
                }
            }

            function l(e, n) {
                t(n).stage.is(":visible") && s(e, n)
            }

            function u(e) {
                var n = t(e);
                if (!n.stage) throw new Error("zoom module is not initialized or is not available.");
                return n.stage.is(":visible") ? (d(e), !1) : (c(e), !0)
            }

            function d(e) {
                t(e).stage.fadeOut(), e.stage.fadeIn()
            }

            function c(e) {
                t(e).stage.fadeIn(), e.stage.fadeOut()
            }
            Z(e, {
                name: e,
                mousedown: o,
                touchstart: o,
                mousemove: l,
                touchmove: l,
                wheel: function(e, n) {
                    var i = t(n);
                    if (!n.loading && i.useWheel) {
                        var r = e.originalEvent,
                            a = 0 === r.deltaY ? 0 : r.deltaY > 0 ? 1 : -1;
                        "number" == typeof i.useWheel && (a *= i.useWheel), i.stage.is(":visible") && a > 0 && (e.preventDefault(), d(n)), !i.stage.is(":visible") && a < 0 && (e.preventDefault(), c(n))
                    }
                },
                onInit: function(e, n) {
                    var a = t(n);
                    a.source = i(n, "zoomSource", n.source), a.useWheel = i(n, "zoomUseWheel", !1), a.useClick = i(n, "zoomUseClick", !0), a.pinFrame = i(n, "zoomPinFrame", !0), a.doubleClickTime = i(n, "zoomDoubleClickTime", 500), a.stage = a.stage || r("<div class='zoom-stage'></div>"), a.stage.css({
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute"
                    }).appendTo(n.target).hide()
                },
                onDestroy: function(e, n) {
                    var i = t(n);
                    i.stage && (i.stage.remove(), delete i.stage)
                },
                onDraw: function(e, n) {
                    var i = t(n),
                        r = n.lane * n.frames + n.frame,
                        a = i.source[r],
                        s = f(n.metrics, n.frames, n.frame, n.lane),
                        o = i.currentX,
                        l = i.currentY;
                    if (null == o && (o = i.currentX = .5, l = i.currentY = .5), a) o = Math.floor(100 * o), l = Math.floor(100 * l), i.stage.css({
                        "background-repeat": "no-repeat",
                        "background-image": "url('" + a + "')",
                        "background-position": o + "% " + l + "%"
                    });
                    else if (s.sheet && s.sprite) {
                        var u = s.sprite,
                            d = s.sheet,
                            c = n.source[d.id],
                            p = -Math.floor(u.sampledX + o * (u.sampledWidth - n.width)),
                            h = -Math.floor(u.sampledY + l * (u.sampledHeight - n.height)),
                            m = d.sampledWidth,
                            v = d.sampledHeight;
                        i.stage.css({
                            "background-image": "url('" + c + "')",
                            "background-position": p + "px " + h + "px",
                            "background-repeat": "no-repeat",
                            "-webkit-background-size": m + "px " + v + "px",
                            "-moz-background-size": m + "px " + v + "px",
                            "-o-background-size": m + "px " + v + "px",
                            "background-size": m + "px " + v + "px"
                        })
                    }
                }
            }), n({
                toggleZoom: function() {
                    u(this.data)
                }
            })
        }();
    var Ee = {
        $: r,
        bind: O,
        clamp: L,
        detectSubsampling: s,
        error: D,
        findSpecs: f,
        getComputedSize: l,
        getCursorPosition: a,
        getInnerLayout: d,
        getInnerSize: u,
        getOuterSize: o,
        isFunction: function(e) {
            return "function" == typeof e
        },
        log: A,
        measure: p,
        naturalSize: c,
        noop: S,
        pixelRatio: F,
        preload: g,
        prevent: _,
        sourceArray: b,
        toArray: z,
        unbind: j,
        warn: M,
        wrap: P
    };
    e.Utils = Ee, e.sourceArray = b, e.Api = t, e.extendApi = n, e.instances = ie, e.applyEvents = se, e.boot = oe, e.create = le, e.createOrUpdate = ue, e.destroy = de, e.namespace = w, e.eventNames = x, e.callbackNames = T, e.eventsToPrevent = C, e.defaults = E, e.getInputState = ce, e.updateInput = pe, e.resetInput = he, e.applyLayout = I, e.getPlaybackState = X, e.updateFrame = G, e.stopAnimation = V, e.applyAnimation = U, e.startAnimation = K, e.registerPlugin = Z, e.registerModule = function(e, t) {
        M('"registerModule" is deprecated, use "registerPlugin" instead'), Z(e, t)
    }, e.getPlugin = J, e.applyPlugins = ee, e.getState = N, e.getPluginState = R, e.is = q, e.flag = H, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    function n(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(r) {
            void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
        }))
    }
    var r = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        var e = "undefined" != typeof document ? document : {};
        return i(e, r), e
    }
    var s = {
        document: r,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function o() {
        var e = "undefined" != typeof window ? window : {};
        return i(e, s), e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e, t, n) {
        return (d = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var r = new(Function.bind.apply(e, i));
            return n && u(r, n.prototype), r
        }).apply(null, arguments)
    }

    function c(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, i)
            }

            function i() {
                return d(e, arguments, l(this).constructor)
            }
            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(i, e)
        })(e)
    }
    var p = function(e) {
        var t, n;

        function i(t) {
            var n, i, r;
            return i = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n = e.call.apply(e, [this].concat(t)) || this), r = i.__proto__, Object.defineProperty(i, "__proto__", {
                get: function() {
                    return r
                },
                set: function(e) {
                    r.__proto__ = e
                }
            }), n
        }
        return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i
    }(c(Array));

    function h(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function(e) {
            Array.isArray(e) ? t.push.apply(t, h(e)) : t.push(e)
        })), t
    }

    function f(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function m(e, t) {
        var n = o(),
            i = a(),
            r = [];
        if (!t && e instanceof p) return e;
        if (!e) return new p(r);
        if ("string" == typeof e) {
            var s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                var l = "div";
                0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select");
                var u = i.createElement(l);
                u.innerHTML = s;
                for (var d = 0; d < u.childNodes.length; d += 1) r.push(u.childNodes[d])
            } else r = function(e, t) {
                if ("string" != typeof e) return [e];
                for (var n = [], i = t.querySelectorAll(e), r = 0; r < i.length; r += 1) n.push(i[r]);
                return n
            }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof p) return e;
            r = e
        }
        return new p(function(e) {
            for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(r))
    }
    m.fn = p.prototype;
    var v, g, y, b = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = h(t.map((function(e) {
                return e.split(" ")
            })));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).add.apply(t, i)
            })), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = h(t.map((function(e) {
                return e.split(" ")
            })));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).remove.apply(t, i)
            })), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = h(t.map((function(e) {
                return e.split(" ")
            })));
            return f(this, (function(e) {
                return i.filter((function(t) {
                    return e.classList.contains(t)
                })).length > 0
            })).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = h(t.map((function(e) {
                return e.split(" ")
            })));
            this.forEach((function(e) {
                i.forEach((function(t) {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                a = t[2],
                s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), m(t).is(r)) a.apply(t, n);
                    else
                        for (var i = m(t).parents(), s = 0; s < i.length; s += 1) m(i[s]).is(r) && a.apply(i[s], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }
            "function" == typeof t[1] && (i = t[0], a = t[1], s = t[2], r = void 0), s || (s = !1);
            for (var u, d = i.split(" "), c = 0; c < this.length; c += 1) {
                var p = this[c];
                if (r)
                    for (u = 0; u < d.length; u += 1) {
                        var h = d[u];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({
                            listener: a,
                            proxyListener: o
                        }), p.addEventListener(h, o, s)
                    } else
                        for (u = 0; u < d.length; u += 1) {
                            var f = d[u];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({
                                listener: a,
                                proxyListener: l
                            }), p.addEventListener(f, l, s)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                a = t[2],
                s = t[3];
            "function" == typeof t[1] && (i = t[0], a = t[1], s = t[2], r = void 0), s || (s = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var u = o[l], d = 0; d < this.length; d += 1) {
                    var c = this[d],
                        p = void 0;
                    if (!r && c.dom7Listeners ? p = c.dom7Listeners[u] : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[u]), p && p.length)
                        for (var h = p.length - 1; h >= 0; h -= 1) {
                            var f = p[h];
                            a && f.listener === a || a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (c.removeEventListener(u, f.proxyListener, s), p.splice(h, 1)) : a || (c.removeEventListener(u, f.proxyListener, s), p.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = o(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            for (var r = n[0].split(" "), a = n[1], s = 0; s < r.length; s += 1)
                for (var l = r[s], u = 0; u < this.length; u += 1) {
                    var d = this[u];
                    if (e.CustomEvent) {
                        var c = new e.CustomEvent(l, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        d.dom7EventData = n.filter((function(e, t) {
                            return t > 0
                        })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function(e) {
            var t = this;
            return e && t.on("transitionend", (function n(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", n))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = o();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                var e = o(),
                    t = a(),
                    n = this[0],
                    i = n.getBoundingClientRect(),
                    r = t.body,
                    s = n.clientTop || r.clientTop || 0,
                    l = n.clientLeft || r.clientLeft || 0,
                    u = n === e ? e.scrollY : n.scrollTop,
                    d = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: i.top + u - s,
                    left: i.left + d - l
                }
            }
            return null
        },
        css: function(e, t) {
            var n, i = o();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var r in e) this[n].style[r] = e[r];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach((function(t, n) {
                e.apply(t, [t, n])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, n, i = o(),
                r = a(),
                s = this[0];
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (s.matches) return s.matches(e);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector) return s.msMatchesSelector(e);
                for (t = m(e), n = 0; n < t.length; n += 1)
                    if (t[n] === s) return !0;
                return !1
            }
            if (e === r) return s === r;
            if (e === i) return s === i;
            if (e.nodeType || e instanceof p) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                    if (t[n] === s) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return m([]);
            if (e < 0) {
                var n = t + e;
                return m(n < 0 ? [] : [this[n]])
            }
            return m([this[e]])
        },
        append: function() {
            for (var e, t = a(), n = 0; n < arguments.length; n += 1) {
                e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                for (var i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        var r = t.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[i].appendChild(r.firstChild)
                    } else if (e instanceof p)
                    for (var s = 0; s < e.length; s += 1) this[i].appendChild(e[s]);
                else this[i].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, n, i = a();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var r = i.createElement("div");
                    for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
                } else if (e instanceof p)
                for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([])
        },
        nextAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return m([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                e ? m(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return m(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([])
            }
            return m([])
        },
        prevAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return m([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                e ? m(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return m(t)
        },
        parent: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? m(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return m(t)
        },
        parents: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i;) e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return m(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
            return m(t)
        },
        children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].children, r = 0; r < i.length; r += 1) e && !m(i[r]).is(e) || t.push(i[r]);
            return m(t)
        },
        filter: function(e) {
            return m(f(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function w(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function x() {
        return Date.now()
    }

    function T(e, t) {
        void 0 === t && (t = "x");
        var n, i, r, a = o(),
            s = function(e) {
                var t, n = o();
                return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
            }(e);
        return a.WebKitCSSMatrix ? ((i = s.transform || s.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) {
            return e.replace(",", ".")
        })).join(", ")), r = new a.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = a.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = a.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
    }

    function C(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function E() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], n = 1; n < arguments.length; n += 1) {
            var i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            if (null != i)
                for (var r = Object.keys(Object(i)).filter((function(e) {
                        return t.indexOf(e) < 0
                    })), a = 0, s = r.length; a < s; a += 1) {
                    var o = r[a],
                        l = Object.getOwnPropertyDescriptor(i, o);
                    void 0 !== l && l.enumerable && (C(e[o]) && C(i[o]) ? E(e[o], i[o]) : !C(e[o]) && C(i[o]) ? (e[o] = {}, E(e[o], i[o])) : e[o] = i[o])
                }
        }
        return e
    }

    function S(e, t) {
        Object.keys(t).forEach((function(n) {
            C(t[n]) && Object.keys(t[n]).forEach((function(i) {
                "function" == typeof t[n][i] && (t[n][i] = t[n][i].bind(e))
            })), e[n] = t[n]
        }))
    }

    function k() {
        return v || (v = function() {
            var e = o(),
                t = a();
            return {
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), v
    }

    function A(e) {
        return void 0 === e && (e = {}), g || (g = function(e) {
            var t = (void 0 === e ? {} : e).userAgent,
                n = k(),
                i = o(),
                r = i.navigator.platform,
                a = t || i.navigator.userAgent,
                s = {
                    ios: !1,
                    android: !1
                },
                l = i.screen.width,
                u = i.screen.height,
                d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = a.match(/(iPad).*OS\s([\d_]+)/),
                p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r,
                m = "MacIntel" === r;
            return !c && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(l + "x" + u) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), m = !1), d && !f && (s.os = "android", s.android = !0), (c || h || p) && (s.os = "ios", s.ios = !0), s
        }(e)), g
    }

    function $() {
        return y || (y = function() {
            var e, t = o();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), y
    }
    Object.keys(b).forEach((function(e) {
        m.fn[e] = b[e]
    }));
    var M = {
            name: "resize",
            create: function() {
                var e = this;
                E(e, {
                    resize: {
                        observer: null,
                        createObserver: function() {
                            e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function(t) {
                                var n = e.width,
                                    i = e.height,
                                    r = n,
                                    a = i;
                                t.forEach((function(t) {
                                    var n = t.contentBoxSize,
                                        i = t.contentRect,
                                        s = t.target;
                                    s && s !== e.el || (r = i ? i.width : (n[0] || n).inlineSize, a = i ? i.height : (n[0] || n).blockSize)
                                })), r === n && a === i || e.resize.resizeHandler()
                            })), e.resize.observer.observe(e.el))
                        },
                        removeObserver: function() {
                            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
                        },
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function(e) {
                    var t = o();
                    e.params.resizeObserver && void 0 !== o().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
                },
                destroy: function(e) {
                    var t = o();
                    e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        D = {
            attach: function(e, t) {
                void 0 === t && (t = {});
                var n = o(),
                    i = this,
                    r = new(n.MutationObserver || n.WebkitMutationObserver)((function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                i.emit("observerUpdate", e[0])
                            };
                            n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                        } else i.emit("observerUpdate", e[0])
                    }));
                r.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(r)
            },
            init: function() {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                S(this, {
                    observer: t({}, D, {
                        observers: []
                    })
                })
            },
            on: {
                init: function(e) {
                    e.observer.init()
                },
                destroy: function(e) {
                    e.observer.destroy()
                }
            }
        };

    function L(e) {
        var t = this,
            n = a(),
            i = o(),
            r = t.touchEventsData,
            s = t.params,
            l = t.touches;
        if (!t.animating || !s.preventInteractionOnTransition) {
            var u = e;
            u.originalEvent && (u = u.originalEvent);
            var d = m(u.target);
            if (("wrapper" !== s.touchEventsTarget || d.closest(t.wrapperEl).length) && (r.isTouchEvent = "touchstart" === u.type, (r.isTouchEvent || !("which" in u) || 3 !== u.which) && !(!r.isTouchEvent && "button" in u && u.button > 0 || r.isTouched && r.isMoved)))
                if (!!s.noSwipingClass && "" !== s.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (d = m(e.path[0])), s.noSwiping && d.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) t.allowClick = !0;
                else if (!s.swipeHandler || d.closest(s.swipeHandler)[0]) {
                l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
                var c = l.currentX,
                    p = l.currentY,
                    h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (h && (c <= f || c >= i.innerWidth - f)) {
                    if ("prevent" !== h) return;
                    e.preventDefault()
                }
                if (E(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = c, l.startY = p, r.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== u.type) {
                    var v = !0;
                    d.is(r.formElements) && (v = !1), n.activeElement && m(n.activeElement).is(r.formElements) && n.activeElement !== d[0] && n.activeElement.blur();
                    var g = v && t.allowTouchMove && s.touchStartPreventDefault;
                    !s.touchStartForcePreventDefault && !g || d[0].isContentEditable || u.preventDefault()
                }
                t.emit("touchStart", u)
            }
        }
    }

    function P(e) {
        var t = a(),
            n = this,
            i = n.touchEventsData,
            r = n.params,
            s = n.touches,
            o = n.rtlTranslate,
            l = e;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
                var u = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    d = "touchmove" === l.type ? u.pageX : l.pageX,
                    c = "touchmove" === l.type ? u.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return s.startX = d, void(s.startY = c);
                if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (E(s, {
                    startX: d,
                    startY: c,
                    currentX: d,
                    currentY: c
                }), i.touchStartTime = x()));
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                    if (n.isVertical()) {
                        if (c < s.startY && n.translate <= n.maxTranslate() || c > s.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (d < s.startX && n.translate <= n.maxTranslate() || d > s.startX && n.translate >= n.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void(n.allowClick = !1);
                if (i.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    s.currentX = d, s.currentY = c;
                    var p, h = s.currentX - s.startX,
                        f = s.currentY - s.startY;
                    if (!(n.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < n.params.threshold))
                        if (void 0 === i.isScrolling && (n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (p = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? p > r.touchAngle : 90 - p > r.touchAngle)), i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                        n.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), i.isMoved || (r.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0;
                        var v = n.isHorizontal() ? h : f;
                        s.diff = v, v *= r.touchRatio, o && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                        var g = !0,
                            y = r.resistanceRatio;
                        if (r.touchReleaseOnEdges && (y = 0), v > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + v, y))) : v < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - v, y))), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void(s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                        }
                        r.followFinger && !r.cssMode && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: s[n.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: s[n.isHorizontal() ? "currentX" : "currentY"],
                            time: x()
                        })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                    }
                }
            }
        } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l)
    }

    function _(e) {
        var t = this,
            n = t.touchEventsData,
            i = t.params,
            r = t.touches,
            a = t.rtlTranslate,
            s = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            u = e;
        if (u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var d, c = x(),
            p = c - n.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap click", u), p < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)), n.lastClickTime = x(), w((function() {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode)
            if (i.freeMode) {
                if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (d > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (n.velocities.length > 1) {
                        var h = n.velocities.pop(),
                            f = n.velocities.pop(),
                            m = h.position - f.position,
                            v = h.time - f.time;
                        t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || x() - h.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                    var g = 1e3 * i.freeModeMomentumRatio,
                        y = t.velocity * g,
                        b = t.translate + y;
                    a && (b = -b);
                    var T, C, E = !1,
                        S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), T = t.maxTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (C = !0);
                    else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), T = t.minTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (C = !0);
                    else if (i.freeModeSticky) {
                        for (var k, A = 0; A < l.length; A += 1)
                            if (l[A] > -b) {
                                k = A;
                                break
                            }
                        b = -(b = Math.abs(l[k] - b) < Math.abs(l[k - 1] - b) || "next" === t.swipeDirection ? l[k] : l[k - 1])
                    }
                    if (C && t.once("transitionEnd", (function() {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                        if (g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), i.freeModeSticky) {
                            var $ = Math.abs((a ? -b : b) - t.translate),
                                M = t.slidesSizesGrid[t.activeIndex];
                            g = $ < M ? i.speed : $ < 2 * M ? 1.5 * i.speed : 2.5 * i.speed
                        }
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeModeMomentumBounce && E ? (t.updateProgress(T), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function() {
                        t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout((function() {
                            t.setTranslate(T), s.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        }), 0))
                    }))) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                    if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeMode && t.emit("_freeModeNoMomentumRelease")
                }(!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var D = 0, z = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    var P = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== o[L + P] ? d >= o[L] && d < o[L + P] && (D = L, z = o[L + P] - o[L]) : d >= o[L] && (D = L, z = o[o.length - 1] - o[o.length - 2])
                }
                var _ = (d - o[D]) / z,
                    O = D < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (p > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (_ >= i.longSwipesRatio ? t.slideTo(D + O) : t.slideTo(D)), "prev" === t.swipeDirection && (_ > 1 - i.longSwipesRatio ? t.slideTo(D + O) : t.slideTo(D))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || u.target !== t.navigation.nextEl && u.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(D + O), "prev" === t.swipeDirection && t.slideTo(D)) : u.target === t.navigation.nextEl ? t.slideTo(D + O) : t.slideTo(D)
                }
            }
    }

    function O() {
        var e = this,
            t = e.params,
            n = e.el;
        if (!n || 0 !== n.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                r = e.allowSlidePrev,
                a = e.snapGrid;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
    }

    function j(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function F() {
        var e = this,
            t = e.wrapperEl,
            n = e.rtlTranslate;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    var I = !1;

    function N() {}
    var R = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        },
        q = {
            modular: {
                useParams: function(e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function(n) {
                        var i = t.modules[n];
                        i.params && E(e, i.params)
                    }))
                },
                useModules: function(e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function(n) {
                        var i = t.modules[n],
                            r = e[n] || {};
                        i.on && t.on && Object.keys(i.on).forEach((function(e) {
                            t.on(e, i.on[e])
                        })), i.create && i.create.bind(t)(r)
                    }))
                }
            },
            eventsEmitter: {
                on: function(e, t, n) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    var r = n ? "unshift" : "push";
                    return e.split(" ").forEach((function(e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    })), i
                },
                once: function(e, t, n) {
                    var i = this;
                    if ("function" != typeof t) return i;

                    function r() {
                        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                        for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                        t.apply(i, a)
                    }
                    return r.__emitterProxy = t, i.on(e, r, n)
                },
                onAny: function(e, t) {
                    var n = this;
                    if ("function" != typeof e) return n;
                    var i = t ? "unshift" : "push";
                    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsAnyListeners) return t;
                    var n = t.eventsAnyListeners.indexOf(e);
                    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                },
                off: function(e, t) {
                    var n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((function(e) {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function(i, r) {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(r, 1)
                        }))
                    })), n) : n
                },
                emit: function() {
                    var e, t, n, i = this;
                    if (!i.eventsListeners) return i;
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), n = i) : (e = a[0].events, t = a[0].data, n = a[0].context || i), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((function(e) {
                        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((function(i) {
                            i.apply(n, [e].concat(t))
                        })), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach((function(e) {
                            e.apply(n, t)
                        }))
                    })), i
                }
            },
            update: {
                updateSize: function() {
                    var e, t, n = this,
                        i = n.$el;
                    e = void 0 !== n.params.width && null !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height && null !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), E(n, {
                        width: e,
                        height: t,
                        size: n.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this,
                        t = function(t) {
                            return e.isHorizontal() ? t : {
                                width: "height",
                                "margin-top": "margin-left",
                                "margin-bottom ": "margin-right",
                                "margin-left": "margin-top",
                                "margin-right": "margin-bottom",
                                "padding-left": "padding-top",
                                "padding-right": "padding-bottom",
                                marginRight: "marginBottom"
                            }[t]
                        },
                        n = function(e, n) {
                            return parseFloat(e.getPropertyValue(t(n)) || 0)
                        },
                        i = e.params,
                        r = e.$wrapperEl,
                        a = e.size,
                        s = e.rtlTranslate,
                        o = e.wrongRTL,
                        l = e.virtual && i.virtual.enabled,
                        u = l ? e.virtual.slides.length : e.slides.length,
                        d = r.children("." + e.params.slideClass),
                        c = l ? e.virtual.slides.length : d.length,
                        p = [],
                        h = [],
                        f = [],
                        m = i.slidesOffsetBefore;
                    "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                    var v = i.slidesOffsetAfter;
                    "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
                    var g = e.snapGrid.length,
                        y = e.slidesGrid.length,
                        b = i.spaceBetween,
                        w = -m,
                        x = 0,
                        T = 0;
                    if (void 0 !== a) {
                        var C, S;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, s ? d.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : d.css({
                            marginRight: "",
                            marginBottom: ""
                        }), i.slidesPerColumn > 1 && (C = Math.floor(c / i.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                        for (var k, A, $, M = i.slidesPerColumn, D = C / M, z = Math.floor(c / i.slidesPerColumn), L = 0; L < c; L += 1) {
                            S = 0;
                            var P = d.eq(L);
                            if (i.slidesPerColumn > 1) {
                                var _ = void 0,
                                    O = void 0,
                                    j = void 0;
                                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                                    var F = Math.floor(L / (i.slidesPerGroup * i.slidesPerColumn)),
                                        I = L - i.slidesPerColumn * i.slidesPerGroup * F,
                                        N = 0 === F ? i.slidesPerGroup : Math.min(Math.ceil((c - F * M * i.slidesPerGroup) / M), i.slidesPerGroup);
                                    _ = (O = I - (j = Math.floor(I / N)) * N + F * i.slidesPerGroup) + j * C / M, P.css({
                                        "-webkit-box-ordinal-group": _,
                                        "-moz-box-ordinal-group": _,
                                        "-ms-flex-order": _,
                                        "-webkit-order": _,
                                        order: _
                                    })
                                } else "column" === i.slidesPerColumnFill ? (j = L - (O = Math.floor(L / M)) * M, (O > z || O === z && j === M - 1) && (j += 1) >= M && (j = 0, O += 1)) : O = L - (j = Math.floor(L / D)) * D;
                                P.css(t("margin-top"), 0 !== j && i.spaceBetween && i.spaceBetween + "px")
                            }
                            if ("none" !== P.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var R = getComputedStyle(P[0]),
                                        q = P[0].style.transform,
                                        H = P[0].style.webkitTransform;
                                    if (q && (P[0].style.transform = "none"), H && (P[0].style.webkitTransform = "none"), i.roundLengths) S = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                    else {
                                        var X = n(R, "width"),
                                            Y = n(R, "padding-left"),
                                            B = n(R, "padding-right"),
                                            W = n(R, "margin-left"),
                                            G = n(R, "margin-right"),
                                            V = R.getPropertyValue("box-sizing");
                                        if (V && "border-box" === V) S = X + W + G;
                                        else {
                                            var U = P[0],
                                                K = U.clientWidth;
                                            S = X + Y + B + W + G + (U.offsetWidth - K)
                                        }
                                    }
                                    q && (P[0].style.transform = q), H && (P[0].style.webkitTransform = H), i.roundLengths && (S = Math.floor(S))
                                } else S = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (S = Math.floor(S)), d[L] && (d[L].style[t("width")] = S + "px");
                                d[L] && (d[L].swiperSlideSize = S), f.push(S), i.centeredSlides ? (w = w + S / 2 + x / 2 + b, 0 === x && 0 !== L && (w = w - a / 2 - b), 0 === L && (w = w - a / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), T % i.slidesPerGroup == 0 && p.push(w), h.push(w)) : (i.roundLengths && (w = Math.floor(w)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + S + b), e.virtualSize += S + b, x = S, T += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, a) + v, s && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                                width: e.virtualSize + i.spaceBetween + "px"
                            }), i.setWrapperSize && r.css(((A = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", A)), i.slidesPerColumn > 1 && (e.virtualSize = (S + i.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, r.css((($ = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", $)), i.centeredSlides)) {
                            k = [];
                            for (var Q = 0; Q < p.length; Q += 1) {
                                var Z = p[Q];
                                i.roundLengths && (Z = Math.floor(Z)), p[Q] < e.virtualSize + p[0] && k.push(Z)
                            }
                            p = k
                        }
                        if (!i.centeredSlides) {
                            k = [];
                            for (var J = 0; J < p.length; J += 1) {
                                var ee = p[J];
                                i.roundLengths && (ee = Math.floor(ee)), p[J] <= e.virtualSize - a && k.push(ee)
                            }
                            p = k, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                        }
                        if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                            var te, ne = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                            d.filter((function(e, t) {
                                return !i.cssMode || t !== d.length - 1
                            })).css(((te = {})[ne] = b + "px", te))
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var ie = 0;
                            f.forEach((function(e) {
                                ie += e + (i.spaceBetween ? i.spaceBetween : 0)
                            }));
                            var re = (ie -= i.spaceBetween) - a;
                            p = p.map((function(e) {
                                return e < 0 ? -m : e > re ? re + v : e
                            }))
                        }
                        if (i.centerInsufficientSlides) {
                            var ae = 0;
                            if (f.forEach((function(e) {
                                    ae += e + (i.spaceBetween ? i.spaceBetween : 0)
                                })), (ae -= i.spaceBetween) < a) {
                                var se = (a - ae) / 2;
                                p.forEach((function(e, t) {
                                    p[t] = e - se
                                })), h.forEach((function(e, t) {
                                    h[t] = e + se
                                }))
                            }
                        }
                        E(e, {
                            slides: d,
                            snapGrid: p,
                            slidesGrid: h,
                            slidesSizesGrid: f
                        }), c !== u && e.emit("slidesLengthChange"), p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, n = this,
                        i = [],
                        r = 0;
                    if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
                        if (n.params.centeredSlides) n.visibleSlides.each((function(e) {
                            i.push(e)
                        }));
                        else
                            for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                                var a = n.activeIndex + t;
                                if (a > n.slides.length) break;
                                i.push(n.slides.eq(a)[0])
                            } else i.push(n.slides.eq(n.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var s = i[t].offsetHeight;
                            r = s > r ? s : r
                        }
                    r && n.$wrapperEl.css("height", r + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        n = t.params,
                        i = t.slides,
                        r = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = -e;
                        r && (a = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var s = 0; s < i.length; s += 1) {
                            var o = i[s],
                                l = (a + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                            if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                                var u = -(a - o.swiperSlideOffset),
                                    d = u + t.slidesSizesGrid[s];
                                (u >= 0 && u < t.size - 1 || d > 1 && d <= t.size || u <= 0 && d >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), i.eq(s).addClass(n.slideVisibleClass))
                            }
                            o.progress = r ? -l : l
                        }
                        t.visibleSlides = m(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    var i = t.params,
                        r = t.maxTranslate() - t.minTranslate(),
                        a = t.progress,
                        s = t.isBeginning,
                        o = t.isEnd,
                        l = s,
                        u = o;
                    0 === r ? (a = 0, s = !0, o = !0) : (s = (a = (e - t.minTranslate()) / r) <= 0, o = a >= 1), E(t, {
                        progress: a,
                        isBeginning: s,
                        isEnd: o
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !u && t.emit("reachEnd toEdge"), (l && !s || u && !o) && t.emit("fromEdge"), t.emit("progress", a)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        n = t.slides,
                        i = t.params,
                        r = t.$wrapperEl,
                        a = t.activeIndex,
                        s = t.realIndex,
                        o = t.virtual && i.virtual.enabled;
                    n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : n.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
                    var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
                    var u = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === u.length && (u = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), u.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t, n = this,
                        i = n.rtlTranslate ? n.translate : -n.translate,
                        r = n.slidesGrid,
                        a = n.snapGrid,
                        s = n.params,
                        o = n.activeIndex,
                        l = n.realIndex,
                        u = n.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var c = 0; c < r.length; c += 1) void 0 !== r[c + 1] ? i >= r[c] && i < r[c + 1] - (r[c + 1] - r[c]) / 2 ? d = c : i >= r[c] && i < r[c + 1] && (d = c + 1) : i >= r[c] && (d = c);
                        s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (a.indexOf(i) >= 0) t = a.indexOf(i);
                    else {
                        var p = Math.min(s.slidesPerGroupSkip, d);
                        t = p + Math.floor((d - p) / s.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), d !== o) {
                        var h = parseInt(n.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        E(n, {
                            snapIndex: t,
                            realIndex: h,
                            previousIndex: o,
                            activeIndex: d
                        }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== h && n.emit("realIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange")
                    } else t !== u && (n.snapIndex = t, n.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t, n = this,
                        i = n.params,
                        r = m(e.target).closest("." + i.slideClass)[0],
                        a = !1;
                    if (r)
                        for (var s = 0; s < n.slides.length; s += 1)
                            if (n.slides[s] === r) {
                                a = !0, t = s;
                                break
                            }
                    if (!r || !a) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
                    n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = t, i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this,
                        n = t.params,
                        i = t.rtlTranslate,
                        r = t.translate,
                        a = t.$wrapperEl;
                    if (n.virtualTranslate) return i ? -r : r;
                    if (n.cssMode) return r;
                    var s = T(a[0], e);
                    return i && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var n = this,
                        i = n.rtlTranslate,
                        r = n.params,
                        a = n.$wrapperEl,
                        s = n.wrapperEl,
                        o = n.progress,
                        l = 0,
                        u = 0;
                    n.isHorizontal() ? l = i ? -e : e : u = e, r.roundLengths && (l = Math.floor(l), u = Math.floor(u)), r.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -u : r.virtualTranslate || a.transform("translate3d(" + l + "px, " + u + "px, 0px)"), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : u;
                    var d = n.maxTranslate() - n.minTranslate();
                    (0 === d ? 0 : (e - n.minTranslate()) / d) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, n, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                    var a = this,
                        s = a.params,
                        o = a.wrapperEl;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    var l, u = a.minTranslate(),
                        d = a.maxTranslate();
                    if (l = i && e > u ? u : i && e < d ? d : e, a.updateProgress(l), s.cssMode) {
                        var c, p = a.isHorizontal();
                        return 0 === t ? o[p ? "scrollLeft" : "scrollTop"] = -l : o.scrollTo ? o.scrollTo(((c = {})[p ? "left" : "top"] = -l, c.behavior = "smooth", c)) : o[p ? "scrollLeft" : "scrollTop"] = -l, !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(l), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(l), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    var n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this,
                        i = n.activeIndex,
                        r = n.params,
                        a = n.previousIndex;
                    if (!r.cssMode) {
                        r.autoHeight && n.updateAutoHeight();
                        var s = t;
                        if (s || (s = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a) {
                            if ("reset" === s) return void n.emit("slideResetTransitionStart");
                            n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this,
                        i = n.activeIndex,
                        r = n.previousIndex,
                        a = n.params;
                    if (n.animating = !1, !a.cssMode) {
                        n.setTransition(0);
                        var s = t;
                        if (s || (s = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
                            if ("reset" === s) return void n.emit("slideResetTransitionEnd");
                            n.emit("slideChangeTransitionEnd"), "next" === s ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: {
                slideTo: function(e, t, n, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                    if ("string" == typeof e) {
                        var r = parseInt(e, 10);
                        if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = r
                    }
                    var a = this,
                        s = e;
                    s < 0 && (s = 0);
                    var o = a.params,
                        l = a.snapGrid,
                        u = a.slidesGrid,
                        d = a.previousIndex,
                        c = a.activeIndex,
                        p = a.rtlTranslate,
                        h = a.wrapperEl;
                    if (a.animating && o.preventInteractionOnTransition) return !1;
                    var f = Math.min(a.params.slidesPerGroupSkip, s),
                        m = f + Math.floor((s - f) / a.params.slidesPerGroup);
                    m >= l.length && (m = l.length - 1), (c || o.initialSlide || 0) === (d || 0) && n && a.emit("beforeSlideChangeStart");
                    var v, g = -l[m];
                    if (a.updateProgress(g), o.normalizeSlideIndex)
                        for (var y = 0; y < u.length; y += 1) {
                            var b = -Math.floor(100 * g),
                                w = Math.floor(100 * u[y]),
                                x = Math.floor(100 * u[y + 1]);
                            void 0 !== u[y + 1] ? b >= w && b < x - (x - w) / 2 ? s = y : b >= w && b < x && (s = y + 1) : b >= w && (s = y)
                        }
                    if (a.initialized && s !== c) {
                        if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== s) return !1
                    }
                    if (v = s > c ? "next" : s < c ? "prev" : "reset", p && -g === a.translate || !p && g === a.translate) return a.updateActiveIndex(s), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(g), "reset" !== v && (a.transitionStart(n, v), a.transitionEnd(n, v)), !1;
                    if (o.cssMode) {
                        var T, C = a.isHorizontal(),
                            E = -g;
                        return p && (E = h.scrollWidth - h.offsetWidth - E), 0 === t ? h[C ? "scrollLeft" : "scrollTop"] = E : h.scrollTo ? h.scrollTo(((T = {})[C ? "left" : "top"] = E, T.behavior = "smooth", T)) : h[C ? "scrollLeft" : "scrollTop"] = E, !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(s), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, v), a.transitionEnd(n, v)) : (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(s), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, v))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e, t, n, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                    var r = this,
                        a = e;
                    return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i)
                },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating,
                        s = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
                    if (r.loop) {
                        if (a && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return i.slideTo(i.activeIndex + s, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating,
                        s = i.snapGrid,
                        o = i.slidesGrid,
                        l = i.rtlTranslate;
                    if (r.loop) {
                        if (a && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var d = u(l ? i.translate : -i.translate),
                        c = s.map((function(e) {
                            return u(e)
                        }));
                    s[c.indexOf(d)];
                    var p, h = s[c.indexOf(d) - 1];
                    return void 0 === h && r.cssMode && s.forEach((function(e) {
                        !h && d >= e && (h = e)
                    })), void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, n)
                },
                slideReset: function(e, t, n) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e, t, n, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                    var r = this,
                        a = r.activeIndex,
                        s = Math.min(r.params.slidesPerGroupSkip, a),
                        o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        var u = r.snapGrid[o];
                        l - u > (r.snapGrid[o + 1] - u) * i && (a += r.params.slidesPerGroup)
                    } else {
                        var d = r.snapGrid[o - 1];
                        l - d <= (r.snapGrid[o] - d) * i && (a -= r.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, n)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                        a = t.clickedIndex;
                    if (n.loop) {
                        if (t.animating) return;
                        e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), w((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), w((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            },
            loop: {
                loopCreate: function() {
                    var e = this,
                        t = a(),
                        n = e.params,
                        i = e.$wrapperEl;
                    i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                    var r = i.children("." + n.slideClass);
                    if (n.loopFillGroupWithBlank) {
                        var s = n.slidesPerGroup - r.length % n.slidesPerGroup;
                        if (s !== n.slidesPerGroup) {
                            for (var o = 0; o < s; o += 1) {
                                var l = m(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                i.append(l)
                            }
                            r = i.children("." + n.slideClass)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    var u = [],
                        d = [];
                    r.each((function(t, n) {
                        var i = m(t);
                        n < e.loopedSlides && d.push(t), n < r.length && n >= r.length - e.loopedSlides && u.push(t), i.attr("data-swiper-slide-index", n)
                    }));
                    for (var c = 0; c < d.length; c += 1) i.append(m(d[c].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (var p = u.length - 1; p >= 0; p -= 1) i.prepend(m(u[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, n = e.activeIndex,
                        i = e.slides,
                        r = e.loopedSlides,
                        a = e.allowSlidePrev,
                        s = e.allowSlideNext,
                        o = e.snapGrid,
                        l = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var u = -o[n] - e.getTranslate();
                    n < r ? (t = i.length - 3 * r + n, t += r, e.slideTo(t, 0, !1, !0) && 0 !== u && e.setTranslate((l ? -e.translate : e.translate) - u)) : n >= i.length - r && (t = -i.length + n + r, t += r, e.slideTo(t, 0, !1, !0) && 0 !== u && e.setTranslate((l ? -e.translate : e.translate) - u)), e.allowSlidePrev = a, e.allowSlideNext = s, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        n = e.params,
                        i = e.slides;
                    t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                        var n = t.el;
                        n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            },
            manipulation: {
                appendSlide: function(e) {
                    var t = this,
                        n = t.$wrapperEl,
                        i = t.params;
                    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                    else n.append(e);
                    i.loop && t.loopCreate(), i.observer && t.support.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && t.loopDestroy();
                    var a = r + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                        a = r + e.length
                    } else i.prepend(e);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), t.slideTo(a, 0, !1)
                },
                addSlide: function(e, t) {
                    var n = this,
                        i = n.$wrapperEl,
                        r = n.params,
                        a = n.activeIndex;
                    r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                    var s = n.slides.length;
                    if (e <= 0) n.prependSlide(t);
                    else if (e >= s) n.appendSlide(t);
                    else {
                        for (var o = a > e ? a + 1 : a, l = [], u = s - 1; u >= e; u -= 1) {
                            var d = n.slides.eq(u);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                            o = a > e ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        r.loop && n.loopCreate(), r.observer && n.support.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                    var a, s = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                        s = Math.max(s, 0)
                    } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            events: {
                attachEvents: function() {
                    var e = this,
                        t = a(),
                        n = e.params,
                        i = e.touchEvents,
                        r = e.el,
                        s = e.wrapperEl,
                        o = e.device,
                        l = e.support;
                    e.onTouchStart = L.bind(e), e.onTouchMove = P.bind(e), e.onTouchEnd = _.bind(e), n.cssMode && (e.onScroll = F.bind(e)), e.onClick = j.bind(e);
                    var u = !!n.nested;
                    if (!l.touch && l.pointerEvents) r.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, u), t.addEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("touchstart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.addEventListener(i.start, e.onTouchStart, d), r.addEventListener(i.move, e.onTouchMove, l.passiveListener ? {
                                passive: !1,
                                capture: u
                            } : u), r.addEventListener(i.end, e.onTouchEnd, d), i.cancel && r.addEventListener(i.cancel, e.onTouchEnd, d), I || (t.addEventListener("touchstart", N), I = !0)
                        }(n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, u), t.addEventListener("mouseup", e.onTouchEnd, !1))
                    }(n.preventClicks || n.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), n.cssMode && s.addEventListener("scroll", e.onScroll), n.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e.on("observerUpdate", O, !0)
                },
                detachEvents: function() {
                    var e = this,
                        t = a(),
                        n = e.params,
                        i = e.touchEvents,
                        r = e.el,
                        s = e.wrapperEl,
                        o = e.device,
                        l = e.support,
                        u = !!n.nested;
                    if (!l.touch && l.pointerEvents) r.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, u), t.removeEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("onTouchStart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(i.start, e.onTouchStart, d), r.removeEventListener(i.move, e.onTouchMove, u), r.removeEventListener(i.end, e.onTouchEnd, d), i.cancel && r.removeEventListener(i.cancel, e.onTouchEnd, d)
                        }(n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, u), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }(n.preventClicks || n.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), n.cssMode && s.removeEventListener("scroll", e.onScroll), e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        n = e.initialized,
                        i = e.loopedSlides,
                        r = void 0 === i ? 0 : i,
                        a = e.params,
                        s = e.$el,
                        o = a.breakpoints;
                    if (o && (!o || 0 !== Object.keys(o).length)) {
                        var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                        if (l && e.currentBreakpoint !== l) {
                            var u = l in o ? o[l] : void 0;
                            u && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                var t = u[e];
                                void 0 !== t && (u[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var d = u || e.originalParams,
                                c = a.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            c && !p ? (s.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !c && p && (s.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && s.addClass(a.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                            var h = d.direction && d.direction !== a.direction,
                                f = a.loop && (d.slidesPerView !== a.slidesPerView || h);
                            h && n && e.changeDirection(), E(e.params, d), E(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e, t, n) {
                    if (void 0 === t && (t = "window"), e && ("container" !== t || n)) {
                        var i = !1,
                            r = o(),
                            a = "window" === t ? r.innerWidth : n.clientWidth,
                            s = "window" === t ? r.innerHeight : n.clientHeight,
                            l = Object.keys(e).map((function(e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: s * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        l.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var u = 0; u < l.length; u += 1) {
                            var d = l[u],
                                c = d.point;
                            d.value <= a && (i = c)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.params,
                        n = e.isLocked,
                        i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e, t, n, i = this,
                        r = i.classNames,
                        a = i.params,
                        s = i.rtl,
                        o = i.$el,
                        l = i.device,
                        u = i.support,
                        d = (e = ["initialized", a.direction, {
                            "pointer-events": u.pointerEvents && !u.touch
                        }, {
                            "free-mode": a.freeMode
                        }, {
                            autoheight: a.autoHeight
                        }, {
                            rtl: s
                        }, {
                            multirow: a.slidesPerColumn > 1
                        }, {
                            "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
                        }, {
                            android: l.android
                        }, {
                            ios: l.ios
                        }, {
                            "css-mode": a.cssMode
                        }], t = a.containerModifierClass, n = [], e.forEach((function(e) {
                            "object" == typeof e ? Object.keys(e).forEach((function(i) {
                                e[i] && n.push(t + i)
                            })) : "string" == typeof e && n.push(t + e)
                        })), n);
                    r.push.apply(r, d), o.addClass([].concat(r).join(" ")), i.emitContainerClasses()
                },
                removeClasses: function() {
                    var e = this,
                        t = e.$el,
                        n = e.classNames;
                    t.removeClass(n.join(" ")), e.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, n, i, r, a) {
                    var s, l = o();

                    function u() {
                        a && a()
                    }
                    m(e).parent("picture")[0] || e.complete && r ? u() : t ? ((s = new l.Image).onload = u, s.onerror = u, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : u()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        H = {},
        X = function() {
            function t() {
                for (var e, n, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                if (1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? n = r[0] : (e = r[0], n = r[1]), n || (n = {}), n = E({}, n), e && !n.el && (n.el = e), n.el && m(n.el).length > 1) {
                    var s = [];
                    return m(n.el).each((function(e) {
                        var i = E({}, n, {
                            el: e
                        });
                        s.push(new t(i))
                    })), s
                }
                var o = this;
                o.support = k(), o.device = A({
                    userAgent: n.userAgent
                }), o.browser = $(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function(e) {
                    var t = o.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            r = t.params[i];
                        if ("object" != typeof r || null === r) return;
                        if (!(i in n) || !("enabled" in r)) return;
                        !0 === n[i] && (n[i] = {
                            enabled: !0
                        }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {
                            enabled: !1
                        })
                    }
                }));
                var l, u, d = E({}, R);
                return o.useParams(d), o.params = E({}, d, H, n), o.originalParams = E({}, o.params), o.passedParams = E({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((function(e) {
                    o.on(e, o.params.on[e])
                })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = m, E(o, {
                    el: e,
                    classNames: [],
                    slides: m(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === o.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === o.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
                        start: l[0],
                        move: l[1],
                        end: l[2],
                        cancel: l[3]
                    }, o.touchEventsDesktop = {
                        start: u[0],
                        move: u[1],
                        end: u[2]
                    }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: x(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o
            }
            var n, i, r = t.prototype;
            return r.emitContainerClasses = function() {
                var e = this;
                if (e.params._emitClasses && e.el) {
                    var t = e.el.className.split(" ").filter((function(t) {
                        return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                    }));
                    e.emit("_containerClasses", t.join(" "))
                }
            }, r.getSlideClasses = function(e) {
                var t = this;
                return e.className.split(" ").filter((function(e) {
                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                })).join(" ")
            }, r.emitSlidesClasses = function() {
                var e = this;
                if (e.params._emitClasses && e.el) {
                    var t = [];
                    e.slides.each((function(n) {
                        var i = e.getSlideClasses(n);
                        t.push({
                            slideEl: n,
                            classNames: i
                        }), e.emit("_slideClass", n, i)
                    })), e.emit("_slideClasses", t)
                }
            }, r.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    n = e.slides,
                    i = e.slidesGrid,
                    r = e.size,
                    a = e.activeIndex,
                    s = 1;
                if (t.centeredSlides) {
                    for (var o, l = n[a].swiperSlideSize, u = a + 1; u < n.length; u += 1) n[u] && !o && (s += 1, (l += n[u].swiperSlideSize) > r && (o = !0));
                    for (var d = a - 1; d >= 0; d -= 1) n[d] && !o && (s += 1, (l += n[d].swiperSlideSize) > r && (o = !0))
                } else
                    for (var c = a + 1; c < n.length; c += 1) i[c] - i[a] < r && (s += 1);
                return s
            }, r.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        n = e.params;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function i() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, r.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var n = this,
                    i = n.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + e), n.emitContainerClasses(), n.params.direction = e, n.slides.each((function(t) {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }, r.mount = function(e) {
                var t = this;
                if (t.mounted) return !0;
                var n, i = m(e || t.params.el);
                return !!(e = i[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (n = m(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function(e) {
                    return i.children(e)
                } : n = i.children("." + t.params.wrapperClass), E(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: n,
                    wrapperEl: n[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === n.css("display")
                }), !0)
            }, r.init = function(e) {
                var t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }, r.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var n, i = this,
                    r = i.params,
                    a = i.$el,
                    s = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, n = i, Object.keys(n).forEach((function(e) {
                    try {
                        n[e] = null
                    } catch (e) {}
                    try {
                        delete n[e]
                    } catch (e) {}
                }))), i.destroyed = !0), null
            }, t.extendDefaults = function(e) {
                E(H, e)
            }, t.installModule = function(e) {
                t.prototype.modules || (t.prototype.modules = {});
                var n = e.name || Object.keys(t.prototype.modules).length + "_" + x();
                t.prototype.modules[n] = e
            }, t.use = function(e) {
                return Array.isArray(e) ? (e.forEach((function(e) {
                    return t.installModule(e)
                })), t) : (t.installModule(e), t)
            }, n = t, i = [{
                key: "extendedDefaults",
                get: function() {
                    return H
                }
            }, {
                key: "defaults",
                get: function() {
                    return R
                }
            }], null && e(n.prototype, null), i && e(n, i), t
        }();
    Object.keys(q).forEach((function(e) {
        Object.keys(q[e]).forEach((function(t) {
            X.prototype[t] = q[e][t]
        }))
    })), X.use([M, z]);
    var Y = {
            update: function(e) {
                var t = this,
                    n = t.params,
                    i = n.slidesPerView,
                    r = n.slidesPerGroup,
                    a = n.centeredSlides,
                    s = t.params.virtual,
                    o = s.addSlidesBefore,
                    l = s.addSlidesAfter,
                    u = t.virtual,
                    d = u.from,
                    c = u.to,
                    p = u.slides,
                    h = u.slidesGrid,
                    f = u.renderSlide,
                    m = u.offset;
                t.updateActiveIndex();
                var v, g, y, b = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (g = Math.floor(i / 2) + r + l, y = Math.floor(i / 2) + r + o) : (g = i + (r - 1) + l, y = r + o);
                var w = Math.max((b || 0) - y, 0),
                    x = Math.min((b || 0) + g, p.length - 1),
                    T = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function C() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (E(t.virtual, {
                        from: w,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), d === w && c === x && !e) return t.slidesGrid !== h && T !== m && t.slides.css(v, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: w,
                    to: x,
                    slides: function() {
                        for (var e = [], t = w; t <= x; t += 1) e.push(p[t]);
                        return e
                    }()
                }), void(t.params.virtual.renderExternalUpdate && C());
                var S = [],
                    k = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var A = d; A <= c; A += 1)(A < w || A > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + A + '"]').remove();
                for (var $ = 0; $ < p.length; $ += 1) $ >= w && $ <= x && (void 0 === c || e ? k.push($) : ($ > c && k.push($), $ < d && S.push($)));
                k.forEach((function(e) {
                    t.$wrapperEl.append(f(p[e], e))
                })), S.sort((function(e, t) {
                    return t - e
                })).forEach((function(e) {
                    t.$wrapperEl.prepend(f(p[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(v, T + "px"), C()
            },
            renderSlide: function(e, t) {
                var n = this,
                    i = n.params.virtual;
                if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                var r = i.renderSlide ? m(i.renderSlide.call(n, e, t)) : m('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r
            },
            appendSlide: function(e) {
                var t = this;
                if ("object" == typeof e && "length" in e)
                    for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
                else t.virtual.slides.push(e);
                t.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this,
                    n = t.activeIndex,
                    i = n + 1,
                    r = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
                    i = n + e.length, r = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var s = t.virtual.cache,
                        o = {};
                    Object.keys(s).forEach((function(e) {
                        var t = s[e],
                            n = t.attr("data-swiper-slide-index");
                        n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), o[parseInt(e, 10) + r] = t
                    })), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(i, 0)
            },
            removeSlide: function(e) {
                var t = this;
                if (null != e) {
                    var n = t.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                    t.virtual.update(!0), t.slideTo(n, 0)
                }
            },
            removeAllSlides: function() {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        B = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                S(this, {
                    virtual: t({}, Y, {
                        slides: this.params.virtual.slides,
                        cache: {}
                    })
                })
            },
            on: {
                beforeInit: function(e) {
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        E(e.params, t), E(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function(e) {
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        W = {
            handle: function(e) {
                var t = this,
                    n = o(),
                    i = a(),
                    r = t.rtlTranslate,
                    s = e;
                s.originalEvent && (s = s.originalEvent);
                var l = s.keyCode || s.charCode,
                    u = t.params.keyboard.pageUpDown,
                    d = u && 33 === l,
                    c = u && 34 === l,
                    p = 37 === l,
                    h = 39 === l,
                    f = 38 === l,
                    m = 40 === l;
                if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && m || c)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || p || h || f || m)) {
                        var v = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var g = t.$el,
                            y = g[0].clientWidth,
                            b = g[0].clientHeight,
                            w = n.innerWidth,
                            x = n.innerHeight,
                            T = t.$el.offset();
                        r && (T.left -= t.$el[0].scrollLeft);
                        for (var C = [
                                [T.left, T.top],
                                [T.left + y, T.top],
                                [T.left, T.top + b],
                                [T.left + y, T.top + b]
                            ], E = 0; E < C.length; E += 1) {
                            var S = C[E];
                            if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= x) {
                                if (0 === S[0] && 0 === S[1]) continue;
                                v = !0
                            }
                        }
                        if (!v) return
                    }
                    t.isHorizontal() ? ((d || c || p || h) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((c || h) && !r || (d || p) && r) && t.slideNext(), ((d || p) && !r || (c || h) && r) && t.slidePrev()) : ((d || c || f || m) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (c || m) && t.slideNext(), (d || f) && t.slidePrev()), t.emit("keyPress", l)
                }
            },
            enable: function() {
                var e = this,
                    t = a();
                e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
            },
            disable: function() {
                var e = this,
                    t = a();
                e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
            }
        },
        G = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create: function() {
                S(this, {
                    keyboard: t({
                        enabled: !1
                    }, W)
                })
            },
            on: {
                init: function(e) {
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function(e) {
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        },
        V = {
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return o().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var e = a(),
                        t = "onwheel",
                        n = t in e;
                    if (!n) {
                        var i = e.createElement("div");
                        i.setAttribute(t, "return;"), n = "function" == typeof i.onwheel
                    }
                    return !n && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (n = e.implementation.hasFeature("Events.wheel", "3.0")), n
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: r
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    n = this,
                    i = n.params.mousewheel;
                n.params.cssMode && t.preventDefault();
                var r = n.$el;
                if ("container" !== n.params.mousewheel.eventsTarget && (r = m(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    s = n.rtlTranslate ? -1 : 1,
                    o = V.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = -o.pixelX * s
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = -o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                if (0 === a) return !0;
                i.invert && (a = -a);
                var l = n.getTranslate() + a * i.sensitivity;
                if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), (!!n.params.loop || !(l === n.minTranslate() || l === n.maxTranslate())) && n.params.nested && t.stopPropagation(), n.params.freeMode) {
                    var u = {
                            time: x(),
                            delta: Math.abs(a),
                            direction: Math.sign(a)
                        },
                        d = n.mousewheel.lastEventBeforeSnap,
                        c = d && u.time < d.time + 500 && u.delta <= d.delta && u.direction === d.direction;
                    if (!c) {
                        n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                        var p = n.getTranslate() + a * i.sensitivity,
                            h = n.isBeginning,
                            f = n.isEnd;
                        if (p >= n.minTranslate() && (p = n.minTranslate()), p <= n.maxTranslate() && (p = n.maxTranslate()), n.setTransition(0), n.setTranslate(p), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!h && n.isBeginning || !f && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                            clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                            var v = n.mousewheel.recentWheelEvents;
                            v.length >= 15 && v.shift();
                            var g = v.length ? v[v.length - 1] : void 0,
                                y = v[0];
                            if (v.push(u), g && (u.delta > g.delta || u.direction !== g.direction)) v.splice(0);
                            else if (v.length >= 15 && u.time - y.time < 500 && y.delta - u.delta >= 1 && u.delta <= 6) {
                                var b = a > 0 ? .8 : .2;
                                n.mousewheel.lastEventBeforeSnap = u, v.splice(0), n.mousewheel.timeout = w((function() {
                                    n.slideToClosest(n.params.speed, !0, void 0, b)
                                }), 0)
                            }
                            n.mousewheel.timeout || (n.mousewheel.timeout = w((function() {
                                n.mousewheel.lastEventBeforeSnap = u, v.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (c || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), p === n.minTranslate() || p === n.maxTranslate()) return !0
                    }
                } else {
                    var T = {
                            time: x(),
                            delta: Math.abs(a),
                            direction: Math.sign(a),
                            raw: e
                        },
                        C = n.mousewheel.recentWheelEvents;
                    C.length >= 2 && C.shift();
                    var E = C.length ? C[C.length - 1] : void 0;
                    if (C.push(T), E ? (T.direction !== E.direction || T.delta > E.delta || T.time > E.time + 150) && n.mousewheel.animateSlider(T) : n.mousewheel.animateSlider(T), n.mousewheel.releaseScroll(T)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                var t = this,
                    n = o();
                return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new n.Date).getTime(), 1))
            },
            releaseScroll: function(e) {
                var t = this,
                    n = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = this,
                    t = V.event();
                if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                if (!t) return !1;
                if (e.mousewheel.enabled) return !1;
                var n = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (n = m(e.params.mousewheel.eventsTarget)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var e = this,
                    t = V.event();
                if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                if (!t) return !1;
                if (!e.mousewheel.enabled) return !1;
                var n = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (n = m(e.params.mousewheel.eventsTarget)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
            }
        },
        U = {
            toggleEl: function(e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function() {
                var e = this,
                    t = e.params.navigation,
                    n = e.navigation.toggleEl;
                if (!e.params.loop) {
                    var i = e.navigation,
                        r = i.$nextEl,
                        a = i.$prevEl;
                    a && a.length > 0 && (e.isBeginning ? n(a, !0) : n(a, !1), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), r && r.length > 0 && (e.isEnd ? n(r, !0) : n(r, !1), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                var t = this;
                e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
            },
            onNextClick: function(e) {
                var t = this;
                e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
            },
            init: function() {
                var e, t, n = this,
                    i = n.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", n.navigation.onNextClick), t && t.length > 0 && t.on("click", n.navigation.onPrevClick), E(n.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    n = t.$nextEl,
                    i = t.$prevEl;
                n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        K = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    n = e.params.pagination;
                if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i, r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        a = e.pagination.$el,
                        s = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (i -= r - 2 * e.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== e.params.paginationType && (i = s + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        var o, l, u, d = e.pagination.bullets;
                        if (n.dynamicBullets && (e.pagination.bulletSize = d.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = i - e.pagination.dynamicBulletIndex, u = ((l = o + (Math.min(d.length, n.dynamicMainBullets) - 1)) + o) / 2), d.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), a.length > 1) d.each((function(e) {
                            var t = m(e),
                                r = t.index();
                            r === i && t.addClass(n.bulletActiveClass), n.dynamicBullets && (r >= o && r <= l && t.addClass(n.bulletActiveClass + "-main"), r === o && t.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), r === l && t.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var c = d.eq(i),
                                p = c.index();
                            if (c.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                for (var h = d.eq(o), f = d.eq(l), v = o; v <= l; v += 1) d.eq(v).addClass(n.bulletActiveClass + "-main");
                                if (e.params.loop)
                                    if (p >= d.length - n.dynamicMainBullets) {
                                        for (var g = n.dynamicMainBullets; g >= 0; g -= 1) d.eq(d.length - g).addClass(n.bulletActiveClass + "-main");
                                        d.eq(d.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                                    } else h.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), f.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                                else h.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), f.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                        }
                        if (n.dynamicBullets) {
                            var y = Math.min(d.length, n.dynamicMainBullets + 4),
                                b = (e.pagination.bulletSize * y - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize,
                                w = t ? "right" : "left";
                            d.css(e.isHorizontal() ? w : "top", b + "px")
                        }
                    }
                    if ("fraction" === n.type && (a.find("." + n.currentClass).text(n.formatFractionCurrent(i + 1)), a.find("." + n.totalClass).text(n.formatFractionTotal(s))), "progressbar" === n.type) {
                        var x;
                        x = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var T = (i + 1) / s,
                            C = 1,
                            E = 1;
                        "horizontal" === x ? C = T : E = T, a.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + C + ") scaleY(" + E + ")").transition(e.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(e, i + 1, s)), e.emit("paginationRender", a[0])) : e.emit("paginationUpdate", a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        r = "";
                    if ("bullets" === t.type) {
                        var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && a > n && (a = n);
                        for (var s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(r), e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, "."))
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var n = m(t.el);
                    0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", "." + t.bulletClass.replace(/ /g, "."), (function(t) {
                        t.preventDefault();
                        var n = m(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                    })), E(e.pagination, {
                        $el: n,
                        el: n[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.pagination.$el;
                    n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass.replace(/ /g, "."))
                }
            }
        },
        Q = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.rtlTranslate,
                        i = e.progress,
                        r = t.dragSize,
                        a = t.trackSize,
                        s = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        u = r,
                        d = (a - r) * i;
                    n ? (d = -d) > 0 ? (u = r - d, d = 0) : -d + r > a && (u = a + d) : d < 0 ? (u = r + d, d = 0) : d + r > a && (u = a - d), e.isHorizontal() ? (s.transform("translate3d(" + d + "px, 0, 0)"), s[0].style.width = u + "px") : (s.transform("translate3d(0px, " + d + "px, 0)"), s[0].style.height = u + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function(e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        n = t.$dragEl,
                        i = t.$el;
                    n[0].style.width = "", n[0].style.height = "";
                    var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        s = e.size / e.virtualSize,
                        o = s * (a / e.size);
                    r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = s >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), E(t, {
                        trackSize: a,
                        divider: s,
                        moveDivider: o,
                        dragSize: r
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, n = this,
                    i = n.scrollbar,
                    r = n.rtlTranslate,
                    a = i.$el,
                    s = i.dragSize,
                    o = i.trackSize,
                    l = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : s / 2)) / (o - s), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                var u = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                n.updateProgress(u), n.setTranslate(u), n.updateActiveIndex(), n.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar,
                    r = t.$wrapperEl,
                    a = i.$el,
                    s = i.$dragEl;
                t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this,
                    n = t.scrollbar,
                    i = t.$wrapperEl,
                    r = n.$el,
                    a = n.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar,
                    r = t.$wrapperEl,
                    a = i.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = w((function() {
                    a.css("opacity", 0), a.transition(400)
                }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = a(),
                        n = e.scrollbar,
                        i = e.touchEventsTouch,
                        r = e.touchEventsDesktop,
                        s = e.params,
                        o = e.support,
                        l = n.$el[0],
                        u = !(!o.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!o.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (o.touch ? (l.addEventListener(i.start, e.scrollbar.onDragStart, u), l.addEventListener(i.move, e.scrollbar.onDragMove, u), l.addEventListener(i.end, e.scrollbar.onDragEnd, d)) : (l.addEventListener(r.start, e.scrollbar.onDragStart, u), t.addEventListener(r.move, e.scrollbar.onDragMove, u), t.addEventListener(r.end, e.scrollbar.onDragEnd, d)))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = a(),
                        n = e.scrollbar,
                        i = e.touchEventsTouch,
                        r = e.touchEventsDesktop,
                        s = e.params,
                        o = e.support,
                        l = n.$el[0],
                        u = !(!o.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!o.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (o.touch ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, u), l.removeEventListener(i.move, e.scrollbar.onDragMove, u), l.removeEventListener(i.end, e.scrollbar.onDragEnd, d)) : (l.removeEventListener(r.start, e.scrollbar.onDragStart, u), t.removeEventListener(r.move, e.scrollbar.onDragMove, u), t.removeEventListener(r.end, e.scrollbar.onDragEnd, d)))
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.$el,
                        i = e.params.scrollbar,
                        r = m(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === n.find(i.el).length && (r = n.find(i.el));
                    var a = r.find("." + e.params.scrollbar.dragClass);
                    0 === a.length && (a = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(a)), E(t, {
                        $el: r,
                        el: r[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        Z = {
            setTransform: function(e, t) {
                var n = this.rtl,
                    i = m(e),
                    r = n ? -1 : 1,
                    a = i.attr("data-swiper-parallax") || "0",
                    s = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    u = i.attr("data-swiper-parallax-opacity");
                if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != u) {
                    var d = u - (u - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = d
                }
                if (null == l) i.transform("translate3d(" + s + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    n = e.slides,
                    i = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                    e.parallax.setTransform(t, i)
                })), n.each((function(t, n) {
                    var a = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(n / 2) - i * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                        e.parallax.setTransform(t, a)
                    }))
                }))
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                    var n = m(t),
                        i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (i = 0), n.transition(i)
                }))
            }
        },
        J = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    n = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    n = t.support,
                    i = t.params.zoom,
                    r = t.zoom,
                    a = r.gesture;
                if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !n.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    r.fakeGestureTouched = !0, a.scaleStart = J.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this,
                    n = t.support,
                    i = t.params.zoom,
                    r = t.zoom,
                    a = r.gesture;
                if (!n.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    r.fakeGestureMoved = !0, a.scaleMove = J.getDistanceBetweenTouches(e)
                }
                a.$imageEl && 0 !== a.$imageEl.length ? (n.gestures ? r.scale = e.scale * r.currentScale : r.scale = a.scaleMove / a.scaleStart * r.currentScale, r.scale > a.maxRatio && (r.scale = a.maxRatio - 1 + Math.pow(r.scale - a.maxRatio + 1, .5)), r.scale < i.minRatio && (r.scale = i.minRatio + 1 - Math.pow(i.minRatio - r.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")")) : "gesturechange" === e.type && r.onGestureStart(e)
            },
            onGestureEnd: function(e) {
                var t = this,
                    n = t.device,
                    i = t.support,
                    r = t.params.zoom,
                    a = t.zoom,
                    s = a.gesture;
                if (!i.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, s.maxRatio), r.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.device,
                    n = this.zoom,
                    i = n.gesture,
                    r = n.image;
                i.$imageEl && 0 !== i.$imageEl.length && (r.isTouched || (t.android && e.cancelable && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    n = t.zoom,
                    i = n.gesture,
                    r = n.image,
                    a = n.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                    r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = T(i.$imageWrapEl[0], "x") || 0, r.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                    var s = r.width * n.scale,
                        o = r.height * n.scale;
                    if (!(s < i.slideWidth && o < i.slideHeight)) {
                        if (r.minX = Math.min(i.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    n = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var r = 300,
                        a = 300,
                        s = i.x * r,
                        o = n.currentX + s,
                        l = i.y * a,
                        u = n.currentY + l;
                    0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((u - n.currentY) / i.y));
                    var d = Math.max(r, a);
                    n.currentX = o, n.currentY = u;
                    var c = n.width * e.scale,
                        p = n.height * e.scale;
                    n.minX = Math.min(t.slideWidth / 2 - c / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this,
                    t = e.zoom,
                    n = t.gesture;
                n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, n, i, r, a, s, l, u, d, c, p, h, f, m, v, g, y = this,
                    b = o(),
                    w = y.zoom,
                    x = y.params.zoom,
                    T = w.gesture,
                    C = w.image;
                T.$slideEl || (y.params.virtual && y.params.virtual.enabled && y.virtual ? T.$slideEl = y.$wrapperEl.children("." + y.params.slideActiveClass) : T.$slideEl = y.slides.eq(y.activeIndex), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, n = C.touchesStart.y), w.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, w.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (v = T.$slideEl[0].offsetWidth, g = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + b.scrollX + v / 2 - t, r = T.$slideEl.offset().top + b.scrollY + g / 2 - n, l = T.$imageEl[0].offsetWidth, u = T.$imageEl[0].offsetHeight, d = l * w.scale, c = u * w.scale, f = -(p = Math.min(v / 2 - d / 2, 0)), m = -(h = Math.min(g / 2 - c / 2, 0)), (a = i * w.scale) < p && (a = p), a > f && (a = f), (s = r * w.scale) < h && (s = h), s > m && (s = m)) : (a = 0, s = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    n = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0)
            },
            toggleGestures: function(e) {
                var t = this,
                    n = t.zoom,
                    i = n.slideSelector,
                    r = n.passiveListener;
                t.$wrapperEl[e]("gesturestart", i, n.onGestureStart, r), t.$wrapperEl[e]("gesturechange", i, n.onGestureChange, r), t.$wrapperEl[e]("gestureend", i, n.onGestureEnd, r)
            },
            enableGestures: function() {
                this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
            },
            disableGestures: function() {
                this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
            },
            enable: function() {
                var e = this,
                    t = e.support,
                    n = e.zoom;
                if (!n.enabled) {
                    n.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !t.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + e.params.slideClass;
                    e.zoom.passiveListener = i, e.zoom.slideSelector = a, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, n.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, a, n.onGestureChange, r), e.$wrapperEl.on(e.touchEvents.end, a, n.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, n.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, n.onTouchMove, r)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    var n = e.support;
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !n.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !n.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + e.params.slideClass;
                    n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, r), e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, r)
                }
            }
        },
        ee = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var n = this,
                    i = n.params.lazy;
                if (void 0 !== e && 0 !== n.slides.length) {
                    var r = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                        a = r.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
                    !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || a.push(r[0]), 0 !== a.length && a.each((function(e) {
                        var a = m(e);
                        a.addClass(i.loadingClass);
                        var s = a.attr("data-background"),
                            o = a.attr("data-src"),
                            l = a.attr("data-srcset"),
                            u = a.attr("data-sizes"),
                            d = a.parent("picture");
                        n.loadImage(a[0], o || s, l, u, !1, (function() {
                            if (null != n && n && (!n || n.params) && !n.destroyed) {
                                if (s ? (a.css("background-image", 'url("' + s + '")'), a.removeAttr("data-background")) : (l && (a.attr("srcset", l), a.removeAttr("data-srcset")), u && (a.attr("sizes", u), a.removeAttr("data-sizes")), d.length && d.children("source").each((function(e) {
                                        var t = m(e);
                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                    })), o && (a.attr("src", o), a.removeAttr("data-src"))), a.addClass(i.loadedClass).removeClass(i.loadingClass), r.find("." + i.preloaderClass).remove(), n.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(n.params.slideDuplicateClass)) {
                                        var c = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                        n.lazy.loadInSlide(c.index(), !1)
                                    } else {
                                        var p = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        n.lazy.loadInSlide(p.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", r[0], a[0]), n.params.autoHeight && n.updateAutoHeight()
                            }
                        })), n.emit("lazyImageLoad", r[0], a[0])
                    }))
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    n = e.params,
                    i = e.slides,
                    r = e.activeIndex,
                    a = e.virtual && n.virtual.enabled,
                    s = n.lazy,
                    o = n.slidesPerView;

                function l(e) {
                    if (a) {
                        if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (i[e]) return !0;
                    return !1
                }

                function u(e) {
                    return a ? m(e).attr("data-swiper-slide-index") : m(e).index()
                }
                if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each((function(t) {
                    var n = a ? m(t).attr("data-swiper-slide-index") : m(t).index();
                    e.lazy.loadInSlide(n)
                }));
                else if (o > 1)
                    for (var d = r; d < r + o; d += 1) l(d) && e.lazy.loadInSlide(d);
                else e.lazy.loadInSlide(r);
                if (s.loadPrevNext)
                    if (o > 1 || s.loadPrevNextAmount && s.loadPrevNextAmount > 1) {
                        for (var c = s.loadPrevNextAmount, p = o, h = Math.min(r + p + Math.max(c, p), i.length), f = Math.max(r - Math.max(p, c), 0), v = r + o; v < h; v += 1) l(v) && e.lazy.loadInSlide(v);
                        for (var g = f; g < r; g += 1) l(g) && e.lazy.loadInSlide(g)
                    } else {
                        var y = t.children("." + n.slideNextClass);
                        y.length > 0 && e.lazy.loadInSlide(u(y));
                        var b = t.children("." + n.slidePrevClass);
                        b.length > 0 && e.lazy.loadInSlide(u(b))
                    }
            },
            checkInViewOnLoad: function() {
                var e = o(),
                    t = this;
                if (t && !t.destroyed) {
                    var n = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
                        i = n[0] === e,
                        r = i ? e.innerWidth : n[0].offsetWidth,
                        a = i ? e.innerHeight : n[0].offsetHeight,
                        s = t.$el.offset(),
                        l = !1;
                    t.rtlTranslate && (s.left -= t.$el[0].scrollLeft);
                    for (var u = [
                            [s.left, s.top],
                            [s.left + t.width, s.top],
                            [s.left, s.top + t.height],
                            [s.left + t.width, s.top + t.height]
                        ], d = 0; d < u.length; d += 1) {
                        var c = u[d];
                        if (c[0] >= 0 && c[0] <= r && c[1] >= 0 && c[1] <= a) {
                            if (0 === c[0] && 0 === c[1]) continue;
                            l = !0
                        }
                    }
                    l ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, n.on("scroll", t.lazy.checkInViewOnLoad))
                }
            }
        },
        te = {
            LinearSpline: function(e, t) {
                var n, i, r, a, s;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (s = function(e, t) {
                        for (i = -1, n = e.length; n - i > 1;) e[r = n + i >> 1] <= t ? i = r : n = r;
                        return n
                    }(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var n, i, r = this,
                    a = r.controller.control,
                    s = r.constructor;

                function o(e) {
                    var t = r.rtlTranslate ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var l = 0; l < a.length; l += 1) a[l] !== t && a[l] instanceof s && o(a[l]);
                else a instanceof s && t !== a && o(a)
            },
            setTransition: function(e, t) {
                var n, i = this,
                    r = i.constructor,
                    a = i.controller.control;

                function s(t) {
                    t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && w((function() {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function() {
                        a && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(a))
                    for (n = 0; n < a.length; n += 1) a[n] !== t && a[n] instanceof r && s(a[n]);
                else a instanceof r && t !== a && s(a)
            }
        },
        ne = {
            getRandomNumber: function(e) {
                return void 0 === e && (e = 16), "x".repeat(e).replace(/x/g, (function() {
                    return Math.round(16 * Math.random()).toString(16)
                }))
            },
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            makeElNotFocusable: function(e) {
                return e.attr("tabIndex", "-1"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElRoleDescription: function(e, t) {
                return e.attr("aria-roledescription", t), e
            },
            addElControls: function(e, t) {
                return e.attr("aria-controls", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            addElId: function(e, t) {
                return e.attr("id", t), e
            },
            addElLive: function(e, t) {
                return e.attr("aria-live", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterOrSpaceKey: function(e) {
                if (13 === e.keyCode || 32 === e.keyCode) {
                    var t = this,
                        n = t.params.a11y,
                        i = m(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop && e.navigation) {
                    var t = e.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), n && n.length > 0 && (e.isEnd ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n)))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(n) {
                    var i = m(n);
                    e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))
                }))
            },
            init: function() {
                var e = this,
                    t = e.params.a11y;
                e.$el.append(e.a11y.liveRegion);
                var n = e.$el;
                t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(n, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(n, t.containerMessage);
                var i, r, a, s = e.$wrapperEl,
                    o = s.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
                e.a11y.addElId(s, o), i = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(s, i), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each((function(n) {
                    var i = m(n),
                        r = t.slideLabelMessage.replace(/\{\{index\}\}/, i.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
                    e.a11y.addElLabel(i, r)
                })), e.navigation && e.navigation.$nextEl && (r = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.nextSlideMessage), e.a11y.addElControls(r, o)), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(a, t.prevSlideMessage), e.a11y.addElControls(a, o)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterOrSpaceKey)
            },
            destroy: function() {
                var e, t, n = this;
                n.a11y.liveRegion && n.a11y.liveRegion.length > 0 && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterOrSpaceKey), t && t.off("keydown", n.a11y.onEnterOrSpaceKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass.replace(/ /g, "."), n.a11y.onEnterOrSpaceKey)
            }
        },
        ie = {
            init: function() {
                var e = this,
                    t = o();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var n = e.history;
                    n.initialized = !0, n.paths = ie.getPathValues(e.params.url), (n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = o();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                var e = this;
                e.history.paths = ie.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function(e) {
                var t = o(),
                    n = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    })),
                    i = n.length;
                return {
                    key: n[i - 2],
                    value: n[i - 1]
                }
            },
            setHistory: function(e, t) {
                var n = this,
                    i = o();
                if (n.history.initialized && n.params.history.enabled) {
                    var r;
                    r = n.params.url ? new URL(n.params.url) : i.location;
                    var a = n.slides.eq(t),
                        s = ie.slugify(a.attr("data-history"));
                    r.pathname.includes(e) || (s = e + "/" + s);
                    var l = i.history.state;
                    l && l.value === s || (n.params.history.replaceState ? i.history.replaceState({
                        value: s
                    }, null, s) : i.history.pushState({
                        value: s
                    }, null, s))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
                var i = this;
                if (t)
                    for (var r = 0, a = i.slides.length; r < a; r += 1) {
                        var s = i.slides.eq(r);
                        if (ie.slugify(s.attr("data-history")) === t && !s.hasClass(i.params.slideDuplicateClass)) {
                            var o = s.index();
                            i.slideTo(o, e, n)
                        }
                    } else i.slideTo(0, e, n)
            }
        },
        re = {
            onHashCange: function() {
                var e = this,
                    t = a();
                e.emit("hashChange");
                var n = t.location.hash.replace("#", "");
                if (n !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index();
                    if (void 0 === i) return;
                    e.slideTo(i)
                }
            },
            setHash: function() {
                var e = this,
                    t = o(),
                    n = a();
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");
                    else {
                        var i = e.slides.eq(e.activeIndex),
                            r = i.attr("data-hash") || i.attr("data-history");
                        n.location.hash = r || "", e.emit("hashSet")
                    }
            },
            init: function() {
                var e = this,
                    t = a(),
                    n = o();
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var i = t.location.hash.replace("#", "");
                    if (i)
                        for (var r = 0, s = e.slides.length; r < s; r += 1) {
                            var l = e.slides.eq(r);
                            if ((l.attr("data-hash") || l.attr("data-history")) === i && !l.hasClass(e.params.slideDuplicateClass)) {
                                var u = l.index();
                                e.slideTo(u, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && m(n).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                var e = o();
                this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ae = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = w((function() {
                    var t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
                }), n)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            },
            onVisibilityChange: function() {
                var e = this,
                    t = a();
                "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
            },
            onTransitionEnd: function(e) {
                var t = this;
                t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }
        },
        se = {
            setTranslate: function() {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                    var i = e.slides.eq(n),
                        r = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (r -= e.translate);
                    var a = 0;
                    e.isHorizontal() || (a = r, r = 0);
                    var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: s
                    }).transform("translate3d(" + r + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    n = t.slides,
                    i = t.$wrapperEl;
                if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    n.transitionEnd((function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
                        }
                    }))
                }
            }
        },
        oe = {
            setTranslate: function() {
                var e, t = this,
                    n = t.$el,
                    i = t.$wrapperEl,
                    r = t.slides,
                    a = t.width,
                    s = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    u = t.browser,
                    d = t.params.cubeEffect,
                    c = t.isHorizontal(),
                    p = t.virtual && t.params.virtual.enabled,
                    h = 0;
                d.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                for (var f = 0; f < r.length; f += 1) {
                    var v = r.eq(f),
                        g = f;
                    p && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var y = 90 * g,
                        b = Math.floor(y / 360);
                    o && (y = -y, b = Math.floor(-y / 360));
                    var w = Math.max(Math.min(v[0].progress, 1), -1),
                        x = 0,
                        T = 0,
                        C = 0;
                    g % 4 == 0 ? (x = 4 * -b * l, C = 0) : (g - 1) % 4 == 0 ? (x = 0, C = 4 * -b * l) : (g - 2) % 4 == 0 ? (x = l + 4 * b * l, C = l) : (g - 3) % 4 == 0 && (x = -l, C = 3 * l + 4 * l * b), o && (x = -x), c || (T = x, x = 0);
                    var E = "rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + C + "px)";
                    if (w <= 1 && w > -1 && (h = 90 * g + 90 * w, o && (h = 90 * -g - 90 * w)), v.transform(E), d.slideShadows) {
                        var S = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            k = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), v.append(S)), 0 === k.length && (k = m('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), v.append(k)), S.length && (S[0].style.opacity = Math.max(-w, 0)), k.length && (k[0].style.opacity = Math.max(w, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (c) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var A = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            $ = 1.5 - (Math.sin(2 * A * Math.PI / 360) / 2 + Math.cos(2 * A * Math.PI / 360) / 2),
                            M = d.shadowScale,
                            D = d.shadowScale / $,
                            z = d.shadowOffset;
                        e.transform("scale3d(" + M + ", 1, " + D + ") translate3d(0px, " + (s / 2 + z) + "px, " + -s / 2 / D + "px) rotateX(-90deg)")
                    }
                var L = u.isSafari || u.isWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this,
                    n = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
            }
        },
        le = {
            setTranslate: function() {
                for (var e = this, t = e.slides, n = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var r = t.eq(i),
                        a = r[0].progress;
                    e.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), -1));
                    var s = -180 * a,
                        o = 0,
                        l = -r[0].swiperSlideOffset,
                        u = 0;
                    if (e.isHorizontal() ? n && (s = -s) : (u = l, l = 0, o = -s, s = 0), r[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, e.params.flipEffect.slideShadows) {
                        var d = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), r.append(d)), 0 === c.length && (c = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(c)), d.length && (d[0].style.opacity = Math.max(-a, 0)), c.length && (c[0].style.opacity = Math.max(a, 0))
                    }
                    r.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    n = t.slides,
                    i = t.activeIndex,
                    r = t.$wrapperEl;
                if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    n.eq(i).transitionEnd((function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
                        }
                    }))
                }
            }
        },
        ue = {
            setTranslate: function() {
                for (var e = this, t = e.width, n = e.height, i = e.slides, r = e.slidesSizesGrid, a = e.params.coverflowEffect, s = e.isHorizontal(), o = e.translate, l = s ? t / 2 - o : n / 2 - o, u = s ? a.rotate : -a.rotate, d = a.depth, c = 0, p = i.length; c < p; c += 1) {
                    var h = i.eq(c),
                        f = r[c],
                        v = (l - h[0].swiperSlideOffset - f / 2) / f * a.modifier,
                        g = s ? u * v : 0,
                        y = s ? 0 : u * v,
                        b = -d * Math.abs(v),
                        w = a.stretch;
                    "string" == typeof w && -1 !== w.indexOf("%") && (w = parseFloat(a.stretch) / 100 * f);
                    var x = s ? 0 : w * v,
                        T = s ? w * v : 0,
                        C = 1 - (1 - a.scale) * Math.abs(v);
                    Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(y) < .001 && (y = 0), Math.abs(C) < .001 && (C = 0);
                    var E = "translate3d(" + T + "px," + x + "px," + b + "px)  rotateX(" + y + "deg) rotateY(" + g + "deg) scale(" + C + ")";
                    if (h.transform(E), h[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
                        var S = s ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                            k = s ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), h.append(S)), 0 === k.length && (k = m('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), h.append(k)), S.length && (S[0].style.opacity = v > 0 ? v : 0), k.length && (k[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        de = {
            init: function() {
                var e = this,
                    t = e.params.thumbs;
                if (e.thumbs.initialized) return !1;
                e.thumbs.initialized = !0;
                var n = e.constructor;
                return t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, E(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), E(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : C(t.swiper) && (e.thumbs.swiper = new n(E({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var n = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
                        var r;
                        if (r = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                            var a = e.activeIndex;
                            e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                            var s = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                o = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                            r = void 0 === s ? o : void 0 === o ? s : o - a < a - s ? o : s
                        }
                        e.slideTo(r)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    n = t.thumbs.swiper;
                if (n) {
                    var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        r = t.params.thumbs.autoScrollOffset,
                        a = r && !n.params.loop;
                    if (t.realIndex !== n.realIndex || a) {
                        var s, o, l = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                            var u = n.slides.eq(l).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                d = n.slides.eq(l).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === u ? d : void 0 === d ? u : d - l == l - u ? l : d - l < l - u ? d : u, o = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else o = (s = t.realIndex) > t.previousIndex ? "next" : "prev";
                        a && (s += "next" === o ? r : -1 * r), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(s) < 0 && (n.params.centeredSlides ? s = s > l ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > l && (s = s - i + 1), n.slideTo(s, e ? 0 : void 0))
                    }
                    var c = 1,
                        p = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (c = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), n.slides.removeClass(p), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (var h = 0; h < c; h += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(p);
                    else
                        for (var f = 0; f < c; f += 1) n.slides.eq(t.realIndex + f).addClass(p)
                }
            }
        },
        ce = [B, G, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                S(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: x(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: V.enable,
                        disable: V.disable,
                        handle: V.handle,
                        handleMouseEnter: V.handleMouseEnter,
                        handleMouseLeave: V.handleMouseLeave,
                        animateSlider: V.animateSlider,
                        releaseScroll: V.releaseScroll
                    }
                })
            },
            on: {
                init: function(e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function(e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                S(this, {
                    navigation: t({}, U)
                })
            },
            on: {
                init: function(e) {
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function(e) {
                    e.navigation.update()
                },
                fromEdge: function(e) {
                    e.navigation.update()
                },
                destroy: function(e) {
                    e.navigation.destroy()
                },
                click: function(e, t) {
                    var n = e.navigation,
                        i = n.$nextEl,
                        r = n.$prevEl,
                        a = t.target;
                    if (e.params.navigation.hideOnClick && !m(a).is(r) && !m(a).is(i)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                        var s;
                        i ? s = i.hasClass(e.params.navigation.hiddenClass) : r && (s = r.hasClass(e.params.navigation.hiddenClass)), !0 === s ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
                    }
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                S(this, {
                    pagination: t({
                        dynamicBulletIndex: 0
                    }, K)
                })
            },
            on: {
                init: function(e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function(e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange: function(e) {
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function(e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function(e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function(e) {
                    e.pagination.destroy()
                },
                click: function(e, t) {
                    var n = t.target;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(n).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
                        !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                    }
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                S(this, {
                    scrollbar: t({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, Q)
                })
            },
            on: {
                init: function(e) {
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function(e) {
                    e.scrollbar.updateSize()
                },
                resize: function(e) {
                    e.scrollbar.updateSize()
                },
                observerUpdate: function(e) {
                    e.scrollbar.updateSize()
                },
                setTranslate: function(e) {
                    e.scrollbar.setTranslate()
                },
                setTransition: function(e, t) {
                    e.scrollbar.setTransition(t)
                },
                destroy: function(e) {
                    e.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                S(this, {
                    parallax: t({}, Z)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                init: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTranslate: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTransition: function(e, t) {
                    e.params.parallax.enabled && e.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this;
                S(e, {
                    zoom: t({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, J)
                });
                var n = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        if (n !== t) {
                            var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, i, r)
                        }
                        n = t
                    }
                })
            },
            on: {
                init: function(e) {
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function(e) {
                    e.zoom.disable()
                },
                touchStart: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchStart(t)
                },
                touchEnd: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchEnd(t)
                },
                doubleTap: function(e, t) {
                    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
                },
                transitionEnd: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                S(this, {
                    lazy: t({
                        initialImageLoaded: !1
                    }, ee)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function(e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
                },
                scroll: function(e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function(e) {
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function(e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange: function(e) {
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                S(this, {
                    controller: t({
                        control: this.params.controller.control
                    }, te)
                })
            },
            on: {
                update: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function(e, t, n) {
                    e.controller.control && e.controller.setTranslate(t, n)
                },
                setTransition: function(e, t, n) {
                    e.controller.control && e.controller.setTransition(t, n)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null
                }
            },
            create: function() {
                S(this, {
                    a11y: t({}, ne, {
                        liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                })
            },
            on: {
                afterInit: function(e) {
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function(e) {
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function(e) {
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                S(this, {
                    history: t({}, ie)
                })
            },
            on: {
                init: function(e) {
                    e.params.history.enabled && e.history.init()
                },
                destroy: function(e) {
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd: function(e) {
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange: function(e) {
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                S(this, {
                    hashNavigation: t({
                        initialized: !1
                    }, re)
                })
            },
            on: {
                init: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd: function(e) {
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange: function(e) {
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                S(this, {
                    autoplay: t({}, ae, {
                        running: !1,
                        paused: !1
                    })
                })
            },
            on: {
                init: function(e) {
                    e.params.autoplay.enabled && (e.autoplay.start(), a().addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t, n) {
                    e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
                },
                sliderFirstMove: function(e) {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd: function(e) {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy: function(e) {
                    e.autoplay.running && e.autoplay.stop(), a().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                S(this, {
                    fadeEffect: t({}, se)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        E(e.params, t), E(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                S(this, {
                    cubeEffect: t({}, oe)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        E(e.params, t), E(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "cube" === e.params.effect && e.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                S(this, {
                    flipEffect: t({}, le)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        E(e.params, t), E(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "flip" === e.params.effect && e.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                S(this, {
                    coverflowEffect: t({}, ue)
                })
            },
            on: {
                beforeInit: function(e) {
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function(e) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                S(this, {
                    thumbs: t({
                        swiper: null,
                        initialized: !1
                    }, de)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t = e.params.thumbs;
                    t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                },
                slideChange: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                update: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                resize: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                observerUpdate: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                setTransition: function(e, t) {
                    var n = e.thumbs.swiper;
                    n && n.setTransition(t)
                },
                beforeDestroy: function(e) {
                    var t = e.thumbs.swiper;
                    t && e.thumbs.swiperCreated && t && t.destroy()
                }
            }
        }];
    return X.use(ce), X
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}((function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            return function() {
                /**
                 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                 */
                var e, n, i;
                t && t.requirejs || (t ? n = t : t = {}, function(t) {
                    var r, a, s, o, l = {},
                        u = {},
                        d = {},
                        c = {},
                        p = Object.prototype.hasOwnProperty,
                        h = [].slice,
                        f = /\.js$/;

                    function m(e, t) {
                        return p.call(e, t)
                    }

                    function v(e, t) {
                        var n, i, r, a, s, o, l, u, c, p, h, m = t && t.split("/"),
                            v = d.map,
                            g = v && v["*"] || {};
                        if (e) {
                            for (s = (e = e.split("/")).length - 1, d.nodeIdCompat && f.test(e[s]) && (e[s] = e[s].replace(f, "")), "." === e[0].charAt(0) && m && (e = m.slice(0, m.length - 1).concat(e)), c = 0; c < e.length; c++)
                                if ("." === (h = e[c])) e.splice(c, 1), c -= 1;
                                else if (".." === h) {
                                if (0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1]) continue;
                                c > 0 && (e.splice(c - 1, 2), c -= 2)
                            }
                            e = e.join("/")
                        }
                        if ((m || g) && v) {
                            for (c = (n = e.split("/")).length; c > 0; c -= 1) {
                                if (i = n.slice(0, c).join("/"), m)
                                    for (p = m.length; p > 0; p -= 1)
                                        if ((r = v[m.slice(0, p).join("/")]) && (r = r[i])) {
                                            a = r, o = c;
                                            break
                                        }
                                if (a) break;
                                !l && g && g[i] && (l = g[i], u = c)
                            }!a && l && (a = l, o = u), a && (n.splice(0, o, a), e = n.join("/"))
                        }
                        return e
                    }

                    function g(e, n) {
                        return function() {
                            var i = h.call(arguments, 0);
                            return "string" != typeof i[0] && 1 === i.length && i.push(null), a.apply(t, i.concat([e, n]))
                        }
                    }

                    function y(e) {
                        return function(t) {
                            l[e] = t
                        }
                    }

                    function b(e) {
                        if (m(u, e)) {
                            var n = u[e];
                            delete u[e], c[e] = !0, r.apply(t, n)
                        }
                        if (!m(l, e) && !m(c, e)) throw new Error("No " + e);
                        return l[e]
                    }

                    function w(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function x(e) {
                        return e ? w(e) : []
                    }

                    function T(e) {
                        return function() {
                            return d && d.config && d.config[e] || {}
                        }
                    }
                    s = function(e, t) {
                        var n, i, r = w(e),
                            a = r[0],
                            s = t[1];
                        return e = r[1], a && (n = b(a = v(a, s))), a ? e = n && n.normalize ? n.normalize(e, (i = s, function(e) {
                            return v(e, i)
                        })) : v(e, s) : (a = (r = w(e = v(e, s)))[0], e = r[1], a && (n = b(a))), {
                            f: a ? a + "!" + e : e,
                            n: e,
                            pr: a,
                            p: n
                        }
                    }, o = {
                        require: function(e) {
                            return g(e)
                        },
                        exports: function(e) {
                            var t = l[e];
                            return void 0 !== t ? t : l[e] = {}
                        },
                        module: function(e) {
                            return {
                                id: e,
                                uri: "",
                                exports: l[e],
                                config: T(e)
                            }
                        }
                    }, r = function(e, n, i, r) {
                        var a, d, p, h, f, v, w, T = [],
                            C = typeof i;
                        if (v = x(r = r || e), "undefined" === C || "function" === C) {
                            for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                if ("require" === (d = (h = s(n[f], v)).f)) T[f] = o.require(e);
                                else if ("exports" === d) T[f] = o.exports(e), w = !0;
                            else if ("module" === d) a = T[f] = o.module(e);
                            else if (m(l, d) || m(u, d) || m(c, d)) T[f] = b(d);
                            else {
                                if (!h.p) throw new Error(e + " missing " + d);
                                h.p.load(h.n, g(r, !0), y(d), {}), T[f] = l[d]
                            }
                            p = i ? i.apply(l[e], T) : void 0, e && (a && a.exports !== t && a.exports !== l[e] ? l[e] = a.exports : p === t && w || (l[e] = p))
                        } else e && (l[e] = i)
                    }, e = n = a = function(e, n, i, l, u) {
                        if ("string" == typeof e) return o[e] ? o[e](n) : b(s(e, x(n)).f);
                        if (!e.splice) {
                            if ((d = e).deps && a(d.deps, d.callback), !n) return;
                            n.splice ? (e = n, n = i, i = null) : e = t
                        }
                        return n = n || function() {}, "function" == typeof i && (i = l, l = u), l ? r(t, e, n, i) : setTimeout((function() {
                            r(t, e, n, i)
                        }), 4), a
                    }, a.config = function(e) {
                        return a(e)
                    }, e._defined = l, (i = function(e, t, n) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (n = t, t = []), m(l, e) || m(u, e) || (u[e] = [e, t, n])
                    }).amd = {
                        jQuery: !0
                    }
                }(), t.requirejs = e, t.require = n, t.define = i)
            }(), t.define("almond", (function() {})), t.define("jquery", [], (function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            })), t.define("select2/utils", ["jquery"], (function(e) {
                var t = {};

                function n(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) {
                        "function" == typeof t[i] && ("constructor" !== i && n.push(i))
                    }
                    return n
                }
                t.Extend = function(e, t) {
                    var n = {}.hasOwnProperty;

                    function i() {
                        this.constructor = e
                    }
                    for (var r in t) n.call(t, r) && (e[r] = t[r]);
                    return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                }, t.Decorate = function(e, t) {
                    var i = n(t),
                        r = n(e);

                    function a() {
                        var n = Array.prototype.unshift,
                            i = t.prototype.constructor.length,
                            r = e.prototype.constructor;
                        i > 0 && (n.call(arguments, e.prototype.constructor), r = t.prototype.constructor), r.apply(this, arguments)
                    }
                    t.displayName = e.displayName, a.prototype = new function() {
                        this.constructor = a
                    };
                    for (var s = 0; s < r.length; s++) {
                        var o = r[s];
                        a.prototype[o] = e.prototype[o]
                    }
                    for (var l = function(e) {
                            var n = function() {};
                            e in a.prototype && (n = a.prototype[e]);
                            var i = t.prototype[e];
                            return function() {
                                return Array.prototype.unshift.call(arguments, n), i.apply(this, arguments)
                            }
                        }, u = 0; u < i.length; u++) {
                        var d = i[u];
                        a.prototype[d] = l(d)
                    }
                    return a
                };
                var i = function() {
                    this.listeners = {}
                };
                i.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, i.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, i.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                }, t.Observable = i, t.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) {
                        t += Math.floor(36 * Math.random()).toString(36)
                    }
                    return t
                }, t.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, t._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r];
                                (a = a.substring(0, 1).toLowerCase() + a.substring(1)) in i || (i[a] = {}), r == n.length - 1 && (i[a] = e[t]), i = i[a]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, t.hasScroll = function(t, n) {
                    var i = e(n),
                        r = n.style.overflowX,
                        a = n.style.overflowY;
                    return (r !== a || "hidden" !== a && "visible" !== a) && ("scroll" === r || "scroll" === a || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                }, t.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                        return t[e]
                    }))
                }, t.appendMany = function(t, n) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var i = e();
                        e.map(n, (function(e) {
                            i = i.add(e)
                        })), n = i
                    }
                    t.append(n)
                }, t.__cache = {};
                var r = 0;
                return t.GetUniqueElementId = function(e) {
                    var t = e.getAttribute("data-select2-id");
                    return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), t = r.toString())), t
                }, t.StoreData = function(e, n, i) {
                    var r = t.GetUniqueElementId(e);
                    t.__cache[r] || (t.__cache[r] = {}), t.__cache[r][n] = i
                }, t.GetData = function(n, i) {
                    var r = t.GetUniqueElementId(n);
                    return i ? t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i) : t.__cache[r]
                }, t.RemoveData = function(e) {
                    var n = t.GetUniqueElementId(e);
                    null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id")
                }, t
            })), t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                function n(e, t, i) {
                    this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                }, n.prototype.clear = function() {
                    this.$results.empty()
                }, n.prototype.displayMessage = function(t) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                        r = this.options.get("translations").get(t.message);
                    i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                }, n.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, n.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                r = this.option(i);
                            t.push(r)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, n.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, n.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, n.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, n.prototype.setClasses = function() {
                    var n = this;
                    this.data.current((function(i) {
                        var r = e.map(i, (function(e) {
                            return e.id.toString()
                        }));
                        n.$results.find(".select2-results__option[aria-selected]").each((function() {
                            var n = e(this),
                                i = t.GetData(this, "data"),
                                a = "" + i.id;
                            null != i.element && i.element.selected || null == i.element && e.inArray(a, r) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                        }))
                    }))
                }, n.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, n.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, n.prototype.option = function(n) {
                    var i = document.createElement("li");
                    i.className = "select2-results__option";
                    var r = {
                            role: "option",
                            "aria-selected": "false"
                        },
                        a = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                    for (var s in (null != n.element && a.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r) {
                        var o = r[s];
                        i.setAttribute(s, o)
                    }
                    if (n.children) {
                        var l = e(i),
                            u = document.createElement("strong");
                        u.className = "select2-results__group";
                        e(u);
                        this.template(n, u);
                        for (var d = [], c = 0; c < n.children.length; c++) {
                            var p = n.children[c],
                                h = this.option(p);
                            d.push(h)
                        }
                        var f = e("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        f.append(d), l.append(u), l.append(f)
                    } else this.template(n, i);
                    return t.StoreData(i, "data", n), i
                }, n.prototype.bind = function(n, i) {
                    var r = this,
                        a = n.id + "-results";
                    this.$results.attr("id", a), n.on("results:all", (function(e) {
                        r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem())
                    })), n.on("results:append", (function(e) {
                        r.append(e.data), n.isOpen() && r.setClasses()
                    })), n.on("query", (function(e) {
                        r.hideMessages(), r.showLoading(e)
                    })), n.on("select", (function() {
                        n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                    })), n.on("unselect", (function() {
                        n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                    })), n.on("open", (function() {
                        r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
                    })), n.on("close", (function() {
                        r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
                    })), n.on("results:toggle", (function() {
                        var e = r.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    })), n.on("results:select", (function() {
                        var e = r.getHighlightedResults();
                        if (0 !== e.length) {
                            var n = t.GetData(e[0], "data");
                            "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", {
                                data: n
                            })
                        }
                    })), n.on("results:previous", (function() {
                        var e = r.getHighlightedResults(),
                            t = r.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (!(n <= 0)) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var a = t.eq(i);
                            a.trigger("mouseenter");
                            var s = r.$results.offset().top,
                                o = a.offset().top,
                                l = r.$results.scrollTop() + (o - s);
                            0 === i ? r.$results.scrollTop(0) : o - s < 0 && r.$results.scrollTop(l)
                        }
                    })), n.on("results:next", (function() {
                        var e = r.getHighlightedResults(),
                            t = r.$results.find("[aria-selected]"),
                            n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var a = r.$results.offset().top + r.$results.outerHeight(!1),
                                s = i.offset().top + i.outerHeight(!1),
                                o = r.$results.scrollTop() + s - a;
                            0 === n ? r.$results.scrollTop(0) : s > a && r.$results.scrollTop(o)
                        }
                    })), n.on("results:focus", (function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    })), n.on("results:message", (function(e) {
                        r.displayMessage(e)
                    })), e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                        var t = r.$results.scrollTop(),
                            n = r.$results.get(0).scrollHeight - t + e.deltaY,
                            i = e.deltaY > 0 && t - e.deltaY <= 0,
                            a = e.deltaY < 0 && n <= r.$results.height();
                        i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : a && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
                    })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                        var i = e(this),
                            a = t.GetData(this, "data");
                        "true" !== i.attr("aria-selected") ? r.trigger("select", {
                            originalEvent: n,
                            data: a
                        }) : r.options.get("multiple") ? r.trigger("unselect", {
                            originalEvent: n,
                            data: a
                        }) : r.trigger("close", {})
                    })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) {
                        var i = t.GetData(this, "data");
                        r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
                            data: i,
                            element: e(this)
                        })
                    }))
                }, n.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, n.prototype.destroy = function() {
                    this.$results.remove()
                }, n.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            r = this.$results.scrollTop() + (i - n),
                            a = i - n;
                        r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || a < 0) && this.$results.scrollTop(r)
                    }
                }, n.prototype.template = function(t, n) {
                    var i = this.options.get("templateResult"),
                        r = this.options.get("escapeMarkup"),
                        a = i(t, n);
                    null == a ? n.style.display = "none" : "string" == typeof a ? n.innerHTML = r(a) : e(n).append(a)
                }, n
            })), t.define("select2/keys", [], (function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n
                }, i.prototype.bind = function(e, t) {
                    var i = this,
                        r = e.id + "-results";
                    this.container = e, this.$selection.on("focus", (function(e) {
                        i.trigger("focus", e)
                    })), this.$selection.on("blur", (function(e) {
                        i._handleBlur(e)
                    })), this.$selection.on("keydown", (function(e) {
                        i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                    })), e.on("results:focus", (function(e) {
                        i.$selection.attr("aria-activedescendant", e.data._resultId)
                    })), e.on("selection:update", (function(e) {
                        i.update(e.data)
                    })), e.on("open", (function() {
                        i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
                    })), e.on("close", (function() {
                        i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e)
                    })), e.on("enable", (function() {
                        i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false")
                    })), e.on("disable", (function() {
                        i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true")
                    }))
                }, i.prototype._handleBlur = function(t) {
                    var n = this;
                    window.setTimeout((function() {
                        document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                    }), 1)
                }, i.prototype._attachCloseHandler = function(n) {
                    e(document.body).on("mousedown.select2." + n.id, (function(n) {
                        var i = e(n.target).closest(".select2");
                        e(".select2.select2-container--open").each((function() {
                            this != i[0] && t.GetData(this, "element").select2("close")
                        }))
                    }))
                }, i.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }, i.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }, i
            })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(r, t), r.prototype.render = function() {
                    var e = r.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, r.prototype.bind = function(e, t) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments);
                    var i = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", (function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), e.on("focus", (function(t) {
                        e.isOpen() || n.$selection.trigger("focus")
                    }))
                }, r.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, r.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, r.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, r.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i);
                        var r = t.title || t.text;
                        r ? n.attr("title", r) : n.removeAttr("title")
                    } else this.clear()
                }, r
            })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                function i(e, t) {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, i.prototype.bind = function(t, r) {
                    var a = this;
                    i.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(e) {
                        a.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                        if (!a.isDisabled()) {
                            var i = e(this).parent(),
                                r = n.GetData(i[0], "data");
                            a.trigger("unselect", {
                                originalEvent: t,
                                data: r
                            })
                        }
                    }))
                }, i.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, i.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, i.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var r = e[i],
                                a = this.selectionContainer(),
                                s = this.display(r, a);
                            a.append(s);
                            var o = r.title || r.text;
                            o && a.attr("title", o), n.StoreData(a[0], "data", r), t.push(a)
                        }
                        var l = this.$selection.find(".select2-selection__rendered");
                        n.appendMany(l, t)
                    }
                }, i
            })), t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (t.length > 1 || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                function i() {}
                return i.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                        i._handleClear(e)
                    })), t.on("keypress", (function(e) {
                        i._handleKeyboardClear(e, t)
                    }))
                }, i.prototype._handleClear = function(e, t) {
                    if (!this.isDisabled()) {
                        var i = this.$selection.find(".select2-selection__clear");
                        if (0 !== i.length) {
                            t.stopPropagation();
                            var r = n.GetData(i[0], "data"),
                                a = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var s = {
                                data: r
                            };
                            if (this.trigger("clear", s), s.prevented) this.$element.val(a);
                            else {
                                for (var o = 0; o < r.length; o++)
                                    if (s = {
                                            data: r[o]
                                        }, this.trigger("unselect", s), s.prevented) return void this.$element.val(a);
                                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }
                }, i.prototype._handleKeyboardClear = function(e, n, i) {
                    i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                }, i.prototype.update = function(t, i) {
                    if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                        var r = this.options.get("translations").get("removeAllItems"),
                            a = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                        n.StoreData(a[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(a)
                    }
                }, i
            })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                function i(e, t, n) {
                    e.call(this, t, n)
                }
                return i.prototype.render = function(t) {
                    var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = n, this.$search = n.find("input");
                    var i = t.call(this);
                    return this._transferTabIndex(), i
                }, i.prototype.bind = function(e, i, r) {
                    var a = this,
                        s = i.id + "-results";
                    e.call(this, i, r), i.on("open", (function() {
                        a.$search.attr("aria-controls", s), a.$search.trigger("focus")
                    })), i.on("close", (function() {
                        a.$search.val(""), a.$search.removeAttr("aria-controls"), a.$search.removeAttr("aria-activedescendant"), a.$search.trigger("focus")
                    })), i.on("enable", (function() {
                        a.$search.prop("disabled", !1), a._transferTabIndex()
                    })), i.on("disable", (function() {
                        a.$search.prop("disabled", !0)
                    })), i.on("focus", (function(e) {
                        a.$search.trigger("focus")
                    })), i.on("results:focus", (function(e) {
                        e.data._resultId ? a.$search.attr("aria-activedescendant", e.data._resultId) : a.$search.removeAttr("aria-activedescendant")
                    })), this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                        a.trigger("focus", e)
                    })), this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                        a._handleBlur(e)
                    })), this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                        if (e.stopPropagation(), a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === a.$search.val()) {
                            var i = a.$searchContainer.prev(".select2-selection__choice");
                            if (i.length > 0) {
                                var r = t.GetData(i[0], "data");
                                a.searchRemoveChoice(r), e.preventDefault()
                            }
                        }
                    })), this.$selection.on("click", ".select2-search--inline", (function(e) {
                        a.$search.val() && e.stopPropagation()
                    }));
                    var o = document.documentMode,
                        l = o && o <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                        l ? a.$selection.off("input.search input.searchcheck") : a.$selection.off("keyup.search")
                    })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                        if (l && "input" === e.type) a.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && a.handleSearch(e)
                        }
                    }))
                }, i.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, i.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, i.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
                }, i.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, i.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", e)
                }, i
            })), t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                function t() {}
                return t.prototype.bind = function(t, n, i) {
                    var r = this,
                        a = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                        s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    t.call(this, n, i), n.on("*", (function(t, n) {
                        if (-1 !== e.inArray(t, a)) {
                            n = n || {};
                            var i = e.Event("select2:" + t, {
                                params: n
                            });
                            r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                        }
                    }))
                }, t
            })), t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                function n(e) {
                    this.dict = e || {}
                }
                return n.prototype.all = function() {
                    return this.dict
                }, n.prototype.get = function(e) {
                    return this.dict[e]
                }, n.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, n._cache = {}, n.loadPath = function(e) {
                    if (!(e in n._cache)) {
                        var i = t(e);
                        n._cache[e] = i
                    }
                    return new n(n._cache[e])
                }, n
            })), t.define("select2/diacritics", [], (function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Œ": "OE",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "œ": "oe",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ώ": "ω",
                    "ς": "σ",
                    "’": "'"
                }
            })), t.define("select2/data/base", ["../utils"], (function(e) {
                function t(e, n) {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                    var i = t.id + "-result-";
                    return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
                }, t
            })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, e), i.prototype.current = function(e) {
                    var t = [],
                        i = this;
                    this.$element.find(":selected").each((function() {
                        var e = n(this),
                            r = i.item(e);
                        t.push(r)
                    })), e(t)
                }, i.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
                    if (this.$element.prop("multiple")) this.current((function(i) {
                        var r = [];
                        (e = [e]).push.apply(e, i);
                        for (var a = 0; a < e.length; a++) {
                            var s = e[a].id; - 1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r), t.$element.trigger("input").trigger("change")
                    }));
                    else {
                        var i = e.id;
                        this.$element.val(i), this.$element.trigger("input").trigger("change")
                    }
                }, i.prototype.unselect = function(e) {
                    var t = this;
                    if (this.$element.prop("multiple")) {
                        if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
                        this.current((function(i) {
                            for (var r = [], a = 0; a < i.length; a++) {
                                var s = i[a].id;
                                s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                            }
                            t.$element.val(r), t.$element.trigger("input").trigger("change")
                        }))
                    }
                }, i.prototype.bind = function(e, t) {
                    var n = this;
                    this.container = e, e.on("select", (function(e) {
                        n.select(e.data)
                    })), e.on("unselect", (function(e) {
                        n.unselect(e.data)
                    }))
                }, i.prototype.destroy = function() {
                    this.$element.find("*").each((function() {
                        t.RemoveData(this)
                    }))
                }, i.prototype.query = function(e, t) {
                    var i = [],
                        r = this;
                    this.$element.children().each((function() {
                        var t = n(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var a = r.item(t),
                                s = r.matches(e, a);
                            null !== s && i.push(s)
                        }
                    })), t({
                        results: i
                    })
                }, i.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, i.prototype.option = function(e) {
                    var i;
                    e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                    var r = n(i),
                        a = this._normalizeItem(e);
                    return a.element = i, t.StoreData(i, "data", a), r
                }, i.prototype.item = function(e) {
                    var i = {};
                    if (null != (i = t.GetData(e[0], "data"))) return i;
                    if (e.is("option")) i = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        i = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var r = e.children("option"), a = [], s = 0; s < r.length; s++) {
                            var o = n(r[s]),
                                l = this.item(o);
                            a.push(l)
                        }
                        i.children = a
                    }
                    return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
                }, i.prototype._normalizeItem = function(e) {
                    e !== Object(e) && (e = {
                        id: e,
                        text: e
                    });
                    return null != (e = n.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, i.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, i
            })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype.bind = function(e, t) {
                    i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
                }, i.prototype.select = function(e) {
                    var t = this.$element.find("option").filter((function(t, n) {
                        return n.value == e.id.toString()
                    }));
                    0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                }, i.prototype.convertToOptions = function(e) {
                    var i = this,
                        r = this.$element.find("option"),
                        a = r.map((function() {
                            return i.item(n(this)).id
                        })).get(),
                        s = [];

                    function o(e) {
                        return function() {
                            return n(this).val() == e.id
                        }
                    }
                    for (var l = 0; l < e.length; l++) {
                        var u = this._normalizeItem(e[l]);
                        if (n.inArray(u.id, a) >= 0) {
                            var d = r.filter(o(u)),
                                c = this.item(d),
                                p = n.extend(!0, {}, u, c),
                                h = this.option(p);
                            d.replaceWith(h)
                        } else {
                            var f = this.option(u);
                            if (u.children) {
                                var m = this.convertToOptions(u.children);
                                t.appendMany(f, m)
                            }
                            s.push(f)
                        }
                    }
                    return s
                }, i
            })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return n.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, i) {
                            var r = n.ajax(e);
                            return r.then(t), r.fail(i), r
                        }
                    };
                    return n.extend({}, t, e, !0)
                }, i.prototype.processResults = function(e) {
                    return e
                }, i.prototype.query = function(e, t) {
                    var i = this;
                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var r = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);

                    function a() {
                        var a = r.transport(r, (function(r) {
                            var a = i.processResults(r, e);
                            i.options.get("debug") && window.console && console.error && (a && a.results && n.isArray(a.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(a)
                        }), (function() {
                            (!("status" in a) || 0 !== a.status && "0" !== a.status) && i.trigger("results:message", {
                                message: "errorLoading"
                            })
                        }));
                        i._request = a
                    }
                    "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(a, this.ajaxOptions.delay)) : a()
                }, i
            })), t.define("select2/data/tags", ["jquery"], (function(e) {
                function t(t, n, i) {
                    var r = i.get("tags"),
                        a = i.get("createTag");
                    void 0 !== a && (this.createTag = a);
                    var s = i.get("insertTag");
                    if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r))
                        for (var o = 0; o < r.length; o++) {
                            var l = r[o],
                                u = this._normalizeItem(l),
                                d = this.option(u);
                            this.$element.append(d)
                        }
                }
                return t.prototype.query = function(e, t, n) {
                    var i = this;
                    this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(r, a) {
                        for (var s = r.results, o = 0; o < s.length; o++) {
                            var l = s[o],
                                u = null != l.children && !e({
                                    results: l.children
                                }, !0);
                            if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || u) return !a && (r.data = s, void n(r))
                        }
                        if (a) return !0;
                        var d = i.createTag(t);
                        if (null != d) {
                            var c = i.option(d);
                            c.attr("data-select2-tag", !0), i.addOptions([c]), i.insertTag(s, d)
                        }
                        r.results = s, n(r)
                    })) : e.call(this, t, n)
                }, t.prototype.createTag = function(t, n) {
                    var i = e.trim(n.term);
                    return "" === i ? null : {
                        id: i,
                        text: i
                    }
                }, t.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, t.prototype._removeOldTags = function(t) {
                    this.$element.find("option[data-select2-tag]").each((function() {
                        this.selected || e(this).remove()
                    }))
                }, t
            })), t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                function t(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return t.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, t.prototype.query = function(t, n, i) {
                    var r = this;
                    n.term = n.term || "";
                    var a = this.tokenizer(n, this.options, (function(t) {
                        var n = r._normalizeItem(t);
                        if (!r.$element.find("option").filter((function() {
                                return e(this).val() === n.id
                            })).length) {
                            var i = r.option(n);
                            i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i])
                        }! function(e) {
                            r.trigger("select", {
                                data: e
                            })
                        }(n)
                    }));
                    a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.trigger("focus")), n.term = a.term), t.call(this, n, i)
                }, t.prototype.tokenizer = function(t, n, i, r) {
                    for (var a = i.get("tokenSeparators") || [], s = n.term, o = 0, l = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; o < s.length;) {
                        var u = s[o];
                        if (-1 !== e.inArray(u, a)) {
                            var d = s.substr(0, o),
                                c = l(e.extend({}, n, {
                                    term: d
                                }));
                            null != c ? (r(c), s = s.substr(o + 1) || "", o = 0) : o++
                        } else o++
                    }
                    return {
                        term: s
                    }
                }, t
            })), t.define("select2/data/minimumInputLength", [], (function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            })), t.define("select2/data/maximumInputLength", [], (function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            })), t.define("select2/data/maximumSelectionLength", [], (function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", (function() {
                        i._checkIfMaximumSelected()
                    }))
                }, e.prototype.query = function(e, t, n) {
                    var i = this;
                    this._checkIfMaximumSelected((function() {
                        e.call(i, t, n)
                    }))
                }, e.prototype._checkIfMaximumSelected = function(e, t) {
                    var n = this;
                    this.current((function(e) {
                        var i = null != e ? e.length : 0;
                        n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: n.maximumSelectionLength
                            }
                        }) : t && t()
                    }))
                }, e
            })), t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                function n() {}
                return n.prototype.render = function(t) {
                    var n = t.call(this),
                        i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                    return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                }, n.prototype.bind = function(t, n, i) {
                    var r = this,
                        a = n.id + "-results";
                    t.call(this, n, i), this.$search.on("keydown", (function(e) {
                        r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                    })), this.$search.on("input", (function(t) {
                        e(this).off("keyup")
                    })), this.$search.on("keyup input", (function(e) {
                        r.handleSearch(e)
                    })), n.on("open", (function() {
                        r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", a), r.$search.trigger("focus"), window.setTimeout((function() {
                            r.$search.trigger("focus")
                        }), 0)
                    })), n.on("close", (function() {
                        r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur")
                    })), n.on("focus", (function() {
                        n.isOpen() || r.$search.trigger("focus")
                    })), n.on("results:all", (function(e) {
                        null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                    })), n.on("results:focus", (function(e) {
                        e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                    }))
                }, n.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, n.prototype.showSearch = function(e, t) {
                    return !0
                }, n
            })), t.define("select2/dropdown/hidePlaceholder", [], (function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                        var r = t[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }, e
            })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                function t(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("query", (function(e) {
                        i.lastParams = e, i.loading = !0
                    })), t.on("query:append", (function(e) {
                        i.lastParams = e, i.loading = !0
                    })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                }, t.prototype.loadMoreIfNeeded = function() {
                    var t = e.contains(document.documentElement, this.$loadingMore[0]);
                    !this.loading && t && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore())
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                        n = this.options.get("translations").get("loadingMore");
                    return t.html(n(this.lastParams)), t
                }, t
            })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                function n(t, n, i) {
                    this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i)
                }
                return n.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("open", (function() {
                        i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t)
                    })), t.on("close", (function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    })), this.$dropdownContainer.on("mousedown", (function(e) {
                        e.stopPropagation()
                    }))
                }, n.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, n.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, n.prototype.render = function(t) {
                    var n = e("<span></span>"),
                        i = t.call(this);
                    return n.append(i), this.$dropdownContainer = n, n
                }, n.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, n.prototype._bindContainerResultHandlers = function(e, t) {
                    if (!this._containerResultsHandlersBound) {
                        var n = this;
                        t.on("results:all", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("results:append", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("results:message", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("select", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("unselect", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), this._containerResultsHandlersBound = !0
                    }
                }, n.prototype._attachPositioningHandler = function(n, i) {
                    var r = this,
                        a = "scroll.select2." + i.id,
                        s = "resize.select2." + i.id,
                        o = "orientationchange.select2." + i.id,
                        l = this.$container.parents().filter(t.hasScroll);
                    l.each((function() {
                        t.StoreData(this, "select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    })), l.on(a, (function(n) {
                        var i = t.GetData(this, "select2-scroll-position");
                        e(this).scrollTop(i.y)
                    })), e(window).on(a + " " + s + " " + o, (function(e) {
                        r._positionDropdown(), r._resizeDropdown()
                    }))
                }, n.prototype._detachPositioningHandler = function(n, i) {
                    var r = "scroll.select2." + i.id,
                        a = "resize.select2." + i.id,
                        s = "orientationchange.select2." + i.id;
                    this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + a + " " + s)
                }, n.prototype._positionDropdown = function() {
                    var t = e(window),
                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                        r = null,
                        a = this.$container.offset();
                    a.bottom = a.top + this.$container.outerHeight(!1);
                    var s = {
                        height: this.$container.outerHeight(!1)
                    };
                    s.top = a.top, s.bottom = a.top + s.height;
                    var o = this.$dropdown.outerHeight(!1),
                        l = t.scrollTop(),
                        u = t.scrollTop() + t.height(),
                        d = l < a.top - o,
                        c = u > a.bottom + o,
                        p = {
                            left: a.left,
                            top: s.bottom
                        },
                        h = this.$dropdownParent;
                    "static" === h.css("position") && (h = h.offsetParent());
                    var f = {
                        top: 0,
                        left: 0
                    };
                    (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()), p.top -= f.top, p.left -= f.left, n || i || (r = "below"), c || !d || n ? !d && c && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (p.top = s.top - f.top - o), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(p)
                }, n.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, n.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, n
            })), t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.children ? n += e(r.children) : n++
                    }
                    return n
                }

                function t(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return t.prototype.showSearch = function(t, n) {
                    return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                }, t
            })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                function t() {}
                return t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", (function(e) {
                        i._handleSelectOnClose(e)
                    }))
                }, t.prototype._handleSelectOnClose = function(t, n) {
                    if (n && null != n.originalSelect2Event) {
                        var i = n.originalSelect2Event;
                        if ("select" === i._type || "unselect" === i._type) return
                    }
                    var r = this.getHighlightedResults();
                    if (!(r.length < 1)) {
                        var a = e.GetData(r[0], "data");
                        null != a.element && a.element.selected || null == a.element && a.selected || this.trigger("select", {
                            data: a
                        })
                    }
                }, t
            })), t.define("select2/dropdown/closeOnSelect", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", (function(e) {
                        i._selectTriggered(e)
                    })), t.on("unselect", (function(e) {
                        i._selectTriggered(e)
                    }))
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            })), t.define("select2/i18n/en", [], (function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    },
                    removeAllItems: function() {
                        return "Remove all items"
                    }
                }
            })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, i, r, a, s, o, l, u, d, c, p, h, f, m, v, g, y, b, w, x, T, C, E, S, k, A, $) {
                function M() {
                    this.reset()
                }
                return M.prototype.apply = function(d) {
                    if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                        if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p, d.minimumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, g)), d.maximumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = u.Decorate(d.dataAdapter, m)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = u.Decorate(d.dataAdapter, v)), null != d.query) {
                            var c = t(d.amdBase + "compat/query");
                            d.dataAdapter = u.Decorate(d.dataAdapter, c)
                        }
                        if (null != d.initSelection) {
                            var $ = t(d.amdBase + "compat/initSelection");
                            d.dataAdapter = u.Decorate(d.dataAdapter, $)
                        }
                    }
                    if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = u.Decorate(d.resultsAdapter, C)), null != d.placeholder && (d.resultsAdapter = u.Decorate(d.resultsAdapter, T)), d.selectOnClose && (d.resultsAdapter = u.Decorate(d.resultsAdapter, k))), null == d.dropdownAdapter) {
                        if (d.multiple) d.dropdownAdapter = w;
                        else {
                            var M = u.Decorate(w, x);
                            d.dropdownAdapter = M
                        }
                        if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, S)), d.closeOnSelect && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, A)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                            var D = t(d.amdBase + "compat/dropdownCss");
                            d.dropdownAdapter = u.Decorate(d.dropdownAdapter, D)
                        }
                        d.dropdownAdapter = u.Decorate(d.dropdownAdapter, E)
                    }
                    if (null == d.selectionAdapter) {
                        if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = u.Decorate(d.selectionAdapter, a)), d.allowClear && (d.selectionAdapter = u.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = u.Decorate(d.selectionAdapter, o)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                            var z = t(d.amdBase + "compat/containerCss");
                            d.selectionAdapter = u.Decorate(d.selectionAdapter, z)
                        }
                        d.selectionAdapter = u.Decorate(d.selectionAdapter, l)
                    }
                    d.language = this._resolveLanguage(d.language), d.language.push("en");
                    for (var L = [], P = 0; P < d.language.length; P++) {
                        var _ = d.language[P]; - 1 === L.indexOf(_) && L.push(_)
                    }
                    return d.language = L, d.translations = this._processTranslations(d.language, d.debug), d
                }, M.prototype.reset = function() {
                    function t(e) {
                        return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                            return c[e] || e
                        }))
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: u.escapeMarkup,
                        language: {},
                        matcher: function n(i, r) {
                            if ("" === e.trim(i.term)) return r;
                            if (r.children && r.children.length > 0) {
                                for (var a = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) {
                                    null == n(i, r.children[s]) && a.children.splice(s, 1)
                                }
                                return a.children.length > 0 ? a : n(i, a)
                            }
                            var o = t(r.text).toUpperCase(),
                                l = t(i.term).toUpperCase();
                            return o.indexOf(l) > -1 ? r : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, M.prototype.applyFromElement = function(e, t) {
                    var n = e.language,
                        i = this.defaults.language,
                        r = t.prop("lang"),
                        a = t.closest("[lang]").prop("lang"),
                        s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(a));
                    return e.language = s, e
                }, M.prototype._resolveLanguage = function(t) {
                    if (!t) return [];
                    if (e.isEmptyObject(t)) return [];
                    if (e.isPlainObject(t)) return [t];
                    var n;
                    n = e.isArray(t) ? t : [t];
                    for (var i = [], r = 0; r < n.length; r++)
                        if (i.push(n[r]), "string" == typeof n[r] && n[r].indexOf("-") > 0) {
                            var a = n[r].split("-")[0];
                            i.push(a)
                        }
                    return i
                }, M.prototype._processTranslations = function(t, n) {
                    for (var i = new d, r = 0; r < t.length; r++) {
                        var a = new d,
                            s = t[r];
                        if ("string" == typeof s) try {
                            a = d.loadPath(s)
                        } catch (e) {
                            try {
                                s = this.defaults.amdLanguageBase + s, a = d.loadPath(s)
                            } catch (e) {
                                n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        } else a = e.isPlainObject(s) ? new d(s) : s;
                        i.extend(a)
                    }
                    return i
                }, M.prototype.set = function(t, n) {
                    var i = {};
                    i[e.camelCase(t)] = n;
                    var r = u._convertData(i);
                    e.extend(!0, this.defaults, r)
                }, new M
            })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, i) {
                function r(t, r) {
                    if (this.options = t, null != r && this.fromElement(r), null != r && (this.options = n.applyFromElement(this.options, r)), this.options = n.apply(this.options), r && r.is("input")) {
                        var a = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = i.Decorate(this.options.dataAdapter, a)
                    }
                }
                return r.prototype.fromElement = function(e) {
                    var n = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                    var r = {};

                    function a(e, t) {
                        return t.toUpperCase()
                    }
                    for (var s = 0; s < e[0].attributes.length; s++) {
                        var o = e[0].attributes[s].name,
                            l = "data-";
                        if (o.substr(0, 5) == l) {
                            var u = o.substring(5),
                                d = i.GetData(e[0], u);
                            r[u.replace(/-([a-z])/g, a)] = d
                        }
                    }
                    t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (r = t.extend(!0, {}, e[0].dataset, r));
                    var c = t.extend(!0, {}, i.GetData(e[0]), r);
                    for (var p in c = i._convertData(c)) t.inArray(p, n) > -1 || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], c[p]) : this.options[p] = c[p]);
                    return this
                }, r.prototype.get = function(e) {
                    return this.options[e]
                }, r.prototype.set = function(e, t) {
                    this.options[e] = t
                }, r
            })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) {
                var r = function(e, i) {
                    null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), r.__super__.constructor.call(this);
                    var a = e.attr("tabindex") || 0;
                    n.StoreData(e[0], "old-tabindex", a), e.attr("tabindex", "-1");
                    var s = this.options.get("dataAdapter");
                    this.dataAdapter = new s(e, this.options);
                    var o = this.render();
                    this._placeContainer(o);
                    var l = this.options.get("selectionAdapter");
                    this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                    var u = this.options.get("dropdownAdapter");
                    this.dropdown = new u(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                    var d = this.options.get("resultsAdapter");
                    this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var c = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(e) {
                        c.trigger("selection:update", {
                            data: e
                        })
                    })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                };
                return n.Extend(r, n.Observable), r.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, r.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, r.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var r = e.outerWidth(!1);
                        return r <= 0 ? "auto" : r + "px"
                    }
                    if ("style" == t) {
                        var a = e.attr("style");
                        if ("string" != typeof a) return null;
                        for (var s = a.split(";"), o = 0, l = s.length; o < l; o += 1) {
                            var u = s[o].replace(/\s/g, "").match(n);
                            if (null !== u && u.length >= 1) return u[1]
                        }
                        return null
                    }
                    return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                }, r.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, r.prototype._registerDomEvents = function() {
                    var e = this;
                    this.$element.on("change.select2", (function() {
                        e.dataAdapter.current((function(t) {
                            e.trigger("selection:update", {
                                data: t
                            })
                        }))
                    })), this.$element.on("focus.select2", (function(t) {
                        e.trigger("focus", t)
                    })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != t ? (this._observer = new t((function(t) {
                        e._syncA(), e._syncS(null, t)
                    })), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                }, r.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, r.prototype._registerSelectionEvents = function() {
                    var t = this,
                        n = ["toggle", "focus"];
                    this.selection.on("toggle", (function() {
                        t.toggleDropdown()
                    })), this.selection.on("focus", (function(e) {
                        t.focus(e)
                    })), this.selection.on("*", (function(i, r) {
                        -1 === e.inArray(i, n) && t.trigger(i, r)
                    }))
                }, r.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, r.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, r.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", (function() {
                        e.$container.addClass("select2-container--open")
                    })), this.on("close", (function() {
                        e.$container.removeClass("select2-container--open")
                    })), this.on("enable", (function() {
                        e.$container.removeClass("select2-container--disabled")
                    })), this.on("disable", (function() {
                        e.$container.addClass("select2-container--disabled")
                    })), this.on("blur", (function() {
                        e.$container.removeClass("select2-container--focus")
                    })), this.on("query", (function(t) {
                        e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function(n) {
                            e.trigger("results:all", {
                                data: n,
                                query: t
                            })
                        }))
                    })), this.on("query:append", (function(t) {
                        this.dataAdapter.query(t, (function(n) {
                            e.trigger("results:append", {
                                data: n,
                                query: t
                            })
                        }))
                    })), this.on("keypress", (function(t) {
                        var n = t.which;
                        e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                    }))
                }, r.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, r.prototype._isChangeMutation = function(t, n) {
                    var i = !1,
                        r = this;
                    if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                        if (n)
                            if (n.addedNodes && n.addedNodes.length > 0)
                                for (var a = 0; a < n.addedNodes.length; a++) {
                                    n.addedNodes[a].selected && (i = !0)
                                } else n.removedNodes && n.removedNodes.length > 0 ? i = !0 : e.isArray(n) && e.each(n, (function(e, t) {
                                    if (r._isChangeMutation(e, t)) return i = !0, !1
                                }));
                            else i = !0;
                        return i
                    }
                }, r.prototype._syncSubtree = function(e, t) {
                    var n = this._isChangeMutation(e, t),
                        i = this;
                    n && this.dataAdapter.current((function(e) {
                        i.trigger("selection:update", {
                            data: e
                        })
                    }))
                }, r.prototype.trigger = function(e, t) {
                    var n = r.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting",
                            clear: "clearing"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var a = i[e],
                            s = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, a, s), s.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, r.prototype.toggleDropdown = function() {
                    this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                }, r.prototype.open = function() {
                    this.isOpen() || this.isDisabled() || this.trigger("query", {})
                }, r.prototype.close = function(e) {
                    this.isOpen() && this.trigger("close", {
                        originalEvent: e
                    })
                }, r.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }, r.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }, r.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, r.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, r.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, r.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, r.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current((function(t) {
                        e = t
                    })), e
                }, r.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var n = t[0];
                    e.isArray(n) && (n = e.map(n, (function(e) {
                        return e.toString()
                    }))), this.$element.val(n).trigger("input").trigger("change")
                }, r.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, r.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                }, r
            })), t.define("jquery-mousewheel", ["jquery"], (function(e) {
                return e
            })), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, r) {
                if (null == e.fn.select2) {
                    var a = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each((function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this), i)
                        })), this;
                        if ("string" == typeof t) {
                            var i, s = Array.prototype.slice.call(arguments, 1);
                            return this.each((function() {
                                var e = r.GetData(this, "select2");
                                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, s)
                            })), e.inArray(t, a) > -1 ? this : i
                        }
                        throw new Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
            })), {
                define: t.define,
                require: t.require
            }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}((function(e) {
    return e.fn.tilt = function(t) {
        const n = function() {
                this.ticking || (requestAnimationFrame(d.bind(this)), this.ticking = !0)
            },
            i = function() {
                e(this).on("mousemove", o), e(this).on("mouseenter", a), this.settings.reset && e(this).on("mouseleave", l), this.settings.glare && e(window).on("resize", p.bind(this))
            },
            r = function() {
                void 0 !== this.timeout && clearTimeout(this.timeout), e(this).css({
                    transition: `${this.settings.speed}ms ${this.settings.easing}`
                }), this.settings.glare && this.glareElement.css({
                    transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`
                }), this.timeout = setTimeout((() => {
                    e(this).css({
                        transition: ""
                    }), this.settings.glare && this.glareElement.css({
                        transition: ""
                    })
                }), this.settings.speed)
            },
            a = function(t) {
                this.ticking = !1, e(this).css({
                    "will-change": "transform"
                }), r.call(this), e(this).trigger("tilt.mouseEnter")
            },
            s = function(t) {
                return void 0 === t && (t = {
                    pageX: e(this).offset().left + e(this).outerWidth() / 2,
                    pageY: e(this).offset().top + e(this).outerHeight() / 2
                }), {
                    x: t.pageX,
                    y: t.pageY
                }
            },
            o = function(e) {
                this.mousePositions = s(e), n.call(this)
            },
            l = function() {
                r.call(this), this.reset = !0, n.call(this), e(this).trigger("tilt.mouseLeave")
            },
            u = function() {
                const t = e(this).outerWidth(),
                    n = e(this).outerHeight(),
                    i = e(this).offset().left,
                    r = e(this).offset().top,
                    a = (this.mousePositions.x - i) / t,
                    s = (this.mousePositions.y - r) / n;
                return {
                    tiltX: (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
                    tiltY: (s * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                    percentageX: 100 * a,
                    percentageY: 100 * s,
                    angle: Math.atan2(this.mousePositions.x - (i + t / 2), -(this.mousePositions.y - (r + n / 2))) * (180 / Math.PI)
                }
            },
            d = function() {
                if (this.transforms = u.call(this), this.reset) return this.reset = !1, e(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")));
                e(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(${"x"===this.settings.disableAxis?0:this.transforms.tiltY}deg) rotateY(${"y"===this.settings.disableAxis?0:this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`), this.settings.glare && (this.glareElement.css("transform", `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), e(this).trigger("change", [this.transforms]), this.ticking = !1
            },
            c = function() {
                const t = this.settings.glarePrerender;
                if (t || e(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = e(this).find(".js-tilt-glare"), this.glareElement = e(this).find(".js-tilt-glare-inner"), t) return;
                this.glareElementWrapper.css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }).css({
                    overflow: "hidden",
                    "pointer-events": "none"
                }), this.glareElement.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    width: "" + 2 * e(this).outerWidth(),
                    height: "" + 2 * e(this).outerWidth(),
                    transform: "rotate(180deg) translate(-50%, -50%)",
                    "transform-origin": "0% 0%",
                    opacity: "0"
                })
            },
            p = function() {
                this.glareElement.css({
                    width: "" + 2 * e(this).outerWidth(),
                    height: "" + 2 * e(this).outerWidth()
                })
            };
        return e.fn.tilt.destroy = function() {
            e(this).each((function() {
                e(this).find(".js-tilt-glare").remove(), e(this).css({
                    "will-change": "",
                    transform: ""
                }), e(this).off("mousemove mouseenter mouseleave")
            }))
        }, e.fn.tilt.getValues = function() {
            const t = [];
            return e(this).each((function() {
                this.mousePositions = s.call(this), t.push(u.call(this))
            })), t
        }, e.fn.tilt.reset = function() {
            e(this).each((function() {
                this.mousePositions = s.call(this), this.settings = e(this).data("settings"), l.call(this), setTimeout((() => {
                    this.reset = !1
                }), this.settings.transition)
            }))
        }, this.each((function() {
            this.settings = e.extend({
                maxTilt: e(this).is("[data-tilt-max]") ? e(this).data("tilt-max") : 20,
                perspective: e(this).is("[data-tilt-perspective]") ? e(this).data("tilt-perspective") : 300,
                easing: e(this).is("[data-tilt-easing]") ? e(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: e(this).is("[data-tilt-scale]") ? e(this).data("tilt-scale") : "1",
                speed: e(this).is("[data-tilt-speed]") ? e(this).data("tilt-speed") : "400",
                transition: !e(this).is("[data-tilt-transition]") || e(this).data("tilt-transition"),
                disableAxis: e(this).is("[data-tilt-disable-axis]") ? e(this).data("tilt-disable-axis") : null,
                axis: e(this).is("[data-tilt-axis]") ? e(this).data("tilt-axis") : null,
                reset: !e(this).is("[data-tilt-reset]") || e(this).data("tilt-reset"),
                glare: !!e(this).is("[data-tilt-glare]") && e(this).data("tilt-glare"),
                maxGlare: e(this).is("[data-tilt-maxglare]") ? e(this).data("tilt-maxglare") : 1
            }, t), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = () => {
                e(this).data("settings", this.settings), this.settings.glare && c.call(this), i.call(this)
            }, this.init()
        }))
    }, e("[data-tilt]").tilt(), !0
}));
var objectfit = function() {
    $(".h-object-fit").each((function() {
        var e = $(this),
            t = e.find("img").prop("src");
        t && e.css("background-image", "url(" + t + ")").addClass("is-fited")
    }))
};
!1 === Modernizr.objectfit && objectfit();
var breakPoint = !1,
    bp_XX = 480,
    bp_XS = 768,
    bp_SM = 1025,
    bp_MD = 1220,
    body = $("body");

function resizer() {
    var e = window.innerWidth;
    e < bp_XX && windowXX(), e >= bp_XX && e < bp_XS && windowXS(), e >= bp_XS && e < bp_SM && windowSM(), e >= bp_SM && e < bp_MD && windowMD(), e >= bp_MD && windowLG()
}

function windowXX() {
    "xx" != breakPoint && (breakPoint = "xx", body.trigger("resize_xx_once")), body.trigger("resize_xx")
}

function windowXS() {
    "xs" != breakPoint && (breakPoint = "xs", body.trigger("resize_xs_once")), body.trigger("resize_xs")
}

function windowSM() {
    "sm" != breakPoint && (breakPoint = "sm", body.trigger("resize_sm_once")), body.trigger("resize_sm")
}

function windowMD() {
    "md" != breakPoint && (breakPoint = "md", body.trigger("resize_md_once")), body.trigger("resize_md")
}

function windowLG() {
    "lg" != breakPoint && (breakPoint = "lg", body.trigger("resize_lg_once")), body.trigger("resize_lg")
}
if ($(window).on("load", (function() {
        resizer()
    })), $(window).on("resize", (function() {
        resizer()
    })), resizer(), $(".form-control").keydown((function() {
        $(this).addClass("control_changed")
    })), !debounce)

function debounce(e, t, n) {
    var i;
    return function() {
        var r = this,
            a = arguments,
            s = n && !i;
        clearTimeout(i), i = setTimeout((function() {
            i = null, n || e.apply(r, a)
        }), t), s && e.apply(r, a)
    }
}
$(".js-form-check").each((function() {
    var e = $(this);
    e.not(".form_notValid").validate({
        onfocusout: !1,
        focusInvalid: !1,
        onkeyup: !1,
        onclick: !1,
        ignore: ".ignore",
        rules: {
            email: {
                required: !0,
                emailfull: !0
            }
        },
        errorPlacement: function(t, n) {
            n.closest(".input-wrap").addClass("error").after(t.addClass("input-wrap_error")), n.addClass("debug_control").removeClass("valid");
            var i = $(e.find(".form-control.error")[0]),
                r = i.offset().top;
            if (window.scrollY > r - 50) {
                var a = r - window.innerHeight / 2;
                $("body").animate({
                    scrollTop: a
                }, 300), setTimeout((function() {
                    i.focus()
                }), 300)
            } else i.focus()
        }
    }), $formControl = e.find(".form-control"), $formControl.on("input", debounce((function(e) {
        var t = $(this);
        t.hasClass("debug_control") && t.valid()
    }), 400)).focusout((function() {
        var e = $(this);
        e.hasClass("debug_control") && e.hasClass("valid") && e.removeClass("debug_control").closest(".input-wrap").removeClass("error"), 0 == e.val().length && e.hasClass("valid") && e.attr("required") && (e.addClass("debug_control error").removeClass("valid").closest(".input-wrap").addClass("error"), e.valid())
    }))
})), $.validator.addMethod("emailfull", (function(e, t) {
    return this.optional(t) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(e)
}), "Пожалуйста, введите корректный адрес электронной почты."), $.validator.addMethod("only_cyrillic", (function(e, t) {
    return this.optional(t) || /^[А-Яа-я]+$/i.test(e)
}), "Заполните данные на русском языке");
var $window = $(window);
window.cust = window.cust ? window.cust : {};
var gW = $window.outerWidth(!0),
    gH = $window.outerHeight(!0);

function debounce(e, t, n) {
    var i;
    return function() {
        var r = this,
            a = arguments,
            s = n && !i;
        clearTimeout(i), i = setTimeout((function() {
            i = null, n || e.apply(r, a)
        }), t), s && e.apply(r, a)
    }
}

function detectBrowser() {
    var e = window.navigator.userAgent,
        t = $("html");
    e.indexOf("MSIE ") > 0 && t.addClass("msie msie" + parseInt(e.substring(e.indexOf("MSIE ") + 5, e.indexOf(".", e.indexOf("MSIE "))), 10)), e.indexOf("Trident/") > 0 && t.addClass("ie ie" + parseInt(e.substring(e.indexOf("rv:") + 3, e.indexOf(".", e.indexOf("rv:"))), 10)), (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && t.addClass("ios"), e.indexOf("Edge/") > 0 && t.addClass("edge"), -1 != e.toLowerCase().indexOf("safari") && (e.toLowerCase().indexOf("chrome") > -1 ? t.addClass("chrome") : t.addClass("safari"))
}

function getScrollBarWidth() {
    var e = document.createElement("p");
    e.style.height = "200px", e.style.width = "100%";
    var t = document.createElement("div");
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.overflow = "hidden", t.style.height = "150px", t.style.width = "200px", t.style.left = "0px", t.style.top = "0px", t.appendChild(e), document.body.appendChild(t);
    var n = e.offsetWidth;
    t.style.overflow = "scroll";
    var i = e.offsetWidth;
    return n == i && (i = t.clientWidth), document.body.removeChild(t), n - i
}

function is_scroll() {
    return $(document).height() > $(window).height()
}

function numberWithSpaces(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function animateNumber(e, t, n, i) {
    numberWithSpaces(t);
    var r = t,
        a = setInterval((function() {
            r += 4, e.text(numberWithSpaces(r)), r == n && (e.text(e.text()), clearInterval(a))
        }), 0)
}

function animateValue(e, t, n, i) {
    numberWithSpaces(t);
    var r = t;
    e.text(numberWithSpaces(r));
    var a = setInterval((function() {
        r += 1, e.text(numberWithSpaces(r)), r == n && (e.text(e.text()), clearInterval(a))
    }), 75)
}
$window.on("resize", (function() {
        gIw = $window.innerWidth(!0), gIh = $window.innerHeight(!0)
    })), detectBrowser(), getScrollBarWidth(),
    function(e) {
        e.fn.viewportChecker = function(t) {
            var n = {
                classToAdd: "visible",
                classToRemove: "invisible",
                classToAddForFullView: "full-visible",
                removeClassAfterAnimation: !1,
                offset: 100,
                repeat: !1,
                invertBottomOffset: !0,
                callbackFunction: function(e, t) {},
                scrollHorizontal: !1,
                scrollBox: window
            };
            e.extend(n, t);
            var i = this,
                r = {
                    height: e(n.scrollBox).height(),
                    width: e(n.scrollBox).width()
                };
            return this.checkElements = function() {
                var t, a;
                n.scrollHorizontal ? (t = Math.max(e("html").scrollLeft(), e("body").scrollLeft(), e(window).scrollLeft()), a = t + r.width) : (t = Math.max(e("html").scrollTop(), e("body").scrollTop(), e(window).scrollTop()), a = t + r.height), i.each((function() {
                    var i = e(this),
                        s = {},
                        o = {};
                    if (i.data("vp-add-class") && (o.classToAdd = i.data("vp-add-class")), i.data("vp-remove-class") && (o.classToRemove = i.data("vp-remove-class")), i.data("vp-add-class-full-view") && (o.classToAddForFullView = i.data("vp-add-class-full-view")), i.data("vp-keep-add-class") && (o.removeClassAfterAnimation = i.data("vp-remove-after-animation")), i.data("vp-offset") && (o.offset = i.data("vp-offset")), i.data("vp-repeat") && (o.repeat = i.data("vp-repeat")), i.data("vp-scrollHorizontal") && (o.scrollHorizontal = i.data("vp-scrollHorizontal")), i.data("vp-invertBottomOffset") && (o.scrollHorizontal = i.data("vp-invertBottomOffset")), e.extend(s, n), e.extend(s, o), !i.data("vp-animated") || s.repeat) {
                        String(s.offset).indexOf("%") > 0 && (s.offset = parseInt(s.offset) / 100 * r.height);
                        var l = s.scrollHorizontal ? i.offset().left : i.offset().top,
                            u = s.scrollHorizontal ? l + i.width() : l + i.height(),
                            d = Math.round(l) + s.offset,
                            c = s.scrollHorizontal ? d + i.width() : d + i.height();
                        s.invertBottomOffset && (c -= 2 * s.offset), d < a && c > t ? (i.removeClass(s.classToRemove), i.addClass(s.classToAdd), s.callbackFunction(i, "add"), u <= a && l >= t ? i.addClass(s.classToAddForFullView) : i.removeClass(s.classToAddForFullView), i.data("vp-animated", !0), s.removeClassAfterAnimation && i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                            i.removeClass(s.classToAdd)
                        }))) : i.hasClass(s.classToAdd) && s.repeat && (i.removeClass(s.classToAdd + " " + s.classToAddForFullView), s.callbackFunction(i, "remove"), i.data("vp-animated", !1))
                    }
                }))
            }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements), e(n.scrollBox).bind("load scroll", this.checkElements), e(window).resize((function(t) {
                r = {
                    height: e(n.scrollBox).height(),
                    width: e(n.scrollBox).width()
                }, i.checkElements()
            })), this.checkElements(), this
        }
    }(jQuery),
    function() {
        $("body").on("click", ".js-header .js-menu-open", (function(e) {
            var t = $(this),
                n = t.closest(".js-header"),
                i = n.find(".js-menu-content");
            if (n.toggleClass("js-menu_opened"), n.hasClass("js-menu_opened")) {
                if (t.closest(".js-menu-wrap").find(".js-menu-content").not(i).stop(!0, !0).slideUp("300"), i.stop(!0, !0).slideDown("300", (function() {
                        $("html,body").animate(300, "swing")
                    })), document.body.clientHeight - document.documentElement.clientHeight != 0) {
                    var r = document.createElement("div");
                    r.style.overflowY = "scroll", r.style.width = "50px", r.style.height = "50px", document.body.append(r);
                    var a = r.offsetWidth - r.clientWidth;
                    r.parentNode.removeChild(r), document.body.style.overflow = "hidden", document.body.style.paddingRight = a + "px", $(".header").css({
                        right: a
                    })
                }
            } else t.closest(".js-header").find(".js-menu-content").stop(!0, !0).slideUp("300"), document.body.style.overflow = "", document.body.style.padding = "", $(".header").css({
                right: 0
            })
        }));
        var e = $("main").find(".section:first-child").outerHeight();
        $(".js-header:not(.header--white)").length && $(window).on("scroll", (function() {
            var t = Math.trunc($(window).scrollTop() / e * 100);
            $(".js-header:not(.header--white)").find(".header--decor-opacity").css({
                filter: "opacity(" + t + "%)"
            }), $(".js-header").offset().top > 0 ? $(".js-header").closest(".l-wrapper").find(".js-header-anchor").css({
                opacity: "0",
                visibility: "hidden"
            }) : $(".js-header").closest(".l-wrapper").find(".js-header-anchor").css({
                opacity: "1",
                visibility: "visible"
            })
        })), $(".js-header.header--white").length && $(window).on("scroll", (function() {
            $(".js-header").offset().top > 0 ? $(".js-header").addClass("header--fixed") : $(".js-header").removeClass("header--fixed")
        })), $(document).on("click", ".js-header-anchor", (function(e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top + 85
            }, 1e3)
        })), $(document).on("click", "[data-section-nav]", (function(e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - 120
            }, 1e3)
        }))
    }(), $(".js-select2").select2({
        minimumResultsForSearch: -1,
        placeholder: "Select a state",
        templateSelection: function(e) {
            if (!e.id) return e.text.toUpperCase();
            var t = $(e.element).attr("data-type");
            return t ? $('<span class="select-txt__value">' + t + "</span>") : e
        }
    }), $(".js-select2").on("select2:open", (function(e) {
        $(this).closest(".select-group--dropRight").length && $(".select2-dropdown").css({
            right: -1 * $(this).closest(".select-group--dropRight").outerWidth(),
            left: "auto"
        })
    }));
var $number = $(".count-number"),
    startNumber = 1 * $number.attr("data-start"),
    endNumber = 1 * $number.attr("data-end"),
    $numberValue = $(".count-value"),
    startValue = 1 * $numberValue.attr("data-start"),
    endValue = 1 * $numberValue.attr("data-end");
! function() {
    var e = $("body");
    if (e.on("click", ".js-collapse .js-collapse-btn", (function(e) {
            var t = $(this),
                n = t.closest(".js-collapse"),
                i = n.find(".js-collapse-content");
            n.toggleClass("js-collapse_opened"), n.hasClass("js-collapse_opened") ? (t.closest(".js-collapse-wrap").find(".js-collapse-content").not(i).stop(!0, !0).slideUp(), i.stop(!0, !0).slideDown("300", (function() {
                $("html,body").animate(300, "swing")
            }))) : t.closest(".js-collapse").find(".js-collapse-content").stop(!0, !0).slideUp("300")
        })), $(".about__article-link-mobile").length) {
        var t = $(".about__article-link .button"),
            n = $(".about__article-link"),
            i = $(".about__article-link-mobile");

        function r() {
            "sm" == breakPoint || "md" == breakPoint || "lg" == breakPoint ? 0 !== i.html().length && n.append(t) : 0 === i.html().length && i.append(t)
        }
        $("body").on("resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once", r), r()
    }(e.on("click", ".js-tags .js-tags-open", (function(e) {
        var t = $(this),
            n = t.closest(".js-tags"),
            i = n.find(".js-tags-content");
        n.toggleClass("js-tags_opened"), n.hasClass("js-tags_opened") ? (t.closest(".js-tags-wrap").find(".js-tags-content").not(i).stop(!0, !0).slideUp("300"), i.stop(!0, !0).slideDown("300", (function() {
            $("html,body").animate(300, "swing")
        }))) : t.closest(".js-tags").find(".js-tags-content").stop(!0, !0).slideUp("300"), n.hasClass("js-category_opened") && (n.removeClass("js-category_opened"), n.find(".js-category-content").stop(!0, !0).slideUp("300", (function() {
            $("html,body").animate(300, "swing")
        })))
    })), e.on("click", ".js-category .js-category-open", (function(e) {
        var t = $(this),
            n = t.closest(".js-category"),
            i = n.find(".js-category-content");
        n.toggleClass("js-category_opened"), n.hasClass("js-category_opened") ? (t.closest(".l-wrapper").find(".js-category-content").not(i).stop(!0, !0).slideUp("300"), i.stop(!0, !0).slideDown("300", (function() {
            $("html,body").animate(300, "swing")
        }))) : t.closest(".js-category").find(".js-category-content").stop(!0, !0).slideUp("300"), n.hasClass("js-tags_opened") && (n.removeClass("js-tags_opened"), n.find(".js-tags-content").stop(!0, !0).slideUp("300", (function() {
            $("html,body").animate(300, "swing")
        })))
    })), $(".media-menu__content-category-mobile").length) && $(".js-tags").each((function() {
        var e = $(this).find(".media-menu__categories-content").find("ul"),
            t = $(this).find(".media-menu__categories-content"),
            n = $(this).find(".media-menu__content-category-mobile");

        function i() {
            "md" == breakPoint || "lg" == breakPoint ? 0 !== n.html().length && t.append(e) : 0 === n.html().length && n.append(e)
        }
        $("body").on("resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once", i), i()
    }))
}(),
function() {
    var e = $("#bannerVideoId").attr("data-src"),
        t = $("#bannerVideoId").attr("data-srcFallback");
    new BackgroundVideo(".bv-video", {
        src: [e],
        autoplayFallback: t,
        onBeforeReady: function() {},
        onReady: function() {
            $("#bannerVideoId").find("video").attr("data-prevent-transform", "false")
        },
        "parallax.effect": "2"
    })
}(),
function() {
    new Rellax(".rellax"), new Rellax(".rellax-video", {
        center: !0
    }), new Rellax(".rellax-picture", {
        center: !0,
        breakpoints: [650, 768, 1201]
    });
    $(".js-categories").length && $(window).on("scroll", (function() {
        $(".js-categories").position().top, $(window).scrollTop()
    }))
}(), $(".js-viewport-checker").viewportChecker({
        classToAdd: "checker-visible",
        classToAddForFullView: "full-visible",
        classToRemove: "invisible",
        removeClassAfterAnimation: !1,
        offset: "8%",
        invertBottomOffset: !0,
        repeat: !1,
        callbackFunction: function(e, t) {},
        scrollHorizontal: !1
    }),
    function() {
        if (document.querySelectorAll(".js-swiper-pictures").length > 0) new Swiper(".swiper-container.swiper-container--pictures", {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets"
            },
            grabCursor: !0,
            speed: 1400,
            loop: !0,
            parallax: !0,
            paginationClickable: !0,
            autoplay: !0,
            effect: "slide",
            mousewheelControl: 1
        })
    }(),
    function() {
        var e = $("body");
        e.on("click", ".js-popup-btn", (function(t) {
            var n = $(this),
                i = "#" + n.attr("data-popup-name"),
                r = n.closest(e).find(i);
            if (r.hasClass("js-popup_opened")) r.stop(!0, !0).slideUp();
            else if (r.addClass("js-popup_opened"), r.stop(!0, !0).slideDown("300"), document.body.clientHeight - document.documentElement.clientHeight != 0) {
                var a = document.createElement("div");
                a.style.overflowY = "scroll", a.style.width = "50px", a.style.height = "50px", document.body.append(a);
                var s = a.offsetWidth - a.clientWidth;
                a.parentNode.removeChild(a), document.body.style.overflow = "hidden", document.body.style.paddingRight = s + "px", $(".header").css({
                    right: s
                }), $(".js-popup-content").css({
                    right: s
                })
            }
        })).on("click", ".js-popup-close", (function(e) {
            var t = $(this);
            t.closest(".js-popup-content").slideUp(), t.closest(".js-popup-content").hasClass("js-popup_opened") && t.closest(".js-popup-content").removeClass("js-popup_opened"), document.body.style.overflow = "", document.body.style.padding = "", $(".header").css({
                right: 0
            }), $(".js-popup-content").css({
                right: 0
            })
        })), $((function() {
            $(window).on("load", (function() {
                $(".lazy").each((function() {
                    $(this).removeClass("lazy")
                }))
            })), $(document).ready((function() {
                void 0 !== $(".js-product") && ($(".js-product .product__video").each((function() {
                    this.pause()
                })), $(".js-product").mousemove((function() {
                    $(".product__video", this).get(0).play()
                })).mouseleave((function() {
                    $(".product__video", this).get(0).pause()
                })))
            }))
        }))
    }(), $(".js-tilt").tilt({
        maxTilt: 5,
        speed: 1500
    }), svg4everybody();

$('.js-counter-checker').viewportChecker({
    classToAdd: 'title-visible',
    classToAddForFullView: 'title-full-visible',
    classToRemove: 'invisible',
    removeClassAfterAnimation: false,
    offset: '0%',
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function(elem, action) {
        setTimeout(function() {
            animateValue($numberValue, startValue, endValue);
        }, 0);
        setTimeout(function() {
            animateNumber($number, startNumber, endNumber);
        }, 0);

    },
    scrollHorizontal: false
});

$(document).ready(function() {
   var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    $('.cc-btn').on('click', function(){
        if (isSafari) {
            $(".product__video").each(function() {
               this.play();
            });
        }
    });
});

document.addEventListener( 'wpcf7mailsent', function( event ) {
    document.querySelector('.wp--popup-success').classList.toggle('show');
  
}, false );