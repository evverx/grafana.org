define(["./core","./var/pnum","./core/access","./css/var/rmargin","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/isHidden","./css/var/getStyles","./css/curCSS","./css/defaultDisplay","./css/addGetHookIf","./css/support","./data/var/data_priv","./core/init","./css/swap","./core/ready","./selector"],function(t,e,n,i,r,o,s,a,l,c,u,d,f){function p(t,e){if(e in t)return e;for(var n=e[0].toUpperCase()+e.slice(1),i=e,r=C.length;r--;)if(e=C[r]+n,e in t)return e;return i}function h(t,e,n){var i=b.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function m(e,n,i,r,s){for(var a=i===(r?"border":"content")?4:"width"===n?1:0,l=0;4>a;a+=2)"margin"===i&&(l+=t.css(e,i+o[a],!0,s)),r?("content"===i&&(l-=t.css(e,"padding"+o[a],!0,s)),"margin"!==i&&(l-=t.css(e,"border"+o[a]+"Width",!0,s))):(l+=t.css(e,"padding"+o[a],!0,s),"padding"!==i&&(l+=t.css(e,"border"+o[a]+"Width",!0,s)));return l}function g(e,n,i){var o=!0,s="width"===n?e.offsetWidth:e.offsetHeight,c=a(e),u="border-box"===t.css(e,"boxSizing",!1,c);if(0>=s||null==s){if(s=l(e,n,c),(0>s||null==s)&&(s=e.style[n]),r.test(s))return s;o=u&&(d.boxSizingReliable()||s===e.style[n]),s=parseFloat(s)||0}return s+m(e,n,i||(u?"border":"content"),o,c)+"px"}function v(e,n){for(var i,r,o,a=[],l=0,u=e.length;u>l;l++)r=e[l],r.style&&(a[l]=f.get(r,"olddisplay"),i=r.style.display,n?(a[l]||"none"!==i||(r.style.display=""),""===r.style.display&&s(r)&&(a[l]=f.access(r,"olddisplay",c(r.nodeName)))):a[l]||(o=s(r),(i&&"none"!==i||!o)&&f.set(r,"olddisplay",o?i:t.css(r,"display"))));for(l=0;u>l;l++)r=e[l],r.style&&(n&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=n?a[l]||"":"none"));return e}var y=/^(none|table(?!-c[ea]).+)/,b=new RegExp("^("+e+")(.*)$","i"),x=new RegExp("^([+-])=("+e+")","i"),_={position:"absolute",visibility:"hidden",display:"block"},w={letterSpacing:0,fontWeight:400},C=["Webkit","O","Moz","ms"];return t.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=l(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,n,i,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,s,a,l=t.camelCase(n),c=e.style;return n=t.cssProps[l]||(t.cssProps[l]=p(c,l)),a=t.cssHooks[n]||t.cssHooks[l],void 0===i?a&&"get"in a&&void 0!==(o=a.get(e,!1,r))?o:c[n]:(s=typeof i,"string"===s&&(o=x.exec(i))&&(i=(o[1]+1)*o[2]+parseFloat(t.css(e,n)),s="number"),null!=i&&i===i&&("number"!==s||t.cssNumber[l]||(i+="px"),d.clearCloneStyle||""!==i||0!==n.indexOf("background")||(c[n]="inherit"),a&&"set"in a&&void 0===(i=a.set(e,i,r))||(c[n]="",c[n]=i)),void 0)}},css:function(e,n,i,r){var o,s,a,c=t.camelCase(n);return n=t.cssProps[c]||(t.cssProps[c]=p(e.style,c)),a=t.cssHooks[n]||t.cssHooks[c],a&&"get"in a&&(o=a.get(e,!0,i)),void 0===o&&(o=l(e,n,r)),"normal"===o&&n in w&&(o=w[n]),""===i||i?(s=parseFloat(o),i===!0||t.isNumeric(s)?s||0:o):o}}),t.each(["height","width"],function(e,n){t.cssHooks[n]={get:function(e,i,r){return i?0===e.offsetWidth&&y.test(t.css(e,"display"))?t.swap(e,_,function(){return g(e,n,r)}):g(e,n,r):void 0},set:function(e,i,r){var o=r&&a(e);return h(e,i,r?m(e,n,r,"border-box"===t.css(e,"boxSizing",!1,o),o):0)}}}),t.cssHooks.marginRight=u(d.reliableMarginRight,function(e,n){return n?t.swap(e,{display:"inline-block"},l,[e,"marginRight"]):void 0}),t.each({margin:"",padding:"",border:"Width"},function(e,n){t.cssHooks[e+n]={expand:function(t){for(var i=0,r={},s="string"==typeof t?t.split(" "):[t];4>i;i++)r[e+o[i]+n]=s[i]||s[i-2]||s[0];return r}},i.test(e)||(t.cssHooks[e+n].set=h)}),t.fn.extend({css:function(e,i){return n(this,function(e,n,i){var r,o,s={},l=0;if(t.isArray(n)){for(r=a(e),o=n.length;o>l;l++)s[n[l]]=t.css(e,n[l],!1,r);return s}return void 0!==i?t.style(e,n,i):t.css(e,n)},e,i,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){s(this)?t(this).show():t(this).hide()})}}),t});