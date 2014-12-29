define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/trim","./var/support"],function(t,e,n,i,r,o,s,a,l,c){function u(t){var e=t.length,n=p.type(t);return"function"===n||p.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}var d=window.document,f="@VERSION",p=function(t,e){return new p.fn.init(t,e)},h=/^-ms-/,m=/-([\da-z])/gi,g=function(t,e){return e.toUpperCase()};return p.fn=p.prototype={jquery:f,constructor:p,selector:"",length:0,toArray:function(){return e.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:e.call(this)},pushStack:function(t){var e=p.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return p.each(this,t,e)},map:function(t){return this.pushStack(p.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:i,sort:t.sort,splice:t.splice},p.extend=p.fn.extend=function(){var t,e,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||p.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(c&&i&&(p.isPlainObject(i)||(r=p.isArray(i)))?(r?(r=!1,o=n&&p.isArray(n)?n:[]):o=n&&p.isPlainObject(n)?n:{},s[e]=p.extend(c,o,i)):void 0!==i&&(s[e]=i));return s},p.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===p.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return t-parseFloat(t)>=0},isPlainObject:function(t){if("object"!==p.type(t)||t.nodeType||p.isWindow(t))return!1;try{if(t.constructor&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}return!0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[s.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=p.trim(t),t&&(1===t.indexOf("use strict")?(e=d.createElement("script"),e.text=t,d.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(h,"ms-").replace(m,g)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,n){var i,r=0,o=t.length,s=u(t);if(n){if(s)for(;o>r&&(i=e.apply(t[r],n),i!==!1);r++);else for(r in t)if(i=e.apply(t[r],n),i===!1)break}else if(s)for(;o>r&&(i=e.call(t[r],r,t[r]),i!==!1);r++);else for(r in t)if(i=e.call(t[r],r,t[r]),i===!1)break;return t},trim:function(t){return null==t?"":l.call(t)},makeArray:function(t,e){var n=e||[];return null!=t&&(u(Object(t))?p.merge(n,"string"==typeof t?[t]:t):i.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:r.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;n>i;i++)t[r++]=e[i];return t.length=r,t},grep:function(t,e,n){for(var i,r=[],o=0,s=t.length,a=!n;s>o;o++)i=!e(t[o],o),i!==a&&r.push(t[o]);return r},map:function(t,e,i){var r,o=0,s=t.length,a=u(t),l=[];if(a)for(;s>o;o++)r=e(t[o],o,i),null!=r&&l.push(r);else for(o in t)r=e(t[o],o,i),null!=r&&l.push(r);return n.apply([],l)},guid:1,proxy:function(t,n){var i,r,o;return"string"==typeof n&&(i=t[n],n=t,t=i),p.isFunction(t)?(r=e.call(arguments,2),o=function(){return t.apply(n||this,r.concat(e.call(arguments)))},o.guid=t.guid=t.guid||p.guid++,o):void 0},now:Date.now,support:c}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){o["[object "+e+"]"]=e.toLowerCase()}),p});