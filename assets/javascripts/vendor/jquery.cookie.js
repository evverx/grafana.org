/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=s.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,s=e.cookie=function(i,a,u){if(void 0!==a&&!e.isFunction(a)){if(u=e.extend({},s.defaults,u),"number"==typeof u.expires){var l=u.expires,c=u.expires=new Date;c.setDate(c.getDate()+l)}return document.cookie=[t(i),"=",r(a),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var d=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var m=f[p].split("="),g=n(m.shift()),v=m.join("=");if(i&&i===g){d=o(v,a);break}i||void 0===(v=o(v))||(d[g]=v)}return d};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});