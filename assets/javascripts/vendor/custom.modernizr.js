window.Modernizr=function(e,t,n){function i(e){h.cssText=e}function r(e,t){return typeof e===t}var o,s,a,l="2.6.2",c={},u=!0,d=t.documentElement,f="modernizr",p=t.createElement(f),h=p.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},b=[],x=b.slice,w=function(e,n,i,r){var o,s,a,l,c=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(i,10))for(;i--;)a=t.createElement("div"),a.id=r?r[i]:f+(i+1),c.appendChild(a);return o=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),c.id=f,(u?c:p).innerHTML+=o,p.appendChild(c),u||(p.style.background="",p.style.overflow="hidden",l=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),s=n(c,e),u?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),d.style.overflow=l),!!s},_=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var i;return w("@media "+t+" { #"+f+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},C={}.hasOwnProperty;a=r(C,"undefined")||r(C.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,s=t.apply(o,n.concat(x.call(arguments)));return Object(s)===s?s:o}return t.apply(e,n.concat(x.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",g.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(m.call(t.createElementNS(v.svg,"clipPath")))};for(var k in y)a(y,k)&&(s=k.toLowerCase(),c[s]=y[k](),b.push((c[s]?"":"no-")+s));return c.addTest=function(e,t){if("object"==typeof e)for(var i in e)a(e,i)&&c.addTest(i,e[i]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(d.className+=" "+(t?"":"no-")+e),c[e]=t}return c},i(""),p=o=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[h]];return t||(t={},m++,e[h]=m,g[m]=t),t}function o(e,n,i){if(n||(n=t),u)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():p.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),o.canHaveChildren&&!f.test(e)?i.frag.appendChild(o):o}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var i=r(e);return v.shivCSS&&!c&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||a(e,i),e}var c,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:s};e.html5=v,l(t)}(this,t),c._version=l,c._prefixes=g,c.mq=_,c.testStyles=w,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+b.join(" "):""),c}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function o(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):y=0}function l(e,n,i,r,o,l,c){function u(t){if(!p&&s(d.readyState)&&(b.r=p=1,!y&&a(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(d)},50);for(var i in S[n])S[n].hasOwnProperty(i)&&S[n][i].onload()}}var c=c||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:i,s:n,e:o,a:l,x:c};1===S[n]&&(g=1,S[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(r,0,b),"img"!=e&&(g||2===S[n]?(w.insertBefore(d,x?null:m),h(u,c)):S[n].push(d))}function c(e,t,n,i,o){return y=0,t=t||"j",r(e)?l("c"==t?C:_,e,t,this.i++,n,i,o):(v.splice(this.i++,0,e),1==v.length&&a()),this}function u(){var e=f;return e.loader={load:c,i:0},e}var d,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:m.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,_=b?"object":p?"script":"img",C=p?"script":_,k=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],S={},E={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,i,e=e.split("!"),r=T.length,o=e.pop(),s=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;s>n;n++)i=e[n].split("="),(t=E[i.shift()])&&(o=t(o,i));for(n=0;r>n;n++)o=T[n](o);return o}function s(e,r,o,s,a){var l=t(e),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(r&&(r=i(r)?r:r[e]||r[s]||r[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,r,o,s,a):(S[l.url]?l.noexec=!0:S[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(r)||i(c))&&o.load(function(){u(),r&&r(l.origUrl,a,s),c&&c(l.origUrl,a,s),S[l.url]=2})))}function a(e,t){function n(e,n){if(e){if(r(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),s(e,d,t,0,c);else if(Object(e)===e)for(l in a=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--a&&(i(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),s(e[l],d,t,l,c))}else!n&&p()}var a,l,c=!!e.test,u=e.load||e.both,d=e.callback||o,f=d,p=e.complete||o;n(c?e.yep:e.nope,!!u),u&&n(u)}var l,c,d=this.yepnope.loader;if(r(e))s(e,0,d,0);else if(k(e))for(l=0;l<e.length;l++)c=e[l],r(c)?s(c,0,d,0):k(c)?f(c):Object(c)===c&&a(c,d);else Object(e)===e&&a(e,d)},f.addPrefix=function(e,t){E[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,n,i,r,l,c){var u,d,p=t.createElement("script"),r=r||f.errorTimeout;p.src=e;for(d in i)p.setAttribute(d,i[d]);n=c?a:n||o,p.onreadystatechange=p.onload=function(){!u&&s(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},r),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,i,r,s,l){var c,r=t.createElement("link"),n=l?a:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(c in i)r.setAttribute(c,i[c]);s||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});