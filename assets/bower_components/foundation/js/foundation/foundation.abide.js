!function(t,e,n){"use strict";Foundation.libs.abide={name:"abide",version:"5.4.7",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t){var e=n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,i=t.value,r=e===i;return r}}},timer:null,init:function(t,e,n){this.bindings(e,n)},events:function(e){var n=this,i=n.S(e).attr("novalidate","novalidate"),r=i.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),i.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(t){var e=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").get(),t,e)}).on("reset",function(){return n.reset(t(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(t){n.validate([this],t)}).on("keydown.fndtn.abide",function(t){r.live_validate===!0&&(clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],t)}.bind(this),r.timeout))})},reset:function(e){e.removeAttr(this.invalid_attr),t(this.invalid_attr,e).removeAttr(this.invalid_attr),t("."+this.settings.error_class,e).not("small").removeClass(this.settings.error_class)},validate:function(t,e,n){for(var i=this.parse_patterns(t),r=i.length,o=this.S(t[0]).closest("form"),s=/submit/.test(e.type),a=0;r>a;a++)if(!i[a]&&(s||n))return this.settings.focus_on_invalid&&t[a].focus(),o.trigger("invalid"),this.S(t[a]).closest("form").attr(this.invalid_attr,""),!1;return(s||n)&&o.trigger("valid"),o.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(t){for(var e=t.length,n=[];e--;)n.push(this.pattern(t[e]));return this.check_validation_and_apply_styles(n)},pattern:function(t){var e=t.getAttribute("type"),n="string"==typeof t.getAttribute("required"),i=t.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(i)&&i.length>0?[t,this.settings.patterns[i],n]:i.length>0?[t,new RegExp(i),n]:this.settings.patterns.hasOwnProperty(e)?[t,this.settings.patterns[e],n]:(i=/.*/,[t,i,n])},check_validation_and_apply_styles:function(e){var n=e.length,i=[],r=this.S(e[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(r.data(this.attr_name(!0)+"-init")||{};n--;){var o,s,a=e[n][0],l=e[n][2],c=a.value.trim(),u=this.S(a).parent(),d=a.getAttribute(this.add_namespace("data-abide-validator")),f="radio"===a.type,p="checkbox"===a.type,h=this.S('label[for="'+a.getAttribute("id")+'"]'),m=l?a.value.length>0:!0,g=[];if(a.getAttribute(this.add_namespace("data-equalto"))&&(d="equalTo"),o=u.is("label")?u.parent():u,d&&(s=this.settings.validators[d].apply(this,[a,l,o]),g.push(s)),f&&l)g.push(this.valid_radio(a,l));else if(p&&l)g.push(this.valid_checkbox(a,l));else if(e[n][1].test(c)&&m||!l&&a.value.length<1||t(a).attr("disabled")?g.push(!0):g.push(!1),g=[g.every(function(t){return t})],g[0])this.S(a).removeAttr(this.invalid_attr),a.setAttribute("aria-invalid","false"),a.removeAttribute("aria-describedby"),o.removeClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),t(a).triggerHandler("valid");else{this.S(a).attr(this.invalid_attr,""),a.setAttribute("aria-invalid","true");var v=o.find("small."+this.settings.error_class,"span."+this.settings.error_class),y=v.length>0?v[0].id:"";y.length>0&&a.setAttribute("aria-describedby",y),o.addClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),t(a).triggerHandler("invalid")}i.push(g[0])}return i=[i.every(function(t){return t})]},valid_checkbox:function(t,e){var t=this.S(t),n=t.is(":checked")||!e;return n?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),n},valid_radio:function(t){for(var e=t.getAttribute("name"),n=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+e+"']"),i=n.length,r=!1,o=0;i>o;o++)n[o].checked&&(r=!0);for(var o=0;i>o;o++)r?this.S(n[o]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):this.S(n[o]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class);return r},valid_equal:function(t,e,i){var r=n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,o=t.value,s=r===o;return s?(this.S(t).removeAttr(this.invalid_attr),i.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(t).attr(this.invalid_attr,""),i.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),s},valid_oneof:function(t,e,n,i){var t=this.S(t),r=this.S("["+this.add_namespace("data-oneof")+"]"),o=r.filter(":checked").length>0;if(o?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!i){var s=this;r.each(function(){s.valid_oneof.call(s,this,null,null,!0)})}return o}}}(jQuery,window,window.document);