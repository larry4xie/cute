/**
 * cute util function
 *
 * support: cmd
 *
 * thanks to:
 * http://underscorejs.org/
 * http://epeli.github.io/underscore.string/
 *
 */
(function() {
    // Establish the root object, `window` in the browser, or `global` on the server.
    var root = this;
    // Save the previous value of the `_` variable.
    var _previous = root._;
    // Create a safe reference to the Underscore object for use below.
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    // 设置为全局变量
    root._ = _;
    _.VERSION = "1.0.0";
    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};
    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, StrProto = String.prototype;
    // Create quick reference variables for speed access to core prototypes.
    var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeTrim = StrProto.trim, nativeTrimRight = StrProto.trimRight, nativeTrimLeft = StrProto.trimLeft;
    // 解决命名空间冲突
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };
    // Collection Functions
    // --------------------
    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            // array
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            // obj
            for (var key in obj) {
                if (_.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };
    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };
    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results.push(value);
        });
        return results;
    };
    // Determine whether all of the elements match a truth test.
    // Delegates to **ECMAScript 5**'s native `every` if available.
    // Aliased as `all`.
    _.every = _.all = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };
    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function(obj, key) {
        return _.map(obj, function(value) {
            return value[key];
        });
    };
    // Return the maximum element or (element-based computation).
    // Can't optimize arrays of integers longer than 65,535 elements.
    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {
            computed: -Infinity,
            value: -Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    // Return the minimum element (or element-based computation).
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {
            computed: Infinity,
            value: Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    // Sort the object's values by a criterion produced by an iterator.
    _.sortBy = function(obj, value, context) {
        var iterator = _.isFunction(value) ? value : function(obj) {
            return obj[value];
        };
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index < right.index ? -1 : 1;
        }), "value");
    };
    // Safely create a real, live array from anything iterable.
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };
    // Return the number of elements in an object.
    _.size = function(obj) {
        if (obj == null) return 0;
        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
    };
    // Shuffle an array.
    _.shuffle = function(obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function(value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };
    // Array Functions
    // ---------------
    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        return n != null && !guard ? slice.call(array, 0, n) : array[0];
    };
    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n != null && !guard) {
            return slice.call(array, Math.max(array.length - n, 0));
        } else {
            return array[array.length - 1];
        }
    };
    // Trim out all falsy values from an array.
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };
    // Internal implementation of a recursive `flatten` function.
    var flatten = function(input, shallow, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        each(input, function(value) {
            if (_.isArray(value) || _.isArguments(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };
    // Return a completely flattened version of an array.
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    };
    // Return a version of the array that does not contain the specified value(s).
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function(array, isSorted, iterator, context) {
        if (_.isFunction(isSorted)) {
            context = iterator;
            iterator = isSorted;
            isSorted = false;
        }
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function(value, index) {
            if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };
    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };
    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    };
    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function() {
        var length = _.max(_.pluck(arguments, "length").concat(0));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, "" + i);
        }
        return results;
    };
    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, l = list.length; i < l; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };
    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        var len = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(len);
        while (idx < len) {
            range[idx++] = start;
            start += step;
        }
        return range;
    };
    // Function Functions
    // ------------------
    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = function(func) {
        var ran = false;
        return function() {
            if (ran) return;
            ran = true;
            var memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };
    // Returns a function that will only be executed after being called N times.
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [ funcs[i].apply(this, args) ];
            }
            return args[0];
        };
    };
    // Object Functions
    // ----------------
    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };
    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError("Invalid object");
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    // Retrieve the values of an object's properties.
    _.values = function(obj) {
        var values = [];
        for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
        return values;
    };
    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function(obj) {
        var pairs = [];
        for (var key in obj) if (_.has(obj, key)) pairs.push([ key, obj[key] ]);
        return pairs;
    };
    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function(obj) {
        var result = {};
        for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
        return result;
    };
    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };
    // Return a copy of the object without the blacklisted properties.
    _.omit = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };
    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };
    // Is a given value a DOM element?
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };
    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == "[object Array]";
    };
    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    // Is a given object a finite number?
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    };
    // Is a given value a boolean?
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == "[object Boolean]";
    };
    // Is a given value equal to null?
    _.isNull = function(obj) {
        return obj === null;
    };
    // Is a given variable undefined?
    _.isUndefined = function(obj) {
        return obj === void 0;
    };
    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]";
        };
    });
    // Define a fallback version of the method in browsers (ahem, IE), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, "callee"));
        };
    }
    // Optimize `isFunction` if appropriate.
    if (typeof /./ !== "function") {
        _.isFunction = function(obj) {
            return typeof obj === "function";
        };
    }
    // Utility Functions
    // -----------------
    // Keep the identity function around for default iterators.
    _.identity = function(value) {
        return value;
    };
    // Run a function **n** times.
    _.times = function(n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    };
    // Return a random integer between min and max (inclusive).
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
    };
    // Add your own custom functions to the Underscore object.
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };
    // List of HTML entities for escaping.
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
    // Regexes containing the keys and values listed immediately above.
    var entityRegexes = {
        escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
    };
    // Functions for escaping and unescaping strings to/from HTML interpolation.
    _.each([ "escape", "unescape" ], function(method) {
        _[method] = function(string) {
            if (string == null) return "";
            return ("" + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    });
    // String Functions
    // ----------------
    _.numberFormat = function(number, dec, dsep, tsep) {
        if (_.isNaN(number) || number == null) return "";
        number = number.toFixed(dec);
        tsep = typeof tsep == "string" ? tsep : ",";
        var parts = number.split("."), fnums = parts[0], decimals = parts[1] ? (dsep || ".") + parts[1] : "";
        return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + tsep) + decimals;
    };
    _.isBlank = function(str) {
        if (str == null) str = "";
        return /^\s*$/.test(str);
    };
    _.capitalize = function(str) {
        str = str == null ? "" : String(str);
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    _.chop = function(str, step) {
        if (str == null) return [];
        str = String(str);
        return step > 0 ? str.match(new RegExp(".{1," + step + "}", "g")) : [ str ];
    };
    _.lines = function(str) {
        if (str == null) return [];
        return String(str).split("\n");
    };
    _.words = function(str, delimiter) {
        if (_.isBlank(str)) return [];
        return _.trim(str).split(delimiter || /\s+/);
    };
    _.startsWith = function(str, starts) {
        if (starts === "") return true;
        if (str == null || starts == null) return false;
        str = String(str);
        starts = String(starts);
        return str.length >= starts.length && str.slice(0, starts.length) === starts;
    };
    _.endsWith = function(str, ends) {
        if (ends === "") return true;
        if (str == null || ends == null) return false;
        str = String(str);
        ends = String(ends);
        return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
    };
    _.trim = function(str) {
        if (str == null) return "";
        if (nativeTrim) return nativeTrim.call(str);
        return String(str).replace(/^\s+|\s+$/g, "");
    };
    _.ltrim = function(str) {
        if (str == null) return "";
        if (nativeTrimLeft) return nativeTrimLeft.call(str);
        return String(str).replace(/^\s+/, "");
    };
    _.rtrim = function(str) {
        if (str == null) return "";
        if (nativeTrimRight) return nativeTrimRight.call(str);
        return String(str).replace(/\s+$/g, "");
    };
    _.truncate = function(str, length, truncateStr) {
        if (str == null) return "";
        str = String(str);
        truncateStr = truncateStr || "...";
        return str.length > length ? str.slice(0, length) + truncateStr : str;
    };
    var strRepeat = function(str, qty) {
        if (qty < 1) return "";
        var result = "";
        while (qty > 0) {
            if (qty & 1) result += str;
            qty >>= 1, str += str;
        }
        return result;
    };
    _.repeat = function(str, qty, separator) {
        if (str == null) return "";
        // using faster implementation if separator is not needed;
        if (separator == null) return strRepeat(String(str), qty);
        // this one is about 300x slower in Google Chrome
        for (var repeat = []; qty > 0; repeat[--qty] = str) {}
        return repeat.join(separator);
    };
    // Chain Functions
    // ---------------
    // Add a "chain" function, which will delegate to the wrapper.
    _.chain = function(obj) {
        return _(obj).chain();
    };
    // Helper function to continue chaining intermediate results.
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    // Add all of functions to the wrapper object.
    _.mixin(_);
    // Add all mutator Array functions to the wrapper.
    each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == "shift" || name == "splice") && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });
    // Add all accessor Array functions to the wrapper.
    each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });
    _.extend(_.prototype, {
        // Start chaining a wrapped Underscore object.
        chain: function() {
            this._chain = true;
            return this;
        },
        // Extracts the result from a wrapped and chained object.
        value: function() {
            return this._wrapped;
        }
    });
    // 支持模块化js
    if (typeof define === "function") {
        define("cute/util/1.0.0/util-debug", [], function() {
            return _;
        });
    }
}).call(this);
