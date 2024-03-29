/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */

/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

define("app/initialize", [ "require" ], function(require) {
    return function(config) {
        var root = this, OA = root.OA || {}, cfg = function() {
            return Object.freeze({
                base_api_url: "http://api.openaura.com/v1",
                stream_key: config.stream_key || "YOUR_STREAM_KEY",
                info_key: config.info_key || "YOUR_INFO_KEY",
                callback_url: config.callback_url || "YOUR_CALLBACK_URL",
                max_particles: config.max_particles || 100
            });
        };
        return OA.config = cfg;
    };
}), function(window, undefined) {
    var rootjQuery, readyList, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "2.0.3", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds
.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    }, completed = function() {
        document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            if (!selector) return this;
            if (typeof selector == "string") {
                selector
.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3 ? match = [ null, selector, null ] : match = rquickExpr.exec(selector);
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this;
                    }
                    return elem = document.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, this[0] = elem), this.context = document, this.selector = selector, this;
                }
                return !context || context.jquery ? (context || 
rootjQuery).find(selector) : this.constructor(context).find(selector);
            }
            return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? rootjQuery.ready(selector) : (selector.selector !== undefined && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret.context = this.context, ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            return jQuery
.ready.promise().done(fn), this;
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    }, jQuery.fn.init.prototype = jQuery.fn, jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || 
{}, i = 1, length = arguments.length, deep = !1;
        typeof target == "boolean" && (deep = target, target = arguments[1] || {}, i = 2), typeof target != "object" && !jQuery.isFunction(target) && (target = {}), length === i && (target = this, --i);
        for (; i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
            src = target[name], copy = options[name];
            if (target === copy) continue;
            deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : copy !== undefined && (target[name] = copy);
        }
        return target;
    }, jQuery.extend({
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        noConflict: function(deep) {
            return window.$ === jQuery && (window.$ = _$
), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(hold) {
            hold ? jQuery.readyWait++ : jQuery.ready(!0);
        },
        ready: function(wait) {
            if (wait === !0 ? --jQuery.readyWait : jQuery.isReady) return;
            jQuery.isReady = !0;
            if (wait !== !0 && --jQuery.readyWait > 0) return;
            readyList.resolveWith(document, [ jQuery ]), jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready");
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            return obj == null ? String(obj) : typeof obj == "object" || typeof 
obj == "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
        },
        isPlainObject: function(obj) {
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) return !1;
            try {
                if (obj.constructor && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) return !1;
            return !0;
        },
        error: function(msg) {
            throw new Error(msg);
        },
        parseHTML: function(data, context, keepScripts) {
            if (!data || typeof data != "string") return null;
            typeof context == "boolean" && (keepScripts = context, context = !1), context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            return parsed ? 
[ context.createElement(parsed[1]) ] : (parsed = jQuery.buildFragment([ data ], context, scripts), scripts && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data != "string") return null;
            try {
                tmp = new DOMParser, xml = tmp.parseFromString(data, "text/xml");
            } catch (e) {
                xml = undefined;
            }
            return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), xml;
        },
        noop: function() {},
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code));
        },
        
camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) if (isArray) for (; i < length; i++) {
                value = callback.apply(obj[i], args);
                if (value === !1) break;
            } else for (i in obj) {
                value = callback.apply(obj[i], args);
                if (value === !1) break;
            } else if (isArray) for (; i < length; i++) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === !1) break;
            } else for (i in obj) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === !1) break;
            }
            return obj
;
        },
        trim: function(text) {
            return text == null ? "" : core_trim.call(text);
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            return arr != null && (isArraylike(Object(arr)) ? jQuery.merge(ret, typeof arr == "string" ? [ arr ] : arr) : core_push.call(ret, arr)), ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : core_indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l == "number") for (; j < l; j++) first[i++] = second[j]; else while (second[j] !== undefined) first[i++] = second[j++];
            return first.length = i, first;
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            for (; i < length; i++) retVal = !!callback(elems[i], i), inv !== retVal && 
ret.push(elems[i]);
            return ret;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) for (; i < length; i++) value = callback(elems[i], i, arg), value != null && (ret[ret.length] = value); else for (i in elems) value = callback(elems[i], i, arg), value != null && (ret[ret.length] = value);
            return core_concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            return typeof context == "string" && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn) ? (args = core_slice.call(arguments, 2), proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : undefined;
        },
        access: function(elems, fn, key, value, chainable, emptyGet
, raw) {
            var i = 0, length = elems.length, bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = !0;
                for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw);
            } else if (value !== undefined) {
                chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
                    return bulk.call(jQuery(elem), value);
                }));
                if (fn) for (; i < length; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: Date.now,
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) old[name] = elem.style[name], elem.style[name] = options[name
];
            ret = callback.apply(elem, args || []);
            for (name in options) elem.style[name] = old[name];
            return ret;
        }
    }), jQuery.ready.promise = function(obj) {
        return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(obj);
    }, jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        return jQuery.isWindow(obj) ? !1 : obj.nodeType === 1 && length ? !0 : type === "array" || type !== "function" && (length === 0 || typeof length == "number" && length > 0 && length - 1 in obj);
    }
    rootjQuery = jQuery(document), function(window, undefined
) {
        var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -(new Date), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), hasDuplicate = !1, sortOrder = function(a, b) {
            return a === b ? (hasDuplicate = !0, 0) : 0;
        }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            var i = 0, len = this.length;
            for (; i < len; i++) if (this[i] === elem) return i;
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]"
, characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rsibling = new RegExp(whitespace + "*[+~]"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"
),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(
_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) ;
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            (context ? context.ownerDocument || 
context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [];
            if (!selector || typeof selector != "string") return results;
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) return [];
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) if (m = match[1]) {
                    if (nodeType === 9) {
                        elem = context.getElementById(m);
                        if (!elem || !elem.parentNode) return results;
                        if (elem.id === m) return results.push(elem), results;
                    } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results;
                } else {
                    if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                    if ((m = match[3]
) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results;
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando, newContext = context, newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length;
                        while (i--) groups[i] = nid + toSelector(groups[i]);
                        newContext = rsibling.test(selector) && context.parentNode || context, newSelector = groups.join(",");
                    }
                    if (newSelector) try {
                        return push.apply(results, newContext.querySelectorAll(newSelector
)), results;
                    } catch (qsaError) {} finally {
                        old || context.removeAttribute("id");
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                return keys.push(key += " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            return fn[expando] = !0, fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return !1;
            } finally {
                div.parentNode && div.parentNode.removeChild(div), div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = 
attrs.split("|"), i = attrs.length;
            while (i--) Expr.attrHandle[arr[i]] = handler;
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) return diff;
            if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(
argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
                });
            });
        }
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : !1;
        }, support = Sizzle.support = {}, setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.defaultView;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) return document;
            document = doc, docElem = doc.documentElement, documentIsHTML = !isXML(doc), parent && parent.attachEvent && parent !== parent.top && parent.attachEvent
("onbeforeunload", function() {
                setDocument();
            }), support.attributes = assert(function(div) {
                return div.className = "i", !div.getAttribute("className");
            }), support.getElementsByTagName = assert(function(div) {
                return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length;
            }), support.getElementsByClassName = assert(function(div) {
                return div.innerHTML = "<div class='a'></div><div class='a i'></div>", div.firstChild.className = "i", div.getElementsByClassName("i").length === 2;
            }), support.getById = assert(function(div) {
                return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
            }), support.getById ? (Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== strundefined && documentIsHTML) {
                    var m = context.getElementById
(id);
                    return m && m.parentNode ? [ m ] : [];
                }
            }, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId;
                };
            }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) return context.getElementsByTagName(tag);
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName
(tag);
                if (tag === "*") {
                    while (elem = results[i++]) elem.nodeType === 1 && tmp.push(elem);
                    return tmp;
                }
                return results;
            }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) return context.getElementsByClassName(className);
            }, rbuggyMatches = [], rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) assert(function(div) {
                div.innerHTML = "<select><option selected=''></option></select>", div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked");
            }), assert(function(div) {
                var input = doc.createElement("input");
                input.setAttribute("type", "hidden"
), div.appendChild(input).setAttribute("t", ""), div.querySelectorAll("[t^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
            });
            return (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
                support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos);
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                
return a === bup || !!bup && bup.nodeType === 1 && !!(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16);
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (compare) return compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || contains(preferredDoc, a) ? -1 : b === doc || contains(preferredDoc, b) ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0 : compare & 4 ? -1 : 1;
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var cur, i = 0, aup = a.parentNode, bup = 
b.parentNode, ap = [ a ], bp = [ b ];
                if (a === b) return hasDuplicate = !0, 0;
                if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                if (aup === bup) return siblingCheck(a, b);
                cur = a;
                while (cur = cur.parentNode) ap.unshift(cur);
                cur = b;
                while (cur = cur.parentNode) bp.unshift(cur);
                while (ap[i] === bp[i]) i++;
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            }, doc;
        }, Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        }, Sizzle.matchesSelector = function(elem, expr) {
            (elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && 
documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {}
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        }, Sizzle.contains = function(context, elem) {
            return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem);
        }, Sizzle.attr = function(elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val
.value : null : val;
        }, Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        }, Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) elem === results[i] && (j = duplicates.push(i));
                while (j--) results.splice(duplicates[j], 1);
            }
            return results;
        }, getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) for (; node = elem[i]; i++) ret += getText(node); else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent == "string") return elem.textContent;
                for (elem = elem.firstChild; elem; elem = 
elem.nextSibling) ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            return ret;
        }, Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
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
                ATTR: function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[4] || match[5] || "").replace(runescape, funescape), match[2] === "~=" && (match
[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                CHILD: function(match) {
                    return match[1] = match[1].toLowerCase(), match[1].slice(0, 3) === "nth" ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd")), match[5] = +(match[7] + match[8] || match[3] === "odd")) : match[3] && Sizzle.error(match[0]), match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[5] && match[2];
                    return matchExpr.CHILD.test(match[0]) ? null : (match[3] && match[4] !== undefined ? match[2] = match[4] : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                }
            },
            filter
: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return !0;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className == "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(
elem) {
                        var result = Sizzle.attr(elem, name);
                        return result == null ? operator === "!=" : operator ? (result += "", operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml
) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return !1;
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return !0;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {}), cache = 
outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
                                    outerCache[type] = [ dirruns, nodeIndex, diff ];
                                    break;
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1]; else while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                useCache && ((node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ]);
                                if (node === elem) break;
                            
}
                            return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [ pseudo, pseudo, "", argument ], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                        var idx, matched = fn(seed, argument), i = matched.length;
                        while (i--) idx = indexOf.call(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i]);
                    }) : function(elem) {
                        return fn(elem, 0, args);
                    }) : fn;
                }
            },
            pseudos: {
                not: markFunction(function(
selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, context, xml) {
                        return input[0] = elem, matcher(input, null, xml, results), !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text
) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || elemLang.indexOf(lang + "-") === 0; while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return !1;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: 
function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === !1;
                },
                disabled: function(elem) {
                    return elem.disabled === !0;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) return !1
;
                    return !0;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                
last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; --i >= 0; ) matchIndexes.push(i
);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; ++i < length; ) matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        }, Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) Expr.pseudos[i] = createInputPseudo(i);
        for (i in {
            submit: !0,
            reset: !0
        }) Expr.pseudos[i] = createButtonPseudo(i);
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters;
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "]
;
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector, groups = [], preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = []);
                matched = !1;
                if (match = rcombinators.exec(soFar)) matched = match.shift(), tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " ")
                }), soFar = soFar.slice(matched.length);
                for (type in Expr.filter) (match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match))) && (matched = match.shift(), tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                }), soFar = soFar.slice(matched.length));
                if (!matched) break;
            }
            return parseOnly ? 
soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (; i < len; i++) selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
            } : function(elem, context, xml) {
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                if (xml) {
                    while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) if (matcher(elem, context, xml)) return !0;
                } else while (elem = elem[dir]) if (elem.nodeType === 1 || 
checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                        if ((data = cache[1]) === !0 || data === cachedruns) return data === !0;
                    } else {
                        cache = outerCache[dir] = [ dirkey ], cache[1] = matcher(elem, context, xml) || cachedruns;
                        if (cache[1] === !0) return !0;
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) if (!matchers[i](elem, context, xml)) return !1;
                return !0;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            
for (; i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) newUnmatched.push(elem), mapped && map.push(i);
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                matcher && matcher(matcherIn, matcherOut, context, xml);
                
if (postFilter) {
                    temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length;
                    while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [], i = matcherOut.length;
                            while (i--) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) (elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem));
                    }
                } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, !0), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (; i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator
(elementMatcher(matchers), matcher) ]; else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                if (matcher[expando]) {
                    j = ++i;
                    for (; j < len; j++) if (Expr.relative[tokens[j].type]) break;
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(
seed, context, xml, results, expandContext) {
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                outermost && (outermostContext = context !== document && context, cachedruns = matcherCachedRuns);
                for (; (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) if (matcher(elem, context, xml)) {
                            results.push(elem);
                            break;
                        }
                        outermost && (dirruns = dirrunsUnique, cachedruns = ++matcherCachedRuns);
                    }
                    bySet && ((elem = !
matcher && elem) && matchedCount--, seed && unmatched.push(elem));
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        if (matchedCount > 0) while (i--) !unmatched[i] && !setMatched[i] && (setMatched[i] = pop.call(results));
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results);
                }
                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            
var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                group || (group = tokenize(selector)), i = group.length;
                while (i--) cached = matcherFromTokens(group[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (; i < len; i++) Sizzle(selector, contexts[i], results);
            return results;
        }
        function select(selector, context, results, seed) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed && match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0
]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                        tokens.splice(i, 1), selector = seed.length && toSelector(tokens);
                        if (!selector) return push.apply(results, seed), results;
                        break;
                    }
                
}
            }
            return compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector)), results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        }), assert(function(div) {
            return div.innerHTML = "<a href='#'></a>", div.firstChild.getAttribute("href") === "#";
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }), (!support.attributes || !assert(function(div) {
            return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), div.firstChild.getAttribute("value") === "";
        })) && addHandle("value", function(elem, name, isXML) {
            if (!
isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
        }), assert(function(div) {
            return div.getAttribute("disabled") == null;
        }) || addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === !0 ? name.toLowerCase() : null;
        }), jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
    }(window);
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        return jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = !0;
        }), object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options == "string" ? optionsCache
[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0;
            for (; list && firingIndex < firingLength; firingIndex++) if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) {
                memory = !1;
                break;
            }
            firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable());
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            type === "function" ? 
(!options.unique || !self.has(arg)) && list.push(arg) : arg && arg.length && type !== "string" && add(arg);
                        });
                    })(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory));
                }
                return this;
            },
            remove: function() {
                return list && jQuery.each(arguments, function(_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) list.splice(index, 1), firing && (index <= firingLength && firingLength--, index <= firingIndex && firingIndex--);
                }), this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!list && !!list.length;
            },
            empty: function() {
                return list = [], firingLength = 0, this;
            },
            disable: function() {
                return list = stack = memory = 
undefined, this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                return stack = undefined, memory || self.disable(), this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                return list && (!fired || stack) && (args = args || [], args = [ context, args.slice ? args.slice() : args ], firing ? stack.push(args) : fire(args)), this;
            },
            fire: function() {
                return self.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress"
, jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    return deferred.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                            
});
                        }), fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add, stateString && list.add(function() {
                    state = stateString;
                }, tuples[i ^ 1][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
                }, deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = core_slice
.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this, values[i] = arguments.length > 1 ? core_slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values);
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length);
                for (; i < length; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts
, progressValues)) : --remaining;
            }
            return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
        }
    }), jQuery.support = function(support) {
        var input = document.createElement("input"), fragment = document.createDocumentFragment(), div = document.createElement("div"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        return input.type ? (input.type = "checkbox", support.checkOn = input.value !== "", support.optSelected = opt.selected, support.reliableMarginRight = !0, support.boxSizingReliable = !0, support.pixelPosition = !1, input.checked = !0, support.noCloneChecked = input.cloneNode(!0).checked, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = input.value === "t", input.setAttribute("checked", "t"), input.setAttribute("name", "t"), fragment
.appendChild(input), support.checkClone = fragment.cloneNode(!0).cloneNode(!0).lastChild.checked, support.focusinBubbles = "onfocusin" in window, div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = div.style.backgroundClip === "content-box", jQuery(function() {
            var container, marginDiv, divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", body = document.getElementsByTagName("body")[0];
            if (!body) return;
            container = document.createElement("div"), container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", body.appendChild(container).appendChild(div), div.innerHTML = "", div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", jQuery
.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = div.offsetWidth === 4;
            }), window.getComputedStyle && (support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%", support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                width: "4px"
            }).width === "4px", marginDiv = div.appendChild(document.createElement("div")), marginDiv.style.cssText = div.style.cssText = divReset, marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)), body.removeChild(container);
        }), support) : support;
    }({});
    var data_user, data_priv, rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                
return {};
            }
        }), this.expando = jQuery.expando + Math.random();
    }
    Data.uid = 1, Data.accepts = function(owner) {
        return owner.nodeType ? owner.nodeType === 1 || owner.nodeType === 9 : !0;
    }, Data.prototype = {
        key: function(owner) {
            if (!Data.accepts(owner)) return 0;
            var descriptor = {}, unlock = owner[this.expando];
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    }, Object.defineProperties(owner, descriptor);
                } catch (e) {
                    descriptor[this.expando] = unlock, jQuery.extend(owner, descriptor);
                }
            }
            return this.cache[unlock] || (this.cache[unlock] = {}), unlock;
        },
        set: function(owner, data, value) {
            var prop, unlock = this.key(owner), cache = this.cache[unlock];
            
if (typeof data == "string") cache[data] = value; else if (jQuery.isEmptyObject(cache)) jQuery.extend(this.cache[unlock], data); else for (prop in data) cache[prop] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            var cache = this.cache[this.key(owner)];
            return key === undefined ? cache : cache[key];
        },
        access: function(owner, key, value) {
            var stored;
            return key === undefined || key && typeof key == "string" && value === undefined ? (stored = this.get(owner, key), stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key))) : (this.set(owner, key, value), value !== undefined ? value : key);
        },
        remove: function(owner, key) {
            var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
            if (key === undefined) this.cache[unlock] = {}; else {
                jQuery.isArray(key) ? name = key.concat(key.map(jQuery.camelCase)) : (
camel = jQuery.camelCase(key), key in cache ? name = [ key, camel ] : (name = camel, name = name in cache ? [ name ] : name.match(core_rnotwhite) || [])), i = name.length;
                while (i--) delete cache[name[i]];
            }
        },
        hasData: function(owner) {
            return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
        },
        discard: function(owner) {
            owner[this.expando] && delete this.cache[owner[this.expando]];
        }
    }, data_user = new Data, data_priv = new Data, jQuery.extend({
        acceptData: Data.accepts,
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        data: function(elem, name, data) {
            return data_user.access(elem, name, data);
        },
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return data_priv.access(elem
, name, data);
        },
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, elem = this[0], i = 0, data = null;
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);
                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        attrs = elem.attributes;
                        for (; i < attrs.length; i++) name = attrs[i].name, name.indexOf("data-") === 0 && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name]));
                        data_priv.set(elem, "hasDataAttrs", !0);
                    }
                }
                return data;
            }
            return typeof key == "object" ? this.each(function() {
                data_user.set(this, key);
            }) : jQuery.access(this, function(value) {
                
var data, camelKey = jQuery.camelCase(key);
                if (elem && value === undefined) {
                    data = data_user.get(elem, key);
                    if (data !== undefined) return data;
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) return data;
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) return data;
                    return;
                }
                this.each(function() {
                    var data = data_user.get(this, camelKey);
                    data_user.set(this, camelKey, value), key.indexOf("-") !== -1 && data !== undefined && data_user.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, !0);
        },
        removeData: function(key) {
            return this.each(function() {
                data_user.remove(this, key);
            });
        }
    });
    function dataAttr(elem
, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), data = elem.getAttribute(name);
            if (typeof data == "string") {
                try {
                    data = data === "true" ? !0 : data === "false" ? !1 : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? JSON.parse(data) : data;
                } catch (e) {}
                data_user.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) return type = (type || "fx") + "queue", queue = data_priv.get(elem, type), data && (!queue || jQuery.isArray(data) ? queue = data_priv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || [];
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            
var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            fn === "inprogress" && (fn = queue.shift(), startLength--), fn && (type === "fx" && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire();
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return typeof type != "string" && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue
(this[0], type) : data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), type === "fx" && queue[0] !== "inprogress" && jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        delay: function(time, type) {
            return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = 
this.length, resolve = function() {
                --count || defer.resolveWith(elements, [ elements ]);
            };
            typeof type != "string" && (obj = type, type = undefined), type = type || "fx";
            while (i--) tmp = data_priv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj);
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp
: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value == "string" && value;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, this.className));
            });
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (; i < len; i++) {
                    elem = this[i], cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                        elem.className = jQuery.trim(cur);
                    }
                
}
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value == "string" && value;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, this.className));
            });
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (; i < len; i++) {
                    elem = this[i], cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) while (cur.indexOf(" " + clazz + " ") >= 0) cur = cur.replace(" " + clazz + " ", " ");
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            
}
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            return typeof stateVal == "boolean" && type === "string" ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
            }) : this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                } else if (type === core_strundefined || type === "boolean") this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || value === !1 ? "" : data_priv.get(this, "__className__") || "";
            });
        
},
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (; i < l; i++) if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
            return !1;
        },
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined ? ret : (ret = elem.value, typeof ret == "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret);
                return;
            }
            return isFunction = jQuery.isFunction(value), this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                isFunction ? val = value.call(this, i, jQuery(this).val()) : val = value
, val == null ? val = "" : typeof val == "number" ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = elem.attributes.value;
                    return !val || val.specified ? elem.value : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    
for (; i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) return value;
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) optionSet = !0;
                    }
                    return optionSet || (elem.selectedIndex = -1
), values;
                }
            }
        },
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) return;
            if (typeof elem.getAttribute === core_strundefined) return jQuery.prop(elem, name, value);
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            if (value === undefined) return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : (ret = jQuery.find.attr(elem, name), ret == null ? undefined : ret);
            if (value !== null) return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem.setAttribute(name, value + ""), value);
            jQuery.removeAttr(elem, name);
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = 
value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name);
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) return;
            return notxml = nType !== 1 || !jQuery.isXMLDoc(elem), 
notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), value !== undefined ? hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value : hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = function(elem, name, isXML) {
            var fn = jQuery.expr.attrHandle
[name], ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            return jQuery.expr.attrHandle[name] = fn, ret;
        };
    }), jQuery.support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
        }
    }), jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    }), jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
            }
        }, jQuery.support.checkOn || (jQuery.valHooks[this].get = function(
elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        });
    });
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return !0;
    }
    function returnFalse() {
        return !1;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);
            if (!elemData) return;
            handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.
events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                return typeof jQuery === core_strundefined || !!e && jQuery.event.triggered === e.type ? undefined : jQuery.event.dispatch.apply(eventHandle.elem, arguments);
            }, eventHandle.elem = elem), types = (types || "").match(core_rnotwhite) || [ "" ], t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort();
                if (!type) continue;
                special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector
,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === !1) && elem.addEventListener && elem.addEventListener(type, eventHandle, !1)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0;
            }
            elem = null;
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (!elemData || !(events = elemData
.events)) return;
            types = (types || "").match(core_rnotwhite) || [ "" ], t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                    continue;
                }
                special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length;
                while (j--) handleObj = handlers[j], (mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj
.selector) && (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                origCount && !handlers.length && ((!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) && jQuery.removeEvent(elem, type, elemData.handle), delete events[type]);
            }
            jQuery.isEmptyObject(events) && (delete elemData.handle, data_priv.remove(elem, "events"));
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            type.indexOf
(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event == "object" && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = undefined, event.target || (event.target = elem), data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]), special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === !1) return;
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode);
                for (; cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                
tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === !1 && event.preventDefault();
            return event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && jQuery.acceptData(elem) && ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = undefined, tmp && (elem[ontype] = tmp)), event.result;
        },
        dispatch
: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = core_slice.call(arguments), handlers = (data_priv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event, event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === !1) return;
            handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem, j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, 
args), ret !== undefined && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation());
            }
            return special.postDispatch && special.postDispatch.call(this, event), event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) for (; cur !== this; cur = cur.parentNode || this) if (cur.disabled !== !0 || event.type !== "click") {
                matches = [];
                for (i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", matches[sel] === undefined && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length), matches[sel] && matches.push(handleObj);
                matches.length && handlerQueue.push({
                    
elem: cur,
                    handlers: matches
                });
            }
            return delegateCount < handlers.length && handlerQueue.push({
                elem: this,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                return event.which == null && (event.which = original.charCode != null ? original.charCode : original.keyCode), event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                
return event.pageX == null && original.clientX != null && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.which && button !== undefined && (event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0), event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) return event;
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new 
jQuery.Event(originalEvent), i = copy.length;
            while (i--) prop = copy[i], event[prop] = originalEvent[prop];
            return event.target || (event.target = document), event.target.nodeType === 3 && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName
(this, "input")) return this.click(), !1;
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    event.result !== undefined && (event.originalEvent.returnValue = event.result);
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: !0,
                originalEvent: {}
            });
            bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault();
        }
    }, jQuery.removeEvent = function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle, !1);
    }, jQuery.Event = function(src, props) {
        if (!
(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), this[jQuery.expando] = !0;
    }, jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            
this.isImmediatePropagationStopped = returnTrue, this.stopPropagation();
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix;
                return ret;
            }
        };
    }), jQuery.support.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        var attaches = 0, handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0);
        };
        jQuery.event.special[fix] = {
            
setup: function() {
                attaches++ === 0 && document.addEventListener(orig, handler, !0);
            },
            teardown: function() {
                --attaches === 0 && document.removeEventListener(orig, handler, !0);
            }
        };
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types == "object") {
                typeof selector != "string" && (data = data || selector, selector = undefined);
                for (type in types) this.on(type, selector, data, types[type], one);
                return this;
            }
            data == null && fn == null ? (fn = selector, data = selector = undefined) : fn == null && (typeof selector == "string" ? (fn = data, data = undefined) : (fn = data, data = selector, selector = undefined));
            if (fn === !1) fn = returnFalse; else if (!fn) return this;
            return one === 1 && (origFn = fn, fn = function(event) {
                
return jQuery().off(event), origFn.apply(this, arguments);
            }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
            if (typeof types == "object") {
                for (type in types) this.off(type, selector, types[type]);
                return this;
            }
            if (selector === !1 || typeof selector == "function") fn = selector, selector = undefined;
            return fn === !1 && 
(fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, !0);
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [], self = this, len = self.length;
            if (typeof selector != "string") return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) if (jQuery.contains(self[i
], this)) return !0;
            }));
            for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
            return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
        },
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (; i < l; i++) if (jQuery.contains(this, targets[i])) return !0;
            });
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0));
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector == "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
        },
        closest: function(
selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors != "string" ? jQuery(selectors, context || this.context) : 0;
            for (; i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                cur = matched.push(cur);
                break;
            }
            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },
        index: function(elem) {
            return elem ? typeof elem == "string" ? core_indexOf.call(jQuery(elem), this[0]) : core_indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(selector, context) {
            var set = typeof selector == "string" ? jQuery(selector, context) : jQuery.makeArray(
selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) ;
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        
},
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return name.slice(-5) !== "Until" && (selector = until), selector && typeof 
selector == "string" && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.unique(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched);
        };
    }), jQuery.extend({
        filter: function(expr, elems, not) {
            var elem = elems[0];
            return not && (expr = ":not(" + expr + ")"), elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        },
        dir: function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) break;
                matched.push(elem);
            }
            return matched;
        },
        sibling: function(n, elem) {
            
var matched = [];
            for (; n; n = n.nextSibling) n.nodeType === 1 && n !== elem && matched.push(n);
            return matched;
        }
    });
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        if (typeof qualifier == "string") {
            if (isSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return core_indexOf.call(qualifier, elem) >= 0 !== not;
        });
    }
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i
, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value
));
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return this.
domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (; (elem = elems[i]) != null; i++) !keepData && elem.nodeType === 1 && jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) elem.nodeType === 1 && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = dataAndEvents == null ? !1 : dataAndEvents, deepDataAndEvents = deepDataAndEvents == null ? 
dataAndEvents : deepDataAndEvents, this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                if (typeof value == "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; i < l; i++) elem = this[i] || {}, elem.nodeType === 1 && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                        elem = 0;
                    } catch (e) {}
                }
                elem && this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith
: function() {
            var args = jQuery.map(this, function(elem) {
                return [ elem.nextSibling, elem.parentNode ];
            }), i = 0;
            return this.domManip(arguments, function(elem) {
                var next = args[i++], parent = args[i++];
                parent && (next && next.parentNode !== parent && (next = this.nextSibling), jQuery(this).remove(), parent.insertBefore(elem, next));
            }, !0), i ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, !0);
        },
        domManip: function(args, callback, allowIntersection) {
            args = core_concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || typeof value != "string" || jQuery.support.checkClone || !rchecked.test(value))) return this.each
(function(index) {
                var self = set.eq(index);
                isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback, allowIntersection);
            });
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, !allowIntersection && this), first = fragment.firstChild, fragment.childNodes.length === 1 && (fragment = first);
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length;
                    for (; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) node = scripts[i], rscriptType
.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl(node.src) : jQuery.globalEval(node.textContent.replace(rcleanScript, "")));
                    }
                }
            }
            return this;
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), core_push.apply(ret, elems.get());
            return this.pushStack(ret);
        };
    }), jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode
(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!jQuery.support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone), srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
            }
            if (dataAndEvents) if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
            } else cloneCopyEvent(elem, clone);
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var elem, tmp, tag, wrap, contains, j, i = 0, l = elems
.length, fragment = context.createDocumentFragment(), nodes = [];
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) if (jQuery.type(elem) === "object") jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                    tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0];
                    while (j--) tmp = tmp.lastChild;
                    jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
                }
            }
            fragment.textContent = "", i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) continue;
                contains = jQuery
.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp);
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) rscriptType.test(elem.type || "") && scripts.push(elem);
                }
            }
            return fragment;
        },
        cleanData: function(elems) {
            var data, elem, events, type, key, j, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== undefined; i++) {
                if (Data.accepts(elem)) {
                    key = elem[data_priv.expando];
                    if (key && (data = data_priv.cache[key])) {
                        events = Object.keys(data.events || {});
                        if (events.length) for (j = 0; (type = events[j]) !== undefined; j++) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        data_priv.cache[key] && delete 
data_priv.cache[key];
                    }
                }
                delete data_user.cache[elem[data_user.expando]];
            }
        },
        _evalUrl: function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    });
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        return elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type, elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute
("type"), elem;
    }
    function setGlobalEval(elems, refElements) {
        var l = elems.length, i = 0;
        for (; i < l; i++) data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        if (data_priv.hasData(src)) {
            pdataOld = data_priv.access(src), pdataCur = data_priv.set(dest, pdataOld), events = pdataOld.events;
            if (events) {
                delete pdataCur.handle, pdataCur.events = {};
                for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
            }
        }
        data_user.hasData(src) && (udataOld = data_user.access(src), udataCur = jQuery.extend({}, udataOld), data_user.set(dest, udataCur));
    }
    function getAll(context, tag) {
        var ret = context.
getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) dest.checked = src.checked; else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapAll(html.call(this, i));
            }) : (this[0] && (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) elem = 
elem.firstElementChild;
                return elem;
            }).append(this)), this);
        },
        wrapInner: function(html) {
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            }) : this.each(function() {
                var self = jQuery(this), contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html);
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var curCSS, iframe, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/
, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) return name;
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) return name;
        }
        return origName;
    }
    function isHidden(elem, el) {
        return elem = el || elem, jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, 
elem);
    }
    function getStyles(elem) {
        return window.getComputedStyle(elem, null);
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) continue;
            values[index] = data_priv.get(elem, "olddisplay"), display = elem.style.display, show ? (!values[index] && display === "none" && (elem.style.display = ""), elem.style.display === "" && isHidden(elem) && (values[index] = data_priv.access(elem, "olddisplay", css_defaultDisplay(elem.nodeName)))) : values[index] || (hidden = isHidden(elem), (display && display !== "none" || !hidden) && data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display")));
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) continue;
            if (!show || elem.style.display === "none" || 
elem.style.display === "") elem.style.display = show ? values[index] || "" : "none";
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem), len = name.length;
                    for (; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, !0);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            return typeof state == "boolean" ? state ? this.show() : this.hide() : this.each(
function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
            });
        }
    }), jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            var ret, type, hooks, origName = jQuery.camelCase
(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value === undefined) return hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== undefined ? ret : style[name];
            type = typeof value, type === "string" && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number");
            if (value == null || type === "number" && isNaN(value)) return;
            type === "number" && !jQuery.cssNumber[origName] && (value += "px"), !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 && (style[name] = "inherit");
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) style[name] = value;
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, 
origName = jQuery.camelCase(name);
            return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), val === undefined && (val = curCSS(elem, name, styles)), val === "normal" && name in cssNormalTransform && (val = cssNormalTransform[name]), extra === "" || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val;
        }
    }), curCSS = function(elem, name, _computed) {
        var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
        return computed && (ret === "" && !jQuery.contains(elem.ownerDocument, elem) && (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = 
style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), ret;
    };
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (; i < 4; i += 2) extra === "margin" && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? (extra === "content" && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), extra !== "margin" && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), extra !== "padding" && (val += jQuery.css(elem, "border" + 
cssExpand[i] + "Width", !0, styles)));
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = !0, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", !1, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) val = elem.style[name];
            if (rnumnonpx.test(val)) return val;
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]), val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function css_defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName
, doc);
            if (display === "none" || !display) iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write("<!doctype html><html><body>"), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach();
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        return elem.remove(), display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                    return getWidthOrHeight
(elem, name, extra);
                }) : getWidthOrHeight(elem, name, extra);
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", !1, styles) === "border-box", styles) : 0);
            }
        };
    }), jQuery(function() {
        jQuery.support.reliableMarginRight || (jQuery.cssHooks.marginRight = {
            get: function(elem, computed) {
                if (computed) return jQuery.swap(elem, {
                    display: "inline-block"
                }, curCSS, [ elem, "marginRight" ]);
            }
        }), !jQuery.support.pixelPosition && jQuery.fn.position && jQuery.each([ "top", "left" ], function(i, prop) {
            jQuery.cssHooks[prop] = {
                get: function(elem, computed) {
                    if (computed) return computed = 
curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                }
            };
        });
    }), jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    }, jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value == "string" ? value.split(" ") : [ value ];
                for (; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
    });
    var r20 = /%20/g, 
rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        
value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    }), jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        traditional === undefined && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value);
        }); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) jQuery.each
(obj, function(i, v) {
            traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + (typeof v == "object" ? i : "") + "]", v, traditional, add);
        }); else if (!traditional && jQuery.type(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
    }
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data
, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = 
ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            typeof dataTypeExpression != "string" && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) while (dataType = dataTypes[i++]) dataType[0] === "+" ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(
_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport == "string" && !seekingTransport && !inspected[dataTypeOrTransport]) return options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1;
                if (seekingTransport) return !(selected = dataTypeOrTransport);
            }), selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) src[key] !== undefined && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target;
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url != "string" && _load) return _load.apply(this, arguments);
        var selector, type, response
, self = this, off = url.indexOf(" ");
        return off >= 0 && (selector = url.slice(off), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = undefined) : params && typeof params == "object" && (type = "POST"), self.length > 0 && jQuery.ajax({
            url: url,
            type: type,
            dataType: "html",
            data: params
        }).done(function(responseText) {
            response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).complete(callback && function(jqXHR, status) {
            self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
        }), this;
    }, jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    }), jQuery.extend({
        active: 0,
        lastModified: 
{},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml"
: jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            typeof url == "object" && (options = url, url = undefined), options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = 
s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase()] = match[2];
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    return state || (name = requestHeadersNames
[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this;
                },
                overrideMimeType: function(type) {
                    return state || (s.mimeType = type), this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) if (state < 2) for (code in map) statusCode[code] = [ statusCode[code], map[code] ]; else jqXHR.always(map[jqXHR.status]);
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    return transport && transport.abort(finalText), done(0, finalText), this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || 
options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ], s.crossDomain == null && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || (parts[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), s.data && s.processData && typeof s.data != "string" && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) return jqXHR;
            fireGlobals = s.global, fireGlobals && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(
rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
            if (!s.beforeSend || s.beforeSend.call(callbackContext, jqXHR, s) !== !1 && state !== 2) {
                strAbort = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) jqXHR[i
](s[i]);
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) done(-1, "No Transport"); else {
                    jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [ jqXHR, s ]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout));
                    try {
                        state = 1, transport.send(requestHeaders, done);
                    } catch (e) {
                        if (!(state < 2)) throw e;
                        done(-1, e);
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) return;
                    state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = undefined
, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || status === 304, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), status === 204 || s.type === "HEAD" ? statusText = "nocontent" : status === 304 ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error); else {
                        error = statusText;
                        if (status || !statusText) statusText = "error", status < 0 && (status = 0);
                    }
                    jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + ""
, isSuccess ? deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]) : deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]), jqXHR.statusCode(statusCode), statusCode = undefined, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]), completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]), --jQuery.active || jQuery.event.trigger("ajaxStop"));
                }
                return jqXHR;
            }
            return jqXHR.abort();
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    }), jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) 
{
            return jQuery.isFunction(data) && (type = type || callback, callback = data, data = undefined), jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") dataTypes.shift(), ct === undefined && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
        if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
        }
        if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    
break;
                }
                firstDataType || (firstDataType = type);
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        while (current) {
            s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift();
            if (current) if (current === "*") current = prev; else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current
] || converters["* " + current];
                if (!conv) for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                        conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                        if (conv) {
                            conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                            break;
                        }
                    }
                }
                if (conv !== !0) if (conv && s["throws"]) response = conv(response); else try {
                    response = conv(response);
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                }
            }
        }
        return {
            state: "success",
            
data: response
        };
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text;
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        s.cache === undefined && (s.cache = !1), s.crossDomain && (s.type = "GET");
    }), jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        async: !0,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script
.remove(), callback = null, evt && complete(evt.type === "error" ? 404 : 200, evt.type);
                    }), document.head.appendChild(script[0]);
                },
                abort: function() {
                    callback && callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            return this[callback] = !0, callback;
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data == "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") return callbackName = s.jsonpCallback = 
jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            responseContainer = arguments;
        }, jqXHR.always(function() {
            window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = undefined;
        }), "script";
    }), jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest;
        
} catch (e) {}
    };
    var xhrSupported = jQuery.ajaxSettings.xhr(), xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrId = 0, xhrCallbacks = {};
    window.ActiveXObject && jQuery(window).on("unload", function() {
        for (var key in xhrCallbacks) xhrCallbacks[key]();
        xhrCallbacks = undefined;
    }), jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported, jQuery.support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
        var callback;
        if (jQuery.support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, id, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType
), !options.crossDomain && !headers["X-Requested-With"] && (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers) xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                    return function() {
                        callback && (delete xhrCallbacks[id], callback = xhr.onload = xhr.onerror = null, type === "abort" ? xhr.abort() : type === "error" ? complete(xhr.status || 404, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText == "string" ? {
                            text: xhr.responseText
                        } : undefined, xhr.getAllResponseHeaders()));
                    };
                }, xhr.onload = callback(), xhr.onerror = callback("error"), callback = xhrCallbacks[id = xhrId++] = callback("abort"), xhr.send(options.hasContent && options.data || null);
            },
            abort: function() {
                callback && callback();
            
}
        };
    });
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3], parts = parts || [], start = +target || 1;
                do scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit); while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            return parts && (start = tween.start = +start || +target || 0, tween.unit = 
unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween;
        } ]
    };
    function createFxNow() {
        return setTimeout(function() {
            fxNow = undefined;
        }), fxNow = jQuery.now();
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) return !1;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp
, index = 0, length = animation.tweens.length;
            for (; index < length; index++) animation.tweens[index].run(percent);
            return deferred.notifyWith(elem, [ animation, percent, remaining ]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [ animation ]), !1);
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(!0, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                return animation.tweens.push(tween), tween;
            },
            stop: function(gotoEnd) {
                
var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = !0;
                for (; index < length; index++) animation.tweens[index].run(1);
                return gotoEnd ? deferred.resolveWith(elem, [ animation, gotoEnd ]) : deferred.rejectWith(elem, [ animation, gotoEnd ]), this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) return result;
        }
        return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts
.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value), delete props[name];
                for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing);
            } else specialEasing[name] = easing;
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            jQuery.isFunction(props) ? (callback = props, props = [ "*" ]) : props = props.split(" ");
            var prop, 
index = 0, length = props.length;
            for (; index < length; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback);
        },
        prefilter: function(callback, prepend) {
            prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback);
        }
    });
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
        opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), hooks.unqueued == null && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            hooks.unqueued || oldfire();
        }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
                hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
            });
        })
), elem.nodeType === 1 && ("height" in props || "width" in props) && (opts.overflow = [ style.overflow, style.overflowX, style.overflowY ], jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none" && (style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function() {
            style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2];
        }));
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop], toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value !== "show" || !dataShow || dataShow[prop] === undefined) continue;
                    hidden = !0;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            
dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = data_priv.access(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
                jQuery(elem).hide();
            }), anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
            });
            for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = prop === "width" || prop === "height" ? 1 : 0));
        }
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = 
elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: 
function(tween) {
                var result;
                return tween.elem[tween.prop] == null || !!tween.elem.style && tween.elem.style[tween.prop] != null ? (result = jQuery.css(tween.elem, tween.prop, ""), !result || result === "auto" ? 0 : result) : tween.elem[tween.prop];
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now;
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
        }
    }, jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing
, callback) {
            return speed == null || typeof speed == "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
        };
    }), jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                (empty || data_priv.get(this, "finish")) && anim.stop(!0);
            };
            return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = 
function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop, stop(gotoEnd);
            };
            return typeof type != "string" && (gotoEnd = clearQueue, clearQueue = type, type = undefined), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                var dequeue = !0, index = type != null && type + "queueHooks", timers = jQuery.timers, data = data_priv.get(this);
                if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                for (index = timers.length; index--; ) timers[index].elem === this && (type == null || timers[index].queue === type) && (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                (dequeue || !gotoEnd) && jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            return type !== !1 && 
(type = type || "fx"), this.each(function() {
                var index, data = data_priv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0);
                for (index = timers.length; index--; ) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                delete data.finish;
            });
        }
    });
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
        
return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed == "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration == "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? 
jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === !0) opt.queue = "fx";
        return opt.old = opt.complete, opt.complete = function() {
            jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
        }, opt;
    }, jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    }, jQuery.timers = [], jQuery.fx = Tween.prototype.init, jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers, i = 0;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) timer = timers[i], !timer() && timers[i] === timer && timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = undefined;
    }, jQuery.fx.timer = function(timer) {
        timer() && jQuery.timers.push(timer) && jQuery.fx.start();
    }, jQuery.fx.interval = 13, jQuery.fx.start = 
function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval));
    }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null;
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fx.step = {}, jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    }), jQuery.fn.offset = function(options) {
        if (arguments.length) return options === undefined ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, options, i);
        });
        var docElem, win, elem = this[0], box = {
            top: 0,
            left: 0
        }, doc = elem && elem.ownerDocument;
        if (!doc) return;
        return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (typeof elem.getBoundingClientRect !== core_strundefined && (
box = elem.getBoundingClientRect()), win = getWindow(doc), {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        }) : box;
    }, jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            position === "static" && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem
, i, curOffset)), options.top != null && (props.top = options.top - curOffset.top + curTop), options.left != null && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props);
        }
    }, jQuery.fn.extend({
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            return jQuery.css(elem, "position") === "fixed" ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                left: offset.left - 
parentOffset.left - jQuery.css(elem, "marginLeft", !0)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
                return offsetParent || docElem;
            });
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) return win ? win[prop] : elem[method];
                win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : elem[method] = val;
            
}, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin != "boolean"), extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : elem.nodeType === 9 ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body
["offset" + name], doc["offset" + name], doc["client" + name])) : value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    }), jQuery.fn.size = function() {
        return this.length;
    }, jQuery.fn.andSelf = jQuery.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = jQuery : typeof define == "function" && define.amd && define("jquery", [], function() {
        return jQuery;
    }), typeof window == "object" && typeof window.document == "object" && (window.jQuery = window.$ = jQuery);
}(window), function() {
    var root = this, previousUnderscore = root._, breaker = {}, ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype, push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto
.hasOwnProperty, nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind, _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = _), exports._ = _) : root._ = _, _.VERSION = "1.5.2";
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context); else if (obj.length === +obj.length) {
            for (var i = 0
, length = obj.length; i < length; i++) if (iterator.call(context, obj[i], i, obj) === breaker) return;
        } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        }
    };
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        return obj == null ? results : nativeMap && obj.map === nativeMap ? obj.map(iterator, context) : (each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        }), results);
    };
    var reduceError = "Reduce of empty array with no initial value";
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        obj == null && (obj = []);
        if (nativeReduce && obj.reduce === nativeReduce) return context && (iterator = _.bind(iterator, context)), initial ? obj
.reduce(iterator, memo) : obj.reduce(iterator);
        each(obj, function(value, index, list) {
            initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value, initial = !0);
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    }, _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        obj == null && (obj = []);
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) return context && (iterator = _.bind(iterator, context)), initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length, initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index], initial = !0
);
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    }, _.find = _.detect = function(obj, iterator, context) {
        var result;
        return any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) return result = value, !0;
        }), result;
    }, _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        return obj == null ? results : nativeFilter && obj.filter === nativeFilter ? obj.filter(iterator, context) : (each(obj, function(value, index, list) {
            iterator.call(context, value, index, list) && results.push(value);
        }), results);
    }, _.reject = function(obj, iterator, context) {
        return _.filter(obj, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    }, _.every = _.all = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = !0
;
        return obj == null ? result : nativeEvery && obj.every === nativeEvery ? obj.every(iterator, context) : (each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        }), !!result);
    };
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = !1;
        return obj == null ? result : nativeSome && obj.some === nativeSome ? obj.some(iterator, context) : (each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        }), !!result);
    };
    _.contains = _.include = function(obj, target) {
        return obj == null ? !1 : nativeIndexOf && obj.indexOf === nativeIndexOf ? obj.indexOf(target) != -1 : any(obj, function(value) {
            return value === target;
        });
    }, _.invoke = function(obj, method) {
        var args = slice
.call(arguments, 2), isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    }, _.pluck = function(obj, key) {
        return _.map(obj, function(value) {
            return value[key];
        });
    }, _.where = function(obj, attrs, first) {
        return _.isEmpty(attrs) ? first ? void 0 : [] : _[first ? "find" : "filter"](obj, function(value) {
            for (var key in attrs) if (attrs[key] !== value[key]) return !1;
            return !0;
        });
    }, _.findWhere = function(obj, attrs) {
        return _.where(obj, attrs, !0);
    }, _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.max.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {
            computed: -Infinity,
            value: -Infinity
        };
        return each(
obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > result.computed && (result = {
                value: value,
                computed: computed
            });
        }), result.value;
    }, _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.min.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {
            computed: Infinity,
            value: Infinity
        };
        return each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {
                value: value,
                computed: computed
            });
        }), result.value;
    }, _.shuffle = function(obj) {
        var rand, index = 0, shuffled = [];
        
return each(obj, function(value) {
            rand = _.random(index++), shuffled[index - 1] = shuffled[rand], shuffled[rand] = value;
        }), shuffled;
    }, _.sample = function(obj, n, guard) {
        return arguments.length < 2 || guard ? obj[_.random(obj.length - 1)] : _.shuffle(obj).slice(0, Math.max(0, n));
    };
    var lookupIterator = function(value) {
        return _.isFunction(value) ? value : function(obj) {
            return obj[value];
        };
    };
    _.sortBy = function(obj, value, context) {
        var iterator = lookupIterator(value);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria, b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < 
b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), "value");
    };
    var group = function(behavior) {
        return function(obj, value, context) {
            var result = {}, iterator = value == null ? _.identity : lookupIterator(value);
            return each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            }), result;
        };
    };
    _.groupBy = group(function(result, key, value) {
        (_.has(result, key) ? result[key] : result[key] = []).push(value);
    }), _.indexBy = group(function(result, key, value) {
        result[key] = value;
    }), _.countBy = group(function(result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    }), _.sortedIndex = function(array, obj, iterator, context) {
        iterator = iterator == null ? _.identity : lookupIterator(iterator);
        var value = iterator
.call(context, obj), low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    }, _.toArray = function(obj) {
        return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : [];
    }, _.size = function(obj) {
        return obj == null ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length;
    }, _.first = _.head = _.take = function(array, n, guard) {
        return array == null ? void 0 : n == null || guard ? array[0] : slice.call(array, 0, n);
    }, _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
    }, _.last = function(array, n, guard) {
        return array == null ? void 0 : n == null || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0));
    
}, _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    }, _.compact = function(array) {
        return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, output) {
        return shallow && _.every(input, _.isArray) ? concat.apply(output, input) : (each(input, function(value) {
            _.isArray(value) || _.isArguments(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, output) : output.push(value);
        }), output);
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    }, _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    }, _.uniq = _.unique = function(array, isSorted, iterator, context) {
        _.isFunction(isSorted) && (context = iterator, iterator = isSorted, isSorted = !1);
        var initial = iterator ? _.map(array, iterator, context) : array, results = [], seen = [];
        
return each(initial, function(value, index) {
            if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) seen.push(value), results.push(array[index]);
        }), results;
    }, _.union = function() {
        return _.uniq(_.flatten(arguments, !0));
    }, _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    }, _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    }, _.zip = function() {
        var length = _.max(_.pluck(arguments, "length").concat(0)), results = new Array(length);
        for (var i = 0; i < length; i++) results[i] = _.pluck(arguments, "" + i);
        return results
;
    }, _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
        return result;
    }, _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted != "number") return i = _.sortedIndex(array, item), array[i] === item ? i : -1;
            i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (; i < length; i++) if (array[i] === item) return i;
        return -1;
    }, _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf
) return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        var i = hasIndex ? from : array.length;
        while (i--) if (array[i] === item) return i;
        return -1;
    }, _.range = function(start, stop, step) {
        arguments.length <= 1 && (stop = start || 0, start = 0), step = arguments[2] || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(length);
        while (idx < length) range[idx++] = start, start += step;
        return range;
    };
    var ctor = function() {};
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        return args = slice.call(arguments, 2), bound = function() {
            if (this instanceof bound) {
                ctor.prototype = func.prototype;
                var self = new ctor;
                
ctor.prototype = null;
                var result = func.apply(self, args.concat(slice.call(arguments)));
                return Object(result) === result ? result : self;
            }
            return func.apply(context, args.concat(slice.call(arguments)));
        };
    }, _.partial = function(func) {
        var args = slice.call(arguments, 1);
        return function() {
            return func.apply(this, args.concat(slice.call(arguments)));
        };
    }, _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length === 0) throw new Error("bindAll must be passed function names");
        return each(funcs, function(f) {
            obj[f] = _.bind(obj[f], obj);
        }), obj;
    }, _.memoize = function(func, hasher) {
        var memo = {};
        return hasher || (hasher = _.identity), function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments
);
        };
    }, _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    }, _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    }, _.throttle = function(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : new Date, timeout = null, result = func.apply(context, args);
        };
        return function() {
            var now = new Date;
            !previous && options.leading === !1 && (previous = now);
            var remaining = wait - (now - previous);
            return context = this, args = arguments, remaining <= 0 ? (clearTimeout(timeout), timeout = null, previous = now, result = func.apply(context, args)) : !timeout && options.trailing !== !1 && 
(timeout = setTimeout(later, remaining)), result;
        };
    }, _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this, args = arguments, timestamp = new Date;
            var later = function() {
                var last = new Date - timestamp;
                last < wait ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args)));
            }, callNow = immediate && !timeout;
            return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args)), result;
        };
    }, _.once = function(func) {
        var ran = !1, memo;
        return function() {
            return ran ? memo : (ran = !0, memo = func.apply(this, arguments), func = null, memo);
        };
    }, _.wrap = function(func, wrapper) {
        return function() {
            var args = [ func ];
            return push
.apply(args, arguments), wrapper.apply(this, args);
        };
    }, _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) args = [ funcs[i].apply(this, args) ];
            return args[0];
        };
    }, _.after = function(times, func) {
        return function() {
            if (--times < 1) return func.apply(this, arguments);
        };
    }, _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError("Invalid object");
        var keys = [];
        for (var key in obj) _.has(obj, key) && keys.push(key);
        return keys;
    }, _.values = function(obj) {
        var keys = _.keys(obj), length = keys.length, values = new Array(length);
        for (var i = 0; i < length; i++) values[i] = obj[keys[i]];
        return values;
    }, _.pairs = function(obj) {
        var keys = _.keys(obj), length = keys.length, pairs = new Array
(length);
        for (var i = 0; i < length; i++) pairs[i] = [ keys[i], obj[keys[i]] ];
        return pairs;
    }, _.invert = function(obj) {
        var result = {}, keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) result[obj[keys[i]]] = keys[i];
        return result;
    }, _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) _.isFunction(obj[key]) && names.push(key);
        return names.sort();
    }, _.extend = function(obj) {
        return each(slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) obj[prop] = source[prop];
        }), obj;
    }, _.pick = function(obj) {
        var copy = {}, keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        return each(keys, function(key) {
            key in obj && (copy[key] = obj[key]);
        }), copy;
    }, _.omit = function(obj) {
        var copy = {}, keys = concat.apply(ArrayProto, slice.call(arguments
, 1));
        for (var key in obj) _.contains(keys, key) || (copy[key] = obj[key]);
        return copy;
    }, _.defaults = function(obj) {
        return each(slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) obj[prop] === void 0 && (obj[prop] = source[prop]);
        }), obj;
    }, _.clone = function(obj) {
        return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj;
    }, _.tap = function(obj, interceptor) {
        return interceptor(obj), obj;
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return a === b;
        a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
        var className = toString.call(a);
        if (className != toString.call(b)) return !1;
        switch (className) {
          case "[object String]":
            return a == String(b);
          case "[object Number]":
            
return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;
          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != "object" || typeof b != "object") return !1;
        var length = aStack.length;
        while (length--) if (aStack[length] == a) return bStack[length] == b;
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) return !1;
        aStack.push(a), bStack.push(b);
        var size = 0, result = !0;
        if (className == "[object Array]") {
            size = a.length, result = size == b.length;
            if (result) while (size--) if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        } else {
            
for (var key in a) if (_.has(a, key)) {
                size++;
                if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
            }
            if (result) {
                for (key in b) if (_.has(b, key) && !(size--)) break;
                result = !size;
            }
        }
        return aStack.pop(), bStack.pop(), result;
    };
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    }, _.isEmpty = function(obj) {
        if (obj == null) return !0;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return !1;
        return !0;
    }, _.isElement = function(obj) {
        return !!obj && obj.nodeType === 1;
    }, _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == "[object Array]";
    }, _.isObject = function(obj) {
        return obj === Object(obj);
    }, each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" 
], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]";
        };
    }), _.isArguments(arguments) || (_.isArguments = function(obj) {
        return !!obj && !!_.has(obj, "callee");
    }), typeof /./ != "function" && (_.isFunction = function(obj) {
        return typeof obj == "function";
    }), _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    }, _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    }, _.isBoolean = function(obj) {
        return obj === !0 || obj === !1 || toString.call(obj) == "[object Boolean]";
    }, _.isNull = function(obj) {
        return obj === null;
    }, _.isUndefined = function(obj) {
        return obj === void 0;
    }, _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    }, _.noConflict = function() {
        return root._ = previousUnderscore, this;
    }, _.identity = function(value) {
        
return value;
    }, _.times = function(n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    }, _.random = function(min, max) {
        return max == null && (max = min, min = 0), min + Math.floor(Math.random() * (max - min + 1));
    };
    var entityMap = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);
    var entityRegexes = {
        escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
    };
    _.each([ "escape", "unescape" ], function(method) {
        _[method] = function(string) {
            return string == null ? "" : ("" + string).replace(entityRegexes[method], function(match) {
                
return entityMap[method][match];
            });
        };
    }), _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    }, _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                return push.apply(args, arguments), result.call(this, func.apply(_, args));
            };
        });
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
    }, _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/, escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	"
: "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    _.template = function(text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = new RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g"), index = 0, source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            return source += text.slice(index, offset).replace(escaper, function(match) {
                return "\\" + escapes[match];
            }), escape && (source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"), interpolate && (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"), evaluate && (source += "';\n" + evaluate + "\n__p+='"), index = offset + match.length, match;
        }), source += "';\n", settings.variable || (source = "with(obj||{}){\n" + 
source + "}\n"), source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
            throw e.source = source, e;
        }
        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };
        return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}", template;
    }, _.chain = function(obj) {
        return _(obj).chain();
    };
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    _.mixin(_), each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            return method.apply(obj, arguments), (name == "shift" || 
name == "splice") && obj.length === 0 && delete obj[0], result.call(this, obj);
        };
    }), each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    }), _.extend(_.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    }), typeof define == "function" && define.amd && define("underscore", [], function() {
        return _;
    });
}.call(this), define("app/util", [ "require" ], function(require) {
    function getProp(obj, propName) {
        var propAr = propName.split("."), head = propAr.shift(), tailStr = propAr.join(".");
        return typeof obj != "undefined" && obj != null && obj.hasOwnProperty(head) && typeof obj[head] != "undefined" && obj[head] != null ? propAr.length ? getProp(obj[head], tailStr
) : obj[head] : null;
    }
    return {
        getProperty: getProp
    };
}), define("app/api", [ "require", "jquery", "underscore", "./util", "./initialize" ], function(require) {
    var $ = require("jquery"), _ = require("underscore"), util = require("./util"), prop = util.getProperty, root = this, OA_API = function(api) {
        var cfg = prop(root, "OA.config") || require("./initialize")();
        function prep(endpoint, params, callback, errback, method) {
            return {
                timeout: 5e4,
                type: typeof method == "undefined" ? "GET" : method,
                data: params,
                success: function(data, textStatus, jqXHR) {
                    callback(textStatus, data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    callback(textStatus, !1);
                }
            };
        }
        function key(type) {
            return type == "stream" ? cfg().stream_key : cfg().info_key
;
        }
        return api.setConfig = function(conf) {
            cfg = conf;
        }, api.config = function() {
            return _.clone(cfg());
        }, api.streamRequest = function(endpoint, params, callback, method) {
            var api_call = prep(endpoint, params, callback, method), config = cfg();
            return api_call.data.limit = config.max_particles, api_call.data.api_key = key("stream"), api_call.url = config.base_api_url + "/stream/" + endpoint + "?callback=?", $.ajax(api_call);
        }, api.infoRequest = function(endpoint, params, callback, method) {
            var api_call = prep(endpoint, params, callback, method);
            return api_call.data.api_key = key("info"), api_call.url = cfg().base_api_url + "/info/" + endpoint, $.ajax(api_call);
        }, api.sourceRequest = function(endpoint, params, callback, method) {
            var api_call = prep(endpoint, params, callback, method);
            return api_call.data.api_key = key("info"), api_call
.url = cfg().base_api_url + "/source/" + endpoint, $.ajax(api_call);
        }, api.searchRequest = function(endpoint, params, callback, method) {
            var api_call = prep(endpoint, params, callback, method);
            return api_call.data.api_key = key("info"), api_call.url = cfg().base_api_url + "/search/" + endpoint, $.ajax(api_call);
        }, api;
    }(OA_API || {});
    return OA_API;
}), define("app/media", [ "require", "./util" ], function(require) {
    var util = require("./util"), prop = util.getProperty;
    function Media(data) {
        this._data = Object.freeze({
            id: prop(data, "oa_media_id"),
            mediaType: prop(data, "mediaType"),
            url: prop(data, "url"),
            width: prop(data, "width"),
            height: prop(data, "height"),
            mime: prop(data, "mime"),
            data: prop(data, "data")
        });
    }
    return Media.prototype = {
        id: function() {
            return this._data.id;
        },
        
mediaType: function() {
            return this._data.mediaType;
        },
        url: function() {
            return this._data.url;
        },
        width: function() {
            return this._data.width;
        },
        height: function() {
            return this._data.height;
        },
        mime: function() {
            return this._data.mime;
        },
        data: function() {
            return this._data.data;
        },
        asObject: function() {
            return {
                id: this.id(),
                mediaType: this.mediaType(),
                url: this.url(),
                width: this.width(),
                height: this.height(),
                mime: this.mime(),
                data: this.data()
            };
        }
    }, Media;
}), define("app/mediaCollection", [ "require", "underscore", "./util", "./media" ], function(require) {
    var _ = require("underscore"), util = require("./util"), prop = util.getProperty, Media = require("./media"
);
    function MediaCollection(data) {
        this._data = _.map(data, function(m) {
            return Object.freeze(new Media(m));
        });
    }
    return MediaCollection.prototype = {
        smallerThan: function(w, h) {
            return new MediaCollection(_.chain(this._data).filter(function(m) {
                return m.width() < w && m.height() < h;
            }).map(function(m) {
                return m.asObject();
            }).value());
        },
        largerThan: function(w, h) {
            return new MediaCollection(_.chain(this._data).filter(function(m) {
                return m.width() > w && m.height() > h;
            }).map(function(m) {
                return m.asObject();
            }).value());
        },
        within: function(minW, minH, maxW, maxH) {
            return new MediaCollection(_.chain(this._data).filter(function(m) {
                return m.width() >= minW && m.height() >= minH && m.width() <= maxW && m.height() <= maxH;
            
}).map(function(m) {
                return m.asObject();
            }).value());
        },
        widest: function() {
            var widest = this.first();
            return this.tail().each(function(m) {
                m.width() > widest.width() && (widest = m);
            }), widest;
        },
        tallest: function() {
            var tallest = this.first();
            return this.tail().each(function(m) {
                m.tallest() > tallest.height() && (tallest = m);
            }), tallest;
        },
        length: function() {
            return this._data.length;
        },
        toArray: function() {
            return this._data.slice();
        },
        each: function(fn) {
            _.each(this._data, fn);
        },
        filter: function(fn) {
            return new MediaCollection(_.chain(this._data).filter(fn).map(function(m) {
                return m.asObject();
            }).value());
        },
        map: function(fn) {
            return _
.map(this._data, fn);
        },
        first: function() {
            return this._data.length ? this._data[0] : undefined;
        },
        last: function() {
            return this._data.slice(-1).pop();
        },
        tail: function() {
            return new MediaCollection(_.map(this._data.slice(1), function(m) {
                return m.asObject();
            }));
        }
    }, MediaCollection;
}), define("app/artistInfo", [ "require", "jquery", "underscore", "./util", "./api", "./mediaCollection" ], function(require) {
    var $ = require("jquery"), _ = require("underscore"), util = require("./util"), prop = util.getProperty, api = require("./api"), MediaCollection = require("./mediaCollection");
    function ArtistInfo(data) {
        this._data = Object.freeze({
            oaArtistId: prop(data, "oa_artist_id"),
            name: prop(data, "name"),
            bio: prop(data, "bio.media.0.data.text") || prop(data, "bio.text"),
            coverPhoto: new MediaCollection
(prop(data, "cover_photo.0.media")),
            factCard: prop(data, "fact_card.media.0.data"),
            profilePhoto: new MediaCollection(prop(data, "profile_photo.media")),
            styleTags: prop(data, "tags.media.0.data.tags")
        });
    }
    return ArtistInfo.prototype = {
        oaArtistId: function() {
            return this._data.oaArtistId;
        },
        name: function() {
            return this._data.name;
        },
        bio: function() {
            return this._data.bio;
        },
        coverPhoto: function() {
            return this._data.coverPhoto;
        },
        factCard: function() {
            return this._data.factCard;
        },
        profilePhoto: function() {
            return this._data.profilePhoto;
        },
        styleTags: function() {
            return this._data.styleTags;
        },
        asObject: function() {
            return {
                oaArtistId: this.oaArtistId(),
                name: this.name(),
                
bio: this.bio(),
                coverPhoto: this.coverPhoto(),
                factCard: this.factCard(),
                profilePhoto: this.profilePhoto(),
                styleTags: this.styleTags()
            };
        }
    }, ArtistInfo.api = function() {
        return api;
    }, ArtistInfo.fetchByOaArtistId = function(id, cb) {
        return api.infoRequest("artists/" + id, {
            id_type: "oa:artist_id"
        }, function(status, data) {
            cb(new ArtistInfo(data));
        });
    }, ArtistInfo.fetchByMbGid = function(id, cb) {
        return api.infoRequest("artists/" + id, {
            id_type: "musicbrainz:gid"
        }, function(status, data) {
            cb(new ArtistInfo(data));
        });
    }, ArtistInfo.fetchByAnchorId = function(id, cb) {
        return api.infoRequest("artists/" + id, {
            id_type: "oa:anchor_id"
        }, function(status, data) {
            cb(new ArtistInfo(data));
        });
    }, ArtistInfo;
}), define("app/particle"
, [ "require", "./util", "./mediaCollection" ], function(require) {
    var util = require("./util"), prop = util.getProperty, MediaCollection = require("./mediaCollection");
    function Particle(data) {
        this._data = Object.freeze({
            id: prop(data, "oa_particle_id"),
            text: prop(data, "text"),
            tags: prop(data, "tags"),
            provider: prop(data, "source.provider"),
            source: prop(data, "source"),
            artistIds: prop(data, "artist_ids"),
            profane: prop(data, "profane"),
            date: prop(data, "date"),
            media: new MediaCollection(prop(data, "media"))
        });
    }
    return Particle.prototype = {
        id: function() {
            return this._data.id;
        },
        text: function() {
            return this._data.text;
        },
        tags: function() {
            return this._data.tags;
        },
        provider: function() {
            return this._data.provider;
        },
        
source: function() {
            return this._data.source;
        },
        artistIds: function() {
            return this._data.artistIds;
        },
        profane: function() {
            return this._data.profane;
        },
        date: function() {
            return this._data.date;
        },
        media: function() {
            return this._data.media;
        },
        asObject: function() {
            return {
                id: this.id(),
                text: this.text(),
                tags: this.tags(),
                provider: this.provider(),
                source: this.source(),
                artistIds: this.artistIds(),
                profane: this.profane(),
                date: this.date(),
                media: this.media().asObject()
            };
        }
    }, Particle;
}), define("app/particleCollection", [ "require", "underscore", "./util", "./particle", "./media" ], function(require) {
    var _ = require("underscore"), util = require("./util"
), prop = util.getProperty, Particle = require("./particle"), Media = require("./media");
    function ParticleCollection(data) {
        this._data = _.map(data, function(p) {
            return Object.freeze(new Particle(p));
        });
    }
    return ParticleCollection.prototype = {
        length: function() {
            return this._data.length;
        },
        toArray: function() {
            return this._data.slice();
        },
        each: function(fn) {
            _.each(this._data, fn);
        },
        filter: function(fn) {
            return new ParticleCollection(_.chain(this._data).filter(fn).map(function(p) {
                return p.asObject();
            }).value());
        },
        filterByProvider: function(name) {
            return this.filter(function(p) {
                return (new RegExp(name, "i")).test(p.provider().name);
            });
        },
        filterByMedia: function(fn) {
            return new ParticleCollection(_.chain(this._data
).filter(function(p) {
                var m = p.media().filter(fn);
                return m.length() > 0;
            }).map(function(p) {
                return p.asObject();
            }).value());
        },
        withMediaLargerThan: function(w, h) {
            return this.filter(function(p) {
                return p.media().largerThan(w, h).length() > 0;
            });
        },
        withMediaSmallerThan: function(w, h) {
            return this.filter(function(p) {
                return p.media().smallerThan(w, h).length() > 0;
            });
        },
        withMediaWithin: function(minW, minH, maxW, maxH) {
            return this.filter(function(p) {
                return p.media().within(minW, minH, maxW, maxH).length() > 0;
            });
        },
        map: function(fn) {
            return _.map(this._data, fn);
        },
        first: function() {
            return this._data.length ? this._data[0] : undefined;
        },
        last: function() 
{
            return this._data.slice(-1).pop();
        },
        tail: function() {
            return new ParticleCollection(_.map(this._data.slice(1), function(p) {
                return p.asObject();
            }));
        }
    }, ParticleCollection;
}), define("app/aura", [ "require", "jquery", "underscore", "./util", "./api", "./particle", "./particleCollection", "./mediaCollection", "./media" ], function(require) {
    var $ = require("jquery"), _ = require("underscore"), util = require("./util"), api = require("./api"), prop = util.getProperty, Particle = require("./particle"), ParticleCollection = require("./particleCollection"), MediaCollection = require("./mediaCollection"), Media = require("./media");
    function Aura(data) {
        this._data = Object.freeze({
            particleCount: prop(data, "total_particles"),
            nextParticleSet: prop(data, "next_particles"),
            particles: new ParticleCollection(prop(data, "particles"))
        });
    }
    
return Aura.prototype = {
        particleCount: function() {
            return this._data.particleCount;
        },
        anchor: function() {
            return this._data.anchor;
        },
        nextParticleSet: function() {
            return this._data.nextParticleSet;
        },
        particles: function() {
            return this._data.particles;
        }
    }, Aura.api = function() {
        return api;
    }, Aura.fetchByOaArtistId = function(id, cb) {
        return api.streamRequest("artists/" + id, {
            id_type: "oa:artist_id"
        }, function(status, data) {
            cb(new Aura(data));
        });
    }, Aura.fetchByMbGid = function(id, cb) {
        return api.streamRequest("artists/" + id, {
            id_type: "musicbrainz:gid"
        }, function(status, data) {
            cb(new Aura(data));
        });
    }, Aura.fetchByAnchorId = function(id, cb) {
        return api.streamRequest("artists/" + id, {
            id_type: "oa:anchor_id"
        
}, function(status, data) {
            cb(new Aura(data));
        });
    }, Aura;
}), define("app/no-wrap", [ "require", "./initialize", "./artistInfo", "./aura" ], function(require) {
    var initialize = require("./initialize"), ArtistInfo = require("./artistInfo"), Aura = require("./aura"), root = this, OA = OA || {};
    return OA.initialize = initialize, OA.ArtistInfo = ArtistInfo, OA.Aura = Aura, typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = OA), exports.OA = OA) : root.OA = OA, OA;
});;