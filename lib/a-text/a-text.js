!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
    }
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "/lib/", t(t.s = 7);
    }([ function(e, t) {
        e.exports = function(e, t, n, r, o, s) {
            var i, a = e = e || {}, u = typeof e.default;
            "object" !== u && "function" !== u || (i = e, a = e.default);
            var f = "function" == typeof a ? a.options : a;
            t && (f.render = t.render, f.staticRenderFns = t.staticRenderFns, f._compiled = !0), 
            n && (f.functional = !0), o && (f._scopeId = o);
            var c;
            if (s ? (c = function(e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), 
                e && e._registeredComponents && e._registeredComponents.add(s);
            }, f._ssrRegister = c) : r && (c = r), c) {
                var l = f.functional, d = l ? f.render : f.beforeCreate;
                l ? (f._injectStyles = c, f.render = function(e, t) {
                    return c.call(t), d(e, t);
                }) : f.beforeCreate = d ? [].concat(d, c) : [ c ];
            }
            return {
                esModule: i,
                exports: a,
                options: f
            };
        };
    }, , function(e, t, n) {
        "use strict";
        t.a = {
            name: "a-text",
            author: "sunfengfeng",
            data: function() {
                return {};
            },
            props: {
                align: {
                    type: String,
                    default: "left"
                }
            },
            computed: {
                values: function() {
                    return this.$slots.default ? this.$slots.default[0].text : "";
                },
                alignClass: function() {
                    return "a-text-box-" + this.align;
                }
            }
        };
    }, , , , , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(8);
        r.a.install = function(e) {
            e.component(r.a.name, r.a);
        }, t.default = r.a;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            i || n(9);
        }
        var o = n(2), s = n(10), i = !1, a = n(0), u = r, f = a(o.a, s.a, !1, u, "data-v-5221b9c6", null);
        f.options.__file = "packages/a-text/src/a-text.vue", t.a = f.exports;
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "a-text"
            }, [ n("div", {
                staticClass: "a-text-box",
                class: e.alignClass
            }, e._l(e.values, function(t, r) {
                return n("span", {
                    key: r
                }, [ e._v(e._s(" " === t ? " " : t)) ]);
            }), 0) ]);
        }, o = [];
        r._withStripped = !0;
        var s = {
            render: r,
            staticRenderFns: o
        };
        t.a = s;
    } ]);
});
//# sourceMappingURL=a-text.js.map