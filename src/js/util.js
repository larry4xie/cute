/**
 * cute util function
 *
 * support: cmd
 *
 * thanks to:
 * http://underscorejs.org/
 *
 */

(function() {
    // Establish the root object, `window` in the browser, or `global` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var _previous = root._;

    var _ = function() {};

    // 设置为全局变量
    root._ = _;

    _.VERSION = "1.0.0";

    // 解决命名空间冲突
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };

    //

    // 支持模块化js
    if ( typeof define === "function") {
        define(function () { return _; });
    }
}).call(this);