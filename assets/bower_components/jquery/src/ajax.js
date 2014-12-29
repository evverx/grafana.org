define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(t,e,n,i){function r(n){return function(i,r){"string"!=typeof i&&(r=i,i="*");var o,s=0,a=i.toLowerCase().match(e)||[];if(t.isFunction(r))for(;o=a[s++];)"+"===o[0]?(o=o.slice(1)||"*",(n[o]=n[o]||[]).unshift(r)):(n[o]=n[o]||[]).push(r)}}function o(e,n,i,r){function o(l){var c;return s[l]=!0,t.each(e[l]||[],function(t,e){var l=e(n,i,r);return"string"!=typeof l||a||s[l]?a?!(c=l):void 0:(n.dataTypes.unshift(l),o(l),!1)}),c}var s={},a=e===b;return o(n.dataTypes[0])||!s["*"]&&o("*")}function s(e,n){var i,r,o=t.ajaxSettings.flatOptions||{};for(i in n)void 0!==n[i]&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&t.extend(!0,e,r),e}function a(t,e,n){for(var i,r,o,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||t.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function l(t,e,n,i){var r,o,s,a,l,c={},u=t.dataTypes.slice();if(u[1])for(s in t.converters)c[s.toLowerCase()]=t.converters[s];for(o=u.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(s=c[l+" "+o]||c["* "+o],!s)for(r in c)if(a=r.split(" "),a[1]===o&&(s=c[l+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[r]:c[r]!==!0&&(o=a[0],u.unshift(a[1]));break}if(s!==!0)if(s&&t["throws"])e=s(e);else try{e=s(e)}catch(d){return{state:"parsererror",error:s?d:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}var c,u,d=/#.*$/,f=/([?&])_=[^&]*/,p=/^(.*?):[ \t]*([^\r\n]*)$/gm,h=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,m=/^(?:GET|HEAD)$/,g=/^\/\//,v=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,y={},b={},x="*/".concat("*");try{u=location.href}catch(_){u=document.createElement("a"),u.href="",u=u.href}return c=v.exec(u.toLowerCase())||[],t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:u,type:"GET",isLocal:h.test(c[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":x,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":t.parseJSON,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?s(s(e,t.ajaxSettings),n):s(t.ajaxSettings,e)},ajaxPrefilter:r(y),ajaxTransport:r(b),ajax:function(r,s){function h(e,n,i,r){var o,s,c,u,d,f=n;2!==O&&(O=2,k&&clearTimeout(k),_=void 0,C=r||"",P.readyState=e>0?4:0,o=e>=200&&300>e||304===e,i&&(u=a(N,P,i)),u=l(N,u,P,o),o?(N.ifModified&&(d=P.getResponseHeader("Last-Modified"),d&&(t.lastModified[w]=d),d=P.getResponseHeader("etag"),d&&(t.etag[w]=d)),204===e||"HEAD"===N.type?f="nocontent":304===e?f="notmodified":(f=u.state,s=u.data,c=u.error,o=!c)):(c=f,(e||!f)&&(f="error",0>e&&(e=0))),P.status=e,P.statusText=(n||f)+"",o?D.resolveWith(j,[s,f,P]):D.rejectWith(j,[P,f,c]),P.statusCode(q),q=void 0,E&&F.trigger(o?"ajaxSuccess":"ajaxError",[P,N,o?s:c]),M.fireWith(j,[P,f]),E&&(F.trigger("ajaxComplete",[P,N]),--t.active||t.event.trigger("ajaxStop")))}"object"==typeof r&&(s=r,r=void 0),s=s||{};var _,w,C,T,k,S,E,A,N=t.ajaxSetup({},s),j=N.context||N,F=N.context&&(j.nodeType||j.jquery)?t(j):t.event,D=t.Deferred(),M=t.Callbacks("once memory"),q=N.statusCode||{},L={},$={},O=0,z="canceled",P={readyState:0,getResponseHeader:function(t){var e;if(2===O){if(!T)for(T={};e=p.exec(C);)T[e[1].toLowerCase()]=e[2];e=T[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===O?C:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return O||(t=$[n]=$[n]||t,L[t]=e),this},overrideMimeType:function(t){return O||(N.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>O)for(e in t)q[e]=[q[e],t[e]];else P.always(t[P.status]);return this},abort:function(t){var e=t||z;return _&&_.abort(e),h(0,e),this}};if(D.promise(P).complete=M.add,P.success=P.done,P.error=P.fail,N.url=((r||N.url||u)+"").replace(d,"").replace(g,c[1]+"//"),N.type=s.method||s.type||N.method||N.type,N.dataTypes=t.trim(N.dataType||"*").toLowerCase().match(e)||[""],null==N.crossDomain&&(S=v.exec(N.url.toLowerCase()),N.crossDomain=!(!S||S[1]===c[1]&&S[2]===c[2]&&(S[3]||("http:"===S[1]?"80":"443"))===(c[3]||("http:"===c[1]?"80":"443")))),N.data&&N.processData&&"string"!=typeof N.data&&(N.data=t.param(N.data,N.traditional)),o(y,N,s,P),2===O)return P;E=N.global,E&&0===t.active++&&t.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!m.test(N.type),w=N.url,N.hasContent||(N.data&&(w=N.url+=(i.test(w)?"&":"?")+N.data,delete N.data),N.cache===!1&&(N.url=f.test(w)?w.replace(f,"$1_="+n++):w+(i.test(w)?"&":"?")+"_="+n++)),N.ifModified&&(t.lastModified[w]&&P.setRequestHeader("If-Modified-Since",t.lastModified[w]),t.etag[w]&&P.setRequestHeader("If-None-Match",t.etag[w])),(N.data&&N.hasContent&&N.contentType!==!1||s.contentType)&&P.setRequestHeader("Content-Type",N.contentType),P.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+("*"!==N.dataTypes[0]?", "+x+"; q=0.01":""):N.accepts["*"]);for(A in N.headers)P.setRequestHeader(A,N.headers[A]);if(N.beforeSend&&(N.beforeSend.call(j,P,N)===!1||2===O))return P.abort();z="abort";for(A in{success:1,error:1,complete:1})P[A](N[A]);if(_=o(b,N,s,P)){P.readyState=1,E&&F.trigger("ajaxSend",[P,N]),N.async&&N.timeout>0&&(k=setTimeout(function(){P.abort("timeout")},N.timeout));try{O=1,_.send(L,h)}catch(H){if(!(2>O))throw H;h(-1,H)}}else h(-1,"No Transport");return P},getJSON:function(e,n,i){return t.get(e,n,i,"json")},getScript:function(e,n){return t.get(e,void 0,n,"script")}}),t.each(["get","post"],function(e,n){t[n]=function(e,i,r,o){return t.isFunction(i)&&(o=o||r,r=i,i=void 0),t.ajax({url:e,type:n,dataType:o,data:i,success:r})}}),t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){t.fn[n]=function(t){return this.on(n,t)}}),t});