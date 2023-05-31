!(function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}})(this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=428)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var a,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:u,options:c}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,u.default)(t,e)};var o=n(4),i=r(o),a=n(6),u=r(a)},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};t.default=r},12:function(e,t,n){(function(t){for(var r=n(15),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",u=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],c=0;!u&&c<i.length;c++)u=o[i[c]+"Request"+a],s=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!u||!s){var l=0,d=0,f=[];u=function(e){if(0===f.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},s=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=s}}).call(t,n(13))},13:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){"use strict";function r(e){n(17)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),i=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-ripple",class:e.rippleClasses,on:{"&touchstart":function(t){t.stopPropagation(),e.touchStartCheck(t)},"&touchmove":function(t){t.stopPropagation(),e.touchMoveCheck(t)},"&mousedown":function(t){t.stopPropagation(),e.startRipple(t)}}},[e._t("default"),e._v(" "),e.isDisabled?e._e():n("transition",{attrs:{name:"md-ripple"},on:{"after-enter":e.clearWave}},[e.animating?n("span",{ref:"rippleWave",staticClass:"md-ripple-wave",class:e.waveClasses,style:e.waveStyles}):e._e()])],2)},u=[],s={render:a,staticRenderFns:u},c=s,l=n(0),d=r,f=l(i.a,c,!1,d,null,null);t.default=f.exports},15:function(e,t,n){(function(t){(function(){var n,r,o,i,a,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),u=1e9*t.uptime(),a=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(16))},16:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){p&&h&&(p=!1,h.length?m=h.concat(m):v=-1,m.length&&u())}function u(){if(!p){var e=o(a);p=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,p=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}})();var h,m=[],p=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new s(e,t)),1!==m.length||p||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},17:function(e,t){},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(12),u=r(a),s=n(1),c=r(s);t.default=new c.default({name:"MdRipple",props:{mdActive:[Event,Boolean],mdDisabled:Boolean,mdCentered:Boolean},data:function(){return{eventType:null,waveStyles:null,animating:!1,touchTimeout:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n="mouseevent"===e.constructor.name.toLowerCase();this.mdCentered&&t&&e?(this.startRipple({type:"mousedown"}),this.$emit("update:mdActive",!1)):n&&(this.startRipple(e),this.$emit("update:mdActive",!1))}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,u.default)(o(regeneratorRuntime.mark((function n(){var r,o,i,a,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.eventType,o=t.isDisabled,i=t.mdCentered,o||r&&r!==e.type){n.next=10;break}return a=t.getSize(),u=null,u=i?t.getCenteredPosition(a):t.getHitPosition(e,a),n.next=7,t.clearWave();case 7:t.eventType=e.type,t.animating=!0,t.applyStyles(u,a);case 10:case"end":return n.stop()}}),n,t)}))))},applyStyles:function(e,t){t+="px",this.waveStyles=i({},e,{width:t,height:t})},clearWave:function(){return this.waveStyles=null,this.animating=!1,this.$nextTick()},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,o=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,o=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:o-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},2:function(t,n){t.exports=e},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(7);var o=n(5),i=r(o),a=n(4),u=r(a),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"]}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e};t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},337:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=r(o),a=n(338),u=r(a);t.default=function(e){(0,i.default)(e),e.component(u.default.name,u.default)}},338:function(e,t,n){"use strict";function r(e){n(339)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(340),i=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.$mdActiveTheme,e.checkClasses]},[n("div",{staticClass:"md-switch-container",on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[n("div",{staticClass:"md-switch-thumb"},[n("md-ripple",{attrs:{"md-centered":"","md-active":e.rippleActive,"md-disabled":e.disabled},on:{"update:mdActive":function(t){e.rippleActive=t}}},[n("input",e._b({attrs:{type:"checkbox"}},"input",{id:e.id,name:e.name,disabled:e.disabled,required:e.required,value:e.value},!1))])],1)]),e._v(" "),e.$slots.default?n("label",{staticClass:"md-switch-label",attrs:{for:e.id},on:{click:function(t){t.preventDefault(),e.toggleCheck(t)}}},[e._t("default")],2):e._e()])},u=[],s={render:a,staticRenderFns:u},c=s,l=n(0),d=r,f=l(i.a,c,!1,d,null,null);t.default=f.exports},339:function(e,t){},340:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(68),u=r(a),s=n(11),c=r(s);t.default=new i.default({name:"MdSwitch",mixins:[u.default],props:{id:{type:String,default:function(){return"md-switch-"+(0,c.default)()}}}})},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]');t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1,themeTarget:document.documentElement}},computed:{fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget;this.enabled?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors())}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t=this;if(e){var n=e.mdTheme;return (function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==n?o:e(i)}return t.theme})(e.$parent)}return null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t="#fff";if(e){t=window.getComputedStyle(document.documentElement).getPropertyValue("--"+e+"-primary")}t&&(this.setMicrosoftColors(t),this.setThemeColors(t),this.setMaskColors(t))}},created:function(){var e=this;this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},428:function(e,t,n){e.exports=n(337)},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive};var r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===h}function a(e){return Array.isArray(e)?[]:{}}function u(e,t){return t&&!1===t.clone||!d(e)?e:l(a(e),e,t)}function s(e,t,n){return e.concat(t).map((function(e){return u(e,n)}))}function c(e,t,n){var r={};return d(e)&&Object.keys(e).forEach((function(t){r[t]=u(e[t],n)})),Object.keys(t).forEach((function(o){d(t[o])&&e[o]?r[o]=l(e[o],t[o],n):r[o]=u(t[o],n)})),r}function l(e,t,n){var r=Array.isArray(t),o=Array.isArray(e),i=n||{arrayMerge:s};if(r===o)return r?(i.arrayMerge||s)(e,t,n):c(e,t,n);return u(t,n)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){return r(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,h=f?Symbol.for("react.element"):60103;l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})};var m=l;t.default=m},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={components:{MdRipple:o.default},props:{model:[String,Number,Boolean,Array],value:{type:[String,Number,Boolean],default:"on"},name:[String,Number],required:Boolean,disabled:Boolean},model:{prop:"model",event:"change"},data:function(){return{rippleActive:!1}},computed:{isSelected:function(){return this.isModelArray?this.model.includes(this.value):this.isModelBoolean&&"on"===this.value?this.model:this.model===this.value},isModelArray:function(){return Array.isArray(this.model)},isModelBoolean:function(){return"boolean"==typeof this.model},checkClasses:function(){return{"md-checked":this.isSelected,"md-disabled":this.disabled,"md-required":this.required}}},methods:{removeItemFromModel:function(e){var t=e.indexOf(this.value);-1!==t&&e.splice(t,1)},handleArrayCheckbox:function(){var e=this.model;this.isSelected?this.removeItemFromModel(e):e.push(this.value),this.$emit("change",e)},handleStringCheckbox:function(){this.isSelected?this.$emit("change",null):this.$emit("change",this.value)},handleBooleanCheckbox:function(){this.$emit("change",!this.model)},toggleCheck:function(){this.disabled||(this.rippleActive=!0,this.isModelArray?this.handleArrayCheckbox():this.isModelBoolean?this.handleBooleanCheckbox():this.handleStringCheckbox())}}}},7:function(e,t){}})}));