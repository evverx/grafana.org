define(["../core","./var/rsingleTag","../manipulation"],function(e,t){return e.parseHTML=function(n,r,a){if(!n||"string"!=typeof n)return null;"boolean"==typeof r&&(a=r,r=!1),r=r||document;var o=t.exec(n),c=!a&&[];return o?[r.createElement(o[1])]:(o=e.buildFragment([n],r,c),c&&c.length&&e(c).remove(),e.merge([],o.childNodes))},e.parseHTML});