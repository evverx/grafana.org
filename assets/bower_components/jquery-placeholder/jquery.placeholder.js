!function(e,t,n){function i(e){var t={},i=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!i.test(n.name)&&(t[n.name]=n.value)}),t}function r(e,t){var i=this,r=n(i);if(i.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().next().show().attr("id",r.removeAttr("id").data("placeholder-id")),e===!0)return r[0].value=t;r.focus()}else i.value="",r.removeClass("placeholder"),i==a()&&i.select()}function o(){var e,t=this,o=n(t),a=this.id;if(""==t.value){if("password"==t.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(i(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":o,"placeholder-id":a}).bind("focus.placeholder",r),o.data({"placeholder-textinput":e,"placeholder-id":a}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}function a(){try{return t.activeElement}catch(e){}}var s,c,l="[object OperaMini]"==Object.prototype.toString.call(e.operamini),u="placeholder"in t.createElement("input")&&!l,d="placeholder"in t.createElement("textarea")&&!l,f=n.fn,p=n.valHooks,h=n.propHooks;u&&d?(c=f.placeholder=function(){return this},c.input=c.textarea=!0):(c=f.placeholder=function(){var e=this;return e.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},c.input=u,c.textarea=d,s={get:function(e){var t=n(e),i=t.data("placeholder-password");return i?i[0].value:t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var i=n(e),s=i.data("placeholder-password");return s?s[0].value=t:i.data("placeholder-enabled")?(""==t?(e.value=t,e!=a()&&o.call(e)):i.hasClass("placeholder")?r.call(e,!0,t)||(e.value=t):e.value=t,i):e.value=t}},u||(p.input=s,h.value=s),d||(p.textarea=s,h.value=s),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(r);setTimeout(function(){e.each(o)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);