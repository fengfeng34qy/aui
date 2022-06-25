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
        }, e.p = "/lib/", e(e.s = 48);
    }({
        48: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(49), i = n(50);
            n.n(i);
            r.a.install = function(t) {
                t.component(r.a.name, r.a);
            }, e.default = r.a;
        },
        49: function(t, e, n) {
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
        },
        50: function(t, e) {}
    });
});
//# sourceMappingURL=a-row.js.map