!function(i,t,s){"use strict";var e,o,n=i.event;e=n.special.debouncedresize={setup:function(){i(this).on("resize",e.handler)},teardown:function(){i(this).off("resize",e.handler)},handler:function(i,t){var s=this,h=arguments,a=function(){i.type="debouncedresize",n.dispatch.apply(s,h)};o&&clearTimeout(o),t?a():o=setTimeout(a,e.threshold)},threshold:50};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";i.fn.imagesLoaded=function(t){function e(){var s=i(l),e=i(u);a&&(u.length?a.reject(d,s,e):a.resolve(d)),i.isFunction(t)&&t.call(n,d,s,e)}function o(t,s){t.src!==h&&-1===i.inArray(t,c)&&(c.push(t),s?u.push(t):l.push(t),i.data(t,"imagesLoaded",{isBroken:s,src:t.src}),r&&a.notifyWith(i(t),[s,d,i(l),i(u)]),d.length===c.length&&(setTimeout(e),d.unbind(".imagesLoaded")))}var n=this,a=i.isFunction(i.Deferred)?i.Deferred():0,r=i.isFunction(a.notify),d=n.find("img").add(n.filter("img")),c=[],l=[],u=[];return i.isPlainObject(t)&&i.each(t,function(i,s){"callback"===i?t=s:a&&a[i](s)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(i){o(i.target,"error"===i.type)}).each(function(t,e){var n=e.src,a=i.data(e,"imagesLoaded");return a&&a.src===n?void o(e,a.isBroken):e.complete&&e.naturalWidth!==s?void o(e,0===e.naturalWidth||0===e.naturalHeight):void((e.readyState||e.complete)&&(e.src=h,e.src=n))}):e(),a?a.promise(n):n};var a=i(t),r=t.Modernizr;i.Slicebox=function(t,s){this.$el=i(s),this._init(t)},i.Slicebox.defaults={orientation:"v",perspective:1200,cuboidsCount:5,cuboidsRandom:!1,maxCuboidsCount:5,disperseFactor:0,colorHiddenSides:"#222",sequentialFactor:150,speed:600,easing:"ease",autoplay:!1,interval:3e3,fallbackFadeSpeed:300,onBeforeChange:function(){return!1},onAfterChange:function(){return!1},onReady:function(){return!1}},i.Slicebox.prototype={_init:function(t){if(this.options=i.extend(!0,{},i.Slicebox.defaults,t),this._validate(),this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,0===this.itemsCount)return!1;this.support=r.csstransitions&&r.csstransforms3d,this.current=0,this.isAnimating=!1,this.isReady=!1;var s=this;this.$el.imagesLoaded(function(){var i=s.$items.eq(s.current).css("display","block").addClass("sb-current"),t=new Image;t.src=i.find("img").attr("src"),s.realWidth=t.width,s._setSize(),s._setStyle(),s._initEvents(),s.options.onReady(),s.isReady=!0,s.options.autoplay&&s._startSlideshow()})},_validate:function(){this.options.cuboidsCount<0?this.options.cuboidsCount=1:this.options.cuboidsCount>15?this.options.cuboidsCount=15:this.options.cuboidsCount%2===0&&++this.options.cuboidsCount,this.options.maxCuboidsCount<0?this.options.maxCuboidsCount=1:this.options.maxCuboidsCount>15?this.options.maxCuboidsCount=15:this.options.maxCuboidsCount%2===0&&++this.options.maxCuboidsCount,this.options.disperseFactor<0&&(this.options.disperseFactor=0),"v"!==this.options.orientation&&"h"!==this.options.orientation&&"r"!==this.options.orientation&&(this.options.orientation="v")},_setSize:function(){var i=this.$items.eq(this.current).find("img");this.size={width:i.width(),height:i.height()}},_setStyle:function(){this.$el.css({"max-width":this.realWidth})},_initEvents:function(){var i=this;a.on("debouncedresize.slicebox",function(){i._setSize()})},_startSlideshow:function(){var i=this;this.slideshow=setTimeout(function(){i._navigate("next"),i.options.autoplay&&i._startSlideshow()},this.options.interval)},_stopSlideshow:function(){this.options.autoplay&&(clearTimeout(this.slideshow),this.isPlaying=!1,this.options.autoplay=!1)},_navigate:function(i,t){return this.isAnimating||!this.isReady||this.itemsCount<2?!1:(this.isAnimating=!0,this.prev=this.current,t!==s?this.current=t:"next"===i?this.current=this.current<this.itemsCount-1?this.current+1:0:"prev"===i&&(this.current=this.current>0?this.current-1:this.itemsCount-1),this.options.onBeforeChange(this.current),void(this.support?(this._layout(i),this._rotate()):this._fade(i)))},_fade:function(){var t=this,s=this.$items.eq(this.prev),e=s.find("img").height();this.$el.css("height",e),this.$items.css("position","absolute"),this.$items.eq(this.current).fadeIn(this.options.fallbackFadeSpeed,function(){i(this).css("display","block").addClass("sb-current"),t.$el.css("height","auto"),t.$items.css("position","relative"),t.isAnimating=!1}),t.$items.eq(t.prev).removeClass("sb-current").fadeOut(this.options.fallbackFadeSpeed)},_layout:function(t){var s=this.options.orientation;"r"===s&&(s=0===Math.floor(2*Math.random())?"v":"h"),this.options.cuboidsRandom&&(this.options.cuboidsCount=Math.floor(Math.random()*this.options.maxCuboidsCount+1)),this._validate();var e={width:this.size.width,height:this.size.height,perspective:this.options.perspective+"px"},o=i.extend(this.options,{size:this.size,items:this.$items,direction:t,prev:this.prev,current:this.current,o:s});this.$box=i("<div>").addClass("sb-perspective").css(e).appendTo(this.$el),this.cuboids=[],this.$el.css("overflow","visible");for(var n=0;n<this.options.cuboidsCount;++n){var h=new i.Cuboid(o,n);this.$box.append(h.getEl()),this.cuboids.push(h)}},_rotate:function(){this.$items.eq(this.prev).removeClass("sb-current").hide();for(var i=0;i<this.options.cuboidsCount;++i){var t=this.cuboids[i],s=this;t.rotate(function(i){if(i===s.options.cuboidsCount-1){s.$el.css("overflow","hidden"),s.isAnimating=!1,s.$box.remove();var t=s.$items.eq(s.current);t.css("display","block"),setTimeout(function(){t.addClass("sb-current")},0),s.options.onAfterChange(s.current)}})}},_destroy:function(i){this.$el.off(".slicebox").removeData("slicebox"),a.off(".slicebox"),i.call()},add:function(i,t){this.$items=this.$items.add(i),this.itemsCount=this.$items.length,t&&t.call(i)},next:function(){this._stopSlideshow(),this._navigate("next")},previous:function(){this._stopSlideshow(),this._navigate("prev")},jump:function(i){return i-=1,i===this.current||i>=this.itemsCount||0>i?!1:(this._stopSlideshow(),void this._navigate(i>this.current?"next":"prev",i))},play:function(){this.isPlaying||(this.isPlaying=!0,this._navigate("next"),this.options.autoplay=!0,this._startSlideshow())},pause:function(){this.isPlaying&&this._stopSlideshow()},isActive:function(){return this.isAnimating},destroy:function(i){this._destroy(i)}},i.Cuboid=function(i,t){this.config=i,this.pos=t,this.side=1,this._setSize(),this._configureStyles()},i.Cuboid.prototype={_setSize:function(){this.size={width:"v"===this.config.o?Math.floor(this.config.size.width/this.config.cuboidsCount):this.config.size.width,height:"v"===this.config.o?this.config.size.height:Math.floor(this.config.size.height/this.config.cuboidsCount)},this.extra="v"===this.config.o?this.config.size.width-this.size.width*this.config.cuboidsCount:this.config.size.height-this.size.height*this.config.cuboidsCount},_configureStyles:function(){var t=Math.ceil(this.config.cuboidsCount/2),s=this.pos<t?{zIndex:100*(this.pos+1),left:"v"===this.config.o?this.size.width*this.pos:0,top:"v"===this.config.o?0:this.size.height*this.pos}:{zIndex:100*(this.config.cuboidsCount-this.pos),left:"v"===this.config.o?this.size.width*this.pos:0,top:"v"===this.config.o?0:this.size.height*this.pos};this.disperseFactor=this.config.disperseFactor*(this.pos+1-t),this.style=i.extend({"-webkit-transition":"-webkit-transform "+this.config.speed+"ms "+this.config.easing,"-moz-transition":"-moz-transform "+this.config.speed+"ms "+this.config.easing,"-o-transition":"-o-transform "+this.config.speed+"ms "+this.config.easing,"-ms-transition":"-ms-transform "+this.config.speed+"ms "+this.config.easing,transition:"transform "+this.config.speed+"ms "+this.config.easing},s,this.size),this.animationStyles={side1:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px )"},side2:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -90deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -90deg )"},side3:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -180deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -180deg )"},side4:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -270deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -270deg )"}};var e="v"===this.config.o?this.size.height:this.size.width;this.sidesStyles={frontSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 0deg ) translate3d( 0, 0, "+e/2+"px )"},backSideStyle:{width:this.size.width,height:this.size.height,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 180deg ) translate3d( 0, 0, "+e/2+"px ) rotateZ( 180deg )"},rightSideStyle:{width:e,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,left:"v"===this.config.o?this.size.width/2-this.size.height/2:0,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 90deg ) translate3d( 0, 0, "+this.size.width/2+"px )"},leftSideStyle:{width:e,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,left:"v"===this.config.o?this.size.width/2-this.size.height/2:0,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, -90deg ) translate3d( 0, 0, "+this.size.width/2+"px )"},topSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:e,top:"v"===this.config.o?0:this.size.height/2-this.size.width/2,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 1, 0, 0, 90deg ) translate3d( 0, 0, "+this.size.height/2+"px )"},bottomSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:e,top:"v"===this.config.o?0:this.size.height/2-this.size.width/2,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 1, 0, 0, -90deg ) translate3d( 0, 0, "+this.size.height/2+"px )"}}},getEl:function(){return this.$el=i("<div/>").css(this.style).css(this.animationStyles.side1).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.frontSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.backSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.rightSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.leftSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.topSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.bottomSideStyle)),this._showImage(this.config.prev),this.$el},_showImage:function(i){var t,s=this.config.items.eq(i),e={"background-size":this.config.size.width+"px "+this.config.size.height+"px"};switch(e.backgroundImage="url("+s.find("img").attr("src")+")",this.side){case 1:t=0;break;case 2:t="v"===this.config.o?4:2;break;case 3:t=1;break;case 4:t="v"===this.config.o?5:3}e.backgroundPosition="v"===this.config.o?-(this.pos*this.size.width)+"px 0px":"0px -"+this.pos*this.size.height+"px",this.$el.children().eq(t).css(e)},rotate:function(i){var t,s=this;setTimeout(function(){if("next"===s.config.direction)switch(s.side){case 1:t=s.animationStyles.side2,s.side=2;break;case 2:t=s.animationStyles.side3,s.side=3;break;case 3:t=s.animationStyles.side4,s.side=4;break;case 4:t=s.animationStyles.side1,s.side=1}else switch(s.side){case 1:t=s.animationStyles.side4,s.side=4;break;case 2:t=s.animationStyles.side1,s.side=1;break;case 3:t=s.animationStyles.side2,s.side=2;break;case 4:t=s.animationStyles.side3,s.side=3}s._showImage(s.config.current);var e={},o={};"v"===s.config.o?(e.left="+="+s.disperseFactor+"px",o.left="-="+s.disperseFactor+"px"):"h"===s.config.o&&(e.top="+="+s.disperseFactor+"px",o.top="-="+s.disperseFactor+"px"),s.$el.css(t).animate(e,s.config.speed/2).animate(o,s.config.speed/2,function(){i&&i.call(s,s.pos)})},this.config.sequentialFactor*this.pos+30)}};var d=function(i){t.console&&t.console.error(i)};i.fn.slicebox=function(t){var s=i.data(this,"slicebox");if("string"==typeof t){var e=Array.prototype.slice.call(arguments,1);this.each(function(){return s?i.isFunction(s[t])&&"_"!==t.charAt(0)?void s[t].apply(s,e):void d("no such method '"+t+"' for slicebox self"):void d("cannot call methods on slicebox prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){s?s._init():s=i.data(this,"slicebox",new i.Slicebox(t,this))});return s}}(jQuery,window);