define(["../core"],function(e){var t=e.access=function(t,n,i,o,r,s,a){var u=0,f=t.length,c=null==i;if("object"===e.type(i)){r=!0;for(u in i)e.access(t,n,u,i[u],!0,s,a)}else if(void 0!==o&&(r=!0,e.isFunction(o)||(a=!0),c&&(a?(n.call(t,o),n=null):(c=n,n=function(t,n,i){return c.call(e(t),i)})),n))for(;f>u;u++)n(t[u],i,a?o:o.call(t[u],u,n(t[u],i)));return r?t:c?n.call(t):f?n(t[0],i):s};return t});