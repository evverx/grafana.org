define(["./core"],function(e){var n,t=window.document.documentElement,r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector,o=function(t,r){if(t===r)return n=!0,0;var o=r.compareDocumentPosition&&t.compareDocumentPosition&&t.compareDocumentPosition(r);return o?1&o?t===document||e.contains(document,t)?-1:r===document||e.contains(document,r)?1:0:4&o?-1:1:t.compareDocumentPosition?-1:1};e.extend({find:function(n,t,r,o){var i,a,c=0;if(r=r||[],t=t||document,!n||"string"!=typeof n)return r;if(1!==(a=t.nodeType)&&9!==a)return[];if(o)for(;i=o[c++];)e.find.matchesSelector(i,n)&&r.push(i);else e.merge(r,t.querySelectorAll(n));return r},unique:function(e){var t,r=[],i=0,a=0;if(n=!1,e.sort(o),n){for(;t=e[i++];)t===e[i]&&(a=r.push(i));for(;a--;)e.splice(r[a],1)}return e},text:function(n){var t,r="",o=0,i=n.nodeType;if(i){if(1===i||9===i||11===i)return n.textContent;if(3===i||4===i)return n.nodeValue}else for(;t=n[o++];)r+=e.text(t);return r},contains:function(e,n){var t=9===e.nodeType?e.documentElement:e,r=n&&n.parentNode;return e===r||!(!r||1!==r.nodeType||!t.contains(r))},isXMLDoc:function(e){return"HTML"!==(e.ownerDocument||e).documentElement.nodeName},expr:{attrHandle:{},match:{bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),e.extend(e.find,{matches:function(n,t){return e.find(n,null,null,t)},matchesSelector:function(e,n){return r.call(e,n)},attr:function(e,n){return e.getAttribute(n)}})});