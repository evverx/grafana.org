!function(e){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.1.1",settings:{active_class:"active",toggleable:!0},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(i){var r=n(this).closest("["+t.attr_name()+"]"),o=n("#"+this.href.split("#")[1]),a=n("dd > .content",r),s=e("> dd",r),c=r.data(t.attr_name(!0)+"-init"),l=n("dd > .content."+c.active_class,r),u=n("dd."+c.active_class,r);return i.preventDefault(),l[0]==o[0]&&c.toggleable?(u.toggleClass(c.active_class,!1),o.toggleClass(c.active_class,!1)):(a.removeClass(c.active_class),s.removeClass(c.active_class),o.addClass(c.active_class).parent().addClass(c.active_class),void 0)})},off:function(){},reflow:function(){}}}(jQuery,this,this.document);