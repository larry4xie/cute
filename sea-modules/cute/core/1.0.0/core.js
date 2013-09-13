define("cute/core/1.0.0/core",["./util"],function(a){a("./util")}),function(){this._log=function(a,b){console&&console[b||(b="log")]&&console[b](a)}}.call(this),function(){var a=this;a._;var b=function(a){return a instanceof b?a:this instanceof b?(this._wrapped=a,void 0):new b(a)};a._=b,b.VERSION="1.0.0";var c={},d=Array.prototype,e=Object.prototype,f=String.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.filter,o=d.every,p=d.some,q=d.indexOf,r=Array.isArray,s=Object.keys,t=f.trim,u=f.trimRight,v=f.trimLeft;b.noConflict=function(){return a._=previousUnderscore,this};var w=b.each=b.forEach=function(a,d,e){if(null!=a)if(l&&a.forEach===l)a.forEach(d,e);else if(a.length===+a.length){for(var f=0,g=a.length;g>f;f++)if(d.call(e,a[f],f,a)===c)return}else for(var h in a)if(b.has(a,h)&&d.call(e,a[h],h,a)===c)return};b.map=b.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(w(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)},b.find=b.detect=function(a,b,c){var d;return x(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},b.filter=b.select=function(a,b,c){var d=[];return null==a?d:n&&a.filter===n?a.filter(b,c):(w(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},b.every=b.all=function(a,d,e){d||(d=b.identity);var f=!0;return null==a?f:o&&a.every===o?a.every(d,e):(w(a,function(a,b,g){return(f=f&&d.call(e,a,b,g))?void 0:c}),!!f)};var x=b.some=b.any=function(a,d,e){d||(d=b.identity);var f=!1;return null==a?f:p&&a.some===p?a.some(d,e):(w(a,function(a,b,g){return f||(f=d.call(e,a,b,g))?c:void 0}),!!f)};b.contains=b.include=function(a,b){return null==a?!1:q&&a.indexOf===q?-1!=a.indexOf(b):x(a,function(a){return a===b})},b.pluck=function(a,c){return b.map(a,function(a){return a[c]})},b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-1/0;var e={computed:-1/0,value:-1/0};return w(a,function(a,b,f){var g=c?c.call(d,a,b,f):a;g>e.computed&&(e={value:a,computed:g})}),e.value},b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return 1/0;var e={computed:1/0,value:1/0};return w(a,function(a,b,f){var g=c?c.call(d,a,b,f):a;g<e.computed&&(e={value:a,computed:g})}),e.value},b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,index:b,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")},b.toArray=function(a){return a?b.isArray(a)?h.call(a):a.length===+a.length?b.map(a,b.identity):b.values(a):[]},b.size=function(a){return null==a?0:a.length===+a.length?a.length:b.keys(a).length},b.shuffle=function(a){var c,d=0,e=[];return w(a,function(a){c=b.random(d++),e[d-1]=e[c],e[c]=a}),e},b.first=b.head=b.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:h.call(a,0,b)},b.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},b.compact=function(a){return b.filter(a,b.identity)};var y=function(a,c,d){return c&&b.every(a,b.isArray)?i.apply(d,a):(w(a,function(a){b.isArray(a)||b.isArguments(a)?c?g.apply(d,a):y(a,c,d):d.push(a)}),d)};b.flatten=function(a,b){return y(a,b,[])},b.without=function(a){return b.difference(a,h.call(arguments,1))},b.uniq=b.unique=function(a,c,d,e){b.isFunction(c)&&(e=d,d=c,c=!1);var f=d?b.map(a,d,e):a,g=[],h=[];return w(f,function(d,e){(c?e&&h[h.length-1]===d:b.contains(h,d))||(h.push(d),g.push(a[e]))}),g},b.union=function(){return b.uniq(b.flatten(arguments,!0))},b.difference=function(a){var c=i.apply(d,h.call(arguments,1));return b.filter(a,function(a){return!b.contains(c,a)})},b.zip=function(){for(var a=b.max(b.pluck(arguments,"length").concat(0)),c=new Array(a),d=0;a>d;d++)c[d]=b.pluck(arguments,""+d);return c},b.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},b.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f},b.once=function(a){var b=!1;return function(){if(!b){b=!0;var c=a.apply(this,arguments);return a=null,c}}},b.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},b.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},b.extend=function(a){return w(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},b.clone=function(a){return b.isObject(a)?b.isArray(a)?a.slice():b.extend({},a):a},b.keys=s||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c},b.values=function(a){var c=[];for(var d in a)b.has(a,d)&&c.push(a[d]);return c},b.pairs=function(a){var c=[];for(var d in a)b.has(a,d)&&c.push([d,a[d]]);return c},b.invert=function(a){var c={};for(var d in a)b.has(a,d)&&(c[a[d]]=d);return c},b.functions=b.methods=function(a){var c=[];for(var d in a)b.isFunction(a[d])&&c.push(d);return c.sort()},b.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return w(c,function(c){c in a&&(b[c]=a[c])}),b},b.omit=function(a){var c={},e=i.apply(d,h.call(arguments,1));for(var f in a)b.contains(e,f)||(c[f]=a[f]);return c},b.has=function(a,b){return k.call(a,b)},b.isEmpty=function(a){if(null==a)return!0;if(b.isArray(a)||b.isString(a))return 0===a.length;for(var c in a)if(b.has(a,c))return!1;return!0},b.isElement=function(a){return!(!a||1!==a.nodeType)},b.isArray=r||function(a){return"[object Array]"==j.call(a)},b.isObject=function(a){return a===Object(a)},b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},b.isNaN=function(a){return b.isNumber(a)&&a!=+a},b.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},b.isNull=function(a){return null===a},b.isUndefined=function(a){return void 0===a},w(["Arguments","Function","String","Number","Date","RegExp"],function(a){b["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))}),"function"!=typeof/./&&(b.isFunction=function(a){return"function"==typeof a}),b.identity=function(a){return a},b.times=function(a,b,c){for(var d=Array(Math.max(0,a)),e=0;a>e;e++)d[e]=b.call(c,e);return d},b.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var z=0;b.uniqueId=function(a){var b=++z+"";return a?a+b:b},b.mixin=function(a){w(b.functions(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this._wrapped];return g.apply(a,arguments),D.call(this,d.apply(b,a))}})};var A={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};A.unescape=b.invert(A.escape);var B={escape:new RegExp("["+b.keys(A.escape).join("")+"]","g"),unescape:new RegExp("("+b.keys(A.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(a){b[a]=function(b){return null==b?"":(""+b).replace(B[a],function(b){return A[a][b]})}}),b.numberFormat=function(a,c,d,e){if(b.isNaN(a)||null==a)return"";a=a.toFixed(c),e="string"==typeof e?e:",";var f=a.split("."),g=f[0],h=f[1]?(d||".")+f[1]:"";return g.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+e)+h},b.isBlank=function(a){return null==a&&(a=""),/^\s*$/.test(a)},b.capitalize=function(a){return a=null==a?"":String(a),a.charAt(0).toUpperCase()+a.slice(1)},b.chop=function(a,b){return null==a?[]:(a=String(a),b>0?a.match(new RegExp(".{1,"+b+"}","g")):[a])},b.lines=function(a){return null==a?[]:String(a).split("\n")},b.words=function(a,c){return b.isBlank(a)?[]:b.trim(a).split(c||/\s+/)},b.startsWith=function(a,b){return""===b?!0:null==a||null==b?!1:(a=String(a),b=String(b),a.length>=b.length&&a.slice(0,b.length)===b)},b.endsWith=function(a,b){return""===b?!0:null==a||null==b?!1:(a=String(a),b=String(b),a.length>=b.length&&a.slice(a.length-b.length)===b)},b.trim=function(a){return null==a?"":t?t.call(a):String(a).replace(/^\s+|\s+$/g,"")},b.ltrim=function(a){return null==a?"":v?v.call(a):String(a).replace(/^\s+/,"")},b.rtrim=function(a){return null==a?"":u?u.call(a):String(a).replace(/\s+$/g,"")},b.truncate=function(a,b,c){return null==a?"":(a=String(a),c=c||"...",a.length>b?a.slice(0,b)+c:a)};var C=function(a,b){if(1>b)return"";for(var c="";b>0;)1&b&&(c+=a),b>>=1,a+=a;return c};b.repeat=function(a,b,c){if(null==a)return"";if(null==c)return C(String(a),b);for(var d=[];b>0;d[--b]=a);return d.join(c)},b.chain=function(a){return b(a).chain()};var D=function(a){return this._chain?b(a).chain():a};b.mixin(b),w(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var c=d[a];b.prototype[a]=function(){var b=this._wrapped;return c.apply(b,arguments),"shift"!=a&&"splice"!=a||0!==b.length||delete b[0],D.call(this,b)}}),w(["concat","join","slice"],function(a){var c=d[a];b.prototype[a]=function(){return D.call(this,c.apply(this._wrapped,arguments))}}),b.extend(b.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define("cute/core/1.0.0/util",[],function(){return b})}.call(this);