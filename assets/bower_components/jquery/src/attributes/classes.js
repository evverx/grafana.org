define(["../core","../var/rnotwhite","../var/strundefined","../data/var/data_priv","../core/init"],function(e,t,n,i){var r=/[\t\r\n\f]/g;e.fn.extend({addClass:function(n){var i,o,s,a,u,l,c="string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).addClass(n.call(this,t,this.className))});if(c)for(i=(n||"").match(t)||[];d>f;f++)if(o=this[f],s=1===o.nodeType&&(o.className?(" "+o.className+" ").replace(r," "):" ")){for(u=0;a=i[u++];)s.indexOf(" "+a+" ")<0&&(s+=a+" ");l=e.trim(s),o.className!==l&&(o.className=l)}return this},removeClass:function(n){var i,o,s,a,u,l,c=0===arguments.length||"string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).removeClass(n.call(this,t,this.className))});if(c)for(i=(n||"").match(t)||[];d>f;f++)if(o=this[f],s=1===o.nodeType&&(o.className?(" "+o.className+" ").replace(r," "):"")){for(u=0;a=i[u++];)for(;s.indexOf(" "+a+" ")>=0;)s=s.replace(" "+a+" "," ");l=n?e.trim(s):"",o.className!==l&&(o.className=l)}return this},toggleClass:function(r,o){var s=typeof r;return"boolean"==typeof o&&"string"===s?o?this.addClass(r):this.removeClass(r):e.isFunction(r)?this.each(function(t){e(this).toggleClass(r.call(this,t,this.className,o),o)}):this.each(function(){if("string"===s)for(var o,a=0,u=e(this),l=r.match(t)||[];o=l[a++];)u.hasClass(o)?u.removeClass(o):u.addClass(o);else(s===n||"boolean"===s)&&(this.className&&i.set(this,"__className__",this.className),this.className=this.className||r===!1?"":i.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(r," ").indexOf(t)>=0)return!0;return!1}})});