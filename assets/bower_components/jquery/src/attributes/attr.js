define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","../selector"],function(e,t,n,r,o){var i,u,a=e.expr.attrHandle;e.fn.extend({attr:function(t,n){return r(this,e.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each(function(){e.removeAttr(this,t)})}}),e.extend({attr:function(t,r,o){var a,s,c=t.nodeType;if(t&&3!==c&&8!==c&&2!==c)return typeof t.getAttribute===n?e.prop(t,r,o):(1===c&&e.isXMLDoc(t)||(r=r.toLowerCase(),a=e.attrHooks[r]||(e.expr.match.bool.test(r)?u:i)),void 0===o?a&&"get"in a&&null!==(s=a.get(t,r))?s:(s=e.find.attr(t,r),null==s?void 0:s):null!==o?a&&"set"in a&&void 0!==(s=a.set(t,o,r))?s:(t.setAttribute(r,o+""),o):(e.removeAttr(t,r),void 0))},removeAttr:function(n,r){var o,i,u=0,a=r&&r.match(t);if(a&&1===n.nodeType)for(;o=a[u++];)i=e.propFix[o]||o,e.expr.match.bool.test(o)&&(n[i]=!1),n.removeAttribute(o)},attrHooks:{type:{set:function(t,n){if(!o.radioValue&&"radio"===n&&e.nodeName(t,"input")){var r=t.value;return t.setAttribute("type",n),r&&(t.value=r),n}}}}}),u={set:function(t,n,r){return n===!1?e.removeAttr(t,r):t.setAttribute(r,r),r}},e.each(e.expr.match.bool.source.match(/\w+/g),function(t,n){var r=a[n]||e.find.attr;a[n]=function(e,t,n){var o,i;return n||(i=a[t],a[t]=o,o=null!=r(e,t,n)?t.toLowerCase():null,a[t]=i),o}})});