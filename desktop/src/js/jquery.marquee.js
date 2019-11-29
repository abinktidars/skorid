!function(a){a.fn.marquee=function(b){return this.each(function(){var e,f,g,h,i,c=a.extend({},a.fn.marquee.defaults,b),d=a(this),j=3,k="animation-play-state",l=!1,m=function(a,b,c){for(var d=["webkit","moz","MS","o",""],e=0;e<d.length;e++)d[e]||(b=b.toLowerCase()),a.addEventListener(d[e]+b,c,!1)},n=function(a){var c,b=[];for(c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);return b.push(),"{"+b.join(",")+"}"},o={pause:function(){l&&c.allowCss3Support?e.css(k,"paused"):a.fn.pause&&e.pause(),d.data("runningStatus","paused"),d.trigger("paused")},resume:function(){l&&c.allowCss3Support?e.css(k,"running"):a.fn.resume&&e.resume(),d.data("runningStatus","resumed"),d.trigger("resumed")},toggle:function(){o["resumed"==d.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(d.timer),d.css("visibility","hidden").html(d.find(".js-marquee:first")),setTimeout(function(){d.css("visibility","visible")},0)}};if("string"==typeof b)a.isFunction(o[b])&&(e||(e=d.find(".js-marquee-wrapper")),!0===d.data("css3AnimationIsSupported")&&(l=!0),o[b]());else{var p;a.each(c,function(a,b){if(void 0!==(p=d.attr("data-"+a))){switch(p){case"true":p=!0;break;case"false":p=!1}c[a]=p}}),c.duration=c.speed||c.duration,h="up"==c.direction||"down"==c.direction,c.gap=c.duplicated?c.gap:0,d.wrapInner('<div class="js-marquee"></div>');var q=d.find(".js-marquee").css({"margin-right":c.gap,float:"left"});if(c.duplicated&&q.clone(!0).appendTo(d),d.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),e=d.find(".js-marquee-wrapper"),h){var r=d.height();e.removeAttr("style"),d.height(r),d.find(".js-marquee").css({float:"none","margin-bottom":c.gap,"margin-right":0}),c.duplicated&&d.find(".js-marquee:last").css({"margin-bottom":0});var s=d.find(".js-marquee:first").height()+c.gap;c.duration*=(parseInt(s,10)+parseInt(r,10))/parseInt(r,10)}else i=d.find(".js-marquee:first").width()+c.gap,f=d.width(),c.duration*=(parseInt(i,10)+parseInt(f,10))/parseInt(f,10);if(c.duplicated&&(c.duration/=2),c.allowCss3Support){var q=document.body||document.createElement("div"),t="marqueeAnimation-"+Math.floor(1e7*Math.random()),u=["Webkit","Moz","O","ms","Khtml"],v="animation",w="",x="";if(q.style.animation&&(x="@keyframes "+t+" ",l=!0),!1===l)for(var y=0;y<u.length;y++)if(void 0!==q.style[u[y]+"AnimationName"]){q="-"+u[y].toLowerCase()+"-",v=q+v,k=q+k,x="@"+q+"keyframes "+t+" ",l=!0;break}l&&(w=t+" "+c.duration/1e3+"s "+c.delayBeforeStart/1e3+"s infinite "+c.css3easing,d.data("css3AnimationIsSupported",!0))}var z=function(){e.css("margin-top","up"==c.direction?r+"px":"-"+s+"px")},A=function(){e.css("margin-left","left"==c.direction?f+"px":"-"+i+"px")};c.duplicated?(h?e.css("margin-top","up"==c.direction?r:"-"+(2*s-c.gap)+"px"):e.css("margin-left","left"==c.direction?f+"px":"-"+(2*i-c.gap)+"px"),j=1):h?z():A();var B=function(){if(c.duplicated&&(1===j?(c._originalDuration=c.duration,c.duration=h?"up"==c.direction?c.duration+r/(s/c.duration):2*c.duration:"left"==c.direction?c.duration+f/(i/c.duration):2*c.duration,w&&(w=t+" "+c.duration/1e3+"s "+c.delayBeforeStart/1e3+"s "+c.css3easing),j++):2===j&&(c.duration=c._originalDuration,w&&(t+="0",x=a.trim(x)+"0 ",w=t+" "+c.duration/1e3+"s 0s infinite "+c.css3easing),j++)),h?c.duplicated?(2<j&&e.css("margin-top","up"==c.direction?0:"-"+s+"px"),g={"margin-top":"up"==c.direction?"-"+s+"px":0}):(z(),g={"margin-top":"up"==c.direction?"-"+e.height()+"px":r+"px"}):c.duplicated?(2<j&&e.css("margin-left","left"==c.direction?0:"-"+i+"px"),g={"margin-left":"left"==c.direction?"-"+i+"px":0}):(A(),g={"margin-left":"left"==c.direction?"-"+i+"px":f+"px"}),d.trigger("beforeStarting"),l){e.css(v,w);var b=x+" { 100%  "+n(g)+"}",k=a("style");0!==k.length?k.filter(":last").append(b):a("head").append("<style>"+b+"</style>"),m(e[0],"AnimationIteration",function(){d.trigger("finished")}),m(e[0],"AnimationEnd",function(){B(),d.trigger("finished")})}else e.animate(g,c.duration,c.easing,function(){d.trigger("finished"),c.pauseOnCycle?d.timer=setTimeout(B,c.delayBeforeStart):B()});d.data("runningStatus","resumed")};d.bind("pause",o.pause),d.bind("resume",o.resume),c.pauseOnHover&&d.bind("mouseenter mouseleave",o.toggle),l&&c.allowCss3Support?B():d.timer=setTimeout(B,c.delayBeforeStart)}})},a.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}}(jQuery),function(){function f(){return(new Date).getTime()}var a=jQuery,b="jQuery.pause",c=1,d=a.fn.animate,e={};a.fn.animate=function(g,h,i,j){var k=a.speed(h,i,j);return k.complete=k.old,this.each(function(){this[b]||(this[b]=c++);var h=a.extend({},k);d.apply(a(this),[g,a.extend({},h)]),e[this[b]]={run:!0,prop:g,opt:h,start:f(),done:0}})},a.fn.pause=function(){return this.each(function(){this[b]||(this[b]=c++);var d=e[this[b]];d&&d.run&&(d.done+=f()-d.start,d.done>d.opt.duration?delete e[this[b]]:(a(this).stop(),d.run=!1))})},a.fn.resume=function(){return this.each(function(){this[b]||(this[b]=c++);var g=e[this[b]];g&&!g.run&&(g.opt.duration-=g.done,g.done=0,g.run=!0,g.start=f(),d.apply(a(this),[g.prop,a.extend({},g.opt)]))})}}();