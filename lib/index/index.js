!function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n = e();
        for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
    }
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "/lib/", e(e.s = 14);
    }([ function(t, e) {
        t.exports = function(t, e, n, r, i, a) {
            var o, s = t = t || {}, u = typeof t.default;
            "object" !== u && "function" !== u || (o = t, s = t.default);
            var f = "function" == typeof s ? s.options : s;
            e && (f.render = e.render, f.staticRenderFns = e.staticRenderFns, f._compiled = !0), 
            n && (f.functional = !0), i && (f._scopeId = i);
            var c;
            if (a ? (c = function(t) {
                t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), 
                t && t._registeredComponents && t._registeredComponents.add(a);
            }, f._ssrRegister = c) : r && (c = r), c) {
                var l = f.functional, d = l ? f.render : f.beforeCreate;
                l ? (f._injectStyles = c, f.render = function(t, e) {
                    return c.call(e), d(t, e);
                }) : f.beforeCreate = d ? [].concat(d, c) : [ c ];
            }
            return {
                esModule: o,
                exports: s,
                options: f
            };
        };
    }, function(t, e, n) {
        "use strict";
        e.a = {
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
    }, function(t, e, n) {
        "use strict";
        e.a = {
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
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(4);
        r.a.install = function(t) {
            t.component(r.a.name, r.a);
        }, e.default = r.a;
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            o || n(5);
        }
        var i = n(1), a = n(6), o = !1, s = n(0), u = r, f = s(i.a, a.a, !1, u, "data-v-53501e30", null);
        f.options.__file = "packages/a-box/src/a-box.vue", e.a = f.exports;
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {
                staticClass: "a-box",
                style: {
                    "flex-direction": t.direction,
                    "justify-content": t.justifyContent
                }
            }, [ t._t("default") ], 2);
        }, i = [];
        r._withStripped = !0;
        var a = {
            render: r,
            staticRenderFns: i
        };
        e.a = a;
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8);
        r.a.install = function(t) {
            t.component(r.a.name, r.a);
        }, e.default = r.a;
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            o || n(9);
        }
        var i = n(2), a = n(10), o = !1, s = n(0), u = r, f = s(i.a, a.a, !1, u, "data-v-5221b9c6", null);
        f.options.__file = "packages/a-text/src/a-text.vue", e.a = f.exports;
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "a-text"
            }, [ n("div", {
                staticClass: "a-text-box",
                class: t.alignClass
            }, t._l(t.values, function(e, r) {
                return n("span", {
                    key: r
                }, [ t._v(t._s(" " === e ? " " : e)) ]);
            }), 0) ]);
        }, i = [];
        r._withStripped = !0;
        var a = {
            render: r,
            staticRenderFns: i
        };
        e.a = a;
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(12), i = n(13);
        n.n(i);
        r.a.install = function(t) {
            t.component(r.a.name, r.a);
        }, e.default = r.a;
    }, function(t, e, n) {
        "use strict";
        e.a = {
            name: "a-row",
            componentName: "a-row",
            props: {
                tag: {
                    type: String,
                    default: "div"
                },
                gutter: Number,
                type: String,
                justify: {
                    type: String,
                    default: "start"
                },
                align: {
                    type: String,
                    default: "top"
                }
            },
            computed: {
                style: function() {
                    var t = {};
                    return this.gutter && (t.marginLeft = "-" + this.gutter / 2 + "px", t.marginRight = t.marginLeft), 
                    t;
                }
            },
            render: function(t) {
                return t(this.tag, {
                    class: [ "a-row", "start" !== this.justify ? "is-justify-" + this.justify : "", "top" !== this.align ? "is-align-" + this.align : "", {
                        "a-row--flex": "flex" === this.type
                    } ],
                    style: this.style
                }, this.$slots.default);
            }
        };
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(3), i = n(7), a = n(11);
        n.d(e, "aBox", function() {
            return r.default;
        }), n.d(e, "aText", function() {
            return i.default;
        }), n.d(e, "aRow", function() {
            return a.default;
        });
        var o = [ r.default, i.default, a.default ], s = function(t, e) {
            o.forEach(function(e) {
                console.log("注册组件: ", e.name), t.use(e);
            });
        };
        e.default = {
            install: s
        };
    } ]);
});
//# sourceMappingURL=index.js.map