(self.webpackChunktest=self.webpackChunktest||[]).push([[521],{2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},4575:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},9100:function(t,e,r){var n=r(9489),o=r(7067);function i(e,r,a){return o()?(t.exports=i=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.default=t.exports,t.exports.__esModule=!0),i.apply(null,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},3913:function(t){function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6525:function(t,e,r){var n=r(8331);function o(e,r,i){return"undefined"!=typeof Reflect&&Reflect.get?(t.exports=o=Reflect.get,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=o=function(t,e,r){var o=n(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(r):i.value}},t.exports.default=t.exports,t.exports.__esModule=!0),o(e,r,i||e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},9754:function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,e(r)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},2205:function(t,e,r){var n=r(9489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},430:function(t){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},t.exports.default=t.exports,t.exports.__esModule=!0},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(s){u=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8585:function(t,e,r){var n=r(8).default,o=r(1506);t.exports=function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),o=r(3884),i=r(379),a=r(521);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},8331:function(t,e,r){var n=r(9754);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t},t.exports.default=t.exports,t.exports.__esModule=!0},8551:function(t,e,r){var n=r(2858),o=r(6860),i=r(379),a=r(521);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},5957:function(t,e,r){var n=r(9754),o=r(9489),i=r(430),a=r(9100);function u(e){var r="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return a(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0,u(e)}t.exports=u,t.exports.default=t.exports,t.exports.__esModule=!0},33:function(t){var e,r,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,s=[],c=!1,l=-1;function f(){c&&u&&(c=!1,u.length?s=u.concat(s):l=-1,s.length&&p())}function p(){if(!c){var t=a(f);c=!0;for(var e=s.length;e;){for(u=s,s=[];++l<e;)u&&u[l].run();l=-1,e=s.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new m(t,e)),1!==s.length||c||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:function(t,e,r){var n=r(5112),o=r(30),i=r(3070),a=n("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,r){var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var u,s=n(e),c=o(s.length),l=i(a,c);if(t&&r!=r){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},1412:function(t,e,r){var n=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),void 0===e?Array:e}},5417:function(t,e,r){var n=r(1412);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,r){var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),u=a.f,s=i.f,c=0;c<r.length;c++){var l=r[c];n(t,l)||u(t,l,s(e,l))}}},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,i=r(7854),a=r(8113),u=i.process,s=i.Deno,c=u&&u.versions||s&&s.version,l=c&&c.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),u=r(3505),s=r(9920),c=r(4705);t.exports=function(t,e){var r,l,f,p,m,d=t.target,g=t.global,h=t.stat;if(r=g?n:h?n[d]||u(d,{}):(n[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(m=o(r,l))&&m.value:r[l],!c(g?l:d+(h?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6790:function(t,e,r){"use strict";var n=r(3157),o=r(7466),i=r(9974),a=function(t,e,r,u,s,c,l,f){for(var p,m=s,d=0,g=!!l&&i(l,f,3);d<u;){if(d in r){if(p=g?g(r[d],d,e):r[d],c>0&&n(p))m=a(t,e,p,o(p.length),m,c-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=p}m++}d++}return m};t.exports=a},9974:function(t,e,r){var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:function(t,e,r){var n=r(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(n[t]):n[t]&&n[t][e]}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,e,r){var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:function(t){t.exports={}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,r){var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:function(t,e,r){var n,o,i,a=r(8536),u=r(7854),s=r(111),c=r(8880),l=r(6656),f=r(5465),p=r(6200),m=r(3501),d="Object already initialized",g=u.WeakMap;if(a||f.state){var h=f.state||(f.state=new g),y=h.get,x=h.has,b=h.set;n=function(t,e){if(x.call(h,t))throw new TypeError(d);return e.facade=t,b.call(h,t,e),e},o=function(t){return y.call(h,t)||{}},i=function(t){return x.call(h,t)}}else{var v=p("state");m[v]=!0,n=function(t,e){if(l(t,v))throw new TypeError(d);return e.facade=t,c(t,v,e),e},o=function(t){return l(t,v)?t[v]:{}},i=function(t){return l(t,v)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=u[a(t)];return r==c||r!=s&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(5005),o=r(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return"function"==typeof e&&Object(t)instanceof e}},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:function(t,e,r){var n,o=r(9670),i=r(6048),a=r(748),u=r(3501),s=r(490),c=r(317),l=r(6200),f=l("IE_PROTO"),p=function(){},m=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},g=function(){try{n=new ActiveXObject("htmlfile")}catch(o){}var t,e;g="undefined"!=typeof document?document.domain&&n?d(n):((e=c("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F):d(n);for(var r=a.length;r--;)delete g.prototype[a[r]];return g()};u[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=g(),void 0===e?r:i(r,e)}},6048:function(t,e,r){var n=r(9781),o=r(3070),i=r(9670),a=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),u=n.length,s=0;u>s;)o.f(t,r=n[s++],e[r]);return t}},3070:function(t,e,r){var n=r(9781),o=r(4664),i=r(9670),a=r(4948),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=a(e),i(r),o)try{return u(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(5296),i=r(9114),a=r(5656),u=r(4948),s=r(6656),c=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=u(e),c)try{return l(t,e)}catch(r){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,r){var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,u=o(t),s=0,c=[];for(r in u)!n(a,r)&&n(u,r)&&c.push(r);for(;e.length>s;)n(u,r=e[s++])&&(~i(c,r)||c.push(r));return c}},1956:function(t,e,r){var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:function(t,e,r){var n=r(111);t.exports=function(t,e){var r,o;if("string"===e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if("string"!==e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},1320:function(t,e,r){var n=r(7854),o=r(8880),i=r(6656),a=r(3505),u=r(2788),s=r(9909),c=s.get,l=s.enforce,f=String(String).split("String");(t.exports=function(t,e,r,u){var s,c=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,m=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(s=l(r)).source||(s.source=f.join("string"==typeof e?e:""))),t!==n?(c?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854);t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6091:function(t,e,r){var n=r(7293),o=r(1361);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3111:function(t,e,r){var n=r(4488),o=r(1340),i="["+r(1361)+"]",a=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),s=function(t){return function(e){var r=o(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},1400:function(t,e,r){var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:function(t,e,r){var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,r){var n=r(111),o=r(2190),i=r(2140),a=r(5112)("toPrimitive");t.exports=function(t,e){if(!n(t)||o(t))return t;var r,u=t[a];if(void 0!==u){if(void 0===e&&(e="default"),r=u.call(t,e),!n(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:String(e)}},1340:function(t,e,r){var n=r(2190);t.exports=function(t){if(n(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},9711:function(t){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(6656),a=r(9711),u=r(133),s=r(3307),c=o("wks"),l=n.Symbol,f=s?l:l&&l.withoutSetter||a;t.exports=function(t){return i(c,t)&&(u||"string"==typeof c[t])||(u&&i(l,t)?c[t]=l[t]:c[t]=f("Symbol."+t)),c[t]}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6535:function(t,e,r){"use strict";var n=r(2109),o=r(6790),i=r(7908),a=r(7466),u=r(3099),s=r(5417);n({target:"Array",proto:!0},{flatMap:function(t){var e,r=i(this),n=a(r.length);return u(t),(e=s(r,0)).length=o(e,r,r,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},9244:function(t,e,r){r(1223)("flatMap")},5438:function(t,e,r){var n=r(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,e){for(var r,n,o=0,u=0,s=arguments.length,c=0;u<s;)c<(r=i(arguments[u++]))?(o=o*(n=c/r)*n+1,c=r):o+=r>0?(n=r/c)*n:r;return c===1/0?1/0:c*a(o)}})},8702:function(t,e,r){"use strict";var n=r(2109),o=r(3111).end,i=r(6091)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;n({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},5674:function(t,e,r){"use strict";var n=r(2109),o=r(3111).start,i=r(6091)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},8258:function(t,e,r){"use strict";r(7294);var n=r(3587),o=r(396),i=r(6767),a=n.default.section.withConfig({displayName:"HeaderImage__Wrapper",componentId:"sc-xpo5q6-0"})(['h1{font-family:"Roboto Condensed",sans-serif;text-transform:uppercase;position:absolute;top:50%;left:40%;transform:translate(-50%,-50%);color:white;font-weight:300;font-size:3.5rem;@media (min-width:576px){font-size:6rem;}}img{filter:brightness(65%);height:calc(50vh);width:calc(300vh);object-fit:cover;}.section-one{position:relative;background-color:#f8f9fa;}.section-one:after{content:"";width:100%;height:230px;padding-bottom:5%;background:#fff;z-index:1;bottom:-230px;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;background-color:#f8f9fa;}']);e.Z=function(t){var e=t.title;return(0,i.tZ)(a,null,(0,i.tZ)("div",{className:"header-image section-one"},(0,i.tZ)(o.S,{src:"../../static/images/other/home-slider-1.jpg",objectFit:"cover",alt:e,__imageData:r(2566)}),(0,i.tZ)("h1",null,e)))}},6835:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(7294),o=r(3587),i=r(5414),a=r(396),u=r(3639),s=r(994),c=r(7408),l=r(8258),f=r(6947),p=r(2396),m=r(6767),d=o.default.section.withConfig({displayName:"Info__Wrapper",componentId:"sc-vomspu-0"})([""]),g=function(t){return(0,m.tZ)(d,null,(0,m.tZ)(u.Z,{className:" info"},(0,m.tZ)(s.Z,{xs:2,md:2},(0,m.tZ)(c.Z,{className:"my-3"},(0,m.tZ)("h5",null,"PLACE NAMES"),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"OTHER NAMES"),": ",t.other_names),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"EGYPTIAN NAMES"),": ",t.egyptian_name),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"COPTIC NAMES"),": ",t.coptic_name),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"GREEK NAMES"),": ",t.greek_name),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"LATIN NAMES"),": ",t.latin_name),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"ARABIC NAMES"),": ",t.arabic_name),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"ARABIC TRANSLATION"),": ",t.arabic_transl)),(0,m.tZ)(c.Z,{className:"my-3"},(0,m.tZ)("h5",null,"GEO INFO"),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"AREA"),": ",t.area),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"PAThs ID"),":",t.paths_id.split(",").map((function(t){return(0,m.tZ)(n.Fragment,null,(0,m.tZ)("a",{href:"https://atlas.paths-erc.eu/places/"+t},t))}))),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"PLEIADES ID"),":"," ",t.pleiades_id.split(",").map((function(t,e){return(0,m.tZ)(n.Fragment,{key:e},(0,m.tZ)("a",{href:"https://pleiades.stoa.org/places/"+t},t)," ")}))),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"TRISMEGISTOS GeoID"),":"," ",t.tm_id.split(",").map((function(t){return(0,m.tZ)(n.Fragment,null," ",(0,m.tZ)("a",{href:"https://www.trismegistos.org/geo/detail.php?quick="+t},t)," ")}))),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"TOPOSTEXT ID"),":",t.topotext_id.split(",").map((function(t){return(0,m.tZ)(n.Fragment,null,(0,m.tZ)("a",{href:"https://topostext.org/place/"+t},t))}))))),(0,m.tZ)(s.Z,{xs:2,md:2},(0,m.tZ)(c.Z,null,(0,m.tZ)("h5",null,"SITE INFO"),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"TYPOLOGY"),": ",t.typology),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"DATE FROM"),": ",t.year_from),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"DATE TO"),": ",t.year_to),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"DATING CRITERIA"),": ",t.dating_criteria),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"EPISCOPAL SEE FROM"),":"," ",t.episcopal_see_from_year),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"NOTES ON EPISCOPAL SEE"),":"," ",t.notes_on_episcopal_see)),(0,m.tZ)(c.Z,null,(0,m.tZ)("h5",null,"ABOUT"),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"STATUS"),": ",t.status),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"EDITOR"),": ",t.editors),(0,m.tZ)("h6",null,(0,m.tZ)("strong",null,"LAST MODIFIED"),": ",t.date)))))},h=r(9910),y=r.n(h);function x(t){var e=(0,n.useRef)(null),r=(0,n.useRef)(null),o=(0,n.useState)(t.lng)[0],i=(0,n.useState)(t.lat)[0],a=(0,n.useState)(t.popupHtml)[0],u=(0,n.useState)(t.zoom)[0],s=(0,n.useState)("xwCiDuVHYc2DK17DxWps")[0];return(0,n.useEffect)((function(){r.current||(r.current=new(y().Map)({container:e.current,style:"https://api.maptiler.com/maps/streets/style.json?key="+s,center:[o,i],zoom:u,scrollZoom:!1}),r.current.addControl(new(y().NavigationControl),"top-right"),new(y().Marker)({color:"#822433"}).setLngLat([o,i]).setPopup(new(y().Popup)({offset:50}).setHTML(a)).addTo(r.current))})),(0,m.tZ)(b,null,(0,m.tZ)("div",{className:"map-wrap"},(0,m.tZ)("div",{ref:e,className:"map"})))}var b=o.default.section.withConfig({displayName:"MapGl__Wrapper",componentId:"sc-1yhazcr-0"})(['.map-wrap{position:relative;width:100%;height:calc(50vh - 100px);}.map{position:absolute;width:100%;height:100%;}.maplibregl-popup{width:150px;height:50px;border-radius:50%;cursor:pointer;}.maplibregl-popup-content{font-family:"Roboto Condensed",sans-serif;font-weight:300;font-size:1rem;color:#777777;text-align:center;padding-top:1.rem;padding-bottom:1.2rem;}']),v=r(3260),Z=r(4401),w=r(1500),_=o.default.section.withConfig({displayName:"SitesLayout__Wrapper",componentId:"sc-otx6vw-0"})(['section{position:relative;z-index:2;}.section.map{position:relative;padding-top:1rem;background-color:#f8f9fa;}.section.map:after{content:"";width:100%;height:240px;background:#fff;z-index:-1;bottom:-220px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.section.methods:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-240px;background-color:#fff;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.bottom-slant-gray{position:relative;padding-bottom:10%;background-color:#f8f9fa;}.bottom-slant-gray:before{content:"";width:100%;height:240px;background:#f8f9fa;z-index:-1;top:0px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}']),S=function(t){var e=t.data,r=e.markdownRemark,o=e.allFile.edges;return(0,m.tZ)(n.Fragment,null,(0,m.tZ)(i.q,null,(0,m.tZ)("title",null,r.frontmatter.title),(0,m.tZ)("meta",{name:"keywords",content:"sla, sacri lapides aegypti, egypt, egyptology, archaeology, late antique egypt, egyptian topography"}),(0,m.tZ)("meta",{name:"robots",description:"index"})),(0,m.tZ)(p.Z,null),(0,m.tZ)(l.Z,{title:r.frontmatter.title}),(0,m.tZ)(_,null,(0,m.tZ)("section",{className:"section map"},(0,m.tZ)(u.Z,null,(0,m.tZ)(s.Z,{className:"mx-5"},(0,m.tZ)(v.Z,{title:"general information",align:"right"})),(0,m.tZ)(s.Z,{xs:1,md:2,className:"mx-5"},(0,m.tZ)(c.Z,null,(0,m.tZ)(g,{other_names:r.frontmatter.other_names,egyptian_name:r.frontmatter.egyptian_name,greek_name:r.frontmatter.greek_name,coptic_name:r.frontmatter.coptic_name,latin_name:r.frontmatter.latin_name,arabic_name:r.frontmatter.arabic_name,arabic_transl:r.frontmatter.arabic_transl,area:r.frontmatter.area,paths_id:r.frontmatter.paths_id,pleiades_id:r.frontmatter.pleiades_id,tm_id:r.frontmatter.tm_id,topotext_id:r.frontmatter.topotext_id,typology:r.frontmatter.typology,dating_criteria:r.frontmatter.dating_criteria,year_from:r.frontmatter.year_from,year_to:r.frontmatter.year_to,episcopal_see_from_year:r.frontmatter.episcopal_see_from_year,notes_on_episcopal_see:r.frontmatter.notes_on_episcopal_see,status:r.frontmatter.status,editors:r.frontmatter.editors,date:r.frontmatter.date})),(0,m.tZ)(c.Z,{className:"my-5"},(0,m.tZ)(x,{className:"map",lng:r.frontmatter.lng,lat:r.frontmatter.lat,zoom:r.frontmatter.zoom,popupHtml:r.frontmatter.title}))))),(0,m.tZ)("section",{className:"section methods"},(0,m.tZ)(u.Z,{className:"indice"},(0,m.tZ)(s.Z,{className:"mx-5"},(0,m.tZ)(v.Z,{title:r.frontmatter.title})),(0,m.tZ)(s.Z,{xs:1,className:"mx-5"},(0,m.tZ)(c.Z,{sm:4},(0,m.tZ)("ul",{className:"ul-indice"},r.headings.map((function(t,e){return(0,m.tZ)("li",{key:e},(0,m.tZ)("a",{href:"#"+t.id,className:"indice-h"+t.depth},t.value))})))),(0,m.tZ)(c.Z,{sm:8},(0,m.tZ)("div",{className:"text",dangerouslySetInnerHTML:{__html:r.html}}))))),(0,m.tZ)("section",{className:"section bottom-slant-gray"},(0,m.tZ)(u.Z,{className:"gallery"},(0,m.tZ)(s.Z,{className:"mx-5"},(0,m.tZ)(v.Z,{title:"Gallery",align:"right"})),(0,m.tZ)(w.ZP,null,(0,m.tZ)(w.Iv,null,(0,m.tZ)(u.Z,null,(0,m.tZ)(s.Z,{xs:1,md:3},o.map((function(t,e){return(0,m.tZ)(c.Z,{key:e},(0,m.tZ)("a",{className:"pointer",href:t.node.childImageSharp.gatsbyImageData.src},(0,m.tZ)(a.G,{image:t.node.childImageSharp.gatsbyImageData,style:{margin:"3rem 0",height:"300px"},imgStyle:{objectFit:"scale-down"},alt:t.node.base.split(".").slice(0,-1).join(".")}),(0,m.tZ)("p",{className:"caption"},t.node.base.split(".").slice(0,-1).join("."))))})))))))),(0,m.tZ)(Z.Z,{showBelow:250}),(0,m.tZ)(f.Z,null)))}},2566:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg","srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/e83fb/home-slider-1.jpg 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/08786/home-slider-1.jpg 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg 5846w","sizes":"(min-width: 5846px) 5846px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/a1e3e/home-slider-1.webp 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/92a68/home-slider-1.webp 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/fb47c/home-slider-1.webp 5846w","type":"image/webp","sizes":"(min-width: 5846px) 5846px, 100vw"}]},"width":5846,"height":4001.9999999999995}')}}]);
//# sourceMappingURL=component---src-templates-sites-layout-js-24bc5aff76baa0218a77.js.map