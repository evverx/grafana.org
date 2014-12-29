define(["./core","./data/var/data_priv","./deferred","./callbacks"],function(t,e){return t.extend({queue:function(n,i,s){var r;return n?(i=(i||"fx")+"queue",r=e.get(n,i),s&&(!r||t.isArray(s)?r=e.access(n,i,t.makeArray(s)):r.push(s)),r||[]):void 0},dequeue:function(e,n){n=n||"fx";var i=t.queue(e,n),s=i.length,r=i.shift(),o=t._queueHooks(e,n),a=function(){t.dequeue(e,n)};"inprogress"===r&&(r=i.shift(),s--),r&&("fx"===n&&i.unshift("inprogress"),delete o.stop,r.call(e,a,o)),!s&&o&&o.empty.fire()},_queueHooks:function(n,i){var s=i+"queueHooks";return e.get(n,s)||e.access(n,s,{empty:t.Callbacks("once memory").add(function(){e.remove(n,[i+"queue",s])})})}}),t.fn.extend({queue:function(e,n){var i=2;return"string"!=typeof e&&(n=e,e="fx",i--),arguments.length<i?t.queue(this[0],e):void 0===n?this:this.each(function(){var i=t.queue(this,e,n);t._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&t.dequeue(this,e)})},dequeue:function(e){return this.each(function(){t.dequeue(this,e)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(n,i){var s,r=1,o=t.Deferred(),a=this,c=this.length,l=function(){--r||o.resolveWith(a,[a])};for("string"!=typeof n&&(i=n,n=void 0),n=n||"fx";c--;)s=e.get(a[c],n+"queueHooks"),s&&s.empty&&(r++,s.empty.add(l));return l(),o.promise(i)}}),t});