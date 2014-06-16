!function(e,t,n,i){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.1.1",defaults:{expose:!1,modal:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(e,t,n){Foundation.inherit(this,"throttle random_str"),this.settings=this.defaults,this.bindings(t,n)},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end()}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1,!0)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),i=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],r=i.length;!n.length>0||(this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,"function"!=typeof e.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(n){var o=e(this);this.settings=e.extend({},t.defaults,t.data_options(o));for(var s=r;s--;)t.settings[i[s]]=parseInt(t.settings[i[s]],10);t.create({$li:o,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,i;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),i=e.trim(e(t.li).html())+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(i),n[0]},timer_instance:function(t){var n;return n=0===t&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":e(this.settings.template.timer)[0].outerHTML},button_text:function(t){return this.settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},create:function(t){console.log(t.$li);var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),i=t.$li.attr("class"),r=e(this.tip_template({tip_class:i,index:t.index,button_text:n,li:t.$li}));e(this.settings.tip_container).append(r)},show:function(t){var n=null;this.settings.$li===i||-1===e.inArray(this.settings.$li.index(),this.settings.pause_after)?(this.settings.paused?this.settings.paused=!1:this.set_li(t),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fadeSpeed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){console.log(this.add_namespace("data-class"));var t=this.settings.$li.attr(this.add_namespace("data-class")),i=this.settings.$li.attr(this.add_namespace("data-id")),r=function(){return i?e(n.getElementById(i)):t?e("."+t).first():e("body")};console.log(t,i),this.settings.$target=r()},scroll_to:function(){var n,i;n=e(t).height()/2,i=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),0!=i&&e("html, body").animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return-1===e.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=i,this.show("init")},pos_default:function(n,i){var r=(Math.ceil(e(t).height()/2),this.settings.$next_tip.offset(),this.settings.$next_tip.find(".joyride-nub")),o=Math.ceil(r.outerWidth()/2),s=Math.ceil(r.outerHeight()/2),a=n||!1;a&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),"undefined"==typeof i&&(i=!1),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(r):(this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left}),this.nub_position(r,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s,left:this.settings.$target.offset().left}),this.nub_position(r,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.outerWidth(this.settings.$target)+this.settings.$target.offset().left+o}),this.nub_position(r,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.offset().left-this.outerWidth(this.settings.$next_tip)-o}),this.nub_position(r,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())),a&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),i=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),r=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(r.outerHeight()/2),s=t||!1;r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(r):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),r.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),r.addClass("top")),s&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,i,r,o,s,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}return r.length<1?(t.console&&console.error("element not valid",r),!1):(n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),i=e(this.settings.template.expose_cover),o={zIndex:r.css("z-index"),position:r.css("position")},s=null==r.attr("class")?"":r.attr("class"),r.css("z-index",parseInt(n.css("z-index"))+1),"static"==o.position&&r.css("position","relative"),r.data("expose-css",o),r.data("orig-class",s),r.attr("class",s+" "+this.settings.expose_add_class),i.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(i),n.addClass(a),i.addClass(a),r.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,r),this.add_exposed(r),void 0)},un_expose:function(){var n,i,r,o,s,a=!1;if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}return i.length<1?(t.console&&console.error("element not valid",i),!1):(n=i.data("expose"),r=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():r.remove(),o=i.data("expose-css"),"auto"==o.zIndex?i.css("z-index",""):i.css("z-index",o.zIndex),o.position!=i.css("position")&&("static"==o.position?i.css("position",""):i.css("position",o.position)),s=i.data("orig-class"),i.attr("class",s),i.removeData("orig-classes"),i.removeData("expose"),i.removeData("expose-z-index"),this.remove_exposed(i),void 0)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||"object"==typeof t?this.settings.exposed.push(t[0]):"string"==typeof t&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,i;for(t instanceof e?n=t[0]:"string"==typeof t&&(n=t),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==n)return this.settings.exposed.splice(i,1),void 0},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var i=e(t),r=i.height()/2,o=Math.ceil(this.settings.$target.offset().top-r+this.settings.$next_tip.outerHeight()),s=i.width()+i.scrollLeft(),a=i.height()+o,l=i.height()+i.scrollTop(),c=i.scrollTop();return c>o&&(c=0>o?0:o),a>l&&(l=a),[n.offset().top<c,s<n.offset().left+n.outerWidth(),l<n.offset().top+n.outerHeight(),i.scrollLeft()>n.offset().left]},visible:function(e){for(var t=e.length;t--;)if(e[t])return!1;return!0},nub_position:function(e,t,n){"auto"===t?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,this,this.document);