define(["../core"],function(e){var t=e.access=function(t,n,i,r,o,s,a){var l=0,c=t.length,u=null==i;if("object"===e.type(i)){o=!0;for(l in i)e.access(t,n,l,i[l],!0,s,a)}else if(void 0!==r&&(o=!0,e.isFunction(r)||(a=!0),u&&(a?(n.call(t,r),n=null):(u=n,n=function(t,n,i){return u.call(e(t),i)})),n))for(;c>l;l++)n(t[l],i,a?r:r.call(t[l],l,n(t[l],i)));return o?t:u?n.call(t):c?n(t[0],i):s};return t});