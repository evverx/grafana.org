define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(e,t,n,i){function r(r,o,s){var a,l,c,u,d=r.style;return s=s||i(r),s&&(u=s.getPropertyValue(o)||s[o]),s&&(""!==u||e.contains(r.ownerDocument,r)||(u=e.style(r,o)),t.test(u)&&n.test(o)&&(a=d.width,l=d.minWidth,c=d.maxWidth,d.minWidth=d.maxWidth=d.width=u,u=s.width,d.width=a,d.minWidth=l,d.maxWidth=c)),void 0!==u?u+"":u}return r});