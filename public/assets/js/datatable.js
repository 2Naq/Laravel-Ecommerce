/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/simple-datatables@3.0.2/dist/umd/simple-datatables.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (a) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = a())
        : 'function' == typeof define && define.amd
          ? define([], a)
          : (('undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                    ? self
                    : this
            ).simpleDatatables = a());
})(function () {
    return (function d(e, f, b) {
        function c(a, k) {
            if (!f[a]) {
                if (!e[a]) {
                    var i = 'function' == typeof require && require;
                    if (!k && i) return i(a, !0);
                    if (g) return g(a, !0);
                    var j = new Error("Cannot find module '" + a + "'");
                    throw ((j.code = 'MODULE_NOT_FOUND'), j);
                }
                var h = (f[a] = { exports: {} });
                e[a][0].call(
                    h.exports,
                    function (b) {
                        return c(e[a][1][b] || b);
                    },
                    h,
                    h.exports,
                    d,
                    e,
                    f,
                    b
                );
            }
            return f[a].exports;
        }
        for (var g = 'function' == typeof require && require, a = 0; a < b.length; a++) c(b[a]);
        return c;
    })(
        {
            1: [
                function (a, b, c) {
                    (function (a) {
                        (function () {
                            'use strict';
                            function b(b, a) {
                                return b((a = { exports: {} }), a.exports), a.exports;
                            }
                            'undefined' != typeof globalThis
                                ? globalThis
                                : 'undefined' != typeof window
                                  ? window
                                  : void 0 !== a || ('undefined' != typeof self && self);
                            var d = b(function (q, w) {
                                    var f,
                                        g,
                                        h,
                                        i,
                                        r,
                                        j,
                                        s,
                                        k,
                                        l,
                                        t,
                                        u,
                                        m,
                                        n,
                                        o,
                                        b,
                                        c,
                                        d,
                                        a,
                                        e,
                                        v,
                                        p;
                                    q.exports =
                                        ((f = 'millisecond'),
                                        (g = 'second'),
                                        (h = 'minute'),
                                        (i = 'hour'),
                                        (r = 'week'),
                                        (j = 'month'),
                                        (s = 'quarter'),
                                        (k = 'year'),
                                        (l = 'date'),
                                        (t =
                                            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
                                        (u =
                                            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
                                        (m = {
                                            name: 'en',
                                            weekdays:
                                                'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                                                    '_'
                                                ),
                                            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                                '_'
                                            )
                                        }),
                                        (n = function (a, c, d) {
                                            var b = String(a);
                                            return !b || b.length >= c
                                                ? a
                                                : '' + Array(c + 1 - b.length).join(d) + a;
                                        }),
                                        ((b = {})[(o = 'en')] = m),
                                        (c = function (a) {
                                            return a instanceof v;
                                        }),
                                        (d = function (a, d, e) {
                                            var c;
                                            if (!a) return o;
                                            if ('string' == typeof a)
                                                b[a] && (c = a), d && ((b[a] = d), (c = a));
                                            else {
                                                var f = a.name;
                                                (b[f] = a), (c = f);
                                            }
                                            return !e && c && (o = c), c || (!e && o);
                                        }),
                                        (a = function (a, d) {
                                            if (c(a)) return a.clone();
                                            var b = 'object' == typeof d ? d : {};
                                            return (b.date = a), (b.args = arguments), new v(b);
                                        }),
                                        ((e = {
                                            s: n,
                                            z: function (c) {
                                                var a = -c.utcOffset(),
                                                    b = Math.abs(a);
                                                return (
                                                    (a <= 0 ? '+' : '-') +
                                                    n(Math.floor(b / 60), 2, '0') +
                                                    ':' +
                                                    n(b % 60, 2, '0')
                                                );
                                            },
                                            m: function g(a, b) {
                                                if (a.date() < b.date()) return -g(b, a);
                                                var d =
                                                        12 * (b.year() - a.year()) +
                                                        (b.month() - a.month()),
                                                    c = a.clone().add(d, j),
                                                    e = b - c < 0,
                                                    f = a.clone().add(d + (e ? -1 : 1), j);
                                                return +(-(d + (b - c) / (e ? c - f : f - c)) || 0);
                                            },
                                            a: function (a) {
                                                return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
                                            },
                                            p: function (a) {
                                                return (
                                                    {
                                                        M: j,
                                                        y: k,
                                                        w: r,
                                                        d: 'day',
                                                        D: l,
                                                        h: i,
                                                        m: h,
                                                        s: g,
                                                        ms: f,
                                                        Q: s
                                                    }[a] ||
                                                    String(a || '')
                                                        .toLowerCase()
                                                        .replace(/s$/, '')
                                                );
                                            },
                                            u: function (a) {
                                                return void 0 === a;
                                            }
                                        }).l = d),
                                        (e.i = c),
                                        (e.w = function (c, b) {
                                            return a(c, {
                                                locale: b.$L,
                                                utc: b.$u,
                                                x: b.$x,
                                                $offset: b.$offset
                                            });
                                        }),
                                        (p = (v = (function () {
                                            function m(a) {
                                                (this.$L = d(a.locale, null, !0)), this.parse(a);
                                            }
                                            var c = m.prototype;
                                            return (
                                                (c.parse = function (a) {
                                                    (this.$d = (function (c) {
                                                        var b = c.date,
                                                            g = c.utc;
                                                        if (null === b) return new Date(NaN);
                                                        if (e.u(b)) return new Date();
                                                        if (b instanceof Date) return new Date(b);
                                                        if (
                                                            'string' == typeof b &&
                                                            !/Z$/i.test(b)
                                                        ) {
                                                            var a = b.match(t);
                                                            if (a) {
                                                                var d = a[2] - 1 || 0,
                                                                    f = (a[7] || '0').substring(
                                                                        0,
                                                                        3
                                                                    );
                                                                return g
                                                                    ? new Date(
                                                                          Date.UTC(
                                                                              a[1],
                                                                              d,
                                                                              a[3] || 1,
                                                                              a[4] || 0,
                                                                              a[5] || 0,
                                                                              a[6] || 0,
                                                                              f
                                                                          )
                                                                      )
                                                                    : new Date(
                                                                          a[1],
                                                                          d,
                                                                          a[3] || 1,
                                                                          a[4] || 0,
                                                                          a[5] || 0,
                                                                          a[6] || 0,
                                                                          f
                                                                      );
                                                            }
                                                        }
                                                        return new Date(b);
                                                    })(a)),
                                                        (this.$x = a.x || {}),
                                                        this.init();
                                                }),
                                                (c.init = function () {
                                                    var a = this.$d;
                                                    (this.$y = a.getFullYear()),
                                                        (this.$M = a.getMonth()),
                                                        (this.$D = a.getDate()),
                                                        (this.$W = a.getDay()),
                                                        (this.$H = a.getHours()),
                                                        (this.$m = a.getMinutes()),
                                                        (this.$s = a.getSeconds()),
                                                        (this.$ms = a.getMilliseconds());
                                                }),
                                                (c.$utils = function () {
                                                    return e;
                                                }),
                                                (c.isValid = function () {
                                                    return 'Invalid Date' !== this.$d.toString();
                                                }),
                                                (c.isSame = function (d, b) {
                                                    var c = a(d);
                                                    return (
                                                        this.startOf(b) <= c && c <= this.endOf(b)
                                                    );
                                                }),
                                                (c.isAfter = function (b, c) {
                                                    return a(b) < this.startOf(c);
                                                }),
                                                (c.isBefore = function (b, c) {
                                                    return this.endOf(c) < a(b);
                                                }),
                                                (c.$g = function (a, b, c) {
                                                    return e.u(a) ? this[b] : this.set(c, a);
                                                }),
                                                (c.unix = function () {
                                                    return Math.floor(this.valueOf() / 1e3);
                                                }),
                                                (c.valueOf = function () {
                                                    return this.$d.getTime();
                                                }),
                                                (c.startOf = function (s, n) {
                                                    var u = this,
                                                        d = !!e.u(n) || n,
                                                        t = e.p(s),
                                                        a = function (a, b) {
                                                            var c = e.w(
                                                                u.$u
                                                                    ? Date.UTC(u.$y, b, a)
                                                                    : new Date(u.$y, b, a),
                                                                u
                                                            );
                                                            return d ? c : c.endOf('day');
                                                        },
                                                        b = function (a, b) {
                                                            return e.w(
                                                                u
                                                                    .toDate()
                                                                    [
                                                                        a
                                                                    ].apply(u.toDate('s'), (d ? [0,
                                                                                  0, 0, 0] : [23,
                                                                                  59, 59, 999]).slice(b)),
                                                                u
                                                            );
                                                        },
                                                        f = this.$W,
                                                        m = this.$M,
                                                        o = this.$D,
                                                        c = 'set' + (this.$u ? 'UTC' : '');
                                                    switch (t) {
                                                        case k:
                                                            return d ? a(1, 0) : a(31, 11);
                                                        case j:
                                                            return d ? a(1, m) : a(0, m + 1);
                                                        case r:
                                                            var p = this.$locale().weekStart || 0,
                                                                q = (f < p ? f + 7 : f) - p;
                                                            return a(d ? o - q : o + (6 - q), m);
                                                        case 'day':
                                                        case l:
                                                            return b(c + 'Hours', 0);
                                                        case i:
                                                            return b(c + 'Minutes', 1);
                                                        case h:
                                                            return b(c + 'Seconds', 2);
                                                        case g:
                                                            return b(c + 'Milliseconds', 3);
                                                        default:
                                                            return this.clone();
                                                    }
                                                }),
                                                (c.endOf = function (a) {
                                                    return this.startOf(a, !1);
                                                }),
                                                (c.$set = function (p, n) {
                                                    var a,
                                                        c = e.p(p),
                                                        b = 'set' + (this.$u ? 'UTC' : ''),
                                                        m = (((a = {}).day = b + 'Date'),
                                                        (a[l] = b + 'Date'),
                                                        (a[j] = b + 'Month'),
                                                        (a[k] = b + 'FullYear'),
                                                        (a[i] = b + 'Hours'),
                                                        (a[h] = b + 'Minutes'),
                                                        (a[g] = b + 'Seconds'),
                                                        (a[f] = b + 'Milliseconds'),
                                                        a)[c],
                                                        o =
                                                            'day' === c
                                                                ? this.$D + (n - this.$W)
                                                                : n;
                                                    if (c === j || c === k) {
                                                        var d = this.clone().set(l, 1);
                                                        d.$d[m](o),
                                                            d.init(),
                                                            (this.$d = d.set(
                                                                l,
                                                                Math.min(this.$D, d.daysInMonth())
                                                            ).$d);
                                                    } else m && this.$d[m](o);
                                                    return this.init(), this;
                                                }),
                                                (c.set = function (a, b) {
                                                    return this.clone().$set(a, b);
                                                }),
                                                (c.get = function (a) {
                                                    return this[e.p(a)]();
                                                }),
                                                (c.add = function (b, l) {
                                                    var d,
                                                        o = this;
                                                    b = Number(b);
                                                    var c = e.p(l),
                                                        f = function (d) {
                                                            var c = a(o);
                                                            return e.w(
                                                                c.date(
                                                                    c.date() + Math.round(d * b)
                                                                ),
                                                                o
                                                            );
                                                        };
                                                    if (c === j) return this.set(j, this.$M + b);
                                                    if (c === k) return this.set(k, this.$y + b);
                                                    if ('day' === c) return f(1);
                                                    if (c === r) return f(7);
                                                    var m =
                                                            (((d = {})[h] = 6e4),
                                                            (d[i] = 36e5),
                                                            (d[g] = 1e3),
                                                            d)[c] || 1,
                                                        n = this.$d.getTime() + b * m;
                                                    return e.w(n, this);
                                                }),
                                                (c.subtract = function (a, b) {
                                                    return this.add(-1 * a, b);
                                                }),
                                                (c.format = function (k) {
                                                    var n = this;
                                                    if (!this.isValid()) return 'Invalid Date';
                                                    var l = k || 'YYYY-MM-DDTHH:mm:ssZ',
                                                        m = e.z(this),
                                                        a = this.$locale(),
                                                        b = this.$H,
                                                        c = this.$m,
                                                        d = this.$M,
                                                        g = a.weekdays,
                                                        h = a.months,
                                                        f = function (a, b, c, d) {
                                                            return (
                                                                (a && (a[b] || a(n, l))) ||
                                                                c[b].substr(0, d)
                                                            );
                                                        },
                                                        i = function (a) {
                                                            return e.s(b % 12 || 12, a, '0');
                                                        },
                                                        j =
                                                            a.meridiem ||
                                                            function (b, d, c) {
                                                                var a = b < 12 ? 'AM' : 'PM';
                                                                return c ? a.toLowerCase() : a;
                                                            },
                                                        o = {
                                                            YY: String(this.$y).slice(-2),
                                                            YYYY: this.$y,
                                                            M: d + 1,
                                                            MM: e.s(d + 1, 2, '0'),
                                                            MMM: f(a.monthsShort, d, h, 3),
                                                            MMMM: f(h, d),
                                                            D: this.$D,
                                                            DD: e.s(this.$D, 2, '0'),
                                                            d: String(this.$W),
                                                            dd: f(a.weekdaysMin, this.$W, g, 2),
                                                            ddd: f(a.weekdaysShort, this.$W, g, 3),
                                                            dddd: g[this.$W],
                                                            H: String(b),
                                                            HH: e.s(b, 2, '0'),
                                                            h: i(1),
                                                            hh: i(2),
                                                            a: j(b, c, !0),
                                                            A: j(b, c, !1),
                                                            m: String(c),
                                                            mm: e.s(c, 2, '0'),
                                                            s: String(this.$s),
                                                            ss: e.s(this.$s, 2, '0'),
                                                            SSS: e.s(this.$ms, 3, '0'),
                                                            Z: m
                                                        };
                                                    return l.replace(u, function (a, b) {
                                                        return b || o[a] || m.replace(':', '');
                                                    });
                                                }),
                                                (c.utcOffset = function () {
                                                    return -(
                                                        15 *
                                                        Math.round(this.$d.getTimezoneOffset() / 15)
                                                    );
                                                }),
                                                (c.diff = function (m, n, o) {
                                                    var b,
                                                        p = e.p(n),
                                                        f = a(m),
                                                        l =
                                                            6e4 *
                                                            (f.utcOffset() - this.utcOffset()),
                                                        c = this - f,
                                                        d = e.m(this, f);
                                                    return (
                                                        (d =
                                                            (((b = {})[k] = d / 12),
                                                            (b[j] = d),
                                                            (b[s] = d / 3),
                                                            (b[r] = (c - l) / 6048e5),
                                                            (b.day = (c - l) / 864e5),
                                                            (b[i] = c / 36e5),
                                                            (b[h] = c / 6e4),
                                                            (b[g] = c / 1e3),
                                                            b)[p] || c),
                                                        o ? d : e.a(d)
                                                    );
                                                }),
                                                (c.daysInMonth = function () {
                                                    return this.endOf(j).$D;
                                                }),
                                                (c.$locale = function () {
                                                    return b[this.$L];
                                                }),
                                                (c.locale = function (a, e) {
                                                    if (!a) return this.$L;
                                                    var b = this.clone(),
                                                        c = d(a, e, !0);
                                                    return c && (b.$L = c), b;
                                                }),
                                                (c.clone = function () {
                                                    return e.w(this.$d, this);
                                                }),
                                                (c.toDate = function () {
                                                    return new Date(this.valueOf());
                                                }),
                                                (c.toJSON = function () {
                                                    return this.isValid()
                                                        ? this.toISOString()
                                                        : null;
                                                }),
                                                (c.toISOString = function () {
                                                    return this.$d.toISOString();
                                                }),
                                                (c.toString = function () {
                                                    return this.$d.toUTCString();
                                                }),
                                                m
                                            );
                                        })()).prototype),
                                        (a.prototype = p),
                                        [
                                            ['$ms', f],
                                            ['$s', g],
                                            ['$m', h],
                                            ['$H', i],
                                            ['$W', 'day'],
                                            ['$M', j],
                                            ['$y', k],
                                            ['$D', l]
                                        ].forEach(function (a) {
                                            p[a[1]] = function (b) {
                                                return this.$g(b, a[0], a[1]);
                                            };
                                        }),
                                        (a.extend = function (b, c) {
                                            return b.$i || (b(c, v, a), (b.$i = !0)), a;
                                        }),
                                        (a.locale = d),
                                        (a.isDayjs = c),
                                        (a.unix = function (b) {
                                            return a(1e3 * b);
                                        }),
                                        (a.en = b[o]),
                                        (a.Ls = b),
                                        (a.p = {}),
                                        a);
                                }),
                                e = b(function (f, o) {
                                    var g, h, i, d, b, c, j, a, e, k, l, m, n;
                                    f.exports =
                                        ((g = {
                                            LTS: 'h:mm:ss A',
                                            LT: 'h:mm A',
                                            L: 'MM/DD/YYYY',
                                            LL: 'MMMM D, YYYY',
                                            LLL: 'MMMM D, YYYY h:mm A',
                                            LLLL: 'dddd, MMMM D, YYYY h:mm A'
                                        }),
                                        (h = function (a, b) {
                                            return a.replace(
                                                /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                function (e, c, a) {
                                                    var d = a && a.toUpperCase();
                                                    return (
                                                        c ||
                                                        b[a] ||
                                                        g[a] ||
                                                        b[d].replace(
                                                            /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                            function (c, a, b) {
                                                                return a || b.slice(1);
                                                            }
                                                        )
                                                    );
                                                }
                                            );
                                        }),
                                        (i =
                                            /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g),
                                        (j = {}),
                                        (e = [
                                            /[+-]\d\d:?(\d\d)?/,
                                            function (a) {
                                                (this.zone || (this.zone = {})).offset = (function (
                                                    c
                                                ) {
                                                    if (!c) return 0;
                                                    var a = c.match(/([+-]|\d\d)/g),
                                                        b = 60 * a[1] + (+a[2] || 0);
                                                    return 0 === b ? 0 : '+' === a[0] ? -b : b;
                                                })(a);
                                            }
                                        ]),
                                        (k = function (b) {
                                            var a = j[b];
                                            return a && (a.indexOf ? a : a.s.concat(a.f));
                                        }),
                                        (l = function (c, d) {
                                            var b,
                                                e = j.meridiem;
                                            if (e) {
                                                for (var a = 1; a <= 24; a += 1)
                                                    if (c.indexOf(e(a, 0, d)) > -1) {
                                                        b = a > 12;
                                                        break;
                                                    }
                                            } else b = c === (d ? 'pm' : 'PM');
                                            return b;
                                        }),
                                        (m = {
                                            A: [
                                                (c = /\d*[^\s\d-:/()]+/),
                                                function (a) {
                                                    this.afternoon = l(a, !1);
                                                }
                                            ],
                                            a: [
                                                c,
                                                function (a) {
                                                    this.afternoon = l(a, !0);
                                                }
                                            ],
                                            S: [
                                                /\d/,
                                                function (a) {
                                                    this.milliseconds = 100 * +a;
                                                }
                                            ],
                                            SS: [
                                                (d = /\d\d/),
                                                function (a) {
                                                    this.milliseconds = 10 * +a;
                                                }
                                            ],
                                            SSS: [
                                                /\d{3}/,
                                                function (a) {
                                                    this.milliseconds = +a;
                                                }
                                            ],
                                            s: [
                                                (b = /\d\d?/),
                                                (a = function (a) {
                                                    return function (b) {
                                                        this[a] = +b;
                                                    };
                                                })('seconds')
                                            ],
                                            ss: [b, a('seconds')],
                                            m: [b, a('minutes')],
                                            mm: [b, a('minutes')],
                                            H: [b, a('hours')],
                                            h: [b, a('hours')],
                                            HH: [b, a('hours')],
                                            hh: [b, a('hours')],
                                            D: [b, a('day')],
                                            DD: [d, a('day')],
                                            Do: [
                                                c,
                                                function (b) {
                                                    var c = j.ordinal,
                                                        d = b.match(/\d+/);
                                                    if (((this.day = d[0]), c))
                                                        for (var a = 1; a <= 31; a += 1)
                                                            c(a).replace(/\[|\]/g, '') === b &&
                                                                (this.day = a);
                                                }
                                            ],
                                            M: [b, a('month')],
                                            MM: [d, a('month')],
                                            MMM: [
                                                c,
                                                function (b) {
                                                    var c = k('months'),
                                                        a =
                                                            (
                                                                k('monthsShort') ||
                                                                c.map(function (a) {
                                                                    return a.substr(0, 3);
                                                                })
                                                            ).indexOf(b) + 1;
                                                    if (a < 1) throw new Error();
                                                    this.month = a % 12 || a;
                                                }
                                            ],
                                            MMMM: [
                                                c,
                                                function (b) {
                                                    var a = k('months').indexOf(b) + 1;
                                                    if (a < 1) throw new Error();
                                                    this.month = a % 12 || a;
                                                }
                                            ],
                                            Y: [/[+-]?\d+/, a('year')],
                                            YY: [
                                                d,
                                                function (a) {
                                                    (a = +a),
                                                        (this.year = a + (a > 68 ? 1900 : 2e3));
                                                }
                                            ],
                                            YYYY: [/\d{4}/, a('year')],
                                            Z: e,
                                            ZZ: e
                                        }),
                                        (n = function (q, r, s) {
                                            try {
                                                var a = (function (d) {
                                                        for (
                                                            var c = (d = h(
                                                                    d,
                                                                    j && j.formats
                                                                )).match(i),
                                                                g = c.length,
                                                                a = 0;
                                                            a < g;
                                                            a += 1
                                                        ) {
                                                            var e = c[a],
                                                                b = m[e],
                                                                k = b && b[0],
                                                                f = b && b[1];
                                                            c[a] = f
                                                                ? { regex: k, parser: f }
                                                                : e.replace(/^\[|\]$/g, '');
                                                        }
                                                        return function (b) {
                                                            for (
                                                                var d = {}, e = 0, f = 0;
                                                                e < g;
                                                                e += 1
                                                            ) {
                                                                var a = c[e];
                                                                if ('string' == typeof a)
                                                                    f += a.length;
                                                                else {
                                                                    var i = a.regex,
                                                                        j = a.parser,
                                                                        k = b.substr(f),
                                                                        h = i.exec(k)[0];
                                                                    j.call(d, h),
                                                                        (b = b.replace(h, ''));
                                                                }
                                                            }
                                                            return (
                                                                (function (a) {
                                                                    var b = a.afternoon;
                                                                    if (void 0 !== b) {
                                                                        var c = a.hours;
                                                                        b
                                                                            ? c < 12 &&
                                                                              (a.hours += 12)
                                                                            : 12 === c &&
                                                                              (a.hours = 0),
                                                                            delete a.afternoon;
                                                                    }
                                                                })(d),
                                                                d
                                                            );
                                                        };
                                                    })(r)(q),
                                                    d = a.year,
                                                    b = a.month,
                                                    t = a.day,
                                                    u = a.hours,
                                                    v = a.minutes,
                                                    w = a.seconds,
                                                    x = a.milliseconds,
                                                    p = a.zone,
                                                    e = new Date(),
                                                    f = t || (d || b ? 1 : e.getDate()),
                                                    g = d || e.getFullYear(),
                                                    c = 0;
                                                (d && !b) || (c = b > 0 ? b - 1 : e.getMonth());
                                                var k = u || 0,
                                                    l = v || 0,
                                                    n = w || 0,
                                                    o = x || 0;
                                                return p
                                                    ? new Date(
                                                          Date.UTC(
                                                              g,
                                                              c,
                                                              f,
                                                              k,
                                                              l,
                                                              n,
                                                              o + 60 * p.offset * 1e3
                                                          )
                                                      )
                                                    : s
                                                      ? new Date(Date.UTC(g, c, f, k, l, n, o))
                                                      : new Date(g, c, f, k, l, n, o);
                                            } catch (y) {
                                                return new Date('');
                                            }
                                        }),
                                        function (d, b, c) {
                                            c.p.customParseFormat = !0;
                                            var a = b.prototype,
                                                e = a.parse;
                                            a.parse = function (f) {
                                                var i = f.date,
                                                    k = f.utc,
                                                    a = f.args;
                                                this.$u = k;
                                                var b = a[1];
                                                if ('string' == typeof b) {
                                                    var l = !0 === a[2],
                                                        m = !0 === a[3],
                                                        p = l || m,
                                                        d = a[2];
                                                    m && (d = a[2]),
                                                        (j = this.$locale()),
                                                        !l && d && (j = c.Ls[d]),
                                                        (this.$d = n(i, b, k)),
                                                        this.init(),
                                                        d &&
                                                            !0 !== d &&
                                                            (this.$L = this.locale(d).$L),
                                                        p &&
                                                            i !== this.format(b) &&
                                                            (this.$d = new Date('')),
                                                        (j = {});
                                                } else if (b instanceof Array)
                                                    for (var o = b.length, g = 1; g <= o; g += 1) {
                                                        a[1] = b[g - 1];
                                                        var h = c.apply(this, a);
                                                        if (h.isValid()) {
                                                            (this.$d = h.$d),
                                                                (this.$L = h.$L),
                                                                this.init();
                                                            break;
                                                        }
                                                        g === o && (this.$d = new Date(''));
                                                    }
                                                else e.call(this, f);
                                            };
                                        });
                                });
                            d.extend(e),
                                (c.parseDate = (b, c) => {
                                    let a = !1;
                                    if (c)
                                        switch (c) {
                                            case 'ISO_8601':
                                                a = b;
                                                break;
                                            case 'RFC_2822':
                                                a = d(b, 'ddd, MM MMM YYYY HH:mm:ss ZZ').format(
                                                    'YYYYMMDD'
                                                );
                                                break;
                                            case 'MYSQL':
                                                a = d(b, 'YYYY-MM-DD hh:mm:ss').format('YYYYMMDD');
                                                break;
                                            case 'UNIX':
                                                a = d(b).unix();
                                                break;
                                            default:
                                                a = d(b, c).format('YYYYMMDD');
                                        }
                                    return a;
                                });
                        }).call(this);
                    }).call(
                        this,
                        'undefined' != typeof global
                            ? global
                            : 'undefined' != typeof self
                              ? self
                              : 'undefined' != typeof window
                                ? window
                                : {}
                    );
                },
                {}
            ],
            2: [
                function (c, d, a) {
                    'use strict';
                    Object.defineProperty(a, '__esModule', { value: !0 });
                    let e = (a) => '[object Object]' === Object.prototype.toString.call(a),
                        f = (d, a) => {
                            let c = document.createElement(d);
                            if (a && 'object' == typeof a)
                                for (let b in a)
                                    'html' === b ? (c.innerHTML = a[b]) : c.setAttribute(b, a[b]);
                            return c;
                        },
                        g = (a) => {
                            a instanceof NodeList ? a.forEach((a) => g(a)) : (a.innerHTML = '');
                        },
                        h = (a, b, c) =>
                            f('li', { class: a, html: `<a href="#" data-page="${b}">${c}</a>` }),
                        i = (a, c) => {
                            let d, e;
                            1 === c
                                ? ((d = 0), (e = a.length))
                                : -1 === c && ((d = a.length - 1), (e = -1));
                            for (let f = !0; f; ) {
                                f = !1;
                                for (let b = d; b != e; b += c)
                                    if (a[b + c] && a[b].value > a[b + c].value) {
                                        let g = a[b],
                                            h = a[b + c],
                                            i = g;
                                        (a[b] = h), (a[b + c] = i), (f = !0);
                                    }
                            }
                            return a;
                        };
                    class j {
                        constructor(a, b) {
                            return (this.dt = a), (this.rows = b), this;
                        }
                        build(b) {
                            let c = f('tr'),
                                a = this.dt.headings;
                            return (
                                a.length || (a = b.map(() => '')),
                                a.forEach((e, a) => {
                                    let d = f('td');
                                    (b[a] && b[a].length) || (b[a] = ''),
                                        (d.innerHTML = b[a]),
                                        (d.data = b[a]),
                                        c.appendChild(d);
                                }),
                                c
                            );
                        }
                        render(a) {
                            return a;
                        }
                        add(a) {
                            if (Array.isArray(a)) {
                                let b = this.dt;
                                Array.isArray(a[0])
                                    ? a.forEach((a) => {
                                          b.data.push(this.build(a));
                                      })
                                    : b.data.push(this.build(a)),
                                    b.data.length && (b.hasRows = !0),
                                    this.update(),
                                    b.columns().rebuild();
                            }
                        }
                        remove(a) {
                            let b = this.dt;
                            Array.isArray(a)
                                ? (a.sort((a, b) => b - a),
                                  a.forEach((a) => {
                                      b.data.splice(a, 1);
                                  }))
                                : 'all' == a
                                  ? (b.data = [])
                                  : b.data.splice(a, 1),
                                b.data.length || (b.hasRows = !1),
                                this.update(),
                                b.columns().rebuild();
                        }
                        update() {
                            this.dt.data.forEach((a, b) => {
                                a.dataIndex = b;
                            });
                        }
                    }
                    class k {
                        constructor(a) {
                            return (this.dt = a), this;
                        }
                        swap(b) {
                            if (b.length && 2 === b.length) {
                                let a = [];
                                this.dt.headings.forEach((c, b) => {
                                    a.push(b);
                                });
                                let c = b[0],
                                    d = b[1],
                                    e = a[d];
                                (a[d] = a[c]), (a[c] = e), this.order(a);
                            }
                        }
                        order(c) {
                            let d,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                b = [[], [], [], []],
                                a = this.dt;
                            c.forEach((c, f) => {
                                (i = 'false' !== (h = a.headings[c]).getAttribute('data-sortable')),
                                    (d = h.cloneNode(!0)),
                                    (d.originalCellIndex = f),
                                    (d.sortable = i),
                                    b[0].push(d),
                                    a.hiddenColumns.includes(c) ||
                                        (((e = h.cloneNode(!0)).originalCellIndex = f),
                                        (e.sortable = i),
                                        b[1].push(e));
                            }),
                                a.data.forEach((d, e) => {
                                    (f = d.cloneNode(!1)),
                                        (g = d.cloneNode(!1)),
                                        (f.dataIndex = g.dataIndex = e),
                                        null !== d.searchIndex &&
                                            void 0 !== d.searchIndex &&
                                            (f.searchIndex = g.searchIndex = d.searchIndex),
                                        c.forEach((b) => {
                                            ((j = d.cells[b].cloneNode(!0)).data = d.cells[b].data),
                                                f.appendChild(j),
                                                a.hiddenColumns.includes(b) ||
                                                    (((j = d.cells[b].cloneNode(!0)).data =
                                                        d.cells[b].data),
                                                    g.appendChild(j));
                                        }),
                                        b[2].push(f),
                                        b[3].push(g);
                                }),
                                (a.headings = b[0]),
                                (a.activeHeadings = b[1]),
                                (a.data = b[2]),
                                (a.activeRows = b[3]),
                                a.update();
                        }
                        hide(a) {
                            if (a.length) {
                                let b = this.dt;
                                a.forEach((a) => {
                                    b.hiddenColumns.includes(a) || b.hiddenColumns.push(a);
                                }),
                                    this.rebuild();
                            }
                        }
                        show(a) {
                            if (a.length) {
                                let b,
                                    c = this.dt;
                                a.forEach((a) => {
                                    (b = c.hiddenColumns.indexOf(a)) > -1 &&
                                        c.hiddenColumns.splice(b, 1);
                                }),
                                    this.rebuild();
                            }
                        }
                        visible(a) {
                            let b,
                                c = this.dt;
                            return (
                                isNaN((a = a || c.headings.map((a) => a.originalCellIndex)))
                                    ? Array.isArray(a) &&
                                      ((b = []),
                                      a.forEach((a) => {
                                          b.push(!c.hiddenColumns.includes(a));
                                      }))
                                    : (b = !c.hiddenColumns.includes(a)),
                                b
                            );
                        }
                        add(a) {
                            let c,
                                b = document.createElement('th');
                            if (!this.dt.headings.length)
                                return (
                                    this.dt.insert({
                                        headings: [a.heading],
                                        data: a.data.map((a) => [a])
                                    }),
                                    void this.rebuild()
                                );
                            this.dt.hiddenHeader
                                ? (b.innerHTML = '')
                                : a.heading.nodeName
                                  ? b.appendChild(a.heading)
                                  : (b.innerHTML = a.heading),
                                this.dt.headings.push(b),
                                this.dt.data.forEach((d, b) => {
                                    a.data[b] &&
                                        ((c = document.createElement('td')),
                                        a.data[b].nodeName
                                            ? c.appendChild(a.data[b])
                                            : (c.innerHTML = a.data[b]),
                                        (c.data = c.innerHTML),
                                        a.render &&
                                            (c.innerHTML = a.render.call(this, c.data, c, d)),
                                        d.appendChild(c));
                                }),
                                a.type && b.setAttribute('data-type', a.type),
                                a.format && b.setAttribute('data-format', a.format),
                                a.hasOwnProperty('sortable') &&
                                    ((b.sortable = a.sortable),
                                    b.setAttribute(
                                        'data-sortable',
                                        !0 === a.sortable ? 'true' : 'false'
                                    )),
                                this.rebuild(),
                                this.dt.renderHeader();
                        }
                        remove(a) {
                            Array.isArray(a)
                                ? (a.sort((a, b) => b - a), a.forEach((a) => this.remove(a)))
                                : (this.dt.headings.splice(a, 1),
                                  this.dt.data.forEach((b) => {
                                      b.removeChild(b.cells[a]);
                                  })),
                                this.rebuild();
                        }
                        filter(b, c, d, e) {
                            let a = this.dt;
                            if (
                                (a.filterState || (a.filterState = { originalData: a.data }),
                                !a.filterState[b])
                            ) {
                                let h = [...e, () => !0],
                                    f;
                                a.filterState[b] = ((f = 0), () => h[f++ % h.length]);
                            }
                            let i = a.filterState[b](),
                                g = Array.from(a.filterState.originalData).filter((d) => {
                                    let a = d.cells[b],
                                        c = a.hasAttribute('data-content')
                                            ? a.getAttribute('data-content')
                                            : a.innerText;
                                    return 'function' == typeof i ? i(c) : c === i;
                                });
                            (a.data = g),
                                this.rebuild(),
                                a.update(),
                                d || a.emit('datatable.sort', b, c);
                        }
                        sort(b, f, g) {
                            let a = this.dt;
                            if (a.hasHeadings && (b < 0 || b > a.headings.length)) return !1;
                            let d =
                                a.options.filters && a.options.filters[a.headings[b].textContent];
                            if (d && 0 !== d.length) return void this.filter(b, f, g, d);
                            (a.sorting = !0), g || a.emit('datatable.sorting', b, f);
                            let k = a.data,
                                l = [],
                                m = [],
                                n = 0,
                                o = 0,
                                e = a.headings[b],
                                h = [];
                            if ('date' === e.getAttribute('data-type')) {
                                let j = !1;
                                e.hasAttribute('data-format') &&
                                    (j = e.getAttribute('data-format')),
                                    h.push(
                                        Promise.resolve()
                                            .then(function () {
                                                return c('./date-cd1c23ce.js');
                                            })
                                            .then(
                                                ({ parseDate: a }) =>
                                                    (b) =>
                                                        a(b, j)
                                            )
                                    );
                            }
                            Promise.all(h).then((h) => {
                                let p = h[0],
                                    c,
                                    d;
                                Array.from(k).forEach((c) => {
                                    let d = c.cells[b],
                                        a = d.hasAttribute('data-content')
                                            ? d.getAttribute('data-content')
                                            : d.innerText,
                                        e;
                                    parseFloat(
                                        (e = p
                                            ? p(a)
                                            : 'string' == typeof a
                                              ? a.replace(/(\$|,|\s|%)/g, '')
                                              : a)
                                    ) == e
                                        ? (m[o++] = { value: Number(e), row: c })
                                        : (l[n++] = {
                                              value: 'string' == typeof a ? a.toLowerCase() : a,
                                              row: c
                                          });
                                }),
                                    f || (f = e.classList.contains('asc') ? 'desc' : 'asc'),
                                    'desc' == f
                                        ? ((c = i(l, -1)),
                                          (d = i(m, -1)),
                                          e.classList.remove('asc'),
                                          e.classList.add('desc'))
                                        : ((c = i(m, 1)),
                                          (d = i(l, 1)),
                                          e.classList.remove('desc'),
                                          e.classList.add('asc')),
                                    a.lastTh &&
                                        e != a.lastTh &&
                                        (a.lastTh.classList.remove('desc'),
                                        a.lastTh.classList.remove('asc')),
                                    (a.lastTh = e),
                                    (k = c.concat(d)),
                                    (a.data = []);
                                let j = [];
                                k.forEach((b, c) => {
                                    a.data.push(b.row),
                                        null !== b.row.searchIndex &&
                                            void 0 !== b.row.searchIndex &&
                                            j.push(c);
                                }),
                                    (a.searchData = j),
                                    this.rebuild(),
                                    a.update(),
                                    g || a.emit('datatable.sort', b, f);
                            });
                        }
                        rebuild() {
                            let c,
                                d,
                                e,
                                f,
                                a = this.dt,
                                b = [];
                            (a.activeRows = []),
                                (a.activeHeadings = []),
                                a.headings.forEach((b, c) => {
                                    (b.originalCellIndex = c),
                                        (b.sortable = 'false' !== b.getAttribute('data-sortable')),
                                        a.hiddenColumns.includes(c) || a.activeHeadings.push(b);
                                }),
                                a.data.forEach((g, h) => {
                                    (c = g.cloneNode(!1)),
                                        (d = g.cloneNode(!1)),
                                        (c.dataIndex = d.dataIndex = h),
                                        null !== g.searchIndex &&
                                            void 0 !== g.searchIndex &&
                                            (c.searchIndex = d.searchIndex = g.searchIndex),
                                        Array.from(g.cells).forEach((b) => {
                                            ((e = b.cloneNode(!0)).data = b.data),
                                                c.appendChild(e),
                                                a.hiddenColumns.includes(e.cellIndex) ||
                                                    (((f = e.cloneNode(!0)).data = e.data),
                                                    d.appendChild(f));
                                        }),
                                        b.push(c),
                                        a.activeRows.push(d);
                                }),
                                (a.data = b),
                                a.update();
                        }
                    }
                    let l = function (a) {
                            let b = !1,
                                c = !1;
                            if ((a = a || this.options.data).headings) {
                                b = f('thead');
                                let d = f('tr');
                                a.headings.forEach((a) => {
                                    let b = f('th', { html: a });
                                    d.appendChild(b);
                                }),
                                    b.appendChild(d);
                            }
                            a.data &&
                                a.data.length &&
                                ((c = f('tbody')),
                                a.data.forEach((b) => {
                                    if (a.headings && a.headings.length !== b.length)
                                        throw new Error(
                                            'The number of rows do not match the number of headings.'
                                        );
                                    let d = f('tr');
                                    b.forEach((a) => {
                                        let b = f('td', { html: a });
                                        d.appendChild(b);
                                    }),
                                        c.appendChild(d);
                                })),
                                b &&
                                    (null !== this.table.tHead &&
                                        this.table.removeChild(this.table.tHead),
                                    this.table.appendChild(b)),
                                c &&
                                    (this.table.tBodies.length &&
                                        this.table.removeChild(this.table.tBodies[0]),
                                    this.table.appendChild(c));
                        },
                        m = {
                            sortable: !0,
                            searchable: !0,
                            paging: !0,
                            perPage: 10,
                            perPageSelect: [5, 10, 15, 20, 25],
                            nextPrev: !0,
                            firstLast: !1,
                            prevText: '&lsaquo;',
                            nextText: '&rsaquo;',
                            firstText: '&laquo;',
                            lastText: '&raquo;',
                            ellipsisText: '&hellip;',
                            ascText: '\u25B4',
                            descText: '\u25BE',
                            truncatePager: !0,
                            pagerDelta: 2,
                            scrollY: '',
                            fixedColumns: !0,
                            fixedHeight: !1,
                            header: !0,
                            hiddenHeader: !1,
                            footer: !1,
                            labels: {
                                placeholder: 'Search...',
                                perPage: '{select} entries per page',
                                noRows: 'No entries found',
                                info: 'Showing {start} to {end} of {rows} entries'
                            },
                            layout: { top: '{select}{search}', bottom: '{info}{pager}' }
                        };
                    class b {
                        constructor(a, b = {}) {
                            if (
                                ((this.initialized = !1),
                                (this.options = {
                                    ...m,
                                    ...b,
                                    layout: { ...m.layout, ...b.layout },
                                    labels: { ...m.labels, ...b.labels }
                                }),
                                'string' == typeof a && (a = document.querySelector(a)),
                                (this.initialLayout = a.innerHTML),
                                (this.initialSortable = this.options.sortable),
                                this.options.header || (this.options.sortable = !1),
                                null !== a.tHead ||
                                    (this.options.data &&
                                        (!this.options.data || this.options.data.headings)) ||
                                    (this.options.sortable = !1),
                                a.tBodies.length &&
                                    !a.tBodies[0].rows.length &&
                                    this.options.data &&
                                    !this.options.data.data)
                            )
                                throw new Error(
                                    "You seem to be using the data option, but you've not defined any rows."
                                );
                            (this.table = a),
                                (this.listeners = { onResize: (a) => this.onResize(a) }),
                                this.init();
                        }
                        static extend(c, a) {
                            'function' == typeof a ? (b.prototype[c] = a) : (b[c] = a);
                        }
                        init(a) {
                            if (
                                this.initialized ||
                                this.table.classList.contains('dataTable-table')
                            )
                                return !1;
                            Object.assign(this.options, a || {}),
                                (this.currentPage = 1),
                                (this.onFirstPage = !0),
                                (this.hiddenColumns = []),
                                (this.columnRenderers = []),
                                (this.selectedColumns = []),
                                this.render(),
                                setTimeout(() => {
                                    this.emit('datatable.init'),
                                        (this.initialized = !0),
                                        this.options.plugins &&
                                            Object.entries(this.options.plugins).forEach(
                                                ([a, b]) => {
                                                    this[a] &&
                                                        'function' == typeof this[a] &&
                                                        ((this[a] = this[a](b, {
                                                            createElement: f
                                                        })),
                                                        b.enabled &&
                                                            this[a].init &&
                                                            'function' == typeof this[a].init &&
                                                            this[a].init());
                                                }
                                            );
                                }, 10);
                        }
                        render(d) {
                            if (d) {
                                switch (d) {
                                    case 'page':
                                        this.renderPage();
                                        break;
                                    case 'pager':
                                        this.renderPager();
                                        break;
                                    case 'header':
                                        this.renderHeader();
                                }
                                return !1;
                            }
                            let a = this.options,
                                b = '';
                            if (
                                (a.data && l.call(this),
                                (this.body = this.table.tBodies[0]),
                                (this.head = this.table.tHead),
                                (this.foot = this.table.tFoot),
                                this.body ||
                                    ((this.body = f('tbody')), this.table.appendChild(this.body)),
                                (this.hasRows = this.body.rows.length > 0),
                                !this.head)
                            ) {
                                let e = f('thead'),
                                    h = f('tr');
                                this.hasRows &&
                                    (Array.from(this.body.rows[0].cells).forEach(() => {
                                        h.appendChild(f('th'));
                                    }),
                                    e.appendChild(h)),
                                    (this.head = e),
                                    this.table.insertBefore(this.head, this.body),
                                    (this.hiddenHeader = a.hiddenHeader);
                            }
                            if (
                                ((this.headings = []),
                                (this.hasHeadings = this.head.rows.length > 0),
                                this.hasHeadings &&
                                    ((this.header = this.head.rows[0]),
                                    (this.headings = [].slice.call(this.header.cells))),
                                a.header || (this.head && this.table.removeChild(this.table.tHead)),
                                a.footer
                                    ? this.head &&
                                      !this.foot &&
                                      ((this.foot = f('tfoot', { html: this.head.innerHTML })),
                                      this.table.appendChild(this.foot))
                                    : this.foot && this.table.removeChild(this.table.tFoot),
                                (this.wrapper = f('div', {
                                    class: 'dataTable-wrapper dataTable-loading'
                                })),
                                (b += "<div class='dataTable-top'>"),
                                (b += a.layout.top),
                                (b += '</div>'),
                                a.scrollY.length
                                    ? (b += `<div class='dataTable-container' style='height: ${a.scrollY}; overflow-Y: auto;'></div>`)
                                    : (b += "<div class='dataTable-container'></div>"),
                                (b += "<div class='dataTable-bottom'>"),
                                (b += a.layout.bottom),
                                (b += '</div>'),
                                (b = b.replace(
                                    '{info}',
                                    a.paging ? "<div class='dataTable-info'></div>" : ''
                                )),
                                a.paging && a.perPageSelect)
                            ) {
                                let c = "<div class='dataTable-dropdown'><label>";
                                (c += a.labels.perPage), (c += '</label></div>');
                                let i = f('select', { class: 'dataTable-selector' });
                                a.perPageSelect.forEach((b) => {
                                    let c = b === a.perPage,
                                        d = new Option(b, b, c, c);
                                    i.add(d);
                                }),
                                    (c = c.replace('{select}', i.outerHTML)),
                                    (b = b.replace('{select}', c));
                            } else b = b.replace('{select}', '');
                            if (a.searchable) {
                                let j = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${a.labels.placeholder}' type='text'></div>`;
                                b = b.replace('{search}', j);
                            } else b = b.replace('{search}', '');
                            this.hasHeadings && this.render('header'),
                                this.table.classList.add('dataTable-table');
                            let g = f('nav', { class: 'dataTable-pagination' }),
                                k = f('ul', { class: 'dataTable-pagination-list' });
                            g.appendChild(k),
                                (b = b.replace(/\{pager\}/g, g.outerHTML)),
                                (this.wrapper.innerHTML = b),
                                (this.container =
                                    this.wrapper.querySelector('.dataTable-container')),
                                (this.pagers = this.wrapper.querySelectorAll(
                                    '.dataTable-pagination-list'
                                )),
                                (this.label = this.wrapper.querySelector('.dataTable-info')),
                                this.table.parentNode.replaceChild(this.wrapper, this.table),
                                this.container.appendChild(this.table),
                                (this.rect = this.table.getBoundingClientRect()),
                                (this.data = Array.from(this.body.rows)),
                                (this.activeRows = this.data.slice()),
                                (this.activeHeadings = this.headings.slice()),
                                this.update(),
                                this.setColumns(),
                                this.fixHeight(),
                                this.fixColumns(),
                                a.header || this.wrapper.classList.add('no-header'),
                                a.footer || this.wrapper.classList.add('no-footer'),
                                a.sortable && this.wrapper.classList.add('sortable'),
                                a.searchable && this.wrapper.classList.add('searchable'),
                                a.fixedHeight && this.wrapper.classList.add('fixed-height'),
                                a.fixedColumns && this.wrapper.classList.add('fixed-columns'),
                                this.bindEvents();
                        }
                        renderPage() {
                            if (
                                (this.hasHeadings &&
                                    (g(this.header),
                                    this.activeHeadings.forEach((a) => this.header.appendChild(a))),
                                this.hasRows && this.totalPages)
                            ) {
                                this.currentPage > this.totalPages && (this.currentPage = 1);
                                let e = this.currentPage - 1,
                                    f = document.createDocumentFragment();
                                this.pages[e].forEach((a) => f.appendChild(this.rows().render(a))),
                                    this.clear(f),
                                    (this.onFirstPage = 1 === this.currentPage),
                                    (this.onLastPage = this.currentPage === this.lastPage);
                            } else this.setMessage(this.options.labels.noRows);
                            let a,
                                c = 0,
                                b = 0,
                                d = 0;
                            if (
                                (this.totalPages &&
                                    ((d =
                                        (b = (c = this.currentPage - 1) * this.options.perPage) +
                                        this.pages[c].length),
                                    (b += 1),
                                    (a = this.searching
                                        ? this.searchData.length
                                        : this.data.length)),
                                this.label && this.options.labels.info.length)
                            ) {
                                let h = this.options.labels.info
                                    .replace('{start}', b)
                                    .replace('{end}', d)
                                    .replace('{page}', this.currentPage)
                                    .replace('{pages}', this.totalPages)
                                    .replace('{rows}', a);
                                this.label.innerHTML = a ? h : '';
                            }
                            1 == this.currentPage && this.fixHeight();
                        }
                        renderPager() {
                            if ((g(this.pagers), this.totalPages > 1)) {
                                let a = 'pager',
                                    b = document.createDocumentFragment(),
                                    d = this.onFirstPage ? 1 : this.currentPage - 1,
                                    e = this.onLastPage ? this.totalPages : this.currentPage + 1;
                                this.options.firstLast &&
                                    b.appendChild(h(a, 1, this.options.firstText)),
                                    this.options.nextPrev &&
                                        b.appendChild(h(a, d, this.options.prevText));
                                let c = this.links;
                                this.options.truncatePager &&
                                    (c = ((k, c, d, b, m) => {
                                        let n,
                                            e = 2 * (b = b || 2),
                                            g = c - b,
                                            h = c + b,
                                            i = [],
                                            l = [];
                                        c < 4 - b + e
                                            ? (h = 3 + e)
                                            : c > d - (3 - b + e) && (g = d - (2 + e));
                                        for (let a = 1; a <= d; a++)
                                            if (1 == a || a == d || (a >= g && a <= h)) {
                                                let j = k[a - 1];
                                                j.classList.remove('active'), i.push(j);
                                            }
                                        return (
                                            i.forEach((a) => {
                                                let c = a.children[0].getAttribute('data-page');
                                                if (n) {
                                                    let b = n.children[0].getAttribute('data-page');
                                                    if (c - b == 2) l.push(k[b]);
                                                    else if (c - b != 1) {
                                                        let d = f('li', {
                                                            class: 'ellipsis',
                                                            html: `<a href="#">${m}</a>`
                                                        });
                                                        l.push(d);
                                                    }
                                                }
                                                l.push(a), (n = a);
                                            }),
                                            l
                                        );
                                    })(
                                        this.links,
                                        this.currentPage,
                                        this.pages.length,
                                        this.options.pagerDelta,
                                        this.options.ellipsisText
                                    )),
                                    this.links[this.currentPage - 1].classList.add('active'),
                                    c.forEach((a) => {
                                        a.classList.remove('active'), b.appendChild(a);
                                    }),
                                    this.links[this.currentPage - 1].classList.add('active'),
                                    this.options.nextPrev &&
                                        b.appendChild(h(a, e, this.options.nextText)),
                                    this.options.firstLast &&
                                        b.appendChild(h(a, this.totalPages, this.options.lastText)),
                                    this.pagers.forEach((a) => {
                                        a.appendChild(b.cloneNode(!0));
                                    });
                            }
                        }
                        renderHeader() {
                            (this.labels = []),
                                this.headings &&
                                    this.headings.length &&
                                    this.headings.forEach((a, b) => {
                                        if (
                                            ((this.labels[b] = a.textContent),
                                            a.firstElementChild &&
                                                a.firstElementChild.classList.contains(
                                                    'dataTable-sorter'
                                                ) &&
                                                (a.innerHTML = a.firstElementChild.innerHTML),
                                            (a.sortable =
                                                'false' !== a.getAttribute('data-sortable')),
                                            (a.originalCellIndex = b),
                                            this.options.sortable && a.sortable)
                                        ) {
                                            let c = f('a', {
                                                href: '#',
                                                class: 'dataTable-sorter',
                                                html: a.innerHTML
                                            });
                                            (a.innerHTML = ''),
                                                a.setAttribute('data-sortable', ''),
                                                a.appendChild(c);
                                        }
                                    }),
                                this.fixColumns();
                        }
                        bindEvents() {
                            let a = this.options;
                            if (a.perPageSelect) {
                                let b = this.wrapper.querySelector('.dataTable-selector');
                                b &&
                                    b.addEventListener(
                                        'change',
                                        () => {
                                            (a.perPage = parseInt(b.value, 10)),
                                                this.update(),
                                                this.fixHeight(),
                                                this.emit('datatable.perpage', a.perPage);
                                        },
                                        !1
                                    );
                            }
                            a.searchable &&
                                ((this.input = this.wrapper.querySelector('.dataTable-input')),
                                this.input &&
                                    this.input.addEventListener(
                                        'keyup',
                                        () => this.search(this.input.value),
                                        !1
                                    )),
                                this.wrapper.addEventListener(
                                    'click',
                                    (c) => {
                                        let b = c.target.closest('a');
                                        b &&
                                            'a' === b.nodeName.toLowerCase() &&
                                            (b.hasAttribute('data-page')
                                                ? (this.page(b.getAttribute('data-page')),
                                                  c.preventDefault())
                                                : a.sortable &&
                                                  b.classList.contains('dataTable-sorter') &&
                                                  'false' !=
                                                      b.parentNode.getAttribute('data-sortable') &&
                                                  (this.columns().sort(
                                                      this.headings.indexOf(b.parentNode)
                                                  ),
                                                  c.preventDefault()));
                                    },
                                    !1
                                ),
                                window.addEventListener('resize', this.listeners.onResize);
                        }
                        onResize() {
                            (this.rect = this.container.getBoundingClientRect()),
                                this.rect.width && this.fixColumns();
                        }
                        setColumns(a) {
                            a ||
                                this.data.forEach((a) => {
                                    Array.from(a.cells).forEach((a) => {
                                        a.data = a.innerHTML;
                                    });
                                }),
                                this.options.columns &&
                                    this.headings.length &&
                                    this.options.columns.forEach((a) => {
                                        Array.isArray(a.select) || (a.select = [a.select]),
                                            a.hasOwnProperty('render') &&
                                                'function' == typeof a.render &&
                                                ((this.selectedColumns =
                                                    this.selectedColumns.concat(a.select)),
                                                this.columnRenderers.push({
                                                    columns: a.select,
                                                    renderer: a.render
                                                })),
                                            a.select.forEach((c) => {
                                                let b = this.headings[c];
                                                a.type && b.setAttribute('data-type', a.type),
                                                    a.format &&
                                                        b.setAttribute('data-format', a.format),
                                                    a.hasOwnProperty('sortable') &&
                                                        b.setAttribute('data-sortable', a.sortable),
                                                    a.hasOwnProperty('hidden') &&
                                                        !1 !== a.hidden &&
                                                        this.columns().hide([c]),
                                                    a.hasOwnProperty('sort') &&
                                                        1 === a.select.length &&
                                                        this.columns().sort(
                                                            a.select[0],
                                                            a.sort,
                                                            !0
                                                        );
                                            });
                                    }),
                                this.hasRows &&
                                    (this.data.forEach((a, b) => {
                                        (a.dataIndex = b),
                                            Array.from(a.cells).forEach((a) => {
                                                a.data = a.innerHTML;
                                            });
                                    }),
                                    this.selectedColumns.length &&
                                        this.data.forEach((a) => {
                                            Array.from(a.cells).forEach((c, b) => {
                                                this.selectedColumns.includes(b) &&
                                                    this.columnRenderers.forEach((d) => {
                                                        d.columns.includes(b) &&
                                                            (c.innerHTML = d.renderer.call(
                                                                this,
                                                                c.data,
                                                                c,
                                                                a
                                                            ));
                                                    });
                                            });
                                        }),
                                    this.columns().rebuild()),
                                this.render('header');
                        }
                        destroy() {
                            (this.table.innerHTML = this.initialLayout),
                                this.table.classList.remove('dataTable-table'),
                                this.wrapper.parentNode.replaceChild(this.table, this.wrapper),
                                (this.initialized = !1),
                                window.removeEventListener('resize', this.listeners.onResize);
                        }
                        update() {
                            this.wrapper.classList.remove('dataTablepty'),
                                this.paginate(this),
                                this.render('page'),
                                (this.links = []);
                            let a = this.pages.length;
                            for (; a--; ) {
                                let b = a + 1;
                                this.links[a] = h(0 === a ? 'active' : '', b, b);
                            }
                            (this.sorting = !1),
                                this.render('pager'),
                                this.rows().update(),
                                this.emit('datatable.update');
                        }
                        paginate() {
                            let b = this.options.perPage,
                                a = this.activeRows;
                            return (
                                this.searching &&
                                    ((a = []),
                                    this.searchData.forEach((b) => a.push(this.activeRows[b]))),
                                this.options.paging
                                    ? (this.pages = a
                                          .map((d, c) => (c % b == 0 ? a.slice(c, c + b) : null))
                                          .filter((a) => a))
                                    : (this.pages = [a]),
                                (this.totalPages = this.lastPage = this.pages.length),
                                this.totalPages
                            );
                        }
                        fixColumns() {
                            if (
                                (this.options.scrollY.length || this.options.fixedColumns) &&
                                this.activeHeadings &&
                                this.activeHeadings.length
                            ) {
                                let c,
                                    a = !1;
                                if (((this.columnWidths = []), this.table.tHead)) {
                                    if (
                                        (this.options.scrollY.length &&
                                            ((a = f('thead')).appendChild(f('tr')),
                                            (a.style.height = '0px'),
                                            this.headerTable &&
                                                (this.table.tHead = this.headerTable.tHead)),
                                        this.activeHeadings.forEach((a) => {
                                            a.style.width = '';
                                        }),
                                        this.activeHeadings.forEach((c, g) => {
                                            let d = c.offsetWidth,
                                                e = (d / this.rect.width) * 100;
                                            if (
                                                ((c.style.width = e + '%'),
                                                (this.columnWidths[g] = d),
                                                this.options.scrollY.length)
                                            ) {
                                                let b = f('th');
                                                a.firstElementChild.appendChild(b),
                                                    (b.style.width = e + '%'),
                                                    (b.style.paddingTop = '0'),
                                                    (b.style.paddingBottom = '0'),
                                                    (b.style.border = '0');
                                            }
                                        }),
                                        this.options.scrollY.length)
                                    ) {
                                        let b = this.table.parentElement;
                                        if (!this.headerTable) {
                                            this.headerTable = f('table', {
                                                class: 'dataTable-table'
                                            });
                                            let d = f('div', {
                                                class: 'dataTable-headercontainer'
                                            });
                                            d.appendChild(this.headerTable),
                                                b.parentElement.insertBefore(d, b);
                                        }
                                        let e = this.table.tHead;
                                        this.table.replaceChild(a, e),
                                            (this.headerTable.tHead = e),
                                            (this.headerTable.parentElement.style.paddingRight =
                                                this.headerTable.clientWidth -
                                                this.table.clientWidth +
                                                parseInt(
                                                    this.headerTable.parentElement.style
                                                        .paddingRight || '0',
                                                    10
                                                ) +
                                                'px'),
                                            b.scrollHeight > b.clientHeight &&
                                                (b.style.overflowY = 'scroll');
                                    }
                                } else {
                                    (c = []), (a = f('thead'));
                                    let g = f('tr');
                                    Array.from(this.table.tBodies[0].rows[0].cells).forEach(() => {
                                        let a = f('th');
                                        g.appendChild(a), c.push(a);
                                    }),
                                        a.appendChild(g),
                                        this.table.insertBefore(a, this.body);
                                    let h = [];
                                    c.forEach((b, c) => {
                                        let a = b.offsetWidth,
                                            d = (a / this.rect.width) * 100;
                                        h.push(d), (this.columnWidths[c] = a);
                                    }),
                                        this.data.forEach((a) => {
                                            Array.from(a.cells).forEach((a, b) => {
                                                this.columns(a.cellIndex).visible() &&
                                                    (a.style.width = h[b] + '%');
                                            });
                                        }),
                                        this.table.removeChild(a);
                                }
                            }
                        }
                        fixHeight() {
                            this.options.fixedHeight &&
                                ((this.container.style.height = null),
                                (this.rect = this.container.getBoundingClientRect()),
                                (this.container.style.height = this.rect.height + 'px'));
                        }
                        search(a) {
                            return (
                                !!this.hasRows &&
                                ((a = a.toLowerCase()),
                                (this.currentPage = 1),
                                (this.searching = !0),
                                (this.searchData = []),
                                a.length
                                    ? (this.clear(),
                                      this.data.forEach((b, c) => {
                                          let d = this.searchData.includes(b);
                                          a.split(' ').reduce((e, f) => {
                                              let d = !1,
                                                  a = null;
                                              for (let c = 0; c < b.cells.length; c++)
                                                  if (
                                                      ((a = b.cells[c]).hasAttribute('data-content')
                                                          ? a.getAttribute('data-content')
                                                          : a.textContent
                                                      )
                                                          .toLowerCase()
                                                          .includes(f) &&
                                                      this.columns(a.cellIndex).visible()
                                                  ) {
                                                      d = !0;
                                                      break;
                                                  }
                                              return e && d;
                                          }, !0) && !d
                                              ? ((b.searchIndex = c), this.searchData.push(c))
                                              : (b.searchIndex = null);
                                      }),
                                      this.wrapper.classList.add('search-results'),
                                      this.searchData.length
                                          ? this.update()
                                          : (this.wrapper.classList.remove('search-results'),
                                            this.setMessage(this.options.labels.noRows)),
                                      void this.emit('datatable.search', a, this.searchData))
                                    : ((this.searching = !1),
                                      this.update(),
                                      this.emit('datatable.search', a, this.searchData),
                                      this.wrapper.classList.remove('search-results'),
                                      !1))
                            );
                        }
                        page(a) {
                            return (
                                a != this.currentPage &&
                                (isNaN(a) || (this.currentPage = parseInt(a, 10)),
                                !(a > this.pages.length || a < 0) &&
                                    (this.render('page'),
                                    this.render('pager'),
                                    void this.emit('datatable.page', a)))
                            );
                        }
                        sortColumn(a, b) {
                            this.columns().sort(a, b);
                        }
                        insert(a) {
                            let b = [];
                            if (e(a)) {
                                if (a.headings && !this.hasHeadings && !this.hasRows) {
                                    let c = f('tr');
                                    a.headings.forEach((a) => {
                                        let b = f('th', { html: a });
                                        c.appendChild(b);
                                    }),
                                        this.head.appendChild(c),
                                        (this.header = c),
                                        (this.headings = [].slice.call(c.cells)),
                                        (this.hasHeadings = !0),
                                        (this.options.sortable = this.initialSortable),
                                        this.render('header'),
                                        (this.activeHeadings = this.headings.slice());
                                }
                                a.data && Array.isArray(a.data) && (b = a.data);
                            } else
                                Array.isArray(a) &&
                                    a.forEach((a) => {
                                        let c = [];
                                        Object.entries(a).forEach(([b, d]) => {
                                            let a = this.labels.indexOf(b);
                                            a > -1 && (c[a] = d);
                                        }),
                                            b.push(c);
                                    });
                            b.length && (this.rows().add(b), (this.hasRows = !0)),
                                this.update(),
                                this.setColumns(),
                                this.fixColumns();
                        }
                        refresh() {
                            this.options.searchable &&
                                ((this.input.value = ''), (this.searching = !1)),
                                (this.currentPage = 1),
                                (this.onFirstPage = !0),
                                this.update(),
                                this.emit('datatable.refresh');
                        }
                        clear(a) {
                            this.body && g(this.body);
                            let b = this.body;
                            this.body || (b = this.table),
                                a &&
                                    ('string' == typeof a &&
                                        (document.createDocumentFragment().innerHTML = a),
                                    b.appendChild(a));
                        }
                        export(k) {
                            if (!this.hasHeadings && !this.hasRows) return !1;
                            let g = this.activeHeadings,
                                f = [],
                                j = [],
                                c,
                                d,
                                a,
                                i;
                            if (!e(k)) return !1;
                            let b = {
                                download: !0,
                                skipColumn: [],
                                lineDelimiter: '\n',
                                columnDelimiter: ',',
                                tableName: 'myTable',
                                replacer: null,
                                space: 4,
                                ...k
                            };
                            if (b.type) {
                                if (
                                    (('txt' !== b.type && 'csv' !== b.type) || (f[0] = this.header),
                                    b.selection)
                                ) {
                                    if (isNaN(b.selection)) {
                                        if (Array.isArray(b.selection))
                                            for (c = 0; c < b.selection.length; c++)
                                                f = f.concat(this.pages[b.selection[c] - 1]);
                                    } else f = f.concat(this.pages[b.selection - 1]);
                                } else f = f.concat(this.activeRows);
                                if (f.length) {
                                    if ('txt' === b.type || 'csv' === b.type) {
                                        for (a = '', c = 0; c < f.length; c++) {
                                            for (d = 0; d < f[c].cells.length; d++)
                                                if (
                                                    !b.skipColumn.includes(
                                                        g[d].originalCellIndex
                                                    ) &&
                                                    this.columns(g[d].originalCellIndex).visible()
                                                ) {
                                                    let h = f[c].cells[d].textContent;
                                                    (h = (h = (h = (h = (h = h.trim()).replace(
                                                        /\s{2,}/g,
                                                        ' '
                                                    )).replace(/\n/g, '  ')).replace(
                                                        /"/g,
                                                        '""'
                                                    )).replace(/#/g, '%23')).includes(',') &&
                                                        (h = `"${h}"`),
                                                        (a += h + b.columnDelimiter);
                                                }
                                            (a = a.trim().substring(0, a.length - 1)),
                                                (a += b.lineDelimiter);
                                        }
                                        (a = a.trim().substring(0, a.length - 1)),
                                            b.download && (a = 'data:text/csv;charset=utf-8,' + a);
                                    } else if ('sql' === b.type) {
                                        for (
                                            a = `INSERT INTO \`${b.tableName}\` (`, c = 0;
                                            c < g.length;
                                            c++
                                        )
                                            !b.skipColumn.includes(g[c].originalCellIndex) &&
                                                this.columns(g[c].originalCellIndex).visible() &&
                                                (a += `\`${g[c].textContent}\`,`);
                                        for (
                                            a = a.trim().substring(0, a.length - 1),
                                                a += ') VALUES ',
                                                c = 0;
                                            c < f.length;
                                            c++
                                        ) {
                                            for (a += '(', d = 0; d < f[c].cells.length; d++)
                                                !b.skipColumn.includes(g[d].originalCellIndex) &&
                                                    this.columns(
                                                        g[d].originalCellIndex
                                                    ).visible() &&
                                                    (a += `"${f[c].cells[d].textContent}",`);
                                            (a = a.trim().substring(0, a.length - 1)), (a += '),');
                                        }
                                        (a = a.trim().substring(0, a.length - 1)),
                                            (a += ';'),
                                            b.download &&
                                                (a = 'data:application/sql;charset=utf-8,' + a);
                                    } else if ('json' === b.type) {
                                        for (d = 0; d < f.length; d++)
                                            for (j[d] = j[d] || {}, c = 0; c < g.length; c++)
                                                !b.skipColumn.includes(g[c].originalCellIndex) &&
                                                    this.columns(
                                                        g[c].originalCellIndex
                                                    ).visible() &&
                                                    (j[d][g[c].textContent] =
                                                        f[d].cells[c].textContent);
                                        (a = JSON.stringify(j, b.replacer, b.space)),
                                            b.download &&
                                                (a = 'data:application/json;charset=utf-8,' + a);
                                    }
                                    return (
                                        b.download &&
                                            ((b.filename = b.filename || 'datatable_export'),
                                            (b.filename += '.' + b.type),
                                            (a = encodeURI(a)),
                                            ((i = document.createElement('a')).href = a),
                                            (i.download = b.filename),
                                            document.body.appendChild(i),
                                            i.click(),
                                            document.body.removeChild(i)),
                                        a
                                    );
                                }
                            }
                            return !1;
                        }
                        import(d) {
                            let b = !1;
                            if (!e(d)) return !1;
                            let a = { lineDelimiter: '\n', columnDelimiter: ',', ...d };
                            if (a.data.length || e(a.data)) {
                                if ('csv' === a.type) {
                                    b = { data: [] };
                                    let c = a.data.split(a.lineDelimiter);
                                    c.length &&
                                        (a.headings &&
                                            ((b.headings = c[0].split(a.columnDelimiter)),
                                            c.shift()),
                                        c.forEach((d, e) => {
                                            b.data[e] = [];
                                            let c = d.split(a.columnDelimiter);
                                            c.length &&
                                                c.forEach((a) => {
                                                    b.data[e].push(a);
                                                });
                                        }));
                                } else if ('json' === a.type) {
                                    let f = ((b) => {
                                        let a = !1;
                                        try {
                                            a = JSON.parse(b);
                                        } catch (c) {
                                            return !1;
                                        }
                                        return !(null === a || (!Array.isArray(a) && !e(a))) && a;
                                    })(a.data);
                                    f &&
                                        ((b = { headings: [], data: [] }),
                                        f.forEach((a, c) => {
                                            (b.data[c] = []),
                                                Object.entries(a).forEach(([a, d]) => {
                                                    b.headings.includes(a) || b.headings.push(a),
                                                        b.data[c].push(d);
                                                });
                                        }));
                                }
                                e(a.data) && (b = a.data), b && this.insert(b);
                            }
                            return !1;
                        }
                        print() {
                            let d = this.activeHeadings,
                                e = this.activeRows,
                                a = f('table'),
                                b = f('thead'),
                                g = f('tbody'),
                                h = f('tr');
                            d.forEach((a) => {
                                h.appendChild(f('th', { html: a.textContent }));
                            }),
                                b.appendChild(h),
                                e.forEach((a) => {
                                    let b = f('tr');
                                    Array.from(a.cells).forEach((a) => {
                                        b.appendChild(f('td', { html: a.textContent }));
                                    }),
                                        g.appendChild(b);
                                }),
                                a.appendChild(b),
                                a.appendChild(g);
                            let c = window.open();
                            c.document.body.appendChild(a), c.print();
                        }
                        setMessage(b) {
                            let a = 1;
                            this.hasRows
                                ? (a = this.data[0].cells.length)
                                : this.activeHeadings.length && (a = this.activeHeadings.length),
                                this.wrapper.classList.add('dataTablepty'),
                                this.label && (this.label.innerHTML = ''),
                                (this.totalPages = 0),
                                this.render('pager'),
                                this.clear(
                                    f('tr', {
                                        html: `<td class="dataTablespty" colspan="${a}">${b}</td>`
                                    })
                                );
                        }
                        columns(a) {
                            return new k(this, a);
                        }
                        rows(a) {
                            return new j(this, a);
                        }
                        on(a, b) {
                            (this.events = this.events || {}),
                                (this.events[a] = this.events[a] || []),
                                this.events[a].push(b);
                        }
                        off(a, b) {
                            (this.events = this.events || {}),
                                a in this.events != 0 &&
                                    this.events[a].splice(this.events[a].indexOf(b), 1);
                        }
                        emit(a) {
                            if (((this.events = this.events || {}), a in this.events != 0))
                                for (let b = 0; b < this.events[a].length; b++)
                                    this.events[a][b].apply(
                                        this,
                                        Array.prototype.slice.call(arguments, 1)
                                    );
                        }
                    }
                    a.DataTable = b;
                },
                { './date-cd1c23ce.js': 1 }
            ]
        },
        {},
        [2]
    )(2);
});
