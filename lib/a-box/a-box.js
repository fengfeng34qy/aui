!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o];
    }
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
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
        }, t.p = "/lib/", t(t.s = 3);
    }([ function(e, t) {
        e.exports = function(e, t, n, o, r, i) {
            var s, a = e = e || {}, u = typeof e.default;
            "object" !== u && "function" !== u || (s = e, a = e.default);
            var c = "function" == typeof a ? a.options : a;
            t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
            n && (c.functional = !0), r && (c._scopeId = r);
            var f;
            if (i ? (f = function(e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), 
                e && e._registeredComponents && e._registeredComponents.add(i);
            }, c._ssrRegister = f) : o && (f = o), f) {
                var d = c.functional, l = d ? c.render : c.beforeCreate;
                d ? (c._injectStyles = f, c.render = function(e, t) {
                    return f.call(t), l(e, t);
                }) : c.beforeCreate = l ? [].concat(l, f) : [ f ];
            }
            return {
                esModule: s,
                exports: a,
                options: c
            };
        };
    }, function(e, t, n) {
        "use strict";
        t.a = {
            name: "a-box",
            author: "sunfengfeng",
            data: function() {
                return {
                    direction: "",
                    justifyContent: ""
                };
            },
            props: {},
            created: function() {
                this.direction = this.$attrs.direction || "row", this.justifyContent = this.$attrs["justify-content"] || "center";
            },
            mounted: function() {}
        };
    }, , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(4);
        o.a.install = function(e) {
            e.component(o.a.name, o.a);
        }, t.default = o.a;
    }, function(e, t, n) {
        "use strict";
        function o(e) {
            s || n(5);
        }
        var r = n(1), i = n(6), s = !1, a = n(0), u = o, c = a(r.a, i.a, !1, u, "data-v-53501e30", null);
        c.options.__file = "packages/a-box/src/a-box.vue", t.a = c.exports;
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var o = function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("div", {
                staticClass: "a-box",
                style: {
                    "flex-direction": e.direction,
                    "justify-content": e.justifyContent
                }
            }, [ e._t("default") ], 2);
        }, r = [];
        o._withStripped = !0;
        var i = {
            render: o,
            staticRenderFns: r
        };
        t.a = i;
    } ]);
});
//# sourceMappingURL=a-box.js.map