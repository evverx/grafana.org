define(["./core","./var/rnotwhite","./core/access","./data/var/data_priv","./data/var/data_user"],function(e,t,n,i,o){function r(t,n,i){var r;if(void 0===i&&1===t.nodeType)if(r="data-"+n.replace(a,"-$1").toLowerCase(),i=t.getAttribute(r),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:s.test(i)?e.parseJSON(i):i}catch(u){}o.set(t,n,i)}else i=void 0;return i}var s=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,a=/([A-Z])/g;return e.extend({hasData:function(e){return o.hasData(e)||i.hasData(e)},data:function(e,t,n){return o.access(e,t,n)},removeData:function(e,t){o.remove(e,t)},_data:function(e,t,n){return i.access(e,t,n)},_removeData:function(e,t){i.remove(e,t)}}),e.fn.extend({data:function(t,s){var a,u,f,c=this[0],l=c&&c.attributes;if(void 0===t){if(this.length&&(f=o.get(c),1===c.nodeType&&!i.get(c,"hasDataAttrs"))){for(a=l.length;a--;)u=l[a].name,0===u.indexOf("data-")&&(u=e.camelCase(u.slice(5)),r(c,u,f[u]));i.set(c,"hasDataAttrs",!0)}return f}return"object"==typeof t?this.each(function(){o.set(this,t)}):n(this,function(n){var i,s=e.camelCase(t);if(c&&void 0===n){if(i=o.get(c,t),void 0!==i)return i;if(i=o.get(c,s),void 0!==i)return i;if(i=r(c,s,void 0),void 0!==i)return i}else this.each(function(){var e=o.get(this,s);o.set(this,s,n),-1!==t.indexOf("-")&&void 0!==e&&o.set(this,t,n)})},null,s,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){o.remove(this,e)})}}),e});