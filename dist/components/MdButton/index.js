!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})(this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=402)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var u,a,s,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(u=e,f=e.default),a="function"==typeof f?f.options:f,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=s):r&&(s=r),s&&(l=a.functional,c=l?a.render:a.beforeCreate,l?(a._injectStyles=s,a.render=function(e,t){return s.call(t),c(e,t)}):a.beforeCreate=c?[].concat(c,s):[s]),{esModule:u,exports:f,options:a}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,a.default)(t,e)},o=n(4),i=r(o),u=n(6),a=r(u)},12:function(e,t,n){(function(t){var r,o,i,u,a,s=n(15),l="undefined"==typeof window?t:window,c=["moz","webkit"],f="AnimationFrame",d=l["request"+f],p=l["cancel"+f]||l["cancelRequest"+f];for(r=0;!d&&r<c.length;r++)d=l[c[r]+"Request"+f],p=l[c[r]+"Cancel"+f]||l[c[r]+"CancelRequest"+f];d&&p||(o=0,i=0,u=[],a=1e3/60,d=function(e){if(0===u.length){var t=s(),n=Math.max(0,a-(t-o));o=n+t,setTimeout((function(){var e,t=u.slice(0);for(u.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return u.push({handle:++i,callback:e,cancelled:!1}),i},p=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}),e.exports=function(e){return d.call(l,e)},e.exports.cancel=function(){p.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=d,e.cancelAnimationFrame=p}}).call(t,n(13))},13:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){"use strict";function r(e){n(17)}var o,i,u,a,s,l,c,f,d,p,m,h;Object.defineProperty(t,"__esModule",{value:!0}),o=n(18),i=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-ripple",class:e.rippleClasses,on:{"&touchstart":function(t){t.stopPropagation(),e.touchStartCheck(t)},"&touchmove":function(t){t.stopPropagation(),e.touchMoveCheck(t)},"&mousedown":function(t){t.stopPropagation(),e.startRipple(t)}}},[e._t("default"),e._v(" "),e.isDisabled?e._e():n("transition",{attrs:{name:"md-ripple"},on:{"after-enter":e.clearWave}},[e.animating?n("span",{ref:"rippleWave",staticClass:"md-ripple-wave",class:e.waveClasses,style:e.waveStyles}):e._e()])],2)},a=[],s={render:u,staticRenderFns:a},l=s,c=n(0),f=!1,d=r,p=null,m=null,h=c(i.a,l,f,d,p,m),t.default=h.exports},147:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),u=n(28),a=r(u),t.default=function(e){(0,i.default)(e),e.component(a.default.name,a.default)}},15:function(e,t,n){(function(t){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),a=1e9*t.uptime(),u=i-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(16))},16:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){p&&m&&(p=!1,m.length?d=m.concat(d):h=-1,d.length&&a())}function a(){var e,t;if(!p){for(e=o(u),p=!0,t=d.length;t;){for(m=d,d=[];++h<t;)m&&m[h].run();h=-1,t=d.length}m=null,p=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,d,p,m,h,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}})(),d=[],p=!1,h=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new s(e,n)),1!==d.length||p||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},17:function(e,t){},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){var u,a;try{u=t[o](i),a=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(a).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(a)}return r("next")})}}var i,u,a,s,l;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(12),a=r(u),s=n(1),l=r(s),t.default=new l.default({name:"MdRipple",props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean},data:function(){return{eventType:null,waveStyles:null,animating:!1,touchTimeout:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n="mouseevent"===e.constructor.name.toLowerCase();t&&this.mdCentered&&e?(this.startRipple({type:"mousedown"}),this.$emit("update:mdActive",!1)):n&&(this.startRipple(e),this.$emit("update:mdActive",!1))}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,a.default)(o(regeneratorRuntime.mark((function n(){var r,o,i,u,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.eventType,o=t.isDisabled,i=t.mdCentered,o||r&&r!==e.type){n.next=10;break}return u=t.getSize(),a=null,a=i?t.getCenteredPosition(u):t.getHitPosition(e,u),n.next=7,t.clearWave();case 7:t.eventType=e.type,t.animating=!0,t.applyStyles(a,u);case 10:case"end":return n.stop()}}),n,t)}))))},applyStyles:function(e,t){t+="px",this.waveStyles=i({},e,{width:t,height:t})},clearWave:function(){return this.waveStyles=null,this.animating=!1,this.$nextTick()},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,o=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,o=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:o-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},2:function(t,n){t.exports=e},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},t,e.$options.components["router-link"].options.props)}},27:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(14),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={components:{MdRipple:o.default},props:{mdRipple:{type:Boolean,default:!0}}}},28:function(e,t,n){"use strict";function r(e){n(32)}var o,i,u,a,s,l,c,f,d;Object.defineProperty(t,"__esModule",{value:!0}),o=n(33),i=n.n(o),u=n(0),a=null,s=!1,l=r,c=null,f=null,d=u(i.a,a,s,l,c,f),t.default=d.exports},29:function(e,t,n){"use strict";function r(){try{var e=Object.defineProperty({},"passive",{get:function(){v={passive:!0}}});window.addEventListener("ghost",null,e)}catch(e){}}function o(e){var t=(e.keyCode,e.target);y.currentElement=t}function i(e){y.currentElement=null}function u(){h.addEventListener("keyup",o)}function a(){h.addEventListener("pointerup",i)}function s(){h.addEventListener("MSPointerUp",i)}function l(){h.addEventListener("mouseup",i),"ontouchend"in window&&h.addEventListener("touchend",i,v)}function c(){window.PointerEvent?a():window.MSPointerEvent?s():l(),u()}function f(){m||(h=document.body,r(),c(),m=!0)}var d,p,m,h,v,y;Object.defineProperty(t,"__esModule",{value:!0}),d=n(5),p=(function(e){return e&&e.__esModule?e:{default:e}})(d),m=!1,h=null,v=!1,y=new p.default({currentElement:null}),t.default={data:function(){return{mdHasFocus:!1}},computed:{focusedElement:function(){return y.currentElement}},watch:{focusedElement:function(e){this.mdHasFocus=e===this.$el}},mounted:function(){f()}}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),u=n(4),a=r(u),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"]}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},32:function(e,t){},33:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a,s,l,c,f,d,p,m;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),a=n(29),s=r(a),l=n(27),c=r(l),f=n(20),d=r(f),p=n(34),m=r(p),t.default=new u.default({name:"MdButton",components:{MdButtonContent:m.default},mixins:[c.default,s.default],props:{href:String,type:{type:String,default:"button"},disabled:Boolean,to:null},render:function(e){var t=e("md-button-content",{attrs:{mdRipple:this.mdRipple,disabled:this.disabled}},this.$slots.default),n={staticClass:"md-button",class:[this.$mdActiveTheme,{"md-ripple-off":!this.mdRipple,"md-focused":this.mdHasFocus}],attrs:o({},this.attrs,{href:this.href,disabled:this.disabled,type:!this.href&&(this.type||"button")}),on:this.$listeners},r="button";return this.href?r="a":this.$router&&this.to&&(this.$options.props=(0,d.default)(this,this.$options.props),r="router-link",n.props=this.$props,delete n.props.type,delete n.attrs.type,delete n.props.href,delete n.attrs.href),e(r,n,[t])}})},34:function(e,t,n){"use strict";function r(e){n(35)}var o,i,u,a,s,l,c,f,d,p,m,h;Object.defineProperty(t,"__esModule",{value:!0}),o=n(36),i=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-ripple",{attrs:{"md-disabled":!e.mdRipple||e.disabled}},[n("div",{staticClass:"md-button-content"},[e._t("default")],2)])},a=[],s={render:u,staticRenderFns:a},l=s,c=n(0),f=!1,d=r,p=null,m=null,h=c(i.a,l,f,d,p,m),t.default=h.exports},35:function(e,t){},36:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(14),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdButtonContent",components:{MdRipple:o.default},props:{mdRipple:Boolean,disabled:Boolean}}},4:function(e,t,n){"use strict";var r,o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,u=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},402:function(e,t,n){e.exports=n(147)},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===p}function u(e){return Array.isArray(e)?[]:{}}function a(e,t){return t&&!1===t.clone||!f(e)?e:c(u(e),e,t)}function s(e,t,n){return e.concat(t).map((function(e){return a(e,n)}))}function l(e,t,n){var r={};return f(e)&&Object.keys(e).forEach((function(t){r[t]=a(e[t],n)})),Object.keys(t).forEach((function(o){f(t[o])&&e[o]?r[o]=c(e[o],t[o],n):r[o]=a(t[o],n)})),r}function c(e,t,n){var r=Array.isArray(t),o=Array.isArray(e),i=n||{arrayMerge:s};return r===o?r?(i.arrayMerge||s)(e,t,n):l(e,t,n):a(t,n)}var f,d,p,m;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,p=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})},m=c,t.default=m},7:function(e,t){}})}));